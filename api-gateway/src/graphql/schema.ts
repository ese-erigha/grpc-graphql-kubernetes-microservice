import { buildSchema } from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import { Container } from 'typedi';
import { PostResolver } from './post';
import { UserResolver } from './user';
import { AuthenticationResolver } from './authentication';
import { authChecker } from './graphql-middleware';

export default async function buildGraphQLSchema(): Promise<GraphQLSchema> {
  const resolvers = [
    PostResolver,
    UserResolver,
    AuthenticationResolver
  ] as const;

  const schema = await buildSchema({
    resolvers,
    container: Container,
    authChecker
  });
  return schema;
}
