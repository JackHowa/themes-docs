// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Themes Docs 🎨',
  tagline: 'Theme your site not your knowledge',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/themes-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jackhowa', // Usually your GitHub org/user name.
  projectName: 'themes-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Themes',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/JackHowa/themes-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Maintainer Repositories',
            items: [
              {
                label: 'Theme Components',
                href: 'https://github.com/matthewroach/theme-components'
              },
              {
                label: 'PageBuilder Engine Theme Blocks',
                href: 'https://github.com/WPMedia/fusion-news-theme-blocks'
              },
              {
                label: 'Engine Theme SDK',
                href: 'https://github.com/WPMedia/engine-theme-sdk',
              },
              {
                label: 'Feature Pack Example',
                href: 'https://github.com/WPMedia/Fusion-News-Theme'
              },
              {
                label: 'PageBuilder Engine',
                href: 'https://github.com/WPMedia/fusion'
              },
              {
                label: 'Theme Settings UI',
                href: 'https://github.com/WPMedia/themebuilder-ui'
              },
              {
                label: 'Theme Settings API',
                href: 'https://github.com/WPMedia/themebuilder-api'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/JackHowa/themes-docs',
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
