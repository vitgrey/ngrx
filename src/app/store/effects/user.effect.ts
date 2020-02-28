import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subscription, of } from 'rxjs';
import { UserActionType, UserAdd, UserError } from '../actions/user.actions';
import { User } from '../models/user';
import { MessageService } from 'src/app/services/message.service';

@Injectable()
export class TestEffects {

  public userName: string = '';
  public subscription: Subscription;
  public url = 'https://api.github.com/search/users?q=';

  constructor(
    private httpClient: HttpClient,
    private actions$: Actions,
    private messageService: MessageService
  ) {
    // subscribe to user-api component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.userName = message['text'];
      } else {
        this.userName = '';
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  @Effect()
  test$: Observable<any> = this.actions$.pipe(
    ofType(UserActionType.Send),
    switchMap(() => {
      return this.httpClient.get<any>(this.url + this.userName)
        .pipe(
          map((data) => {
            const user = new User();
            user.name = data.items[0].login;
            console.log(user)
            return new UserAdd(user);
          }),
          catchError(() => of(new UserError))
        );
    })
  );
}
