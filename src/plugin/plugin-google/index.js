module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin-google",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-58V3HGPSD1');
            `,
          },
        ],
      };
    },
  };
};
