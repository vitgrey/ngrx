import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user';
import { Store, select } from '@ngrx/store';
import { UserAdd } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  public users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select('users'));
  }

  public addUser(userName: string) {
    const user = new User();
    user.name = userName;
    this.store.dispatch(new UserAdd(user));
  }

}
