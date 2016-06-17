import {NativeModules} from 'react-native';

const {GoogleCast} = NativeModules;

export default {

  initChromecast: function () {
    GoogleCast.initChromecast();
  },
  startScan: function () {
    GoogleCast.startScan();
  },
  stopScan: function () {
    GoogleCast.stopScan();
  },
  isConnected: function () {
    GoogleCast.isConnected();
  },
  getDevices: function () {
    return GoogleCast.getDevices();
  },
  connectToDevice: function (deviceId:string) {
    GoogleCast.connectToDevice(deviceId);
  },
  castMedia: function (mediaUrl:string, title:string, imageUrl:string) {
    GoogleCast.castMedia(mediaUrl, title, imageUrl);
  }
};