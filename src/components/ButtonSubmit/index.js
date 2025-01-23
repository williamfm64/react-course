import './buttonSubmit.css'

function ButtonSubmit(props) {
    return (
        <div className='button-submit'>
            <button>{props.children}</button>
        </div>
    )
}

export default ButtonSubmit