# Jitsi Meet Vue2 SDK

[English](https://github.com/ccXxx1aoBai/jitsi-meet-vue2-sdk/blob/main/README.md)|[中文](https://github.com/ccXxx1aoBai/jitsi-meet-vue2-sdk/blob/main/README_zh.md)

<p>弥补Vue2版本空缺，@jitsi/vue-sdk只支持Vue3。</p>

`src/lang中main-zhCN.json基本包含了系统中用到的所有文字对应i18，可自行下载替换jitsi-meet私有化服务对应文件`
`需求移除会议中jitsi logo，则自行下载src/css中all.css文件，替换私有化服务对应文件`
[itsi-meet私有化](https://github.com/ccXxx1aoBai/docker-jitsi-meet-deployment)

## [安装](#install)
`
npm i jitsi-meet-vue2-sdk
`

##

## [如何使用](#use)
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

## [属性](#props)

| 属性名称                 | 类型   | 默认值      | 描述    |
| :--- | :----- | :---| :--- |
| domain                   | string | meet.jit.si | 会议访问地址  |
| roomName                 | string | '' | 要加入的房间名称 |
| configOverwrite          | object | {}  | [覆盖配置](https://github.com/jitsi/jitsi-meet/blob/master/config.js)               |
| interfaceConfigOverwrite | object | {}   | [覆盖全局设置](https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js) |
| jwt                      | string | ''   | JWT|
| invitees                 | array  | []  | 受邀参与会议的参与者信息              |
| devices                  | object | {}   | 使用的设备（audioInput, audioOutput, videoInput）|
| userInfo                 | object | {}   | 会议参与者信息的（displayName, email）  |
| lang   | string | '' | 语言  |

## [事件](#events)

| 名称                   | 描述                         |
| :--------------------- | :--------------------------- |
| getIframeRefOnApiReady | 当会议准备就绪时获取iframe |
| onReady                | 当会议准备就绪时触发      |
| readyToClose           | 当会议关闭时触发          |
| videoConferenceJoined  | 当加入会议时触发         |
