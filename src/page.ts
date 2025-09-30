import "@picocss/pico/css/pico.min.css";

export function render() {
  document.body.innerHTML = `
    <main class="container">
      <h1>WBangs</h1>
      <p>
        WBangs is a dead simple search redirector that uses <a href="https://duckduckgo.com/bangs" target="_blank" rel="noopener noreferrer">DuckDuckGo Bangs</a> syntax to redirect your searches to different search engines and websites.
        It's inspired by <a href="https://unduck.link" target="_blank" rel="noopener noreferrer">unduck.link</a> but with the main difference of using url fragments instead of query parameters.
        <a href="https://en.wikipedia.org/wiki/URI_fragment">URL Fragments</a> are more privacy friendly as they are never sent to the server by design.
      </p>
      <hr />
      <h2>Usage</h2>
      <p>
        Add this string as your custom search engine in your browser:
        <br />
        <code>https://wbangs.vcz.app/#q=%s</code>
      </p>
      <hr />
      <h2>Change default bang</h2>
      <p>
        You can change the default bang (used when no bang is specified in the query) by setting a new value in the browser's local storage.
      </p>
      <input type="text" id="defaultBangInput" placeholder="Enter default bang (e.g. !g)" />
      <hr />
      <footer>
        <p>
          <a href="/bangs.json" target="_blank" rel="noopener noreferrer">List of supported bangs</a>
          <br />
          Made with ❤️ by <a href="https://vcz.me" target="_blank" rel="noopener noreferrer">vcz</a>
        </p>
      </footer>
    </main>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector<HTMLInputElement>("#defaultBangInput");

  if (!input) return;

  input.value = localStorage.getItem("defaultBang") || "!g";

  input.addEventListener("change", (e) => {
    const value = (e.target as HTMLInputElement).value;
    localStorage.setItem("defaultBang", value);
  });
});
