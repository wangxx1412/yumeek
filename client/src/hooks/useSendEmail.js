// import { useState, useEffect } from "react";

// const useSendEmail = () => {
//   const [sessionUser, setSessionUser] = useState(
//     JSON.parse(localStorage.getItem("sessionUser")) || null
//   );
//   const [recipe] = useState(JSON.parse(localStorage.getItem("searchResult")))
//   console.log(recipe)

//   let receiverEmail = JSON.parse(localStorage.getItem("sessionUser")).email;
//   let first_name = JSON.parse(localStorage.getItem("sessionUser")).first_name;
//   let link = recipe.src_url; //`http://localhost:3002${location.pathname}`
//   let recipeLabel = recipe.label;
//   let message = `Link for recipe "${recipeLabel}": ${link}`;

//   useEffect(() => {
//     if (sessionUser) {
 
//     }
//   }, [sessionUser]);

//   return (
//     sessionUser
//   );
// }
// console.log(useSendEmail)
// export default useSendEmail;