import styled from 'styled-components'

export const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
`
export const Header = styled.div`
    min-width: 10px;
    min-height: 64px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    align-items: center;
    background-color: white;
`
export const HeaderTitle = styled.div`
    margin: auto;
    padding: 15px;
    min-width: 10px;
    min-height: 64px;
`
export const TitleText  = styled.div`
    font-family: Zapf Chancery, cursive;
    font-stretch: condensed;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1.5;
    letter-spacing: 0.0075em;
    white-space: nowrap;
    color: black;
`
const Button = styled.div`
  padding: 15px;
`
export const ControllButton = styled(Button)`
  color: #000;
  text-align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
  `
