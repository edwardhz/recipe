import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterDiv>
        <div><p>Edward Martin Hernandez</p></div>
        <div><p>edw123hernandez@gmail.com</p></div>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`



export default Footer