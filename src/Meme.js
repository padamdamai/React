import { React } from "react";
export default function Meme(){
    return (
        <main>
         <form className="form">
            <input type="text" className="form-inputs" placeholder="happy journey"/>
            <input type="text" className="form-inputs" placeholder="sad journey"/>
            <button className="form-buttom">Get a new meme image 💀 </button>
         </form>
        </main>
    )
}