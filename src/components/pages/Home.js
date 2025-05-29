import React from 'react'
import './Home.css'

import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
    <div className='content'>
      <div className='home_title'>
        {t('home_title')}
      </div>
      <div className='home'>
          
          <div className='home_names'>
            {t('home_names')}
          </div>
          <hr className='line'/>
          <div className='date'>
            <div className='date_cell'>
              <div className='date_cell_text'>{t('home_month')}</div>
              <div>{t('home_month_nbr')}</div>
            </div>
            <div className='date_cell'>
              <div className='date_cell_text'>{t('home_day')}</div>
              <div>{t('home_day_nbr')}</div>
            </div>
            <div className='date_cell'>
              <div className='date_cell_text'>{t('home_year')}</div>
              <div>{t('home_year_nbr')}</div>
            </div>
          </div>
          <hr className='line'/>
          <div className='place'>
            {t('home_place')}
            <div className='place_city'>
              {t('home_place_city')}
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home
