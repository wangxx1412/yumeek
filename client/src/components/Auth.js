import React from "react";

export default function Auth() {
  return (
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
  );
}
