import Image from 'next/image'
import styled from 'styled-components'

const AvatarDiv = styled.div`
display: flex;
align-items: center;
.img {
  border-radius: 9999px;
}
strong {
  padding: 0 8px;
}
`

export default function Avatar({ user }) {
  return (
    <AvatarDiv>
      <Image className='img'  alt={user.userName} src={user.photoUrl} title={user.userName} width='55' height='55' />
      <strong>{user.userName}</strong>
    </AvatarDiv>
  )
}
