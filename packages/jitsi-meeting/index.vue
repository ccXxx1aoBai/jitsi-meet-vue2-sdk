<template>
	<div>
		<slot
			v-if="loading || !apiRef"
			name="spinner"></slot>
		<div
			:id="componentId"
			:key="componentId"
			ref="meetingRef"></div>
	</div>
</template>

<script>
import { DEFAULT_DOMAIN } from 'jitsi-meet-vue2-sdk/src/constants/index';
import { generateComponentId, fetchExternalApi } from 'jitsi-meet-vue2-sdk/src/utils/index';
// import { JitsiMeetExternalApi, IJitsiMeetExternalApi } from '@/types';

export default {
	name: 'JitsiMeeting',
	props: {
		domain: {
			type: String,
			default: DEFAULT_DOMAIN,
		},
		roomName: {
			type: String,
			default: '',
		},
		width: {
			type: [String, Number],
			default: 600,
		},
		height: {
			type: [String, Number],
			default: 400,
		},
		configOverwrite: {
			type: Object,
			default: () => ({}),
		},
		interfaceConfigOverwrite: {
			type: Object,
			default: () => ({}),
		},
		jwt: {
			type: String,
			default: '',
		},
		invitees: {
			type: Array,
			default: () => [],
		},
		devices: {
			type: Object,
			default: () => ({}),
		},
		userInfo: {
			type: Object,
			default: () => ({}),
		},
		lang: {
			type: String,
			default: 'zhCN',
		},
	},
	data() {
		return {
			externalApi: {},
			apiLoaded: false,
			loading: false,
			apiRef: '',
		};
	},
	computed: {
		componentId() {
			return generateComponentId('jitsiMeeting');
		},
	},
	created() {},
	mounted() {
		fetchExternalApi(this.domain)
			.then(async api => {
				this.externalApi = api;
				this.apiLoaded = true;

				await this.$nextTick();
				this.loadIframe(this.externalApi);
			})
			.catch(e => console.error(e.message));
	},
	methods: {
		loadIframe(JitsiMeetExternalAPI) {
			const {
				domain,
				roomName,
				width,
				height,
				configOverwrite,
				interfaceConfigOverwrite,
				jwt,
				invitees,
				devices,
				userInfo,
				parentNode = this.$refs.meetingRef,
				lang,
			} = this;

			this.apiRef = new JitsiMeetExternalAPI(domain, {
				roomName,
				width,
				height,
				configOverwrite,
				interfaceConfigOverwrite,
				jwt,
				invitees,
				devices,
				userInfo,
				parentNode,
				lang,
			});

			this.loading = false;

			if (this.apiRef) {
				// api ready事件
				this.$emit('onApiReady', this.apiRef);

				// 用户离开会议事件
				this.apiRef.on('readyToClose', () => {
					this.$emit('onReadyToClose');
				});

				// 用户加入会议事件
				this.apiRef.on('videoConferenceJoined', e => {
          this.$emit('videoConferenceJoined');
				});

				if (this.$refs.meetingRef) {
					// 获取iframe ref
					this.$emit('getIframeRefOnApiReady', this.$refs.meetingRef);
				}
			}
		},
	},
};
</script>

<style scoped></style>
