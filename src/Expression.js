import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

function Expression(){

    const container = useRef(); // <-- for GSAP

    useGSAP(() => {
        // gsap code here...
        gsap.to(".Pexpres",{
            text: "It`s not our abilities that show what we truly are- It`s our choises.",
            duration: 10,
            repeat: 15,
            //pereatDelay: 0.7,
            ease: "power1.in",
            //yoyo:true,
        }); 
    }, { scope: container }) // <-- scope for selector text (optional)
    
    return(
        <div className="Expression" ref={container}>
            <p className="Pexpres" ></p>
        </div>
    )
}
export default Expression;