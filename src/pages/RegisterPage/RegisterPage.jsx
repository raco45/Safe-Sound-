import React, { useState } from "react";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../../firebase/auth-service";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import styles from "./RegisterPage.module.css"
import { LOGIN_PAGE, PROFILE_PAGE, DOCTOR_CREDENTIALS } from "../../constants/url";

export function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [useRol, setRol] = useState("none");

  const onSubmit = async (data) => {
    try {
      await registerWithEmailAndPassword(
        data.name,
        data.lastname,
        data.email,
        data.phone,
        data.password,
        useRol
      );
      if (useRol === "Doctor"){
        navigate(DOCTOR_CREDENTIALS);
      }
      else{
        navigate(PROFILE_PAGE);
      }
    } catch (error) {
      console.log(error);
    }
  
  };

  const onError = () => {
    console.log("error");
  };

  const handleSigninWithGoogle = async () => {
    await signInWithGoogle(useRol);
    if (useRol === "Doctor"){
      navigate(DOCTOR_CREDENTIALS);
    }
    else{
      navigate(PROFILE_PAGE);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="hidden md:flex w-1/3 h-auto bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindarán terapias
          psicologicas .{" "}
        </p>
      </div>

      <div className=" flex w-2/3 h-full bg-[#FBE8FE] flex-col">
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <h1 className="text-center">
                Regístrate para alcanzar el camino a tu bienestar
              </h1>

              <div className="flex flex-col items-start">
                <label
                  htmlFor="rol"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Elija cómo desea ingresar
                </label>
                <select
                  id="roles"
                  name="rol"
                  value={useRol}
                  onChange={(e) => setRol(e.target.value)}
                >
                  <option value="none">Elegir</option>
                  <option value={"Doctor"}>Doctor</option>
                  <option value={"Paciente"}>Paciente</option>
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
                        maxLength: {
                          value: 15,
                          // pattern:"[0-9]{5}[-][0-9]{7}[-][0-9]{1}",
                          message: "Ingreso mas de 15 caracteres"
                        }
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
                        minLength:{
                          value: 6,
                          message: "Debe tener al menos 6 caracteres"
                        } 
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
                    disabled={useRol.match("none")}
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
                  <Link
                    to={LOGIN_PAGE}
                    className="text-purple-600 hover:underline"
                  >
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
                  <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  />
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
