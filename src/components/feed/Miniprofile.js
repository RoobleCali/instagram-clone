import me from "../../assets/images/post.jpg";

function Miniprofile() {
  return (
    <div className="ml-7 mt-10 flex items-center justify-between">
      <img
        src={me}
        alt=""
        className="rounded-full w-16 h-16 object-cover border p-[2px]"
      />
      <div className="mx-5">
        <h1 className="text-base">Abdishakuur ally</h1>
        <p className="font-sm text-gray-500 text-sm">abdishakuur ally</p>
      </div>
      <button className="text-blue-400 text-sm ml-10">Switch</button>
    </div>
  );
}

export default Miniprofile;
