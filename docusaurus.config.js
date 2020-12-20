module.exports = {
  title: 'AnnaGomez',
  tagline: 'Remember my name',
  url: 'https://annagomez.github.io/',
  baseUrl: '/',
  favicon: '/img/anna.jpeg',
  organizationName: 'annagomez', // Usually your GitHub org/user name.
  projectName: 'annagomez.github.io', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    disableDarkMode: true,
    navbar: {
      hideOnScroll: false,
      title: 'AG',
      links: [
        {
          to: 'docs/acting',
          label: 'Skådespeleri',
          position: 'left'
        },
        {
          to: 'docs/work',
          label: 'Agilt & Utveckling',
          position: 'left'
        },
        {
          to: 'docs/karate',
          label: 'Karate',
          position: 'left'
        },
        {
          to: 'docs/dj',
          label: 'DJ',
          position: 'left'
        },
        {
          to: 'blog/',
          label: 'Blog',
          position: 'right'
        },
        {
          to: 'docs/contact',
          label: 'Kontakt',
          position: 'right'
        }
      ],
    },
    footer: {
       links: [
         {
           items: [
             {
               label: 'Skådespeleri',
               to: 'docs/acting',
             },
             {
               label: 'Agilt & Utveckling',
               to: 'docs/work',
             },
             {
               label: 'Karate',
               to: 'docs/karate',
             },
             {
               label: 'DJ',
               to: 'docs/dj',
             }
           ],
         },
         {
           items: [
             {
               label: 'Stagepool',
               to: 'https://sv.stagepool.com/cv/annagomez/251801',
             },
             {
               label: 'LinkedIn',
               to: 'https://www.linkedin.com/in/djannagomez/',
             },
           ],
         },
         {
           items: [
             {
               label: 'info@annagomez.se',
               to: 'mailto:info@annagomez.se',
             },
             {
               label: 'Facebook',
               to: 'https://www.facebook.com/annagomezfetisova/',
             },
             {
               label: 'Instagram',
               to: 'https://www.instagram.com/djannagomez/',
             },
           ],
         },
       ],
       copyright: `<p class='copyright_style'>Copyright AnnaGomez © ${new Date().getFullYear()} Built with Docusaurus.</p>`,
     },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
