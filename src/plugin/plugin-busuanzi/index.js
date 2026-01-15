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
							src: "/busuanzi.min.js"
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