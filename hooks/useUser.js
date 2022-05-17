import { useEffect, useState } from 'react'
import { userOnAuth } from '../firebase/client'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  useEffect(() => {
    userOnAuth(setUser)
  }, [])

  return user
}
