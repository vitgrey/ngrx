import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user';
import { UserSend } from 'src/app/store/actions/user.actions';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss']
})
export class UserApiComponent implements OnInit {

  public users$: Observable<User[]>;
  public userName: string = '';

  constructor(
    private store: Store<{ users: User[] }>,
    private messageService: MessageService
  ) {
    this.users$ = store.pipe(select('users'));
  }

  sendUserMessage(inputValue: string) {
    this.userName = inputValue;
    this.messageService.sendMessage(this.userName);
  }

  public sendUser() {
    this.store.dispatch(new UserSend());
  }

  ngOnInit(): void {
  }

}
