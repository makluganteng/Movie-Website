import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard/MovieCard";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  const [movie, setMovie] = useState('')
  const [defaultMovie, setDefaultMovie] = useState<{movie_name: string, date_publish: string, rating: number}[]>();
  const [findMovie, setFindMovie] = useState<{movie_name: string, date_publish: string, rating: number}[]>();

    useEffect(()=>{
        setDefaultMovie([
            {
                movie_name: "Star Wars",
                date_publish: "13 October 1990",
                rating: 5
            },
            {
                movie_name: "Pepek",
                date_publish: "13 October 1990",
                rating: 5
            },
            {
                movie_name: "Tolol",
                date_publish: "13 October 1990",
                rating: 5
            },
            {
                movie_name: "Anjing",
                date_publish: "13 October 1990",
                rating: 5
            },
            {
                movie_name: "Wtf",
                date_publish: "13 October 1990",
                rating: 5
            }
        ])
    },[])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(event.target.value)
  }

  const search = () => {
    setFindMovie(defaultMovie?.filter((value)=>value.movie_name.toLocaleLowerCase() === movie.toLocaleLowerCase()))
  }

  const handleDefault = () => {
    setFindMovie(undefined)
  }
  return (
    <>
    <Navbar handleOnChange={handleChange} search={search} handleDefault={handleDefault}/>
    <>
        <div className="flex justify-center align-middle w-auto h-auto">
            <div className="flex flex-col justify-center align-middle">
                {
                    findMovie ? findMovie.map((value,key)=>{return <MovieCard key={key} movie_name={value.movie_name} date_published={value.date_publish} rating={value.rating}/>}) : defaultMovie?.map((value, key)=>{return <MovieCard key={key} movie_name={value.movie_name} date_published={value.date_publish} rating={value.rating}/>})
                }
            </div>
        </div>
        </>
    </>
  )
}


