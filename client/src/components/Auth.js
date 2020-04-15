import React from "react";
import { useLocation } from "react-router-dom";

export default function Auth() {
  const location = useLocation();

  return (
    <>
      <form method="POST" action="/api/login">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button
        onClick={() => {
          console.log(location);
        }}
      >
        see location object in console
      </button>
      <div>location.state.recipe : </div>
      <div>{JSON.stringify(location.state.recipe)}</div>
    </>
  );
}
