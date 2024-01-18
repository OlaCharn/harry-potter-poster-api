import { useState } from "react"
import Books from "./Books"
import Movies from "./Movies"
import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

//логика кода внизу

function ChangeBooksMovies(){

    const container = useRef(); // <-- for GSAP

    useGSAP(() => {
        // gsap code here...
        gsap.to(".ChangeButton",{
            x: -15,
            yoyo: true, // возврат к начальному состоянию после каждого повторения
            scale: 1.1,
            duration: 2 , 
            ease:"bounce",
            repeat:50,
        }); 
    }, { scope: container }) // <-- scope for selector text (optional)

    const [category, setCategory] = useState("books")

    const handleCategoryChange = (selectedCategory) =>{
        setCategory(selectedCategory)
    }
    return(
        <div >        
            <div className="BooksMovies" ref={container}>
                <button className="ChangeButton" onClick={ ()=> handleCategoryChange("books") } > BOOKS </button>
                <button className="ChangeButton" onClick={ () =>handleCategoryChange("movies") } > MOVIES </button>
            </div>

            <div className="BooksMovies"> {category === "books" ? <Books /> : <Movies />} </div>
        </div>
    )
}
export default ChangeBooksMovies;

//Задача 
//у меня есть 2 компонента : книги и фильмы. 
//И на странице есть 2 кнопки книги и фильмы. 
//Если я нажимаю на книпку книги, то хочу увидеть книги, 
//если на фильмы, то хочу увидеть фильмы.
// РЕШАЮ так...
//Используется состояние category, чтобы отслеживать текущий выбор (книги или фильмы).
//useState написано "books", чтобы инициализировать начальное значение состояния как "books"
//Кнопки Books и Movies изменяют состояние при нажатии, выбирая соответствующую категорию.
//В зависимости от текущей категории рендерится соответствующий компонент (Books или Movies).