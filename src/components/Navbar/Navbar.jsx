import React from "react";
import { Link } from "react-router-dom";
import { CHAT_PAGE, PROFILE_PAGE, HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE, PAYMENT_PAGE } from "../../constants/url";
import { useUser } from "../../Contexts/UserContext";
import { logout } from "../../firebase/auth-service";

export function Navbar() {
  const {user} = useUser();

  const handleLogout = async () => {
    console.log("Saliendo...")
    await logout()
  }

  //Cambiar el icono del menu y activar el menu responsive
  const menu = (event) => {
    let list = document.querySelector("ul");
    event.currentTarget.className === "menu h-10 w-10"
      ? ((event.currentTarget.src = "src/assets/close.png"),
        (event.currentTarget.className = "close h-10 w-10"),
        list.classList.add("top-[70px]"),
        list.classList.add("opacity-100"))
      : ((event.currentTarget.src = "src/assets/menu.png"),
        (event.currentTarget.className = "menu h-10 w-10"),
        list.classList.remove("top-[70px]"),
        list.classList.remove("opacity-100"));
  };

  //HACER QUE LA WINDOW DESAPAREZCA CUANDO HAYA CAMBIO DE PAGINA
  const handlewindow = () => {
    let list = document.querySelector("ul");
    let imagen = document.getElementById("close-img");
    imagen.currentTarget.className = "close h-10 w-10";
    imagen.currentTarget.src = "src/assets/menu.png";
    list.classList.remove("top-[70px]");
    list.classList.remove("opacity-100");
  };

  return (
    <nav className="p-5 bg-[#B990C0] md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="cursor-pointer">
          <Link
            to={HOME_PAGE}
            className="flex pl-2"
            onClick={handlewindow}
          >
            <img className="w-auto h-12 inline mr-2" src="src\assets\logo.png" alt="Safe&Sound Logo"/>
            <p className="text-2xl font-heading font-semibold text-[#3E0576] pt-1">Safe&Sound</p>
          </Link>
        </span>
        <span className="cursor-pointer md:hidden block">
          <img
            src="src\assets\menu.png"
            id="menu-img"
            className="menu h-10 w-10"
            onClick={menu}
          />
        </span>
      </div>

      <ul
        className="text-white md:flex md:items-center md:z-auto md:static absolute
       bg-[#B990C0] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl7
       md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-400"
      > 
      {!!user &&(<>
      
      <li className="font-semibold hover:underline mx-4 my-6 md:my-0">
        <Link to={CHAT_PAGE} className="text-xl" onClick={handlewindow}>
          Chat
        </Link>
      </li>
      <span className="font-semibold mx-4 text-xl flex items-center cursor-pointer hover:underline">
        <Link to={PROFILE_PAGE} className="pr-2" onClick={handlewindow}>
          {user.name}
        </Link>
        {user.photoUrl && <img className="h-10 w-10 inline" src={user.photoUrl} alt="Perfil" />}
        {!user.photoUrl && <img className="h-10 w-auto inline" src="src\assets\user.png" alt="Perfil"/>}        
      </span>
      <li className="font-semibold hover:underline mx-4 my-6 md:my-0">
        <Link to={HOME_PAGE}>
          <button type="button" onClick={handleLogout} className="font-semibold hover:underline mx-4 my-6 md:my-0"> 
          Salir
        </button>
        </Link>
      </li>
      </>
      )}
      
      
      {!user && ( <>
        <li className="font-semibold hover:underline mx-4 my-6 md:my-0">
          <Link to={LOGIN_PAGE} className="text-xl" onClick={handlewindow} >
            Inicia Sesión
          </Link>
        </li>
        <span className="font-semibold mx-4 text-xl flex items-center cursor-pointer hover:underline">
          <Link to={REGISTER_PAGE} className="pr-2" onClick={handlewindow}>
            Registrarse
          </Link>
        </span>
        </>
        )}
      </ul>
    </nav>
  );
}
