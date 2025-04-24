import React from 'react'
import './Rsvp.css'
import { useTranslation } from 'react-i18next';

import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Rsvp() {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltqr958', 'template_jlo52kr', form.current, 'etExhhBO_Fa8Q3gmx')
      .then((result) => {
          console.log('Email sent:', result.text);
          alert('Message sent!');
      }, (error) => {
          console.log('Error:', error.text);
          alert('Something went wrong.');
      });

    e.target.reset();
  };
  return (
    <>
    <div className='rsvp'>
      <div className='type1_container'>
        <div className='title'>{t('rsvp_title')}</div>
        <div className='text'>{t('rsvp_text')}</div>
      </div>
        <hr className='line'/>
      <Form className='form' ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className='form_label'>{t('rsvp_name')}</Form.Label>
          <Form.Control
            name='user_name'
            className='form_placeholder'
            required
            type="text"
            placeholder={t('rsvp_name_placeholder')}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forEmail">
          <Form.Label className='form_label'>{t('rsvp_email')}</Form.Label>
          <Form.Control
            name='user_email'
            className='form_placeholder'
            required
            type="text"
            placeholder={t('rsvp_email_placeholder')}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forPeople">
          <Form.Label className='form_label'>{t('rsvp_nbr_people')}</Form.Label>
          <Form.Control
            name='number_of_people'
            className='form_placeholder'
            required
            type="text"
            placeholder={t('rsvp_nbr_people_placeholder')}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        </Form.Group>
        <Button className='button' type="submit">
          {t('rsvp_button')}
        </Button>
      </Form>
      <div className='type1_container'>
      <div className='title'>{t('rsvp_not_allowed_title')}</div>
      <div className='text'>{t('rsvp_not_allower_text')}</div>
      </div>
    </div>
    </>
  )
}

export default Rsvp
