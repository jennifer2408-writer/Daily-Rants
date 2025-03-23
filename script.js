// Example: Alert when clicking a section
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("click", () => {
        alert("You clicked on " + section.id);
    });
});
