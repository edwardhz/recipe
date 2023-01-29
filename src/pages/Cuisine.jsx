import React,{useState, useEffect} from 'react'
import Category from '../components/Category'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import Search from 'components/Search'


const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);

  let params = useParams();
  const API = process.env.REACT_APP_API_KEY;

  const getCuisine = async (name) =>{
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&cuisine=${name}`);
    const data = await response.json();
    setCuisine(data.results);
  }

  useEffect(()=>{
    getCuisine(params.type);
    console.log(cuisine);

  },[params.type])
  return (
    <>
    <Search/>
    <Category/>
    <Grid>
      {cuisine.map((item)=>(
        <Card key={item.id}>
          <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
      
    </Grid>
    </>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    gap: 32px;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 32px;
        
    }
    a{
      text-decoration: none;
    }
    h4{
      
      text-align: center;
      padding: 16px;
      
    }
    
`



export default Cuisine