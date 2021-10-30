import { Table, TableHeader, TableData, TableDataCenter } from "../components/layouts"

export default function Home() {
  const prices = [{name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}, {name: "binance", price: 123}]
  return (
    <div>
      table
      <Table>
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
      </Table>
    </div>
  )
}