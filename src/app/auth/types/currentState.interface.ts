import { IAuthResponseInterface } from './authResponse.interface';
import { IAuthErrorInterface } from './authError.interface';

export interface ICurrentStateInterface {
  isSubmitting: boolean;
  user: IAuthResponseInterface | null;
  error: IAuthErrorInterface | null;
}
