import React, { useState } from "react";

const LoginForm = ({ submit }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input id="username" onChange={handleChange} value={values.username} />
      </div>
      <div className="from-group">
        <label htmlFor="password">Password:</label>
        <input
          className="p-3"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
