import Image from "next/image"

type MovieData = {
    movie_name: string,
    date_published: string,
    rating: number
}

const MovieCard = ({movie_name, date_published, rating}:MovieData) => {
    return(
        <>
            <div className="flex justify-center align-middle mt-[20px] shadow-[0_0.5rem_1.2rem_rgba(189,197,209)] rounded-[0.5rem] bg-[#FFFBE9] w-[300px] sm:w-[500px] md:w-[600px]">
                <div className="mr-[20px] flex justify-center align-middle">
                    <Image src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" alt="" width={100} height={300} className="w-full sm:w-[300px]"/>
                </div>
                <div className="flex flex-col justify-center align-middle">
                    <div className="text-[15px] sm:text-[30px]">
                        <h1>{movie_name}</h1>
                    </div>
                    <div className="text-[10px] sm:text-[20px]">
                        <h3>Published: {date_published}</h3>
                    </div>
                    <div className="text-[10px] sm:text-[20px]">
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard


// box-shadow: 0 0.5rem 1.2rem rgb(189 197 209);
// border: 1px solid #e7eaf3;
// border-radius: 0.5rem;