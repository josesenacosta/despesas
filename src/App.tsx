import React from 'react'
import * as C from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import { TableArea } from './components/TableArea'

const App = () => {

  const [list, setList] = React.useState(items);
  const [filteredList, setFilteredList] = React.useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  

  React.useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <div>
      <C.Container>
        <C.Header>
          <C.HeaderText>Finanças</C.HeaderText>
        </C.Header>
        <C.Body>
          {/*Area de informacoes*/}
          {/*Area de insercao*/}
          {/*Tabela de despesas*/}
          <TableArea list={filteredList}/>
        </C.Body>
        <C.Footer>Footer</C.Footer>
      </C.Container>
    </div>
  )
}

export default App
