import React from 'react';

const ReadOnlyRow = ({ contact , handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{contact.imie}</td>
            <td>{contact.nazwisko}</td>
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, contact)}>Edytuj</button>
                <button type='button' onClick={()=> handleDeleteClick(contact.id)}>Usuń</button>
            </td>
        </tr>
    );
}

export default ReadOnlyRow;
