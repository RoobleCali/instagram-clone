import React from "react";

function Story({ image, name }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="w-14 h-14 object-cover border border-red-500 cursor-pointer p-[2px] rounded-full"
      />
      <h1 className="text-xs w-16 truncate text-center flex">{name}</h1>
    </div>
  );
}

export default Story;
