import { SidebarLayout, SidebarBody, CloseSidebarArea, NavListcontainer } from "../layouts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ControllButton, NavButton } from "../ui"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { useRouter } from 'next/router'
import SideBarContext from "../context/sidebarContext"
import Image from 'next/image'
import ded from '../../public/img/Ded.png'

export default function Sidebar() {
  const router = useRouter()
  const { sidebar, setSidebar } = useContext(SideBarContext)

  const NavBtnClick = (e) => {
    setSidebar(() => !sidebar)
    router.push(`/${e.target.id}`)
  }

  return (
    <>
      <SidebarLayout onClick={() => setSidebar(!sidebar)} className={!sidebar ? "" : "active"}>
        <div style = {{transform: 'rotate(60deg)', width: 400, height: 400, position: 'relative', left: '108px'}}>
          <Image src={ded} alt="Picture of the author" />
        </div>
      </SidebarLayout>
      <SidebarBody className={!sidebar ? "" : "active"}>
        <CloseSidebarArea>
          <ControllButton onClick={() => setSidebar(!sidebar)}>
            <FontAwesomeIcon icon={faChevronLeft} color="#000" size="2x" />
          </ControllButton>
        </CloseSidebarArea>
        <NavListcontainer>
          <NavButton id="table"  onClick={(e) => NavBtnClick(e)}>
            Table
          </NavButton>
          <NavButton id="calc-buy" onClick={(e) => NavBtnClick(e)}>
            Calculator Buy
          </NavButton>
          <NavButton id="calc-sell" onClick={(e) => NavBtnClick(e)}>
            Calculator Sell
          </NavButton>
        </NavListcontainer>
      </SidebarBody>
    </>
  )
}
