import { useEffect, useState } from "react"
import { DropdownBtn, Dropdown, DropdownContent, DropdownItem } from '../layouts'



export default function SymbolPicker({ text, getDataFromPeaker }: any) {
    const [defaultSymbol, setDefaultSymbol] = useState('ETH')
    const [symbols, setSymbols] = useState(['USDT', 'ETH', 'BTC', 'TEST'])

    useEffect(() => {
        getDataFromPeaker(defaultSymbol)
    }, [defaultSymbol])
    return (
        <>
            {text}
            <Dropdown>
                <DropdownBtn>
                    {defaultSymbol}
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