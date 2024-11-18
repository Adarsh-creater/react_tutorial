
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register,
     handleSubmit,
      watch,
       formState: { errors , isSubmitting} } 
       = useForm();

  // const { register, handleSubmit } = useForm();

       async function onSubmit(data){
        await new Promise((resolve) => setTimeout(resolve,3000))
        console.log("form data : ",data)
       }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>Enter first name : </label>
        <input {...register("firstName",{ 
          required: true,
           minLength: {value : 3, message:'first name must contain min 3 char' }
          , maxLength: 5 })} />

          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />


      <div>
        <label>Enter last name : </label>
        <input {...register("lastName")} />
      </div>
      <br />

      <div>
        <label>Enter email : </label>
        <input {...register("email")} />
      </div>
      <br />

      <input type="submit" value={isSubmitting ? 'submitting' : 'submit'} />

    </form>
  )
}

export default App
