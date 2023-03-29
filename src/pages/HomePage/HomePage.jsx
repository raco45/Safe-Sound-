import { useEffect, useState } from "react";
import { Miniperfil } from "../../components/MiniPerfil/MiniPerfil";
import { Comment } from "../../components/Comment/Comment.jsx";
import { useUsuarios } from "../../hooks/useUsuarios";

export function HomePage() {
  const [searchMode, setSearchMode] = useState(false);
  const [campo, setCampo] = useState(null);
  const inputValue = document.getElementById("searchbar");
  const {
    getValidatedDoctor,
    valDoctors,
    isLoading,
    searchDoc,
    getDoctorByParam,
  } = useUsuarios();

  useEffect(() => {
    getValidatedDoctor();

    if (inputValue?.value == null) {
    } else {
      getDoctorByParam(campo, inputValue.value);
    }
  }, []);

  const handleSearch = async () => {
    setSearchMode(true);
    if (inputValue?.value == null) {
    } else {
      getDoctorByParam(campo, inputValue.value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#FBE8FE]">
        <h1 className="text-[#3E0576] font-bold text-xl md:text-3xl mt-10">
          NUESTROS DOCTORES
        </h1>
      <div className="md:w-5/6 mt-10 mb-6 flex">
        <input
          placeholder="Escriba aquí..."
          id="searchbar"
          className="h-10  md:w-1/2 border-solid border-black border-2 rounded-sm pl-2"
        />
        <select
          id="select-campo"
          className="border-solid border-black border-2 bg-[#e5c9ea] font-semibold font-maintext"
          onChange={(e) => setCampo(e.target.value)}
        >
          <option value="choose">Elegir</option>
          <option value="name">Nombre</option>
          <option value="range">Precio</option>
        </select>

        <img
          src="src\assets\lupa.png"
          className="h-10 w-auto border-solid border-black border-2 bg-[#b990c0] cursor-pointer rounded-sm"
          onClick={handleSearch}
        />
      </div>
      <div className="flex flex-col w-full items-center mb-4">
        {isLoading && (
          <h1 className="font-bold text-2xl">CARGANDO DOCTORES...</h1>
        )}
        {!isLoading && !searchMode && (
          <>
            <div
              className="border-2 border-solid rounded-xl grid grid-cols-1  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 "
              id="doctores_validados"
            >
              {valDoctors.map((doctor) => {
                return <Miniperfil user={doctor} idx={doctor.id} />;
              })}
            </div>{" "}
          </>
        )}
        {!isLoading && searchMode && (
          <>
            <div
              className="border-2 border-solid rounded-xl grid grid-cols-1  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 bg-[#E4BCFC]"
              id="doctores_validados"
            >
              {searchDoc.map((doctor) => {
                return <Miniperfil user={doctor} idx={doctor.id} />;
              })}
            </div>{" "}
          </>
        )}
      </div>

      <div
        id="user-comments"
        className="w-full m-10 flex flex-col justify-center items-center"
      >
        <h1 className="text-[#3E0576] font-bold text-xl md:text-3xl">
          ¿Qué Dicen Nuestros Usuarios?
        </h1>
        <Comment
          photo="src\assets\Smilingman.jpg"
          user_text="Excelente plataforma de terapia en línea. Registro fácil, terapeuta profesional y empático, 
          acceso cómodo desde cualquier lugar con conexión a Internet. Recomendado."
          user_name="Mike O'Hearn"
        />
      </div>

      <div className=" flex flex-col justify-center items-center text-center bg-[#E4BCFC] rounded-md">
        <section class="bg-[#bd9ad1] flex rounded-md">
          <div class="flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <h1 class="mb-4 tracking-tight font-bold text-gray-900 dark:text-white text-3xl">
                ¿Quiénes Somos?
              </h1>
              <p class="text-white">
                Nuestro equipo de profesionales de la psicología está dedicado a
                ayudarte a encontrar la claridad y el equilibrio emocional que
                necesitas para vivir una vida más feliz y saludable
              </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M320 0a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm44.7 164.3L375.8 253c1.6 13.2-7.7 25.1-20.8 26.8s-25.1-7.7-26.8-20.8l-4.4-35h-7.6l-4.4 35c-1.6 13.2-13.6 22.5-26.8 20.8s-22.5-13.6-20.8-26.8l11.1-88.8L255.5 181c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l27.9-23.6C271.3 104.8 295.3 96 320 96s48.7 8.8 67.6 24.7l27.9 23.6c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.4-33.8 2.8l-19.8-16.7zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                  </svg>{" "}
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Accesibilidad
                </h3>
                <p class="text-white">
                  La terapia psicológica en línea permite que las personas
                  accedan a la ayuda que necesitan desde cualquier lugar y en
                  cualquier momento.
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Calidad</h3>
                <p class="text-white">
                  Contamos con un riguroso proceso de y verificación de
                  antecedentes para garantizar que solo se permita trabajar a
                  terapeutas capacitados y con licencia.{" "}
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Privacidad
                </h3>
                <p class="text-white">
                  La terapia en línea ofrece una mayor privacidad y anonimato a
                  los pacientes que pueden sentirse más cómodos compartiendo
                  información personal en línea en lugar de en persona.
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Accesibilidad financiera
                </h3>
                <p class="text-white">
                  La terapia en línea puede ser más asequible que la terapia en
                  persona debido a la falta de costos de alquiler de oficina y
                  otros gastos. Además, muchas plataformas ofrecen diferentes
                  opciones de precios para adaptarse a diferentes necesidades y
                  presupuestos de los pacientes.
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Personalización
                </h3>
                <p class="text-white">
                  Los pacientes pueden elegir a un terapeuta que se adapte a sus
                  necesidades específicas, ya sea en términos de especialización
                  o experiencia.
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Eficacia</h3>
                <p class="text-white">
                  La terapia psicológica en línea ha demostrado ser eficaz para
                  muchos pacientes en el tratamiento de una amplia gama de
                  trastornos psicológicos. Los pacientes pueden obtener
                  resultados a largo plazo y mejorar su calidad de vida.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="container my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="flex flex-wrap">
              <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6 bg-[#E4BCFC] rounded-md p-10">
                <h2 class="text-3xl font-bold mb-6">Preguntas frecuentes</h2>
                <p class="font-bold mb-2">
                  ¿Cómo funciona la terapia en línea a través de chats?
                </p>
                <p class="text-gray-500 mb-6">
                  La terapia en línea a través de chats funciona mediante la
                  comunicación en tiempo real entre el paciente y el terapeuta a
                  través de una plataforma segura en línea. Los pacientes pueden
                  escribir sus preocupaciones en un chat privado y el terapeuta
                  responde en tiempo real. La sesión es similar a una sesión de
                  terapia en persona, pero con la comodidad de poder hacerlo
                  desde cualquier lugar con una conexión a Internet.
                </p>
                <p class="font-bold mb-2">
                  ¿Cómo puedo elegir un terapeuta adecuado para mí?
                </p>
                <p class="text-gray-500 mb-6">
                  Puedes elegir un terapeuta adecuado para ti mediante una lista
                  de terapeutas disponibles en la plataforma, que se pueden
                  filtrar según la especialización, experiencia, idioma hablado
                  y disponibilidad. También puedes leer las biografías de los
                  terapeutas y las reseñas de otros pacientes para tener una
                  mejor idea de sus estilos terapéuticos y habilidades.
                </p>
                <p class="font-bold mb-2">¿Es segura la terapia en línea?</p>
                <p class="text-gray-500 mb-6">
                  Sí, la terapia en línea es segura siempre que se utilice una
                  plataforma segura y confiable. La plataforma debe estar
                  encriptada y cumplir con las normas de privacidad y seguridad
                  de datos. Además, todos los terapeutas en la plataforma deben
                  estar autorizados y cumplir con los estándares de ética
                  profesional.
                </p>
                <p class="font-bold mb-2">
                  ¿Puedo programar sesiones regulares con el mismo terapeuta?
                </p>
                <p class="text-gray-500">
                  Sí, puedes programar sesiones regulares con el mismo terapeuta
                  según la disponibilidad del terapeuta y del calendario del
                  paciente. Muchos pacientes encuentran útil programar sesiones
                  regulares para mantener la continuidad del tratamiento y ver
                  resultados a largo plazo.
                </p>
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12 ">
                <div class="flex justify-center">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-3xl font-bold mb-12 px-6">Contáctanos</h2>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#E4BCFC] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            className="w-6 h-6"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Correo</p>
                        <p class="text-gray-500">safesound2000@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#E4BCFC] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                          </svg>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Instagram</p>
                        <p class="text-gray-500">@safe_sound_official</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#E4BCFC] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <img
                            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                          />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Facebook</p>
                        <p class="text-gray-500">Safe&Sound_official</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-[#E4BCFC] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="headset"
                            class="w-5 text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Nuestros Teléfonos</p>
                        <p class="text-gray-500">+58 212-9767162</p>
                        <p class="text-gray-500">+58 414-2669633</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
