import './Creacion.css'
import TextInputPost from '../Components/TextInputPost';
const Creacion = () => {
  return (
    <div className='total'>
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
      </div>
    </div>
  );
}

export default Creacion