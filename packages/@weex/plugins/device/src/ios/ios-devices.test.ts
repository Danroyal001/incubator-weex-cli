const debug = require('debug')('device')
const path = require('path')
import IosDevice from './ios-devices'
import platform from '../utils/platform'

describe('Test IOS', () => {
  if (!platform.isMacOS) {
    return
  }
  const iosDevices = new IosDevice()
  const iosDeviceList = iosDevices.getList()

  test('Run ios simulator', async () => {
    let firstSimulator = null

    iosDeviceList.some(info => {
      if (info.isSimulator) {
        firstSimulator = info
        return true
      }
      return false
    })

    if (!firstSimulator) {
      return
    }

    await iosDevices.run({
      id: firstSimulator.id,
      appPath: path.join(__dirname, '../../test/ios-mock/Debug-iphonesimulator/WeexDemo.app'),
      applicationId: 'com.alibaba.weex',
    })
  })

  test('Run ios device', async () => {
    let firstDevice = null

    iosDeviceList.some(info => {
      if (!info.isSimulator) {
        firstDevice = info
        return true
      }
      return false
    })

    if (!firstDevice) {
      return
    }

    try {
      await iosDevices.run({
        id: firstDevice.id,
        appPath: path.join(__dirname, './ios-mock/Debug-iphonesimulator/WeexDemo.app'),
        applicationId: 'com.alibaba.weex',
      })
    } catch (e) {
      debug('Run ios device fail', e.toString().slice(0, 50))
    }
  })
})
