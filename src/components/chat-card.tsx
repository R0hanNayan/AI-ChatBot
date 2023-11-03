"use client"
import { useState } from "react";
import { Chat } from "./chat";

function Card(){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ()=> {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            {
                !isOpen ? (
                    <div className="absolute bottom-12 right-9" >
                        <button className="animate-bounce shadow-2xl shadow-black rounded-full h-16 w-16" onClick={() => handleClick()}><img src="./assets/Logo.png" alt="Logo" /></button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <Chat />
                        </div>
                        <div className="absolute bottom-9 right-9" >
                            <button className="animate-bounce shadow-2xl rounded-full h-16 w-16" onClick={() => handleClick()}><img src="./assets/Logo.png" alt="Logo" /></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card;
