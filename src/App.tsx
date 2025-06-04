import Button from "./components/button";
function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>My button</Button>
    </div>
  );
}
export default App;
