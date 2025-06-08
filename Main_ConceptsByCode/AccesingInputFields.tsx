import React, { FormEvent, useRef } from "react";
// by default, submission of an HTML form posts it to a server; therefore, a full page reload occurs
// to prevent that behaviour, see the code below

// 'useRef' Hook is used to reference DOM elements/nodes
// this code shows how to reference an input field and read its value when the form is submitted
const Form = () => {
  const ageRef = useRef<HTMLInputElement>(null); //initially ref hook has no DOM to point to as it is compiled after the component is rendered by react therefore we have no value to pass to therefore null
  const nameRef = useRef<HTMLInputElement>(null); //afterwards it automatically received a value as the DOM is compiled therefore our if condition ahead
  // instead of console logging our values we might need them to be sent to the server for that below we make an object
  const person = { name: "", age: 0 }; //object

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    {
      /*
    if (nameRef.current !== null) console.log(nameRef.current.value); // reference hook to show the current input value on console logs
    if (ageRef.current !== null) console.log(ageRef.current.value);
  */
    }
    // now for sending in the server
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value); //parsed age from string to a number to avoid error
    if (nameRef.current !== null) person.name = nameRef.current.value;
    console.log(person); //potentially this object is sent to the server to be saved.
  };

  return (
    // the function is not called but referenced (below)
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
