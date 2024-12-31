const _0x46332e = _0xc7bf;
function _0xc7bf(_0x20c898, _0x1a4b09) {
  const _0x67d1e2 = _0x67d1();
  return (
    (_0xc7bf = function (_0xc7bf1f, _0x2ef9ba) {
      _0xc7bf1f = _0xc7bf1f - 0x1d2;
      let _0x43a833 = _0x67d1e2[_0xc7bf1f];
      return _0x43a833;
    }),
    _0xc7bf(_0x20c898, _0x1a4b09)
  );
}
(function (_0x392db7, _0x416ca8) {
  const _0x2f8a34 = _0xc7bf,
    _0x19c8c6 = _0x392db7();
  while (!![]) {
    try {
      const _0x17aab4 =
        (-parseInt(_0x2f8a34(0x227)) / 0x1) *
          (parseInt(_0x2f8a34(0x216)) / 0x2) +
        parseInt(_0x2f8a34(0x229)) / 0x3 +
        (-parseInt(_0x2f8a34(0x1d9)) / 0x4) *
          (parseInt(_0x2f8a34(0x217)) / 0x5) +
        -parseInt(_0x2f8a34(0x1e3)) / 0x6 +
        (parseInt(_0x2f8a34(0x1f1)) / 0x7) *
          (parseInt(_0x2f8a34(0x23d)) / 0x8) +
        parseInt(_0x2f8a34(0x238)) / 0x9 +
        (-parseInt(_0x2f8a34(0x22e)) / 0xa) *
          (-parseInt(_0x2f8a34(0x21e)) / 0xb);
      if (_0x17aab4 === _0x416ca8) break;
      else _0x19c8c6["push"](_0x19c8c6["shift"]());
    } catch (_0x48c335) {
      _0x19c8c6["push"](_0x19c8c6["shift"]());
    }
  }
})(_0x67d1, 0x54523);
const { Boom } = require(_0x46332e(0x209)),
  {
    default: makeWASocket,
    Browsers,
    fetchLatestBaileysVersion,
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,
    DisconnectReason,
    delay: delayin,
    generateProfilePicture,
  } = require(_0x46332e(0x1e2)),
  { getDevice } = require(_0x46332e(0x1fa)),
  { Sticker, createSticker, StickerTypes } = require(_0x46332e(0x23e)),
  QRCode = require(_0x46332e(0x1d7)),
  fs = require("fs");
let sock = [],
  qrcode = [],
  pairingCode = [],
  intervalStore = [];
