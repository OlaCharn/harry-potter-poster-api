import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import noImage from "./hp_head-removebg-preview.png"
import { LoaderPage } from './Loader/LoaderPage';


function CharactersApi(){
    //динамическое отображение персонажа по id

    const [ characters, setCharacters] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //ставим Loader. При этом его первоначальное состояние - "отключено"
    //setStateLoader - тут меняем его состояние уже в API функции
    const [stateLoader, setStateLoader] = useState(false);



    useEffect(()=>{
        const getCharacter = async () => {
            setStateLoader(true); //запускаем Loader на время ожидания ответа
            try {
                const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

                if (!response.ok) {
                    setStateLoader(false); //Loader не нужен
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data && Object.keys(data).length > 0) {
                    setCharacters(data);
                } else {
                    setError(`Character not found for id: ${id}`);
                }
            } catch (error) {
                setError(`Error fetching character: ${error.message}`);
            } finally {
                setStateLoader(false); //Loader не нужен
                setLoading(false);
            }
        };

    getCharacter()
    },[id]);

if (loading) {
    return <div> <LoaderPage /> </div>;
}

if (error) {
    return <div>Error: {error}</div>;
}

    return (
        <div className="App">
        {stateLoader && <LoaderPage />}
        
        {characters.map((character) => (
            <div key={character.id} >
                {character.image 
                ? (<img src={character.image} alt="pics" width="200px" />) 
                : ( <img src={noImage} alt="no" width="200px"  /> )
                }  
                <h1 className='CharacterNameAPI CharacterNameAPIh2'>{character.name}</h1>
                <p className='CharacterNameAPI' > Year of Birth: {character.yearOfBirth} </p>
                <p className='CharacterNameAPI'> Species: {character.species} </p>
                <p className='CharacterNameAPI'> Faculty: {character.house} </p>
                <p className='CharacterNameAPI'> Patronus: {character.patronus ? character.patronus : "unknown" } </p>
                <ul>
                    <p className='CharacterNameAPI'>Wand is created from: </p>
                    <li className='CharacterNameAPI'> Wood:  {character.wand.wood ? character.wand.wood : "unknown"} </li>
                    <li className='CharacterNameAPI'> Core: {character.wand.core ? character.wand.core : "unknown"} </li>
                    <li className='CharacterNameAPI'> Length:{character.wand.length ? character.wand.length : "unknown" } </li>
                </ul>
            </div>
        ))}
    </div>
    );
}
export default CharactersApi;
