import './DragyDrop.css'
import { useState, useRef } from 'react'
import PropTypes from 'prop-types';

const DragyDrop = ({setval, name, size}) => {
  const [images, setImages] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const selectFiles = () => {
    fileInputRef.current.click()
  }
     
  const deleteimage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };
  
  const onFileSelected = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((previmages) => [
          ...previmages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }
  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false)

  }
  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false)
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((previmages) => [
          ...previmages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  const onclickupload = async () => {
    if (images.length > 0) {
      const image = images[0]; // Obtener la primera imagen de la lista
      try {
        const response = await fetch(image.url);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result; // Aquí tienes la imagen en formato base64
          setval(name,base64data)
          setImages([]); // Limpiar la lista de imágenes después de convertir la primera imagen
        };
      } catch (error) {
        console.error('Error al convertir la imagen a base64:', error);
      }
    } else {
      console.log('No hay imágenes para convertir.');
    }
  };
  

  return (
    <div className="card" style={{ width: size}}>
      <div className="top">
        <p>Imagen Post</p>
      </div>
      <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {isDragging ? (
          <span className="select">
            Arrastrar y poner imagenes aqui
          </span>
        ) : (
          <>
            <span className="select">
              Arrastrar y poner imagenes aqui o 
            </span>
          
          <span className="select" role = "button" onClick={selectFiles}>
             Buscarlas
          </span>
          </>
        )

        }
        
        
        <input name="file" type="file" multiple ref={fileInputRef} onChange={onFileSelected}></input>
      </div>
      <div className="container">
      {images.length > 0 ? (
        images.map((image, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteimage(index)}>&times;</span>
            <img src={image.url} alt={image.name}></img>
          </div>
        ))
      ) : (
        <p>No hay imágenes seleccionadas</p>
      )}
        
        
      </div>
      <button type="button" onClick={onclickupload }>
        Subir
      </button>
    </div>
  )
}

DragyDrop.propTypes = {
  setval: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.string,
}

export default DragyDrop