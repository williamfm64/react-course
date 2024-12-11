import "./textbox.css"

const TextBox = (props) => {

    const valueSetter = (e) =>{
        props.valueOnChange(e.target.value)
    }

    return (
        <div className="text-box">
             <label>{props.label}</label>
             <input 
                type="text"
                value={props.value}
                placeholder={props.placeholder} 
                required={props.mustHave}
                onChange={valueSetter}
            ></input>
        </div>
    )
}

export default TextBox;