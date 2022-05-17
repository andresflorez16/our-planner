import { useRouter } from 'next/router'
import SessionMethod from 'components/SessionMethod'

export default function Session() {
  const { query } = useRouter()
  return(
    <SessionMethod action={query.action} />
  )
}
