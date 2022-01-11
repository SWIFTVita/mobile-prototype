let current_timeout_id = undefined;
let duration = 0;
const showToast = (message) => {

    const ti = document.createElement("toast-item");
    get(".toast").appendChild(ti);

    if (undefined !== current_timeout_id) {
        clearTimeout(current_timeout_id);
    }
    ti.innerHTML = message;

    duration = 2000;

    show(".toast")

    current_timeout_id = setTimeout((e) => {
        current_timeout_id = undefined
        hide(".toast");
        get(".toast").innerHTML = "";
    }, duration);
}