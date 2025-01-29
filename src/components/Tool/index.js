import './tool.css'
import { useContext } from 'react'
import { AppState } from '../../pages/Home'

function Tool({ visible, id }) {

    const context = useContext(AppState)

    const { deleteCoworker } = context

    return (
        visible ?
            <div className="tool">
                <img onClick={() => deleteCoworker(id)} src="/images/trash.png" alt="delete"></img>
            </div>
            : null
    )
}

export default Tool