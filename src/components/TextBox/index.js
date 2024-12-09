import { useState } from "react";
import "./textbox.css"

const TextBox = (props) => {
    const [value, setValue] = useState('');

    const valueSetter = (e) =>{
        setValue(e.target.value)
        console.log(value);
    }

    return (
        <div className="text-box">
             <label>{props.label}</label>
             <input 
                type="text" 
                placeholder={props.placeholder} 
                required={props.mustHave}
                onChange={valueSetter}
            ></input>
        </div>
    )
}

export default TextBox;