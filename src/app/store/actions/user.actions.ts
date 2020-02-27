import { Action } from '@ngrx/store';

export enum UserActionType {
  Add = '[User Component] Add',
  Remove = '[User Component] Remove',
  Edit = '[User Component] Edit'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
  index?: any;
}

export class UserAdd implements ActionEx {
  readonly type = UserActionType.Add;
  constructor(public payload: any) {
  }
}

export class UserRemove implements ActionEx {
  readonly type = UserActionType.Remove;
  constructor(public payload: any) {
  }
}

export class UserEdit implements ActionEx {
  readonly type = UserActionType.Edit;
  constructor(public payload: any, public index: any) {
  }
}
