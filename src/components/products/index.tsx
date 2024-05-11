import React from "react";

import * as S from "./styles"

import { useQuery } from 'react-query';
import { Card } from "../card";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    photo: string;
  }
  
  interface ProductsProps {
    data: Product[]; 
  }

  interface IError {
    message: string;
  } 



export const Products: React.FC = () => {

const { data, error, isLoading } = useQuery('products', fetchProducts);

  async function fetchProducts() {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>An error occurred: {error.message}</div>;


    return(
        <S.ProductsContainer>
            <S.ProductsWrapper>
            {
    data && data?.products.map((product: any, index: any) => (
        <Card 
            key={index} 
            title={product.name} 
            price={product.price} 
            description={product.description} 
            src={product.photo} 
        />
    ))} 
            </S.ProductsWrapper>
        </S.ProductsContainer>
    )
}