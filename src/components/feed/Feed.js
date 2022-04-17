import React from "react";
import Miniprofile from "./Miniprofile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl p-2 mx-auto">
      <section className="col-span-2 ">
        {/* storie */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section className=" invisible md:visible">
        {/* mini profile */}
        <Miniprofile />
        {/* uggestions */}
        <Suggestions />
      </section>
    </div>
  );
}

export default Feed;
