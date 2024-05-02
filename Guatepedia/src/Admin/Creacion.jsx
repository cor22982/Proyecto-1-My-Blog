import './Creacion.css'
import TextInputPost from '../Components/TextInputPost';
import DragyDrop from '@components/DragyDrop';
import Boton from '@components/Boton';
import { object, string } from 'yup'
import useToken from '@hooks/useToken'
import useForm from '@hooks/useForm'
import useApi from '@hooks/useApi';

const schema = object({
  Pearson: string().required(),
  Fewdescription: string().required(),
  History: string().required(),
  Crucialevents: string().required(),
  Curiosities: string().required(),
  AlternativeText: string().required(),
  AlternativeDescription: string().required(),
  Textreferences: string().required(),
  images: string().required(),
})


const Creacion = () => {
  const { values, setValue, validate, errors } = useForm(schema)
  const { error, llamadowithheader } = useApi('http://api.web05.lol/22982/posts');
  const { token } = useToken()
  
  const postear = async () => {
    const headers = [
      { title: 'authorization', value: token }
    ];
    const {success} = await llamadowithheader(headers,values,'POST')
    if (success){
      Object.keys(values).forEach(key => {
        setValue(key, '');
      });
    }
  }
  

  return (
    <div className='total'>
      <h1 style={{color: 'white'}}>CREAR POST</h1>
      <div className="contenedor-postear">
        <TextInputPost
          placeholder="Titulo"
          altura= "35px"
          value={values.Pearson}
          onChange={(value) => {setValue('Pearson', value)}}></TextInputPost>
        <TextInputPost
          placeholder="Descripcion"
          altura= "55px"
          value={values.Fewdescription}
          onChange={(value) => {setValue('Fewdescription', value)}}></TextInputPost>
        <TextInputPost
          placeholder="Historia"
          altura= "105px"
          value={values.History}
          onChange={(value) => {setValue('History', value)}}></TextInputPost>
        <TextInputPost
          placeholder="Eventos en su vida"
          altura= "75px"
          value={values.Crucialevents}
          onChange={(value) => {setValue('Crucialevents', value)}}></TextInputPost>
        <TextInputPost
          placeholder="Curiosidades"
          altura= "105px"
          value={values.Curiosities}
          onChange={(value) => {setValue('Curiosities', value)}}></TextInputPost>
         <TextInputPost
          placeholder="Titulo Extra"
          altura= "35px"
          value={values.AlternativeText}
          onChange={(value) => {setValue('AlternativeText', value)}}></TextInputPost>
        <TextInputPost
          placeholder="Texto Extra"
          altura= "105px"
          value={values.AlternativeDescription}
          onChange={(value) => {setValue('AlternativeDescription', value)}}></TextInputPost>
        <br></br>
        <DragyDrop
          setval={setValue}
          name="images"></DragyDrop>
        <br></br>
        <br></br>
        <TextInputPost
          placeholder="Referencia"
          altura= "35px"
          value={values.Textreferences}
          onChange={(value) => {setValue('Textreferences', value)}}></TextInputPost>
        <Boton
          nombre="POSTEAR"
          onClick={postear}></Boton>
        <br></br>
        <br></br>

      </div>
    </div>
  );
}

export default Creacion