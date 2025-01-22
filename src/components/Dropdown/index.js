import './dropdown.css'

function Dropdown (props){
    const valueSetter = (e) => {
        props.valueOnChange(e.target.value)
    }

    return(
        <div className='dropdown-box'>

            <label>{props.label}</label>
            <select required={props.mustHave} value={props.value} onChange={valueSetter}>
                <option value=""/>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>  
    )
}

export default Dropdown