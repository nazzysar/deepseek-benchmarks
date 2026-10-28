// Shared round prompt control; original demo documents remain untouched.
window.createPromptButton = function (round) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "prompt-button";
  button.textContent = "Prompt";
  button.setAttribute("aria-haspopup", "dialog");
  button.addEventListener("click", async () => {
    const dialog = document.createElement("dialog");
    dialog.className = "prompt-dialog";
    const heading = document.createElement("h2");
    heading.id = "prompt-title";
    heading.textContent = `${round.title} · Prompt`;
    dialog.setAttribute("aria-labelledby", heading.id);
    const close = document.createElement("button");
    close.type = "button";
    close.className = "prompt-close";
    close.textContent = "Close ×";
    close.addEventListener("click", () => dialog.close());
    const header = document.createElement("div");
    header.className = "prompt-heading";
    header.append(heading, close);
    const content = document.createElement("pre");
    content.className = "prompt-content";
    content.textContent = "Loading prompt…";
    dialog.append(header, content);
    document.body.append(dialog);
    dialog.addEventListener("close", () => { dialog.remove(); button.focus(); }, { once: true });
    dialog.addEventListener("click", event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.showModal();
    close.focus();
    try {
      const response = await fetch(round.prompt);
      if (!response.ok) throw new Error("Prompt unavailable");
      content.textContent = await response.text();
    } catch {
      content.textContent = "The prompt could not be loaded. ";
      const link = document.createElement("a");
      link.href = round.prompt;
      link.textContent = "Open prompt directly ↗";
      content.append(link);
    }
  });
  return button;
};
