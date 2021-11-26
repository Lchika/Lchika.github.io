// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'メカトロ同好部エルチカ',
  tagline: 'メカトロ同好部エルチカのページへようこそ',
  url: 'https://lchika.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Lchika', // Usually your GitHub org/user name.
  projectName: 'Lchika.github.io', // Usually your repo name.

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
        title: 'Lchika',
        items: [
          {
            type: 'doc',
            docId: '射的ゲーム/intro',
            position: 'left',
            label: '射的ゲーム',
          },
          {
            href: 'https://github.com/Lchika/Lchika.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '射的ゲーム',
                to: '/docs/射的ゲーム/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://home.lchika.club/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Lchika',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} メカトロ同好部エルチカ Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
