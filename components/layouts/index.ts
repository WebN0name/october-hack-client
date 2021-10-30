import styled from 'styled-components'


export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 100%;
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

export const SidebarLayout = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    transform: translateX(0%);
    transition: transform 0.3s ease-out 0.3s;
  }

  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px,
    rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  z-index: 5;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out 0.3s;
`

export const SidebarBody = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    transform: translateX(0%);
    transition: transform 0.3s ease-out 0.3s;
  }

  position: fixed;
  min-width: 240px;
  height: 100%;
  background-color: #fff;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out 0.3s;
  z-index: 10;
`

export const NavListcontainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const CloseSidebarArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding-right: 10px;
`



