import './tool.css'
import { SlClose } from "react-icons/sl";
import { useContext } from 'react'
import { AppState } from '../../pages/Home'

function Tool({ visible, id }) {

    const context = useContext(AppState)

    const { deleteCoworker } = context

    return (
        visible ?
            <div className="tool">
                <SlClose onClick={() => deleteCoworker(id)} />
            </div>
            : null
    )
}

export default Tool