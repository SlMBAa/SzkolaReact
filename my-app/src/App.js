import React, { Fragment, useState } from 'react';
import './App.css';
import { nanoid} from 'nanoid';
import data from "./data.json";
import ReadOnlyRow from './components/readOnlyRow';
import EditableRow from './components/EditableRow';

const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    imie: "",
    nazwisko: ""
  });

  const [editFormData, setEditFormData] = useState({
    imie: "",
    nazwisko: ""
  });

  const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newConcact = {
      id: nanoid(),
      imie: addFormData.imie,
      nazwisko: addFormData.nazwisko
    };

    const newConcacts = [...contacts, newConcact];
    setContacts(newConcacts)
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      imie: editFormData.imie,
      nazwisko: editFormData.nazwisko
    };

    const newConcacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id===editContactId);

    newConcacts[index] = editedContact;

    setContacts(newConcacts);
    setEditContactId(null);
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      imie: contact.imie,
      nazwisko: contact.nazwisko
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts)
  }
  

  return <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Imie</th>
              <th>Nazwisko</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                { editContactId === contact.id ? (
                  <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                    ) : (
                  <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                )}
              </Fragment>
              
            ))}
          </tbody>
        </table>
      </form>
      <h2>Dodaj osobę</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name='imie' required="required" placeholder='Wpisz imię' onChange={handleAddFormChange}/>
        <input type="text" name='nazwisko' required="required" placeholder='Wpisz nazwisko' onChange={handleAddFormChange}/>
        <button type='submit'>Dodaj</button>
      </form>
    </div>;
  
}

export default App;
