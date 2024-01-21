import { useEffect, useState } from "react";
import "./App.css"
import triangleNext from "./assets/icons8-triangle-64.png"
import trianglePrevious from "./assets/icons8-triangle-64-2.png"


function Books(){

    //API
    const [book, setBooks] = useState([]);

    useEffect(()=>{
        const getBooks = async() =>{
            const responce = await fetch("https://potterhead-api.vercel.app/api/books");
            const data = await responce.json()
            setBooks(data)
        }
        getBooks()
    },[]);


    //Slides

    const [index, setIndex] = useState(0);

    
    //const {cover, title, serial} = book[index]

    const { cover, title, summary, release_date, pages} = book.length > 0 ? book[index] : {};

     /* 1. book.length > 0: Эта часть проверяет, что массив book не пуст. .
    Если длина массива больше нуля, условие будет истинным.
    2. book[index]: Если массив book не пуст, тогда мы берем элемент массива по индексу index.
    3. : {}: Если массив book пуст, мы присваиваем пустой объект {}. 
    Таким образом, если book пуст, переменные cover, title, и serial будут иметь значения по умолчанию,
    и не будет ошибки при деструктуризации.*/



    const previousBook =() =>{
        setIndex((index=>{
            index--;
            if(index<0){
                index = book.length -1;
            }
            return index;
        }))
    }

    const nextBook = () =>{
        setIndex((index =>{
            index ++;
            if(index > book.length -1){
                index = 0;
            }
            return index;
        }))
    }

    if (!book || book.length === 0) {
        return <p>Loading...</p>;
    }
    
    return (
        <div className="BooksMovies">
            {book.length > 0 ? (
                //// Этот код выполнится только если book.length > 0
                <div className="BooksMoviesName" >
                    <div className="ReleaseDate"> 
                        <p className="Release"> RELEASED IN: {release_date} </p>
                        <button onClick={previousBook} className="Buttons " >
                            <img src={trianglePrevious} alt="buttonPrevious"  />
                        </button>

                        <img src={cover} className="CoverPoster" alt="book" />

                        <button onClick={nextBook} className="Buttons " >
                            <img src={triangleNext} alt="buttonNext"  />
                        </button>

                    </div>
                    <p className="Title">{title}</p>
                    <p className="SummaryBookMovie" > {summary} </p>
                    <p className="DirectorPage" > Pages: {pages} </p>
                </div>
            )
            //иначе вернется 
            :null }
        </div>
    );
    
    }

export default Books;

