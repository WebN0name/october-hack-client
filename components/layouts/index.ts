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
    color: rgba(0, 0, 0, 0.87);
`

export const HeaderWrapper = styled.div`
    width: 100%;
    min-height: 85px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #1976d2;
`
export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 85px);
  background-color: #fafafa;
  padding: 20px;
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
  padding-top: 20px;
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

export const PickerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DropdownBtn = styled.div`
  background-color: rgb(21, 101, 192);
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  min-width: 160px;
  text-align: center;
`

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-left: 30px;
  text-align: center;
  max-height: 90px;
  overflow-y: auto;
  scrollbar-width: none;
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent}{
    display: block;
  }
`

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`

export const TableBody = styled.table`
    width: 40%;
	border: none;
	margin-bottom: 20px;
	border-collapse: separate;  
    text-align: center;
    border-spacing: 5px;
    border-radius: 20px;  
`

export const TableHeader = styled.th`
    font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
    background: black;
	font-size: 14px;
	border-top: 1px solid #ddd;
    color: white;
`
export const TableData = styled.td`
    text-align: left;
	border: none;
	padding: 10px 15px;
	font-size: 14px;
    background: #EDEDED;
	vertical-align: top;
    &:hover {
    background-color: black;
    color: white;
  }
`



