import { PageWrapper, PickerContainer, TableBody, TableHeader, TableData, TableDataCenter, TableContainer } from '../components/layouts'
import SymbolPicker from '../components/Smart/SymbolPicker'
import axios from 'axios'
import { useState } from 'react'

export default function Table() {
  const [price, setPrice] = useState([])
  const getDataFromPeaker = async (value: string) => {
    let data = await axios.post('/api/getDataForTable', { Symbol: value })
    setPrice(data.data.data.data)

  }

  return (
    <PageWrapper>
      <PickerContainer>
        <SymbolPicker text={'Choose symbol: '} getDataFromPeaker={getDataFromPeaker} />
      </PickerContainer>
      <TableContainer>
        {
          price.length === 0 ? null : (
            <TableBody>
              <tr>
                <TableHeader>names</TableHeader>
                <TableHeader>prices</TableHeader>
              </tr>
              {price.map((p: any) => (
                <tr>
                  <TableData height="40">{p.platform}</TableData>
                  <TableDataCenter height="40">{p.price === null ? '-' : p.price}</TableDataCenter>
                </tr>
              ))}
            </TableBody>
          )
        }

      </TableContainer>
    </PageWrapper>
  )
}
