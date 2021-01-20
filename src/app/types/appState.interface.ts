import { IAuthStateInterface } from '../auth/types/authState.interface';
import {IHomeStateInterface} from '../home/types/homeState.interface';

export interface IAppStateInterface {
  'auth': IAuthStateInterface;
  'home': IHomeStateInterface;
}
