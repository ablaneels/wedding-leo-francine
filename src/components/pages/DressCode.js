import React from 'react'
import { useTranslation } from 'react-i18next';
import './DressCode.css'

function DressCode() {
  const { t } = useTranslation();
  return (
    <div className='content'>
      <div className='dresscode'>
        <div className='title'>{t('dressCode_title')}</div>
        <hr className='line'/>
        <div className='color_title'>
          {t('dressCode_color_title')}
          <div className='color'/>
        </div>
        <div className='style_title'>
          {t('dressCode_style_title')}
          <div className='style'>{t('dressCode_style')}</div>
        </div>
        <div className='forbidden_title'>
          {t('dressCode_forbidden_title')}
          <div className='forbidden'>{t('dressCode_forbidden')}</div>
        </div>
      </div>
    </div>
  )
}

export default DressCode
