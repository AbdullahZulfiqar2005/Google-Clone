document.addEventListener("DOMContentLoaded", function () {
    const descriptionBox = document.getElementById("description-box");

    document.querySelectorAll(".icon-item-below").forEach(item => {
        item.addEventListener("mouseenter", function () {
            const description = item.getAttribute("data-description");
            if (description) {
                descriptionBox.textContent = description;
                descriptionBox.style.display = "block";
                descriptionBox.style.borderRadius="20%";
                const rect = item.getBoundingClientRect();
                descriptionBox.style.top = `${rect.top - descriptionBox.offsetHeight+100}px`;
                descriptionBox.style.left = `${rect.left + (item.offsetWidth / 2) - (descriptionBox.offsetWidth / 2)}px`;
            }
        });

        item.addEventListener("mouseleave", function () {
            descriptionBox.style.display = "none";
        });

        item.addEventListener("click", function () {
            const loginUrl = getLoginUrl(item.getAttribute("data-description"));
            if (loginUrl) {
                window.location.href = loginUrl;
            }
        });
    });

    document.querySelectorAll(".top-nav .nav-btn").forEach(item => {
        item.addEventListener("mouseenter", function () {
            const description = item.getAttribute("data-description");
            if (description) {
                descriptionBox.textContent = description;
                descriptionBox.style.display = "block";
                const rect = item.getBoundingClientRect();
                descriptionBox.style.top = `${rect.top - descriptionBox.offsetHeight+50}px`;
                descriptionBox.style.left = `${rect.left + (item.offsetWidth / 2) - (descriptionBox.offsetWidth / 2)}px`;
            }
        });

        item.addEventListener("mouseleave", function () {
            descriptionBox.style.display = "none";
        });

        item.addEventListener("click", function () {
            const loginUrl = getLoginUrl(item.getAttribute("data-description"));
            if (loginUrl) {
                window.location.href = loginUrl;
            }
        });
    });

    document.querySelectorAll(".right-icons .icon, #apps-icon").forEach(item => {
        item.addEventListener("click", function () {
            const loginUrl = getLoginUrl(item.getAttribute("data-description"));
            if (loginUrl) {
                window.location.href = loginUrl;
            }
        });
    });

    document.querySelectorAll(".left-icons .icon-item img, .left-icons .icon-item span ").forEach(item => {
        item.addEventListener("click", function () {
            const loginUrl = getLoginUrl(item.parentNode.getAttribute("data-description"));
            if (loginUrl) {
                window.location.href = loginUrl;
            }
        });
    });

    function getLoginUrl(description) {
        switch (description) {
            case "Gmail":
                return "https://mail.google.com/";
            case "YouTube":
                return "https://www.youtube.com/";
            case "Maps":
                return "https://maps.google.com/";
            case "WhatsApp":
                return "https://web.whatsapp.com/";
            case "LinkedIn":
                return "https://www.linkedin.com/";
            case "ChatGPT":
                return "https://www.chatgpt.com/";
            default:
                return null;
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        const searchLabBtn = document.getElementById("#icon");

        searchLabBtn.addEventListener("click", function () {
            window.location.href = "https://www.google.com/labs/";
        });
    });


    const searchBar = document.querySelector(".search-bar");
    const customSearchInput = document.querySelector(".search-input");

    function handleSearch(event) {
        if (event.key === "Enter") {
            const query = event.target.value;
            if (query) {
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.location.href = googleSearchUrl;
            }
        }
    }

    searchBar.addEventListener("keydown", handleSearch);
    customSearchInput.addEventListener("keydown", handleSearch);
});

document.addEventListener("DOMContentLoaded", function () {
    const moreOptionsBtn = document.getElementById("more-options-btn");
    const optionsDialogue = document.createElement("div");

    optionsDialogue.classList.add("options-dialogue");
    optionsDialogue.innerHTML = `
        <ul>
            <li>New Window</li>
            <li>New Incognito Window</li>
            <li>Bookmarks</li>
            <li>History</li>
        </ul>
    `;

    moreOptionsBtn.addEventListener("click", function () {
        document.body.appendChild(optionsDialogue);

        const rect = moreOptionsBtn.getBoundingClientRect();
        optionsDialogue.style.top = `${rect.top + window.scrollY + 30}px`;
        optionsDialogue.style.right = `${window.innerWidth - rect.right}px`;
    });

    document.addEventListener("click", function (event) {
        if (!optionsDialogue.contains(event.target) && event.target !== moreOptionsBtn) {
            optionsDialogue.remove();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addShortcutBtn = document.querySelector(".icon-item-below[data-description='Add Shortcut']");
    const shortcutDialogue = document.createElement("div");

    shortcutDialogue.classList.add("shortcut-dialogue");
    shortcutDialogue.innerHTML = `
        <input type="text" id="shortcut-name" placeholder="Enter Name">
        <input type="text" id="shortcut-url" placeholder="Enter URL">
        <button id="save-shortcut">Save</button>
`;

    addShortcutBtn.addEventListener("click", function () {
        document.body.appendChild(shortcutDialogue);

        const rect = addShortcutBtn.getBoundingClientRect();
        shortcutDialogue.style.top = `${rect.top + window.scrollY + addShortcutBtn.offsetHeight}px`;
        shortcutDialogue.style.left = `${rect.left}px`;
    });

    document.addEventListener("click", function (event) {
        if (!shortcutDialogue.contains(event.target) && event.target !== addShortcutBtn) {
            shortcutDialogue.remove();
        }
    });

    document.getElementById("save-shortcut").addEventListener("click", function () {
        const shortcutName = document.getElementById("shortcut-name").value;
        const shortcutUrl = document.getElementById("shortcut-url").value;


        console.log("Shortcut Name:", shortcutName);
        console.log("Shortcut URL:", shortcutUrl);

        shortcutDialogue.remove();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const customizeChromeBtn = document.querySelector(".customize-chrome");

    customizeChromeBtn.addEventListener("click", function () {
        const darkMode = confirm("Select Dark Mode?");

        if (darkMode) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    });
});
