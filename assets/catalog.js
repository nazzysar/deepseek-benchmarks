// Add future rounds here; demo source files stay untouched in rounds/.
window.BENCHMARK_ROUNDS = [
  {
    id: "round-1",
    title: "Round 1",
    description: "Ecosystems under glass. Three interactive vivariums, each with its own world to explore.",
    prompt: "assets/round-1-prompt.txt",
    demos: [
      { id: "dsp", name: "DeepSeek Platform", shortName: "DSP", title: "A Closed Ecology", description: "Plate VII, observed from Station KH-9.", path: "rounds/round-1/dsp/index.html", tone: "blue" },
      { id: "ocg", name: "OpenCode Go", shortName: "OCG", title: "Abyssal Vivarium", description: "Specimen Plate Nº 08, from the deep-sea observatory.", path: "rounds/round-1/ocg/index.html", tone: "aqua" },
      { id: "ccg", name: "CommandCode GOAT", shortName: "CCG", title: "Vivarium Nº 7", description: "A field ledger of trophic succession.", path: "rounds/round-1/ccg/index.html", tone: "paper" }
    ]
  },
  {
    id: "round-2",
    title: "Round 2",
    description: "Cartographer’s Paradox. Four hand-inked atlases, one deduction challenge: complete the map and uncover the lies.",
    prompt: "assets/round-2-prompt.txt",
    video: "assets/video/round-2-comparison.mp4",
    poster: "assets/video/round-2-comparison-poster.jpg",
    demos: [
      { id: "dsp", name: "DeepSeek API", shortName: "DSP", title: "Cartographer’s Paradox — A Hand-Inked Atlas of Lies", description: "Read unreliable margin notes and chart the true terrain.", path: "rounds/round-2/dsp/index.html", tone: "paper" },
      { id: "ocg", name: "OpenCode Go", shortName: "OCG", title: "Cartographer’s Paradox — A Hand-Inked Atlas Mystery", description: "Find the lying notes and ink the five terrains of an unreliable atlas.", path: "rounds/round-2/ocg/index.html", tone: "aqua" },
      { id: "od", name: "OpenDesign", shortName: "OD", title: "Cartographer’s Paradox — A Hand-Inked Atlas", description: "Complete a fantasy hex atlas while its cartographer lies exactly L times.", path: "rounds/round-2/od/index.html", tone: "paper" },
      { id: "oll", name: "Ollama API", shortName: "OLL", title: "Cartographer’s Paradox · A Hand-Inked Atlas of Lies", description: "Deduce the map and unmask the liars among the clues.", path: "rounds/round-2/oll/index.html", tone: "blue" }
    ]
  }
];
