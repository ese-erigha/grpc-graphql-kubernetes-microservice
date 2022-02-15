import { Container } from 'inversify';
import { TYPES } from './types';
import { IUserService, UserService, UserResolver } from '../graphql/user';
import {
  CommentService,
  ICommentService,
  CommentResolver
} from '../graphql/comment';
import {
  IAuthenticationService,
  AuthenticationService,
  AuthenticationResolver,
  JWTService,
  IJWTService
} from '../graphql/authentication';
import { PostResolver } from '../graphql/post';

// Bind Services
const container = new Container();
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<ICommentService>(TYPES.IUserService).to(CommentService);
container.bind<IJWTService>(TYPES.IJWTService).to(JWTService);
container
  .bind<IAuthenticationService>(TYPES.IAuthenticationService)
  .to(AuthenticationService);

// Bind Resolvers
container
  .bind<AuthenticationResolver>(AuthenticationResolver)
  .to(AuthenticationResolver)
  .inSingletonScope();

container.bind<UserResolver>(UserResolver).to(UserResolver).inSingletonScope();
container.bind<PostResolver>(PostResolver).to(PostResolver).inSingletonScope();
container
  .bind<CommentResolver>(CommentResolver)
  .to(CommentResolver)
  .inSingletonScope();
export default container;
