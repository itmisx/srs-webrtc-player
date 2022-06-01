#### 说明

srs-webrtc-player 对 webrtc 进行了简单封装，支持 srs 的 rtc 流的播放。

集成了云台控制按钮，并通过事件回调传递。

#### 安装

```
npm intall srs-webrtc-player
```

#### 属性

- visible，显示控制
- webrtcURL，webrtc 播放地址

#### 事件

- close，窗口关闭事件
- control，控制事件。参数为（up,down,left,right,zoomin,zoomout）

#### 示例

```vue
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
import Player from "srs-webrtc-player";

export default {
	data() {
		return {
			visible: true,
			// webrtc播放地址
			webrtcURL: "",
		};
	},
	components: {
		Player,
	},
	methods: {
		// 控制事件，根据dir做接口请求控制
		control(dir) {
			console.log(dir);
		},
		// 关闭事件
		close() {
			this.visible = false;
		},
	},
};
</script>
```
