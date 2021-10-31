import { useEffect, useState } from "react"
import { DropdownBtn, Dropdown, DropdownContent, DropdownItem, InputSearch, SearchContent } from '../layouts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



export default function SymbolPicker({ text, getDataFromPeaker }: any) {
    const [defaultSymbol, setDefaultSymbol] = useState('BTC-USDT')
    const [symbols, setSymbols] = useState([])
    const [searchItems, setSearchItems] = useState([])
    const [searchMode, setSearchMode] = useState(false)

    useEffect(() => {
        async function getData() {
            const data = await axios.get('/api/getSymbols')
            setSymbols(data.data.data)
        }
        getData()
    }, [])

    const Search = (e: any) => {
        if (e.target.value === '') {
            setSearchItems(() => symbols)
        } else {
            const results = symbols.filter((symbol: string) => {
                const res = symbol.toLowerCase().includes((e.target.value).toLowerCase())
                if(res){
                    return symbol
                }
            })
            setSearchItems(() => results)
        }
    }

    useEffect(() => {
        getDataFromPeaker(defaultSymbol)
    }, [])

    useEffect(() => {
        getDataFromPeaker(defaultSymbol)
    }, [defaultSymbol])
    return (
        <>
            {text}
            <Dropdown className={searchMode ? 'search' : ''}>
                <DropdownBtn>
                    {searchMode === false ? defaultSymbol : <InputSearch placeholder={'Search'} onChange={(e) => Search(e)} />}
                    <FontAwesomeIcon icon={faSearch} size="lg" style={{ position: "absolute", right: '10px' }} onClick={() => setSearchMode(!searchMode)} />
                </DropdownBtn>
                <DropdownContent>
                    {symbols.map((item) => (
                        <>
                            {item !== defaultSymbol ? <DropdownItem onClick={() => setDefaultSymbol(() => item)}>{item} </DropdownItem> : null}
                        </>

                    ))}
                </DropdownContent>
                <SearchContent className={searchMode ? 'search' : ''}>
                    {searchItems.map((item) => (
                        <>
                            {item !== defaultSymbol ? <DropdownItem onClick={() => {
                                setDefaultSymbol(() => item)
                                setSearchMode(!searchMode)
                                }}>{item} </DropdownItem> : null}
                        </>

                    ))}
                </SearchContent>
            </Dropdown>
        </>
    )
}