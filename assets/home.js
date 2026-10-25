const roundsRoot = document.querySelector("#rounds");
for (const [index, round] of window.BENCHMARK_ROUNDS.entries()) {
  const section = document.createElement("section");
  section.className = "round";
  section.id = round.id;
  const heading = document.createElement("div");
  heading.className = "round-heading";
  const title = document.createElement("h2");
  title.textContent = round.title;
  const count = document.createElement("span");
  count.className = "eyebrow";
  count.textContent = `${String(index + 1).padStart(2, "0")} / ${round.demos.length} demos`;
  heading.append(title, count);
  const description = document.createElement("p");
  description.className = "round-description";
  description.textContent = round.description;
  const grid = document.createElement("div");
  grid.className = "demo-grid";
  for (const demo of round.demos) {
    const card = document.createElement("a");
    card.className = `demo-card ${demo.tone}`;
    card.href = `demo.html?round=${encodeURIComponent(round.id)}&demo=${encodeURIComponent(demo.id)}`;
    const artwork = document.createElement("div");
    artwork.className = "card-art";
    artwork.setAttribute("aria-hidden", "true");
    const monogram = document.createElement("span");
    monogram.textContent = demo.shortName;
    artwork.append(monogram);
    const content = document.createElement("div");
    content.className = "card-content";
    for (const [tag, className, text] of [["p", "eyebrow", demo.name], ["h3", "", demo.title], ["p", "card-description", demo.description], ["span", "card-action", "Explore demo ↗"]]) {
      const element = document.createElement(tag);
      element.className = className;
      element.textContent = text;
      content.append(element);
    }
    card.append(artwork, content);
    grid.append(card);
  }
  section.append(heading, description, grid);
  roundsRoot.append(section);
}
