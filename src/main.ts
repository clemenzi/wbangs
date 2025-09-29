import { parse } from "./utils";
import { bangs } from "./bang";
import { render } from "./page";

(() => {
  const hash = decodeURIComponent(window.location.hash.slice(1));

  if (!hash) return render();

  const { bang, query } = parse(hash);
  const url = bangs[bang.replace("!", "")];

  window.location.replace(url.replace("{{{s}}}", encodeURIComponent(query)));
})();
