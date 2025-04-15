import React from 'react'
import './Pages.css'

function Home() {
  return (
    <>
    <div className='home'>
        <div className='text'>
          SAVE THE DATE
        </div>
        <div className='text-bold'>
          FRANCINE TORRES & LEO BLOUARD
        </div>
        <div className='line-parent'>
          <hr className='line'/>
        </div>
        <div className='date'>
          <div>
            <div className='text'>MONTH</div>
            <div className='text-date'>06</div>
          </div>
          <div>
            <div className='text'>DAY</div>
            <div className='text-date'>27</div>
          </div>
          <div>
            <div className='text'>YEAR</div>
            <div className='text-date'>26</div>
          </div>
        </div>
        <div className='line-parent'>
          <hr className='line'/>
        </div>
        <div className='text-place'>
          DOMAINE DE MILLON
        </div>
        <div className='text'>
          SOUSTONS, FRANCE
        </div>
    </div>
    </>
  )
}

export default Home
