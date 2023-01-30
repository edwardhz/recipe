import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import Header from '../containers/Header'

const Recipe = () => {
  const params = useParams();
  const API = process.env.REACT_APP_API_KEY;

  const [details, setDetails] = useState({});
  const [activeBtn, setActiveBtn] = useState('instructions');


  const getDetails = async () =>{
    const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API}`);
    const data = await response.json();
    setDetails(data)
    console.log(data.extendedIngredients)
  }

  useEffect(()=>{
    getDetails()
  },[params.id])


  return (
    <>
    <Header/>
      <Wrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
        </div>
        <Info>
          <div>
          <Button className={activeBtn === 'instructions'?'active':''} onClick={()=> setActiveBtn('instructions')}>Instructions</Button>
          <Button className={activeBtn === 'ingredients'?'active':''} onClick={()=> setActiveBtn('ingredients')}>Ingredients</Button>
          </div>
          <div>
            {activeBtn === 'instructions' && (
              <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            )}
            {activeBtn === 'ingredients' &&(
              <ul>
                
                {details.extendedIngredients?.map((item)=>(
                  <li key={item.id}>{item.original}</li>
                ))}
              </ul>
            )}   
          </div>
        </Info>   
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(34deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  img{
    border-radius: 5%;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    margin:0 auto;
    div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  }
`
const Button = styled.button`
  margin-bottom: 1px;
  width: 150px;
  height: 50px;
  color: #313131;
  background: white;
  font-weight: 600;
  cursor: pointer;
  @media (max-width:1000px) {
    margin-top: 1rem;
  }
`
const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1000px) {
    margin: 0 auto;
    align-items: center;
    div:first-child{
    flex-direction: row;
  }
  }
  
`

export default Recipe