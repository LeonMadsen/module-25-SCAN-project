import { useState, useEffect } from 'react';
import { useAppSelector } from '../../store/hook';
import { useNavigate } from 'react-router-dom';
import { Tarifs } from '../../components/Tarifs/Tarifs';
import { Carousel } from '../../components/Carousel/Carousel';
import heroImg from '../../assets/images/hero-img.jpg';
import homeLeftImg from '../../assets/images/home-left1.jpg';
import homeRightImg from '../../assets/images/home-right.jpg';
import styles from './Homepage.module.scss';

export const Homepage: React.FC = () => {
    const [error, setError] = useState(false);
    const isLogged = useAppSelector((state) => state.auth.isLogged);
    const navigate = useNavigate();

    function handleNavigate() {
        if (isLogged) {
            navigate("/search");
            setError(false);
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        if (error) setTimeout(() => setError(false), 2000);
    }, [error])

    return (
        <div className="container">

            <section className={styles.hero__section}>
                <div className={styles.hero__text_wrapper}>
                    <h1 className={styles.hero__title}>сервис по поиску публикаций<br/>о компании<br/>по его ИНН</h1>
                    <p className={styles.hero__subtitle}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <div className={styles.hero__button_wrapper}>
                    {isLogged && (
                        <button onClick={handleNavigate} type='button' className={styles.hero__btn}>Запросить данные</button>
                    )}
                        </div>
                </div>

                <div className={styles.hero__image_wrapper}>
                    <img src={heroImg} alt='изображение' />
                </div>

            </section>

            <section className={styles.carousel__section}>
                <h1 className={styles.carousel__title}>Почему именно мы</h1>
                <div className={styles.carousel__wrapper}>
                    <Carousel />
                </div>
            </section>

            <section className={styles.home__image_section}>
                <div className={styles.home__left__image}>
                    <img src={homeLeftImg} alt='стрелочка влево' />
                </div>
                <div className={styles.home__rigth__image}>
                    <img src={homeRightImg} alt='стрелочка вправо' />
                </div>
            </section>

            <section className={styles.tarifs__section}>
                <h1 className={styles.tarifs__title}>наши тарифы</h1>
                <div className={styles.tafifs__cards}>
                    <Tarifs />
                </div>
            </section>
        </div>
    )  
}
