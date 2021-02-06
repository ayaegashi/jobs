import styled from 'styled-components'

export const StyledRow = styled.td `
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  min-width: 130px;
  text-align: center;
`

export const StyledTable = styled.table `
    border: 0px solid black;
    border-collapse: collapse;
    margin: 20px;
    display: block;
    overflow: auto;
    height: 75vh;
    border-radius: 5px;
`

export const StyledTableHeader = styled.th `
    border: 1px solid black;
    border-collapse: collapse;
    background-color: lightskyblue;
    color: white;
    position: sticky;
    top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const StyledHeaderRow = styled.tr `
    border: 1px solid black;
    border-collapse: collapse;
    height:  30px;
    font-size: 1.2em;
`
export const TableBody = styled.tbody ` 
    height: 60vh;
`

export const TableHead = styled.thead `
    color: white;
    position: sticky;
    top: 0;
`

export const Button = styled.button ` 
    border: none;
    height: 30px;
    width: 320px;

    :hover {
        background-color: lightskyblue;
    }
`