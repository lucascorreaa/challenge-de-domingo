import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 22px;
    grid-row-gap: 22px;
`