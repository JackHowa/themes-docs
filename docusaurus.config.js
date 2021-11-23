// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Themes Docs 🎨",
  tagline: "Theme your site not your knowledge",
  url: "https://jackhowa.github.io",
  baseUrl: "/themes-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jackhowa", // Usually your GitHub org/user name.
  projectName: "themes-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/JackHowa/themes-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Themes",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/JackHowa/themes-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Maintainer Repositories",
            items: [
              {
                label: "Themes Components",
                href: "https://github.com/WPMedia/theme-components",
              },
              {
                label: "Themes Blocks",
                href: "https://github.com/WPMedia/fusion-news-theme-blocks",
              },
              {
                label: "Engine Theme SDK",
                href: "https://github.com/WPMedia/engine-theme-sdk",
              },
              {
                label: "Themes Feature Pack Example",
                href: "https://github.com/WPMedia/Fusion-News-Theme",
              },
              {
                label: "PageBuilder Engine",
                href: "https://github.com/WPMedia/fusion",
              },
              {
                label: "Theme Settings UI",
                href: "https://github.com/WPMedia/themebuilder-ui",
              },
              {
                label: "Theme Settings API",
                href: "https://github.com/WPMedia/themebuilder-api",
              },
              {
                label: "PageBuilder Engine CLI",
                href: "https://github.com/WPMedia/fusion-cli",
              },
              {
                label: "PageBuilder Engine Prop-Types",
                href: "https://github.com/WPMedia/fusion-prop-types",
              },
              {
                label: "Repo Builder",
                href: "https://github.com/arc-partners/RepoBuilder",
              },
            ],
          },
          {
            title: "Storybooks",
            items: [
              {
                label: "Engine Theme SDK - Canary",
                href: "https://canary--5eed0506faad4f0022fedf95.chromatic.com/",
              },
              {
                label: "Engine Theme SDK - Beta",
                href: "https://beta--5eed0506faad4f0022fedf95.chromatic.com/",
              },
              {
                label: "Engine Theme SDK - Stable",
                href: "https://stable--5eed0506faad4f0022fedf95.chromatic.com/",
              },
              {
                label: "Themes Blocks - Canary",
                href: "https://canary--5f91e4721ccaba0022a10782.chromatic.com/",
              },
              {
                label: "Themes Blocks - Beta",
                href: "https://beta--5f91e4721ccaba0022a10782.chromatic.com/",
              },
              {
                label: "Themes Blocks - Stable",
                href: "https://stable--5f91e4721ccaba0022a10782.chromatic.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/JackHowa/themes-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arc XP. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
