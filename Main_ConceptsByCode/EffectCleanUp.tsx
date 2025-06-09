// example senario: when the user is in the chat room we need to connect him to the server
// when the use goes away from the chat room we need to disconnect him accordingly

import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("disconnecting");

function App() {
  useEffect(() => {
    connect();

    return () => disconnect(); //this is the clean up function which un do's what the effect hook is doing
  });

  return <div></div>;
}

export default App;
