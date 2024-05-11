import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 218px;
    height: 285px;
    border-radius: 8px;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

`

export const ProductImage = styled.img`
    width: 111px;
    height: 138px;
`

export const Title = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;

`

export const TitleWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 14px;
`

export const Description = styled.div`
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    margin-top: 8px;
`

export const Price = styled.div`
    width: 64px;
    height: 26px;
    background-color: black;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const PriceText = styled.div`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
`


export const Button = styled.div`
    width: 100%;
    height: 32px; 
    background-color: #0F52BA;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    margin-top: 12px;
    border-radius: 0 0 8px 8px;
`


export const IconButton = styled.img`
    width: 12px;
    height: 13.5px; 
`

export const TextButton = styled.div`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
`



