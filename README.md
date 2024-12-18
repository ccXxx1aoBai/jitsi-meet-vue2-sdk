# Jitsi Meet Vue2 SDK

[English](https://github.com/ccXxx1aoBai/jitsi-meet-vue2-sdk/blob/main/README.md)|[中文](https://github.com/ccXxx1aoBai/jitsi-meet-vue2-sdk/blob/main/README_zh.md)

<p>The Jitsi Meet Vue2 SDK was used to replace a dependency of @jitsi/vue-sdk to meet the requirements for Vue.js 2 version.</p>



## [Install](#install)
`
npm i jitsi-meet-vue2-sdk
`

##

## [Use](#use)
```
import JitsiMeeting from 'jitsi-meet-vue2-sdk'

Vue.use(JitsiMeeting)
```

```
<template>
  <JitsiMeeting
    :domain="YOUR_DOMAIN"
    :room-name="YOUR_ROOM_NAME"
   />
</template>
```

## [Props](#props)


| Prop Name | Type | Default | Description |
| :---   | :--- | :--- | :--- |
| domain | string | meet.jit.si | The domain used to build the conference URL. |
| roomName |   string | '' | The name of the room to join. |
| configOverwrite | object | {} | [The JS object with overrides for options defined in the config.js file.](https://github.com/jitsi/jitsi-meet/blob/master/config.js) |
| interfaceConfigOverwrite | object | {} | [The JS object with overrides for options defined in the interface_config.js file.](https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js) |
| jwt | string | '' | The JWT token u. |
| invitees | array | [] | Object arrays that contain information about participants invited to a call. |
| devices | object | {} | Information map about the devices used in a call.(audioInput,audioOutput,videoInput) |
| userInfo | object | {} | The JS object that contains information about the participant starting the meeting.(displayName, email) |
| lang   | string | '' | The default meeting language. |

## [Events](#events)

| Event Name | Description |
| :---   | :--- |
| getIframeRefOnApiReady | Get the iframe when the conference is ready. |
| onReady | Emitted when the conference is ready. |
| readyToClose | Emitted when the conference is closed. |
| videoConferenceJoined | Emitted when the conference is joined. |
