function Tool({ visible }) {
    return (
        visible ?
            <div>
                <img src="/images/gear.png" alt="edit"></img>
                <img src="/images/trash.png" alt="delete"></img>
            </div> : ''
    )
}

export default Tool