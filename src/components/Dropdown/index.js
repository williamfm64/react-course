import './dropdown.css'

function Dropdown (props){
    return(
        <div className='dropdown-box'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>  
    )
}

export default Dropdown