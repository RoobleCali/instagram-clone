import posts from "../../assets/Data/Post.json";
import Post from "./Post";
function Posts() {
  return (
    <div className="mt-5">
      {posts.map((post) => (
        <Post name={post.name} img={post.img} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
