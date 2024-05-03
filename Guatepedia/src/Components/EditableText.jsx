import  { useState } from 'react';
import './EditableText.css'
import PropTypes from 'prop-types';

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
          <div className='texto-editable' onClick={edit}>{value}</div>  
        </div>
        
        
      )}
    </div>
  );
};

EditableText.propTypes = {
  text: PropTypes.string,
  onSave: PropTypes.func
}

export default EditableText;
