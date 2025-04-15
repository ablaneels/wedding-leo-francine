import React from 'react'
import './Pages.css'

function Venue() {
  return (
    <div className='home'>
      <div className='text-bold'>DOMAINE DE MILLON</div>
      <div className='text'>DOMAINEDEMILLON.FR</div>
      <div className='venue'>
        <div className='text-venue'>ABOUT</div>
        <div className='text-venue'>|</div>
        <div className='text-venue'>SLEEPING</div>
        <div className='text-venue'>|</div>
        <div className='text-venue'>TRANSPORTATION</div>
      </div>
      <div className='line-parent'>
        <hr className='line'/>
      </div>
      <div className='text'>DESCRIPTION</div>
      <div className='text-paragraphe'>The SEVEN ACRES Domaine de Millon, on which is located a Basque-Landes mansion, independent lodgings in the middle of the forest, is a natural space in which you can enjoy your family and friends in complete serenity and security.<br/>The little extra of the Domaine is certainly the pond… A true haven of peace.</div>
      <div className='text'>ACCOMMODATION</div>
      <div className='text-paragraphe'>Our five cottages, four of which have their own swimming pool, are at your disposal from Friday to Sunday (22 beds) and on Saturday evening you will have at your disposal our guest rooms in the family home (11 beds).<br/>A total of 33 beds to enjoy your families and friends in complete harmony and tranquility.</div>
      <div className='line-parent'>
        <hr className='line'/>
      </div>
      <div className='text'>ADDRESS</div>
      <div className='text-paragraphe'>682 Route de Millon, 40140 Soustons, France</div>
    </div>
  )
}

export default Venue
