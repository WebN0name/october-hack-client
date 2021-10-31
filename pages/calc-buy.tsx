import { PageWrapper, PickerContainer, InputCount, PageContent, InfoBlock, TableBody, TableHeader, TableDataCenter, TableContainerBuy } from '../components/layouts'
import { BuyButton, TextInfo } from '../components/ui'
import SymbolPicker from '../components/Smart/SymbolPicker'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CalcBuy() {
  const [inputData, setInputData] = useState('')
  const [peakerData, setPeakerData] = useState('')
  const [reqData, setReqData] = useState<any>({})

  const getDataFromPeaker = async (value: string) => {
    setPeakerData(value)
  }

  useEffect(() => {
    console.log(reqData)
  }, [reqData])


  const Buy = async () => {
    if (inputData !== '') {
      if (Number(inputData)) {
        const data = await axios.post('api/getDataForBuy', { symbol: peakerData, count: Number(inputData) })
        console.log()
        setReqData(() => data.data.data)
      }
    }
  }

  return (
    <PageWrapper>
      <PickerContainer>
        <SymbolPicker text={'Choose symbol: '} getDataFromPeaker={getDataFromPeaker} />
        <InputCount placeholder={'Token count'} onChange={(e) => setInputData(() => e.target.value)} />
        <BuyButton onClick={() => Buy()}>Buy</BuyButton>
      </PickerContainer>
      <PageContent>
        {
          Object.keys(reqData).length !== 0 ? (
            <>
              <InfoBlock>
                <div>
                  <TextInfo>Price: {reqData.price}</TextInfo>
                  <TextInfo>Expected Price: {Number(reqData.asks[0].price) * Number(reqData.amount)}</TextInfo>
                  <TextInfo>Maximum overhead: {100 - ((Number(reqData.asks[0].price) * Number(reqData.amount)) / (Number(reqData.price)) * 100)}%</TextInfo>
                </div>
                <TextInfo>Amount: {reqData.amount}</TextInfo>
                <TextInfo>Completed: {reqData.completed ? 'true' : 'false'}</TextInfo>
                <TextInfo>AVG Price per unit: {reqData.avgPrice}</TextInfo>
              </InfoBlock>
              <TableContainerBuy>
                <TableBody>
                  <tr>
                    <TableHeader>Platform</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>QTY</TableHeader>
                  </tr>
                  {reqData.asks.map((item: any) => (
                    <tr>
                      <TableDataCenter height="40">{item.platform}</TableDataCenter>
                      <TableDataCenter height="40">{item.price === null ? '-' : item.price}</TableDataCenter>
                      <TableDataCenter height="40">{item.qty}</TableDataCenter>
                    </tr>
                  ))}
                </TableBody>
              </TableContainerBuy>
            </>
          ) : null
        }
      </PageContent>
    </PageWrapper>
  )
}
