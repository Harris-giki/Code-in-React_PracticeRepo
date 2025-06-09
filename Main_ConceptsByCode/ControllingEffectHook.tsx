// refer to ProductListing.tsx simultaneously for better understanding
import { useEffect, useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  useEffect(() => {});
  return (
    <div>
      <select
        name=""
        id="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      {/* <ProductList/> commented to remove compilation errors only*/}
    </div>
  );
}
