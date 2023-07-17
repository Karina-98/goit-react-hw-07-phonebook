

import { Titles } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts } from 'service/getApi';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';


export const App = () => {
  const dispatch = useDispatch();
const contacts = useSelector(getContacts)
console.log(contacts)
useEffect(() => {
   dispatch(getAllContacts());
 
}, [dispatch]);

   return (
    <Container>
      <Titles>Phonebook</Titles>
      <ContactForm />

      <Titles>Contacts</Titles>
      
        <Filter  />
     
    <ContactList/>
      
    </Container>
  );
};