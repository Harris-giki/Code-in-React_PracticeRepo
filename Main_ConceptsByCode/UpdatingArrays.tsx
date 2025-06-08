import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //adding into the array
    setTags([...tags, "exciting"]);

    //removing from array
    setTags(tags.filter((tag) => tag != "happy"));

    //Updating
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
}
