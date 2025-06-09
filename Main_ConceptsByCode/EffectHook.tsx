// Think of useRef as a container or holder for:
// A DOM node (like an input, div, etc.)
// Or any mutable value you want to persist across renders without causing a re-render

import { useRef, useEffect } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null); // hooks should be at the top level inside the component

  // useEffect is used to run side effects (e.g., DOM manipulation, API calls, timers) after the component has rendered.
  //So if you want to do something with the DOM node held in useRef (like focus, scroll, measure) — you use useEffect to do it at the right time.

  useEffect(() => {
    // Example usage of useRef — focus on the input when component mounts
    ref.current?.focus(); //equvilatent to if(ref.current) ref.current.focus();
  }, []);

  // another example use of Effect hook below
  useEffect(() => {
    document.title = "My App";
  });
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
