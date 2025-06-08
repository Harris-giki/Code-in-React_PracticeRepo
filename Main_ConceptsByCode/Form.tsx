//index.css is used for global styles

import React, { useRef } from "react";
//by defaullt submission of an HTML form posts it to an served therefore a full page reload occurs
//to prevent that behaviour see the code below
const Form = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //prevents the post to the server
        console.log("submitted");
      }}
    >
      <div className="mb-3">
        <label htmlFor="" className="form-label"></label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="form-label"></label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
