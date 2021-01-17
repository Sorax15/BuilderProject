import { IAuthErrorInterface } from './authError.interface';
import { IAuthResponseInterface } from './authResponse.interface';

export interface IAuthStateInterface {
  isSubmitting: boolean;
  user: IAuthResponseInterface | null;
  error: IAuthErrorInterface | null;
}
