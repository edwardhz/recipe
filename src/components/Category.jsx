import {FaFish, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components"
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/Caribbean'}>
            <FaFish/>
            <h4>Caribbean</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thailand</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 0;
    gap: 35px;
    @media (max-width:425px) {
        gap: 3px;
     }
`
const SLink = styled(NavLink)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    min-width: 6rem;
    min-height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right top, #eb4f12, #e74717, #e23f1b, #de361e, #d92d21); 
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }

    @media (max-width:425px) {
        min-width: 5rem;
        min-height: 5rem;
        svg{
            font-size: 3rem;
        }
        h4{
            display: none;
        }
    }
`

export default Category