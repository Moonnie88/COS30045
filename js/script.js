// Show one page and hide the others, then highlight the matching nav link
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    const links = document.querySelectorAll(".nav-links a");

    // Fall back to home if the page id is not valid
    if (!document.getElementById(pageId)) {
        pageId = "home";
    }

    pages.forEach(function (page) {
        page.classList.toggle("active", page.id === pageId);
    });

    links.forEach(function (link) {
        link.classList.toggle("active", link.dataset.page === pageId);
    });

    // Update the browser tab title so the user knows where they are
    const heading = document.querySelector("#" + pageId + " h1");
    document.title = "PowerWise | " + heading.textContent;
}

// Nav links and the logo all carry a data-page attribute
document.querySelectorAll("[data-page]").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const pageId = link.dataset.page;
        history.pushState(null, "", "#" + pageId);
        showPage(pageId);
    });
});

// Support the browser back/forward buttons
window.addEventListener("popstate", function () {
    showPage(location.hash.substring(1));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Show the correct page on first load (e.g. if the URL has #televisions)
showPage(location.hash.substring(1));
