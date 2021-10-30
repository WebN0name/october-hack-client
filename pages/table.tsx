import {PageWrapper, PickerContainer, TableBody, TableHeader, TableData, TableDataCenter} from '../components/layouts'
import SymbolPicker from '../components/Smart/SymbolPicker'

export default function Table() {
  const prices = [{name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}]
  return (
    <PageWrapper>
      <PickerContainer>
        <SymbolPicker text = {'Choose symbol: '}/>
      </PickerContainer>
      <TableBody>
        <tr>
        <TableHeader>names</TableHeader>
        <TableHeader>prices</TableHeader>
        </tr>
        {prices.map(p => (
          <tr>
            <TableData>{p.name}</TableData>
            <TableDataCenter>{p.price + " USDT"}</TableDataCenter>
          </tr>
        ))}
      </TableBody>
    </PageWrapper>
  )
}
