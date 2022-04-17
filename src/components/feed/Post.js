import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

function Post({ img, name }) {
  return (
    <div>
      {/* post header */}
      <div className="flex items-center justify-between p-4">
        <img
          src={img}
          alt=""
          className="w-12 h-12 border object-cover border-red-500 p-[2px] rounded-full"
        />
        <p className="flex-1 ml-2">{name}</p>
        <FiMoreHorizontal />
      </div>
      {/* post img */}
      <div>
        <img src={img} alt="" className="w-full object-cover" />
      </div>
      {/* post coption */}
      <div className="flex justify-between items-center text-2xl p-5 max-w-2xl mx-auto">
        <div className="flex items-center justify-between cursor-pointer space-x-4">
          <AiOutlineHeart />
          <FaRegComment />
          <HiOutlinePaperAirplane className="rotate-45" />
        </div>
        <MdCollections />
      </div>
      {/* form */}
      <form className="flex items-center ">
        <BiHappyAlt className="h-8" />
        <input
          type="text"
          placeholder="add comment"
          className="border-none flex-1 focus:ring-0 outline-none ml-2 "
        />
        <button className="font-semibold text-blue-500">post</button>
      </form>
    </div>
  );
}

export default Post;
