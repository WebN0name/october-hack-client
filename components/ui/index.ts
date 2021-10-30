import styled from "styled-components"

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


export const NavButton = styled(Button)`
  border-radius: 5px;
  text-align: center;
  color: #000;
  background-color: rgba(25, 118, 210, 0.04);
  cursor: pointer;

  & + & {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`


