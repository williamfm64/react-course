import './dropdown.css'

function Dropdown(props) {
    const valueSetter = (e) => {
        props.valueOnChange(e.target.value)
    }

    return (
        <div className='dropdown-box'>

            <label>{props.label}</label>
            <select required={props.required} onChange={valueSetter}>
                <option value="" />
                {props.items.map(team => {
                    return <option key={team.id} value={team.id}>{team.name}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown