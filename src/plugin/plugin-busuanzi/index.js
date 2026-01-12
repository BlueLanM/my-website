module.exports = function(context, options) {
	return {
		name: "docusaurus-plugin-busuanzi",
		injectHtmlTags() {
			return {
				headTags: [],
				preBodyTags: [],
				postBodyTags: [
					{
						tagName: "script",
						attributes: {
							async: true,
							src: "https://busuanzi.icodeq.com/busuanzi.pure.mini.js"
						}
					}
				]
			};
		}
	};
};