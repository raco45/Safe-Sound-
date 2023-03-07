import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_PAGE } from "../../constants/url";

export function Comment(photo, user_text, user_name, profile_id) {
  return (
    <div
      className="container mx-auto grid justify-items-center border-2 border-black 
    rounded-2xl bg-white mt-10 md:w-4/12 py-5 px-5 h-auto shadow w-80"
    >
      <img className="md:h-16 h-14" src={photo} alt="user photo" />
      <p className="text-2xsm text-center my-3">{user_text}</p>

      <Link to={`./profile/${profile_id}`} className="text-xsm italic">
        -{user_name}
      </Link>
    </div>
  );
}
