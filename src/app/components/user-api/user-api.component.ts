import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user';
import { UserSend } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss']
})
export class UserApiComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select('users'));
  }

  public userGet() {
    this.store.dispatch(new UserSend());
  }

  ngOnInit(): void {
  }

}
