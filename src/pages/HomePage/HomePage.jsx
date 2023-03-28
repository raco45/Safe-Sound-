import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Miniperfil } from "../../components/MiniPerfil/MiniPerfil";
import { Comment } from "../../components/Comment/Comment.jsx";
import { useUsuarios } from "../../hooks/useUsuarios";

export function HomePage() {

  const [showMore, setShowMore] = useState(false);
  const { getValidatedDoctor, valDoctor, isLoading} = useUsuarios();

  useEffect(() => {
    getValidatedDoctor();

  }, []);

  //activa o desactiva el estado de showMore
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  //numero que indica hasta que cantidad se corta la lista
  // const numList = showMore || doctors.length < 6 ? doctors.length : 6;

  return (
    <div className="flex flex-col justify-center items-center bg-[#FBE8FE]">
      <div className="md:w-5/6 mt-10 mb-6 flex">
        <input
          placeholder="Escriba aquí..."
          className="h-10  md:w-1/2 border-solid border-black border-2 rounded-sm pl-2"
        />
        <select className="border-solid border-black border-2 bg-[#e5c9ea] font-semibold font-maintext">
          <option value="Nombre">Nombre</option>
          <option value="Especialidad">Especialidad</option>
          <option value="Rango precio">Precio</option>
        </select>
        <img
          src="src\assets\lupa.png"
          className="h-10 w-auto border-solid border-black border-2 bg-[#b990c0] cursor-pointer rounded-sm"
        />
      </div>
      <div className="flex flex-col w-full items-center mb-4">
        {isLoading && <h1 className="font-bold text-2xl">CARGANDO USUARIOS</h1>}
        {!isLoading && (
          <>
            <div
              className="border-2 border-solid border-black rounded-xl grid grid-cols-1  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 "
              id="doctores_validados"
            >
              {valDoctor.map((doctor) => {
                return (
                  <Miniperfil user={doctor} idx={doctor.id} />
                );
              })}
            </div>
            </>)}
            </div>
      
      <div
        id="doctores"
        className="grid grid-cols-1  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 "
      >
        {/* {doctors.length === 0 ? (
          <h1 className="text-xl font-maintext font-bold"> 
            No se han encontrado resultados
          </h1>
        ) : (
          doctors.slice(0, numList).map((doctor) => {
            return doctor;                             
          })
        )} */}
      </div>
      <Button onClick={handleShowMore} disabled={false}>
        {showMore ? "Mostrar menos" : "Mostrar más"}
      </Button>
      <div
        id="user-comments"
        className="w-full m-10 flex flex-col justify-center items-center"
      >
        <h1 className="text-[#3E0576] font-bold text-xl md:text-3xl">
          Nuestros usuarios soltaron la sopa
        </h1>
        <Comment
          photo="src\assets\user.png"
          user_text="lorem aksdjioasdjlasjdolakhdiukasjdknaskndklaskjkdmalkwdknlasmdnjalm"
          user_name="Emily Rodríguez"
        />
      </div>
      <div id="comment-area" className="w-4/5">
        <h1 className="font-bold text-xl">¡Déjanos un comentario!</h1>
        <textarea
          placeholder="Insertar texto..."
          className="md:h-56 h-36 w-80 md:w-1/2 mb-10 mt-6 border-black border-solid border-2 p-2"
        ></textarea>
        <Button disabled={false}>Enviar comentario</Button>
      </div>
      <br />
  
          
    </div>
  
  );
}
