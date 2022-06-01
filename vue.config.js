const path = require("path");
module.exports = {
	outputDir: "lib",
	pages: {
		index: {
			entry: "example/main.js",
			template: "public/index.html",
			filename: "index.html",
			title: "webrtc-player",
			chunks: ["chunk-vendors", "chunk-common", "index"],
		},
	},
	css: { extract: false }
};
