module.exports = function(context, options) {
	return {
		injectHtmlTags() {
			return {
				headTags: [],
				postBodyTags: [
					// {
					// 	attributes: {
					// 		defer: true,
					// 		// src: "//cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js"
					// 		src: "/my-website/busuanzi.min.js"
					// 	},
					// 	tagName: "script"
					// }
				],
				preBodyTags: []
			};
		},
		name: "docusaurus-plugin-busuanzi"
	};
};