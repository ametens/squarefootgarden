import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Forum';
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]>;

  // formulaire
  id: number;
  name: string;
  password: string;

  ngOnInit(): void {
    this.users$ = this.usersSubject.asObservable();

    this.usersSubject.next([
      {id: 1, name: 'Ovyn', password: 'Flavian'} as User,
      {id: 2, name: 'Ovyn1', password: 'Flavian1'} as User,
      {id: 3, name: 'Ovyn2', password: 'Flavian2'} as User,
      {id: 4, name: 'Ovyn3', password: 'Flavian3'} as User,
      {id: 5, name: 'Ovyn4', password: 'Flavian4'} as User,
      {id: 6, name: 'Ovyn5', password: 'Flavian5'} as User,
      {id: 7, name: 'Ovyn6', password: 'Flavian6'} as User,
      {id: 8, name: 'Ovyn7', password: 'Flavian7'} as User,
      {id: 9, name: 'Ovyn8', password: 'Flavian8'} as User,
      {id: 10, name: 'Ovyn9', password: 'Flavian9'} as User,
    ]);

    this.users$.subscribe(data => {
      data.forEach((u, index, array) => {
        if (index < array.length - 1) {
          u.isNew = false;
        }
      });
    });
  }

  addUser() {
    const newUser = new User();
    newUser.id = this.id;
    newUser.name = this.name;
    newUser.password = this.password;
    newUser.isNew = true;

    this.usersSubject.next([...this.usersSubject.getValue(), newUser]);
  }
}
