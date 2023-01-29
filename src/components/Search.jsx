import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import SearchItems from 'pages/SearchItems'



const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searchItems/'+search);
    };


  return (
    <FormStyled onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input 
            onChange={(e)=>setSearch(e.target.value)} 
            type="text" 
            value={search}
            required/>
        </div>
        <h1>
            
        </h1>
    </FormStyled>
  )
}

const FormStyled = styled.form`
    margin: 5% 10%;
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(34deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;

    }
`

export default Search