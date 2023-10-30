import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import {BsSearch} from 'react-icons/bs'
import {BsCameraReels} from 'react-icons/bs'

const NavBar = ({searchFilmes,setsearchFilmes,setApiFiltrados,filtrar, TodosFilmes}) => {

 
  return (
    <div className='navbar'>
         <h2><BsCameraReels className='icone'/><Link to='/' className='titulo'>ReactMovies</Link></h2>
         <Link className='link' to="/">Top 20 </Link>
         <Link className='link' to="/search">Em Cartaz </Link>
        
        
        <div className='inp'>
           <button className='btnVoltar' onClick={()=>TodosFilmes()}>Remover Busca</button>
            <input placeholder='Busque um filme...' name='busque' className='inpFilme' onChange={(e)=>setsearchFilmes(e.target.value)} value={searchFilmes} ></input>
            <button className='btnSearch' onClick={()=>filtrar()}><BsSearch/></button>
           
        </div>
    </div>
  )
}

export default NavBar