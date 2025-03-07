import logo from '../../assets/icons/scan-white-logo.svg';
import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>

                <div className={styles.footer__content}>

                    <div className={styles.footer__logo}>
                        <img src={logo} alt='логотип' />
                    </div>

                    <div className={styles.footer__contacts}>
                        <span className={styles.contacts__item}>г. Москва, Цветной б-р, 40</span>
                        <span className={styles.contacts__item}>+7 495 771 21 11</span>
                        <span className={styles.contacts__item}>info@skan.ru</span>
                        <p className={styles.contacts__item}>copyright 2022</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}