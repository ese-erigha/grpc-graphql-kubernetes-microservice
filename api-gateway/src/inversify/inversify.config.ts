import { Container } from 'inversify';
import { TYPES } from './types';
import { IUserService, UserService, UserResolver } from '../graphql/user';
import {
  IAuthenticationService,
  AuthenticationService,
  AuthenticationResolver,
  JWTService,
  IJWTService
} from '../graphql/authentication';

// Bind Services
const container = new Container();
container.bind<IUserService>(TYPES.IUserService).to(UserService);
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
export default container;