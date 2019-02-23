"use strict";

exports.__esModule = true;
exports.useMutation = useMutation;

var _ApolloContext = require("./ApolloContext");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useMutation(mutation, baseOptions) {
  var client = (0, _ApolloContext.useApolloClient)();
  return function (options) {
    return client.mutate(_extends({
      mutation: mutation
    }, baseOptions, options));
  };
}