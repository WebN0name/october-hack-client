import { SidebarLayout, SidebarBody, CloseSidebarArea, NavListcontainer } from "../layouts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ControllButton, NavButton } from "../ui"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router"
import { useContext } from "react"
import SideBarContext from "../context/sidebarContext"

export default function Sidebar() {
  const history = useHistory()
  const { sidebar, setSidebar } = useContext(SideBarContext)

  const NavBtnClick = (e) => {
    setSidebar(() => !sidebar)
    history.push(`/${e.target.id}`)
  }

  return (
    <>
      <SidebarLayout onClick={() => setSidebar(!sidebar)} className={!sidebar ? "" : "active"}></SidebarLayout>
      <SidebarBody className={!sidebar ? "" : "active"}>
        <CloseSidebarArea>
          <ControllButton onClick={() => setSidebar(!sidebar)}>
            <FontAwesomeIcon icon={faChevronLeft} color="#000" size="2x" />
          </ControllButton>
        </CloseSidebarArea>
        <NavListcontainer>
          <NavButton id="table" backgroundColor="#ffeb3b" onClick={(e) => NavBtnClick(e)}>
            Table
          </NavButton>
          <NavButton id="calc" backgroundColor="#ffeb3b" onClick={(e) => NavBtnClick(e)}>
            Calculator
          </NavButton>
        </NavListcontainer>
      </SidebarBody>
    </>
  )
}
