const ppt = require('puppeteer-core')
const pug = require('pug')
const { segment, template } = require('koishi-utils')
const path = require('path')
const { activedConstellations } = require('genshin-kit').util

function m(k) {
  return template(`genshin.profile.${k}`)
}

module.exports = async ({ uid, userInfo, allCharacters, executablePath }) => {
  let screenshot

  let _stats = Object.assign({}, userInfo.stats)
  userInfo.stats = []
  for (key in _stats) {
    userInfo.stats.push({ desc: m('stats.' + key), count: _stats[key] })
  }

  allCharacters.forEach((item) => {
    item.activedConstellations = activedConstellations(item)
  })

  userInfo.avatars = allCharacters

  const options = {
    ui: {
      title: m('ui.title'),
    },
    uid,
    ...userInfo,
  }
  const html = pug.renderFile(
    path.resolve(__dirname, '../public/profile.pug'),
    options
  )

  const browser = await ppt.launch({
    executablePath,
    args: [
      '--no-sandbox',
      '--disable-infobars ', // don't show information bar
      '--lang=zh-CN',
      '--disable-dev-shm-usage',
    ],
    defaultViewport: { width: 800, height: 600 },
    headless: 1,
  })

  try {
    const page = await browser.newPage()
    await page.goto(
      'file:///' + path.resolve(__dirname, '../public/index.html')
    )
    await page.setContent(html)
    screenshot = await page.screenshot({
      fullPage: true,
    })
  } catch (err) {
    await browser.close()
    return `错误：${err}`
  }

  await browser.close()
  return segment('image', { url: 'base64://' + screenshot.toString('base64') })
}
