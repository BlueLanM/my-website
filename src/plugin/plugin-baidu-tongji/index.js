module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin-baidu-tongji",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?7bc87de561fa789f1285707faed5853e";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          },
          {
            tagName: "meta",
            attributes: {
              name: "baidu-site-verification",
              content: "code-rqLUw5reVS",
            },
          },
        ],
      };
    },
  };
};
