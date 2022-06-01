<template>
	<Player
		:webrtcURL="webrtcURL"
		style="height: 600px; width: 800px"
		:visible="visible"
		@close="close"
		@control="control"
	></Player>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import Player from "../package/player.vue";

export default {
	data() {
		return {
			visible: true,
			webrtcURL:
				"webrtc://gdnf.nongbotech.com/jit-live-prod/34020001001320200852?id=e1628cc8f10d0c76286cbc2514f58c8c&expire=1654095208&source_type=1&sign=79576fcefe668d6feaf6bb0b0a49b8f0",
		};
	},
	components: {
		Player,
	},
	methods: {
		control(dir) {
			console.log(dir);
		},
		close() {
			this.visible = false;
		},
	},
};
</script>
