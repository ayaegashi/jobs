import styled from 'styled-components'

export const Container = styled.div `
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PageOrganizer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

export const HalfPage = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30vw;
    padding: 10px;
    border: 1px black solid;
    border-radius: 10px;
`

export const LeftHalf = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    margin: 10px;
`

export const DescriptionHalf = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50vw;
    height: 85vh;
    overflow-y:auto;
    border: 1px black solid;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
`

export const StyledLink = styled.a `
  display: inline-block;
  word-break: break-word;
`

export const Button = styled.button ` 
    border: none;
    height: 30px;
    width: 320px;
    margin: 30px;

    :hover {
        background-color: lightskyblue;
    }
`