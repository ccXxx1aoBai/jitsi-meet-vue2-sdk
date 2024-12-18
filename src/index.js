import JitsiMeeting from "/packages/jitsi-meeting";

const install = function(Vue, opts = {}) {
  Vue.component(JitsiMeeting.name, JitsiMeeting);
};

export default {
  install,
  JitsiMeeting
}