import React, { useRef, FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //formstate is used to give an error message; we destructured it to get the errors property at the top
  // as we dont want to manually  do it again and again
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("age")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })} //requirement added here
          id="age"
          type="number"
          className="form-control"
        />
        {errors.name?.type === "required" && <p>The name field is required</p>}
        {errors.name?.type === "minLength" && (
          <p>The name must be atleast 3 characters</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
