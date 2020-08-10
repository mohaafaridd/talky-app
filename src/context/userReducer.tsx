import { State, Action } from '../interfaces/context'

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'SIGN_USER':
      return action.payload

    default:
      return state
  }
}
