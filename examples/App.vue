<template>
	<div id="app">
		<JitsiMeeting
			domain="web.wanhuixi.cn"
			width="100vw"
			height="100vh"
			:room-name="generateRoom"
			:configOverwrite="{
				hiddenPremeetingButtons: ['invite'],
				enableInsecureRoomNameWarning: false,
				hideEmailInSettings: true,
				enableCalendarIntegration: false,
				defaultLocalDisplayName: '我',
				welcomePage: {
					disabled: false,
					customUrl: 'www.baidu.com',
				},
				enableClosePage: false,
				transcription: {
					translationLanguages: ['zhCN', 'en'],
					translationLanguagesHead: ['zhCN'],
				},
				toolbarButtons: [
					'camera',
					'chat',
					'closedcaptions',
					'desktop',
					'download',
					// 'embedmeeting',
					'etherpad',
					'feedback',
					'filmstrip',
					'fullscreen',
					'hangup',
					'help',
					'highlight',
					'linktosalesforce',
					'livestreaming',
					'microphone',
					'noisesuppression',
					'participants-pane',
					'profile',
					'raisehand',
					'recording',
					'security',
					'select-background',
					'settings',
					'shareaudio',
					'sharedvideo',
					'shortcuts',
					'stats',
					'tileview',
					'toggle-camera',
					'videoquality',
					'whiteboard',
				],
				defaultLogoUrl: 'logo.png',
			}"
			:interfaceConfigOverwrite="{
				SHOW_JITSI_WATERMARK: true,
				DEFAULT_LOGO_URL: 'logo.png',
				DEFAULT_WELCOME_PAGE_LOGO_URL: 'logo.png',
				JITSI_WATERMARK_LINK: 'logo.png',
        DEFAULT_LOGO_URL: 'logo.png',
        HIDE_DEEP_LINKING_LOGO: true,
			}"
			@onReadyToClose="closePage()" />
	</div>
</template>

<script>
export default {
	name: 'App',
	computed: {
		generateRoom() {
			return (Math.random() * 100000000).toFixed(0);
		},
	},
	methods: {
		closePage() {
			window.opener = null;
			setTimeout(() => {
				window.open('', '_self');
				window.close();
			}, 200);
		},
	},
};
</script>

<style>
body,
html {
	padding: 0;
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
