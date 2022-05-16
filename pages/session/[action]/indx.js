import { useRouter } from 'next/router'
import Login from 'components/sessions/Login'

export default function Session() {
  const { query } = useRouter()
  console.log(query)
  return(
    <>
      {
        query.action === 'login' ? <Login /> : <span>SignIN</span>
      }
    </>
  )
}
