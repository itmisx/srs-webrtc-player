<template>
	<div v-if="visible" style="
			height: 100%;
			width: 100%;
			background-color: black;
			position: absolute;
			z-index: 20000;
			margin: auto;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: flex;
			flex-direction: row;
		">
		<!-- video -->
		<div style="height: 100%; flex: 1; background-color: black">
			<video ref="srs_webrtc_player" controls autoplay width="100%" height="100%">
				您的浏览器不支持
			</video>
		</div>
		<!-- 控制区 -->
		<div style="
				height: 100%;
				width: 150px;
				display: flex;
				flex-direction: column;
				align-items: center;
			">
			<!-- 关闭操作 -->
			<div style="align-self: flex-end;margin-right: 10px;">
				<i class="el-icon-close" style="color:white;cursor: pointer;" @click="close"></i>
			</div>
			<!-- 云台控制 -->
			<div style="
				flex:1;
				width: 150px;
				background-color: black;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			">
				<div>
					<!-- 上 -->
					<el-button type="info" icon="el-icon-caret-top" circle size="small" @click="control('up')">
					</el-button>
				</div>
				<div style="display: flex;margin:10px;">
					<!-- 左 -->
					<el-button type="info" icon="el-icon-caret-left" circle size="small" @click="control('left')">
					</el-button>
					<div style="width: 40px"></div>
					<!-- 右 -->
					<el-button type="info" icon="el-icon-caret-right" circle size="small" @click="control('right')">
					</el-button>
				</div>
				<div>
					<!-- 下 -->
					<el-button type="info" icon="el-icon-caret-bottom" circle size="small" @click="control('down')">
					</el-button>
				</div>
				<div style="display: flex; margin-top: 40px">
					<!-- 缩小 -->
					<el-button type="info" icon="el-icon-zoom-out" circle size="small" @click="control('zoomout')">
					</el-button>
					<div style="width: 30px"></div>
					<!-- 放大 -->
					<el-button type="info" icon="el-icon-zoom-in" circle size="small" @click="control('zoomin')">
					</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import { SrsRtcPlayerAsync } from "./srs.sdk.js";
Vue.use(ElementUI);
export default {
	name: "WebrtcPlayer",
	props: {
		// 控制显示
		visible: {
			type: Boolean,
			default: false,
		},
		// webrtc地址
		webrtcURL: {
			type: String,
			default: "",
		},
	},
	mounted() {
		let sdk = new SrsRtcPlayerAsync();
		this.$refs.srs_webrtc_player.srcObject = sdk.stream;
		this.$refs.srs_webrtc_player.muted = true;
		sdk
			.play(this.webrtcURL)
			.then((session) => {
				console.log(session.sessionid);
			})
			.catch((reason) => {
				sdk.close();
				console.log(reason);
			});
	},
	methods: {
		// ptzCtl 云台控制
		control(dir) {
			this.$emit("control", dir)
		},
		// close 关闭
		close() {
			this.$emit("close")
		}
	},
};
</script>
