import { useEffect, useState } from "react"
import { Wrapper, Container, Red, Blue, Yellow, Green } from "../components/layouts"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let data = fetch("api/getDataFromBinance")
      console.log(data)
    }
    getData()
  }, [])

  return (
    <Wrapper>
      11111
    </Wrapper>
  )
}
