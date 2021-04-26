// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "Pixel_XL_API_29",
    app: "/Users/nlichten/appiumAndroidDemo/test.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Noah Rules!");
  const value = await field.getText();
  assert.strictEqual(value,"Noah Rules!");
  await new Promise(r => setTimeout(r, 2000));

  await client.deleteSession();
}

main();