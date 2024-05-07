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
  const { error, llamadowithheader, setError } = useApi('https://api.web05.lol/22982/posts');
  const { token } = useToken()
  
  const postear = async () => {
    if (await validate()){
    try {
      const headers = [
        { title: 'authorization', value: token }
      ];
      const {success} = await llamadowithheader(headers,values,'POST')
      if (success){
        Object.keys(values).forEach(key => {
          setValue(key, '');
        });
      }
      } catch (e) {
        console.log("error")
        console.log(error)
      }
    }
  }

 
  

  return (
    <div className='total'> 
      <h1 style={{color: 'white'}}>CREAR POST</h1>
     
        <TextInputPost
          placeholder="Titulo"
          altura= "35px"
          value={values.Pearson}
          onChange={(value) => {setValue('Pearson', value)}}></TextInputPost>
        { errors.Pearson && <span className="er">{errors.Pearson}</span> }
        <TextInputPost
          placeholder="Descripcion"
          altura= "55px"
          value={values.Fewdescription}
          onChange={(value) => {setValue('Fewdescription', value)}}></TextInputPost>
        { errors.Fewdescription && <span className="er">{errors.Fewdescription}</span> }
        <TextInputPost
          placeholder="Historia"
          altura= "105px"
          value={values.History}
          onChange={(value) => {setValue('History', value)}}></TextInputPost>
         { errors.History && <span className="er">{errors.History}</span> }
        <TextInputPost
          placeholder="Eventos en su vida"
          altura= "75px"
          value={values.Crucialevents}
          onChange={(value) => {setValue('Crucialevents', value)}}></TextInputPost>
        { errors.Crucialevents && <span className="er">{errors.Crucialevents}</span> }
        <TextInputPost
          placeholder="Curiosidades"
          altura= "105px"
          value={values.Curiosities}
          onChange={(value) => {setValue('Curiosities', value)}}></TextInputPost>
        { errors.Curiosities && <span className="er">{errors.Curiosities}</span> }
         <TextInputPost
          placeholder="Titulo Extra"
          altura= "35px"
          value={values.AlternativeText}
          onChange={(value) => {setValue('AlternativeText', value)}}></TextInputPost>
        { errors.AlternativeText && <span className="er">{errors.AlternativeText}</span> }
        <TextInputPost
          placeholder="Texto Extra"
          altura= "105px"
          value={values.AlternativeDescription}
          onChange={(value) => {setValue('AlternativeDescription', value)}}></TextInputPost>
        { errors.AlternativeDescription && <span className="er">{errors.AlternativeDescription}</span> }
        <br></br>
        <DragyDrop
          setval={setValue}
          name="images"
          size="750px"></DragyDrop>
        <br></br>
        
        <TextInputPost
          placeholder="Referencia"
          altura= "35px"
          value={values.Textreferences}
          onChange={(value) => {setValue('Textreferences', value)}}></TextInputPost>
        { errors.Textreferences && <span className="er">{errors.Textreferences}</span> }        
        <Boton
          nombre="POSTEAR"
          onClick={postear}></Boton>
        <br></br>

        {
          error !== null ? (
          <div className='error-message' onClick={() => setError(null)}>
          Error al subir post
          </div>
        ) : null
        }
        <br></br>

      
    </div>
  );
}

export default Creacion