const { setStatus } = require(_0x46332e(0x22c)),
  { IncomingMessage } = require("./controllers/incomingMessage"),
  {
    formatReceipt,
    getSavedPhoneNumber,
    prepareMediaMessage,
    createJid,
    delayMsg,
  } = require(_0x46332e(0x1d5)),
  MAIN_LOGGER = require(_0x46332e(0x213)),
  NodeCache = require(_0x46332e(0x236)),
  { Button, formatButtonMsg } = require("./dto/button"),
  { ulid } = require(_0x46332e(0x22f)),
  { Section, formatListMsg } = require(_0x46332e(0x1eb)),
  logger = MAIN_LOGGER[_0x46332e(0x1f4)]({}),
  msgRetryCounterCache = new NodeCache(),
  connectToWhatsApp = async (_0x4ad799, _0x4de21b = null, _0x3535b2 = ![]) => {
    const _0x36c9c4 = _0x46332e;
    console[_0x36c9c4(0x205)](_0x3535b2);
    if (typeof qrcode[_0x4ad799] !== "undefined" && !_0x3535b2)
      return (
        _0x4de21b?.["emit"](_0x36c9c4(0x1d7), {
          token: _0x4ad799,
          data: qrcode[_0x4ad799],
          message: "please\x20scan\x20with\x20your\x20Whatsapp\x20Accountt",
        }),
        {
          status: ![],
          sock: sock[_0x4ad799],
          qrcode: qrcode[_0x4ad799],
          message: _0x36c9c4(0x1e6),
        }
      );
    if (typeof pairingCode[_0x4ad799] !== _0x36c9c4(0x214) && _0x3535b2)
      return (
        _0x4de21b?.[_0x36c9c4(0x200)](_0x36c9c4(0x20f), {
          token: _0x4ad799,
          data: pairingCode[_0x4ad799],
          message: _0x36c9c4(0x228),
        }),
        { status: ![], code: pairingCode[_0x4ad799], message: _0x36c9c4(0x239) }
      );
    try {
      let _0x470ec0 =
        sock[_0x4ad799][_0x36c9c4(0x224)]["id"][_0x36c9c4(0x23a)](":");
      _0x470ec0 = _0x470ec0[0x0] + _0x36c9c4(0x237);
      const _0x29d957 = await getPpUrl(_0x4ad799, _0x470ec0);
      return (
        _0x4de21b?.[_0x36c9c4(0x200)](_0x36c9c4(0x1da), {
          token: _0x4ad799,
          user: sock[_0x4ad799][_0x36c9c4(0x224)],
          ppUrl: _0x29d957,
        }),
        delete qrcode[_0x4ad799],
        delete pairingCode[_0x4ad799],
        { status: !![], message: _0x36c9c4(0x1e1) }
      );
    } catch (_0x20087f) {
      _0x4de21b?.[_0x36c9c4(0x200)](_0x36c9c4(0x1de), {
        token: _0x4ad799,
        message: _0x36c9c4(0x1f8),
      });
    }
    const { version: _0x5a5191, isLatest: _0xfabd3d } =
      await fetchLatestBaileysVersion();
    console[_0x36c9c4(0x205)](_0x36c9c4(0x207)),
      console[_0x36c9c4(0x205)](
        _0x36c9c4(0x206) +
          _0x5a5191[_0x36c9c4(0x210)](".") +
          ",\x20isLatest:\x20" +
          _0xfabd3d
      );
    const { state: _0x416c5a, saveCreds: _0x4a723f } =
      await useMultiFileAuthState(_0x36c9c4(0x1e9) + _0x4ad799);
    sock[_0x4ad799] = makeWASocket({
      version: _0x5a5191,
      browser: Browsers[_0x36c9c4(0x1fe)]("Chrome"),
      logger: logger,
      printQRInTerminal: !_0x3535b2,
      auth: {
        creds: _0x416c5a[_0x36c9c4(0x226)],
        keys: makeCacheableSignalKeyStore(_0x416c5a[_0x36c9c4(0x1dc)], logger),
      },
      msgRetryCounterCache: msgRetryCounterCache,
      generateHighQualityLinkPreview: !![],
    });
    if (
      _0x3535b2 &&
      "me" in _0x416c5a[_0x36c9c4(0x226)] === ![] &&
      !_0x416c5a["creds"]["registered"]
    ) {
      const _0x13d4f2 = await getSavedPhoneNumber(_0x4ad799);
      try {
        const _0x2fa935 = await sock[_0x4ad799]["requestPairingCode"](
          _0x13d4f2
        );
        (pairingCode[_0x4ad799] =
          _0x2fa935?.[_0x36c9c4(0x23b)](/.{1,4}/g)?.[_0x36c9c4(0x210)]("-") ||
          _0x2fa935),
          console[_0x36c9c4(0x205)](_0x36c9c4(0x1d3), _0x2fa935);
      } catch (_0x4ba20f) {
        _0x4de21b?.["emit"](_0x36c9c4(0x1de), {
          token: _0x4ad799,
          message: _0x36c9c4(0x22d),
        });
      }
      _0x4de21b?.[_0x36c9c4(0x200)](_0x36c9c4(0x20f), {
        token: _0x4ad799,
        data: pairingCode[_0x4ad799],
        message: _0x36c9c4(0x228),
      });
    }
    return (
      sock[_0x4ad799]["ev"][_0x36c9c4(0x1f0)](async (_0x19fecc) => {
        const _0x2988a6 = _0x36c9c4;
        if (_0x19fecc[_0x2988a6(0x1df)]) {
          const _0x104945 = _0x19fecc["connection.update"],
            {
              connection: _0x1d2b89,
              lastDisconnect: _0x545b51,
              qr: _0x4d6ced,
            } = _0x104945;
          console[_0x2988a6(0x205)](_0x2988a6(0x23c), _0x104945);
          if (_0x1d2b89 === _0x2988a6(0x1db)) {
            const _0x24f555 =
                _0x545b51[_0x2988a6(0x21a)]?.[_0x2988a6(0x211)]?.["payload"]?.[
                  _0x2988a6(0x1de)
                ],
              _0x13e30d =
                _0x545b51[_0x2988a6(0x21a)]?.[_0x2988a6(0x211)]?.[
                  _0x2988a6(0x208)
                ]?.[_0x2988a6(0x21a)];
            if (
              (_0x545b51?.["error"] instanceof Boom)?.[_0x2988a6(0x211)]?.[
                _0x2988a6(0x21f)
              ] !== DisconnectReason[_0x2988a6(0x1f7)]
            ) {
              delete qrcode[_0x4ad799],
                _0x4de21b?.[_0x2988a6(0x200)](_0x2988a6(0x1de), {
                  token: _0x4ad799,
                  message: "Connecting..",
                });
              if (_0x24f555 == _0x2988a6(0x220)) {
                sock[_0x4ad799]["ws"][_0x2988a6(0x1db)](),
                  delete qrcode[_0x4ad799],
                  delete pairingCode[_0x4ad799],
                  delete sock[_0x4ad799],
                  _0x4de21b?.[_0x2988a6(0x200)](_0x2988a6(0x1de), {
                    token: _0x4ad799,
                    message: _0x2988a6(0x1ff),
                  });
                return;
              }
              (_0x13e30d === _0x2988a6(0x215) ||
                _0x13e30d === _0x2988a6(0x1d8)) &&
                (setStatus(_0x4ad799, _0x2988a6(0x20d)),
                clearConnection(_0x4ad799),
                connectToWhatsApp(_0x4ad799, _0x4de21b)),
                _0x24f555 === _0x2988a6(0x20b) &&
                  connectToWhatsApp(_0x4ad799, _0x4de21b),
                _0x24f555 === "Connection\x20was\x20lost" &&
                  delete sock[_0x4ad799];
            } else
              setStatus(_0x4ad799, _0x2988a6(0x20d)),
                console[_0x2988a6(0x205)](
                  "Connection\x20closed.\x20You\x20are\x20logged\x20out."
                ),
                _0x4de21b?.[_0x2988a6(0x200)](_0x2988a6(0x1de), {
                  token: _0x4ad799,
                  message:
                    "Connection\x20closed.\x20You\x20are\x20logged\x20out.",
                }),
                clearConnection(_0x4ad799),
                connectToWhatsApp(_0x4ad799, _0x4de21b);
          }
          _0x4d6ced &&
            (console[_0x2988a6(0x205)]("new\x20qr", _0x4ad799),
            QRCode["toDataURL"](_0x4d6ced, function (_0x6a17f3, _0x118ae3) {
              if (_0x6a17f3) console["log"](_0x6a17f3);
              (qrcode[_0x4ad799] = _0x118ae3),
                connectToWhatsApp(_0x4ad799, _0x4de21b, _0x3535b2);
            }));
          if (_0x1d2b89 === _0x2988a6(0x1fd)) {
            setStatus(_0x4ad799, _0x2988a6(0x223)),
              delete qrcode[_0x4ad799],
              delete pairingCode[_0x4ad799];
            let _0x5ec0a6 =
              sock[_0x4ad799][_0x2988a6(0x224)]["id"][_0x2988a6(0x23a)](":");
            _0x5ec0a6 = _0x5ec0a6[0x0] + _0x2988a6(0x237);
            const _0x179683 = await getPpUrl(_0x4ad799, _0x5ec0a6);
            console["log"](_0x2988a6(0x230), _0x179683),
              _0x4de21b?.[_0x2988a6(0x200)](_0x2988a6(0x1da), {
                token: _0x4ad799,
                user: sock[_0x4ad799][_0x2988a6(0x224)],
                ppUrl: _0x179683,
              }),
              delete qrcode[_0x4ad799],
              delete pairingCode[_0x4ad799];
          }
        }
        if (_0x19fecc[_0x2988a6(0x1ec)]) {
          const _0x37037d = _0x19fecc[_0x2988a6(0x1ec)];
          _0x4a723f(_0x37037d);
        }
        if (_0x19fecc["messages.upsert"]) {
          const _0x37e8e8 = _0x19fecc[_0x2988a6(0x1d6)],
            _0xe7e81b = await IncomingMessage(_0x37e8e8, sock[_0x4ad799]);
          console[_0x2988a6(0x205)](_0xe7e81b);
        }
      }),
      sock[_0x4ad799]["ev"]?.["on"](_0x36c9c4(0x20e), async (_0x283050) => {
        const _0x34c0eb = _0x36c9c4,
          _0x29c917 = await getDevice(
            sock[_0x4ad799][_0x34c0eb(0x224)]["id"][_0x34c0eb(0x23a)](":")[0x0]
          ),
          _0x33f4b0 = _0x29c917[0x0][_0x34c0eb(0x219)];
        if (_0x33f4b0 === 0x1) {
          const {
            from: _0x1d8624,
            id: _0x48867a,
            status: _0x1bebc4,
          } = _0x283050[0x0];
          if (_0x1bebc4 == _0x34c0eb(0x212)) {
            const _0x324a04 = {
              tag: _0x34c0eb(0x20e),
              attrs: {
                from: sock[_0x4ad799][_0x34c0eb(0x224)]["id"],
                to: _0x1d8624,
                id: sock[_0x4ad799][_0x34c0eb(0x1e7)](),
              },
              content: [
                {
                  tag: "reject",
                  attrs: {
                    "call-id": _0x48867a,
                    "call-creator": _0x1d8624,
                    count: "0",
                  },
                  content: undefined,
                },
              ],
            };
            await sock[_0x4ad799][_0x34c0eb(0x1d4)](_0x324a04);
          }
        }
      }),
      { sock: sock[_0x4ad799], qrcode: qrcode[_0x4ad799] }
    );
  };
