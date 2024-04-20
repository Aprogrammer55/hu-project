let sections = document.getElementById("sections");

sections.onclick = function () {
    if (sections.classList.contains("shown")) {
        document.getElementById("list").style.display = "none";
    } else if (!sections.classList.contains("shown")) {
        document.getElementById("list").style.display = "block";
    }
    sections.classList.toggle("shown");
};
