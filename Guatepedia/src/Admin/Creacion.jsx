import './Creacion.css'
import TextInputPost from '../Components/TextInputPost';
import DragyDrop from '@components/DragyDrop';
const Creacion = () => {
  return (
    <div className='total'>
      <h1 style={{color: 'white'}}>CREAR POST</h1>
      <div className="contenedor-postear">

        <TextInputPost
          placeholder="Titulo"
          altura= "35px"></TextInputPost>
        <TextInputPost
          placeholder="Descripcion"
          altura= "55px"></TextInputPost>
        <TextInputPost
          placeholder="Historia"
          altura= "105px"></TextInputPost>
        <TextInputPost
          placeholder="Eventos en su vida"
          altura= "75px"></TextInputPost>

        <TextInputPost
          placeholder="Curiosidades"
          altura= "105px"></TextInputPost>
         <TextInputPost
          placeholder="Titulo Extra"
          altura= "35px"></TextInputPost>
        <TextInputPost
          placeholder="Texto Extra"
          altura= "105px"></TextInputPost>
        <br></br>
        <DragyDrop></DragyDrop>
        <br></br>
        <br></br>
        <TextInputPost
          placeholder="Referencia"
          altura= "35px"></TextInputPost>
        <br></br>
      </div>
    </div>
  );
}

export default Creacion