import React, { useState } from 'react';

import './App.css';

// import the styles
import 'react-table-factory/dist/withFixedHeader.css';
import 'react-table-factory/dist/withAdaptiveColname.css';
import 'react-table-factory/dist/withHeaderCellOverflow.css';
import 'react-table-factory/dist/withSortingContext.css';

// import table factory decorators
import { composeDecorators, Column } from 'react-table-factory';
import { withHeaderCellOverflow } from 'react-table-factory';
import { withAdaptiveColname } from 'react-table-factory';
import { withInMemorySortingContext, Sorter } from 'react-table-factory';
import { withInlineDetailsContext } from 'react-table-factory';
import { withFixedHeader } from 'react-table-factory';

const Table = composeDecorators(
  withHeaderCellOverflow,
  withAdaptiveColname(),
  withInMemorySortingContext({defaultDirection: 'desc'}),
  withInlineDetailsContext(),
  withFixedHeader() // should be last
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
          <span>With multisort</span>
          <Sorter name="data5" disabled={disabled} Component="div">
            Data 5
          </Sorter>
          <Sorter name="data6" disabled={disabled} Component="div">
            Data 6
          </Sorter>
        </React.Fragment>
      ),
      cell: ({data}) => (
        <React.Fragment>
          <div>{data.data5}</div>
          <div>{data['data6']}</div>
        </React.Fragment>
      ),
      style: {width: '30%'},
  },
]

const InlineDetails = ({data}) => (
  <div>
    { Object.keys(data).map((key, i) => (
      <p key={i}>
        <label>{key} : </label>
        <span>{data[key]}</span>
      </p>
    )) }
  </div>
)

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
          className="scrollable-table"
          defaultSortParameter="data1"
          defaultSortDirection="asc"
          style={{width: '100%', height: 500}}
          detailsRenderer={InlineDetails}
        >
            { columns.map((props, i) => (
                <Column key={i} {...props} />
            )) }
        </Table>
      </main>
    </div>
  );
}

export default App;
