import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UnHacknet",
  description: "A curated list of awesome things related to Hacknet.",
  lang: "en",
  lastUpdated: true,
  srcDir: "./",
  rewrites: {
    "readme.md": "index.md",
  },
  srcExclude: ["code_of_conduct.md", "contributing.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: "deep",
    nav: [{ text: "Hacknet.wiki", link: "https://Hacknet.wiki" }],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/UnHacknet/awesome-hacknet" },
    ],
    editLink: {
      pattern: "https://github.com/UnHacknet/awesome-hacknet",
    },
  },
});
