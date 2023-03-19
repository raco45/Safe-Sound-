import React from "react";

export function Comment({photo, user_text, user_name}) {
  return (
    <div
      className="container mx-auto grid justify-items-center border-2 border-black 
    rounded-2xl bg-white mt-10 md:w-4/12 py-5 md:px-5 h-auto shadow w-80"
    >
      <img className="md:h-16 h-14 w-auto" src={photo} alt="user photo" />
      <p className="text-2xsm text-center my-3">{user_text}</p>

      <p className="text-xsm italic">-{user_name}</p>
    </div>
  );
}
