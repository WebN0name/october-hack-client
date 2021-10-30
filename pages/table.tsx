import {PageWrapper, PickerContainer} from '../components/layouts'
import SymbolPicker from '../components/Smart/SymbolPicker'

export default function Table() {
  return (
    <PageWrapper>
      <PickerContainer>
        <SymbolPicker text = {'Choose symbol: '}/>
      </PickerContainer>
    </PageWrapper>
  )
}
