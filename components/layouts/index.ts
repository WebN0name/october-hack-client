import styled from 'styled-components'


export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 100%;
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
  position: absolute;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
`

export const HeaderTitle = styled.div`
    width: 100%;
    text-align: center;
`

export const Title = styled.h1`
    margin: 0;
    font-family: Zapf Chancery, cursive;
    font-stretch: condensed;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1.5;
    letter-spacing: 0.0075em;
    white-space: nowrap;
    color: black;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    min-height: 85px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`
export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 85px);
  background-color: #fafafa;
`