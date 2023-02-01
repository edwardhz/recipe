import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'


const MostPopular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async () =>{

    const check = localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));
    }else{
      const API = process.env.REACT_APP_API_KEY;
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API}&number=9`);
      const data = await response.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes))
      setPopular(data.recipes);
      console.log()
    }
    

  }

  return (
     <>
    <div>
      <Wrapper>
        <h3>Trending recipes</h3>  
        <Splide options={{
          perPage: 4,
          arrows:false,
          pagination:false,
          drag:'free',
          gap:'2.5rem',
          breakpoints:{
            640: {
              perPage: 2,
            },
          }
        }}> 
            {popular.map((recipe)=>(
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'recipe/'+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
            ))}
        </Splide>
      </Wrapper>
    </div>
     </>
  )
}


const Wrapper = styled.div`
  margin:4rem 0rem;
  text-align: center;
`
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img{
    position: absolute;
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
  p{
    z-index: 10;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align:center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  
`

export default MostPopular