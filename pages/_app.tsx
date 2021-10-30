import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Wrapper } from "../components/layouts"
import Header from '../components/Smart/Header'
import Sidebar from '../components/Smart/Sidebar'
import SideBarContext from "../components/context/sidebarContext"
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebar, setSidebar] = useState(false)
  return (
    <SideBarContext.Provider value={{ sidebar, setSidebar }}>
      <Wrapper>
        <Sidebar />
        <Header />
        <Component {...pageProps} base="/table" />
      </Wrapper>
    </SideBarContext.Provider>
  )
}

export default MyApp
