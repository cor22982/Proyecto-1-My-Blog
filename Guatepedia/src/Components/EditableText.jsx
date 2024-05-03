import  { useState } from 'react';
import './EditableText.css'
import PropTypes from 'prop-types';

const EditableText = ({ text, onSave, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleSave = async () => {
    await onSave(value, type)
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
  onSave: PropTypes.func,
  type: PropTypes.string,
}

export default EditableText;
