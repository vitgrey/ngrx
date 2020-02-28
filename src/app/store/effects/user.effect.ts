import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, tap, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { UserActionType, UserSend, UserAdd } from '../actions/user.actions'; 


@Injectable()
export class TestEffects {

  constructor(
    private httpClient: HttpClient,
    private actions$: Actions
  ) {}

  @Effect()
  test$: Observable<any> = this.actions$.pipe(
    ofType(UserActionType.Send),
    switchMap(() => {
      console.log('effect');
      return this.httpClient.get<string>( `https://api.github.com/users?since=${Math.round(
        Math.random() * 100)}`)
        .pipe(
          map((data) => {
            console.log(data);
            return new UserAdd(data[2]);
          })
        );
    })
  );
}
