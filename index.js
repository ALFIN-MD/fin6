const _0x1594d9 = (function () {
    let _0x361354 = true
    return function (_0x490c98, _0x5007d2) {
      const _0x799bb3 = _0x361354
        ? function () {
            if (_0x5007d2) {
              const _0x1dd65b = _0x5007d2.apply(_0x490c98, arguments)
              return (_0x5007d2 = null), _0x1dd65b
            }
          }
        : function () {}
      return (_0x361354 = false), _0x799bb3
    }
  })(),
  _0x344e18 = _0x1594d9(this, function () {
    return _0x344e18
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x344e18)
      .search('(((.+)+)+)+$')
  })
_0x344e18()
const _0x552bda = (function () {
  let _0x2d1fbe = true
  return function (_0x531845, _0x1274b2) {
    const _0x351a89 = _0x2d1fbe
      ? function () {
          if (_0x1274b2) {
            const _0xddcda9 = _0x1274b2.apply(_0x531845, arguments)
            return (_0x1274b2 = null), _0xddcda9
          }
        }
      : function () {}
    return (_0x2d1fbe = false), _0x351a89
  }
})()
;(function () {
  _0x552bda(this, function () {
    const _0x2955e9 = new RegExp('function *\\( *\\)'),
      _0x4fcf97 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x29b3a3 = _0x3e5af1('init')
    if (
      !_0x2955e9.test(_0x29b3a3 + 'chain') ||
      !_0x4fcf97.test(_0x29b3a3 + 'input')
    ) {
      _0x29b3a3('0')
    } else {
      _0x3e5af1()
    }
  })()
})()
require('./settings')
const {
  default: hinataConnect,
  useSingleFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
} = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState(
    './' + sessionName + '.json'
  ),
  pino = require('pino'),
  { Boom } = require('@hapi/boom'),
  fs = require('fs'),
  yargs = require('yargs/yargs'),
  chalk = require('chalk'),
  FileType = require('file-type'),
  path = require('path'),
  _ = require('lodash'),
  axios = require('axios'),
  PhoneNumber = require('awesome-phonenumber'),
  {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
  } = require('./lib/exif'),
  {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep,
  } = require('./lib/myfunc')
var low
try {
  low = require('lowdb')
} catch (_0x415a1f) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low,
  mongoDB = require('./lib/mongoDB')
global.api = (_0x5148c8, _0x4f1a92 = '/', _0x2a427d = {}, _0x3bfec4) =>
  (_0x5148c8 in global.APIs ? global.APIs[_0x5148c8] : _0x5148c8) +
  _0x4f1a92 +
  (_0x2a427d || _0x3bfec4
    ? '?' +
      new URLSearchParams(
        Object.entries({
          ..._0x2a427d,
          ...(_0x3bfec4
            ? {
                [_0x3bfec4]:
                  global.APIKeys[
                    _0x5148c8 in global.APIs
                      ? global.APIs[_0x5148c8]
                      : _0x5148c8
                  ],
              }
            : {}),
        })
      )
    : '')
