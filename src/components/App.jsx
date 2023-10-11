import React, { useEffect, useState } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  const mapState = {
    // filter: setFilter,
  };

  // useEffect(()=>{
  //   const contactsFromLocal = JSON.parse(window.localStorage.getItem("contacts"))
  //       if (contactsFromLocal?.length) {
  //         setContacts(contactsFromLocal)
  //       }
  // },[])

  // useEffect((prev)=>{
  //   if (prev !== contacts) {
  //           window.localStorage.setItem("contacts", JSON.stringify(contacts))
  //         }
  // },[contacts])

  const handleChangeInput = e => {
    const { name, value } = e.target;
    mapState[name](value);
  };

  const handleAddContact = ({ name, number }) => {
    dispatch({ type: 'phoneBook/addContact', payload: { name, number } });
  };

  const handleDeleteContact = id => {
    dispatch({ type: 'phoneBook/deleteContact', payload: id });
    // setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filteredData = filteredContacts();

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <Form addContact={handleAddContact} />
      {contacts.length ? (
        <>
          <h2>Contacts</h2>
          <Filter onFilterChange={handleChangeInput} filterValue={filter} />
          <ContactsList
            // contacts={filteredData}
            filterValue={filter}
            deleteContact={handleDeleteContact}
          />
        </>
      ) : (
        'There are no contacts'
      )}
    </div>
  );
};

export default App;
