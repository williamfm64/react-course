import './tool.css'
import { useContext } from 'react'
import { AppState } from '../../pages/Home'

function Tool({ visible, id }) {

    const context = useContext(AppState)

    const { deleteCoworker, updateCoworker } = context

    return (
        visible ?
            <div className="tool">
                <img onClick={() => updateCoworker(id)} src="/images/gear.png" alt="edit"></img>
                <img onClick={() => deleteCoworker(id)} src="/images/trash.png" alt="delete"></img>
            </div>
            : null
    )
}

export default Tool