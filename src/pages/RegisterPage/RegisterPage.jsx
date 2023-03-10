import React from 'react'
import { signInWithGoogle } from '../../firebase/auth-service';
// import styles from "./RegisterPage.module.css"

export function RegisterPage() {

  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
  };

  const onSubmit = async (event) => {

  }

  return (
    <div className='flex'>
      <div className=' flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center'>
        <h1 className='font-bold'>Safe&Sound</h1>
        <p>Encuentra a los mejores especialistas que te brindaran terapias psicologicas . </p>
      </div>
      <div className=' flex w-2/3 h-screen bg-[#FBE8FE] flex-col'>
        <div className='flex justify-end'>
          ¿Ya tienes cuenta?
          <button className=' bg-[#3E0576] rounded-2xl'>Inicia Sesión</button>
        </div>
        <h1 className='text-center'>Registrate para alcanzar el camino a tu bienestar</h1>
        <form onSubmit={onSubmit}>
          <div className='flex flex-row justify-center'>
          <div className='flex flex-col'>
              <h1>Nombre</h1>
              <input className=' rounded-lg bg-transparent border border-black'></input>
          </div>
          <div className='flex flex-col'>
              <h1>Apellido</h1>
              <input className=' rounded-lg bg-transparent border border-black'></input>
            </div>
          </div>
          <div className='flex flex-col'>
              <h1>Correo Electrónico</h1>
              <input className=' rounded-lg bg-transparent border border-black'></input>
            </div>
          <div className='flex flex-col'>
              <h1>Contraseña</h1>
              <input className=' rounded-lg bg-transparent border border-black'></input>
          </div>
          <div className='flex flex-col'>
              <h1>Número de Teléfono</h1>
              <input className=' rounded-lg bg-transparent border border-black'></input>
          </div>
          <div className='flex justify-center'>
          <button className=' border border-black'>p</button>
          <p>Declaro que soy mayor de edad y acepto el Aviso de Privacidad y los Términos y Condiciones de uso de Safe&Sound.</p>
          </div>
          <div className='flex justify-center'>
          <button className=' bg-[#3E0576] rounded-2xl text-white'>Crear Cuenta</button>
          </div>
          </form>
          <div className='flex justify-center flex-row'>
          <div className=' bg-black w-1/3 h-1 rounded-2xl'></div>
          <p>O</p>
          <div className=' bg-black w-1/3 h-1 rounded-2xl'></div>
          </div> 
          <button type ='button'  onClick={handleSignWithGoogle}>
            Registro con Google
          </button>
      </div>
    </div>
  );
}

