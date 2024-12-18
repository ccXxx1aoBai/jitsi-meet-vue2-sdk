import JitsiMeeting from "../packages/jitsi-meeting/index.vue";

const install = function(Vue) {
  Vue.component(JitsiMeeting.name, JitsiMeeting);
};

export default {
  install,
  JitsiMeeting
}