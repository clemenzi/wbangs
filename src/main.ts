import { parse } from "./utils";
import { bangs } from "./bang";

(() => {
  const hash = decodeURIComponent(window.location.hash.slice(1));

  if (!hash) return;

  const { bang, query } = parse(hash);

  if (!bang) {
    window.location.replace(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    return;
  }

  const url = bangs.filter((b) => b.t === bang.replace("!", ""))[0].u;

  console.log({ bang, query, url });

  window.location.replace(url.replace("{{{s}}}", encodeURIComponent(query)));
})();
