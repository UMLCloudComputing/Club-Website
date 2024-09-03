// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const process = require('node:process');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UML Cloud Computing Club',
  tagline: 'Exploring Cloud Computing at UMass Lowell',
  favicon: 'img/logo_icon.png',

  // Set the production url of your site here
  url: 'https://UMLCloudComputing.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.IS_LOCAL ? '/UMLCloudComputing.github.io/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UMLCloudComputing', // Usually your GitHub org/user name.
  projectName: 'UMLCloudComputing.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: 'sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor:true,
          showLastUpdateTime: true,
        },

        blog: {
          showReadingTime: true,
          authorsMapPath: 'authors.yml',
          tags: 'tags.yml',
          blogDescription: 'The Offical Blog page of UML Cloud Computing Club'    
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'projects',
  //       path: './projects',
  //       routeBasePath: './projects',
  //       sidebarPath: 'projectsSidebars.js',
  //     },
  //   ],
  // ],

 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_icon.png',
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcement-bar',
        content:
          '🚀Kick-off meeting coming soon!🚀',
        backgroundColor: '#48a0ff',
        textColor: '#fff',
        isCloseable: false
      },
      navbar: {
        title: 'UML Cloud Computing Club',
        logo: {
          alt: 'UML Cloud Computing Club Logo',
          src: 'img/logo_icon.png',
        },
        items: [

          // Schedule
          {
            type: 'docSidebar',
            sidebarId: 'scheduleSidebar',
            position: 'left',
            label: 'Schedule',
          },

          // Blog
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },

          // Projects
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Projects',
          },

          // Resources
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },

          // Activities
          {
            type: 'docSidebar',
            sidebarId: 'activitiesSidebar',
            position: 'left',
            label: 'Activities',
          },
        
          // Github
          {
            href: 'https://github.com/UMLCloudComputing',
            'aria-label': 'GitHub',
            className: 'navbar__icon navbar__github',
            position: 'right',
            html: '<i class="fa fa-github"></i>',
          },

          // Socials (Discord, Instagram, LinkedIn)
          {
            type: 'dropdown',
            label: 'Socials',
            position: 'right',
            items: [
              
              // Discord
              {
                href: 'https://discord.gg/WC2NdqYtDt',
                label: 'Discord',
              },
              
              // Instagram
              {
                href: 'https://www.instagram.com/umlcloudcomputing/',
                label: 'Instagram',
              },

              // LinkedIn
              {
                href: 'https://www.linkedin.com/company/umass-lowell-cloud-computing-club/',
                label: 'LinkedIn',
              },

              // Engage
              {
                href: 'https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub',
                label: 'Engage',
              },
            ]
          },

          // Sign In
          {
            type: 'custom-accountButton',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/WC2NdqYtDt',
              },
              {
                label: 'UML Engage',
                href: 'https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UMLCloudComputing',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/umass-lowell-cloud-computing-club/',
              },
            ],
          },
          {
            title: 'Help',
            items: [
              {
                label: 'FAQ',
                to: '/docs/Getting Started and FAQ'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UMass Lowell Cloud Computing Club`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'bash']
      },
    }),
};

export default config;
