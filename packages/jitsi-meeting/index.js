import JitsiMeeting from './src/main';

/* istanbul ignore next */
JitsiMeeting.install = function(Vue) {
  Vue.component(JitsiMeeting.name, JitsiMeeting);
};

export default JitsiMeeting;