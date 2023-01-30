import React,{useState,useEffect} from 'react'
import Header from '../containers/Header'
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
    <Header/>
    <Grid>
      {
        (searchedItems.length > 0) ? searchedItems.map((item)=>(
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )) : <h3>There're no recipes :c, try another set of words</h3>
      
        
      }
      
    </Grid>
    
    </>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    gap: 32px;
    text-align: center;
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