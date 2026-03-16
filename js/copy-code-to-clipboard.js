const ICON_COPY = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>`;
const ICON_COPIED = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>`;

const code_blocks = document.querySelectorAll("pre code[data-lang]");

for (const code_block of code_blocks) {
    let content;
    if (code_block.parentElement.hasAttribute("data-linenos")) {
        content = [...code_block.querySelectorAll("tr")]
            .map((row) => row.querySelector("td:last-child")?.innerText ?? "")
            .join("");
    } else {
        content = code_block.innerText.split("\n").filter(Boolean).join("\n");
    }

    // Copy to clipboard
    if (navigator.clipboard !== undefined) {
        const copyButton = document.createElement("button");
        copyButton.classList.add("copy-button");
        copyButton.innerHTML = ICON_COPY;
        copyButton.setAttribute("aria-label", "Copy code");
        copyButton.setAttribute("title", "Copy");

        copyButton.addEventListener("click", () => {
            copyButton.innerHTML = ICON_COPIED;
            copyButton.setAttribute("aria-label", "Copied");
            copyButton.setAttribute("title", "Copied!");
            setTimeout(() => {
                copyButton.innerHTML = ICON_COPY;
                copyButton.setAttribute("aria-label", "Copy code");
                copyButton.setAttribute("title", "Copy");
            }, 1000);

            navigator.clipboard.writeText(content);
        });

        code_block.prepend(copyButton);
    }
}
