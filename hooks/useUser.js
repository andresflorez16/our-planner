import { useEffect, useState } from 'react'
import { userOnAuth } from '../firebase/client'
import { useRouter } from 'next/router'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    userOnAuth(setUser)
  }, [])

  useEffect(() => {
    if (router.asPath === '/feed') {
      user === USER_STATES.NOT_LOGGED && router.push('/')
    }
  }, [user])

  return user
}
