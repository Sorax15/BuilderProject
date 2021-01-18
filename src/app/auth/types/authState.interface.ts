import { IAuthResponseInterface } from './authResponse.interface';
import { IAuthErrorInterface } from './authError.interface';

export interface IAuthStateInterface {
  isSubmitting: boolean;
  user: IAuthResponseInterface | null;
  error: IAuthErrorInterface | null;
  isLoggedIn: boolean;
}
