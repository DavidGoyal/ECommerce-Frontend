/* eslint-disable react/prop-types */
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import "./Search.css"
import Metadata from "../Metadata";

const Search = () => {
    const [keyword,setKeyword]=useState("");
    const navigate=useNavigate();     
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        }
        else{
            navigate("/products")
        }
    }

  return (
    <>
    <Metadata title="Search A Product"/>

        <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input type="text" placeholder="Search a product..." onChange={(e)=>setKeyword(e.target.value)}/>
            <input type="submit" value="Search" />
        </form>
    </>
  )
}

export default Search