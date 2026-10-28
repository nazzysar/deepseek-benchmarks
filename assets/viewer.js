const catalog = window.BENCHMARK_ROUNDS;
const params = new URLSearchParams(location.search);
const round = catalog.find(item => item.id === (params.get("round") || catalog[0]?.id));
const demo = round?.demos.find(item => item.id === (params.get("demo") || round.demos[0]?.id));
const picker = document.querySelector("#round-select");
const message = document.querySelector("#viewer-message");
for (const item of catalog) {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.title;
  option.selected = item === round;
  picker.append(option);
}
function viewerUrl(roundId, demoId) {
  return `demo.html?round=${encodeURIComponent(roundId)}&demo=${encodeURIComponent(demoId)}`;
}
picker.addEventListener("change", () => {
  const nextRound = catalog.find(item => item.id === picker.value);
  const nextDemo = nextRound.demos.find(item => item.id === demo?.id) || nextRound.demos[0];
  location.href = viewerUrl(nextRound.id, nextDemo.id);
});
if (!round || !demo) {
  document.title = "Demo not found — DeepSeek Benchmarks";
  message.textContent = "This demo is not in the archive. Choose a round above or return to all rounds.";
} else {
  document.title = `${demo.shortName} · ${round.title} — DeepSeek Benchmarks`;
  document.querySelector("#back-link").href = `./#${round.id}`;
  for (const item of round.demos) {
    const link = document.createElement("a");
    link.href = viewerUrl(round.id, item.id);
    link.textContent = item.shortName;
    link.title = item.name;
    link.setAttribute("aria-label", item.name);
    if (item === demo) link.setAttribute("aria-current", "page");
    document.querySelector("#demo-nav").append(link);
  }
  if (round.prompt) document.querySelector("#direct-link").before(window.createPromptButton(round));
  const direct = document.querySelector("#direct-link");
  direct.href = demo.path;
  direct.hidden = false;
  const frame = document.createElement("iframe");
  frame.title = `${demo.name} — ${round.title}: ${demo.title}`;
  frame.src = demo.path;
  frame.addEventListener("load", () => message.remove(), { once: true });
  document.querySelector("#viewer-main").append(frame);
}