async function connectWaBeforeSend(_0x9e8093) {
  const _0x4d520c = _0x46332e;
  let _0xcc7dad = undefined,
    _0x50b9db;
  (_0x50b9db = await connectToWhatsApp(_0x9e8093)),
    await _0x50b9db[_0x4d520c(0x225)]["ev"]["on"](
      _0x4d520c(0x1df),
      (_0x2c9d94) => {
        const { connection: _0x25acc5, qr: _0x137973 } = _0x2c9d94;
        _0x25acc5 === "open" && (_0xcc7dad = !![]),
          _0x137973 && (_0xcc7dad = ![]);
      }
    );
  let _0x2850bd = 0x0;
  while (typeof _0xcc7dad === "undefined") {
    _0x2850bd++;
    if (_0x2850bd > 0x4) break;
    await new Promise((_0x345a93) => setTimeout(_0x345a93, 0x3e8));
  }
  return _0xcc7dad;
}
const sendAvailable = async (_0x1ca9b6) => {
    const _0x1a5c62 = _0x46332e,
      _0x143b38 = await getDevice(_0x1ca9b6);
    let _0x4466c4;
    try {
      return (
        _0x143b38[0x0][_0x1a5c62(0x1e8)] != 0x1
          ? (_0x4466c4 = await sock[_0x1ca9b6][_0x1a5c62(0x235)](
              _0x1a5c62(0x1ef)
            ))
          : (_0x4466c4 = await sock[_0x1ca9b6][_0x1a5c62(0x235)](
              _0x1a5c62(0x218)
            )),
        _0x4466c4
      );
    } catch (_0xf22832) {
      return ![];
    }
  },
  sendText = async (_0x41b574, _0x112b28, _0x509789, _0x5220cd = 0x1) => {
    const _0x5b9e09 = _0x46332e;
    try {
      await delayMsg(_0x5220cd * 0x3e8, sock[_0x41b574], _0x112b28);
      const _0x6b7120 = await sock[_0x41b574][_0x5b9e09(0x1ed)](
        formatReceipt(_0x112b28),
        { text: _0x509789 }
      );
      return _0x6b7120;
    } catch (_0x24262f) {
      return console[_0x5b9e09(0x205)](_0x24262f), ![];
    }
  },
  sendMessage = async (_0x1d5631, _0x507855, _0x2c1f37, _0x32d0e8) => {
    const _0x59cd1c = _0x46332e;
    try {
      await delayMsg(_0x32d0e8 * 0x3e8, sock[_0x1d5631], _0x507855);
      const _0x55d0cf = await sock[_0x1d5631][_0x59cd1c(0x1ed)](
        formatReceipt(_0x507855),
        JSON["parse"](_0x2c1f37)
      );
      return _0x55d0cf;
    } catch (_0x1c7192) {
      return ![];
    }
  };
