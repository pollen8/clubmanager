import {
  ApolloServer,
  AuthenticationError,
  gql,
} from 'apollo-server';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';

import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';

const client = jwksClient({
  jwksUri: `https://<YOUR_AUTH0_DOMAIN>/.well-known/jwks.json`
});

function getKey(header: any, cb: any) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options: any = {
  audience: 'kNgXEPRYCGsdlTlrZnPZGtK7GeDRgnbu',
  issuer: `https://bhp.eu.auth0.com/`,
  algorithms: ['RS256']
};

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context:
    ({ req }: any) => {
      console.log('auth req', req);
      const token = req.headers.authorization;
      const user = new Promise((resolve, reject) => {
        jwt.verify(token, getKey, options, (err, decoded: any) => {
          console.log('auth', err, decoded);
          if (err) {
            return reject(err);
          }
          resolve(decoded.email);
        });
      });

      return {
        user,
        prisma,
      };
    },
});


server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});

