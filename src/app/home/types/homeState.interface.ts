import { IPostInterface } from './post.interface';

export interface IHomeStateInterface {
  posts?: IPostInterface[] | null;
  isSubmitting: boolean;
}
