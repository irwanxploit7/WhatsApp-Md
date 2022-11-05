import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
  let bearr = 'danzz'
  let sayang = await fetch(`https://saipulanuar.ga/api/download/tiktokview?apikey=${bearr}&url=${args[0]}`)
  let json = await sayang.json()
    if (sayang.status !== 200) throw await sayang.text()
    if (!json.status) throw json  
  const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴛᴀɴɢɢᴀʟ ᴅɪᴘᴏꜱᴛɪɴɢ: ${json.result.createdAt}\n➔ ᴅɪ ꜱʜᴀʀᴇꜱ ${json.result.shareCount} ᴋᴀʟɪ\n➔ ᴊᴜᴍʟᴀʜ ʟɪᴋᴇ: ${json.result.likesCount}\n➔ ᴊᴜᴍʟᴀʜ ᴋᴏᴍᴇɴᴛᴀʀ: ${json.result.commentCount}\n➔ ᴊᴜᴍʟᴀʜ ᴠɪᴇᴡ: ${json.result.playCount} ᴋᴀʟɪ ᴅɪᴛᴏɴᴛᴏɴ\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, await (await fetch(url)).buffer(),
        url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['ᴅᴏɴᴀꜱɪ', `.donasi`],
        ['ᴀᴜᴅɪᴏ', `.tiktokaudio ${args}`],
        [null, null]], m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
