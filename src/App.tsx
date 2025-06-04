import Button from "./components/button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertvisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertvisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertvisibility(true)}>My button</Button>
    </div>
  );
}
export default App;
