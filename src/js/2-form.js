const refs = {
    formData: {
        email: "",
        message: "",
    },
    feedbackform: document.querySelector(".feedback-form"),
    localStorageKey: "",
    emailInput: document.querySelector('.feedback-form input[name="email"]'),
    emaiMessage: document.querySelector('.feedback-form textarea[name="message"]'),
    form: document.querySelector('.feedback-form'),
};

console.log(localStorage)

window.addEventListener("load", (event) => {
    if (!localStorage.length) {
        console.log("hello")
        return
    } 
    console.log("hello22")
    
    refs.formData = JSON.parse(localStorage.localStorageKey);
    console.log(refs.formData);

    refs.emailInput.value = refs.formData.email;
    refs.emaiMessage.value = refs.formData.message;
});

refs.feedbackform.addEventListener("input", (event) => {
    event.preventDefault();
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    refs.formData[target.name] = target.value;
    console.log(refs.formData);

    const cookiesJSON = JSON.stringify(refs.formData);

    localStorage.setItem("localStorageKey", cookiesJSON);
    console.log(localStorage);
});

refs.feedbackform.addEventListener("submit", (event) => {
  event.preventDefault();
	console.log(event.target.elements.message.value);
    localStorage.removeItem(localStorage.localStorageKey);
    console.log("finish");
    refs.form.reset();
    localStorage.removeItem("localStorageKey");
});
