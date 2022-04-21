import main from './main';
import polyfill from "./polyfill";
import fs from './fs'
import JSONStream from './json-stream'
import ios from './ios'
import base64 from 'base-64'
import android from './android';
import wrap from './utils/wrap'



export default {
  fetch : main.fetch,
  config : main.config,
  base64,
  android,
  ios,
  session : fs.session,
  fs,
  wrap,
  JSONStream,
  polyfill
}