import { test } from '@playwright/test'

test('Upload', async ({ page }) => {
  await page.goto(`https://www.w3schools.com/howto/howto_html_file_upload_button.asp`)
  
  const metaData = {
    title: 'Mocked Song Title',
    artist: 'Mocked Song Artist',
    album: 'Mocked Song Album',
    picture: {
      mimeType: 'image/jpeg',
      buffer: Buffer.from(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==',
        'base64'
      ),
    },
  }
  const buffer = Buffer.alloc(1024 * 1024, 'a')
  const fileContent = Buffer.concat([
    Buffer.from('ID3'),
    Buffer.from([4, 0, 0, 0]),
    Buffer.from(JSON.stringify(metaData)),
    buffer,
  ])
  const mockedFilePath = './mockedFile.mp3'
  require('fs').writeFileSync(mockedFilePath, fileContent)

  await page.setInputFiles('input[type="file"]', mockedFilePath)
})