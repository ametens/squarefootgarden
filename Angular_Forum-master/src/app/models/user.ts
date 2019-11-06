import {Contact} from './contact';
import {Group} from './group';
import {Role} from './role';

export class User {
  id: number;
  name: string;
  password: string;

  groupId: number;
  group: Group;
  simpleRoles: Role[];
  get roles(): Role[] {
    return [
      ...this.simpleRoles,
      ...this.group.roles
    ];
  }
  createAt: Date;
  updateAt: Date;
  lastConnect: Date;

  address: string;
  contacts: Contact[];

  isNew: boolean;

  constructor() {
    this.contacts = [];
    this.simpleRoles = [];
    this.isNew = false;
  }
}
