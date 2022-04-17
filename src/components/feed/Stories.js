import story from "../../assets/Data/Story.json";
import Story from "./Story";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useRef, useState } from "react";

function Stories() {
  const storiesRef = useRef(null);
  const [showleft, setShowleft] = useState(false);
  const [showright, setShowright] = useState(true);

  const onScroll = () => {
    if (
      storiesRef.current.scrollLeft ===
      storiesRef.current.scrollWidth - storiesRef.current.clientWidth
    ) {
      setShowright(false);
    } else {
      setShowright(true);
    }
    if (storiesRef.current.scrollLeft > 0) {
      setShowleft(true);
    } else {
      setShowleft(false);
    }
  };
  return (
    <div className="relative">
      <div
        className="flex  bg-white scrollbar-hide
       scroll-smooth overflow-x-scroll"
        onScroll={onScroll}
        ref={storiesRef}
      >
        {story.map((storie) => (
          <Story key={storie.id} name={storie.name} image={storie.img} />
        ))}
      </div>
      <div
        className=" absolute w-full top-0 p-4 z-10 
        flex items-center justify-between"
      >
        <button
          onClick={() => {
            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 600;
          }}
        >
          <BiChevronLeft
            className={`cursor-pointer drop-shadow-lg bg-white
           text-gray-400 w-7 h-7
         rounded-full ${showleft ? "visible" : "invisible"}`}
          />
        </button>
        <button
          onClick={() => {
            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 600;
          }}
        >
          <BiChevronRight
            className={`cursor-pointer drop-shadow-lg bg-white text-gray-400 w-7 h-7
         rounded-full  ${showright ? "visible" : "invisible"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Stories;
