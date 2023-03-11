import React from "react";

export function Button({ onClick, children, disabled }) {
  return (
    <div>
      <button
        className="font-buttonfont font-bold border-[#3E0576] rounded-lg
         bg-[#3E0576] text-white px-3 py-2  hover:bg-[#b990c0] cursor-pointer"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
