module.exports = function(context, options) {
	return {
		injectHtmlTags() {
			return {
				headTags: [],
				postBodyTags: [
					{
						attributes: {
							async: true,
							src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
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