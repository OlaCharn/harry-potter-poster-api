import head from "./assets/hp_head-removebg-preview.png";
import snitch from "./assets/clipart3272313.png"
import booksPattern from "./assets/43445__2_-removebg-preview.png"
import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package


function Heading(){

    const container = useRef(); // <-- for GSAP
    useGSAP(() => {
        // gsap code here...
        gsap.to(".Snitch",{
            rotationX:160,  
            rotationY:720,
            duration: 2 , 
            repeat:50,
            //delay: 0.1,
            stagger:1
            }); 
    }, { scope: container }) // <-- scope for selector text (optional)

    return(
        <div className="One">
            <div className="HeadAndBlocks">
                <div className="Rectangle"></div>
                <div > <img src={head} alt="head" className="Head" /> </div>
                <div className="Rectangle"></div>

            </div>
            <div>
                <p className="HarryPotter">Harry Potter</p>
            </div>

            <div className="SnitchAndSummary" ref={container}>
                <img className="Snitch" src={snitch} alt="snith" />
                <div className="SummaryDisp">
                    <p className="Summary">A SUMMARY OF STORIES FOR ALL TYPES OF POTTERHEADS</p>
                    <img className="BookPattern" src={booksPattern} alt="bookspattern" />
                </div>
            </div>
        </div>
    )
}
export default Heading;