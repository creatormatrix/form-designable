!(function (e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], n)
    : n(
        (((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).Designable = e.Designable || {}),
        (e.Designable.ReactSandbox = {}))
      )
})(this, function (e) {
  'use strict'
  var n = function () {
    return (
      (n =
        Object.assign ||
        function (e) {
          for (var n, t = 1, o = arguments.length; t < o; t++)
            for (var r in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          return e
        }),
      n.apply(this, arguments)
    )
  }
  'function' == typeof SuppressedError && SuppressedError
  var t = function (e) {
    var n = React.useRef(),
      t = Designable.React.usePrefix('app'),
      o = Designable.React.useDesigner(),
      r = Designable.React.useWorkspace(),
      l = Designable.React.useLayout(),
      c = e.cssAssets || [],
      a = e.jsAssets || [],
      i = function (e) {
        return getComputedStyle(
          document.querySelector('.'.concat(t))
        ).getPropertyValue(e)
      }
    return (
      React.useEffect(
        function () {
          var t, s
          if (n.current && r) {
            var u =
                null === (t = null == c ? void 0 : c.map) || void 0 === t
                  ? void 0
                  : t
                      .call(c, function (e) {
                        return '<link media="all" rel="stylesheet" href="'.concat(
                          e,
                          '" />'
                        )
                      })
                      .join('\n'),
              d =
                null === (s = null == a ? void 0 : a.map) || void 0 === s
                  ? void 0
                  : s
                      .call(a, function (e) {
                        return '<script src="'.concat(
                          e,
                          '" type="text/javascript" ></script>'
                        )
                      })
                      .join('\n')
            ;(n.current.contentWindow.__DESIGNABLE_SANDBOX_SCOPE__ = e.scope),
              (n.current.contentWindow.__DESIGNABLE_LAYOUT__ = l),
              (n.current.contentWindow.__DESIGNABLE_ENGINE__ = o),
              (n.current.contentWindow.__DESIGNABLE_WORKSPACE__ = r),
              (n.current.contentWindow.Formily =
                Designable.Shared.globalThisPolyfill.Formily),
              (n.current.contentWindow.Designable =
                Designable.Shared.globalThisPolyfill.Designable),
              n.current.contentDocument.open(),
              n.current.contentDocument.write(
                '\n      <!DOCTYPE html>\n        <head>\n          '
                  .concat(
                    u,
                    '\n        </head>\n        <style>\n          html{\n            overflow: overlay;\n          }\n          ::-webkit-scrollbar {\n            width: 5px;\n            height: 5px;\n          }\n          ::-webkit-scrollbar-thumb {\n            background-color:'
                  )
                  .concat(
                    i('--dn-scrollbar-color'),
                    ';\n            border-radius: 0;\n            transition: all .25s ease-in-out;\n          }\n          ::-webkit-scrollbar-thumb:hover {\n            background-color: '
                  )
                  .concat(
                    i('--dn-scrollbar-hover-color'),
                    ';\n          }\n          body{\n            margin:0;\n            padding:0;\n            overflow-anchor: none;\n            user-select:none;\n            background-color:'
                  )
                  .concat(
                    'light' === l.theme ? '#fff' : 'transparent',
                    ' !important;\n          }\n          html{\n            overflow-anchor: none;\n          }\n          .inherit-cusor * {\n            cursor: inherit !important;\n          }\n        </style>\n        <body>\n          <div id="__SANDBOX_ROOT__"></div>\n          '
                  )
                  .concat(d, '\n        </body>\n      </html>\n      ')
              ),
              n.current.contentDocument.close()
          }
        },
        [r]
      ),
      n
    )
  }
  Designable.Shared.globalThisPolyfill.frameElement &&
    Designable.Shared.globalThisPolyfill.addEventListener(
      'unload',
      function () {
        ReactDOM.unmountComponentAtNode(
          document.getElementById('__SANDBOX_ROOT__')
        )
      }
    )
  var o = function () {
    return Designable.Shared.globalThisPolyfill.__DESIGNABLE_SANDBOX_SCOPE__
  }
  ;(e.Sandbox = function (e) {
    e.cssAssets, e.jsAssets, e.scope
    var o = e.style,
      r = (function (e, n) {
        var t = {}
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            n.indexOf(o) < 0 &&
            (t[o] = e[o])
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            n.indexOf(o[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
              (t[o[r]] = e[o[r]])
        }
        return t
      })(e, ['cssAssets', 'jsAssets', 'scope', 'style'])
    return React.createElement(
      'iframe',
      n(n({}, r), {
        ref: t(e),
        style: n(
          { height: '100%', width: '100%', border: 'none', display: 'block' },
          o
        ),
      })
    )
  }),
    (e.renderSandboxContent = function (e) {
      Designable.Shared.isFn(e) &&
        ReactDOM.render(e(o()), document.getElementById('__SANDBOX_ROOT__'))
    }),
    (e.useSandbox = t),
    (e.useSandboxScope = o),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
