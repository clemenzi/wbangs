import fs from "fs/promises";

(async () => {
  const data = await fetch("https://duckduckgo.com/bang.js").then((res) =>
    res.json()
  );

  // Add custom bangs/overrides
  const customBang: { t: string; u: string }[] = [
    { t: "chat", u: "https://chatgpt.com/?q={{{s}}}" },
  ];

  const bangs = Object.fromEntries(
    [...data, ...customBang].map(({ t, u }) => {
      if (customBang.find((b) => b.t === t)) {
        return [`!${t}`, customBang.find((b) => b.t === t)!.u];
      }

      return [`!${t}`, u];
    })
  );

  await fs.writeFile(
    "src/bang.ts",
    `export const bangs: Record<string, string> = ${JSON.stringify(
      bangs,
      null,
      2
    )};`,
    "utf8"
  );
})();
