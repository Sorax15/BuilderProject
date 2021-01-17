import { IAuthResponseInterface } from './authResponse.interface';
import { IAuthErrorInterface } from './authError.interface';

export interface ILoginStateInterface {
  isSubmitting: boolean;
  user: IAuthResponseInterface | null;
  error: IAuthErrorInterface | null;
}
