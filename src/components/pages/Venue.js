import React, { useState } from 'react'
import './Venue.css'
import { useTranslation } from 'react-i18next';

function Venue() {
    const { t } = useTranslation();

      // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('about');

    // Function to handle tab switching
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div className='venue'>
      <div className='title'>
        {t('venue_title')}
        <div className='website'>{t('venue_website')}</div>
      </div>
      <div className='tabs'>
        <div
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          {t('venue_about')}
        </div>
        <div className='tab'>|</div>
        <div
          className={`tab ${activeTab === 'sleeping' ? 'active' : ''}`}
          onClick={() => handleTabClick('sleeping')}
        >
          {t('venue_sleeping')}
        </div>
        <div className='tab'>|</div>
        <div
          className={`tab ${activeTab === 'transportation' ? 'active' : ''}`}
          onClick={() => handleTabClick('transportation')}
        >
          {t('venue_transportation')}
        </div>
      </div>
      <hr className='line'/>
      <div className='venue'>
        {activeTab === 'about' && (
          <>
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
          </>
        )}

        {activeTab === 'sleeping' && (
          <>
            <div className='subtab_title'>sleeping</div>
            <div className='subtab_text'></div>
          </>
        )}

        {activeTab === 'transportation' && (
          <>
            <div className='subtab_title'>transportation</div>
            <div className='subtab_text'></div>
          </>
        )}
      </div>
    </div>
  )
}

export default Venue
