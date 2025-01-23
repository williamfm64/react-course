import './footer.css'

function Footer() {
    return (
        <div className="footer-content">
            <div className='social-media'>
                <img src="/images/fb.png" alt='Facebook' />
                <img src="/images/tw.png" alt='Twitter' />
                <img src="/images/ig.png" alt='Instagram' />
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt='Organo' />
            </div>
            <div className='credits'>
                <h5>Desenvolvido por William Monteiro</h5>
            </div>
        </div>
    )
}

export default Footer