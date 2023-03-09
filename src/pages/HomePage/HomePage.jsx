import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Miniperfil } from "../../components/MiniPerfil/MiniPerfil";
import {
  PAYMENT_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  PROFILE_PAGE,
  CHAT_PAGE,
} from "../../constants/url";
import { Comment } from "../../components/Comment/Comment.jsx";

export function HomePage() {
  const [count, setCount] =
    useState(0); /*estado actual y una función que contiene el estado*/
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleCounter = () => {
    setCount(count + 1);
  };

  const handleShowMore = () => {
    
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-auto m-5 p-5 border border-solid border-black ">
          <h1>HOLA NYAMIGOS</h1>

          <Button onClick={handleCounter} disabled={false}>
            CLICKEA AQUI
          </Button>

          <p>Cantidad de nyaas {count}</p>
        </div>

        {/* AQUI ES CON GRID */}
        <div className="grid  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 ">
          <Miniperfil />
          <Miniperfil />
          <Miniperfil />
          <Miniperfil />
          <Miniperfil />
          <Miniperfil />
        </div>
        <Button disabled={false}>Mostrar más</Button>
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
          <textarea placeholder="Insertar texto..." className="md:h-56 h-36 w-80 md:w-1/2 mb-10 mt-6 border-black border-solid border-2 p-2"></textarea>
          <Button disabled={false}>Enviar comentario</Button>
        </div>
        <br />
      </div>
    </>
  );
}