const _0xe671d2 = {}
_0xe671d2.level = 'silent'
_0xe671d2.stream = 'store'
const store = makeInMemoryStore({ logger: pino().child(_0xe671d2) })
global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
)
global.db = new Low(
  /https?:\/\//.test(opts.db || '')
    ? new cloudDBAdapter(opts.db)
    : /mongodb/.test(opts.db)
    ? new mongoDB(opts.db)
    : new JSONFile('database/database.json')
)
;(function () {
  let _0x16fc20
  try {
    const _0x10e4a9 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x16fc20 = _0x10e4a9()
  } catch (_0x17be96) {
    _0x16fc20 = window
  }
  _0x16fc20.setInterval(_0x3e5af1, 4000)
})()
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((_0x286921) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            _0x286921(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null
      }, 1000)
    )
  }
  if (global.db.data !== null) {
    return
  }
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {}),
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
if (global.db) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()
    }
  }, 30000)
}
async function startHinata() {
  const _0x9e3926 = hinataConnect({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['Hinata Multi Device', 'Safari', '1.0.0'],
    auth: state,
  })
  store.bind(_0x9e3926.ev)
  _0x9e3926.ev.on('call', async (_0xd7c9a1) => {
    let _0x153476 = await _0x9e3926.decodeJid(_0x9e3926.user.id),
      _0x51e82b = db.data.settings[_0x153476].anticall
    if (!_0x51e82b) {
      return
    }
    console.log(_0xd7c9a1)
    for (let _0x3179d9 of _0xd7c9a1) {
      if (_0x3179d9.isGroup == false) {
        if (_0x3179d9.status == 'offer') {
          let _0x4adf76 = await _0x9e3926.sendTextWithMentions(
            _0x3179d9.from,
            '*' +
              _0x9e3926.user.name +
              '* tidak bisa menerima panggilan ' +
              (_0x3179d9.isVideo ? 'video' : 'suara') +
              '. Maaf @' +
              _0x3179d9.from.split('@')[0] +
              ' kamu akan diblockir. Jika tidak sengaja silahkan hubungi Owner untuk dibuka !'
          )
          _0x9e3926.sendContact(_0x3179d9.from, global.owner, _0x4adf76)
          await sleep(8000)
          await _0x9e3926.updateBlockStatus(_0x3179d9.from, 'block')
        }
      }
    }
  })
  _0x9e3926.ev.on('messages.upsert', async (_0x32a464) => {
    try {
      mek = _0x32a464.messages[0]
      if (!mek.message) {
        return
      }
      mek.message =
        Object.keys(mek.message)[0] === 'ephemeralMessage'
          ? mek.message.ephemeralMessage.message
          : mek.message
      if (mek.key && mek.key.remoteJid === 'status@broadcast') {
        return
      }
      if (!_0x9e3926.public && !mek.key.fromMe && _0x32a464.type === 'notify') {
        return
      }
      if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
        return
      }
      m = smsg(_0x9e3926, mek, store)
      require('./hinata')(_0x9e3926, m, _0x32a464, store)
    } catch (_0x91ef07) {
      console.log(_0x91ef07)
    }
  })
  _0x9e3926.ev.on('groups.update', async (_0x29d08d) => {
    try {
      for (let _0x2f8709 of _0x29d08d) {
        try {
          ppgc = await _0x9e3926.profilePictureUrl(_0x2f8709.id, 'image')
        } catch {
          ppgc = 'https://tinyurl.com/yx93l6da'
        }
        const _0x2af246 = { url: ppgc }
        let _0x2fe8ed = _0x2af246
        if (_0x2f8709.announce == true) {
          _0x9e3926.send5ButImg(
            _0x2f8709.id,
            '\u300C Group Settings Change \u300D\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !',
            'Group Settings Change Message',
            _0x2fe8ed,
            []
          )
        } else {
          if (_0x2f8709.announce == false) {
            _0x9e3926.send5ButImg(
              _0x2f8709.id,
              '\u300C Group Settings Change \u300D\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !',
              'Group Settings Change Message',
              _0x2fe8ed,
              []
            )
          } else {
            if (_0x2f8709.restrict == true) {
              _0x9e3926.send5ButImg(
                _0x2f8709.id,
                '\u300C Group Settings Change \u300D\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !',
                'Group Settings Change Message',
                _0x2fe8ed,
                []
              )
            } else {
              _0x2f8709.restrict == false
                ? _0x9e3926.send5ButImg(
                    _0x2f8709.id,
                    '\u300C Group Settings Change \u300D\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !',
                    'Group Settings Change Message',
                    _0x2fe8ed,
                    []
                  )
                : _0x9e3926.send5ButImg(
                    _0x2f8709.id,
                    '\u300C Group Settings Change \u300D\n\nGroup Subject telah diganti menjadi *' +
                      _0x2f8709.subject +
                      '*',
                    'Group Settings Change Message',
                    _0x2fe8ed,
                    []
                  )
            }
          }
        }
      }
    } catch (_0xa24709) {
      console.log(_0xa24709)
    }
  })
  _0x9e3926.ev.on('group-participants.update', async (_0x4c787c) => {
    console.log(_0x4c787c)
    try {
      let _0x2367c3 = await _0x9e3926.groupMetadata(_0x4c787c.id),
        _0x5e2e95 = _0x4c787c.participants
      for (let _0x475bdc of _0x5e2e95) {
        try {
          ppuser = await _0x9e3926.profilePictureUrl(_0x475bdc, 'image')
        } catch {
          ppuser = 'https://tinyurl.com/yx93l6da'
        }
        try {
          ppgroup = await _0x9e3926.profilePictureUrl(_0x4c787c.id, 'image')
        } catch {
          ppgroup = 'https://tinyurl.com/yx93l6da'
        }
        if (_0x4c787c.action == 'add') {
          const _0x6d7077 = { url: ppuser }
          _0x9e3926.sendMessage(_0x4c787c.id, {
            image: _0x6d7077,
            mentions: [_0x475bdc],
            caption:
              'Welcome To ' +
              _0x2367c3.subject +
              ' @' +
              _0x475bdc.split('@')[0],
          })
        } else {
          if (_0x4c787c.action == 'remove') {
            const _0x42b6dc = { url: ppuser }
            _0x9e3926.sendMessage(_0x4c787c.id, {
              image: _0x42b6dc,
              mentions: [_0x475bdc],
              caption:
                '@' +
                _0x475bdc.split('@')[0] +
                ' Leaving To ' +
                _0x2367c3.subject,
            })
          } else {
            if (_0x4c787c.action == 'promote') {
              const _0x3c3afc = { url: ppuser }
              _0x9e3926.sendMessage(_0x4c787c.id, {
                image: _0x3c3afc,
                mentions: [_0x475bdc],
                caption:
                  '@' +
                  _0x475bdc.split('@')[0] +
                  ' Promote From ' +
                  _0x2367c3.subject,
              })
            } else {
              if (_0x4c787c.action == 'demote') {
                const _0x1f82fd = { url: ppuser }
                _0x9e3926.sendMessage(_0x4c787c.id, {
                  image: _0x1f82fd,
                  mentions: [_0x475bdc],
                  caption:
                    '@' +
                    _0x475bdc.split('@')[0] +
                    ' Demote From ' +
                    _0x2367c3.subject,
                })
              }
            }
          }
        }
      }
    } catch (_0x9a71cc) {
      console.log(_0x9a71cc)
    }
  })
  _0x9e3926.decodeJid = (_0x1908da) => {
    if (!_0x1908da) {
      return _0x1908da
    }
    if (/:\d+@/gi.test(_0x1908da)) {
      let _0x2fa8a2 = jidDecode(_0x1908da) || {}
      return (
        (_0x2fa8a2.user &&
          _0x2fa8a2.server &&
          _0x2fa8a2.user + '@' + _0x2fa8a2.server) ||
        _0x1908da
      )
    } else {
      return _0x1908da
    }
  }
  _0x9e3926.ev.on('contacts.update', (_0x457c9b) => {
    for (let _0x230073 of _0x457c9b) {
      let _0x59007c = _0x9e3926.decodeJid(_0x230073.id)
      if (store && store.contacts) {
        store.contacts[_0x59007c] = {
          id: _0x59007c,
          name: _0x230073.notify,
        }
      }
    }
  })
  _0x9e3926.getName = (_0x382fca, _0x41e662 = false) => {
    id = _0x9e3926.decodeJid(_0x382fca)
    _0x41e662 = _0x9e3926.withoutContact || _0x41e662
    let _0x3ef4a1
    if (id.endsWith('@g.us')) {
      return new Promise(async (_0xdd71df) => {
        _0x3ef4a1 = store.contacts[id] || {}
        if (!(_0x3ef4a1.name || _0x3ef4a1.subject)) {
          _0x3ef4a1 = _0x9e3926.groupMetadata(id) || {}
        }
        _0xdd71df(
          _0x3ef4a1.name ||
            _0x3ef4a1.subject ||
            PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
              'international'
            )
        )
      })
    } else {
      _0x3ef4a1 =
        id === '0@s.whatsapp.net'
          ? {
              id: id,
              name: 'WhatsApp',
            }
          : id === _0x9e3926.decodeJid(_0x9e3926.user.id)
          ? _0x9e3926.user
          : store.contacts[id] || {}
    }
    return (
      (_0x41e662 ? '' : _0x3ef4a1.name) ||
      _0x3ef4a1.subject ||
      _0x3ef4a1.verifiedName ||
      PhoneNumber('+' + _0x382fca.replace('@s.whatsapp.net', '')).getNumber(
        'international'
      )
    )
  }
  _0x9e3926.sendContact = async (
    _0x396b3f,
    _0x1638b0,
    _0x5da6b4 = '',
    _0x442e84 = {}
  ) => {
    let _0x40159d = []
    for (let _0x4839d0 of _0x1638b0) {
      _0x40159d.push({
        displayName: await _0x9e3926.getName(_0x4839d0 + '@s.whatsapp.net'),
        vcard:
          'BEGIN:VCARD\nVERSION:3.0\nN:' +
          (await _0x9e3926.getName(_0x4839d0 + '@s.whatsapp.net')) +
          '\nFN:' +
          (await _0x9e3926.getName(_0x4839d0 + '@s.whatsapp.net')) +
          '\nitem1.TEL;waid=' +
          _0x4839d0 +
          ':' +
          _0x4839d0 +
          '\nitem1.X-ABLabel:Ponsel\nitem2.ADR:;;Indonesia;;;;\nitem2.X-ABLabel:Region\nEND:VCARD',
      })
    }
    const _0x370610 = {
      displayName: _0x40159d.length + ' Kontak',
      contacts: _0x40159d,
    }
    const _0x3f60a6 = {
        contacts: _0x370610,
        ..._0x442e84,
      },
      _0x3225a6 = { quoted: _0x5da6b4 }
    _0x9e3926.sendMessage(_0x396b3f, _0x3f60a6, _0x3225a6)
  }
  _0x9e3926.setStatus = (_0x3cfbd1) => {
    const _0x1c7c4a = {}
    return (
      (_0x1c7c4a.to = '@s.whatsapp.net'),
      (_0x1c7c4a.type = 'set'),
      (_0x1c7c4a.xmlns = 'status'),
      _0x9e3926.query({
        tag: 'iq',
        attrs: _0x1c7c4a,
        content: [
          {
            tag: 'status',
            attrs: {},
            content: Buffer.from(_0x3cfbd1, 'utf-8'),
          },
        ],
      }),
      _0x3cfbd1
    )
  }
  _0x9e3926.public = true
  _0x9e3926.serializeM = (_0x1bfb7a) => smsg(_0x9e3926, _0x1bfb7a, store)
  _0x9e3926.ev.on('connection.update', async (_0x19c442) => {
    const { connection: _0x4ce2f5, lastDisconnect: _0x184a76 } = _0x19c442
    if (_0x4ce2f5 === 'close') {
      let _0x58e837 = new Boom(_0x184a76?.error)?.output.statusCode
      if (_0x58e837 === DisconnectReason.badSession) {
        console.log('Bad Session File, Please Delete Session and Scan Again')
        _0x9e3926.logout()
      } else {
        if (_0x58e837 === DisconnectReason.connectionClosed) {
          console.log('Connection closed, reconnecting....')
          startHinata()
        } else {
          if (_0x58e837 === DisconnectReason.connectionLost) {
            console.log('Connection Lost from Server, reconnecting...'),
              startHinata()
          } else {
            if (_0x58e837 === DisconnectReason.connectionReplaced) {
              console.log(
                'Connection Replaced, Another New Session Opened, Please Close Current Session First'
              ),
                _0x9e3926.logout()
            } else {
              if (_0x58e837 === DisconnectReason.loggedOut) {
                console.log('Device Logged Out, Please Scan Again And Run.')
                _0x9e3926.logout()
              } else {
                if (_0x58e837 === DisconnectReason.restartRequired) {
                  console.log('Restart Required, Restarting...'), startHinata()
                } else {
                  if (_0x58e837 === DisconnectReason.timedOut) {
                    console.log('Connection TimedOut, Reconnecting...'),
                      startHinata()
                  } else {
                    _0x9e3926.end(
                      'Unknown DisconnectReason: ' + _0x58e837 + '|' + _0x4ce2f5
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log('Connected...', _0x19c442)
  })
  _0x9e3926.ev.on('creds.update', saveState)
  _0x9e3926.reSize = async (_0x447654, _0xa49e98, _0x3348ab) => {
    let _0x5a7e23 = require('jimp')
    var _0x1961b6 = await _0x5a7e23.read(_0x447654),
      _0x4fb939 = await _0x1961b6
        .resize(_0xa49e98, _0x3348ab)
        .getBufferAsync(_0x5a7e23.MIME_JPEG)
    return _0x4fb939
  }
  _0x9e3926.send5ButLoc = async (
    _0x5dc7ff,
    _0x52052b = '',
    _0x5b68cc = '',
    _0x24e203,
    _0x4791a3 = [],
    _0x3d42d8 = {}
  ) => {
    let _0x4aa415 = await _0x9e3926.reSize(_0x24e203, 200, 300)
    const _0x146781 = {
      degreesLatitude: 0,
      degreesLongitude: 0,
      jpegThumbnail: _0x4aa415,
    }
    const _0x54f908 = {
      locationMessage: _0x146781,
      hydratedContentText: _0x52052b,
      hydratedFooterText: _0x5b68cc,
      hydratedButtons: _0x4791a3,
    }
    const _0x55ecf4 = { hydratedTemplate: _0x54f908 }
    const _0x54627d = { templateMessage: _0x55ecf4 }
    var _0x3dbe6b = generateWAMessageFromContent(
      _0x5dc7ff,
      _0x54627d,
      _0x3d42d8
    )
    _0x9e3926.relayMessage(_0x5dc7ff, _0x3dbe6b.message, {
      messageId: _0x3dbe6b.key.id,
    })
  }
  _0x9e3926.sendFileUrl = async (
    _0x450343,
    _0x271cd4,
    _0xa3c3b0,
    _0x5bda74,
    _0x25282d = {}
  ) => {
    let _0x5dc5a1 = '',
      _0x3fb38f = await axios.head(_0x271cd4)
    _0x5dc5a1 = _0x3fb38f.headers['content-type']
    if (_0x5dc5a1.split('/')[1] === 'gif') {
      return _0x9e3926.sendMessage(
        _0x450343,
        {
          video: await getBuffer(_0x271cd4),
          caption: _0xa3c3b0,
          gifPlayback: true,
          ..._0x25282d,
        },
        {
          quoted: _0x5bda74,
          ..._0x25282d,
        }
      )
    }
    let _0x6834b = _0x5dc5a1.split('/')[0] + 'Message'
    if (_0x5dc5a1 === 'application/pdf') {
      return _0x9e3926.sendMessage(
        _0x450343,
        {
          document: await getBuffer(_0x271cd4),
          mimetype: 'application/pdf',
          caption: _0xa3c3b0,
          ..._0x25282d,
        },
        {
          quoted: _0x5bda74,
          ..._0x25282d,
        }
      )
    }
    if (_0x5dc5a1.split('/')[0] === 'image') {
      return _0x9e3926.sendMessage(
        _0x450343,
        {
          image: await getBuffer(_0x271cd4),
          caption: _0xa3c3b0,
          ..._0x25282d,
        },
        {
          quoted: _0x5bda74,
          ..._0x25282d,
        }
      )
    }
    if (_0x5dc5a1.split('/')[0] === 'video') {
      return _0x9e3926.sendMessage(
        _0x450343,
        {
          video: await getBuffer(_0x271cd4),
          caption: _0xa3c3b0,
          mimetype: 'video/mp4',
          ..._0x25282d,
        },
        {
          quoted: _0x5bda74,
          ..._0x25282d,
        }
      )
    }
    if (_0x5dc5a1.split('/')[0] === 'audio') {
      return _0x9e3926.sendMessage(
        _0x450343,
        {
          audio: await getBuffer(_0x271cd4),
          caption: _0xa3c3b0,
          mimetype: 'audio/mpeg',
          ..._0x25282d,
        },
        {
          quoted: _0x5bda74,
          ..._0x25282d,
        }
      )
    }
  }
  _0x9e3926.sendListMsg = (
    _0x45844c,
    _0x5bbef0 = '',
    _0x460159 = '',
    _0x2b7f60 = '',
    _0x4764d5 = '',
    _0x435150 = [],
    _0x2515da
  ) => {
    let _0x256457 = _0x435150
    const _0x4b9931 = {
      text: _0x5bbef0,
      footer: _0x460159,
      title: _0x2b7f60,
      buttonText: _0x4764d5,
      sections: _0x256457,
    }
    var _0x56ac36 = _0x4b9931
    const _0x13012b = { quoted: _0x2515da }
    _0x9e3926.sendMessage(_0x45844c, _0x56ac36, _0x13012b)
  }
  _0x9e3926.send5ButMsg = (
    _0x22e9ab,
    _0x6621bf = '',
    _0x1c6f00 = '',
    _0x2ba13d = []
  ) => {
    let _0x3f1ab7 = _0x2ba13d
    const _0x50509a = {
      text: _0x6621bf,
      footer: _0x1c6f00,
      templateButtons: _0x3f1ab7,
    }
    var _0x10e49b = _0x50509a
    _0x9e3926.sendMessage(_0x22e9ab, _0x10e49b)
  }
  _0x9e3926.send5ButImg = async (
    _0x347bfe,
    _0x137c86 = '',
    _0x154419 = '',
    _0x539098,
    _0x2dae74 = [],
    _0x266a30,
    _0x43fa3d = {}
  ) => {
    let _0x5bd417 = await _0x9e3926.reSize(_0x266a30, 300, 150)
    const _0x11ec23 = {
      image: _0x539098,
      jpegThumbnail: _0x5bd417,
    }
    const _0x36164e = { upload: _0x9e3926.waUploadToServer }
    let _0x18c155 = await prepareWAMessageMedia(_0x11ec23, _0x36164e)
    const _0xca2b73 = {
      imageMessage: _0x18c155.imageMessage,
      hydratedContentText: _0x137c86,
      hydratedFooterText: _0x154419,
      hydratedButtons: _0x2dae74,
    }
    const _0x205d8b = { hydratedTemplate: _0xca2b73 }
    const _0x55fbe3 = { templateMessage: _0x205d8b }
    var _0x16d764 = generateWAMessageFromContent(
      _0x347bfe,
      proto.Message.fromObject(_0x55fbe3),
      _0x43fa3d
    )
    _0x9e3926.relayMessage(_0x347bfe, _0x16d764.message, {
      messageId: _0x16d764.key.id,
    })
  }
  _0x9e3926.send5ButVid = async (
    _0x55bb1,
    _0x28c99d = '',
    _0x584184 = '',
    _0x240b7f,
    _0x3853e9 = [],
    _0x481c33,
    _0x2c6c56 = {}
  ) => {
    let _0x20210c = await _0x9e3926.reSize(_0x481c33, 300, 150)
    const _0x3074ea = {
      video: _0x240b7f,
      jpegThumbnail: _0x20210c,
    }
    const _0x11f9ed = { upload: _0x9e3926.waUploadToServer }
    let _0x49e195 = await prepareWAMessageMedia(_0x3074ea, _0x11f9ed)
    const _0x176751 = {
      videoMessage: _0x49e195.videoMessage,
      hydratedContentText: _0x28c99d,
      hydratedFooterText: _0x584184,
      hydratedButtons: _0x3853e9,
    }
    const _0x442373 = { hydratedTemplate: _0x176751 }
    const _0x1196fc = { templateMessage: _0x442373 }
    var _0x58eb0e = generateWAMessageFromContent(
      _0x55bb1,
      proto.Message.fromObject(_0x1196fc),
      _0x2c6c56
    )
    _0x9e3926.relayMessage(_0x55bb1, _0x58eb0e.message, {
      messageId: _0x58eb0e.key.id,
    })
  }
  _0x9e3926.send5ButGif = async (
    _0x3b6384,
    _0x46f548 = '',
    _0x44de1b = '',
    _0x398a1e,
    _0x493290 = [],
    _0x1cf29a,
    _0x58d802 = {}
  ) => {
    let _0x3d4385 = await _0x9e3926.reSize(_0x1cf29a, 300, 150),
      _0xddf508 = [1, 2],
      _0x5d9722 = _0xddf508[Math.floor(Math.random() * _0xddf508.length)]
    const _0x2a10a2 = {
      video: _0x398a1e,
      gifPlayback: true,
      jpegThumbnail: _0x3d4385,
      gifAttribution: _0x5d9722,
    }
    const _0x1799e0 = { upload: _0x9e3926.waUploadToServer }
    let _0x1cc2f9 = await prepareWAMessageMedia(_0x2a10a2, _0x1799e0)
    const _0x3510a8 = {
      videoMessage: _0x1cc2f9.videoMessage,
      hydratedContentText: _0x46f548,
      hydratedFooterText: _0x44de1b,
      hydratedButtons: _0x493290,
    }
    const _0x490b12 = { hydratedTemplate: _0x3510a8 }
    const _0x175f8d = { templateMessage: _0x490b12 }
    var _0x10f647 = generateWAMessageFromContent(
      _0x3b6384,
      proto.Message.fromObject(_0x175f8d),
      _0x58d802
    )
    _0x9e3926.relayMessage(_0x3b6384, _0x10f647.message, {
      messageId: _0x10f647.key.id,
    })
  }
  _0x9e3926.sendButtonText = (
    _0x9b4b9,
    _0x6467e9 = [],
    _0x5f36ac,
    _0x9dda53,
    _0x24442e = '',
    _0x3fba55 = {}
  ) => {
    const _0x5ec75f = {
      text: _0x5f36ac,
      footer: _0x9dda53,
      buttons: _0x6467e9,
      headerType: 2,
      ..._0x3fba55,
    }
    let _0x2d8071 = _0x5ec75f
    const _0x257ea8 = {
      quoted: _0x24442e,
      ..._0x3fba55,
    }
    _0x9e3926.sendMessage(_0x9b4b9, _0x2d8071, _0x257ea8)
  }
  _0x9e3926.sendText = (_0x21cb8e, _0x544e21, _0x4e1659 = '', _0x48ea1b) =>
    _0x9e3926.sendMessage(
      _0x21cb8e,
      {
        text: _0x544e21,
        ..._0x48ea1b,
      },
      {
        quoted: _0x4e1659,
        ..._0x48ea1b,
      }
    )
  _0x9e3926.sendImage = async (
    _0x397f6c,
    _0x414f65,
    _0x2c3fba = '',
    _0x1ac7c3 = '',
    _0x258d39
  ) => {
    let _0x5c08fb = Buffer.isBuffer(_0x414f65)
      ? _0x414f65
      : /^data:.*?\/.*?;base64,/i.test(_0x414f65)
      ? Buffer.from(_0x414f65.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x414f65)
      ? await await getBuffer(_0x414f65)
      : fs.existsSync(_0x414f65)
      ? fs.readFileSync(_0x414f65)
      : Buffer.alloc(0)
    const _0x3274a2 = {
        image: _0x5c08fb,
        caption: _0x2c3fba,
        ..._0x258d39,
      },
      _0x309f7f = {}
    return (
      (_0x309f7f.quoted = _0x1ac7c3),
      await _0x9e3926.sendMessage(_0x397f6c, _0x3274a2, _0x309f7f)
    )
  }
  _0x9e3926.sendVideo = async (
    _0x5191fb,
    _0x19f22b,
    _0x556211 = '',
    _0x1106e7 = '',
    _0x2f41b1 = false,
    _0x308a33
  ) => {
    let _0x2ff425 = Buffer.isBuffer(_0x19f22b)
      ? _0x19f22b
      : /^data:.*?\/.*?;base64,/i.test(_0x19f22b)
      ? Buffer.from(_0x19f22b.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x19f22b)
      ? await await getBuffer(_0x19f22b)
      : fs.existsSync(_0x19f22b)
      ? fs.readFileSync(_0x19f22b)
      : Buffer.alloc(0)
    const _0x4af754 = {
      video: _0x2ff425,
      caption: _0x556211,
      gifPlayback: _0x2f41b1,
      ..._0x308a33,
    }
    const _0x2530a9 = {}
    return (
      (_0x2530a9.quoted = _0x1106e7),
      await _0x9e3926.sendMessage(_0x5191fb, _0x4af754, _0x2530a9)
    )
  }
  _0x9e3926.sendAudio = async (
    _0xa2d063,
    _0x213ae4,
    _0x26d37 = '',
    _0x22598c = false,
    _0x15220b
  ) => {
    let _0x6704a0 = Buffer.isBuffer(_0x213ae4)
      ? _0x213ae4
      : /^data:.*?\/.*?;base64,/i.test(_0x213ae4)
      ? Buffer.from(_0x213ae4.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x213ae4)
      ? await await getBuffer(_0x213ae4)
      : fs.existsSync(_0x213ae4)
      ? fs.readFileSync(_0x213ae4)
      : Buffer.alloc(0)
    const _0x49c00d = {
        audio: _0x6704a0,
        ptt: _0x22598c,
        ..._0x15220b,
      },
      _0x37b33d = {}
    return (
      (_0x37b33d.quoted = _0x26d37),
      await _0x9e3926.sendMessage(_0xa2d063, _0x49c00d, _0x37b33d)
    )
  }
  _0x9e3926.sendTextWithMentions = async (
    _0x278ac9,
    _0x1469e3,
    _0xce172b,
    _0x5d3de2 = {}
  ) =>
    _0x9e3926.sendMessage(
      _0x278ac9,
      {
        text: _0x1469e3,
        mentions: [..._0x1469e3.matchAll(/@(\d{0,16})/g)].map(
          (_0x5b192f) => _0x5b192f[1] + '@s.whatsapp.net'
        ),
        ..._0x5d3de2,
      },
      { quoted: _0xce172b }
    )
  _0x9e3926.sendImageAsSticker = async (
    _0x4763b3,
    _0x2ad94a,
    _0x1b5e92,
    _0x52b65c = {}
  ) => {
    let _0x1cc7d5 = Buffer.isBuffer(_0x2ad94a)
        ? _0x2ad94a
        : /^data:.*?\/.*?;base64,/i.test(_0x2ad94a)
        ? Buffer.from(_0x2ad94a.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x2ad94a)
        ? await await getBuffer(_0x2ad94a)
        : fs.existsSync(_0x2ad94a)
        ? fs.readFileSync(_0x2ad94a)
        : Buffer.alloc(0),
      _0x15cf32
    _0x52b65c && (_0x52b65c.packname || _0x52b65c.author)
      ? (_0x15cf32 = await writeExifImg(_0x1cc7d5, _0x52b65c))
      : (_0x15cf32 = await imageToWebp(_0x1cc7d5))
    const _0x3a1d36 = { url: _0x15cf32 }
    const _0x11d7dd = {
        sticker: _0x3a1d36,
        ..._0x52b65c,
      },
      _0x3b251c = { quoted: _0x1b5e92 }
    await _0x9e3926.sendMessage(_0x4763b3, _0x11d7dd, _0x3b251c)
    return _0x15cf32
  }
  _0x9e3926.sendVideoAsSticker = async (
    _0xbedc0b,
    _0x372b66,
    _0x134f4b,
    _0x8da80b = {}
  ) => {
    let _0x342018 = Buffer.isBuffer(_0x372b66)
      ? _0x372b66
      : /^data:.*?\/.*?;base64,/i.test(_0x372b66)
      ? Buffer.from(_0x372b66.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x372b66)
      ? await await getBuffer(_0x372b66)
      : fs.existsSync(_0x372b66)
      ? fs.readFileSync(_0x372b66)
      : Buffer.alloc(0)
    let _0x5c3f4a
    _0x8da80b && (_0x8da80b.packname || _0x8da80b.author)
      ? (_0x5c3f4a = await writeExifVid(_0x342018, _0x8da80b))
      : (_0x5c3f4a = await videoToWebp(_0x342018))
    const _0x1c1a9a = { url: _0x5c3f4a }
    const _0x452bc6 = {
        sticker: _0x1c1a9a,
        ..._0x8da80b,
      },
      _0x238ee4 = { quoted: _0x134f4b }
    await _0x9e3926.sendMessage(_0xbedc0b, _0x452bc6, _0x238ee4)
    return _0x5c3f4a
  }
  _0x9e3926.downloadAndSaveMediaMessage = async (
    _0x55cb7f,
    _0x27318f,
    _0x3ffd5d = true
  ) => {
    let _0x3168d7 = _0x55cb7f.msg ? _0x55cb7f.msg : _0x55cb7f,
      _0x49cb1d = (_0x55cb7f.msg || _0x55cb7f).mimetype || '',
      _0x888cec = _0x55cb7f.mtype
        ? _0x55cb7f.mtype.replace(/Message/gi, '')
        : _0x49cb1d.split('/')[0]
    const _0x4eae04 = await downloadContentFromMessage(_0x3168d7, _0x888cec)
    let _0x4a5f9b = Buffer.from([])
    for await (const _0x51b7f1 of _0x4eae04) {
      _0x4a5f9b = Buffer.concat([_0x4a5f9b, _0x51b7f1])
    }
    let _0x14d844 = await FileType.fromBuffer(_0x4a5f9b)
    trueFileName = _0x3ffd5d ? _0x27318f + '.' + _0x14d844.ext : _0x27318f
    await fs.writeFileSync(trueFileName, _0x4a5f9b)
    return trueFileName
  }
  return (
    (_0x9e3926.downloadMediaMessage = async (_0x32e80c) => {
      let _0x37c835 = (_0x32e80c.msg || _0x32e80c).mimetype || '',
        _0x40aa2f = _0x32e80c.mtype
          ? _0x32e80c.mtype.replace(/Message/gi, '')
          : _0x37c835.split('/')[0]
      const _0x68b9b0 = await downloadContentFromMessage(_0x32e80c, _0x40aa2f)
      let _0x433b8e = Buffer.from([])
      for await (const _0x182708 of _0x68b9b0) {
        _0x433b8e = Buffer.concat([_0x433b8e, _0x182708])
      }
      return _0x433b8e
    }),
    (_0x9e3926.sendMedia = async (
      _0x723040,
      _0x3c7ffc,
      _0x4ba77d = '',
      _0x1eb79f = '',
      _0x2bbe09 = '',
      _0x4d62ad = {}
    ) => {
      let _0x4061f4 = await _0x9e3926.getFile(_0x3c7ffc, true)
      let {
        mime: _0x6e82e1,
        ext: _0xb7c02a,
        res: _0x2f786e,
        data: _0xc8147c,
        filename: _0x1887a1,
      } = _0x4061f4
      if ((_0x2f786e && _0x2f786e.status !== 200) || file.length <= 65536) {
        try {
          throw { json: JSON.parse(file.toString()) }
        } catch (_0x1d3d87) {
          if (_0x1d3d87.json) {
            throw _0x1d3d87.json
          }
        }
      }
      let _0x406b11 = '',
        _0xd11cb7 = _0x6e82e1,
        _0x569b5d = _0x1887a1
      if (_0x4d62ad.asDocument) {
        _0x406b11 = 'document'
      }
      if (_0x4d62ad.asSticker || /webp/.test(_0x6e82e1)) {
        let { writeExif: _0x5565fa } = require('./lib/exif')
        const _0x4daf4e = {
          mimetype: _0x6e82e1,
          data: _0xc8147c,
        }
        let _0x5bdd31 = _0x4daf4e
        const _0x3353ce = {
          packname: _0x4d62ad.packname ? _0x4d62ad.packname : global.packname,
          author: _0x4d62ad.author ? _0x4d62ad.author : global.author,
          categories: _0x4d62ad.categories ? _0x4d62ad.categories : [],
        }
        _0x569b5d = await _0x5565fa(_0x5bdd31, _0x3353ce)
        await fs.promises.unlink(_0x1887a1)
        _0x406b11 = 'sticker'
        _0xd11cb7 = 'image/webp'
      } else {
        if (/image/.test(_0x6e82e1)) {
          _0x406b11 = 'image'
        } else {
          if (/video/.test(_0x6e82e1)) {
            _0x406b11 = 'video'
          } else {
            if (/audio/.test(_0x6e82e1)) {
              _0x406b11 = 'audio'
            } else {
              _0x406b11 = 'document'
            }
          }
        }
      }
      const _0x1fc405 = { url: _0x569b5d }
      const _0x425623 = {
        [_0x406b11]: _0x1fc405,
        caption: _0x1eb79f,
        mimetype: _0xd11cb7,
        fileName: _0x4ba77d,
        ..._0x4d62ad,
      }
      const _0x237647 = {
        quoted: _0x2bbe09,
        ..._0x4d62ad,
      }
      return (
        await _0x9e3926.sendMessage(_0x723040, _0x425623, _0x237647),
        fs.promises.unlink(_0x569b5d)
      )
    }),
    (_0x9e3926.copyNForward = async (
      _0x1ea53c,
      _0x4f4375,
      _0x61aa42 = false,
      _0x1039e0 = {}
    ) => {
      let _0x181bf4
      if (_0x1039e0.readViewOnce) {
        _0x4f4375.message =
          _0x4f4375.message &&
          _0x4f4375.message.ephemeralMessage &&
          _0x4f4375.message.ephemeralMessage.message
            ? _0x4f4375.message.ephemeralMessage.message
            : _0x4f4375.message || undefined
        _0x181bf4 = Object.keys(_0x4f4375.message.viewOnceMessage.message)[0]
        delete (_0x4f4375.message && _0x4f4375.message.ignore
          ? _0x4f4375.message.ignore
          : _0x4f4375.message || undefined)
        delete _0x4f4375.message.viewOnceMessage.message[_0x181bf4].viewOnce
        _0x4f4375.message = { ..._0x4f4375.message.viewOnceMessage.message }
      }
      let _0x43df56 = Object.keys(_0x4f4375.message)[0]
      let _0x5320e4 = await generateForwardMessageContent(_0x4f4375, _0x61aa42)
      let _0x5ef646 = Object.keys(_0x5320e4)[0],
        _0x695fd2 = {}
      if (_0x43df56 != 'conversation') {
        _0x695fd2 = _0x4f4375.message[_0x43df56].contextInfo
      }
      _0x5320e4[_0x5ef646].contextInfo = {
        ..._0x695fd2,
        ..._0x5320e4[_0x5ef646].contextInfo,
      }
      const _0x551059 = await generateWAMessageFromContent(
        _0x1ea53c,
        _0x5320e4,
        _0x1039e0
          ? {
              ..._0x5320e4[_0x5ef646],
              ..._0x1039e0,
              ...(_0x1039e0.contextInfo
                ? {
                    contextInfo: {
                      ..._0x5320e4[_0x5ef646].contextInfo,
                      ..._0x1039e0.contextInfo,
                    },
                  }
                : {}),
            }
          : {}
      )
      return (
        await _0x9e3926.relayMessage(_0x1ea53c, _0x551059.message, {
          messageId: _0x551059.key.id,
        }),
        _0x551059
      )
    }),
    (_0x9e3926.cMod = (
      _0xf74106,
      _0x36a96d,
      _0x4994fa = '',
      _0x435701 = _0x9e3926.user.id,
      _0x1eca8c = {}
    ) => {
      let _0x5de5e8 = Object.keys(_0x36a96d.message)[0],
        _0x30a100 = _0x5de5e8 === 'ephemeralMessage'
      _0x30a100 &&
        (_0x5de5e8 = Object.keys(_0x36a96d.message.ephemeralMessage.message)[0])
      let _0x130a43 = _0x30a100
        ? _0x36a96d.message.ephemeralMessage.message
        : _0x36a96d.message
      let _0x1a883c = _0x130a43[_0x5de5e8]
      if (typeof _0x1a883c === 'string') {
        _0x130a43[_0x5de5e8] = _0x4994fa || _0x1a883c
      } else {
        if (_0x1a883c.caption) {
          _0x1a883c.caption = _0x4994fa || _0x1a883c.caption
        } else {
          if (_0x1a883c.text) {
            _0x1a883c.text = _0x4994fa || _0x1a883c.text
          }
        }
      }
      if (typeof _0x1a883c !== 'string') {
        _0x130a43[_0x5de5e8] = {
          ..._0x1a883c,
          ..._0x1eca8c,
        }
      }
      if (_0x36a96d.key.participant) {
        _0x435701 = _0x36a96d.key.participant =
          _0x435701 || _0x36a96d.key.participant
      } else {
        if (_0x36a96d.key.participant) {
          _0x435701 = _0x36a96d.key.participant =
            _0x435701 || _0x36a96d.key.participant
        }
      }
      if (_0x36a96d.key.remoteJid.includes('@s.whatsapp.net')) {
        _0x435701 = _0x435701 || _0x36a96d.key.remoteJid
      } else {
        if (_0x36a96d.key.remoteJid.includes('@broadcast')) {
          _0x435701 = _0x435701 || _0x36a96d.key.remoteJid
        }
      }
      _0x36a96d.key.remoteJid = _0xf74106
      _0x36a96d.key.fromMe = _0x435701 === _0x9e3926.user.id
      return proto.WebMessageInfo.fromObject(_0x36a96d)
    }),
    (_0x9e3926.getFile = async (_0x489619, _0x3d5282) => {
      let _0x31ff6b
      let _0x468113 = Buffer.isBuffer(_0x489619)
        ? _0x489619
        : /^data:.*?\/.*?;base64,/i.test(_0x489619)
        ? Buffer.from(_0x489619.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x489619)
        ? await (_0x31ff6b = await getBuffer(_0x489619))
        : fs.existsSync(_0x489619)
        ? ((filename = _0x489619), fs.readFileSync(_0x489619))
        : typeof _0x489619 === 'string'
        ? _0x489619
        : Buffer.alloc(0)
      const _0x316c1d = {
        mime: 'application/octet-stream',
        ext: '.bin',
      }
      let _0x17fec7 = (await FileType.fromBuffer(_0x468113)) || _0x316c1d
      filename = path.join(
        __filename,
        '../src/' + new Date() * 1 + '.' + _0x17fec7.ext
      )
      if (_0x468113 && _0x3d5282) {
        fs.promises.writeFile(filename, _0x468113)
      }
      return {
        res: _0x31ff6b,
        filename: filename,
        size: await getSizeMedia(_0x468113),
        ..._0x17fec7,
        data: _0x468113,
      }
    }),
    _0x9e3926
  )
}
startHinata()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
function _0x3e5af1(_0x4b2c68) {
  function _0x1d8bdc(_0x498a0f) {
    if (typeof _0x498a0f === 'string') {
      return function (_0x398352) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x498a0f / _0x498a0f).length !== 1 || _0x498a0f % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x1d8bdc(++_0x498a0f)
  }
  try {
    if (_0x4b2c68) {
      return _0x1d8bdc
    } else {
      _0x1d8bdc(0)
    }
  } catch (_0x2684dc) {}
}
