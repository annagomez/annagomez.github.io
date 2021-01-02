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
               to: 'https://sv.stagepool.com/cv/annagomez/251801',
               className: 'footer-stagepool-link',
               'aria-label': 'stagepool'
             },
             {
               to: 'https://www.linkedin.com/in/djannagomez/',
               className: 'footer-linkedin-link',
               'aria-label': 'linkedin'
             },
             {
               className: 'footer-youtube-link',
               'aria-label': 'youtube'
             },
           ],
         },
         {
           items: [
             {
               to: 'https://www.facebook.com/annagomezfetisova/',
               className: 'footer-facebook-link',
               'aria-label': 'facebook'
             },
             {
               to: 'https://www.instagram.com/djannagomez/',
               className: 'footer-instagram-link',
               'aria-label': 'instagram'
             },
             {
               to: 'mailto:info@annagomez.se',
               className: 'footer-mail-link',
               'aria-label': 'mail'
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
