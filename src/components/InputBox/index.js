import "./inputBox.css"

const InputBox = ({ label, placeholder, value, required = false, valueOnChange, type = 'text' }) => {

    const valueSetter = (e) => {
        valueOnChange(e.target.value)
    }

    return (
        <div className={`input-box input-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={valueSetter}
            ></input>
        </div>
    )
}

export default InputBox;