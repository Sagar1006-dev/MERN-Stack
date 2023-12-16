import React, { useEffect, useState } from "react";

const Effect = () => {
    const [text, setText] = useState("posts")
    const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [text]);
  return <div>
    <h2>useEffect</h2>
    <button onClick={()=>setText("posts")}>Posts</button>
    <button onClick={()=>setText("users")}>Users</button>
    <button onClick={()=>setText("comments")}>Comments</button>
    {
        data?.map((item, i)=>(
            <prev>{JSON.stringify(item)}</prev>
        ))
    }
  </div>;
};

export default Effect;
