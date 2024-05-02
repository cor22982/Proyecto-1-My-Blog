import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import './EditableText.css'

const EditableText = ({ text, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleSave = () => {
    onSave(value); // Llamar a onSave con el nuevo valor para guardarlo
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setValue(text);
  };

  const edit = () => {
    setIsEditing(true)
  }

  return (
    <div>
      {isEditing ? (
        <div className='contenedor-edit'>
          <textarea
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='text-area-edit'
          />
          <div className='botones'>
            <button onClick={handleCancel} className='boton-edit'>Cancel</button>
            <button onClick={handleSave} className='boton-edit'>Save</button>
          </div>
          
        </div>
      ) : (
        <div className='edit-texteo'>
          <div className='texto-editable'>{value}</div>
          <div className='icono-edit-1' onClick={edit}>
            <FontAwesomeIcon icon={faPen} className="icon-edit" onClick={edit}/>
          </div>
        </div>
        
        
      )}
    </div>
  );
};

export default EditableText;
