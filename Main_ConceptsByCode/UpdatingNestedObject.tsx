import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Franciso",
      zipcode: 94111,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer, //first copying all the properties of the customer object
      address: { ...customer.address, zipcode: 44000 }, //then updating the address object as per need
    });
  };
}
