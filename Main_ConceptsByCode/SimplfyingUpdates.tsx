//using the immer library npm i immer

import { useState } from "react";
import produce from "immer";

function App() {
  //below we have created an array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        //draft is a proxy object/copy that records the changes we are going to apply to the passed array
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
}
