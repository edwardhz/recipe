import React,{useState,useEffect} from 'react'
import Category from 'components/Category'
import Search from 'components/Search'
import {useParams,Link} from 'react-router-dom'
import styled from 'styled-components'

const SearchItems = () => {
  const API = process.env.REACT_APP_API_KEY;
  const [searchedItems, setSearchedItems] = useState([]);
  let params = useParams();


  useEffect(()=>{
    getSearch(params.search);
  },[params.search]);
  

  const getSearch = async (name) =>{
    
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${name}`);
    const data = await response.json();
    setSearchedItems(data.results);
  
  }
  return (
  <>
    <Search/>
    <Category/>

    <Grid>
      {
        
      searchedItems.map((item)=>(
        <Card key={item.id}>
          <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))
        
      }
      
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

export default SearchItems