import { track, weapp, server } from './config.qa';

export const env = {
  NODE_ENV: '"qa"'
};
export const defineConstants = {
  C_TRACK_SR_TOKEN: JSON.stringify(track.srToken),
  C_TRACK_SENSORS_SERVER: JSON.stringify(track.sensorsServer),
  C_WE_APP_ID: JSON.stringify(weapp.appId),
  C_SERVER: JSON.stringify(server)
};
export const mini = {};
export const h5 = {};
