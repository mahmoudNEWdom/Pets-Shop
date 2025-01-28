import React from 'react'
import { StyledButton } from './StyledComponents/StyledButton';

export default function FetchingAPI() {
  return (
    <>
      <div className="container ">
        <h1 className="text-center mt-5 mb-3">Fetching API</h1>
        <div className="d-flex justify-content-around">
          <StyledButton variant="outline">Click me</StyledButton>
          <StyledButton variant="no outline">Click me</StyledButton>
          <StyledButton>Click me</StyledButton>
        </div>
      </div> 
    </>
  );}
