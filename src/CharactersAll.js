
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import noImage from "./hp_head-removebg-preview.png"


function CharactersAll(){

    const [characters, setCharacters] = useState([]);



    useEffect(()=>{
        const getCharacter = async() =>{
            const responce = await fetch(`https://hp-api.onrender.com/api/characters`);
            const data = await responce.json();
            setCharacters(data)
        }
        getCharacter()
    },[]);


    //search
    const [value, setValue] = useState("");

    const filteredCharacter = characters.filter(character => {
        return character.name.toLowerCase().includes(value.toLowerCase())
        })

    return(
        <div className='CharactersAll'>
            <div className='CharactersHeadline'>

                <div className='form'>
                    <form className='search_form' >
                        <input 
                        type="text"
                        placeholder="SEARCH" 
                        className="search_input"
                        onChange={(event) => setValue(event.target.value)} />
                    </form>
                </div>
            </div>

            <div className='ListofCharacters' > All characters {characters.length} </div>

            <div className='characters' >
            {
            filteredCharacter.map((char) => {
            const {image, id, name} = char;
            return (
            <div className='cardOfCharacter' key= {id} >
                <Link className=' h2' to={`/CharactersApi/${id}`} >
                    <div className=" AvatarImage">
                        <img  src = {image ? image : noImage } width="150px"  alt={image ? "Portrait" : "No Portrait"} />
                    </div>
                    <p className='CharacterName'> {name} </p>
                </Link>
            </div>
            )
            })
            }
            </div>
        </div>
    )
}
export default CharactersAll;

