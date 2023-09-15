import { Link } from 'react-router-dom';
import css from '../Hero/Hero.module.css';

const Hero = () => {
    return (
        <div>
            <div className={css.heroBacground}>
                <div className={css.heroWrap}>
                    <h1 className={css.heroTitle}>Rent your car</h1>
                    <p className={css.heroText}>take your best trip</p>
                    {/* <button className={css.heroBtn} type="button">Rental car</button> */}
                    <Link href="tel:+380730000000"className={css.heroBtn}>Rental car</Link>
                </div>
          </div>
          <div className={css.container}>
              <h2 className={css.benefitsTitle}>Our benefits</h2>
              <ul className={css.benefitsList}>
                  <li className={css.benefitsItem}>
                      <div className={css.qualityImg}></div>
                      <p className={css.benefitsText}>Quality vehicles</p>
                  </li>
                  <li className={css.benefitsItem}>
                      <div className={css.serviceImg}></div>
                      <p className={css.benefitsText}>Customer service 24/7</p>
                  </li>
                  <li className={css.benefitsItem}>
                      <div className={css.lowImg}></div>
                      <p className={css.benefitsText}>Low-cost car rental</p>
                  </li>
              </ul>
          </div>
        </div>
    )
}

export default Hero;