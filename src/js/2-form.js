const refs = {
    formData: {
        email: "",
        message: "",
    },
    feedbackform: document.querySelector(".feedback-form"),
    localStorageKey: "feedback-form-state",
};

const fillFormFields = (feedbackForm) => {
    const savedData = localStorage.getItem(refs.localStorageKey);
    if (savedData) {
        try {
            const { email = "", message = "" } = JSON.parse(savedData);
            feedbackForm.elements.email.value = email;
            feedbackForm.elements.message.value = message;
            refs.formData.email = email;
            refs.formData.message = message;
        } catch (error) {
            console.error("Error parsing saved data:", error);
            localStorage.removeItem(refs.localStorageKey);
        }
    }
};

fillFormFields(refs.feedbackform);

refs.feedbackform.addEventListener("input", (event) => {
    const { name, value } = event.target;
    refs.formData[name] = value.trim();
    localStorage.setItem(refs.localStorageKey, JSON.stringify(refs.formData));
});

refs.feedbackform.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!refs.formData.email || !refs.formData.message) {
        alert("Fill in all fields!");
        return;
    }

    console.log(refs.formData);
    localStorage.removeItem(refs.localStorageKey);
    refs.feedbackform.reset();
    refs.formData = { email: "", message: "" };
});
