import React from 'react'
import './Venue.css'
import { useTranslation } from 'react-i18next';

function Venue() {
    const { t } = useTranslation();
  return (
    <div className='venue'>
      <div className='title'>
        {t('venue_title')}
        <div className='website'>{t('venue_website')}</div>
      </div>
      <div className='tabs'>
        <div className='tab'>{t('venue_about')}</div>
        <div className='tab'>|</div>
        <div className='tab'>{t('venue_sleeping')}</div>
        <div className='tab'>|</div>
        <div className='tab'>{t('venue_transportation')}</div>
      </div>
      <hr className='line'/>
      <div>
        <div className='subtab_title'>{t('venue_description_title')}</div>
        <div className='subtab_text'>{t('venue_description_text')}</div>
      </div>
      <div>
        <div className='subtab_title'>{t('venue_accommodation_title')}</div>
        <div className='subtab_text'>{t('venue_accommodation_text')}</div>
      </div>
      <hr className='line'/>
      <div>
        <div className='subtab_title'>{t('venue_address_title')}</div>
        <div className='subtab_text'>{t('venue_address_text')}</div>
      </div>
    </div>
  )
}

export default Venue
