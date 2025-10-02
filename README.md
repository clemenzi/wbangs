<div align="center">
  <img src="./public/banner.svg" style="padding: 1rem" />
  
  WBangs is a dead simple search redirector. Inspired from [unduck.link](https://unduck.link).
</div>

## Usage

You can use wbangs today at [wbangs.vcz.me](https://wbangs.vcz.app). If you want to use wbangs as a default search engine add this string as your custom search engine in your browser:

```
https://wbangs.vcz.app/#q=%s
```

### Default Bang (default search engine)

You can set a default bang to use when no bang is specified. To do so you can use the input field at the bottom of the [homepage](https://wbangs.vcz.app), or you can directly set the variable `defaultBang` in the local storage of your browser, like so:

```javascript
localStorage.setItem("defaultBang", "!g");
```

## Installation

You can self host wbangs, this approach is recommended if you want to add custom bangs or modify existing ones to your liking. To do so, clone this repository and run:

```bash
git clone https://github.com/clemenzi/wbangs.git
cd wbangs
pnpm install
pnpm run build
pnpm run preview
```

This will start a local server at `http://localhost:4173`.

### Adding custom bangs

To add custom bangs you can modify the `scripts/generate-bangs.ts` file. The file is well documented and should be easy to understand. The basic structure is as follows:

```typescript
const customBang: { t: string; u: string }[] = [
  { t: "chat", u: "https://chatgpt.com/?q={{{s}}}" },
];
```

Where `t` is the bang trigger (without the `!`) and `u` is the URL to redirect to. The `{{{s}}}` placeholder will be replaced with the search query.

After modifying the file, run:

```bash
pnpm run generate:bangs
pnpm run build
```

## Contributing
Feel free to open issues or submit pull requests if you want to contribute to this project. Any help is appreciated!

> [!NOTE]
> I'm open to suggestions for new bangs, but I will decide which ones to add based on my own criteria.

## License
This project is licensed under the UNLICENSE. See the [LICENSE](./LICENSE) file for details.