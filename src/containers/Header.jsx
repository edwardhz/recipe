import React from 'react'
import Search from 'components/Search'
import Category from '../components/Category'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GrRestaurant} from 'react-icons/gr'
import Footer from './Footer'


const Header = () => {
  return (
    <>
    <Footer/>
    <Nav>
      <GrRestaurant/>
      <Logo to={'/'}>Recipes project</Logo>
    </Nav>
        <Search/>
        <Category/>
    </>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  ;
`
const Nav = styled.div`
  width:100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default Header