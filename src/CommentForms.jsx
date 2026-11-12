import { useState } from "react";

export default function CommentForms() {
  let [formData, SetFormData] = useState({
    username: "",
    remarks: "",
    rating: "5",
  });

  let handleInput = (event) => {
    SetFormData((currValue) => {
      return { ...currValue, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    SetFormData({ username: "", remarks: "", rating: "5" });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <br />

        <textarea
          type="text"
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="rating">Username</label>
        <br />

        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          id="rating"
          value={formData.rating}
          onChange={handleInput}
        />
        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
