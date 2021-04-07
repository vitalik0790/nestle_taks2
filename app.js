function onSend() {
    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    inputs.forEach((input, i) => {
        input.setAttribute("required", true);
        if (input.validity.valid) {
            console.log(`input ${i} is checked`);
            input.classList.remove('error');
        } else {
            console.log(`input ${i} is failed`);
            input.classList.add('error');
        };
    });
};

let form = document.querySelector("form");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    onSend();
});