async function sendMedia(
  _0x11e376,
  _0x5e0063,
  _0x793a8f,
  _0x1098c5,
  _0x3b105b,
  _0x1cf7dd,
  _0x12d3dc,
  _0x1e1e8a = 0x0
) {
  const _0x3e4c08 = _0x46332e,
    _0x39d0d6 = formatReceipt(_0x5e0063);
  let _0xf555b5 = sock[_0x11e376][_0x3e4c08(0x224)]["id"]["replace"](
    /:\d+/,
    ""
  );
  if (_0x793a8f == _0x3e4c08(0x234))
    return await sock[_0x11e376][_0x3e4c08(0x1ed)](_0x39d0d6, {
      audio: { url: _0x1098c5 },
      ptt: !![],
      mimetype: _0x3e4c08(0x1ee),
    });
  const _0x2b5129 = await prepareMediaMessage(sock[_0x11e376], {
      caption: _0x3b105b ? _0x3b105b : "",
      fileName: _0x12d3dc,
      media: _0x1098c5,
      mediatype:
        _0x793a8f !== _0x3e4c08(0x22b) && _0x793a8f !== _0x3e4c08(0x1d2)
          ? _0x3e4c08(0x221)
          : _0x793a8f,
    }),
    _0x4f86a5 = { ..._0x2b5129[_0x3e4c08(0x1de)] };
  return (
    await delayMsg(_0x1e1e8a * 0x3e8, sock[_0x11e376], _0x39d0d6),
    await sock[_0x11e376][_0x3e4c08(0x1ed)](_0x39d0d6, {
      forward: {
        key: { remoteJid: _0xf555b5, fromMe: !![] },
        message: _0x4f86a5,
      },
    })
  );
}
async function sendButtonMessage(
  _0x2badf3,
  _0x5513bc,
  _0x3d37ac,
  _0x5a2772,
  _0x4b57ae,
  _0xde34cd = null
) {
  const _0x47e0bb = _0x46332e;
  let _0x85e6bd = "url";
  const _0x37b97e = _0x5a2772;
  try {
    const _0x2d5b32 = _0x3d37ac[_0x47e0bb(0x1dd)]((_0x5cdaba, _0x3e6403) => {
        return new Button(_0x5cdaba);
      }),
      _0x227d93 = await formatButtonMsg(
        _0x2d5b32,
        _0x4b57ae,
        _0x37b97e,
        sock[_0x2badf3],
        _0xde34cd
      ),
      _0x2304ce = ulid(Date["now"]()),
      _0x2a4f73 = await sock[_0x2badf3][_0x47e0bb(0x232)](
        formatReceipt(_0x5513bc),
        _0x227d93,
        { messageId: _0x2304ce }
      );
    return _0x2a4f73;
  } catch (_0xe0ee3d) {
    return console[_0x47e0bb(0x205)](_0xe0ee3d), ![];
  }
}
async function sendTemplateMessage(
  _0xc748ee,
  _0xb820ed,
  _0x156218,
  _0x50fbb9,
  _0x196c0a,
  _0x3be202
) {
  const _0x3a0dd8 = _0x46332e;
  try {
    if (_0x3be202)
      var _0x4a7c4c = {
        caption: _0x50fbb9,
        footer: _0x196c0a,
        viewOnce: !![],
        templateButtons: _0x156218,
        image: { url: _0x3be202 },
        viewOnce: !![],
      };
    else
      var _0x4a7c4c = {
        text: _0x50fbb9,
        footer: _0x196c0a,
        viewOnce: !![],
        templateButtons: _0x156218,
      };
    const _0x4e573c = await sock[_0xc748ee][_0x3a0dd8(0x1ed)](
      formatReceipt(_0xb820ed),
      _0x4a7c4c
    );
    return _0x4e573c;
  } catch (_0x1752f6) {
    return console[_0x3a0dd8(0x205)](_0x1752f6), ![];
  }
}
async function sendListMessage(
  _0x2fa641,
  _0x341ac8,
  _0x43c021,
  _0x3496ee,
  _0x3b85a5,
  _0x30a6df,
  _0x20f686,
  _0x142e66 = null
) {
  const _0x2851d4 = _0x46332e;
  try {
    const _0x158e73 = _0x43c021[_0x2851d4(0x1dd)](
        (_0x1d38e7) => new Section(_0x1d38e7)
      ),
      _0x2a0919 = await formatListMsg(
        _0x158e73,
        _0x3b85a5,
        _0x3496ee,
        sock[_0x2fa641],
        _0x142e66
      ),
      _0x2d891a = ulid(Date["now"]()),
      _0x2489e0 = await sock[_0x2fa641][_0x2851d4(0x232)](
        formatReceipt(_0x341ac8),
        _0x2a0919,
        { messageId: _0x2d891a }
      );
    return _0x2489e0;
  } catch (_0xec66e9) {
    return console[_0x2851d4(0x205)](_0xec66e9), ![];
  }
}
async function sendPollMessage(
  _0x132c0d,
  _0x4665b9,
  _0x247852,
  _0x5e1901,
  _0x472628
) {
  const _0x402687 = _0x46332e;
  try {
    const _0x3cf7d6 = await sock[_0x132c0d][_0x402687(0x1ed)](
      formatReceipt(_0x4665b9),
      {
        poll: {
          name: _0x247852,
          values: _0x5e1901,
          selectableCount: _0x472628,
        },
      }
    );
    return _0x3cf7d6;
  } catch (_0x4b87b5) {
    return console[_0x402687(0x205)](_0x4b87b5), ![];
  }
}
async function sendLocation(_0x142ce4, _0x43b71d, _0x206355, _0x4e1d8b) {
  const _0x1d313b = _0x46332e;
  try {
    await delayMsg(0x3e8, sock[_0x142ce4], _0x43b71d);
    const _0x33d948 = await sock[_0x142ce4][_0x1d313b(0x1ed)](
      formatReceipt(_0x43b71d),
      { location: { degreesLatitude: _0x206355, degreesLongitude: _0x4e1d8b } }
    );
    return _0x33d948;
  } catch (_0x56147a) {
    return ![];
  }
}
async function sendVcard(_0x3ccc22, _0x2b06b5, _0x164fc0, _0x4e0a06) {
  const _0x469c58 = _0x46332e;
  try {
    const _0x734879 =
      _0x469c58(0x201) +
      _0x469c58(0x21b) +
      "FN:" +
      _0x164fc0 +
      "\x0a" +
      _0x469c58(0x22a) +
      _0x4e0a06 +
      ":+" +
      _0x4e0a06 +
      "\x0a" +
      _0x469c58(0x1ea);
    delayMsg(0x3e8, sock[_0x3ccc22], _0x2b06b5);
    const _0x5dfe58 = await sock[_0x3ccc22]["sendMessage"](
      formatReceipt(_0x2b06b5),
      { contacts: { displayName: _0x164fc0, contacts: [{ vcard: _0x734879 }] } }
    );
    return _0x5dfe58;
  } catch (_0x2f014d) {
    return ![];
  }
}
async function sendSticker(
  _0x140d94,
  _0x1483a0,
  _0x2fa4b6,
  _0x42a97a,
  _0x7f905,
  _0x28abb5
) {
  const _0x1e7c39 = _0x46332e,
    _0x221a0f = formatReceipt(_0x1483a0);
  let _0x3208fa = sock[_0x140d94][_0x1e7c39(0x224)]["id"][_0x1e7c39(0x1f9)](
    /:\d+/,
    ""
  );
  const _0x167188 = new Sticker(_0x42a97a, {
      pack: "",
      author: "",
      type: StickerTypes[_0x1e7c39(0x1f2)],
      quality: 0x32,
    }),
    _0x52831c = await _0x167188["toBuffer"]();
  return (
    await _0x167188["toFile"](_0x1e7c39(0x1e4)),
    await sock[_0x140d94][_0x1e7c39(0x1ed)](
      _0x221a0f,
      await _0x167188[_0x1e7c39(0x240)]()
    )
  );
}
async function fetchGroups(_0x2f7f0) {
  const _0x31881d = _0x46332e;
  try {
    let _0x295ae6 = await sock[_0x2f7f0][_0x31881d(0x21d)](),
      _0x1156d4 = Object[_0x31881d(0x233)](_0x295ae6)
        [_0x31881d(0x20a)](0x0)
        [_0x31881d(0x1dd)]((_0x50043c) => _0x50043c[0x1]);
    return _0x1156d4;
  } catch (_0x3332c0) {
    return ![];
  }
}
async function isExist(_0x4824a2, _0x1ac0b1) {
  const _0x34d05e = _0x46332e;
  try {
    if (typeof sock[_0x4824a2] === _0x34d05e(0x214)) {
      const _0xc0fcaf = await connectWaBeforeSend(_0x4824a2);
      if (!_0xc0fcaf) return ![];
    }
    if (_0x1ac0b1[_0x34d05e(0x1e5)](_0x34d05e(0x204))) return !![];
    else {
      const [_0x18ea60] = await sock[_0x4824a2]["onWhatsApp"]("+" + _0x1ac0b1);
      return _0x1ac0b1["length"] > 0xb ? _0x18ea60 : !![];
    }
  } catch (_0x500e08) {
    return ![];
  }
}
async function getPpUrl(_0x56632c, _0x1885ad, _0xe31d2a) {
  const _0x4a3d23 = _0x46332e;
  let _0x5a6de9;
  try {
    return (
      (_0x5a6de9 = await sock[_0x56632c]["profilePictureUrl"](_0x1885ad)),
      _0x5a6de9
    );
  } catch (_0x4ac077) {
    return _0x4a3d23(0x231);
  }
}
function _0x67d1() {
  const _0x595ba5 = [
    "toMessage",
    "image",
    "pairing\x20code",
    "query",
    "./lib/helper",
    "messages.upsert",
    "qrcode",
    "Method\x20Not\x20Allowed",
    "1083912oFXyKR",
    "connection-open",
    "close",
    "keys",
    "map",
    "message",
    "connection.update",
    "Logout\x20Progres..",
    "Already\x20connected",
    "@whiskeysockets/baileys",
    "3651354FstJie",
    "sticker.webp",
    "includes",
    "please\x20scan",
    "generateMessageTag",
    "set_available",
    "./credentials/",
    "END:VCARD",
    "./dto/list",
    "creds.update",
    "sendMessage",
    "audio/mpeg",
    "available",
    "process",
    "21ADVkjT",
    "FULL",
    "send",
    "child",
    "Nothing\x20deleted",
    "\x20connection\x20restored",
    "loggedOut",
    "Connecting..\x20(1)..",
    "replace",
    "./database/model",
    "Wrong\x20Parameterss",
    "body",
    "open",
    "ubuntu",
    "Request\x20QR\x20ended.\x20reload\x20web\x20to\x20scan\x20again",
    "emit",
    "BEGIN:VCARD\x0a",
    "rmSync",
    "status",
    "@g.us",
    "log",
    "using\x20WA\x20v",
    "You\x20re\x20using\x20whatsapp\x20gateway\x20M\x20Pedia\x20v8.x.x\x20-\x20Contact\x20admin\x20if\x20any\x20trouble\x20:\x206292298859671",
    "payload",
    "@hapi/boom",
    "slice",
    "Stream\x20Errored\x20(restart\x20required)",
    "existsSync",
    "Disconnect",
    "call",
    "code",
    "join",
    "output",
    "offer",
    "./lib/pino",
    "undefined",
    "Unauthorized",
    "2ZxUGlf",
    "10uBnEOS",
    "unavailable",
    "reject_call",
    "error",
    "VERSION:3.0\x0a",
    "json",
    "groupFetchAllParticipating",
    "33VNgLpM",
    "statusCode",
    "QR\x20refs\x20attempts\x20ended",
    "document",
    "\x20connection\x20failed",
    "Connected",
    "user",
    "sock",
    "creds",
    "481724grMRzf",
    "Go\x20to\x20whatsapp\x20->\x20link\x20device\x20->\x20link\x20with\x20phone\x20number,\x20and\x20pairing\x20with\x20this\x20code.",
    "1149468vnKLjT",
    "TEL;type=CELL;type=VOICE;waid=",
    "video",
    "./database/index",
    "Time\x20out,\x20please\x20refresh\x20page",
    "3045590uyJuyA",
    "ulid",
    "connection\x20open",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
    "relayMessage",
    "entries",
    "audio",
    "sendPresenceUpdate",
    "node-cache",
    "@s.whatsapp.net",
    "5027058VWzFPD",
    "pairing\x20with\x20that\x20code",
    "split",
    "match",
    "connection",
    "325928bzdkMq",
    "wa-sticker-formatter",
    "logout",
  ];
  _0x67d1 = function () {
    return _0x595ba5;
  };
  return _0x67d1();
}
async function deleteCredentials(_0x566b7e, _0x5eaff4 = null) {
  const _0xfa6f0 = _0x46332e;
  _0x5eaff4 !== null &&
    _0x5eaff4[_0xfa6f0(0x200)]("message", {
      token: _0x566b7e,
      message: _0xfa6f0(0x1e0),
    });
  try {
    if (typeof sock[_0x566b7e] === _0xfa6f0(0x214)) {
      const _0x2c5a90 = await connectWaBeforeSend(_0x566b7e);
      _0x2c5a90 && (sock[_0x566b7e][_0xfa6f0(0x23f)](), delete sock[_0x566b7e]);
    } else sock[_0x566b7e][_0xfa6f0(0x23f)](), delete sock[_0x566b7e];
    return (
      delete qrcode[_0x566b7e],
      clearInterval(intervalStore[_0x566b7e]),
      setStatus(_0x566b7e, _0xfa6f0(0x20d)),
      _0x5eaff4 != null &&
        (_0x5eaff4[_0xfa6f0(0x200)](_0xfa6f0(0x215), _0x566b7e),
        _0x5eaff4[_0xfa6f0(0x200)]("message", {
          token: _0x566b7e,
          message: "Connection\x20closed.\x20You\x20are\x20logged\x20out.",
        })),
      fs[_0xfa6f0(0x20c)](_0xfa6f0(0x1e9) + _0x566b7e) &&
        fs[_0xfa6f0(0x202)](
          _0xfa6f0(0x1e9) + _0x566b7e,
          { recursive: !![], force: !![] },
          (_0x47b174) => {
            const _0x51a8dd = _0xfa6f0;
            if (_0x47b174) console[_0x51a8dd(0x205)](_0x47b174);
          }
        ),
      { status: !![], message: "Deleting\x20session\x20and\x20credential" }
    );
  } catch (_0x218915) {
    return (
      console["log"](_0x218915), { status: !![], message: _0xfa6f0(0x1f5) }
    );
  }
}
function clearConnection(_0x594906) {
  const _0x27cbc0 = _0x46332e;
  clearInterval(intervalStore[_0x594906]),
    delete sock[_0x594906],
    delete qrcode[_0x594906],
    setStatus(_0x594906, _0x27cbc0(0x20d)),
    fs["existsSync"]("./credentials/" + _0x594906) &&
      (fs[_0x27cbc0(0x202)](
        _0x27cbc0(0x1e9) + _0x594906,
        { recursive: !![], force: !![] },
        (_0x3cf498) => {
          const _0x2042c3 = _0x27cbc0;
          if (_0x3cf498) console[_0x2042c3(0x205)](_0x3cf498);
        }
      ),
      console[_0x27cbc0(0x205)](
        "credentials/" + _0x594906 + "\x20is\x20deleted"
      ));
}
async function initialize(_0x8cf24a, _0x425e32) {
  const _0x3a0440 = _0x46332e,
    { token: _0x559336 } = _0x8cf24a[_0x3a0440(0x1fc)];
  if (_0x559336) {
    const _0x5963c5 = require("fs"),
      _0x50d7fa = _0x3a0440(0x1e9) + _0x559336;
    if (_0x5963c5["existsSync"](_0x50d7fa)) {
      sock[_0x559336] = undefined;
      const _0x273b41 = await connectWaBeforeSend(_0x559336);
      return _0x273b41
        ? _0x425e32[_0x3a0440(0x203)](0xc8)[_0x3a0440(0x21c)]({
            status: !![],
            message: _0x559336 + _0x3a0440(0x1f6),
          })
        : _0x425e32[_0x3a0440(0x203)](0xc8)[_0x3a0440(0x21c)]({
            status: ![],
            message: _0x559336 + _0x3a0440(0x222),
          });
    }
    return _0x425e32[_0x3a0440(0x1f3)]({
      status: ![],
      message: _0x559336 + "\x20Connection\x20failed,please\x20scan\x20first",
    });
  }
  return _0x425e32["send"]({ status: ![], message: _0x3a0440(0x1fb) });
}
module["exports"] = {
  connectToWhatsApp: connectToWhatsApp,
  sendText: sendText,
  sendMedia: sendMedia,
  sendButtonMessage: sendButtonMessage,
  sendTemplateMessage: sendTemplateMessage,
  sendListMessage: sendListMessage,
  sendPollMessage: sendPollMessage,
  isExist: isExist,
  getPpUrl: getPpUrl,
  fetchGroups: fetchGroups,
  deleteCredentials: deleteCredentials,
  sendMessage: sendMessage,
  initialize: initialize,
  connectWaBeforeSend: connectWaBeforeSend,
  sock: sock,
  sendLocation: sendLocation,
  sendVcard: sendVcard,
  sendSticker: sendSticker,
  sendAvailable: sendAvailable,
};
