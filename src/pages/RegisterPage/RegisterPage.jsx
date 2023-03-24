import React from "react";
import { useState } from "react";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../../firebase/auth-service";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import styles from "./RegisterPage.module.css"
import { LOGIN_PAGE, PROFILE_PAGE } from "../../constants/url";

export function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [useRol, setRol] = useState("none")

  const onSubmit = async (data) => {
    try {
      await registerWithEmailAndPassword(
        data.name,
        data.lastname,
        data.email,
        data.phone,
        data.password
      );
      navigate(PROFILE_PAGE);
    } catch (error) {
      setError();
    }
  };

  const onError = () => {
    console.log("error");
  };

  const handleSigninWithGoogle = async () => {
    await signInWithGoogle();
    /* Poner condicion de que si cancela no se redirija*/
    navigate(PROFILE_PAGE);
  };

//   const select = document.getElementById("roles");
//   const button = document.getElementById("registro");

//   select.addEventListener("change", function() {
//     const selectedValue = select.value;
  
//   if (selectedValue === "none") {
//     button.disabled = true;
//   } else {
//     button.disabled = false;
//   }
// });


  return (
    <div className="flex">
      <div className=" flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindaran terapias
          psicologicas .{" "}
        </p>
      </div>

      <div className=" flex w-2/3 h-screen bg-[#FBE8FE] flex-col">
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <h1 className="text-center">
                Regístrate para alcanzar el camino a tu bienestar
              </h1>

              <div className="flex flex-col items-start">
                    <select
                      id="roles"
                      name="rol"
                      value={useRol} 
                      onChange={e => setRol(e.target.value)}
                    >
                        <option value="none">Elegir</option>
                        <option value={"doctor"}>Doctor</option>
                        <option value={"paciente"}>Paciente</option>
                    </select>
              </div>

              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="mt-4">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Nombre
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("name", {
                        required: "Nombre es obligatorio",
                      })}
                      type="name"
                      name="name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.name?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Apellido
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("lastname", {
                        required: "Apellido es obligatorio",
                        maxLength: 20,
                      })}
                      type="text"
                      name="lastname"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.lastname?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Email
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      name="email"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.email?.message}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Teléfono
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("phone", {
                        required: "phone es obligatorio",
                        maxLength: 20,
                      })}
                      type="phone"
                      name="phone"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.phone?.message}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Contraseña
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("password", {
                        required: "Contraseña es obligatoria",
                        minLength: 6, /* TODO agregar mensaje de validacion password min6 */
                      })}
                      type="password"
                      name="password"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.password?.message}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Soy mayor de edad.
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  {/* Sumamente pendiente con este onclick, se estaba confudiendo con la funcion */}
                  <button
                    id="registro"
                    onClick={onsubmit}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Registrarse
                  </button>
                </div>
              </form>

              <div className="mt-4 text-grey-600">
                ¿Ya tienes una cuenta?{" "}
                <span>
                  <Link to={LOGIN_PAGE} className="text-purple-600 hover:underline">
                    {" "}
                    
                    Inicia Sesión
                  </Link>
                </span>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full" />
                <p className="px-3 ">OR</p>
                <hr className="w-full" />
              </div>
              <div className="my-6 space-y-2">
                <button
                  disabled={useRol.match("none")}
                  onClick={handleSigninWithGoogle}
                  aria-label="Login with Google"
                  role="button"
                  className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 bg-[#E4BCFC]"
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-6 h-6"
                    alt=""
                  />
                  <p className="text-purple-600 hover:underline">
                    Iniciar sesión con Google
                  </p>
                </button>

                <button
                  role="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 bg-[#E4BCFC]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                  <p>Iniciar sesión con Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
