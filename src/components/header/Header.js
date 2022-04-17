import me from "../../assets/images/post.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineAddCircleOutline, MdOutlineExplore } from "react-icons/md";
function Header() {
  return (
    <div className="bg-white shadow-lg sticky top-0 z-50 border-b-1 mb-5">
      <div className="flex items-center justify-between max-w-5xl mx-auto p-2">
        {/* left */}
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center  space-x-6 text-2xl">
          <Link to="/">
            <AiFillHome />
          </Link>
          <div className="relative">
            <Link to="/">
              <RiMessengerLine />
              <div
                className="absolute w-4 h-4 text-white animate-pulse
               bg-red-500 flex items-center justify-center rounded-full -top-2 -right-1 text-xs"
              >
                4
              </div>
            </Link>
          </div>

          <Link to="/">
            <MdOutlineAddCircleOutline />
          </Link>
          <Link to="/">
            <MdOutlineExplore />
          </Link>
          <Link to="/">
            <AiOutlineHeart />
          </Link>
          <Link to="/User" className="ml-2">
            <img
              src={me}
              alt=""
              className="rounded-full w-8 h-8 border p-[2px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
