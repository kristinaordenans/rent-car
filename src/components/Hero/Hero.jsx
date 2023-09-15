import css from '../Hero/Hero.module.css';

const Hero = () => {
    return (
        <div>
            <div className={css.heroBacground}>
                <div className={css.heroWrap}>
                    <h1 className={css.heroTitle}>Rent your car</h1>
                    <p>Take your best trip</p>
                    <button type="button">rental car</button>
                </div>
          </div>
          <div>
              <h2>Our benefits</h2>
              <ul>
                  <li>
                      <img src="" alt="" />
                      <p>Quality vehicles</p>
                  </li>
                  <li>
                      <img src="" alt="" />
                      <p>Low-cost car rental</p>
                  </li>
                  <li>
                      <img src="" alt="" />
                      <p>Customer service avalible 24/7</p>
                  </li>
              </ul>
          </div>
        </div>
    )
}

export default Hero;