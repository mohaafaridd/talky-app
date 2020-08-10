import { createContext } from 'react'
import { State, Methods } from '../interfaces/context'

const UserContext = createContext<State & Methods>({
  user: '',
  signUser: () => undefined,
})

export const { Provider: UserProvider, Consumer } = UserContext
export default UserContext
