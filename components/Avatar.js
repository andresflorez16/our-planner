import Image from 'next/image'
import styled from 'styled-components'

const AvatarDiv = styled.div`
display: flex;
align-items: center;
padding-left: 8px;
padding-right: 5px;
.img {
  border-radius: 9999px;
}
strong {
  display: inline-block;
  padding-left: 10px;
  color: #fff;
  text-shadow: 1px 2px 1px #111;
}
@media (max-width: 1000px) {
  padding-left: 5px;
  strong {
    padding-left: 5px;
    padding-top: 7px;
  }
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 380px) {
  strong {
    font-size: .8em;
  }
}
`

export default function Avatar({ user }) {
  return (
    <AvatarDiv>
      {
        user
          ? <><Image className='img'  alt={user.userName} src={user.photoUrl} title={user.userName} width='55' height='55' />
            <strong>{user.userName}</strong></>
          : null

      }
    </AvatarDiv>
  )
}
