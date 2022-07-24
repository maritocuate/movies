import './styles.scss'

export function Footer () {
  return (
    <footer className="footer">
        <div className="footer-top">
            <img
                src="../images/logo.png"
                alt="Dreadful Tomato"
                className="footer__logo"
            />
            <ul className="footer-links">
                <li className="footer-links__item">Home</li>
                <li className="footer-links__item">Terms of Use</li>
                <li className="footer-links__item">Legal Notices</li>
                <li className="footer-links__item">Help</li>
                <li className="footer-links__item">Mange Account</li>
            </ul>
        </div>
        <div className="footer-bottom">
            <div className="footer-app">
                <img
                src="../images/app-store.png"
                alt="app store"
                className="footer-app__img"
                />
                <img
                src="../images/google-play.png"
                alt="google-play store"
                className="footer-app__img"
                />
            </div>
            <p className="footer__copyright">
                Copyright 2022 Tomato Streaming All Rights Reserved
            </p>
        </div>
    </footer>
  )
}
