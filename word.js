const WORDS = [
  "apple", "cloud", "pillow", "matrix", "ocean",
  "world", "house", "garden", "banana", "rocket",
  "planet", "school", "friend", "water", "bridge",
  "river", "forest", "light", "music", "dream",
  "castle", "flower", "python", "coffee", "vision"
];

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}
