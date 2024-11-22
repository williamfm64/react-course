import "./textbox.css"

const TextBox = (props) => {
    return (
        <div className="text-box">
             <label>{props.label}</label>
             <input type="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextBox;