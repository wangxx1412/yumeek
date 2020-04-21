// import * as emailjs from 'emailjs-com';

// export default (localStorage, recipe) => {
//     let receiverEmail = JSON.parse(localStorage.getItem("sessionUser")).email;
//     let first_name = JSON.parse(localStorage.getItem("sessionUser")).first_name;
//     let link = recipe.src_url; //`http://localhost:3002${location.pathname}`
//     let recipeLabel = recipe.label;
//     let message = `Link for recipe "${recipeLabel}": ${link}`;
//   // const handleShare = () => { //if no user disable send button
//     let templateParams = {
//       to_name: first_name,
//       form_name: "Yumeek",
//       message_html: message,
//       recieverEmail: receiverEmail,
//       senderEmail: "yumeek@test.com"
//     }

//     // if (!recieverEmail) {
//     //   <Button variant="contained" disabled></Button>
//     // } else {
//     //   emailjs.send(
//     //     'gmail',
//     //     process.env.REACT_APP_TEMPELATE_ID_EMAILJS,
//     //     templateParams,
//     //     process.env.REACT_APP_USER_ID_EMAILJS
//     //   )
//     //   .then((res) => {
//     //     console.log("Response text: ", res.text);
//     //   })
//     //   .catch((err) => console.log("Error:", err))
//     // }
//   }