document.addEventListener("DOMContentLoaded", function () {
    const descriptionBox = document.getElementById("description-box");

    // Hover effect with delay for description
    function addHoverEffect(selector, offset = 50) {
        document.querySelectorAll(selector).forEach(item => {
            let showTimeout;
            item.addEventListener("mouseenter", function () {
                const description = item.getAttribute("data-description");
                if (description) {
                    showTimeout = setTimeout(() => {
                        descriptionBox.textContent = description;
                        descriptionBox.style.display = "block";
                        descriptionBox.style.border = "1px solid black";
                        const rect = item.getBoundingClientRect();
                        descriptionBox.style.top = `${rect.top - descriptionBox.offsetHeight + offset}px`;
                        descriptionBox.style.left = `${rect.left + (item.offsetWidth / 2) - (descriptionBox.offsetWidth / 2)}px`;
                    }, 500);
                }
            });

            item.addEventListener("mouseleave", function () {
                clearTimeout(showTimeout);
                descriptionBox.style.display = "none";
            });

            item.addEventListener("click", function () {
                const loginUrl = getLoginUrl(item.getAttribute("data-description"));
                if (loginUrl) {
                    window.location.href = loginUrl;
                }
            });
        });
    }

    addHoverEffect(".icon-item-below", 100);
    addHoverEffect(".top-nav .nav-btn");

    // Click handling for other elements
    function addClickHandler(selector, attribute = "data-description", parent = false) {
        document.querySelectorAll(selector).forEach(item => {
            item.addEventListener("click", function () {
                const description = parent ? item.parentNode.getAttribute(attribute) : item.getAttribute(attribute);
                const loginUrl = getLoginUrl(description);
                if (loginUrl) {
                    window.location.href = loginUrl;
                }
            });
        });
    }

    addClickHandler(".right-icons .icon, #apps-icon");
    addClickHandler(".left-icons .icon-item img, .left-icons .icon-item span", "data-description", true);

    // Mapping descriptions to URLs
    function getLoginUrl(description) {
        const urlMap = {
            "Gmail": "https://mail.google.com/",
            "YouTube": "https://www.youtube.com/",
            "Maps": "https://maps.google.com/",
            "WhatsApp": "https://web.whatsapp.com/",
            "LinkedIn": "https://www.linkedin.com/",
            "ChatGPT": "https://www.chatgpt.com/"
        };
        return urlMap[description] || null;
    }

    // Handle search bar actions
    function handleSearch(event) {
        if (event.key === "Enter") {
            const query = event.target.value;
            if (query) {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        }
    }

    const searchBar = document.querySelector(".search-bar");
    const customSearchInput = document.querySelector(".search-input");

    if (searchBar) {
        searchBar.addEventListener("keydown", handleSearch);
    }

    if (customSearchInput) {
        customSearchInput.addEventListener("keydown", handleSearch);
    }

    // More options dialogue
    const moreOptionsBtn = document.getElementById("more-options-btn");
    if (moreOptionsBtn) {
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
    }

    // Add shortcut dialogue
    const addShortcutBtn = document.querySelector(".circle-plus");
    if (addShortcutBtn) {
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
    }

    // Customize Chrome
});
const customizeChromeBtn = document.querySelector(".customize-chrome");
if (customizeChromeBtn) {
    customizeChromeBtn.addEventListener("click", function () {
        const currentTheme = localStorage.getItem("theme");
        const darkMode = confirm(currentTheme === "dark" ? "Disable Dark Mode?" : "Enable Dark Mode?");
        if (darkMode) {
            document.body.classList.toggle("dark-theme");
            const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
        }
    });
}

// Apply theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}
