import { Action } from '@ngrx/store';

export enum UserActionType {
  Add = '[User Component] Add',
  Remove = '[User Component] Remove',
  Edit = '[User Component] Edit',
  Send = '[User Component] Send',
  Error = '[User Component] Error'
}

export class ActionEx implements Action {
  readonly type;
  payload?: any;
  index?: any;
}

export class UserAdd implements ActionEx {
  readonly type = UserActionType.Add;
  constructor(public payload: any) {
  }
}

export class UserSend implements ActionEx {
  readonly type = UserActionType.Send;
  constructor() {
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

export class UserError implements ActionEx {
  readonly type = UserActionType.Error;
}
