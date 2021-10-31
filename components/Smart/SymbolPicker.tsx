import { useEffect, useState } from "react"
import { DropdownBtn, Dropdown, DropdownContent, DropdownItem, InputSearch } from '../layouts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



export default function SymbolPicker({ text, getDataFromPeaker }: any) {
    const [defaultSymbol, setDefaultSymbol] = useState('BTC-USDT')
    const [symbols, setSymbols] = useState([])
    const [searchMode, setSearchMode] = useState(false)

    useEffect(() => {
        async function getData(){
            const data = await axios.get('/api/getSymbols')
            setSymbols(data.data.data)
        }
        getData()
    },[])

    useEffect(() => {
        getDataFromPeaker(defaultSymbol)
    }, [defaultSymbol])
    return (
        <>
            {text}
            <Dropdown>
                <DropdownBtn>
                    {defaultSymbol}
                    <FontAwesomeIcon icon = {faSearch} size="lg" style = {{position: "absolute", right: '10px'}}/>
                </DropdownBtn>
                <DropdownContent>
                    {symbols.map((item) => (
                        <>
                            {item !== defaultSymbol ? <DropdownItem onClick = {() => setDefaultSymbol(() => item)}>{item} </DropdownItem> : null}
                        </>

                    ))}
                </DropdownContent>
            </Dropdown>
        </>
    )
}