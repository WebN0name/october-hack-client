import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Wrapper, HeaderWrapper, ControllButton, HeaderTitle, Title } from "../components/layouts"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <HeaderWrapper>
          <ControllButton>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </ControllButton>
          <HeaderTitle>
            <Title>DED TRAIDING</Title>
          </HeaderTitle>
      </HeaderWrapper>
      <Component {...pageProps} base="/table"/>
    </Wrapper>
  )
}

export default MyApp
