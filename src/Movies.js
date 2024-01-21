import { useEffect, useState } from "react";
import "./App.css"
import triangleNext from "./assets/icons8-triangle-64.png"
import trianglePrevious from "./assets/icons8-triangle-64-2.png"

function Movies(){

    //API
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        const getMovie = async()=>{
            const responce = await fetch("https://potterhead-api.vercel.app/api/movies");
            const data = await responce.json()
            setMovie(data)
        }
        getMovie()
    }, []);

    //SLIDES

    const [index, setIndex] = useState(0);

    const { poster, summary, title, release_date, directors} = movie.length > 0 ? movie[index] : {};
    /* 1. book.length > 0: Эта часть проверяет, что массив book не пуст. .
    Если длина массива больше нуля, условие будет истинным.
    2. book[index]: Если массив book не пуст, тогда мы берем элемент массива по индексу index.
    3. : {}: Если массив book пуст, мы присваиваем пустой объект {}. 
    Таким образом, если book пуст, переменные cover, title, и serial будут иметь значения по умолчанию,
    и не будет ошибки при деструктуризации.*/


    const previousMovie =() =>{
        setIndex((index=>{
            index--;
            if(index<0){
                index = movie.length -1;
            }
            return index;
        }))
    }

    const nextMovie = () =>{
        setIndex((index =>{
            index ++;
            if(index > movie.length -1){
                index = 0;
            }
            return index;
        }))
    }

    if (!movie || movie.length === 0) {
        return <p>Loading...</p>;
    }
    
    return (
        <div className="BooksMovies">
            {movie.length > 0 ? (
                  //// Этот код выполнится только если book.length > 0
                <div className="BooksMoviesName">

                    <div className="ReleaseDate">
                        <p className="Release" > RELEASED IN: {release_date} </p>
                        <button onClick={previousMovie} className="Buttons ">
                            <img src={trianglePrevious} alt="buttonPrevious"  />
                        </button>
                        <img className="CoverPoster" src={poster} alt="book"   />

                        <button className="Buttons " onClick={nextMovie}> 
                            <img src={triangleNext} alt="buttonNext"  />
                        </button>
                    </div>
                    <p className="Title" > {title} </p>
                    <p className="SummaryBookMovie" > {summary} </p>
                    <p className="DirectorPage" > Director: {directors} </p>
                </div>
            )
              //иначе вернется 
            :null }
        </div>
    );

}
export default Movies;

