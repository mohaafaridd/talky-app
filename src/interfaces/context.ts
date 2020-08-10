export interface State {
  user: string
}

export interface Methods {
  signUser(name: string): void
}

export interface Action {
  type: ActionTypes
  payload: State
}

export type ActionTypes = 'SIGN_USER'
