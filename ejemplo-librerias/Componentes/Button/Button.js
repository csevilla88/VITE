import "./Button.css";

export const Button = (text, size = "m") => {
    const button = document.createElement("button");

    button.textContent = text;
    button.classList.add("common_button", size);

    return button;
}