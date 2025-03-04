const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("change", handleChange);

function handleChange(event) {
  event.preventDefault();

  const inputTarget = event.target
  const inputCT = event.currentTarget
  const inputTargetValue = inputTarget.value
  const inputTargetTagName = inputTarget.tagName 

  console.log("hello")
  console.dir(inputTarget)
  console.log(inputTarget.value)
  console.log(inputTarget.textContent)
  console.log(inputCT)

  const cookies = {
    inputTargetTagName: inputTargetValue,
    inputTargetValue: inputTarget.tagName ,
  }

  const cookiesJSON = JSON.stringify(cookies);

  console.log(cookiesJSON)


  try {
    const cookiesParse = JSON.parse(cookiesJSON);
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }
  
  console.log(cookiesParse)
  console.log("✅ This is fine, we handled parsing error in try...catch");
  
}




// cookies

