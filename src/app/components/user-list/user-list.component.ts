import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user';
import { select, Store } from '@ngrx/store';
import { UserRemove } from 'src/app/store/actions/user.actions';
import { UserEdit } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public users$: Observable<User[]>;

  constructor(
    private store: Store<{ users: User[] }>
  ) {
    this.users$ = store.pipe(select('users'));
  }

  public removeUser(userIndex): void {
    this.store.dispatch(new UserRemove(userIndex));
  }

  public editUser(userIndex): void {
    this.store.dispatch(new UserEdit(userIndex));
  }

}
