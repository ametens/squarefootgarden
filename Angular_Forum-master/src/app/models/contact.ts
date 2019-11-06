import {User} from './user';

export enum ContactType {
  phone = 'Phone',
  email = 'Email',
  mobile = 'Mobile'
}
export class Contact {
  id: number;
  userId: number;
  user: User;
  type: ContactType;
}
