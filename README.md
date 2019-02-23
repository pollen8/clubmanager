# Front end:

```
cd client
npm start
```

# Backend: 
# Run server (MySQL and Prisma) & Start the GraphQL server

```
cd server
docker-compose up -d && npm run start
```

# Updating the database structure

Edit `prisma/dataodel.prisma` then

```
prisma deploy
```


Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 5. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./src/schema.graphql`](./src/schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all published posts and their authors

```graphql
query {
  feed {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new user

```graphql
mutation {
  signupUser(
    name: "Sarah"
    email: "sarah@prisma.io"
  ) {
    id
  }
}
```

#### Create a new draft

```graphql
mutation {
  createDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorEmail: "alice@prisma.io"
  ) {
    id
    published
  }
}
```

#### Publish an existing draft

```graphql
mutation {
  publish(id: "__POST_ID__") {
    id
    published
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

#### Search for posts with a specific title or content

```graphql
{
  filterPosts(searchString: "graphql") {
    id
    title
    content
    published 
    author {
      id
      name
      email
    }
  }
}
```

#### Retrieve a single post

```graphql
{
  post(id: "__POST_ID__") {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

#### Delete a post

```graphql
mutation {
  deletePost(id: "__POST_ID__") {
    id
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

</Details>

### 6. Changing the GraphQL schema

After you made changes to `schema.graphql`, you need to update the generated types in `./src/generated/graphqlgen.ts` and potentially also adjust the resolver implementations in `./src/resolvers`:

```
yarn generate
```

This invokes [`graphqlgen`](https://github.com/prisma/graphqlgen) and updates `./src/generated/graphqlgen.ts` to incorporate the schema changes in your TS type definitions. It also generates scaffolded resolvers in `./src/generated/tmp/resolvers` that you might need to copy and paste into `./src/resolvers`. 

## Next steps

- [Use Prisma with an existing database](https://www.prisma.io/docs/-t003/)
- [Explore the Prisma client API](https://www.prisma.io/client/client-typescript)
- [Learn more about the GraphQL schema](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e/)