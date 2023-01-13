import React from 'react';

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="imie"
                    required="required"
                    placeholder="Wpisz imię"
                    value={editFormData.imie}
                    onChange={handleEditFormChange}
                    >
                </input>
                
            </td>
            <td>
                <input
                    type="text"
                    name="nazwisko"
                    required="required"
                    placeholder='Wpisz nazwisko'
                    value={editFormData.nazwisko}
                    onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <button type='submit'>Zapisz</button>
                <button type='button' onClick={handleCancelClick}>Anuluj</button>
            </td>
        </tr>
    );
}

export default EditableRow;
