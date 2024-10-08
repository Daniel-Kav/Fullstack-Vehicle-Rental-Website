import { Link } from 'react-router-dom';

import { BookBanner, Footer, HeroPages, Navbar } from '../components';

import { IconCar, IconStar } from '@tabler/icons-react';

import { CAR_DATA } from '../components/CarData';

const Models: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className='models-section'>
        <HeroPages name='Car Models' />
        <div className='container'>
          <div className='models-div'>
            {/* models */}
            {CAR_DATA.map((car, index) => (
              <div key={index} className='models-div__box'>
                <div className='models-div__box__img'>
                  <img src={car[0].img} alt='' width='270' height='180' />
                  <div className='models-div__box__descr'>
                    <div className='models-div__box__descr__name-price'>
                      <div className='models-div__box__descr__name-price__name'>
                        <p>{car[0].model}</p>
                        <span>
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                        </span>
                      </div>
                      <div className='models-div__box__descr__name-price__price'>
                        <h4>${car[0].price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className='models-div__box__descr__name-price__details'>
                      <span>
                        <IconCar /> &nbsp; {car[0].mark}
                      </span>
                      <span style={{ textAlign: 'right' }}>
                        {car[0].doors} &nbsp; <IconCar />
                      </span>
                      <span>
                        <IconCar /> &nbsp;{' '}
                        {car[0].transmission === 'Automático' ? 'Automatic' : car[0].transmission}
                      </span>
                      <span style={{ textAlign: 'right' }}>
                        {car[0].fuel} &nbsp; <IconCar />
                      </span>
                    </div>
                    <div className='models-div__box__descr__name-price__btn'>
                      <Link onClick={() => window.scrollTo(0, 0)} to='/login'>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* book banner */}
        <BookBanner />
        {/* footer */}
        <Footer />
      </section>
    </>
  );
};

export default Models;
