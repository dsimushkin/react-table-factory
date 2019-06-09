import React, { useEffect, useContext, useReducer } from 'react';

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
  DetailsContext,
  SortableContext,
  withHeaderControl,
  withLazyLoading,
  withEmptyRow
} from 'react-table-factory';

const Table = composeDecorators(
  withHeaderControl,
  withHeaderCellOverflow,
  withEmptyRow({
    isEmpty: ({data}) => data.isEmpty,
    Component: () => (
      <div style={{textAlign: 'center'}}>Empty row</div>
    )
  }),
  withAdaptive({
    width: 940
  }),
  withInMemorySortingContext({
    defaultDirection: 'desc'
  }),
  withLazyLoading({
    Loading: () => <div style={{textAlign: 'center', padding: 20}}>Fetching</div>,
  }),
  withInlineDetailsContext({
    isSelectable: (data, index) => index % 3 === 0 || index % 3 === 1,
    keyFactory: (data, index) => index,
    clearOnDataChange: false
  }),
  withFixedHeader // should be last
)()

// mock data
const generateData = (size=20) => Array(size).fill(undefined).map((_,i) => (
  Array(6).fill(undefined).reduce((r, _, j) => ({
    ...r, [`data${j+1}`]: `${Math.ceil(Math.random()*20)} in data[${i}, ${j+1}]`
  }), {})
)).concat({isEmpty: true});

// define columns configuration
const columns = [
  {
      name: 'data1',
      style: {width: '30%'},
      sortable: true,
  },
  {
      name: 'Description',
      header: () => (
        <span>Description</span>
      ),
      cell: ({data}) => (
        <React.Fragment>
          <span>A very long description cell hidden in full size and with no col name in adaptive: {data.data2}</span>
        </React.Fragment>
      ),
      style: {width: '30%'},
      sortable: true,
      removeAdaptiveColname: true,
      hideFullSize: true,
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
      removeOverflowWrapper: true,
  },
  {
      name: ['data5', 'data6'],
      header: ({disabled}) => (
        <React.Fragment>
          <div>With multisort (hidden in adaptive)</div>
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
      style: {width: '500px'},
      hideAdaptive: true
  },
  {
    header: () => (
      <span>Cell indexies</span>
    ),
    cell: ({index, rowIndex}) => {
      const {isSelectable, isSelected} = useContext(DetailsContext);
      return (
        <React.Fragment>
          <span>{`[${rowIndex},${index}]`}</span>
          <span style={{marginLeft: 10}}>{
            isSelected(rowIndex)
              ? 'selected'
              : (
                isSelectable(rowIndex)
                  ? 'selectable'
                  : 'not selectable'
                )
            }</span>
        </React.Fragment>
      )
    },
    style: {minWidth: '80px'},
    removeOverflowWrapper: true
  },
  {
    header: () => <span>Hello</span>,
    control: true,
    style: {minWidth: 100}
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

const EnhanceTableBehaviour = () => {
  const selection = useContext(DetailsContext);
  const sorting = useContext(SortableContext);

  useEffect(
    () => {
      if (selection.selected.length) {
        selection.clear();
      }
    },
    [sorting.sortOrder]
  )

  return null;
}

const requestsReducer = (state, action) => {
  switch(action.type) {
    case '@fetch':
      return {
        ...state,
        fetching: true
      }
    case '@add':
      return {
        ...state,
        data: [...state.data, ...action.value],
        fetching: false
      }
    default:
      return state;
  }
}

const App = () => {
  const [{data, fetching}, dispatch] = useReducer(
    requestsReducer, {
      data: generateData(20),
      fetching: false
    }
  );

  let timeout;
  const fetch = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch({type: '@add', value: generateData(20)});
    }, 2000);
    dispatch({type: '@fetch'});
  }

  useEffect(
    () => {
      return () => {
        clearTimeout(timeout);
      }
    }, []
  )

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
          fetching={fetching}
          fetch={fetch}
          className="default-theme"
          // defaultSortParameter="data1"
          // defaultSortDirection="asc"
          detailsRenderer={InlineDetails}
          columns={columns}
        >
          <EnhanceTableBehaviour />
        </Table>
      </main>
    </div>
  );
}

export default App;
