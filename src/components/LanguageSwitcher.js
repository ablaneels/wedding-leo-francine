import React, { useState } from 'react';
import i18n from '../i18n';
import './LanguageSwitcher.css'

function LanguageSwitcher ({ t }) {
  const [selectedLang, setSelectedLang] =  useState(i18n.language || 'en');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng); // Store the selected language
  };
  return (
    <div className='lang'>
      <button className={selectedLang === 'en' ? 'selected_button' : 'button'} onClick={() => changeLanguage('en')}>En</button>
      <div className='separator'>|</div>
      <button className={selectedLang === 'fr' ? 'selected_button' : 'button'} onClick={() => changeLanguage('fr')}>Fr</button>
      {/* Add more language buttons as needed */}
    </div>
    );
  };
  export default LanguageSwitcher;