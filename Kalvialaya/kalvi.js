document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content");
    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function (data) {
            data.preventDefault();
            sections.forEach(function (section) {
                section.style.display = "none";
            });
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).style.display = "block";
        });
    });
    document.getElementById("logo").style.display = "block";
});
