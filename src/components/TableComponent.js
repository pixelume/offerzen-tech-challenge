import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components/macro';
import DateComponent from './DateComponent';
import SortArrows from '../images/sort_arrows.svg';

const fadeInTop = keyframes`
  from {
    transform: translateX(70px);
  }
`

const RowCountDisplay = styled.div`
  width: 100%;
  height: 2em;
  text-align: right;
`

const TableContainer = styled.div`
  position: relative;
  padding: 5px;
  margin: 25px auto auto;
  overflow-x: auto;
  animation: ${fadeInTop} 0.5s ease-out both;
  font-size: 0.7em;
  @media screen and (min-width: 1024px) {
    width: 80%;
    font-size: 0.9em;
  }
`

const Table = styled.table`
  width: 100%;
  background: #ffffff;
  border-collapse: collapse;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px 2px 2px 2px;
`;

const THead = styled.thead`
  background-color: #f9fafb;
`;

const TH = styled.th`
  padding: 10px;
  text-align: left;
`;

const TD = styled.td`
  padding: 5px;
  vertical-align: middle;
  &:first-child {
    width: 3em;
  }
`;

const TBody = styled.tbody`
  color: #7C7C80;
`

const ArchiveBtn = styled.button.attrs({type: 'button'})`
  border: none;
  background-color: transparent;
  color: #40AADB;
  cursor: pointer;
`

const ReadStatusIndicator = styled.div`
  display: inline-block;
  height: 0.7em;
  width: 0.7em;
  border-radius: 50%;
  background-color: ${props => props.unread? '#00d400': 'transparent'};
  margin-right: 1em;
`

const TR = styled.tr`
  border-bottom: 1px solid lightgrey;
  ${props => props.unread? css`
    font-weight: bold;
  `: null};
  ${props => props.archived? css`
    background-color: 'lightgrey';
    opacity: 0.5;
  `: null};
`
const TableComponent = ({headings, data, searchString, archiveBtnHandler, showArchive}) => {
  const [sortBy, setSortBy] = useState(false);
  // const [sortOrder, setSortOrder] = useState('asc')
  
  const doSort = (dataArray, sortBy) => {
    switch (sortBy.heading) {
      case headings[0]: // by candidate
        const arr0 = [...dataArray].sort((a, b) => a.candidate.localeCompare(b.candidate))
        return sortBy.ascending? arr0: arr0.reverse()
      case headings[1]: // by role
        const arr1 = [...dataArray].sort((a, b) => a.role.localeCompare(b.role))
        return sortBy.ascending? arr1: arr1.reverse()
      case headings[2]: // by lastcomms.date_time
        const arr2 = [...dataArray].sort((a, b) => new Date(b.last_comms.date_time) - new Date(a.last_comms.date_time))
        return sortBy.ascending? arr2: arr2.reverse()
      case headings[3]: // by salary
        const arr3 = [...dataArray].sort((a, b) => b.salary - a.salary)
        return sortBy.ascending? arr3: arr3.reverse()
      case headings[4]: // by sent_by
        const arr4 = [...dataArray].sort((a, b) => a.sent_by.localeCompare(b.sent_by))
        return sortBy.ascending? arr4: arr4.reverse()
      default:
        return dataArray;
    }
  }
  
  let displayedData = data;
  if (searchString) { // Search Input Present
    if (showArchive) { // Archived Items Shown
      displayedData = data.filter(row => row.candidate.toLowerCase().includes(searchString.toLowerCase().trim()))
    } else { // Archived Items Hidden
      displayedData = data.filter(row => row.candidate.toLowerCase().includes(searchString.toLowerCase().trim()) && !row.archived)
    }
  } else { // No Search Input
    if (sortBy.heading) {
      displayedData = doSort(data, sortBy)
    }
    if (!showArchive) { // Archived Items Hidden
      displayedData = data.filter(row => !row.archived)
      if (sortBy.heading) {
        displayedData = doSort(displayedData, sortBy)
      }
    }
  }

  const sortClickHandler = heading => {
    if (sortBy.heading && sortBy.heading === heading) {
      setSortBy(sortBy => ({...sortBy, ascending: !sortBy.ascending}));
    } else {
      setSortBy({heading: heading, ascending: true})
    }
    // setSortOrder(sortOrder => sortOrder === 'asc'? 'desc': 'asc')
  }

  return (
    <TableContainer>
    <RowCountDisplay>{`${displayedData.length} ${searchString? 'Results': 'Interview requests'}`}</RowCountDisplay>
      <Table>
          <THead>
            <tr>
              {headings.map((heading, idx) => (
                <TH
                  key={`${idx}-${heading}`}
                  colSpan={idx === 0 || idx === headings.length - 1? 2: 1}
                  onClick={() => sortClickHandler(heading)}
                >
                  {heading}&nbsp;&nbsp;<img src={SortArrows} alt="sort by" />
                </TH>
              ))}
            </tr>
          </THead>
          <TBody>
            {displayedData.map((row, idx) => (
              <TR key={`row-${idx}`} idx={idx} unread={row.last_comms.unread} archived={row.archived}>
                <TD>
                  <img src={row.image} alt={row.candidate} style={{height: '3em'}}/>
                </TD>
                <TD>{row.candidate}</TD>
                <TD>{row.role? row.role: '-'}</TD>
                <TD>
                  <ReadStatusIndicator unread={row.last_comms.unread}/>
                  {row.last_comms.description}&nbsp;&nbsp;
                  <DateComponent dateObject={new Date(row.last_comms.date_time)}/>
                </TD>
                <TD>{row.salary}</TD>
                <TD>{row.sent_by}</TD>
                <TD>
                  <ArchiveBtn onClick={() => archiveBtnHandler(row.candidate, row.archived)}>
                    {row.archived? 'Unarchive': 'Archive'}
                  </ArchiveBtn>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
    </TableContainer>
  );
}

export default TableComponent;