import React from "react";
import { Link } from "react-router-dom";
import { CHAT_PAGE, PROFILE_PAGE, HOME_PAGE } from "../../constants/url";

export function Navbar() {
  //Cambiar el icono del menu y activar el menu responsive
  const menu = (event) => {
    let list = document.querySelector("ul");
    event.currentTarget.className === "menu h-7"
      ? ((event.currentTarget.src = "src/assets/close.png"),
        (event.currentTarget.className = "close h-7"),
        list.classList.add("top-[70px]"),
        list.classList.add("opacity-100"))
      : ((event.currentTarget.src = "src/assets/menu.png"),
        (event.currentTarget.className = "menu h-7"),
        list.classList.remove("top-[70px]"),
        list.classList.remove("opacity-100"));
  };

  //HACER QUE LA WINDOW DESAPAREZCA CUANDO HAYA CAMBIO DE PAGINA
  const handlewindow = () => {
    let list = document.querySelector("ul");
    let imagen = document.getElementById("close-img");
    imagen.currentTarget.className = "close h-7";
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
            <img className="h-12 inline mr-2" src="src\assets\logo.png" />
            <p className="text-2xl font-heading font-extrabold text-[#3E0576] pt-1">Safe&Sound</p>
          </Link>
        </span>
        <span className="cursor-pointer md:hidden block">
          <img
            src="src\assets\menu.png"
            id="menu-img"
            className="menu h-7"
            onClick={menu}
          />
        </span>
      </div>

      <ul
        className="text-white md:flex md:items-center md:z-auto md:static absolute
       bg-[#B990C0] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl7
       md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-400"
      >
        <li className=" font-semibold hover:text-[#3E0576] mx-4  my-6 md:my-0 ">
          <Link className="text-xl">Buscar</Link>
        </li>

        <li className="font-semibold hover:text-[#3E0576] mx-4 my-6 md:my-0">
          <Link to={CHAT_PAGE} className="text-xl" onClick={handlewindow}>
            Chat
          </Link>
        </li>
        <span className="hover:text-[#3E0576] font-semibold mx-4 text-xl flex items-center cursor-pointer">
          <Link to={PROFILE_PAGE} className="pr-2" onClick={handlewindow}>
            Nombre Usuario
          </Link>
          <img className="h-10 inline" src="src\assets\User.png" />
        </span>
      </ul>
    </nav>
  );
}
