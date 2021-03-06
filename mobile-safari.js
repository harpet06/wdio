exports.config = Object.assign({}, require('./chrome').config, {
  // Docker for Mac host address:
  hostname: 'host.docker.internal',
  // Appium port:
  port: 4723,
  // Appium path:
  path: '/wd/hub',
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'safari',
      platformName: 'iOS',
      platformVersion: '12.2',
      deviceName: 'iPhone SE'
    }
  ],
  appium: {
    mjpegServerFramerate: 15,
    mjpegServerScreenshotQuality: 100
  },
  videos: {
    enabled: true,
    inputFormat: 'mjpeg',
    port: 9100,
    startDelay: 500,
    stopDelay: 500
  },
  maximizeWindow: false
})
