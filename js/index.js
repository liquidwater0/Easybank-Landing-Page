const navCheckbox = document.getElementById("navCheckbox");
const svgContainer = document.getElementById("svgContainer");

navCheckbox.addEventListener("input", () => {
    const openSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>`;
    const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>`;

    svgContainer.innerHTML = navCheckbox.checked ? closeSVG : openSVG;
    document.body.classList.toggle("navigation-open", navCheckbox.checked);
});