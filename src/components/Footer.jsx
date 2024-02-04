import '../Sass/Footer.scss'
import logofooter from '../assets/logofooter.png'

function Footer() {
    return (
        <>
            <div className="foot">
                <img src={logofooter} alt="logo blanc du footer" className="logofooter" />
                <p className="text-footer">© 2020 Kasa. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer
