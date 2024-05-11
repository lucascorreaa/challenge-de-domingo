import React from "react";

import * as S from "./styles"

import ShopCart from "..//../assets/images/svg/shoppingcart.svg"

export function Header() {
    return (
        <S.HeaderContainer>
            <S.TitleContainer>
                <S.Title>MKS</S.Title>
                <S.Subtitle>Sistemas</S.Subtitle>
            </S.TitleContainer>
            <S.Button>
                <S.IconButton src={ShopCart}  />
                <S.CounterShop>0</S.CounterShop>
            </S.Button>
        </S.HeaderContainer>
    )
}