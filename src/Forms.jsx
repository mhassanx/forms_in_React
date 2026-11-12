import { useState } from "react";

export default function Forms() {
  let [formData, SetFormData] = useState({
    fullname: "",

    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    SetFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value};
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    SetFormData({
      fullname: "",
      username: "",
      password: "",
    });
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <br />

        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="enter full name"
          onChange={handleInputChange}
          value={formData.fullname}
        />
        <br />

        <label htmlFor="username">userName</label>
        <br />

        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
          onChange={handleInputChange}
          value={formData.username}
        />

        <br />

        <label htmlFor="username">Password</label>
        <br />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
          onChange={handleInputChange}
          value={formData.password}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
