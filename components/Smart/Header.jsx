import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { HeaderWrapper, HeaderTitle, Title } from "../layouts"
import {ControllButton} from '../ui'
import SidebarContext from "../context/sidebarContext"
import {  useContext } from "react"

export default function Heeader() {
    const {sidebar, setSidebar} = useContext(SidebarContext)
    return (
        <HeaderWrapper>
            <ControllButton onClick={() => setSidebar(!sidebar)}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </ControllButton>
            <HeaderTitle>
                <Title>DED TRAIDING</Title>
            </HeaderTitle>
        </HeaderWrapper>
    )
}