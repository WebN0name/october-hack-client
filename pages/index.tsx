import { 
  Wrapper,
  Header, 
  TitleText,
  ControllButton,
  HeaderTitle
  } from "../components/layouts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Home(){


  return (
    <Wrapper>
      <Header>
        <ControllButton>
          <FontAwesomeIcon icon={faBars} size = "2x" />
        </ControllButton>
        <HeaderTitle>
          <TitleText>DED TRADING</TitleText>
        </HeaderTitle>
      </Header>
    </Wrapper>
  )
}

