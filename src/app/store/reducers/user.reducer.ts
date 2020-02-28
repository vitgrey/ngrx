import { ActionEx, UserActionType } from '../actions/user.actions';

export const initialState = [];

export function UserReducer(state = initialState, action: ActionEx) {

  switch (action.type) {

    case UserActionType.Add:
      return [...state, action.payload];

    case UserActionType.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    case UserActionType.Edit:
      return [
        ...state.slice(0, action.index),
            action.payload,
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }

}
