import './style.scss'

const index = () => {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <a href="./index.html" className='nav__logo'>
                        NOICELAND
                    </a>

                    <ul className='nav__list'>
                        <li className='nav__list--itemm'><a href="#" className='nav__list--itemm-link'>Home</a></li>
                        <li className='nav__list--itemm'><a href="#" className='nav__list--itemm-link'>About</a></li>
                        <li className='nav__list--itemm'><a href="#" className='nav__list--itemm-link'>Service</a></li>
       
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default index