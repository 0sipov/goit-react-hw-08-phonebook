import React from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { Row, Col, Container } from 'react-bootstrap';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const ContactsView = () => {
  return (
    <div>
      <h1
        className="pt-3"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        Phone book
      </h1>
      <ContactForm className="ml-auto mr-auto" />
      <h2
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
