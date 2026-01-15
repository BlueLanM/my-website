module.exports = function(context, options) {
	return {
		injectHtmlTags() {
			return {
				headTags: [],
				postBodyTags: [
					{
						attributes: {
							async: true,
							defer: true,
							src: `${context.siteConfig.baseUrl}busuanzi.min.js`
						},
						tagName: "script"
					}
				],
				preBodyTags: []
			};
		},
		name: "docusaurus-plugin-busuanzi"
	};
};