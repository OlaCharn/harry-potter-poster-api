import { useEffect, useState } from "react"
import stick from "./stick-removebg-preview.png"
import snitch from "./clipart3272313.png"
import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package


function Spell() {

    const container = useRef(); // <-- for GSAP
    
    useGSAP(() => {
        // gsap code here...
        gsap.to(".SpellsButton",{
            scale: 1.1,
            duration: 2 , 
            ease:"bounce",
            repeat:50,
            yoyo:true
        }); 
        }, { scope: container }) // <-- scope for selector text (optional)

        const containerTwo = useRef(); // <-- for GSAP
        useGSAP(() => {
            // gsap code here...
            gsap.to(".SnitchTwo",{
                rotationX:160,  
                rotationY:720,
                duration: 2 , 
                repeat:50,
                //delay: 0.1,
                stagger:1
                }); 
            }, { scope: containerTwo }) // <-- scope for selector text (optional)
    
        const [spell, setSpell] = useState([]);
    
        useEffect(() => {
            const getSpell = async () => {
                const response = await fetch("https://hp-api.onrender.com/api/spells");
                const data = await response.json();
                setSpell(data);
            }
            getSpell();
        }, []);
    
        const [index, setIndex] = useState(0);
        const { name, description} = spell.length > 0 ? spell[index] : {};

        const nextSpell = () =>{
            setIndex((index =>{
                index ++;
                if(index > spell.length -1){
                    index = 0;
                }
                return index;
            }))
        };
        
        return (
            <div className="SpellsBlock">
                <div className="ListofSpells"> 
                 Spells                
                 </div>


                <div>
                    {spell.length > 0 ? (
                     //// Этот код выполнится только если spell.length > 0
                    <div className="SpellsNameAndDescription">
                        <p className="SpellsDescription"> {description}</p>
                        <h2 className="SpellsName"> "{name}" </h2>
                    </div>
                    )
                     //иначе вернется 
                    :null }
                </div>
                <div className="Stick">
                    <img src={stick} alt="stick" width="100px" height="500px" />
                </div>

                <div className="Snitch" ref={containerTwo} >
                    <img src={snitch} alt="snitch" width="65px" className="SnitchTwo" />
                </div>
                
                <div ref={container}>
                    <button className="SpellsButton" onClick={nextSpell}>give me next Spell</button>
                </div>

            </div>
            );
    }
    export default Spell;
    

