import { PageWrapper, PickerContainer, TableBody, TableHeader, TableData, TableDataCenter, TableContainer } from '../components/layouts'
import SymbolPicker from '../components/Smart/SymbolPicker'
import axios from 'axios'
import { useState } from 'react'

export default function Table() {
  // const prices = [{ name: "binance", price: 123 }, { name: "binance", price: 123 }, { name: "binance", price: 123 }, { name: "binance", price: 123 }, { name: "binance", price: 123 }, { name: "binance", price: 123 }, { name: "binance", price: 123 }, { name: "binance", price: 123 }]
  const [price, setPrice] = useState([])
  const getDataFromPeaker = async (value :  string) => {
    const data = await axios.post('/api/getDataForTable', {Symbol: value})
    console.log(data.data.data.data)
    setPrice(data.data.data.data)
  }
  return (
    <PageWrapper>
      <PickerContainer>
        <SymbolPicker text={'Choose symbol: '} getDataFromPeaker = {getDataFromPeaker}/>
      </PickerContainer>
      <TableContainer>
        <TableBody>
          <tr>
            <TableHeader>names</TableHeader>
            <TableHeader>prices</TableHeader>
          </tr>
          {price.map((p) => (
            <tr>
              <TableData height="40">{Object.keys(p)}</TableData>
              <TableDataCenter height="40">{Object.values(p) + " USDT"}</TableDataCenter>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
    </PageWrapper>
  )
}
