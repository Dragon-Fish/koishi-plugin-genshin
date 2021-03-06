const ppt = require('puppeteer-core')
const pug = require('pug')
const { segment, template } = require('koishi-utils')
const path = require('path')

module.exports = async ({ uid, character, executablePath }) => {
  let screenshot

  const options = {
    uid,
    ...character,
  }
  const html = pug.renderFile(
    path.resolve(__dirname, '../public/character.pug'),
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
    defaultViewport: { width: 600, height: 1000 },
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
  return (
    template('genshin.has_character', uid, character.name) +
    segment('image', { url: 'base64://' + screenshot.toString('base64') })
  )
}
