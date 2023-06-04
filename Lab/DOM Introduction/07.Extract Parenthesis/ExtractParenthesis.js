function extract(content) {
  const content = document.getElementById("content").textContent;
  const regex = /\(([^)]+)\)/g;
  let matches = [];
  let match = "";
  while ((match = regex.exec(content))) {
    matches.push(match[1]);
  }
  return matches.join("; ");
}
