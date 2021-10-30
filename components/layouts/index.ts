import styled from 'styled-components'


export const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 800px;
    height: 500px;
    border: 2px solid black;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Block = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
`

export const Red = styled(Block)`
    background-color: red;
    width: 200px;
    height: 80px;
`

export const Green = styled(Block)`
    background-color: green;
    width: 130px;
    height: 60px;
`

export const Blue = styled(Block)`
    background-color: blue;
    width: 200px;
    height: 60px;
`

export const Yellow = styled(Block)`
    background-color: yellow;
    width: 130px;
    height: 60px;
`

