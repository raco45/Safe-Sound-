import React from "react";
import { useState } from "react";
import {
  signInWithGoogle,
  logInWithEmailAndPassword,
} from "../../firebase/auth-service";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PROFILE_PAGE, REGISTER_PAGE } from "../../constants/url";

export function LoginPage() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      await logInWithEmailAndPassword(
        data.email,
        data.password,
      );
      navigate(PROFILE_PAGE);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSigninWithGoogle = async () => {
    await signInWithGoogle();
    /* Poner condicion de que si cancela no se redirija*/
    navigate(PROFILE_PAGE);
  };

  const onError = (e) => {
    console.log(e)
  };

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
                Inicia sesión para continuar el camino a tu bienestar
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Contraseña
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("password", {
                        required: "Contraseña es obligatoria",
                        minLength: 6,
                      })}
                      type="password"
                      name="password"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.password?.message}</p>
                  </div>
                </div>

                

                <div className="flex items-center mt-4">
                  {/* Sumamente pendiente con este onclick, se estaba confudiendo con la funcion */}
                  <button
                    onClick={onSubmit}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Iniciar sesion
                  </button>
                </div>
              </form>

              <div className="mt-4 text-grey-600">
                ¿No tienes una cuenta creada?{" "}
                <span>
                  <Link className="text-purple-600 hover:underline" to={REGISTER_PAGE}>
                    Registrate
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
                  <p>Iniciar sesión con Google</p>
                </button>

                <button
                  aria-label="Login with Facebook"
                  role="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 bg-[#E4BCFC]"
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
