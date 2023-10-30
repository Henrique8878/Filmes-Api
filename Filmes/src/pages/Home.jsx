import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import axios from 'axios';
import NavBar from '../components/NavBar';
import {BsCalendarDate} from 'react-icons/bs';

const Home = () => {
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
      const get = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8ed200f50a6942ca5bc8b5cdec27ff22');
      const resultados = await get.data.results;
      setFilmes(resultados);
      console.log(resultados)
      setApiFiltrados(resultados);
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
        <h1>Top 20 Filmes</h1>
        <h3>Segundo o TMBD</h3>
      </div>

      <div className='Filmes'>
        {filmes.length === 0 ? (
          
          <h1>Carregando Filmes...</h1>
            
          
        ) : (
          filmes.map((filme) => (
              <div key={filme.title} className='Filme'>
                
                <img className='imagem' src={`https://image.tmdb.org/t/p/w400${filme.poster_path}`} alt='filme' />
                
                <div className='start'>
                  
                  <div className='NomeFilme'>
                    <p>{filme.title}</p>
                  </div>
                  <p><BsFillStarFill style={{ color: 'yellow' }} /> {filme.vote_average.toFixed(1)}</p>
                  <p className='calendario'><BsCalendarDate className='color'/> Lançamento: {filme.release_date}</p>
                
                </div>
                
                <div className='details'>
                  <Link className='a' to={`/movie/${filme.id}`}>Detalhes</Link>
                
                </div>
              
              </div>
            ))
        )}
         
      </div>
     
    </div>

    
  );
}

export default Home;






