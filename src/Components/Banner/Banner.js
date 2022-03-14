import React ,{useEffect,useState} from 'react'
import {API_KEY} from '../../Constants/constants'
import "./Banner.css"
import axios from "../../axios"
function Banner() {
  const [movie ,setMovie ] = useState()
  useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setMovie(response.data.results[0])
      })
      
  }, [])
  
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>{movie.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button> 
            </div>
            <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elec</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner