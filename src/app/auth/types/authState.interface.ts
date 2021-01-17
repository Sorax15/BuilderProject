import { ILoginRequestInterface } from './loginRequest.interface';
import { IRegisterStateInterface } from './registerState.interface';
import { ICurrentStateInterface } from './currentState.interface';

export interface IAuthStateInterface {
  loginReducer: ILoginRequestInterface;
  registerReducer: IRegisterStateInterface;
  currentReducer: ICurrentStateInterface;
}
