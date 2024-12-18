<template>
	<div id="app">
		<JitsiMeeting
			:room-name="roomName"
			:configOverwrite="{
				enableInsecureRoomNameWarning: false,
			}" />
	</div>
</template>

<script>
export default {
	name: 'App',
	computed: {
		roomName() {
			return (Math.random() * 1000000).toFixed(0);
		},
	},
};
</script>
