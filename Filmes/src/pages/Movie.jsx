import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import {BsCalculator} from 'react-icons/bs'
import axios from 'axios';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import {AiOutlineCalculator} from 'react-icons/ai'
import {LiaMoneyBillWaveAltSolid} from 'react-icons/lia'
import {BiTime} from 'react-icons/bi'
import {FaPencilAlt} from 'react-icons/fa'

const Movie = () => {

  const {id} = useParams();

  const [searchFilmes, setsearchFilmes] = useState();

  const [filmes, setFilmes] = useState([]);

  const [ApiFiltrados, setApiFiltrados] = useState([])

  const filtrar = ()=>{
    
    let filtrar = filmes.filter((filme)=>filme.title.toLowerCase().includes(searchFilmes.toLowerCase()))

    setFilmes(filtrar)

    setsearchFilmes('')
    
    setFilmes((callback)=>{
      setTimeout(()=>{
        if(callback.length===0){
          alert("Filme não encontrado")
          setFilmes(ApiFiltrados)
        }
      },1000)
      return callback
    })
     
    
  }

  const TodosFilmes = ()=>{

    setFilmes(ApiFiltrados)
  
  }

  const Temporizador = ()=>{
    setTimeout(()=>{
      if(filmes.length===0){
        alert("Filme não encontrado")
        setFilmes(ApiFiltrados)
      }
    },3000)
  }

 

  const ConsomeFilmes = async () => {
    try {
      const get = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8ed200f50a6942ca5bc8b5cdec27ff22&language=pt-BR`);
      const resultados = await get.data;
      setFilmes(resultados);
      setApiFiltrados(resultados);
      console.log(resultados)
    } catch (error) {
      console.error("Erro ao carregar: ", error);
    }
  };

  useEffect(() => {
    ConsomeFilmes();
  }, []);


  return (
    <div className='Container_Principal'>
      <div className='header'>
        <NavBar searchFilmes={searchFilmes} setsearchFilmes={setsearchFilmes} setApiFiltrados = {setApiFiltrados} filtrar = {filtrar} TodosFilmes = {TodosFilmes}/>
      </div>

      <div className='TitleCenter'>
        <h1>{filmes.title}</h1>
        
      </div>

      
      <div className='center'>

        {filmes.length===0 ? (
            <h1>Carregando Filme...</h1>
        ):
        (


          <div className='DescriptionMovie'>
        
          <img className='imagem' src={`https://image.tmdb.org/t/p/w400${filmes.poster_path}`} alt='filme' />

          <div className='One'>

            <div className='Two'>
              <p>{filmes.title}</p>
            </div>
            <div className='centralizar'>
              <p className='star'><BsFillStarFill style={{ color: 'yellow' }} /> {filmes.vote_average.toFixed(1)}</p>

             
            </div>

            <p className='slogan'>"{filmes.tagline}"</p>

          </div>

          <div className='pai'>
            <div className='filha'>
              <p><BsCalculator className='icon'/>     Orçamento:</p>
              <p className='orc'>$ {filmes.budget.toLocaleString()}</p>

              <p className='p'><LiaMoneyBillWaveAltSolid className='icon'/> Receita:</p>
              <p className='orc'>$ {filmes.revenue.toLocaleString()}</p>

              <p className='p'><BiTime className='icon'/> Duração:</p>
              <p className='orc'>{filmes.runtime} Minutos</p>

              <p className='p'><FaPencilAlt className='icon'/> Desrição: </p>
              <p className='orc'>{filmes.overview}</p>


            </div>

            
          </div>



        </div>

        )}
        
        
            </div>
         
      </div>
  )
}

export default Movie