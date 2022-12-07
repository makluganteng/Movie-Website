import { useEffect, useState } from "react"
import MovieCard from "../movieCard/MovieCard"



const MovieBody = () => {
    const [defaultMovie, setDefaultMovie] = useState<{movie_name: string, date_publish: string, rating: number}[]>();

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

    return (
        <>
        <div className="flex justify-center align-middle w-auto h-auto">
            <div className="flex flex-col justify-center align-middle">
                {
                    defaultMovie ? defaultMovie.map((value, key)=>{return <MovieCard key={key} movie_name={value.movie_name} date_published={value.date_publish} rating={value.rating}/>}) : 
                    <>
                    <div className="mt-[30px] sm:text-[50px]">
                        <h1>Please Add a Movie to Database</h1>
                    </div>
                    </>
                }
            </div>
        </div>
        </>
    )
}

export default MovieBody