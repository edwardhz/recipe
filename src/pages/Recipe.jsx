import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

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
    <Wrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeBtn === 'instructions'?'active':''} onClick={()=> setActiveBtn('instructions')}>Instructions</Button>
        <Button className={activeBtn === 'ingredients'?'active':''} onClick={()=> setActiveBtn('ingredients')}>Ingredients</Button>
        <div>
          <h3>{details.instructions}</h3>
            <ul>
              
              {details.extendedIngredients?.map((item)=>(
                <li key={item.id}>{item.original}</li>
              ))}
            </ul> 
        </div>
      </Info>   
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 5rem;
  margin-bottom: 5rem;
  display: flex;
  grid-template-rows: 1fr;
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
  
  
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  
  font-weight: 600;
  cursor: pointer;
`
const Info = styled.div`
  margin-left: 5rem;
`

export default Recipe