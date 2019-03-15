import React, { useState, useContext } from 'react';

import './App.css';

// import the styles
import './Table.scss';

// import table factory decorators
import { 
  composeDecorators,
  withHeaderCellOverflow,
  withAdaptive,
  withInMemorySortingContext, Sorter,
  withInlineDetailsContext,
  withFixedHeader,
  SelectionContext,
  DetailsContext
} from 'react-table-factory';

const Table = composeDecorators(
  withHeaderCellOverflow,
  withAdaptive(),
  withInMemorySortingContext({defaultDirection: 'desc'}),
  withInlineDetailsContext(),
  withFixedHeader // should be last
)()

// mock data
const generateData = (size=20) => Array(size).fill(undefined).map((_,i) => (
  Array(6).fill(undefined).reduce((r, _, j) => ({
    ...r, [`data${j+1}`]: `${Math.ceil(Math.random()*20)} in data[${i}, ${j+1}]`
  }), {})
))

// define columns configuration
const columns = [
  {
      name: 'data1',
      style: {width: '30%'},
      sortable: true,
  },
  {
      name: 'data2',
      header: () => (
        <span>Data 2 with custom header</span>
      ),
      style: {width: '30%'},
      sortable: true,
  },
  {
    sortable: true,
    name: 'data3',
    header: () => (
      <span style={{whiteSpace: 'nowrap'}}>Very long name for displaying data 3</span>
    ),
    cell: ({data}) => (
      <React.Fragment>
        <span>some text and {data['data3']}</span>
      </React.Fragment>
    ),
    style: {width: '10%'},
  },
  {
      name: 'data4',
      style: {width: '12%'},
      header: () => (
        <span>Data 4 Not sortable and without overflow wrapper</span>
      ),
      sortable: false,
      removeOverflowWrapper: true
  },
  {
      name: ['data5', 'data6'],
      header: ({disabled}) => (
        <React.Fragment>
          <div>With multisort</div>
          <Sorter name="data5" disabled={disabled} Component="span">
            Data 5
          </Sorter>
          ,
          <Sorter name="data6" disabled={disabled} Component="span">
            Data 6
          </Sorter>
        </React.Fragment>
      ),
      cell: ({data}) => (
        <div className="multi-line">
          <div>{data.data5}</div>
          <div>{data['data6']}</div>
        </div>
      ),
      style: {width: '30%'},
  },
  {
    header: () => (
      <span>Cell indexies</span>
    ),
    cell: ({index, rowIndex}) => {
      const {isSelected} = useContext(SelectionContext);
      const {isSelectable} = useContext(DetailsContext);
      return (
        <React.Fragment>
          <div>{`[${rowIndex},${index}]`}</div>
          <div>{
            isSelected(rowIndex)
              ? 'selected'
              : (
                isSelectable(rowIndex)
                  ? 'selectable'
                  : 'not selectable'
                )
            }</div>
        </React.Fragment>
      )
    },
    style: {minWidth: '150px'},
    removeOverflowWrapper: true
  }
]

const InlineDetails = ({data, index}) => {
  return (
    <div>
      <p>
        Details of row {index}
      </p>
      { Object.keys(data).map((key, i) => (
        <p key={i}>
          <label>{key} : </label>
          <span>{data[key]}</span>
        </p>
      )) }
    </div>
  )
}

const App = () => {
  const [data] = useState(generateData(100));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Table example
        </p>
      </header>
      <main>
        <Table
          data={data}
          className="default-theme"
          defaultSortParameter="data1"
          defaultSortDirection="asc"
          detailsRenderer={InlineDetails}
          columns={columns}
          isSelectable={(index) => index < 5}
        />
      </main>
    </div>
  );
}

export default App;
