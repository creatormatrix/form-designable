!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).Designable = e.Designable || {}),
        (e.Designable.React = {}))
      )
})(this, function (e) {
  'use strict'
  Designable.Core.GlobalRegistry.registerDesignerLocales(
    {
      'zh-CN': {
        icons: {
          Image: '图片',
          ImageSize: '图片尺寸',
          Position: '位置',
          Number: '数字',
          Text: '文本',
          Expression: '表达式',
          RichText: '富文本',
          Boolean: '布尔',
          Repeat: '重复',
          Top: '上',
          Left: '左',
          Right: '右',
          Bottom: '下',
          TopLeft: '左上',
          TopRight: '右上',
          BottomRight: '右下',
          BottomLeft: '左下',
          DisplayBlock: '区块',
          DisplayInlineBlock: '内联区块',
          DisplayInline: '文本内联',
          DisplayFlex: '弹性盒子',
          FlexDirectionRow: '横向',
          FlexDirectionColumn: '纵向',
          FlexAlignContentCenter: '居中',
          FlexAlignContentStart: '头部',
          FlexAlignContentEnd: '尾部',
          FlexAlignContentSpaceAround: 'Space Around',
          FlexAlignContentSpaceBetween: 'Space Between',
          FlexAlignContentStretch: 'Stretch',
          FlexJustifyCenter: '居中',
          FlexJustifyStart: '头部',
          FlexJustifyEnd: '尾部',
          FlexJustifySpaceBetween: 'Space Between',
          FlexJustifySpaceAround: 'Space Around',
          FlexJustifySpaceEvenly: 'Space Evenly',
          FlexAlignItemsCenter: '居中',
          FlexAlignItemsStart: '头部',
          FlexAlignItemsEnd: '尾部',
          FlexAlignItemsStretch: 'Stretch',
          FlexAlignItemsBaseline: 'Baseline',
          FlexNoWrap: '不换行',
          FlexWrap: '换行',
          AxisX: 'X轴',
          AxisY: 'Y轴',
          Blur: '模糊度',
          Shadow: '阴影扩展',
          FontWeight: '字重',
          FontStyle: '风格',
          NormalFontStyle: '标准',
          ItalicFontStyle: '斜体',
          FontColor: '颜色',
          FontSize: '大小',
          LineHeight: '行高',
          TextDecoration: '修饰',
          TextUnderline: '下划线',
          TextLineThrough: '中横线',
          TextAlign: '对齐',
          TextAlignLeft: '左对齐',
          TextAlignCenter: '居中',
          TextAlignRight: '右对齐',
          TextAlignJustify: '自适应',
        },
      },
      'en-US': {
        icons: {
          Image: 'Image',
          ImageSize: 'Image Size',
          Boolean: 'Boolean',
          Number: 'Number',
          Text: 'Text',
          Expression: 'Expression',
          RichText: 'Rich Text',
          Position: 'Position',
          Repeat: 'Repeat',
          Top: 'Top',
          Left: 'Left',
          Right: 'Right',
          Bottom: 'Bottom',
          TopLeft: 'Top Left',
          TopRight: 'Top Right',
          BottomRight: 'Bottom Right',
          BottomLeft: 'Bottom Left',
          DisplayBlock: 'Block',
          DisplayInlineBlock: 'Inline Block',
          DisplayInline: 'Inline',
          DisplayFlex: 'Flex',
          FlexDirectionRow: 'Horizontal',
          FlexDirectionColumn: 'Vertical',
          FlexAlignContentCenter: 'Center',
          FlexAlignContentStart: 'Start',
          FlexAlignContentEnd: 'End',
          FlexAlignContentSpaceAround: 'Space Around',
          FlexAlignContentSpaceBetween: 'Space Between',
          FlexAlignContentStretch: 'Stretch',
          FlexJustifyCenter: 'Center',
          FlexJustifyStart: 'Start',
          FlexJustifyEnd: 'End',
          FlexJustifySpaceBetween: 'Space Between',
          FlexJustifySpaceAround: 'Space Around',
          FlexJustifySpaceEvenly: 'Space Evenly',
          FlexAlignItemsCenter: 'Center',
          FlexAlignItemsStart: 'Start',
          FlexAlignItemsEnd: 'End',
          FlexAlignItemsStretch: 'Stretch',
          FlexAlignItemsBaseline: 'Baseline',
          FlexNoWrap: 'No Wrap',
          FlexWrap: 'Wrap',
          AxisX: 'X Axis',
          AxisY: 'Y Axis',
          Blur: 'Blur',
          Shadow: 'Shadow Spread',
          FontWeight: 'Font Weight',
          FontStyle: 'Font Style',
          NormalFontStyle: 'Normal',
          ItalicFontStyle: 'Italic',
          FontColor: 'Color',
          FontSize: 'Font Size',
          LineHeight: 'Line Height',
          TextDecoration: 'Decoration',
          TextUnderline: 'Underline',
          TextLineThrough: 'Line Through',
          TextAlign: 'Align',
          TextAlignLeft: 'Left',
          TextAlignCenter: 'Center',
          TextAlignRight: 'Right',
          TextAlignJustify: 'Justify',
        },
      },
    },
    {
      'zh-CN': {
        panels: {
          Component: '组件',
          OutlinedTree: '大纲树',
          PropertySettings: '属性配置',
          History: '历史记录',
        },
      },
      'en-US': {
        panels: {
          Component: 'Component',
          OutlinedTree: 'Outlined Tree',
          PropertySettings: 'Property Settings',
          History: 'History',
        },
      },
      'ko-KR': {
        panels: {
          Component: '컴포넌트',
          OutlinedTree: '트리 노드',
          PropertySettings: '속성 설정',
          History: '기록',
        },
      },
    },
    {
      'zh-CN': {
        save: '保存',
        submit: '提交',
        cancel: '取消',
        reset: '重置',
        publish: '发布',
      },
      'en-US': {
        save: 'Save',
        submit: 'Submit',
        cancel: 'Cancel',
        reset: 'Reset',
        publish: 'Publish',
      },
    },
    {
      'zh-CN': {
        operations: {
          default_state: '缺省态',
          append_node: '追加节点',
          prepend_node: '头部追加',
          clone_node: '复制节点',
          update_node_props: '属性更改',
          insert_after: '后置插入',
          insert_before: '前置插入',
          insert_children: '插入子节点',
          update_children: '覆盖子节点',
          remove_node: '删除节点',
          wrap_node: '包装节点',
          from_node: '子树更新',
        },
      },
      'en-US': {
        operations: {
          default_state: 'Default State',
          append_node: 'Append Node',
          prepend_node: 'Prepend Node',
          clone_node: 'Clone Node',
          update_node_props: 'Update Node Props',
          insert_after: 'Insert Node After',
          insert_before: 'Insert Node Before',
          insert_children: 'Insert Node Children',
          update_children: 'Update Children',
          remove_node: 'Remove Node',
          wrap_node: 'Wrap Node',
          from_node: 'Update Child Tree',
        },
      },
      'ko-KR': {
        operations: {
          default_state: '초기 상태',
          append_node: '노드 추가',
          prepend_node: '노드 삽입',
          clone_node: '노드 복제',
          update_node_props: '노드 속성 수정',
          insert_after: '뒤쪽 노드 삽입',
          insert_before: '앞쪽 노드 삽입',
          insert_children: '자식 노드 삽입',
          update_children: '자식 노드 수정',
          remove_node: '노드 삭제',
          wrap_node: '노드 랩핑',
          from_node: '자식 노드 트리 수정',
        },
      },
    }
  )
  var t = function () {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var t, a = 1, n = arguments.length; a < n; a++)
            for (var r in (t = arguments[a]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          return e
        }),
      t.apply(this, arguments)
    )
  }
  function a(e, t) {
    var a = {}
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (a[n] = e[n])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0
      for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (a[n[r]] = e[n[r]])
    }
    return a
  }
  function n(e, t) {
    var a = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!a) return e
    var n,
      r,
      l = a.call(e),
      i = []
    try {
      for (; (void 0 === t || t-- > 0) && !(n = l.next()).done; )
        i.push(n.value)
    } catch (e) {
      r = { error: e }
    } finally {
      try {
        n && !n.done && (a = l.return) && a.call(l)
      } finally {
        if (r) throw r.error
      }
    }
    return i
  }
  'function' == typeof SuppressedError && SuppressedError
  var r = React.createContext({}),
    l = React.createContext(null),
    i = React.createContext(null),
    C = React.createContext(null),
    c = React.createContext(null),
    o = function (e) {
      var t =
        Designable.Shared.globalThisPolyfill.__DESIGNABLE_ENGINE__ ||
        React.useContext(i)
      return (
        React.useEffect(function () {
          if (Designable.Shared.isFn(e)) return e(t)
        }, []),
        t
      )
    },
    L = function () {
      return o().cursor
    },
    s = function () {
      return o().screen
    },
    d = function (e) {
      var t,
        a = o(),
        n =
          e ||
          (null === (t = React.useContext(c)) || void 0 === t ? void 0 : t.id)
      return n
        ? a.workbench.findWorkspaceById(n)
        : Designable.Shared.globalThisPolyfill.__DESIGNABLE_WORKSPACE__
        ? Designable.Shared.globalThisPolyfill.__DESIGNABLE_WORKSPACE__
        : a.workbench.currentWorkspace
    },
    h = function (e) {
      var t = d(e)
      return null == t ? void 0 : t.operation
    },
    m = function (e) {
      var t = h(e)
      return null == t ? void 0 : t.tree
    },
    f = function () {
      return (
        Designable.Shared.globalThisPolyfill.__DESIGNABLE_LAYOUT__ ||
        React.useContext(l)
      )
    },
    p = function () {
      var e
      return null === (e = f()) || void 0 === e ? void 0 : e.theme
    },
    u = function () {
      var e
      return null === (e = f()) || void 0 === e ? void 0 : e.position
    },
    R = function () {
      return React.useContext(C)
    },
    g = function (e) {
      var t = h(e)
      return null == t ? void 0 : t.hover
    },
    M = function (e) {
      var t = d(e)
      return null == t ? void 0 : t.viewport
    },
    y = function (e) {
      var t = d(e)
      return null == t ? void 0 : t.outline
    },
    b = function (e) {
      var t = h(e)
      return null == t ? void 0 : t.selection
    },
    Z = function () {
      return o().workbench
    },
    E = function (e) {
      var t = d(e)
      return null == t ? void 0 : t.history
    },
    v = function (e) {
      var t
      return (
        void 0 === e && (e = ''),
        (null === (t = f()) || void 0 === t ? void 0 : t.prefixCls) + e
      )
    },
    x = function () {
      return (
        Designable.Shared.globalThisPolyfill.__DESIGNER_REGISTRY__ ||
        Designable.Core.GlobalRegistry
      )
    },
    z = function (e) {
      var t = o(),
        a = M(),
        r = n(React.useState(null), 2)[1],
        l = React.useMemo(
          function () {
            return { current: a.getValidNodeOffsetRect(e) }
          },
          [a]
        ),
        i = a.findElementById(null == e ? void 0 : e.id),
        C = React.useCallback(
          function () {
            if (
              t.cursor.status === Designable.Core.CursorStatus.Normal ||
              t.cursor.dragType !== Designable.Core.CursorDragType.Move
            ) {
              var n,
                i,
                C = a.getValidNodeOffsetRect(e)
              ;(n = l.current),
                (i = C),
                ((null == n ? void 0 : n.x) === (null == i ? void 0 : i.x) &&
                  (null == n ? void 0 : n.y) === (null == i ? void 0 : i.y) &&
                  (null == n ? void 0 : n.width) ===
                    (null == i ? void 0 : i.width) &&
                  (null == n ? void 0 : n.height) ===
                    (null == i ? void 0 : i.height)) ||
                  !C ||
                  ((l.current = C), r([]))
            }
          },
          [a, e]
        )
      return (
        React.useEffect(
          function () {
            var e = new Designable.Shared.LayoutObserver(C)
            return (
              i && e.observe(i),
              function () {
                e.disconnect()
              }
            )
          },
          [e, a, i]
        ),
        l.current
      )
    },
    w = function (e) {
      var t = h(e)
      return null == t ? void 0 : t.moveHelper
    },
    k = function (e) {
      var t,
        a = R()
      return ((t = {})[o().props.nodeIdAttrName] = e ? e.id : a.id), t
    },
    D = function (e) {
      var t = h(e)
      return null == t ? void 0 : t.transformHelper
    },
    S = function (e) {
      var t = b(e)
      return (null == t ? void 0 : t.selected) || []
    },
    _ = function (e) {
      var t,
        a = S(e),
        n = m(e)
      return null === (t = null == n ? void 0 : n.findById) || void 0 === t
        ? void 0
        : t.call(n, a[0])
    },
    N = _,
    F = function () {
      return React.useContext(r)
    }
  function A(e) {
    var t = { exports: {} }
    return e(t, t.exports), t.exports
    /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  }
  var T = A(function (e) {
      !(function () {
        var t = {}.hasOwnProperty
        function a() {
          for (var e = [], n = 0; n < arguments.length; n++) {
            var r = arguments[n]
            if (r) {
              var l = typeof r
              if ('string' === l || 'number' === l) e.push(r)
              else if (Array.isArray(r)) {
                if (r.length) {
                  var i = a.apply(null, r)
                  i && e.push(i)
                }
              } else if ('object' === l)
                if (r.toString === Object.prototype.toString)
                  for (var C in r) t.call(r, C) && r[C] && e.push(C)
                else e.push(r.toString())
            }
          }
          return e.join(' ')
        }
        e.exports ? ((a.default = a), (e.exports = a)) : (window.classNames = a)
      })()
    }),
    B = function (e) {
      var t,
        a = React.useContext(l),
        n = React.useRef()
      return (
        React.useLayoutEffect(function () {
          n.current &&
            Designable.Shared.each(e.variables, function (e, t) {
              n.current.style.setProperty('--'.concat(t), e)
            })
        }, []),
        a
          ? React.createElement(React.Fragment, null, e.children)
          : React.createElement(
              'div',
              {
                ref: n,
                className: T(
                  ((t = {}),
                  (t[''.concat(e.prefixCls, 'app')] = !0),
                  (t[''.concat(e.prefixCls).concat(e.theme)] = e.theme),
                  t)
                ),
              },
              React.createElement(
                l.Provider,
                {
                  value: {
                    theme: e.theme,
                    prefixCls: e.prefixCls,
                    position: e.position,
                  },
                },
                e.children
              )
            )
      )
    }
  B.defaultProps = { theme: 'light', prefixCls: 'dn-', position: 'fixed' }
  var P = Formily.ReactiveReact.observer(function () {
    var e,
      t,
      a,
      n,
      r,
      l = w(),
      i = v('aux-insertion')
    return React.createElement('div', {
      className: i,
      style:
        ((t = l.viewportClosestDirection),
        (a = l.viewportClosestOffsetRect),
        (n =
          'horizontal' ===
          (null === (e = l.closestNode) || void 0 === e
            ? void 0
            : e.moveLayout)),
        (r = {
          position: 'absolute',
          transform: 'perspective(1px) translate3d(0,0,0)',
          top: 0,
          left: 0,
        }),
        a
          ? (t === Designable.Core.ClosestPosition.Before ||
            t === Designable.Core.ClosestPosition.ForbidBefore
              ? ((r.width = 2),
                (r.height = a.height),
                (r.transform = 'perspective(1px) translate3d('
                  .concat(a.x, 'px,')
                  .concat(a.y, 'px,0)')))
              : t === Designable.Core.ClosestPosition.After ||
                t === Designable.Core.ClosestPosition.ForbidAfter
              ? ((r.width = 2),
                (r.height = a.height),
                (r.transform = 'perspective(1px) translate3d('
                  .concat(a.x + a.width - 2, 'px,')
                  .concat(a.y, 'px,0)')))
              : t === Designable.Core.ClosestPosition.InnerAfter ||
                t === Designable.Core.ClosestPosition.Under ||
                t === Designable.Core.ClosestPosition.ForbidInnerAfter ||
                t === Designable.Core.ClosestPosition.ForbidUnder
              ? n
                ? ((r.width = 2),
                  (r.height = a.height),
                  (r.transform = 'perspective(1px) translate3d('
                    .concat(a.x + a.width - 2, 'px,')
                    .concat(a.y, 'px,0)')))
                : ((r.width = a.width),
                  (r.height = 2),
                  (r.transform = 'perspective(1px) translate3d('
                    .concat(a.x, 'px,')
                    .concat(a.y + a.height - 2, 'px,0)')))
              : (t !== Designable.Core.ClosestPosition.InnerBefore &&
                  t !== Designable.Core.ClosestPosition.Upper &&
                  t !== Designable.Core.ClosestPosition.ForbidInnerBefore &&
                  t !== Designable.Core.ClosestPosition.ForbidUpper) ||
                (n
                  ? ((r.width = 2),
                    (r.height = a.height),
                    (r.transform = 'perspective(1px) translate3d('
                      .concat(a.x, 'px,')
                      .concat(a.y, 'px,0)')))
                  : ((r.width = a.width),
                    (r.height = 2),
                    (r.transform = 'perspective(1px) translate3d('
                      .concat(a.x, 'px,')
                      .concat(a.y, 'px,0)')))),
            t.includes('FORBID') && (r.backgroundColor = 'red'),
            r)
          : r),
    })
  })
  P.displayName = 'Insertion'
  var W = React.createContext(null),
    H = function (e) {
      return /^[\d.]+$/.test(e)
    },
    I = Formily.ReactiveReact.observer(function (e) {
      var a,
        n,
        r,
        l = p(),
        i = React.useContext(W),
        C = x(),
        c = v('icon'),
        o = e.size || '1em',
        L = (null === (a = e.style) || void 0 === a ? void 0 : a.height) || o,
        s = (null === (n = e.style) || void 0 === n ? void 0 : n.width) || o,
        d = function (e) {
          if (Designable.Shared.isStr(e)) {
            var t = C.getDesignerIcon(e)
            return t
              ? d(t)
              : React.createElement('img', { src: e, height: L, width: s })
          }
          return Designable.Shared.isFn(e)
            ? React.createElement(e, {
                height: L,
                width: s,
                fill: 'currentColor',
              })
            : React.isValidElement(e)
            ? 'svg' === e.type
              ? React.cloneElement(e, {
                  height: L,
                  width: s,
                  fill: 'currentColor',
                  viewBox: e.props.viewBox || '0 0 1024 1024',
                  focusable: 'false',
                  'aria-hidden': 'true',
                })
              : 'path' === e.type || 'g' === e.type
              ? React.createElement(
                  'svg',
                  {
                    viewBox: '0 0 1024 1024',
                    height: L,
                    width: s,
                    fill: 'currentColor',
                    focusable: 'false',
                    'aria-hidden': 'true',
                  },
                  e
                )
              : e
            : Designable.Shared.isPlainObj(e)
            ? e[l]
              ? d(e[l])
              : e.shadow
              ? React.createElement(I.ShadowSVG, {
                  width: s,
                  height: L,
                  content: e.shadow,
                })
              : null
            : void 0
        }
      return e.infer
        ? (function (a) {
            if (
              !Designable.Shared.isStr(e.infer) &&
              (null == i ? void 0 : i.tooltip)
            )
              return a
            var n = e.tooltip || C.getDesignerMessage('icons.'.concat(e.infer))
            if (n) {
              var r =
                  React.isValidElement(n) || Designable.Shared.isStr(n)
                    ? n
                    : n.title,
                l =
                  React.isValidElement(n) || Designable.Shared.isStr(n)
                    ? {}
                    : Designable.Shared.isObj(n)
                    ? n
                    : {}
              return React.createElement(
                Antd.Tooltip,
                t({}, l, { title: r }),
                a
              )
            }
            return a
          })(
            React.createElement(
              'span',
              t({}, e, {
                className: T(c, e.className),
                style: t(t({}, e.style), {
                  cursor: e.onClick
                    ? 'pointer'
                    : null === (r = e.style) || void 0 === r
                    ? void 0
                    : r.cursor,
                }),
              }),
              d(e.infer)
            )
          )
        : null
    })
  ;(I.ShadowSVG = function (e) {
    var t = React.useRef(),
      a = H(e.width) ? ''.concat(e.width, 'px') : e.width,
      n = H(e.height) ? ''.concat(e.height, 'px') : e.height
    return (
      React.useEffect(function () {
        t.current &&
          (t.current.attachShadow({ mode: 'open' }).innerHTML =
            '<svg viewBox="0 0 1024 1024" style="width:'
              .concat(a, ';height:')
              .concat(n, '">')
              .concat(e.content, '</svg>'))
      }, []),
      React.createElement('div', { ref: t })
    )
  }),
    (I.Provider = function (e) {
      return React.createElement(W.Provider, { value: e }, e.children)
    })
  var V = Formily.ReactiveReact.observer(function (e) {
      var t = (function () {
        var t = e.node
        return '$$ResourceNode$$' === t.componentName ? t.children[0] : t
      })()
      return React.createElement(
        React.Fragment,
        null,
        t.getMessage('title') || t.componentName
      )
    }),
    O = Formily.ReactiveReact.observer(function (e) {
      var t,
        a = e.node,
        r = g(),
        l = n(React.useState(!1), 2),
        i = l[0],
        C = l[1],
        c = React.useRef(null),
        o = b(),
        L = v('aux-selector'),
        s = function (e) {
          var t,
            a = e.designerProps.icon
          return a
            ? React.createElement(I, { infer: a })
            : e === e.root
            ? React.createElement(I, { infer: 'Page' })
            : (
                null === (t = e.designerProps) || void 0 === t
                  ? void 0
                  : t.droppable
              )
            ? React.createElement(I, { infer: 'Container' })
            : React.createElement(I, { infer: 'Component' })
        }
      return (
        (function (e, t, a) {
          React.useEffect(function () {
            var n = null,
              r = !1,
              l = function (l) {
                var i = l.target
                clearTimeout(n),
                  (n = setTimeout(function () {
                    var n
                    r ||
                      ((
                        null === (n = null == e ? void 0 : e.current) ||
                        void 0 === n
                          ? void 0
                          : n.contains(i)
                      )
                        ? t && t()
                        : a && a())
                  }, 100))
              }
            return (
              document.addEventListener('mouseover', l),
              function () {
                ;(r = !0), document.removeEventListener('mouseover', l)
              }
            )
          }, [])
        })(
          c,
          function () {
            C(!0)
          },
          function () {
            C(!1)
          }
        ),
        React.createElement(
          'div',
          { ref: c, className: L },
          React.createElement(
            Antd.Button,
            {
              className: L + '-title',
              type: 'primary',
              onMouseEnter: function () {
                r.setHover(a)
              },
            },
            s(a),
            React.createElement(
              'span',
              null,
              React.createElement(V, { node: a })
            )
          ),
          i &&
            ((t = a.getParents()),
            React.createElement(
              'div',
              {
                className: L + '-menu',
                style: { position: 'absolute', top: '100%', left: 0 },
              },
              t.slice(0, 4).map(function (e) {
                return React.createElement(
                  Antd.Button,
                  {
                    key: e.id,
                    type: 'primary',
                    onClick: function () {
                      o.select(e.id)
                    },
                    onMouseEnter: function () {
                      r.setHover(e)
                    },
                  },
                  s(e),
                  React.createElement(
                    'span',
                    { style: { transform: 'scale(0.85)', marginLeft: 2 } },
                    React.createElement(V, { node: e })
                  )
                )
              })
            ))
        )
      )
    })
  O.displayName = 'Selector'
  var U = function (e) {
    var t = e.node,
      a = e.style,
      n = v('aux-copy')
    return t === t.root
      ? null
      : React.createElement(
          Antd.Button,
          {
            className: n,
            style: a,
            type: 'primary',
            onClick: function () {
              Designable.Core.TreeNode.clone([t])
            },
          },
          React.createElement(I, { infer: 'Clone' })
        )
  }
  U.displayName = 'Copy'
  var G = function (e) {
    var t = e.node,
      a = e.style,
      n = v('aux-copy')
    return t === t.root
      ? null
      : React.createElement(
          Antd.Button,
          {
            className: n,
            style: a,
            type: 'primary',
            onClick: function () {
              Designable.Core.TreeNode.remove([t])
            },
          },
          React.createElement(I, { infer: 'Remove' })
        )
  }
  G.displayName = 'Delete'
  var J = Formily.ReactiveReact.observer(function (e) {
    var a,
      n = e.node,
      r = e.style,
      l = o(),
      i = v('aux-drag-handler')
    if (n === n.root || !n.allowDrag()) return null
    var C = (((a = {})[l.props.nodeDragHandlerAttrName] = 'true'), a)
    return React.createElement(
      Antd.Button,
      t({}, C, { className: i, style: r, type: 'primary' }),
      React.createElement(I, { infer: 'Move' })
    )
  })
  J.displayName = 'DragHandler'
  var Y = function (e) {
    var t,
      a = e.node,
      r = e.nodeRect,
      l = v('aux-helpers'),
      i = M(),
      C = React.useRef(!1),
      c = React.useRef(),
      o = n(React.useState('top-right'), 2),
      L = o[0],
      s = o[1]
    return (
      React.useLayoutEffect(
        function () {
          var e = null,
            t = function () {
              var e,
                t =
                  null === (e = c.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect()
              t &&
                r &&
                (C.current ||
                  s(
                    (function (e, t) {
                      return e.top - i.scrollY > t.height
                        ? 'top'
                        : i.isScrollTop && e.height + t.height > i.height
                        ? 'inner-top'
                        : e.bottom >= i.scrollY + i.height &&
                          e.height + t.height > i.height
                        ? 'inner-bottom'
                        : 'bottom'
                    })(r, t) +
                      '-' +
                      (function (e, t) {
                        var a = t.width - e.width
                        return a >= 0
                          ? e.x < a
                            ? 'left'
                            : e.right + a > i.width
                            ? 'right'
                            : 'center'
                          : 'right'
                      })(r, t)
                  ))
            }
          return (
            t(),
            Formily.Reactive.reaction(
              function () {
                return [
                  i.width,
                  i.height,
                  i.scrollX,
                  i.scrollY,
                  i.isScrollBottom,
                  i.isScrollTop,
                ]
              },
              function () {
                clearTimeout(e), (e = setTimeout(t, 100))
              }
            )
          )
        },
        [i, r]
      ),
      r && a
        ? React.createElement(
            'div',
            { className: T(l, ((t = {}), (t[L] = !0), t)), ref: c },
            React.createElement(
              'div',
              { className: T(l + '-content') },
              React.createElement(O, { node: a }),
              !1 === (null == a ? void 0 : a.allowClone())
                ? null
                : React.createElement(U, { node: a }),
              !1 === (null == a ? void 0 : a.allowDrag())
                ? null
                : React.createElement(J, { node: a }),
              !1 === (null == a ? void 0 : a.allowDelete())
                ? null
                : React.createElement(G, { node: a })
            )
          )
        : null
    )
  }
  Y.displayName = 'Helpers'
  var j = function (e) {
      var a = o(),
        n = v('aux-node-resize-handler'),
        r = function (e) {
          var t
          return (
            ((t = {})[a.props.nodeResizeHandlerAttrName] = e),
            (t.className = T(n, e)),
            t
          )
        },
        l = e.node.allowResize()
      if (!l) return null
      var i = l.includes('x'),
        C = l.includes('y')
      return React.createElement(
        React.Fragment,
        null,
        i && React.createElement('div', t({}, r('left-center'))),
        i && React.createElement('div', t({}, r('right-center'))),
        C && React.createElement('div', t({}, r('center-top'))),
        C && React.createElement('div', t({}, r('center-bottom'))),
        i && C && React.createElement('div', t({}, r('left-top'))),
        C && C && React.createElement('div', t({}, r('right-top'))),
        i && C && React.createElement('div', t({}, r('left-bottom'))),
        C && C && React.createElement('div', t({}, r('right-bottom')))
      )
    },
    q = function (e) {
      var a,
        n,
        r = o(),
        l = v('aux-node-translate-handler')
      return e.node.allowTranslate()
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'div',
              t(
                {},
                ((a = 'translate'),
                ((n = {})[r.props.nodeTranslateAttrName] = a),
                (n.className = T(l, a)),
                n)
              ),
              React.createElement(I, { infer: 'FreeMove' })
            )
          )
        : null
    },
    X = function (e) {
      var a,
        n,
        r = o(),
        l = v('aux-selection-box'),
        i = v('aux-selection-box-inner'),
        C = z(e.node)
      if (!C) return null
      if (!C.width || !C.height) return null
      var c,
        L =
          (((a = {})[
            null === (n = r.props) || void 0 === n
              ? void 0
              : n.nodeSelectionIdAttrName
          ] = e.node.id),
          a)
      return React.createElement(
        'div',
        t({}, L, {
          className: l,
          style:
            ((c = {
              position: 'absolute',
              top: 0,
              left: 0,
              boxSizing: 'border-box',
              zIndex: 4,
            }),
            C &&
              ((c.transform = 'perspective(1px) translate3d('
                .concat(C.x, 'px,')
                .concat(C.y, 'px,0)')),
              (c.height = C.height),
              (c.width = C.width)),
            c),
        }),
        React.createElement('div', { className: i }),
        React.createElement(j, { node: e.node }),
        React.createElement(q, { node: e.node }),
        e.showHelpers &&
          React.createElement(Y, t({}, e, { node: e.node, nodeRect: C }))
      )
    },
    K = Formily.ReactiveReact.observer(function () {
      var e = b(),
        t = m(),
        a = L(),
        n = w()
      return 'NORMAL' !== a.status && n.touchNode
        ? null
        : React.createElement(
            React.Fragment,
            null,
            e.selected.map(function (a) {
              var n = t.findById(a)
              if (n && !n.hidden)
                return React.createElement(X, {
                  key: a,
                  node: n,
                  showHelpers: 1 === e.selected.length,
                })
            })
          )
    })
  K.displayName = 'Selection'
  var $ = Formily.ReactiveReact.observer(function () {
      var e,
        t,
        a,
        n = L(),
        r = M(),
        l = h(),
        i = v('aux-free-selection')
      return l.moveHelper.hasDragNodes ||
        n.status !== Designable.Core.CursorStatus.Dragging ||
        n.dragType !== Designable.Core.CursorDragType.Move
        ? null
        : React.createElement('div', {
            className: T(i),
            style:
              ((e = r.getOffsetPoint({
                x: n.dragStartPosition.topClientX,
                y: n.dragStartPosition.topClientY,
              })),
              (t = r.getOffsetPoint({
                x: n.position.topClientX,
                y: n.position.topClientY,
              })),
              (a = Designable.Shared.calcRectByStartEndPoint(
                e,
                t,
                r.dragScrollXDelta,
                r.dragScrollYDelta
              )),
              {
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.2,
                borderWidth: 1,
                borderStyle: 'solid',
                transform: 'perspective(1px) translate3d('
                  .concat(a.x, 'px,')
                  .concat(a.y, 'px,0)'),
                height: a.height,
                width: a.width,
                pointerEvents: 'none',
                boxSizing: 'border-box',
                zIndex: 1,
              }),
          })
    }),
    Q = function (e) {
      var t,
        a = v('aux-cover-rect'),
        n = z(e.node)
      return React.createElement('div', {
        className: T(a, { dragging: e.dragging, dropping: e.dropping }),
        style:
          ((t = {
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }),
          n &&
            ((t.transform = 'perspective(1px) translate3d('
              .concat(n.x, 'px,')
              .concat(n.y, 'px,0)')),
            (t.height = n.height),
            (t.width = n.width)),
          t),
      })
    },
    ee = Formily.ReactiveReact.observer(function () {
      var e,
        t = w(),
        a = M()
      return L().status !== Designable.Core.CursorStatus.Dragging
        ? null
        : React.createElement(
            React.Fragment,
            null,
            t.dragNodes.map(function (e) {
              if (e && a.findElementById(e.id))
                return React.createElement(Q, {
                  key: e.id,
                  node: e,
                  dragging: !0,
                })
            }),
            t.closestNode &&
              (null === (e = t.closestNode) || void 0 === e
                ? void 0
                : e.allowAppend(t.dragNodes)) &&
              t.viewportClosestDirection ===
                Designable.Core.ClosestPosition.Inner
              ? React.createElement(Q, { node: t.closestNode, dropping: !0 })
              : null
          )
    })
  ee.displayName = 'Cover'
  var te = Formily.ReactiveReact.observer(function () {
    var e,
      t = g(),
      a = v('aux-dashed-box'),
      n = b(),
      r = z(null == t ? void 0 : t.node)
    return t.node
      ? t.node.hidden || n.selected.includes(t.node.id)
        ? null
        : React.createElement(
            'div',
            {
              className: a,
              style:
                ((e = {
                  top: 0,
                  left: 0,
                  pointerEvents: 'none',
                  boxSizing: 'border-box',
                  visibility: 'hidden',
                  zIndex: 2,
                }),
                r &&
                  ((e.transform = 'perspective(1px) translate3d('
                    .concat(r.x, 'px,')
                    .concat(r.y, 'px,0)')),
                  (e.height = r.height),
                  (e.width = r.width),
                  (e.visibility = 'visible')),
                e),
            },
            React.createElement(
              'span',
              {
                className: a + '-title',
                style: {
                  position: 'absolute',
                  bottom: '100%',
                  left: 0,
                  fontSize: 12,
                  userSelect: 'none',
                  fontWeight: 'lighter',
                  whiteSpace: 'nowrap',
                },
              },
              null == t ? void 0 : t.node.getMessage('title')
            )
          )
      : null
  })
  te.displayName = 'DashedBox'
  var ae = Formily.ReactiveReact.observer(function () {
    var e = L(),
      t = D(),
      a = v('aux-space-block')
    if (e.status !== Designable.Core.CursorStatus.Dragging) return null
    return React.createElement(
      React.Fragment,
      null,
      t.measurerSpaceBlocks.map(function (e, t) {
        var n = e.type,
          r = e.crossDragNodesRect,
          l = e.distance,
          i = e.extendsLine
        return React.createElement(
          React.Fragment,
          null,
          (function (e) {
            var t = Designable.Shared.calcRectOfAxisLineSegment(e)
            if (!t) return null
            var a = t.width || 2,
              n = t.height || 2
            return React.createElement(
              'svg',
              {
                width: a + 'px',
                height: n + 'px',
                viewBox: '0 0 '.concat(a, ' ').concat(n),
                style: {
                  top: 0,
                  left: 0,
                  transform: 'perspective(1px) translate3d('
                    .concat(e.start.x, 'px,')
                    .concat(e.start.y, 'px,0)'),
                  position: 'absolute',
                  zIndex: 3,
                },
              },
              React.createElement('line', {
                x1: e.start.x - t.x,
                y1: e.start.y - t.y,
                x2: e.end.x - t.x,
                y2: e.end.y - t.y,
                strokeDasharray: 4,
                stroke: '#745BFF',
                strokeWidth: 2,
              })
            )
          })(i),
          React.createElement(
            'div',
            {
              key: t,
              style: {
                top: 0,
                left: 0,
                height: r.height,
                width: r.width,
                transform: 'perspective(1px) translate3d('
                  .concat(r.x, 'px,')
                  .concat(r.y, 'px,0)'),
                position: 'absolute',
                zIndex: 3,
              },
            },
            (function (e, t) {
              return 'top' === t || 'bottom' === t
                ? React.createElement(
                    'div',
                    { className: a + '-ruler-v' },
                    React.createElement(
                      'div',
                      { className: a + '-ruler-indicator' },
                      React.createElement(
                        'span',
                        null,
                        null == e ? void 0 : e.toFixed(0)
                      )
                    )
                  )
                : 'left' === t || 'right' === t
                ? React.createElement(
                    'div',
                    { className: a + '-ruler-h' },
                    React.createElement(
                      'div',
                      { className: a + '-ruler-indicator' },
                      React.createElement(
                        'span',
                        null,
                        null == e ? void 0 : e.toFixed(0)
                      )
                    )
                  )
                : void 0
            })(l, n)
          )
        )
      }),
      t.thresholdSpaceBlocks.map(function (e, t) {
        var n = e.rect
        return React.createElement('div', {
          key: t,
          className: a,
          style: {
            top: 0,
            left: 0,
            height: n.height,
            width: n.width,
            transform: 'perspective(1px) translate3d('
              .concat(n.x, 'px,')
              .concat(n.y, 'px,0)'),
            position: 'absolute',
            background: 'rgba(255, 0, 0, 0.2)',
            zIndex: 1,
          },
        })
      })
    )
  })
  ae.displayName = 'SpaceBlock'
  var ne = Formily.ReactiveReact.observer(function () {
    var e = L(),
      t = D(),
      a = v('aux-snap-line')
    return e.status !== Designable.Core.CursorStatus.Dragging
      ? null
      : React.createElement(
          React.Fragment,
          null,
          t.closestSnapLines.map(function (e, t) {
            return 'normal' !== e.type
              ? null
              : React.createElement('div', {
                  key: t,
                  className: a,
                  style:
                    ((n = e.rect),
                    {
                      top: 0,
                      left: 0,
                      height: n.height || 1,
                      width: n.width || 1,
                      transform: 'perspective(1px) translate3d('
                        .concat(n.x, 'px,')
                        .concat(n.y, 'px,0)'),
                      background: '#b0b1f3',
                      position: 'absolute',
                      zIndex: 2,
                    }),
                })
            var n
          })
        )
  })
  ne.displayName = 'SnapLine'
  var re = function () {
    var e = o(),
      t = M(),
      a = v('auxtool'),
      n = React.useRef()
    return (
      React.useEffect(
        function () {
          return e.subscribeWith('viewport:scroll', function () {
            t.isIframe &&
              n.current &&
              (n.current.style.transform = 'perspective(1px) translate3d('
                .concat(-t.scrollX, 'px,')
                .concat(-t.scrollY, 'px,0)'))
          })
        },
        [e, t]
      ),
      t
        ? React.createElement(
            'div',
            { ref: n, className: a },
            React.createElement(P, null),
            React.createElement(ae, null),
            React.createElement(ne, null),
            React.createElement(te, null),
            React.createElement(K, null),
            React.createElement(ee, null),
            React.createElement($, null)
          )
        : null
    )
  }
  re.displayName = 'AuxToolWidget'
  var le = Formily.ReactiveReact.observer(function (e) {
      var a,
        r,
        l = o(
          null ===
            (r =
              null === (a = e.node) || void 0 === a
                ? void 0
                : a.designerProps) || void 0 === r
            ? void 0
            : r.effects
        ),
        i = F(),
        c = e.node,
        L = function () {
          var e, t
          return (
            null === (e = null == c ? void 0 : c.designerProps) || void 0 === e
              ? void 0
              : e.selfRenderChildren
          )
            ? []
            : null === (t = null == c ? void 0 : c.children) || void 0 === t
            ? void 0
            : t.map(function (e) {
                return React.createElement(le, { key: e.id, node: e })
              })
        },
        s = function (e) {
          var a, n, r
          void 0 === e && (e = {})
          var l = t(
            t(
              t(
                t(
                  {},
                  null === (a = c.designerProps) || void 0 === a
                    ? void 0
                    : a.defaultProps
                ),
                e
              ),
              c.props
            ),
            null ===
              (r =
                null === (n = c.designerProps) || void 0 === n
                  ? void 0
                  : n.getComponentProps) || void 0 === r
              ? void 0
              : r.call(n, c)
          )
          return 0 === c.depth && delete l.style, l
        }
      return c
        ? c.hidden
          ? null
          : React.createElement(
              C.Provider,
              { value: c },
              (function () {
                var e,
                  t,
                  a = c.componentName,
                  r = i[a],
                  C = {}
                return r
                  ? (l &&
                      (C[
                        null === (e = null == l ? void 0 : l.props) ||
                        void 0 === e
                          ? void 0
                          : e.nodeIdAttrName
                      ] = c.id),
                    React.createElement.apply(
                      React,
                      (function (e, t, a) {
                        if (a || 2 === arguments.length)
                          for (var n, r = 0, l = t.length; r < l; r++)
                            (!n && r in t) ||
                              (n || (n = Array.prototype.slice.call(t, 0, r)),
                              (n[r] = t[r]))
                        return e.concat(n || Array.prototype.slice.call(t))
                      })([r, s(C)], n(L()), !1)
                    ))
                  : (
                      null === (t = null == c ? void 0 : c.children) ||
                      void 0 === t
                        ? void 0
                        : t.length
                    )
                  ? React.createElement(React.Fragment, null, L())
                  : void 0
              })()
            )
        : null
    }),
    ie = Formily.ReactiveReact.observer(function (e) {
      var a,
        n,
        l = m(),
        i = v('component-tree'),
        C = o(),
        c = {}
      return (
        C &&
          l &&
          (c[
            null === (a = null == C ? void 0 : C.props) || void 0 === a
              ? void 0
              : a.nodeIdAttrName
          ] = l.id),
        React.useEffect(function () {
          Designable.Core.GlobalRegistry.registerDesignerBehaviors(e.components)
        }, []),
        React.createElement(
          'div',
          t(
            {
              style: t(
                t({}, e.style),
                null === (n = null == l ? void 0 : l.props) || void 0 === n
                  ? void 0
                  : n.style
              ),
              className: T(i, e.className),
            },
            c
          ),
          React.createElement(
            r.Provider,
            { value: e.components },
            React.createElement(le, { node: l })
          )
        )
      )
    })
  ie.displayName = 'ComponentTreeWidget'
  var Ce = Formily.ReactiveReact.observer(function (e) {
    var t = s(),
      a = L(),
      n = Z(),
      r = E(),
      l = React.useRef({}),
      i = v('designer-tools')
    return React.createElement(
      'div',
      { style: e.style, className: T(i, e.className) },
      e.use.includes('HISTORY')
        ? React.createElement(
            Antd.Button.Group,
            { size: 'small', style: { marginRight: 20 } },
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: !(null == r ? void 0 : r.allowUndo),
                onClick: function () {
                  r.undo()
                },
              },
              React.createElement(I, { infer: 'Undo' })
            ),
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: !(null == r ? void 0 : r.allowRedo),
                onClick: function () {
                  r.redo()
                },
              },
              React.createElement(I, { infer: 'Redo' })
            )
          )
        : null,
      'DESIGNABLE' !== n.type
        ? null
        : e.use.includes('CURSOR')
        ? React.createElement(
            Antd.Button.Group,
            { size: 'small', style: { marginRight: 20 } },
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: a.type === Designable.Core.CursorType.Normal,
                onClick: function () {
                  a.setType(Designable.Core.CursorType.Normal)
                },
              },
              React.createElement(I, { infer: 'Move' })
            ),
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: a.type === Designable.Core.CursorType.Selection,
                onClick: function () {
                  a.setType(Designable.Core.CursorType.Selection)
                },
              },
              React.createElement(I, { infer: 'Selection' })
            )
          )
        : null,
      e.use.includes('SCREEN_TYPE')
        ? React.createElement(
            Antd.Button.Group,
            { size: 'small', style: { marginRight: 20 } },
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: t.type === Designable.Core.ScreenType.PC,
                onClick: function () {
                  t.setType(Designable.Core.ScreenType.PC)
                },
              },
              React.createElement(I, { infer: 'PC' })
            ),
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: t.type === Designable.Core.ScreenType.Mobile,
                onClick: function () {
                  t.setType(Designable.Core.ScreenType.Mobile)
                },
              },
              React.createElement(I, { infer: 'Mobile' })
            ),
            React.createElement(
              Antd.Button,
              {
                size: 'small',
                disabled: t.type === Designable.Core.ScreenType.Responsive,
                onClick: function () {
                  t.setType(Designable.Core.ScreenType.Responsive)
                },
              },
              React.createElement(I, { infer: 'Responsive' })
            )
          )
        : null,
      e.use.includes('SCREEN_TYPE')
        ? t.type === Designable.Core.ScreenType.Mobile
          ? React.createElement(
              Antd.Button,
              {
                size: 'small',
                style: { marginRight: 20 },
                onClick: function () {
                  t.setFlip(!t.flip)
                },
              },
              React.createElement(I, {
                infer: 'Flip',
                style: {
                  transition: 'all .15s ease-in',
                  transform: t.flip ? 'rotate(-90deg)' : '',
                },
              })
            )
          : void 0
        : null,
      e.use.includes('SCREEN_TYPE')
        ? t.type !== Designable.Core.ScreenType.Responsive
          ? null
          : React.createElement(
              React.Fragment,
              null,
              React.createElement(Antd.InputNumber, {
                size: 'small',
                value: t.width,
                style: { width: 70, textAlign: 'center' },
                onChange: function (e) {
                  l.current.width = e
                },
                onPressEnter: function () {
                  t.setSize(l.current.width, t.height)
                },
              }),
              React.createElement(I, {
                size: 10,
                infer: 'Close',
                style: { padding: '0 3px', color: '#999' },
              }),
              React.createElement(Antd.InputNumber, {
                value: t.height,
                size: 'small',
                style: { width: 70, textAlign: 'center', marginRight: 10 },
                onChange: function (e) {
                  l.current.height = e
                },
                onPressEnter: function () {
                  t.setSize(t.width, l.current.height)
                },
              }),
              ('100%' !== t.width || '100%' !== t.height) &&
                React.createElement(
                  Antd.Button,
                  {
                    size: 'small',
                    style: { marginRight: 20 },
                    onClick: function () {
                      t.resetSize()
                    },
                  },
                  React.createElement(I, { infer: 'Recover' })
                )
            )
        : null
    )
  })
  Ce.defaultProps = { use: ['HISTORY', 'CURSOR', 'SCREEN_TYPE'] }
  var ce = Formily.ReactiveReact.observer(function (e) {
    var t = e.use,
      a = e.style,
      n = e.className,
      r = Z(),
      l = v('view-tools')
    return React.createElement(
      Antd.Button.Group,
      { style: a, className: T(l, n) },
      t.includes('DESIGNABLE') &&
        React.createElement(
          Antd.Button,
          {
            disabled: 'DESIGNABLE' === r.type,
            onClick: function () {
              r.type = 'DESIGNABLE'
            },
            size: 'small',
          },
          React.createElement(I, { infer: 'Design' })
        ),
      t.includes('JSONTREE') &&
        React.createElement(
          Antd.Button,
          {
            disabled: 'JSONTREE' === r.type,
            onClick: function () {
              r.type = 'JSONTREE'
            },
            size: 'small',
          },
          React.createElement(I, { infer: 'JSON' })
        ),
      t.includes('MARKUP') &&
        React.createElement(
          Antd.Button,
          {
            disabled: 'MARKUP' === r.type,
            onClick: function () {
              r.type = 'MARKUP'
            },
            size: 'small',
          },
          React.createElement(I, { infer: 'Code' })
        ),
      t.includes('PREVIEW') &&
        React.createElement(
          Antd.Button,
          {
            disabled: 'PREVIEW' === r.type,
            onClick: function () {
              r.type = 'PREVIEW'
            },
            size: 'small',
          },
          React.createElement(I, { infer: 'Play' })
        )
    )
  })
  ce.defaultProps = { use: ['DESIGNABLE', 'JSONTREE', 'PREVIEW'] }
  var oe = Formily.ReactiveReact.observer(function (e) {
      var t = function (e) {
        if (e) {
          var t = Designable.Shared.isStr(e)
            ? Designable.Core.GlobalRegistry.getDesignerMessage(e)
            : e
          return t
            ? (function (e) {
                if (Designable.Shared.isStr(e)) return e
                if (!Designable.Shared.isPlainObj(e)) return e
                var t = Designable.Core.GlobalRegistry.getDesignerLanguage()
                for (var a in e) if (a.toLocaleLowerCase() === t) return e[a]
              })(t)
            : e
        }
      }
      return React.createElement(
        React.Fragment,
        null,
        t(e.children) || t(e.token) || t(e.defaultMessage)
      )
    }),
    Le = Formily.ReactiveReact.observer(function (e) {
      var t = v('resource'),
        a = n(React.useState(e.defaultExpand), 2),
        r = a[0],
        l = a[1],
        i = e.sources.reduce(function (e, t) {
          return Designable.Core.isResourceList(t)
            ? e.concat(t)
            : Designable.Core.isResourceHost(t)
            ? e.concat(t.Resource)
            : e
        }, []),
        C =
          i.reduce(function (e, t) {
            var a
            return e + (null !== (a = t.span) && void 0 !== a ? a : 1)
          }, 0) % 3
      return React.createElement(
        'div',
        { className: T(t, e.className, { expand: r }) },
        React.createElement(
          'div',
          {
            className: t + '-header',
            onClick: function (e) {
              e.stopPropagation(), e.preventDefault(), l(!r)
            },
          },
          React.createElement(
            'div',
            { className: t + '-header-expand' },
            React.createElement(I, { infer: 'Expand', size: 10 })
          ),
          React.createElement(
            'div',
            { className: t + '-header-content' },
            React.createElement(oe, null, e.title)
          )
        ),
        React.createElement(
          'div',
          { className: t + '-content-wrapper' },
          React.createElement(
            'div',
            { className: t + '-content' },
            i.map(
              Designable.Shared.isFn(e.children)
                ? e.children
                : function (e) {
                    var a,
                      n = e.node,
                      r = e.icon,
                      l = e.title,
                      i = e.thumb,
                      C = e.span
                    return React.createElement(
                      'div',
                      {
                        className: t + '-item',
                        style: { gridColumnStart: 'span '.concat(C || 1) },
                        key: n.id,
                        'data-designer-source-id': n.id,
                      },
                      i &&
                        React.createElement('img', {
                          className: t + '-item-thumb',
                          src: i,
                        }),
                      r && React.isValidElement(r)
                        ? React.createElement(React.Fragment, null, r)
                        : React.createElement(I, {
                            className: t + '-item-icon',
                            infer: r,
                            style: { width: 150, height: 40 },
                          }),
                      React.createElement(
                        'span',
                        { className: t + '-item-text' },
                        React.createElement(
                          oe,
                          null,
                          l ||
                            (null === (a = n.children[0]) || void 0 === a
                              ? void 0
                              : a.getMessage('title'))
                        )
                      )
                    )
                  }
            ),
            C
              ? React.createElement('div', {
                  className: t + '-item-remain',
                  style: { gridColumnStart: 'span '.concat(3 - C) },
                })
              : null
          )
        )
      )
    })
  Le.defaultProps = { defaultExpand: !0 }
  var se = Formily.ReactiveReact.observer(function () {
    var e = o(),
      t = L(),
      a = React.useRef(),
      n = v('ghost'),
      r = e.findMovingNodes(),
      l = r[0]
    React.useEffect(
      function () {
        return Formily.Reactive.autorun(function () {
          var e,
            n,
            r = 'perspective(1px) translate3d('
              .concat(
                (null === (e = t.position) || void 0 === e
                  ? void 0
                  : e.topClientX) - 18,
                'px,'
              )
              .concat(
                (null === (n = t.position) || void 0 === n
                  ? void 0
                  : n.topClientY) - 12,
                'px,0) scale(0.8)'
              )
          a.current && (a.current.style.transform = r)
        })
      },
      [e, t]
    )
    return l && t.status === Designable.Core.CursorStatus.Dragging
      ? React.createElement(
          'div',
          { ref: a, className: n },
          React.createElement(
            'span',
            { style: { whiteSpace: 'nowrap' } },
            React.createElement(V, { node: l }),
            r.length > 1 ? '...' : ''
          )
        )
      : null
  })
  se.displayName = 'GhostWidget'
  var de = Formily.ReactiveReact.observer(function (e) {
    var t,
      a = m(),
      n = v('empty')
    return (
      null === (t = null == a ? void 0 : a.children) || void 0 === t
        ? void 0
        : t.length
    )
      ? null
      : React.createElement(
          'div',
          { className: n },
          e.children
            ? e.children
            : React.createElement(
                'div',
                { style: { display: 'flex', flexDirection: 'column' } },
                React.createElement(
                  'div',
                  { className: 'animations' },
                  React.createElement(I, {
                    infer:
                      'left' === e.dragTipsDirection
                        ? 'DragLeftSourceAnimation'
                        : 'DragRightSourceAnimation',
                    size: 240,
                  }),
                  React.createElement(I, {
                    infer: 'BatchDragAnimation',
                    size: 240,
                  })
                ),
                React.createElement(
                  'div',
                  { className: 'hotkeys-list' },
                  React.createElement(
                    'div',
                    null,
                    'Selection ',
                    React.createElement(I, { infer: 'Command' }),
                    ' + Click /',
                    ' ',
                    React.createElement(I, { infer: 'Shift' }),
                    ' + Click /',
                    ' ',
                    React.createElement(I, { infer: 'Command' }),
                    ' + A'
                  ),
                  React.createElement(
                    'div',
                    null,
                    'Copy ',
                    React.createElement(I, { infer: 'Command' }),
                    ' + C / Paste',
                    ' ',
                    React.createElement(I, { infer: 'Command' }),
                    ' + V'
                  ),
                  React.createElement(
                    'div',
                    null,
                    'Delete ',
                    React.createElement(I, { infer: 'Delete' })
                  )
                )
              )
        )
  })
  de.defaultProps = { dragTipsDirection: 'left' }
  var he = React.createContext(null),
    me = Formily.ReactiveReact.observer(function (e) {
      var t,
        a,
        n = e.node,
        r = e.className,
        l = e.style,
        i = e.workspaceId,
        C = v('outline-tree-node'),
        c = o(),
        s = React.useRef(),
        d = React.useContext(he),
        h = React.useRef(null),
        m = L(),
        f = b(i),
        p = w(i)
      if (
        (React.useEffect(
          function () {
            return c.subscribeTo(Designable.Core.DragMoveEvent, function () {
              var e,
                t =
                  null === (e = null == p ? void 0 : p.closestNode) ||
                  void 0 === e
                    ? void 0
                    : e.id,
                a = null == p ? void 0 : p.outlineClosestDirection,
                r = n.id
              s.current &&
                (t === r && a === Designable.Core.ClosestPosition.Inner
                  ? (s.current.classList.contains('droppable') ||
                      s.current.classList.add('droppable'),
                    s.current.classList.contains('expanded') ||
                      (h.current &&
                        (clearTimeout(h.current), (h.current = null)),
                      (h.current = setTimeout(function () {
                        s.current.classList.add('expanded')
                      }, 600))))
                  : (h.current && (clearTimeout(h.current), (h.current = null)),
                    s.current.classList.contains('droppable') &&
                      s.current.classList.remove('droppable')))
            })
          },
          [n, p, m]
        ),
        React.useEffect(
          function () {
            return Formily.Reactive.autorun(function () {
              var e,
                t = (null == f ? void 0 : f.selected) || [],
                a = n.id
              s.current &&
                (t.includes(a)
                  ? s.current.classList.contains('selected') ||
                    s.current.classList.add('selected')
                  : s.current.classList.contains('selected') &&
                    s.current.classList.remove('selected'),
                m.status === Designable.Core.CursorStatus.Dragging &&
                  (null === (e = null == p ? void 0 : p.dragNodes) ||
                  void 0 === e
                    ? void 0
                    : e.length) &&
                  s.current.classList.contains('selected') &&
                  s.current.classList.remove('selected'))
            })
          },
          [n, f, p]
        ),
        !n)
      )
        return null
      return React.createElement(
        'div',
        {
          style: l,
          ref: s,
          className: T(C, r, 'expanded'),
          'data-designer-outline-node-id': n.id,
        },
        React.createElement(
          'div',
          { className: C + '-header' },
          React.createElement('div', {
            className: C + '-header-head',
            style: { left: 16 * -n.depth, width: 16 * n.depth },
          }),
          React.createElement(
            'div',
            { className: C + '-header-content' },
            React.createElement(
              'div',
              { className: C + '-header-base' },
              ((null === (t = null == n ? void 0 : n.children) || void 0 === t
                ? void 0
                : t.length) > 0 ||
                n === n.root) &&
                React.createElement(
                  'div',
                  {
                    className: C + '-expand',
                    onClick: function (e) {
                      var t, a, n, r
                      e.preventDefault(),
                        e.stopPropagation(),
                        (
                          null ===
                            (a =
                              null === (t = s.current) || void 0 === t
                                ? void 0
                                : t.classList) || void 0 === a
                            ? void 0
                            : a.contains('expanded')
                        )
                          ? null === (n = s.current) ||
                            void 0 === n ||
                            n.classList.remove('expanded')
                          : null === (r = s.current) ||
                            void 0 === r ||
                            r.classList.add('expanded')
                    },
                  },
                  React.createElement(I, { infer: 'Expand', size: 10 })
                ),
              React.createElement(
                'div',
                { className: C + '-icon' },
                (function (e) {
                  var t,
                    a = e.designerProps.icon
                  return a
                    ? React.createElement(I, { infer: a, size: 12 })
                    : e === (null == e ? void 0 : e.root)
                    ? React.createElement(I, { infer: 'Page', size: 12 })
                    : (
                        null === (t = e.designerProps) || void 0 === t
                          ? void 0
                          : t.droppable
                      )
                    ? React.createElement(I, { infer: 'Container', size: 12 })
                    : React.createElement(I, { infer: 'Component', size: 12 })
                })(n)
              ),
              React.createElement(
                'div',
                { className: C + '-title' },
                (function (e) {
                  return Designable.Shared.isFn(d.renderTitle)
                    ? d.renderTitle(e)
                    : React.createElement(
                        'span',
                        null,
                        React.createElement(V, { node: e })
                      )
                })(n)
              )
            ),
            React.createElement(
              'div',
              {
                className: C + '-header-actions',
                'data-click-stop-propagation': !0,
              },
              (function (e) {
                if (Designable.Shared.isFn(d.renderActions))
                  return d.renderActions(e)
              })(n),
              n !== n.root &&
                React.createElement(I, {
                  className: T(C + '-hidden-icon', { hidden: n.hidden }),
                  infer: n.hidden ? 'EyeClose' : 'Eye',
                  size: 14,
                  onClick: function () {
                    n.hidden = !n.hidden
                  },
                })
            )
          )
        ),
        React.createElement(
          'div',
          { className: C + '-children' },
          null === (a = n.children) || void 0 === a
            ? void 0
            : a.map(function (e) {
                return React.createElement(me, {
                  node: e,
                  key: e.id,
                  workspaceId: i,
                })
              })
        )
      )
    }),
    fe = Formily.ReactiveReact.observer(function (e) {
      var t,
        a,
        n,
        r = e.workspaceId,
        l = w(r),
        i = v('outline-tree-insertion')
      return (null == l ? void 0 : l.closestNode)
        ? React.createElement('div', {
            className: i,
            style:
              ((t = l.outlineClosestDirection),
              (a = l.outlineClosestOffsetRect),
              (n = {
                position: 'absolute',
                transform: 'perspective(1px) translate3d(0,0,0)',
                top: 0,
                left: 0,
              }),
              a
                ? (t === Designable.Core.ClosestPosition.After ||
                  t === Designable.Core.ClosestPosition.InnerAfter ||
                  t === Designable.Core.ClosestPosition.Under ||
                  t === Designable.Core.ClosestPosition.ForbidAfter ||
                  t === Designable.Core.ClosestPosition.ForbidInnerAfter ||
                  t === Designable.Core.ClosestPosition.ForbidUnder
                    ? ((n.width = a.width),
                      (n.height = 2),
                      (n.transform = 'perspective(1px) translate3d('
                        .concat(a.x, 'px,')
                        .concat(a.y + a.height - 2, 'px,0)')))
                    : (t !== Designable.Core.ClosestPosition.Before &&
                        t !== Designable.Core.ClosestPosition.InnerBefore &&
                        t !== Designable.Core.ClosestPosition.Upper &&
                        t !== Designable.Core.ClosestPosition.ForbidBefore &&
                        t !==
                          Designable.Core.ClosestPosition.ForbidInnerBefore &&
                        t !== Designable.Core.ClosestPosition.ForbidUpper) ||
                      ((n.width = a.width),
                      (n.height = 2),
                      (n.transform = 'perspective(1px) translate3d('
                        .concat(a.x, 'px,')
                        .concat(a.y, 'px,0)'))),
                  t.includes('FORBID')
                    ? (n.backgroundColor = 'red')
                    : (n.backgroundColor = ''),
                  n)
                : n),
          })
        : null
    })
  fe.displayName = 'Insertion'
  var pe = Formily.ReactiveReact.observer(function (e) {
      e.onClose
      var n = e.style,
        r = e.renderActions,
        l = e.renderTitle,
        i = e.className,
        C = a(e, [
          'onClose',
          'style',
          'renderActions',
          'renderTitle',
          'className',
        ]),
        c = React.useRef(),
        o = v('outline-tree'),
        L = Z(),
        s =
          (null == L ? void 0 : L.activeWorkspace) ||
          (null == L ? void 0 : L.currentWorkspace),
        d = null == s ? void 0 : s.id,
        h = m(d),
        f = y(d),
        p = React.useRef()
      return (
        React.useLayoutEffect(
          function () {
            if (d)
              return (
                p.current && p.current !== f && p.current.onUnmount(),
                c.current &&
                  f &&
                  f.onMount(c.current, Designable.Shared.globalThisPolyfill),
                (p.current = f),
                function () {
                  f.onUnmount()
                }
              )
          },
          [d, f]
        ),
        f && d
          ? React.createElement(
              he.Provider,
              { value: { renderActions: r, renderTitle: l } },
              React.createElement(
                'div',
                t({}, C, { className: T(o + '-container', i), style: n }),
                React.createElement(
                  'div',
                  { className: o + '-content', ref: c },
                  React.createElement(me, { node: h, workspaceId: d }),
                  React.createElement(
                    'div',
                    { className: o + '-aux', style: { pointerEvents: 'none' } },
                    React.createElement(fe, { workspaceId: d })
                  )
                )
              )
            )
          : null
      )
    }),
    ue = A(function (e, t) {
      function a(e) {
        return (
          (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          a(e)
        )
      }
      !(function (n) {
        var r,
          l,
          i,
          C = arguments,
          c =
            ((r =
              /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g),
            (l =
              /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g),
            (i = /[^-+\dA-Z]/g),
            function (e, t, a, n) {
              if (
                (1 !== C.length ||
                  'string' !== h(e) ||
                  /\d/.test(e) ||
                  ((t = e), (e = void 0)),
                (e = e || 0 === e ? e : new Date()) instanceof Date ||
                  (e = new Date(e)),
                isNaN(e))
              )
                throw TypeError('Invalid date')
              var m = (t = String(c.masks[t] || t || c.masks.default)).slice(
                0,
                4
              )
              ;('UTC:' !== m && 'GMT:' !== m) ||
                ((t = t.slice(4)), (a = !0), 'GMT:' === m && (n = !0))
              var f = function () {
                  return a ? 'getUTC' : 'get'
                },
                p = function () {
                  return e[f() + 'Date']()
                },
                u = function () {
                  return e[f() + 'Day']()
                },
                R = function () {
                  return e[f() + 'Month']()
                },
                g = function () {
                  return e[f() + 'FullYear']()
                },
                M = function () {
                  return e[f() + 'Hours']()
                },
                y = function () {
                  return e[f() + 'Minutes']()
                },
                b = function () {
                  return e[f() + 'Seconds']()
                },
                Z = function () {
                  return e[f() + 'Milliseconds']()
                },
                E = function () {
                  return a ? 0 : e.getTimezoneOffset()
                },
                v = function () {
                  return s(e)
                },
                x = {
                  d: function () {
                    return p()
                  },
                  dd: function () {
                    return o(p())
                  },
                  ddd: function () {
                    return c.i18n.dayNames[u()]
                  },
                  DDD: function () {
                    return L({
                      y: g(),
                      m: R(),
                      d: p(),
                      _: f(),
                      dayName: c.i18n.dayNames[u()],
                      short: !0,
                    })
                  },
                  dddd: function () {
                    return c.i18n.dayNames[u() + 7]
                  },
                  DDDD: function () {
                    return L({
                      y: g(),
                      m: R(),
                      d: p(),
                      _: f(),
                      dayName: c.i18n.dayNames[u() + 7],
                    })
                  },
                  m: function () {
                    return R() + 1
                  },
                  mm: function () {
                    return o(R() + 1)
                  },
                  mmm: function () {
                    return c.i18n.monthNames[R()]
                  },
                  mmmm: function () {
                    return c.i18n.monthNames[R() + 12]
                  },
                  yy: function () {
                    return String(g()).slice(2)
                  },
                  yyyy: function () {
                    return o(g(), 4)
                  },
                  h: function () {
                    return M() % 12 || 12
                  },
                  hh: function () {
                    return o(M() % 12 || 12)
                  },
                  H: function () {
                    return M()
                  },
                  HH: function () {
                    return o(M())
                  },
                  M: function () {
                    return y()
                  },
                  MM: function () {
                    return o(y())
                  },
                  s: function () {
                    return b()
                  },
                  ss: function () {
                    return o(b())
                  },
                  l: function () {
                    return o(Z(), 3)
                  },
                  L: function () {
                    return o(Math.floor(Z() / 10))
                  },
                  t: function () {
                    return M() < 12 ? c.i18n.timeNames[0] : c.i18n.timeNames[1]
                  },
                  tt: function () {
                    return M() < 12 ? c.i18n.timeNames[2] : c.i18n.timeNames[3]
                  },
                  T: function () {
                    return M() < 12 ? c.i18n.timeNames[4] : c.i18n.timeNames[5]
                  },
                  TT: function () {
                    return M() < 12 ? c.i18n.timeNames[6] : c.i18n.timeNames[7]
                  },
                  Z: function () {
                    return n
                      ? 'GMT'
                      : a
                      ? 'UTC'
                      : (String(e).match(l) || [''])
                          .pop()
                          .replace(i, '')
                          .replace(/GMT\+0000/g, 'UTC')
                  },
                  o: function () {
                    return (
                      (E() > 0 ? '-' : '+') +
                      o(
                        100 * Math.floor(Math.abs(E()) / 60) +
                          (Math.abs(E()) % 60),
                        4
                      )
                    )
                  },
                  p: function () {
                    return (
                      (E() > 0 ? '-' : '+') +
                      o(Math.floor(Math.abs(E()) / 60), 2) +
                      ':' +
                      o(Math.floor(Math.abs(E()) % 60), 2)
                    )
                  },
                  S: function () {
                    return ['th', 'st', 'nd', 'rd'][
                      p() % 10 > 3
                        ? 0
                        : (((p() % 100) - (p() % 10) != 10) * p()) % 10
                    ]
                  },
                  W: function () {
                    return v()
                  },
                  WW: function () {
                    return o(v())
                  },
                  N: function () {
                    return d(e)
                  },
                }
              return t.replace(r, function (e) {
                return e in x ? x[e]() : e.slice(1, e.length - 1)
              })
            })
        ;(c.masks = {
          default: 'ddd mmm dd yyyy HH:MM:ss',
          shortDate: 'm/d/yy',
          paddedShortDate: 'mm/dd/yyyy',
          mediumDate: 'mmm d, yyyy',
          longDate: 'mmmm d, yyyy',
          fullDate: 'dddd, mmmm d, yyyy',
          shortTime: 'h:MM TT',
          mediumTime: 'h:MM:ss TT',
          longTime: 'h:MM:ss TT Z',
          isoDate: 'yyyy-mm-dd',
          isoTime: 'HH:MM:ss',
          isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z',
        }),
          (c.i18n = {
            dayNames: [
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            monthNames: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
          })
        var o = function (e, t) {
            for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e
            return e
          },
          L = function (e) {
            var t = e.y,
              a = e.m,
              n = e.d,
              r = e._,
              l = e.dayName,
              i = e.short,
              C = void 0 !== i && i,
              c = new Date(),
              o = new Date()
            o.setDate(o[r + 'Date']() - 1)
            var L = new Date()
            L.setDate(L[r + 'Date']() + 1)
            return c[r + 'FullYear']() === t &&
              c[r + 'Month']() === a &&
              c[r + 'Date']() === n
              ? C
                ? 'Tdy'
                : 'Today'
              : o[r + 'FullYear']() === t &&
                o[r + 'Month']() === a &&
                o[r + 'Date']() === n
              ? C
                ? 'Ysd'
                : 'Yesterday'
              : L[r + 'FullYear']() === t &&
                L[r + 'Month']() === a &&
                L[r + 'Date']() === n
              ? C
                ? 'Tmw'
                : 'Tomorrow'
              : l
          },
          s = function (e) {
            var t = new Date(e.getFullYear(), e.getMonth(), e.getDate())
            t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3)
            var a = new Date(t.getFullYear(), 0, 4)
            a.setDate(a.getDate() - ((a.getDay() + 6) % 7) + 3)
            var n = t.getTimezoneOffset() - a.getTimezoneOffset()
            t.setHours(t.getHours() - n)
            var r = (t - a) / 6048e5
            return 1 + Math.floor(r)
          },
          d = function (e) {
            var t = e.getDay()
            return 0 === t && (t = 7), t
          },
          h = function (e) {
            return null === e
              ? 'null'
              : void 0 === e
              ? 'undefined'
              : 'object' !== a(e)
              ? a(e)
              : Array.isArray(e)
              ? 'array'
              : {}.toString.call(e).slice(8, -1).toLowerCase()
          }
        'object' === a(t) ? (e.exports = c) : (n.dateFormat = c)
      })(void 0)
    }),
    Re = Formily.ReactiveReact.observer(function () {
      var e = Z(),
        t =
          (null == e ? void 0 : e.activeWorkspace) ||
          (null == e ? void 0 : e.currentWorkspace),
        a = v('history')
      return t
        ? React.createElement(
            'div',
            { className: a },
            t.history.list().map(function (e, n) {
              var r = (e.type || 'default_state').replace(/\:/g, '_')
              return React.createElement(
                'div',
                {
                  className: T(a + '-item', {
                    active: t.history.current === n,
                  }),
                  key: e.timestamp,
                  onClick: function () {
                    t.history.goTo(n)
                  },
                },
                React.createElement(
                  'span',
                  { className: a + '-item-title' },
                  React.createElement(oe, { token: 'operations.'.concat(r) })
                ),
                React.createElement(
                  'span',
                  { className: a + '-item-timestamp' },
                  ' ',
                  ue(e.timestamp, 'yy/mm/dd HH:MM:ss')
                )
              )
            })
          )
        : null
    }),
    ge = Formily.ReactiveReact.observer(function (e) {
      var t,
        a = _(e.workspaceId),
        n = b(e.workspaceId),
        r = g(e.workspaceId),
        l = v('node-path')
      if (!a) return React.createElement(React.Fragment, null)
      var i = null !== (t = e.maxItems) && void 0 !== t ? t : 3,
        C = a
          .getParents()
          .slice(0, i - 1)
          .reverse()
          .concat(a)
      return React.createElement(
        Antd.Breadcrumb,
        { className: l },
        C.map(function (e, t) {
          return React.createElement(
            Antd.Breadcrumb.Item,
            { key: t },
            0 === t &&
              React.createElement(I, {
                infer: 'Position',
                style: { marginRight: 3 },
              }),
            React.createElement(
              'a',
              {
                href: '',
                onMouseEnter: function () {
                  r.setHover(e)
                },
                onClick: function (t) {
                  t.stopPropagation(), t.preventDefault(), n.select(e)
                },
              },
              React.createElement(V, { node: e })
            )
          )
        })
      )
    }),
    Me = Formily.ReactiveReact.observer(function (e) {
      var t = R(),
        a = v('node-actions')
      return -1 === S().indexOf(t.id) && e.activeShown
        ? null
        : React.createElement(
            'div',
            { className: T(a, e.className), style: e.style },
            React.createElement(
              'div',
              { className: a + '-content' },
              React.createElement(
                Antd.Space,
                {
                  split: React.createElement(Antd.Divider, {
                    type: 'vertical',
                  }),
                },
                e.children
              )
            )
          )
    })
  Me.Action = function (e) {
    var n = e.icon,
      r = e.title,
      l = a(e, ['icon', 'title']),
      i = v('node-actions-item')
    return React.createElement(
      Antd.Typography.Link,
      t({}, l, {
        className: T(l.className, i),
        'data-click-stop-propagation': 'true',
      }),
      React.createElement(
        'span',
        { className: i + '-text' },
        React.createElement(I, { infer: n }),
        React.createElement(oe, null, r)
      )
    )
  }
  var ye = Formily.ReactiveReact.observer(function (e) {
    var n,
      r = e.node,
      l = e.actions,
      i = e.height,
      C = e.placeholder,
      c = e.style,
      o = e.className,
      L = e.hasChildren,
      s = a(e, [
        'node',
        'actions',
        'height',
        'placeholder',
        'style',
        'className',
        'hasChildren',
      ]),
      d = R(),
      h = k(r),
      m = null != r ? r : d,
      f =
        null != L
          ? L
          : (null === (n = m.children) || void 0 === n ? void 0 : n.length) > 0
    return React.createElement(
      'div',
      t({}, h, s, { className: o, style: c }),
      f
        ? s.children
        : C
        ? React.createElement(
            'div',
            { style: { height: i }, className: 'dn-droppable-placeholder' },
            React.createElement(V, { node: m })
          )
        : s.children,
      (null == l ? void 0 : l.length)
        ? React.createElement(
            Me,
            null,
            l.map(function (e, a) {
              return React.createElement(Me.Action, t({}, e, { key: a }))
            })
          )
        : null
    )
  })
  ye.defaultProps = { placeholder: !0 }
  var be = React.createElement('path', {
      d: 'M192 256.16C192 220.736 220.704 192 256.16 192h639.68C931.264 192 960 220.704 960 256.16v639.68A64.16 64.16 0 0 1 895.84 960H256.16A64.16 64.16 0 0 1 192 895.84V256.16z m64 31.584v576.512a32 32 0 0 0 31.744 31.744h576.512a32 32 0 0 0 31.744-31.744V287.744A32 32 0 0 0 864.256 256H287.744A32 32 0 0 0 256 287.744zM288 192v64h64V192H288z m128 0v64h64V192h-64z m128 0v64h64V192h-64z m128 0v64h64V192h-64z m128 0v64h64V192h-64z m96 96v64h64V288h-64z m0 128v64h64v-64h-64z m0 128v64h64v-64h-64z m0 128v64h64v-64h-64z m0 128v64h64v-64h-64z m-96 96v64h64v-64h-64z m-128 0v64h64v-64h-64z m-128 0v64h64v-64h-64z m-128 0v64h64v-64h-64z m-128 0v64h64v-64H288z m-96-96v64h64v-64H192z m0-128v64h64v-64H192z m0-128v64h64v-64H192z m0-128v64h64v-64H192z m0-128v64h64V288H192z m160 416c0-17.664 14.592-32 32.064-32h319.872a31.968 31.968 0 1 1 0 64h-319.872A31.968 31.968 0 0 1 352 704z m0-128c0-17.664 14.4-32 32.224-32h383.552c17.792 0 32.224 14.208 32.224 32 0 17.664-14.4 32-32.224 32H384.224A32.032 32.032 0 0 1 352 576z m0-128c0-17.664 14.4-32 32.224-32h383.552c17.792 0 32.224 14.208 32.224 32 0 17.664-14.4 32-32.224 32H384.224A32.032 32.032 0 0 1 352 448z m512 47.936V192h-64V159.968A31.776 31.776 0 0 0 768.032 128H160A31.776 31.776 0 0 0 128 159.968V768c0 17.92 14.304 31.968 31.968 31.968H192v64h303.936H128.128A63.968 63.968 0 0 1 64 799.872V128.128C64 92.704 92.48 64 128.128 64h671.744C835.296 64 864 92.48 864 128.128v367.808z',
    }),
    Ze = React.createElement('path', {
      d: 'M120,244 C142.09139,244 160,261.90861 160,284 L160,284 L160,784 C160,827.8 195.1,863.3 238.7,864 L238.7,864 L740,864 C762.09139,864 780,881.90861 780,904 C780,926.09139 762.09139,944 740,944 L740,944 L200,944 C133.7,944 80,890.3 80,824 L80,824 L80,284 L80.0053589,283.338527 C80.3585905,261.552229 98.1295239,244 120,244 Z M804,100 C870.27417,100 924,153.72583 924,220 L924,660 C924,726.27417 870.27417,780 804,780 L364,780 C297.72583,780 244,726.27417 244,660 L244,220 C244,153.72583 297.72583,100 364,100 L804,100 Z M764,180 L404,180 C360.259048,180 324.717181,215.104457 324.010718,258.677054 L324,260 L324,620 C324,663.740952 359.104457,699.282819 402.677054,699.989282 L404,700 L764,700 C807.740952,700 843.282819,664.895543 843.989282,621.322946 L844,620 L844,260 C844,215.81722 808.18278,180 764,180 Z',
    }),
    Ee = React.createElement('path', {
      d: 'M783.5648 437.4528h-18.0224V336.6912c0-43.8272-35.6352-79.4624-79.4624-79.4624h-110.592V241.664c0-90.9312-73.728-164.6592-164.6592-164.6592-90.9312 0-164.6592 73.728-164.6592 164.6592v15.5648H155.2384c-43.8272 0-79.4624 35.6352-79.4624 79.4624v131.4816c0 16.7936 13.9264 30.72 30.72 30.72h56.1152c56.9344 0 103.2192 46.2848 103.2192 103.2192s-46.2848 103.2192-103.2192 103.2192H106.496c-16.7936 0-30.72 13.9264-30.72 30.72v131.4816c0 43.8272 35.6352 79.4624 79.4624 79.4624h531.2512c43.8272 0 79.4624-35.6352 79.4624-79.4624v-100.7616h18.0224c90.9312 0 164.6592-73.728 164.6592-164.6592-0.4096-90.9312-74.1376-164.6592-165.0688-164.6592z m0 267.8784h-48.7424c-16.7936 0-30.72 13.9264-30.72 30.72v131.4816c0 9.8304-8.192 18.0224-18.0224 18.0224H155.2384c-9.8304 0-18.0224-8.192-18.0224-18.0224v-100.7616h25.3952c90.9312 0 164.6592-73.728 164.6592-164.6592 0-90.9312-73.728-164.6592-164.6592-164.6592h-25.3952V336.6912c0-9.8304 8.192-18.0224 18.0224-18.0224h121.6512c16.7936 0 30.72-13.9264 30.72-30.72V241.664c0-56.9344 46.2848-103.2192 103.2192-103.2192s103.2192 46.2848 103.2192 103.2192v46.2848c0 16.7936 13.9264 30.72 30.72 30.72h141.312c9.8304 0 18.0224 8.192 18.0224 18.0224v131.4816c0 16.7936 13.9264 30.72 30.72 30.72h48.7424c56.9344 0 103.2192 46.2848 103.2192 103.2192s-46.2848 103.2192-103.2192 103.2192z',
    }),
    ve = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M800 800h64v64h-64v-64z m-128 0h64v64h-64v-64z m-128 0h64v64h-64v-64z m-128 0h64v64h-64v-64z m-256 0h64v64h-64v-64z m0-640h64v64h-64v-64z m128 640h64v64h-64v-64zM160 672h64v64h-64v-64z m0-128h64v64h-64v-64z m0-128h64v64h-64v-64z m0-128h64v64h-64v-64z m640 384h64v64h-64v-64z m0-128h64v64h-64v-64z m0-128h64v64h-64v-64z m0-128h64v64h-64v-64z m0-128h64v64h-64v-64z m-128 0h64v64h-64v-64z m-128 0h64v64h-64v-64z m-128 0h64v64h-64v-64z m-128 0h64v64h-64v-64z',
      }),
      React.createElement('path', {
        d: 'M896 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v704z',
      })
    ),
    xe = React.createElement('path', {
      d: 'M183.423543 657.078213l163.499771-98.484012c-4.233418-14.908548-6.646374-30.585599-6.646374-46.852074 0-94.665033 76.739778-171.404812 171.404812-171.404812 45.983287 0 87.641059 18.20871 118.42518 47.679929l129.791042-78.17957c-73.254398-41.73145-157.866471-65.812915-248.216221-65.812915-192.742792 0-360.068705 108.505249-444.453604 267.715321C96.636944 567.228859 136.301316 616.355743 183.423543 657.078213zM841.253886 367.552144l-164.382884 99.015108c3.934612 14.415314 6.215562 29.513174 6.215562 45.174875 0 94.665033-76.739778 171.404812-171.404812 171.404812-45.361117 0-86.484723-17.747199-117.142977-46.515407l-129.419582 77.955466c72.874751 41.149189 156.893306 64.871473 246.563582 64.871473 192.742792 0 360.068705-108.505249 444.453604-267.717368C927.000805 456.773188 887.794875 408.054603 841.253886 367.552144zM420.280042 511.741104c0 0.550539 0.152473 1.060145 0.161682 1.608637l135.080511-81.366146c-13.065574-7.198959-27.854395-11.658528-43.826158-11.658528C461.20922 420.325068 420.280042 461.254246 420.280042 511.741104zM447.739441 576.947198l69.02098-41.574884L948.364369 275.395234c10.812253-6.512321 14.297634-20.558222 7.785314-31.369452-6.512321-10.812253-20.556175-14.296611-31.368428-7.785314L575.654762 446.537056l0 0-151.20577 91.078345 0 0L75.027787 748.090043c-10.812253 6.512321-14.297634 20.556175-7.785314 31.368428 6.512321 10.812253 20.556175 14.297634 31.369452 7.785314L447.739441 576.947198 447.739441 576.947198zM511.696078 603.157139c50.487881 0 91.416036-40.928155 91.416036-91.416036 0-0.549515-0.152473-1.057075-0.161682-1.605567l-135.079488 81.364099C480.935494 598.699618 495.724315 603.157139 511.696078 603.157139z',
    }),
    ze = React.createElement(
      'svg',
      { viewBox: '0 0 1024 1024' },
      React.createElement('path', {
        d: 'M381.6 864H162.4c-6.9 0-12.4 4.6-12.4 10.3v19.3c0 5.7 5.6 10.3 12.4 10.3h219.1c6.8 0 12.4-4.6 12.4-10.3v-19.3c0.1-5.7-5.5-10.3-12.3-10.3zM382 780.6H162c-6.9 0-12.5 4.6-12.5 10.3v19.3c0 5.7 5.6 10.3 12.5 10.3h220c6.9 0 12.5-4.6 12.5-10.3v-19.3c0-5.7-5.6-10.3-12.5-10.3zM162.4 737.2h219.1c6.8 0 12.4-4.6 12.4-10.3v-19.3c0-5.7-5.6-10.3-12.4-10.3H162.4c-6.9 0-12.4 4.6-12.4 10.3v19.3c0 5.7 5.6 10.3 12.4 10.3z',
      }),
      React.createElement('path', {
        d: 'M977.1 0H46.9C21 0 0 21 0 46.9v930.2c0 25.9 21 46.9 46.9 46.9h930.2c25.9 0 46.9-21 46.9-46.9V46.9C1024 21 1003 0 977.1 0z m-18.7 911.6c0 25.9-21 46.9-46.9 46.9H112.4c-25.9 0-46.9-21-46.9-47V112.4c0-25.9 21-46.9 46.9-46.9h799.1c25.9 0 46.9 21 46.9 46.9v799.2z',
      }),
      React.createElement('path', {
        d: 'M207.9 342.7h608.2c32 0 57.9-25.9 57.9-57.9v-83c0-32-25.9-57.9-57.9-57.9H207.9c-32 0-57.9 25.9-57.9 57.9v83c0 32 25.9 57.9 57.9 57.9zM200 201.8c0-4.4 3.5-7.9 7.9-7.9h608.2c4.4 0 7.9 3.5 7.9 7.9v83c0 4.4-3.5 7.9-7.9 7.9H207.9c-4.4 0-7.9-3.5-7.9-7.9v-83zM806.4 405.7h-277c-37.3 0-67.6 30.2-67.6 67.6v363.2c0 37.3 30.2 67.6 67.6 67.6h277c37.3 0 67.6-30.2 67.6-67.6V473.3c0-37.4-30.2-67.6-67.6-67.6zM824 836.4c0 9.7-7.9 17.6-17.6 17.6h-277c-9.7 0-17.6-7.9-17.6-17.6V473.3c0-9.7 7.9-17.6 17.6-17.6h277c9.7 0 17.6 7.9 17.6 17.6v363.1zM272 649.7c67.4 0 122-54.6 122-122s-54.6-122-122-122-122 54.6-122 122 54.6 122 122 122z m0-204c45.2 0 82 36.8 82 82s-36.8 82-82 82-82-36.8-82-82 36.8-82 82-82z',
      })
    ),
    we = React.createElement('path', {
      d: 'M224 256v639.84A64 64 0 0 0 287.84 960h448.32A64 64 0 0 0 800 895.84V256h64a32 32 0 1 0 0-64H160a32 32 0 1 0 0 64h64zM384 96c0-17.664 14.496-32 31.904-32h192.192C625.696 64 640 78.208 640 96c0 17.664-14.496 32-31.904 32H415.904A31.872 31.872 0 0 1 384 96z m-96 191.744C288 270.208 302.4 256 320.224 256h383.552C721.6 256 736 270.56 736 287.744v576.512C736 881.792 721.6 896 703.776 896H320.224A32.224 32.224 0 0 1 288 864.256V287.744zM352 352c0-17.696 14.208-32.032 32-32.032 17.664 0 32 14.24 32 32v448c0 17.664-14.208 32-32 32-17.664 0-32-14.24-32-32V352z m128 0c0-17.696 14.208-32.032 32-32.032 17.664 0 32 14.24 32 32v448c0 17.664-14.208 32-32 32-17.664 0-32-14.24-32-32V352z m128 0c0-17.696 14.208-32.032 32-32.032 17.664 0 32 14.24 32 32v448c0 17.664-14.208 32-32 32-17.664 0-32-14.24-32-32V352z',
    }),
    ke = React.createElement('path', {
      d: 'M512,12 C582.636164,12 639.898089,69.261925 639.898089,139.892574 L639.898349,141.781694 C654.742486,146.909017 669.244536,152.924618 683.334385,159.790219 L684.678178,158.446609 C734.625489,108.499299 815.60608,108.499299 865.553391,158.446609 C914.944885,207.838104 915.554206,287.697419 867.027692,337.823433 L865.781597,339.091759 L864.209781,340.665615 C871.075392,354.755482 877.090999,369.257552 882.218326,384.101709 L884.101911,384.101911 C954.738075,384.101911 1012,441.363836 1012,512 C1012,581.850122 955.961792,638.750039 886.20392,639.881057 L884.266694,639.898067 L882.218306,639.898349 C877.090983,654.742486 871.075382,669.244536 864.209781,683.334385 L865.553391,684.678178 C915.500701,734.625489 915.500701,815.60608 865.553391,865.553391 C816.161896,914.944885 736.302581,915.554206 686.176567,867.027692 L684.908241,865.781597 L683.334385,864.209781 C669.244536,871.075382 654.742486,877.090983 639.898349,882.218306 L639.898089,884.101911 C639.898089,954.738075 582.636164,1012 512,1012 C442.149878,1012 385.249961,955.961792 384.118943,886.20392 L384.101928,884.266076 L384.101709,882.218326 C369.257552,877.090998 354.755482,871.075391 340.665615,864.209781 L339.321822,865.553391 C289.374511,915.500701 208.39392,915.500701 158.446609,865.553391 C108.499299,815.60608 108.499299,734.625489 158.444679,684.680108 L159.790219,683.334385 C152.924618,669.244536 146.909017,654.742486 141.781694,639.898349 L139.898089,639.898089 C69.261925,639.898089 12,582.636164 12,512 C12,441.363836 69.261925,384.101911 139.893809,384.101911 L141.781674,384.101709 C146.909002,369.257552 152.924609,354.755482 159.790219,340.665615 L158.446609,339.321822 C108.499299,289.374511 108.499299,208.39392 158.446609,158.446609 C208.39392,108.499299 289.374511,108.499299 339.319892,158.444679 L340.665615,159.790219 C354.115034,153.236682 367.940034,147.457631 382.079633,142.486357 L384.101709,141.781674 L384.101911,139.898089 C384.101911,69.261925 441.363836,12 512,12 Z M512,92 C485.546616,92 464.101911,113.444705 464.101911,139.902369 L464.095214,202.494122 L434.069257,210.22259 C405.791983,217.500958 378.786083,228.726636 353.744632,243.523454 L327.044529,259.300358 L282.753279,215.015152 C264.047912,196.309785 233.720519,196.309785 215.015152,215.015152 C196.309785,233.720519 196.309785,264.047912 215.017082,282.755209 L259.300358,327.044529 L243.523454,353.744632 C228.726636,378.786083 217.500958,405.791983 210.22259,434.069257 L202.494122,464.095214 L139.898089,464.101911 C113.444705,464.101911 92,485.546616 92,512 C92,538.453384 113.444705,559.898089 139.903605,559.89809 L202.494528,559.90672 L210.222812,589.931607 C217.501187,618.208568 228.726787,645.214173 243.523454,670.255368 L259.300358,696.955471 L215.015152,741.246721 C196.309785,759.952088 196.309785,790.279481 215.015152,808.984848 C233.720519,827.690215 264.047912,827.690215 282.755209,808.982918 L327.044529,764.699642 L353.744632,780.476546 C378.786083,795.273364 405.791983,806.499042 434.069257,813.77741 L464.095214,821.505878 L464.101893,883.937746 L464.110865,885.045091 C464.606855,911.08442 485.890111,932 512,932 C538.453384,932 559.898089,910.555295 559.89809,884.096395 L559.90672,821.505472 L589.931607,813.777188 C618.208568,806.498813 645.214173,795.273213 670.255368,780.476546 L696.955471,764.699642 L741.131179,808.869322 L741.919981,809.645446 C760.683285,827.707314 790.522368,827.447328 808.984848,808.984848 C827.690215,790.279481 827.690215,759.952088 808.982918,741.244791 L764.699642,696.955471 L780.476546,670.255368 C795.273213,645.214173 806.498813,618.208568 813.777188,589.931607 L821.505472,559.90672 L883.937128,559.898112 L885.045091,559.889135 C911.08442,559.393145 932,538.109889 932,512 C932,485.546616 910.555295,464.101911 884.097631,464.101911 L821.505878,464.095214 L813.77741,434.069257 C806.499042,405.791983 795.273364,378.786083 780.476546,353.744632 L764.699642,327.044529 L808.869322,282.868821 L809.645446,282.080019 L810.181805,281.51382 C827.700294,262.721071 827.262703,233.293007 808.984848,215.015152 C790.279481,196.309785 759.952088,196.309785 741.244791,215.017082 L696.955471,259.300358 L670.255368,243.523454 C645.214173,228.726787 618.208568,217.501187 589.931607,210.222812 L559.90672,202.494528 L559.898089,139.898089 C559.898089,113.444705 538.453384,92 512,92 Z M512,313 C621.904665,313 711,402.095335 711,512 C711,621.904665 621.904665,711 512,711 C402.095335,711 313,621.904665 313,512 C313,402.095335 402.095335,313 512,313 Z M512,393 C446.278115,393 393,446.278115 393,512 C393,577.721885 446.278115,631 512,631 C577.721885,631 631,577.721885 631,512 C631,446.278115 577.721885,393 512,393 Z',
    }),
    De = React.createElement(
      'svg',
      { viewBox: '0 0 1024 1024' },
      React.createElement('path', {
        d: 'M629.44 291.712V0S0 394.56 0 458.24c0 63.744 629.44 416.64 629.44 416.64V625.088s289.344 4.672 370.304 374.976c84.48-279.104-54.912-693.824-370.304-708.352z m176.768 337.92c-91.392-52.544-172.736-54.464-176.064-54.592l-47.232-0.704V792.192c-229.76-131.2-461.568-275.584-525.44-334.72 62.848-62.912 294.656-222.848 525.44-369.984v252.096l44.544 2.048c132.352 6.144 214.144 90.944 259.52 161.024 55.488 85.952 86.912 195.52 90.432 303.232-51.584-91.328-116.8-144.96-171.2-176.256z',
      })
    ),
    Se = React.createElement('path', {
      d: 'M394.59392 291.712V0S1024.03392 394.56 1024.03392 458.24c0 63.744-629.44 416.64-629.44 416.64V625.088S105.24992 629.76 24.28992 1000.064c-84.48-279.104 54.912-693.824 370.304-708.352z m-176.768 337.92c91.392-52.544 172.736-54.464 176.064-54.592l47.232-0.704V792.192c229.76-131.2 461.568-275.584 525.44-334.72-62.848-62.912-294.656-222.848-525.44-369.984v252.096l-44.544 2.048c-132.352 6.144-214.144 90.944-259.52 161.024C81.56992 588.608 50.14592 698.24 46.62592 805.888c51.584-91.328 116.8-144.96 171.2-176.256z',
    }),
    _e = React.createElement(
      'svg',
      { viewBox: '0 0 1224 1024' },
      React.createElement('path', {
        d: 'M1151.216941 978.462118H33.370353c-26.021647 0-26.021647-14.697412-26.021647-29.394824s0-29.394824 26.021647-29.394823h1117.846588c26.021647 0 52.043294 14.697412 52.043294 29.394823s-26.021647 29.394824-52.043294 29.394824zM58.789647 749.266824c0 29.394824 14.697412 44.092235 44.032 44.092235h999.062588c29.334588 0 44.032-14.697412 44.032-44.092235V102.821647c0-29.334588-14.697412-44.032-44.032-44.032H102.821647c-29.334588 0-44.032 14.697412-44.032 44.032V749.327059z m1145.916235 0c0 58.789647-44.092235 102.821647-102.821647 102.821647H102.821647C44.092235 852.088471 0 808.056471 0 749.327059V102.821647C0 44.092235 44.092235 0 102.821647 0h999.062588C1160.613647 0 1204.705882 44.092235 1204.705882 102.821647V749.327059z',
      })
    ),
    Ne = React.createElement(
      'svg',
      { viewBox: '0 0 1024 1024' },
      React.createElement('path', {
        d: 'M505.685333 816.64c-28.586667 0-51.882667 23.253333-51.882666 51.882667 0 28.586667 23.253333 51.882667 51.882666 51.882666 28.586667 0 51.882667-23.253333 51.882667-51.882666 0-28.586667-23.296-51.882667-51.882667-51.882667z',
      }),
      React.createElement('path', {
        d: 'M762.368 0H249.002667A78.421333 78.421333 0 0 0 170.666667 78.336v861.525333c0 43.178667 35.114667 78.336 78.336 78.336h513.365333a78.421333 78.421333 0 0 0 78.293333-78.336V78.336A78.421333 78.421333 0 0 0 762.368 0zM249.002667 52.224h513.365333c14.378667 0 26.112 11.690667 26.112 26.112v645.461333H222.890667V78.336c0-14.421333 11.690667-26.112 26.112-26.112zM762.368 965.973333H249.002667a26.154667 26.154667 0 0 1-26.112-26.112v-159.402666H788.48v159.402666a26.154667 26.154667 0 0 1-26.112 26.112z',
      })
    ),
    Fe = React.createElement(
      'svg',
      { viewBox: '0 0 1200 1024' },
      React.createElement('path', {
        d: 'M420.444699 238.915368h320.727579c40.96 0 71.141053 17.785263 89.249684 54.541474 6.790737 13.635368 9.162105 28.456421 8.892632 43.870316-0.323368 85.692632 0 171.924211 0 257.616842v138.725053c0 57.775158-40.043789 98.088421-98.088421 98.088421-214.069895 0.269474-428.085895 0-641.778527 0-43.600842 0-78.848-23.390316-93.07621-61.386106a101.645474 101.645474 0 0 1-6.25179-35.247157c0-132.796632-0.269474-265.593263 0-398.389895 0-56.589474 41.822316-97.818947 99.004632-97.818948h321.320421z m0.592842 542.72c107.034947 0 214.339368-0.269474 321.320421 0.323369a47.481263 47.481263 0 0 0 49.25979-49.205895c-0.323368-132.203789-0.323368-264.084211-0.323369-396.341895 0-30.504421-18.701474-49.475368-49.529263-49.475368H99.178173c-29.911579 0-48.882526 18.378105-48.882527 48.343579-0.323368 132.473263 0 265.269895 0 397.743158 0 7.706947 0.538947 15.144421 4.149895 22.258526 9.485474 18.378105 24.576 26.677895 45.325474 26.677895 107.034947-0.269474 214.339368-0.269474 321.320421-0.269474z',
        'p-id': '2492',
      }),
      React.createElement('path', {
        d: 'M1185.803857 474.866526v380.01179c0 26.677895-8.623158 49.475368-31.097263 65.536a72.650105 72.650105 0 0 1-43.870316 13.635368c-69.093053 0.269474-138.132211 0-207.494737 0-10.671158 0-14.821053-4.473263-15.090526-15.144421a221.884632 221.884632 0 0 1 0-19.887158c0.269474-10.078316 4.688842-14.497684 15.090526-14.767158 14.228211-0.323368 28.133053 0 42.361263 0h161.253053c20.156632 0 28.779789-8.623158 28.779789-28.779789 0-34.654316-0.323368-69.362526 0.269474-104.016842 0-5.928421-2.048-7.437474-7.706947-7.437474-74.374737 0.269474-148.48 0.269474-222.908632 0.269474-15.090526 0-18.647579-3.233684-18.647579-18.647579 0-5.066105-0.323368-10.401684 0-15.737263 0.269474-10.617263 4.742737-15.090526 15.090526-15.090527h5.658948c73.512421 0 146.701474 0 220.213895 0.323369 6.251789 0 8.299789-1.185684 8.299789-8.030316-0.269474-197.416421-0.269474-394.832842-0.269474-592.249263 0-7.114105-0.323368-14.228211-4.742737-20.48a23.821474 23.821474 0 0 0-20.48-10.617263H736.213962c-22.528 0-31.744 9.162105-31.744 31.690105v80.033684c0 12.773053-4.149895 16.922947-16.869053 17.192421-6.521263 0-13.365895 0.269474-19.887157-0.323368-8.623158-0.538947-12.719158-4.688842-12.719158-12.988632-0.323368-31.744-1.185684-63.757474 0.538947-95.447579A73.296842 73.296842 0 0 1 729.962173 14.228211c126.868211-0.323368 254.059789-0.323368 380.604631 0 43.870316 0.323368 74.698105 33.792 74.698105 80.033684 0.916211 126.868211 0.592842 253.736421 0.592843 380.604631z m-765.305263 457.943579H19.952909c-16.006737 0-19.563789-3.557053-19.563789-19.563789 0-5.012211-0.323368-10.347789 0-15.683369 0.538947-9.754947 5.012211-13.958737 14.821053-14.551579h804.75621c2.101895 0 4.149895-0.269474 6.25179 0 8.299789 0.592842 12.719158 4.742737 13.042526 13.042527 0.538947 8.030316 0.269474 16.006737 0 24.037052-0.323368 8.030316-4.742737 11.587368-12.449684 12.449685-2.964211 0.269474-5.658947 0.269474-8.623158 0.269473h-397.743158z',
        'p-id': '2493',
      }),
      React.createElement('path', {
        d: 'M954.002594 813.056a33.792 33.792 0 0 1-32.87579 32.929684c-17.785263 0-32.875789-15.090526-33.199158-32.875789 0-18.108632 15.413895-33.253053 33.468632-33.253053 18.108632 0.323368 32.606316 15.144421 32.606316 33.199158z',
        'p-id': '2494',
      })
    ),
    Ae = React.createElement('path', {
      d: 'M664.576 792.533333l-124.416 124.16v-256.981333h-55.296v258.389333L360.533333 793.6l-36.096 36.138667 187.264 187.349333 189.013334-188.373333-36.138667-36.224zM483.84 107.306667v256.981333h55.296V105.898667L663.466667 230.4l36.096-36.138667L512.298667 6.869333l-189.013334 188.373334 36.138667 36.224 124.416-124.16zM230.272 360.533333l-36.096-36.138666-187.392 187.264 188.416 189.013333 36.224-36.138667-124.032-124.330666h256.853333v-55.253334H105.941333l124.330667-124.458666z m598.528-37.162666l-36.224 36.096 124.032 124.330666h-256.853333v55.253334h258.304l-124.330667 124.458666 36.096 36.096 187.392-187.264-188.416-189.013333z',
    }),
    Te = React.createElement(
      'svg',
      { viewBox: '0 0 1024 1024' },
      React.createElement('path', {
        d: 'M469.333333 938.666667c-17.066667 0-29.866667-8.533333-42.666666-17.066667l-209.066667-179.2 29.866667-34.133333c8.533333-8.533333 21.333333-12.8 29.866666-12.8h8.533334L426.666667 768V341.333333c0-25.6 17.066667-42.666667 42.666666-42.666666s42.666667 17.066667 42.666667 42.666666v192l51.2 4.266667 209.066667 93.866667c21.333333 8.533333 38.4 34.133333 38.4 55.466666v187.733334c0 34.133333-29.866667 64-64 64H469.333333z m128-640V42.666667l128 128-128 128z m0-85.333334H341.333333v85.333334L213.333333 170.666667l128-128v85.333333h256v85.333333z',
        'p-id': '13294',
        fill: '#ffffff',
      })
    ),
    Be = React.createElement('path', {
      d: 'M180.992 202.837333V54.144c0-8.917333-4.778667-17.066667-12.373333-21.546667a25.173333 25.173333 0 0 0-24.832 0 24.96 24.96 0 0 0-12.373334 21.461334V202.666667c0 8.832 4.650667 17.066667 12.373334 21.461333 7.594667 4.437333 17.066667 4.437333 24.832 0a24.661333 24.661333 0 0 0 12.373333-21.333333z m0 231.253334V285.44c0-8.832-4.693333-17.066667-12.373333-21.418667a24.661333 24.661333 0 0 0-24.832 0 24.96 24.96 0 0 0-12.373334 21.418667v148.693333c0 8.789333 4.650667 17.066667 12.373334 21.418667a24.832 24.832 0 0 0 37.205333-21.461333z m0 231.338666V516.693333c0-8.832-4.693333-17.066667-12.373333-21.461333a24.661333 24.661333 0 0 0-24.832 0 24.96 24.96 0 0 0-12.373334 21.461333v148.693334c0 8.789333 4.650667 17.066667 12.373334 21.418666 7.594667 4.48 17.066667 4.48 24.832 0a24.704 24.704 0 0 0 12.373333-21.418666z m0 231.381334v-148.778667c0-8.832-4.693333-17.066667-12.373333-21.461333a24.661333 24.661333 0 0 0-24.832 0 24.96 24.96 0 0 0-12.373334 21.461333v148.778667c0 8.832 4.650667 17.066667 12.373334 21.461333 7.594667 4.437333 17.066667 4.437333 24.832 0a24.96 24.96 0 0 0 12.373333-21.461333zM875.861333 202.837333V54.144c0-8.789333-4.693333-17.066667-12.373333-21.418667a24.661333 24.661333 0 0 0-24.874667 0 24.96 24.96 0 0 0-12.373333 21.418667v148.693333c0 8.832 4.693333 17.066667 12.373333 21.418667 7.68 4.48 17.109333 4.48 24.832 0a24.96 24.96 0 0 0 12.373334-21.418667z m0 231.253334V285.44c0-8.832-4.693333-17.066667-12.373333-21.418667a24.661333 24.661333 0 0 0-24.874667 0 24.96 24.96 0 0 0-12.373333 21.418667v148.693333c0 8.789333 4.693333 17.066667 12.373333 21.418667a24.832 24.832 0 0 0 37.205334-21.461333z m0 231.338666V516.693333c0-8.832-4.693333-17.066667-12.373333-21.461333a24.661333 24.661333 0 0 0-24.874667 0 24.96 24.96 0 0 0-12.373333 21.461333v148.693334c0 8.789333 4.693333 17.066667 12.373333 21.418666 7.68 4.48 17.109333 4.48 24.832 0a24.704 24.704 0 0 0 12.373334-21.418666z m-331.306666 179.456h148.650666c8.832 0 17.066667-4.693333 21.461334-12.373333a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.461334-12.416h-148.650666c-8.832 0-17.066667 4.693333-21.461334 12.373333a24.661333 24.661333 0 0 0 0 24.832c4.352 7.637333 12.544 12.416 21.461334 12.416z m-231.424 0h148.693333c8.832 0 17.066667-4.693333 21.418667-12.373333a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.418667-12.416H313.130667c-8.789333 0-17.066667 4.693333-21.418667 12.373333a24.661333 24.661333 0 0 0 0 24.832c4.437333 7.637333 12.629333 12.416 21.418667 12.416z m-231.253334 0h148.650667c8.832 0 17.066667-4.693333 21.461333-12.373333a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.461333-12.416H81.834667c-8.789333 0-17.066667 4.693333-21.418667 12.373333a24.661333 24.661333 0 0 0 0 24.832c4.437333 7.637333 12.629333 12.416 21.418667 12.416zM775.808 153.216h148.650667c8.832 0 17.066667-4.693333 21.461333-12.416a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.461333-12.373333h-148.650667c-8.832 0-17.066667 4.693333-21.461333 12.373333a24.661333 24.661333 0 0 0 0 24.832c4.352 7.68 12.501333 12.373333 21.461333 12.373333z m-231.296 0h148.650667c8.832 0 17.066667-4.693333 21.461333-12.416a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.461333-12.373333h-148.650667c-8.832 0-17.066667 4.693333-21.461333 12.373333a24.661333 24.661333 0 0 0 0 24.832c4.352 7.68 12.544 12.373333 21.461333 12.373333z m-231.424 0h148.693333c8.832 0 17.066667-4.693333 21.418667-12.416a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.418667-12.373333H313.130667c-8.789333 0-17.066667 4.693333-21.418667 12.373333a24.746667 24.746667 0 1 0 21.461333 37.205333z m-231.253333 0h148.650666c8.832 0 17.066667-4.693333 21.461334-12.416a24.661333 24.661333 0 0 0 0-24.832 24.96 24.96 0 0 0-21.461334-12.373333H81.834667c-8.789333 0-17.066667 4.693333-21.418667 12.373333a24.746667 24.746667 0 1 0 21.461333 37.205333zM1008.213333 941.781333l-92.842666-90.88 102.656-36.608-306.773334-125.568 126.634667 305.92 37.205333-103.594666 93.397334 91.52 0.085333 0.213333c10.794667 9.685333 27.136 9.813333 37.888 0.213333a28.202667 28.202667 0 0 0 4.266667-37.632 16.341333 16.341333 0 0 0-2.517334-3.584z',
    }),
    Pe = React.createElement('path', {
      d: 'M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z',
    }),
    We = React.createElement('path', {
      d: 'M388.77952 58.069333l91.434667 28.714667a13.056 13.056 0 0 1 6.826666 19.882667L429.654187 190.293333a13.056 13.056 0 0 1-21.546667-14.848l36.394667-52.906666A458.666667 458.666667 0 0 0 187.17952 349.866667c-1.493333 4.096-3.413333 8.448-5.632 13.056-3.84 7.978667-7.552 16.042667-10.965333 24.277333-5.034667 12.970667-9.557333 26.24-13.44 39.722667a13.013333 13.013333 0 0 1-2.090667 4.138666l-3.072 10.112 50.261333-39.978666a13.056 13.056 0 0 1 16.256 20.48l-79.36 63.146666a13.056 13.056 0 0 1-20.309333-5.461333l-35.029333-89.173333a13.056 13.056 0 0 1 24.32-9.6l19.626666 50.133333c5.248-18.304 11.52-36.181333 18.730667-53.546667a484.821333 484.821333 0 0 1 285.866667-278.058666l-51.370667-16.128a13.056 13.056 0 1 1 7.808-24.917334z m494.336 903.253334a18.304 18.304 0 0 1 36.224 0h0.170667v20.906666c0 23.04-18.517333 41.770667-41.344 41.770667H41.38752A41.557333 41.557333 0 0 1 0.000853 982.186667V543.36c0-23.082667 18.517333-41.813333 41.344-41.813333h397.525334v0.170666a18.304 18.304 0 1 1 0 36.224v0.170667H51.62752a15.061333 15.061333 0 0 0-15.104 14.976v419.370667c0 8.277333 6.784 14.933333 15.104 14.933333H867.840853a15.061333 15.061333 0 0 0 15.104-14.933333v-11.136h0.170667zM543.360853 0H982.18752c23.082667 0 41.813333 18.304 41.813333 40.832v816.938667a41.344 41.344 0 0 1-41.813333 40.832H543.360853a41.344 41.344 0 0 1-41.813333-40.832V40.832c0-22.528 18.730667-40.832 41.813333-40.832z m9.728 36.565333a14.933333 14.933333 0 0 0-14.933333 14.933334v795.605333a14.933333 14.933333 0 0 0 14.933333 14.933333h419.370667a14.933333 14.933333 0 0 0 14.933333-14.933333V51.498667a14.933333 14.933333 0 0 0-14.933333-14.933334h-419.370667z m167.893334 747.093334h83.626666a20.906667 20.906667 0 0 1 0 41.813333h-83.626666a20.906667 20.906667 0 0 1 0-41.813333z',
    }),
    He = React.createElement(
      'svg',
      { viewBox: '64 64 896 896' },
      React.createElement('path', {
        d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
      })
    ),
    Ie = React.createElement('path', {
      d: 'M512.002047 771.904425c-10.152221 0.518816-20.442588-2.800789-28.202319-10.598382L77.902254 315.937602c-14.548344-14.618952-14.548344-38.318724 0-52.933583 14.544251-14.614859 38.118156-14.614859 52.662407 0l381.437385 418.531212L893.432269 263.004019c14.544251-14.614859 38.125319-14.614859 52.662407 0 14.552437 14.614859 14.552437 38.314631 0 52.933583L540.205389 761.307066C532.451798 769.103636 522.158361 772.424264 512.002047 771.904425z',
    }),
    Ve = React.createElement(
      'svg',
      { viewBox: '0 0 48 48' },
      React.createElement('path', {
        d: 'M42.5,33 C43.3284271,33 44,33.6715729 44,34.5 C44,35.3284271 43.3284271,36 42.5,36 L5.5,36 C4.67157288,36 4,35.3284271 4,34.5 C4,33.6715729 4.67157288,33 5.5,33 L42.5,33 Z M42.5,22 C43.3284271,22 44,22.6715729 44,23.5 C44,24.3284271 43.3284271,25 42.5,25 L5.5,25 C4.67157288,25 4,24.3284271 4,23.5 C4,22.6715729 4.67157288,22 5.5,22 L42.5,22 Z M42.5,11 C43.3284271,11 44,11.6715729 44,12.5 C44,13.3284271 43.3284271,14 42.5,14 L5.5,14 C4.67157288,14 4,13.3284271 4,12.5 C4,11.6715729 4.67157288,11 5.5,11 L42.5,11 Z',
      })
    ),
    Oe = React.createElement(
      'svg',
      { viewBox: '0 0 48 48' },
      React.createElement('path', {
        d: 'M33.4696754,34.5190296 C34.2981025,34.5190296 34.9696754,35.1906025 34.9696754,36.0190296 C34.9696754,36.8474567 34.2981025,37.5190296 33.4696754,37.5190296 L16.4696754,37.5190296 C15.6412482,37.5190296 14.9696754,36.8474567 14.9696754,36.0190296 C14.9696754,35.1906025 15.6412482,34.5190296 16.4696754,34.5190296 L33.4696754,34.5190296 Z M38.4696754,23.5190296 C39.2981025,23.5190296 39.9696754,24.1906025 39.9696754,25.0190296 C39.9696754,25.8474567 39.2981025,26.5190296 38.4696754,26.5190296 L11.4696754,26.5190296 C10.6412482,26.5190296 9.96967536,25.8474567 9.96967536,25.0190296 C9.96967536,24.1906025 10.6412482,23.5190296 11.4696754,23.5190296 L38.4696754,23.5190296 Z M43.4696754,12.5190296 C44.2981025,12.5190296 44.9696754,13.1906025 44.9696754,14.0190296 C44.9696754,14.8474567 44.2981025,15.5190296 43.4696754,15.5190296 L6.46967536,15.5190296 C5.64124824,15.5190296 4.96967536,14.8474567 4.96967536,14.0190296 C4.96967536,13.1906025 5.64124824,12.5190296 6.46967536,12.5190296 L43.4696754,12.5190296 Z',
        transform:
          'translate(24.969675, 25.019030) rotate(-45.000000) translate(-24.969675, -25.019030) ',
      })
    ),
    Ue = React.createElement(
      'svg',
      {
        viewBox: '64 64 896 896',
        focusable: 'false',
        'data-icon': 'pushpin',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      },
      React.createElement('path', {
        d: 'M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 00-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 00-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 01-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z',
      })
    ),
    Ge = React.createElement(
      'svg',
      {
        viewBox: '64 64 896 896',
        focusable: 'false',
        'data-icon': 'pushpin',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      },
      React.createElement('path', {
        d: 'M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 00-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z',
      })
    ),
    Je = React.createElement('path', {
      d: 'M128 96h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V160a64 64 0 0 1 64-64z m32 64a32 32 0 1 0 0 64h448a32 32 0 0 0 0-64H160z m224 576h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z m32 64a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64H416z m-32-384h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z m32 64a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64H416z',
    }),
    Ye = React.createElement(
      'svg',
      { viewBox: '0 0 1260 1024' },
      React.createElement('path', {
        d: 'M166.137305 564.657231a35.603692 35.603692 0 1 1 71.168 0 35.603692 35.603692 0 0 1-71.168 0z m54.744615-179.830154a55.847385 55.847385 0 1 1 111.694769 0 55.847385 55.847385 0 0 1-111.655384 0z m206.296615-146.313846a72.073846 72.073846 0 1 1 144.108308 0 72.073846 72.073846 0 0 1-144.108308 0z m272.541539 0a90.466462 90.466462 0 1 1 180.972308 0 90.466462 90.466462 0 0 1-180.972308 0z m549.021538-88.103385a31.783385 31.783385 0 0 1 3.15077 44.819692L771.596997 748.307692l-108.740923 75.657846 60.612923-119.138461L1202.858535 152.733538a31.783385 31.783385 0 0 1 44.859077-3.150769l0.945231 0.787693z m-82.156307 307.003077a32.413538 32.413538 0 0 1 32.295384 34.973539h0.118154c-2.56 29.459692-73.058462 298.535385-269.981538 415.350153-328.192 194.717538-543.350154 48.758154-586.358154-20.755692-29.696-48.009846-52.381538-100.864-69.710769-120.792615-27.214769-31.192615-150.055385 43.244308-233.944616-50.845539-83.928615-94.129231-58.525538-470.449231 343.276308-651.027692 367.931077-165.336615 631.414154 36.155077 673.161846 71.286154a31.428923 31.428923 0 1 1-38.990769 49.348923C917.241305 102.4 719.530535 28.199385 487.358228 89.796923 155.542843 176.206769 21.674535 525.351385 78.388382 660.046769c30.523077 72.467692 175.852308 6.222769 233.314461 53.996308 21.425231 17.801846 59.037538 91.254154 83.731692 134.774154 44.898462 79.281231 286.72 140.996923 497.979077 3.820307 195.820308-127.133538 240.718769-365.331692 240.71877-365.331692h0.118153a32.413538 32.413538 0 0 1 32.295385-29.892923z',
        'p-id': '3059',
      })
    ),
    je = React.createElement('path', {
      d: 'M206.497462,203.065268 C225.380711,197.940758 240,211.850142 240,233.080254 C240,250.650002 230.253807,260.166948 222.944162,263.09524 C163.857868,285.057424 155.329949,307.751682 155.329949,357.532634 C155.329949,372.174091 156.548223,396.332494 156.548223,411.706023 C156.548223,468.807703 133.401015,496.626471 93.1979695,512 C134.010152,528.105602 156.548223,555.192297 156.548223,612.293977 C156.548223,619.107246 156.308942,627.645952 156.04247,636.317008 L155.98059,638.319645 L155.897583,640.989618 C155.607459,650.323572 155.329949,659.479398 155.329949,666.467366 C155.329949,716.248318 163.857868,738.942576 222.944162,760.90476 C230.253807,763.833052 240,773.349998 240,790.919746 C240,812.149858 225.380711,826.059242 206.497462,820.934732 C112.081218,796.044256 87.106599,750.655741 87.106599,678.912604 C87.106599,673.593637 87.3924294,663.980713 87.687192,654.067212 L87.687192,654.067212 L87.801145,650.223294 C88.0747343,640.939007 88.3248731,631.842609 88.3248731,626.203361 C88.3248731,572.762044 72.4873096,548.603641 31.0659898,547.139496 C11.5736041,545.67535 0,531.765966 0,512 C0,492.234034 11.5736041,478.32465 31.0659898,476.860504 C72.4873096,474.664286 88.3248731,451.237956 88.3248731,397.064567 C88.3248731,391.425318 88.0747343,382.32892 87.801145,373.044633 L87.801145,373.044633 L87.687192,369.200715 C87.3924294,359.287214 87.106599,349.67429 87.106599,344.355323 C87.106599,273.344259 112.081218,227.955744 206.497462,203.065268 Z M817.502538,203.065268 C911.918782,227.955744 936.893401,273.344259 936.893401,344.355323 C936.893401,349.67429 936.607571,359.287214 936.312808,369.200715 L936.198855,373.044633 C935.925266,382.32892 935.675127,391.425318 935.675127,397.064567 C935.675127,451.237956 951.51269,474.664286 992.93401,476.860504 C1012.4264,478.32465 1024,492.234034 1024,512 C1024,531.765966 1012.4264,545.67535 992.93401,547.139496 C951.51269,548.603641 935.675127,572.762044 935.675127,626.203361 C935.675127,631.842609 935.925266,640.939007 936.198855,650.223294 L936.312808,654.067212 C936.607571,663.980713 936.893401,673.593637 936.893401,678.912604 C936.893401,750.655741 911.918782,796.044256 817.502538,820.934732 C798.619289,826.059242 784,812.149858 784,790.919746 C784,773.349998 793.746193,763.833052 801.055838,760.90476 C860.142132,738.942576 868.670051,716.248318 868.670051,666.467366 C868.670051,659.479398 868.392541,650.323572 868.102417,640.989618 L868.01941,638.319645 L867.95753,636.317008 C867.691058,627.645952 867.451777,619.107246 867.451777,612.293977 C867.451777,555.192297 889.989848,528.105602 930.80203,512 C890.598985,496.626471 867.451777,468.807703 867.451777,411.706023 C867.451777,396.332494 868.670051,372.174091 868.670051,357.532634 C868.670051,307.751682 860.142132,285.057424 801.055838,263.09524 C793.746193,260.166948 784,250.650002 784,233.080254 C784,211.850142 798.619289,197.940758 817.502538,203.065268 Z M312,549 C342.375661,549 367,573.624339 367,604 C367,634.375661 342.375661,659 312,659 C281.624339,659 257,634.375661 257,604 C257,573.624339 281.624339,549 312,549 Z M512,549 C542.375661,549 567,573.624339 567,604 C567,634.375661 542.375661,659 512,659 C481.624339,659 457,634.375661 457,604 C457,573.624339 481.624339,549 512,549 Z M712,549 C742.375661,549 767,573.624339 767,604 C767,634.375661 742.375661,659 712,659 C681.624339,659 657,634.375661 657,604 C657,573.624339 681.624339,549 712,549 Z',
    }),
    qe = React.createElement('path', {
      d: 'M612.266667 130.133333c-17.066667-4.266667-34.133333 6.4-38.4 23.466667L390.4 832c-4.266667 17.066667 6.4 34.133333 23.466667 38.4 2.133333 0 6.4 2.133333 8.533333 2.133333 14.933333 0 27.733333-8.533333 29.866667-23.466666l181.333333-680.533334c6.4-17.066667-4.266667-34.133333-21.333333-38.4zM1015.466667 477.866667L744.533333 206.933333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l247.466667 247.466667-249.6 249.6c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l270.933334-270.933333c6.4-6.4 8.533333-14.933333 8.533333-23.466667s-4.266667-14.933333-8.533333-21.333333zM326.4 206.933333c-12.8-12.8-32-12.8-44.8 0L8.533333 477.866667c-4.266667 6.4-8.533333 12.8-8.533333 21.333333s4.266667 17.066667 8.533333 23.466667l270.933334 270.933333c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8L76.8 499.2l247.466667-247.466667c12.8-12.8 12.8-32 2.133333-44.8z',
      'p-id': '4084',
    }),
    Xe = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M512 256c-163.8 0-291.4 97.6-448 256 134.8 135.4 248 256 448 256 199.8 0 346.8-152.8 448-253.2C856.4 397.2 709.6 256 512 256z m0 438.6c-98.8 0-179.2-82-179.2-182.6 0-100.8 80.4-182.6 179.2-182.6s179.2 82 179.2 182.6c0 100.8-80.4 182.6-179.2 182.6z',
      }),
      React.createElement('path', {
        d: 'M512 448c0-15.8 5.8-30.2 15.2-41.4-5-0.8-10-1.2-15.2-1.2-57.6 0-104.6 47.8-104.6 106.6s47 106.6 104.6 106.6 104.6-47.8 104.6-106.6c0-4.6-0.4-9.2-0.8-13.8-11 8.6-24.6 13.8-39.6 13.8-35.6 0-64.2-28.6-64.2-64z',
      })
    ),
    Ke = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M512.7 700.9c-102.1 0-184.9-82.8-184.9-184.9 0-28.6 6.5-55.6 18-79.7l-93.7-93.7C138.9 418.1 65.2 514 65.2 514s200.4 260.7 447.6 260.7c50.2 0 98.6-10.8 143.6-27.9l-63.9-63.9c-24.2 11.5-51.2 18-79.8 18z',
      }),
      React.createElement('path', {
        d: 'M960.3 514S759.9 253.3 512.7 253.3c-49.5 0-97.2 10.5-141.7 27.2L243.5 153.1l-45.3 45.3 262.3 262.2c-13.1 13.3-21.2 31.5-21.2 51.6 0 40.6 32.9 73.4 73.4 73.4 20.1 0 38.4-8.1 51.6-21.2l260.9 260.8 45.3-45.3-95.6-95.6C887.2 609.1 960.3 514 960.3 514z m-376.7-20.9c-6.8-25.2-26.6-45.1-51.9-51.9L437.5 347c23-10.3 48.5-16 75.3-16 102.1 0 184.9 82.8 184.9 184.9 0 26.8-5.7 52.2-15.9 75.2l-98.2-98z',
      })
    ),
    $e = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M652.714667 699.904H371.285333c-26.752 0-47.189333-20.48-47.189333-47.189333V371.285333c0-26.752 20.48-47.189333 47.189333-47.189333h281.429334c26.752 0 47.189333 20.48 47.189333 47.189333v281.429334c0 26.752-20.48 47.189333-47.189333 47.189333z m-234.24-94.336h187.093333V418.432H418.432v187.136z',
        'p-id': '5442',
      }),
      React.createElement('path', {
        d: 'M794.24 418.432h-141.525333c-26.709333 0-47.146667-20.437333-47.146667-47.146667V229.76A189.226667 189.226667 0 0 1 794.24 41.088a189.226667 189.226667 0 0 1 188.672 188.672C981.333333 333.525333 896.426667 418.432 794.24 418.432z m-94.336-94.293333h94.293333a94.634667 94.634667 0 0 0 94.378667-94.378667 94.634667 94.634667 0 0 0-94.336-94.293333 94.592 94.592 0 0 0-94.336 94.293333v94.336zM371.285333 418.432H229.76A189.226667 189.226667 0 0 1 41.088 229.76C42.666667 127.573333 127.573333 42.666667 231.381333 42.666667a189.226667 189.226667 0 0 1 188.629334 188.672V372.906667a48.426667 48.426667 0 0 1-48.725334 45.568z m-139.946666-281.429333a94.634667 94.634667 0 0 0-94.336 94.336c0 51.882667 42.453333 94.336 94.336 94.336h94.336v-94.293334C324.096 179.413333 281.642667 136.96 231.381333 136.96zM794.24 981.333333a189.226667 189.226667 0 0 1-188.672-188.672V651.093333c0-26.709333 20.437333-47.146667 47.146667-47.146666h141.525333a189.226667 189.226667 0 0 1 188.672 188.672C981.333333 896.426667 896.426667 981.333333 794.24 981.333333z m-94.336-281.429333v94.293333c0 51.925333 42.453333 94.378667 94.293333 94.378667a94.634667 94.634667 0 0 0 94.378667-94.336 94.634667 94.634667 0 0 0-94.336-94.336h-94.336zM231.338667 981.333333A189.226667 189.226667 0 0 1 42.666667 792.661333a189.226667 189.226667 0 0 1 188.672-188.672H372.906667c26.709333 0 47.146667 20.437333 47.146666 47.146667v141.525333C418.432 896.426667 333.525333 981.333333 231.338667 981.333333z m0-281.429333a94.592 94.592 0 0 0-94.293334 94.293333c0 51.925333 42.410667 94.378667 94.293334 94.378667a94.634667 94.634667 0 0 0 94.336-94.336v-94.336h-94.293334z',
        'p-id': '5443',
      })
    ),
    Qe = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M897.066667 896H342.4c-12.8 0-25.6-4.266667-34.133333-12.8l-298.666667-341.333333c-12.8-17.066667-12.8-38.4 0-55.466667l298.666667-341.333333c8.533333-12.8 21.333333-17.066667 34.133333-17.066667h554.666667c72.533333 0 128 55.466667 128 128v512c0 72.533333-55.466667 128-128 128zM363.733333 810.666667H897.066667c25.6 0 42.666667-17.066667 42.666666-42.666667V256c0-25.6-17.066667-42.666667-42.666666-42.666667H363.733333l-260.266666 298.666667 260.266666 298.666667z',
        'p-id': '4636',
      }),
      React.createElement('path', {
        d: 'M513.066667 682.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8z',
        'p-id': '4637',
      }),
      React.createElement('path', {
        d: 'M769.066667 682.666667c-12.8 0-21.333333-4.266667-29.866667-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866666 12.8z',
        'p-id': '4638',
      })
    ),
    et = React.createElement('path', {
      d: 'M464.213333 105.301333a74.496 74.496 0 0 0-9.6 9.557334L119.04 517.546667a74.666667 74.666667 0 0 0 9.557333 105.130666l5.973334 4.48c12.330667 8.362667 26.88 12.842667 41.813333 12.842667H298.666667v224c0 41.216 33.450667 74.666667 74.666666 74.666667h277.333334l6.144-0.256A74.666667 74.666667 0 0 0 725.333333 864L725.290667 640h122.282666a74.666667 74.666667 0 0 0 57.344-122.453333l-335.573333-402.688a74.666667 74.666667 0 0 0-99.754667-13.653334l-5.418666 4.096z m55.978667 50.517334l335.573333 402.688a10.666667 10.666667 0 0 1-8.192 17.493333H693.333333a32 32 0 0 0-32 32v256a10.666667 10.666667 0 0 1-10.666666 10.666667h-277.333334a10.666667 10.666667 0 0 1-10.666666-10.666667v-256a32 32 0 0 0-32-32H176.426667a10.666667 10.666667 0 0 1-8.192-17.493333l335.573333-402.688a10.666667 10.666667 0 0 1 16.384 0z',
      'p-id': '6245',
    }),
    tt = React.createElement(
      'svg',
      { viewBox: '64 64 896 896' },
      React.createElement('path', {
        d: 'M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z',
      }),
      React.createElement('path', {
        d: 'M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z',
      })
    ),
    at = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M684,172 C729.9,172 774.4,181 816.4,198.7 C856.9,215.8 893.2,240.3 924.5,271.5 C955.7,302.7 980.2,339.1 997.3,379.6 C1015,421.5 1024,466.1 1024,512 C1024,557.9 1015,602.4 997.3,644.4 C980.2,684.9 955.7,721.2 924.5,752.5 C893.3,783.7 856.9,808.2 816.4,825.3 C774.4,843 729.9,852 684,852 L340,852 C294.1,852 249.6,843 207.6,825.3 C167.1,808.2 130.8,783.7 99.5,752.5 C68.3,721.3 43.8,684.9 26.7,644.4 C9,602.4 0,557.9 0,512 C0,466.1 9,421.6 26.7,379.6 C43.8,339.1 68.3,302.8 99.5,271.5 C130.7,240.3 167.1,215.8 207.6,198.7 C249.6,181 294.1,172 340,172 L684,172 Z M684,252 L340,252 C270.6,252 205.3,279 156.2,328.2 C107.1,377.4 80,442.6 80,512 C80,581.4 107,646.7 156.2,695.8 C205.4,744.9 270.6,772 340,772 L684,772 C753.4,772 818.7,745 867.8,695.8 C916.9,646.6 944,581.4 944,512 C944,442.6 917,377.3 867.8,328.2 C818.6,279.1 753.4,252 684,252 Z M320,392 C386.27417,392 440,445.72583 440,512 C440,578.27417 386.27417,632 320,632 C253.72583,632 200,578.27417 200,512 C200,445.72583 253.72583,392 320,392 Z',
      })
    ),
    nt = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M922,752 C944.09139,752 962,769.90861 962,792 C962,814.09139 944.09139,832 922,832 L102,832 C79.90861,832 62,814.09139 62,792 C62,769.90861 79.90861,752 102,752 L922,752 Z M909.714833,198.426593 C931.773143,198.426593 948.159316,211.922438 948.159316,233.130194 C948.159316,251.767313 939.335992,262.692521 926.101006,276.188366 L926.101006,276.188366 L822.11183,386.083102 C888.916998,394.437673 951.940741,429.141274 951.940741,512.044321 L951.940741,512.044321 L951.940741,513.32964 C951.940741,596.232687 889.547235,656 797.53257,656 C732.618114,656 684.089832,632.864266 648.166299,597.518006 C641.233687,591.734072 635.56155,580.808864 635.56155,569.240997 C635.56155,548.6759 652.577961,531.3241 672.745558,531.3241 C684.089832,531.3241 692.282919,535.822715 698.585293,541.606648 C726.31574,569.883657 757.827612,584.66482 798.793045,584.66482 C842.279428,584.66482 875.051774,557.67313 875.051774,516.542936 L875.051774,516.542936 L875.051774,515.257618 C875.051774,470.914127 835.346816,445.850416 773.583547,445.850416 L773.583547,445.850416 L757.827612,445.850416 C739.550726,445.850416 724.425028,430.426593 724.425028,411.789474 C724.425028,401.506925 728.83669,391.867036 740.811201,379.65651 L740.811201,379.65651 L844.17014,267.191136 L684.089832,267.191136 C665.182709,267.191136 650.057011,251.767313 650.057011,233.130194 C650.057011,213.850416 665.182709,198.426593 684.089832,198.426593 L684.089832,198.426593 Z M203.778883,192.642659 C225.837193,192.642659 242.223366,209.99446 242.223366,231.844875 L242.223366,231.844875 L242.223366,612.299169 C242.223366,634.149584 225.206955,651.501385 203.778883,651.501385 C182.981047,651.501385 165.334399,634.149584 165.334399,612.299169 L165.334399,612.299169 L165.334399,272.975069 L119.957304,287.113573 C115.545642,288.398892 109.873505,289.041551 106.092081,289.041551 C87.8151951,289.041551 72.0592593,273.617729 72.0592593,255.623269 C72.0592593,238.914127 82.1430582,226.060942 97.898994,221.562327 L97.898994,221.562327 L164.704162,199.711911 C179.82986,195.213296 191.174134,192.642659 202.518408,192.642659 L202.518408,192.642659 Z M458.744937,192 C545.087465,192 604.329784,245.98338 604.329784,326.315789 L604.329784,326.315789 L604.329784,327.601108 C604.329784,398.293629 567.776013,436.853186 489.626571,501.761773 L489.626571,501.761773 L398.872381,578.880886 L577.859812,578.880886 C596.766935,578.880886 611.892633,594.304709 611.892633,613.584488 C611.892633,632.864266 596.766935,648.288089 577.859812,648.288089 L577.859812,648.288089 L327.655551,648.288089 C303.706529,648.288089 286.059881,634.149584 286.059881,611.01385 C286.059881,595.590028 292.992492,582.736842 306.227478,571.811634 L306.227478,571.811634 L441.728526,454.204986 C502.23132,402.149584 524.28963,373.229917 524.28963,332.742382 C524.28963,288.398892 493.407996,262.692521 453.0728,262.692521 C417.779504,262.692521 393.200244,279.401662 366.100034,312.819945 C360.427898,319.246537 351.604574,325.030471 338.999825,325.030471 C319.462465,325.030471 303.706529,308.963989 303.706529,289.041551 C303.706529,280.686981 306.857716,271.689751 312.529853,264.620499 C348.453386,218.99169 389.418819,192 458.744937,192 Z',
      })
    ),
    rt = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M812,190 C834.09139,190 852,207.90861 852,230 L852,280 C852,302.09139 834.09139,320 812,320 C789.90861,320 772,302.09139 772,280 L772,270 L552,270 L552,754 L672,754 C694.09139,754 712,771.90861 712,794 C712,816.09139 694.09139,834 672,834 L352,834 C329.90861,834 312,816.09139 312,794 C312,771.90861 329.90861,754 352,754 L472,754 L472,269.999 L252,269.999 L252,290 C252,312.09139 234.09139,330 212,330 C189.90861,330 172,312.09139 172,290 L172,230 C172,207.90861 189.90861,190 212,190 L812,190 L812,190 Z',
      })
    ),
    lt = React.createElement(
      'svg',
      null,
      React.createElement('path', {
        d: 'M100,189.5 C102.155215,189.5 104.27062,189.67045 106.333468,189.998605 L580,190 L580,190 C602.09139,190 620,207.90861 620,230 L620,280 C620,302.09139 602.09139,320 580,320 C557.90861,320 540,302.09139 540,280 L540,270 L380,270 L380,753 L500,753 C522.09139,753 540,770.90861 540,793 C540,815.09139 522.09139,833 500,833 L180,833 C157.90861,833 140,815.09139 140,793 C140,770.90861 157.90861,753 180,753 L300,753 L300,269.999 L140,269.999 L140,279.5 C140,301.59139 122.09139,319.5 100,319.5 C77.90861,319.5 60,301.59139 60,279.5 L60,229.5 C60,207.40861 77.90861,189.5 100,189.5 Z M652,833 C629.90861,833 612,815.09139 612,793 C612,770.90861 629.90861,753 652,753 L712,753 L712,541 L620,541 L620,551 C620,573.09139 602.09139,591 580,591 C557.90861,591 540,573.09139 540,551 L540,501 C540,478.90861 557.90861,461 580,461 L924,461 L924,461 C946.09139,461 964,478.90861 964,501 L964,551 C964,573.09139 946.09139,591 924,591 C901.90861,591 884,573.09139 884,551 L884,541 L792,541 L792,753 L852,753 C874.09139,753 892,770.90861 892,793 C892,815.09139 874.09139,833 852,833 L652,833 Z',
      })
    ),
    it = React.createElement('path', {
      d: 'M206.497462,203.065268 C225.380711,197.940758 240,211.850142 240,233.080254 C240,250.650002 230.253807,260.166948 222.944162,263.09524 C163.857868,285.057424 155.329949,307.751682 155.329949,357.532634 C155.329949,372.174091 156.548223,396.332494 156.548223,411.706023 C156.548223,468.807703 133.401015,496.626471 93.1979695,512 C134.010152,528.105602 156.548223,555.192297 156.548223,612.293977 C156.548223,619.107246 156.308942,627.645952 156.04247,636.317008 L155.98059,638.319645 L155.897583,640.989618 C155.607459,650.323572 155.329949,659.479398 155.329949,666.467366 C155.329949,716.248318 163.857868,738.942576 222.944162,760.90476 C230.253807,763.833052 240,773.349998 240,790.919746 C240,812.149858 225.380711,826.059242 206.497462,820.934732 C112.081218,796.044256 87.106599,750.655741 87.106599,678.912604 C87.106599,673.593637 87.3924294,663.980713 87.687192,654.067212 L87.687192,654.067212 L87.801145,650.223294 C88.0747343,640.939007 88.3248731,631.842609 88.3248731,626.203361 C88.3248731,572.762044 72.4873096,548.603641 31.0659898,547.139496 C11.5736041,545.67535 0,531.765966 0,512 C0,492.234034 11.5736041,478.32465 31.0659898,476.860504 C72.4873096,474.664286 88.3248731,451.237956 88.3248731,397.064567 C88.3248731,391.425318 88.0747343,382.32892 87.801145,373.044633 L87.801145,373.044633 L87.687192,369.200715 C87.3924294,359.287214 87.106599,349.67429 87.106599,344.355323 C87.106599,273.344259 112.081218,227.955744 206.497462,203.065268 Z M386.497462,203.065268 C405.380711,197.940758 420,211.850142 420,233.080254 C420,250.650002 410.253807,260.166948 402.944162,263.09524 C343.857868,285.057424 335.329949,307.751682 335.329949,357.532634 C335.329949,372.174091 336.548223,396.332494 336.548223,411.706023 C336.548223,468.807703 313.401015,496.626471 273.19797,512 C314.010152,528.105602 336.548223,555.192297 336.548223,612.293977 C336.548223,619.107246 336.308942,627.645952 336.04247,636.317008 L335.98059,638.319645 L335.897583,640.989618 C335.607459,650.323572 335.329949,659.479398 335.329949,666.467366 C335.329949,716.248318 343.857868,738.942576 402.944162,760.90476 C410.253807,763.833052 420,773.349998 420,790.919746 C420,812.149858 405.380711,826.059242 386.497462,820.934732 C292.081218,796.044256 267.106599,750.655741 267.106599,678.912604 C267.106599,673.593637 267.392429,663.980713 267.687192,654.067212 L267.687192,654.067212 L267.801145,650.223294 C268.074734,640.939007 268.324873,631.842609 268.324873,626.203361 C268.324873,572.762044 252.48731,548.603641 211.06599,547.139496 C191.573604,545.67535 180,531.765966 180,512 C180,492.234034 191.573604,478.32465 211.06599,476.860504 C252.48731,474.664286 268.324873,451.237956 268.324873,397.064567 C268.324873,391.425318 268.074734,382.32892 267.801145,373.044633 L267.801145,373.044633 L267.687192,369.200715 C267.392429,359.287214 267.106599,349.67429 267.106599,344.355323 C267.106599,273.344259 292.081218,227.955744 386.497462,203.065268 Z M637.502538,203.065268 C731.918782,227.955744 756.893401,273.344259 756.893401,344.355323 C756.893401,349.67429 756.607571,359.287214 756.312808,369.200715 L756.198855,373.044633 C755.925266,382.32892 755.675127,391.425318 755.675127,397.064567 C755.675127,451.237956 771.51269,474.664286 812.93401,476.860504 C832.426396,478.32465 844,492.234034 844,512 C844,531.765966 832.426396,545.67535 812.93401,547.139496 C771.51269,548.603641 755.675127,572.762044 755.675127,626.203361 C755.675127,631.842609 755.925266,640.939007 756.198855,650.223294 L756.312808,654.067212 C756.607571,663.980713 756.893401,673.593637 756.893401,678.912604 C756.893401,750.655741 731.918782,796.044256 637.502538,820.934732 C618.619289,826.059242 604,812.149858 604,790.919746 C604,773.349998 613.746193,763.833052 621.055838,760.90476 C680.142132,738.942576 688.670051,716.248318 688.670051,666.467366 C688.670051,659.479398 688.392541,650.323572 688.102417,640.989618 L688.01941,638.319645 L687.95753,636.317008 C687.691058,627.645952 687.451777,619.107246 687.451777,612.293977 C687.451777,555.192297 709.989848,528.105602 750.80203,512 C710.598985,496.626471 687.451777,468.807703 687.451777,411.706023 C687.451777,396.332494 688.670051,372.174091 688.670051,357.532634 C688.670051,307.751682 680.142132,285.057424 621.055838,263.09524 C613.746193,260.166948 604,250.650002 604,233.080254 C604,211.850142 618.619289,197.940758 637.502538,203.065268 Z M817.502538,203.065268 C911.918782,227.955744 936.893401,273.344259 936.893401,344.355323 C936.893401,349.67429 936.607571,359.287214 936.312808,369.200715 L936.198855,373.044633 C935.925266,382.32892 935.675127,391.425318 935.675127,397.064567 C935.675127,451.237956 951.51269,474.664286 992.93401,476.860504 C1012.4264,478.32465 1024,492.234034 1024,512 C1024,531.765966 1012.4264,545.67535 992.93401,547.139496 C951.51269,548.603641 935.675127,572.762044 935.675127,626.203361 C935.675127,631.842609 935.925266,640.939007 936.198855,650.223294 L936.312808,654.067212 C936.607571,663.980713 936.893401,673.593637 936.893401,678.912604 C936.893401,750.655741 911.918782,796.044256 817.502538,820.934732 C798.619289,826.059242 784,812.149858 784,790.919746 C784,773.349998 793.746193,763.833052 801.055838,760.90476 C860.142132,738.942576 868.670051,716.248318 868.670051,666.467366 C868.670051,659.479398 868.392541,650.323572 868.102417,640.989618 L868.01941,638.319645 L867.95753,636.317008 C867.691058,627.645952 867.451777,619.107246 867.451777,612.293977 C867.451777,555.192297 889.989848,528.105602 930.80203,512 C890.598985,496.626471 867.451777,468.807703 867.451777,411.706023 C867.451777,396.332494 868.670051,372.174091 868.670051,357.532634 C868.670051,307.751682 860.142132,285.057424 801.055838,263.09524 C793.746193,260.166948 784,250.650002 784,233.080254 C784,211.850142 798.619289,197.940758 817.502538,203.065268 Z',
    }),
    Ct = React.createElement('path', {
      d: 'M431.2,148.567059 C457.7,136.167059 489.4,132.267059 525.2,136.867059 C547.1,139.667059 562.5,159.767059 559.7,181.667059 C556.9,203.567059 536.8,218.967059 514.9,216.167059 C464.8,209.667059 447.8,229.267059 437.8,249.367059 C434.7,255.567059 427.3,276.167059 415.2,343.467059 L415.2,343.467059 L480,343.467059 C502.1,343.467059 520,361.367059 520,383.567059 C520,405.667059 502.1,423.567059 480,423.567059 L480,423.567059 L402.1,423.567059 C402,423.967059 402,424.367059 401.9,424.767059 C386.6,526.567059 368.9,670.567059 349.2,852.867059 C347,873.367059 329.7,888.567059 309.5,888.567059 C308.1,888.567059 306.7,888.567059 305.2,888.367059 C283.2,885.967059 267.3,866.267059 269.7,844.267059 C288.8,667.167059 306.1,525.767059 321.2,423.567059 L321.2,423.567059 L210,423.567059 C187.9,423.567059 170,405.667059 170,383.567059 C170,361.467059 187.9,343.567059 210,343.567059 L210,343.567059 L334,343.567059 C349,256.767059 359,228.367059 366.3,213.667059 C381.4,183.467059 403.2,161.567059 431.2,148.567059 Z M581,383.667059 C598.9,370.667059 623.9,374.567059 636.9,392.467059 L636.9,392.467059 L699.1,478.067059 L785.8,391.367059 C801.5,375.767059 826.8,375.767059 842.4,391.367059 C858,406.967059 858,432.267059 842.3,447.767059 L842.3,447.767059 L746.6,543.467059 L824.9,651.267059 C837.9,669.167059 834,694.167059 816.1,707.167059 C798.2,720.167059 773.2,716.267059 760.2,698.367059 L760.2,698.367059 L689.4,600.867059 L587.9,702.567059 C572.2,718.167059 546.9,718.167059 531.3,702.567059 C515.7,686.867059 515.7,661.567059 531.3,645.967059 L531.3,645.967059 L641.8,535.367059 L572.2,439.567059 C559.2,421.667059 563.1,396.667059 581,383.667059 Z',
    }),
    ct = React.createElement('path', {
      d: 'M539.414911,228.284271 L765.689081,454.558441 C781.310053,470.179413 781.310053,495.506012 765.689081,511.126984 C750.06811,526.747955 724.74151,526.747955 709.120539,511.126984 L551.13,353.137 L551.13064,904 C551.13064,926.09139 533.22203,944 511.13064,944 C489.03925,944 471.13064,926.09139 471.13064,904 L471.13,353.137 L313.140741,511.126984 C297.51977,526.747955 272.19317,526.747955 256.572199,511.126984 C240.951227,495.506012 240.951227,470.179413 256.572199,454.558441 L482.846369,228.284271 C498.46734,212.6633 523.79394,212.6633 539.414911,228.284271 Z M872,80 C894.09139,80 912,97.90861 912,120 C912,142.09139 894.09139,160 872,160 L152,160 C129.90861,160 112,142.09139 112,120 C112,97.90861 129.90861,80 152,80 L872,80 Z',
    }),
    ot = React.createElement('path', {
      d: 'M539.414911,228.284271 L765.689081,454.558441 C781.310053,470.179413 781.310053,495.506012 765.689081,511.126984 C750.06811,526.747955 724.74151,526.747955 709.120539,511.126984 L551.13,353.137 L551.13064,904 C551.13064,926.09139 533.22203,944 511.13064,944 C489.03925,944 471.13064,926.09139 471.13064,904 L471.13,353.137 L313.140741,511.126984 C297.51977,526.747955 272.19317,526.747955 256.572199,511.126984 C240.951227,495.506012 240.951227,470.179413 256.572199,454.558441 L482.846369,228.284271 C498.46734,212.6633 523.79394,212.6633 539.414911,228.284271 Z M872,80 C894.09139,80 912,97.90861 912,120 C912,142.09139 894.09139,160 872,160 L152,160 C129.90861,160 112,142.09139 112,120 C112,97.90861 129.90861,80 152,80 L872,80 Z',
      transform:
        'translate(512.000000, 512.000000) scale(1, -1) translate(-512.000000, -512.000000) ',
    }),
    Lt = React.createElement('path', {
      d: 'M539.414911,228.284271 L765.689081,454.558441 C781.310053,470.179413 781.310053,495.506012 765.689081,511.126984 C750.06811,526.747955 724.74151,526.747955 709.120539,511.126984 L551.13,353.137 L551.13064,904 C551.13064,926.09139 533.22203,944 511.13064,944 C489.03925,944 471.13064,926.09139 471.13064,904 L471.13,353.137 L313.140741,511.126984 C297.51977,526.747955 272.19317,526.747955 256.572199,511.126984 C240.951227,495.506012 240.951227,470.179413 256.572199,454.558441 L482.846369,228.284271 C498.46734,212.6633 523.79394,212.6633 539.414911,228.284271 Z M872,80 C894.09139,80 912,97.90861 912,120 C912,142.09139 894.09139,160 872,160 L152,160 C129.90861,160 112,142.09139 112,120 C112,97.90861 129.90861,80 152,80 L872,80 Z',
      transform:
        'translate(512.000000, 512.000000) rotate(-270.000000) translate(-512.000000, -512.000000) ',
    }),
    st = React.createElement('path', {
      d: 'M539.414911,228.284271 L765.689081,454.558441 C781.310053,470.179413 781.310053,495.506012 765.689081,511.126984 C750.06811,526.747955 724.74151,526.747955 709.120539,511.126984 L551.13,353.137 L551.13064,904 C551.13064,926.09139 533.22203,944 511.13064,944 C489.03925,944 471.13064,926.09139 471.13064,904 L471.13,353.137 L313.140741,511.126984 C297.51977,526.747955 272.19317,526.747955 256.572199,511.126984 C240.951227,495.506012 240.951227,470.179413 256.572199,454.558441 L482.846369,228.284271 C498.46734,212.6633 523.79394,212.6633 539.414911,228.284271 Z M872,80 C894.09139,80 912,97.90861 912,120 C912,142.09139 894.09139,160 872,160 L152,160 C129.90861,160 112,142.09139 112,120 C112,97.90861 129.90861,80 152,80 L872,80 Z',
      transform:
        'translate(512.000000, 512.000000) scale(-1, 1) rotate(-270.000000) translate(-512.000000, -512.000000) ',
    }),
    dt = React.createElement('path', {
      d: 'M872,885 C893.879,885 911.64158,902.54379 911.994644,924.338274 L912,925 C912,947.1 894.1,965 872,965 L152,965 C130.121,965 112.35842,947.45621 112.005356,925.661726 L112,925 C112,902.9 129.9,885 152,885 L872,885 Z M512,60 C555.2,60 597.2,68.5 636.7,85.2 C674.8,101.3 709.1,124.4 738.5,153.8 C767.9,183.2 791,217.5 807.1,255.6 C823.8,295.1 832.3,337.1 832.3,380.3 C832.3,496.1 739.4,640.1 539.8,833.4 L512,860.3 L484.2,833.3 C284.6,640.1 191.7,496.1 191.7,380.3 C191.7,337.1 200.2,295.1 216.9,255.6 C233,217.5 256.1,183.2 285.5,153.8 C314.9,124.4 349.2,101.3 387.3,85.2 C426.8,68.5 468.8,60 512,60 Z M512,140 C447.8,140 387.5,165 342.1,210.4 C296.7,255.8 271.7,316.1 271.7,380.3 C271.7,424.4 293.5,479.4 336.5,543.8 C376.8,604 434.3,671.2 512,748.6 C589.6,671.2 647.2,604 687.5,543.8 C730.5,479.5 752.3,424.5 752.3,380.3 C752.3,316.1 727.3,255.8 681.9,210.4 C636.5,165 576.2,140 512,140 Z M512,228 C600.2,228 672,299.8 672,388 C672,476.2 600.2,548 512,548 C423.8,548 352,476.2 352,388 C352,299.8 423.8,228 512,228 Z M512,308 C467.9,308 432,343.9 432,388 C432,432.1 467.9,468 512,468 C556.1,468 592,432.1 592,388 C592,343.9 556.1,308 512,308 Z',
    }),
    ht = React.createElement('path', {
      d: 'M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z',
      transform:
        'translate(512.000000, 512.000000) scale(-1, 1) translate(-512.000000, -512.000000) ',
    }),
    mt = React.createElement('path', {
      d: 'M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z',
    }),
    ft = React.createElement('path', {
      d: 'M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z',
      transform:
        'translate(512.000000, 512.000000) scale(1, -1) translate(-512.000000, -512.000000) ',
    }),
    pt = React.createElement('path', {
      d: 'M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z',
      transform:
        'translate(512.000000, 512.000000) scale(-1, -1) translate(-512.000000, -512.000000) ',
    }),
    ut = React.createElement('path', {
      d: 'M872,32 C938.27417,32 992,85.72583 992,152 L992,872 C992,938.27417 938.27417,992 872,992 L152,992 C85.72583,992 32,938.27417 32,872 L32,152 C32,85.72583 85.72583,32 152,32 L872,32 Z M832,112 L192,112 C148.259048,112 112.717181,147.104457 112.010718,190.677054 L112,192 L112,832 C112,875.740952 147.104457,911.282819 190.677054,911.989282 L192,912 L832,912 C875.740952,912 911.282819,876.895543 911.989282,833.322946 L912,832 L912,192 C912,147.81722 876.18278,112 832,112 Z M378.52279,415.050326 C387.989019,409.358413 400.277122,412.418101 405.969035,421.884331 L405.969035,421.884331 L560.846571,679.46141 C561.920687,681.247773 563.267454,682.855244 564.838099,684.225605 C573.161205,691.487375 585.795242,690.626992 593.057011,682.303887 L593.057011,682.303887 L686.973056,574.661651 C688.336422,573.099024 689.934526,571.757945 691.710072,570.686495 C701.167259,564.979571 713.460201,568.019761 719.167124,577.476949 L719.167124,577.476949 L852.543134,798.500051 C855.365729,803.177494 856.857504,808.536895 856.857504,814 C856.857504,830.568542 843.426047,844 826.857504,844 L826.857504,844 L191.580891,844 C186.553452,844 181.606628,842.736548 177.194928,840.32573 C162.655629,832.380582 157.310013,814.153336 165.255161,799.614037 L165.255161,799.614037 L371.278423,422.599809 C372.980511,419.485057 375.480866,416.879393 378.52279,415.050326 Z M699,213 C756.989899,213 804,260.010101 804,318 C804,375.989899 756.989899,423 699,423 C641.010101,423 594,375.989899 594,318 C594,260.010101 641.010101,213 699,213 Z',
    }),
    Rt = React.createElement('path', {
      d: 'M872,32 C938.27417,32 992,85.72583 992,152 L992,872 C992,938.27417 938.27417,992 872,992 L152,992 C85.72583,992 32,938.27417 32,872 L32,152 C32,85.72583 85.72583,32 152,32 L872,32 Z M832,112 L192,112 C148.259048,112 112.717181,147.104457 112.010718,190.677054 L112,192 L112,832 C112,875.740952 147.104457,911.282819 190.677054,911.989282 L192,912 L832,912 C875.740952,912 911.282819,876.895543 911.989282,833.322946 L912,832 L912,192 C912,147.81722 876.18278,112 832,112 Z M784,200 C806.09139,200 824,217.90861 824,240 L824,440 C824,462.09139 806.09139,480 784,480 C761.90861,480 744,462.09139 744,440 L744,321.86 L350.348,744.001 L440,744 C462.09139,744 480,761.90861 480,784 C480,806.09139 462.09139,824 440,824 L240,824 C217.90861,824 200,806.09139 200,784 L200,584 C200,561.90861 217.90861,544 240,544 C262.09139,544 280,561.90861 280,584 L280,702.137 L673.65,279.999 L584,280 C561.90861,280 544,262.09139 544,240 C544,217.90861 561.90861,200 584,200 L784,200 Z',
    }),
    gt = React.createElement('path', {
      d: 'M505.6 1024C308.842667 1024 149.333333 864.490667 149.333333 667.733333c0-67.2 36.288-159.317333 100.629334-274.069333a2317.653333 2317.653333 0 0 1 62.784-104.896 3431.210667 3431.210667 0 0 1 109.162666-161.621333 3361.28 3361.28 0 0 1 49.834667-67.776L505.6 15.189333l33.856 44.181334 3.712 4.885333 10.133333 13.525333c10.88 14.613333 22.976 31.168 35.989334 49.365334 37.205333 51.946667 74.389333 106.666667 109.162666 161.621333a2317.653333 2317.653333 0 0 1 62.784 104.896C825.578667 508.416 861.866667 600.533333 861.866667 667.733333c0 196.757333-159.509333 356.266667-356.266667 356.266667z m-14.293333-847.189333a3347.328 3347.328 0 0 0-106.453334 157.589333 2233.365333 2233.365333 0 0 0-60.458666 100.992C266.944 537.856 234.666667 619.797333 234.666667 667.733333 234.666667 817.365333 355.968 938.666667 505.6 938.666667c149.632 0 270.933333-121.301333 270.933333-270.933334 0-47.936-32.277333-129.877333-89.728-232.341333-18.112-32.298667-38.4-66.090667-60.458666-100.992a3347.328 3347.328 0 0 0-120.746667-177.429333c-4.629333 6.357333-9.386667 12.992-14.293333 19.84zM320 661.333333h85.333333a106.666667 106.666667 0 0 0 106.666667 106.666667v85.333333a192 192 0 0 1-192-192z',
      'p-id': '1221',
    }),
    Mt = React.createElement('path', {
      d: 'M672.761692,864 C694.848525,864 712.737861,881.9 712.737861,904 C712.737861,926.1 694.848525,944 672.761692,944 L632.785523,944 C610.698689,944 592.809354,926.1 592.809354,904 C592.809354,881.9 610.698689,864 632.785523,864 L672.761692,864 Z M512.857015,864 C534.943849,864 552.833184,881.9 552.833184,904 C552.833184,926.1 534.943849,944 512.857015,944 L472.880846,944 C450.794013,944 432.904677,926.1 432.904677,904 C432.904677,881.9 450.794013,864 472.880846,864 L512.857015,864 Z M352.952338,864 C375.039172,864 392.928508,881.9 392.928508,904 C392.928508,926.1 375.039172,944 352.952338,944 L312.976169,944 C290.889336,944 273,926.1 273,904 C273,881.9 290.889336,864 312.976169,864 L352.952338,864 Z M867.945338,878.6 C876.640155,898.9 867.245755,922.4 846.957849,931.1 C830.56762,938.1 813.177986,942.3 795.388591,943.6 C794.489127,943.7 793.589663,943.7 792.590259,943.7 C771.802651,943.7 754.213137,927.6 752.71403,906.5 C751.114984,884.5 767.705094,865.3 789.791927,863.8 C798.686625,863.2 807.381442,861.1 815.476616,857.6 C835.764522,848.9 859.250521,858.3 867.945338,878.6 Z M904.023831,724 C926.110664,724 944,741.9 944,764 L944,784 C944,792.9 943.300417,801.8 941.801311,810.5 C938.503277,830 921.613345,843.9 902.424784,843.9 C900.226095,843.9 898.027405,843.7 895.828716,843.3 C874.041704,839.7 859.350462,819.1 862.948317,797.3 C863.6479,792.9 864.047662,788.5 864.047662,784 L864.047662,764 C864.047662,741.9 881.936997,724 904.023831,724 Z M660,100 C726.27417,100 780,153.72583 780,220 L780,660 C780,726.27417 726.27417,780 660,780 L220,780 C153.72583,780 100,726.27417 100,660 L100,220 C100,153.72583 153.72583,100 220,100 L660,100 Z M620,180 L260,180 C216.259048,180 180.717181,215.104457 180.010718,258.677054 L180,260 L180,620 C180,663.740952 215.104457,699.282819 258.677054,699.989282 L260,700 L620,700 C663.740952,700 699.282819,664.895543 699.989282,621.322946 L700,620 L700,260 C700,215.81722 664.18278,180 620,180 Z M904.023831,564 C926.110664,564 944,581.9 944,604 L944,644 C944,666.1 926.110664,684 904.023831,684 C881.936997,684 864.047662,666.1 864.047662,644 L864.047662,604 C864.047662,581.9 881.936997,564 904.023831,564 Z M904.023831,404 C926.110664,404 944,421.9 944,444 L944,484 C944,506.1 926.110664,524 904.023831,524 C881.936997,524 864.047662,506.1 864.047662,484 L864.047662,444 C864.047662,421.9 881.936997,404 904.023831,404 Z M904.023831,244 C926.110664,244 944,261.9 944,284 L944,324 C944,346.1 926.110664,364 904.023831,364 C881.936997,364 864.047662,346.1 864.047662,324 L864.047662,284 C864.047662,261.9 881.936997,244 904.023831,244 Z',
    }),
    yt = React.createElement('path', {
      d: 'M832,364 C898.27417,364 952,417.72583 952,484 L952,844 C952,910.27417 898.27417,964 832,964 L192,964 C125.72583,964 72,910.27417 72,844 L72,484 C72,417.72583 125.72583,364 192,364 L832,364 Z M792,444 L232,444 C188.259048,444 152.717181,479.104457 152.010718,522.677054 L152,524 L152,804 C152,847.740952 187.104457,883.282819 230.677054,883.989282 L232,884 L792,884 C835.740952,884 871.282819,848.895543 871.989282,805.322946 L872,804 L872,524 C872,479.81722 836.18278,444 792,444 Z M827.755788,28.2842712 L940.892873,141.421356 C956.513844,157.042328 956.513844,182.368927 940.892873,197.989899 L827.755788,311.126984 C812.134816,326.747955 786.808217,326.747955 771.187245,311.126984 C755.566273,295.506012 755.566273,270.179413 771.187245,254.558441 L811.773,213.972 L112,213.972961 C89.90861,213.972961 72,196.064351 72,173.972961 C72,151.881571 89.90861,133.972961 112,133.972961 L820.307,133.972 L771.187245,84.8528137 C755.566273,69.2318421 755.566273,43.9052429 771.187245,28.2842712 C786.808217,12.6632996 812.134816,12.6632996 827.755788,28.2842712 Z',
    }),
    bt = React.createElement('path', {
      d: 'M820.027039,63 C842.118429,63 860.027039,80.90861 860.027039,103 L860.028,811.307 L909.147186,762.187245 C924.768158,746.566273 950.094757,746.566273 965.715729,762.187245 C981.3367,777.808217 981.3367,803.134816 965.715729,818.755788 L852.578644,931.892873 C836.957672,947.513844 811.631073,947.513844 796.010101,931.892873 L682.873016,818.755788 C667.252045,803.134816 667.252045,777.808217 682.873016,762.187245 C698.493988,746.566273 723.820587,746.566273 739.441559,762.187245 L780.028,802.773 L780.027039,103 C780.027039,80.90861 797.935649,63 820.027039,63 Z M510,63 C576.27417,63 630,116.72583 630,183 L630,823 C630,889.27417 576.27417,943 510,943 L150,943 C83.72583,943 30,889.27417 30,823 L30,183 C30,116.72583 83.72583,63 150,63 L510,63 Z M190,143 C146.259048,143 110.717181,178.104457 110.010718,221.677054 L110,223 L110,783 C110,826.740952 145.104457,862.282819 188.677054,862.989282 L190,863 L470,863 C514.18278,863 550,827.18278 550,783 L550,223 C550,179.259048 514.895543,143.717181 471.322946,143.010718 L470,143 L190,143 Z',
      transform:
        'translate(503.715729, 503.304301) scale(-1, 1) translate(-503.715729, -503.304301) ',
    }),
    Zt = React.createElement('path', {
      d: 'M693.505588,190 C724.805588,190 746.305588,207.1 758.805588,234.8 L758.805588,234.8 L991.505588,753.9 C996.005588,762 997.805588,770 997.805588,777.2 C997.805588,806.7 975.405588,830 945.905588,830 C920.005588,830 902.105588,814.8 892.105588,791.6 L892.105588,791.6 L841.105588,674.3 L582.273,674.3 L630.105588,784 C637.805588,801.7 629.705588,822.3 612.005588,830.1 C607.405588,832.1 602.705588,833 598.005588,833 C584.505588,833 571.605588,825.1 565.905588,812 L521.33,709.704 L484.005588,795.1 C475.194588,817.276 456.680598,829.74901 433.703232,829.996253 L433.005588,830 C404.405588,830 382.005588,807.6 382.005588,779 C382.005588,770.9 384.705588,762.9 389.205588,753.9 L389.205588,753.9 L430.85,661 L162.005588,661 C161.540572,661 161.077646,660.990886 160.61698,660.972827 L92.9055878,812.3 C85.0055878,829.9 64.3055878,837.9 46.7055878,830 C29.1055878,822.1 21.2055878,801.4 29.0055878,783.8 L273.305588,237.8 C287.905588,205.1 326.505588,190.4 359.205588,205 C374.005588,211.6 385.805588,223.5 392.205588,238.4 L504.67,496.325 L621.905588,234.8 C634.280588,207.278 656.358578,190.34108 687.169259,190.005094 L688.105588,190 Z M332.605588,276.6 L191.926,591 L462.229,591 L465.969,582.657 L332.605588,276.6 Z M689.005588,323.4 L578.905588,576.7 L799.105588,576.7 L689.005588,323.4 Z',
    }),
    Et = React.createElement('path', {
      d: 'M352.741259,192 C384.06993,192 405.552448,209.006993 418.083916,236.755245 L418.083916,236.755245 L650.811189,755.916084 C655.286713,763.972028 657.076923,772.027972 657.076923,779.188811 C657.076923,808.727273 634.699301,832 605.160839,832 C579.202797,832 561.300699,816.783217 551.454545,793.51049 L551.454545,793.51049 L500.433566,676.251748 L196.097902,676.251748 L143.286713,797.090909 C134.335664,819.468531 115.538462,832 92.2657343,832 C63.6223776,832 41.2447552,809.622378 41.2447552,780.979021 C41.2447552,772.923077 43.9300699,764.867133 48.4055944,755.916084 L48.4055944,755.916084 L281.132867,236.755245 C293.664336,209.006993 316.041958,192 347.370629,192 L347.370629,192 Z M833.641026,492 C882.835165,492 919.575092,505.076923 942.615385,528.739927 C966.901099,552.40293 978.10989,587.274725 978.10989,630.241758 L978.10989,630.241758 L978.10989,792.14652 C978.10989,812.695971 961.919414,828.263736 941.369963,828.263736 C919.575092,828.263736 904.630037,813.318681 904.630037,796.505495 L904.630037,796.505495 L904.630037,784.051282 C882.212454,810.827839 847.96337,832 797.52381,832 C735.875458,832 681.076923,796.505495 681.076923,730.498168 L681.076923,730.498168 L681.076923,729.252747 C681.076923,658.263736 736.498168,623.391941 816.827839,623.391941 C853.567766,623.391941 879.721612,628.996337 905.252747,637.091575 L905.252747,637.091575 L905.252747,628.996337 C905.252747,582.29304 876.608059,557.384615 823.677656,557.384615 C795.032967,557.384615 771.369963,562.3663 750.820513,570.461538 C746.461538,571.70696 742.725275,572.32967 738.989011,572.32967 C721.553114,572.32967 707.230769,558.630037 707.230769,541.194139 C707.230769,527.494505 716.571429,515.663004 727.78022,511.304029 C758.915751,499.472527 790.673993,492 833.641026,492 Z M831.772894,671.340659 C783.201465,671.340659 754.556777,691.89011 754.556777,726.139194 L754.556777,726.139194 L754.556777,727.384615 C754.556777,759.142857 782.578755,777.201465 818.695971,777.201465 C868.512821,777.201465 906.498168,748.556777 906.498168,706.835165 L906.498168,706.835165 L906.498168,684.417582 C887.194139,676.945055 861.663004,671.340659 831.772894,671.340659 Z M348.265734,325.370629 L238.167832,578.685315 L458.363636,578.685315 L348.265734,325.370629 Z',
    }),
    vt = React.createElement('path', {
      d: 'M662,100 C684.09139,100 702,117.90861 702,140 C702,162.09139 684.09139,180 662,180 L551.95089,180.000411 C551.983502,180.662832 552,181.329489 552,182 L552,842 C552,842.670849 551.983486,843.33784 551.950841,844.00059 L662,844 C684.09139,844 702,861.90861 702,884 C702,906.09139 684.09139,924 662,924 L362,924 C339.90861,924 322,906.09139 322,884 C322,861.90861 339.90861,844 362,844 L472.049159,844.00059 C472.016514,843.33784 472,842.670849 472,842 L472,182 C472,181.329489 472.016498,180.662832 472.04911,180.000411 L362,180 C339.90861,180 322,162.09139 322,140 C322,117.90861 339.90861,100 362,100 L662,100 Z',
    }),
    xt = React.createElement('path', {
      d: 'M712,100 C734.09139,100 752,117.90861 752,140 C752,162.09139 734.09139,180 712,180 L597.596446,180.000524 C598.053921,183.498391 598.05267,187.115299 597.537846,190.778461 L505.733,844 L616,844 C638.09139,844 656,861.90861 656,884 C656,906.09139 638.09139,924 616,924 L316,924 C293.90861,924 276,906.09139 276,884 C276,861.90861 293.90861,844 316,844 L426.403684,844.000476 C425.946079,840.502298 425.947281,836.88505 426.462154,833.221539 L518.266,180 L412,180 C389.90861,180 372,162.09139 372,140 C372,117.90861 389.90861,100 412,100 L712,100 Z',
    }),
    zt = React.createElement('path', {
      d: 'M685.986014,192 C717.314685,192 738.797203,209.006993 751.328671,236.755245 L751.328671,236.755245 L984.055944,755.916084 C988.531469,763.972028 990.321678,772.027972 990.321678,779.188811 C990.321678,808.727273 967.944056,832 938.405594,832 C912.447552,832 894.545455,816.783217 884.699301,793.51049 L884.699301,793.51049 L833.678322,676.251748 L529.342657,676.251748 L476.531469,797.090909 C467.58042,819.468531 448.783217,832 425.51049,832 C396.867133,832 374.48951,809.622378 374.48951,780.979021 C374.48951,772.923077 377.174825,764.867133 381.65035,755.916084 L381.65035,755.916084 L614.377622,236.755245 C626.909091,209.006993 649.286713,192 680.615385,192 L680.615385,192 Z M242.396756,312 C344.87566,419.590227 396.115112,501.684108 396.115112,558.281644 C396.115112,643.177948 327.29306,712 242.396756,712 C157.500452,712 88.6784003,643.177948 88.6784003,558.281644 C88.6784003,501.684108 139.917852,419.590227 242.396756,312 Z M681.51049,325.370629 L571.412587,578.685315 L791.608392,578.685315 L681.51049,325.370629 Z',
    }),
    wt = React.createElement('path', {
      d: 'M100,189.5 C102.155215,189.5 104.27062,189.67045 106.333468,189.998605 L580,190 L580,190 C602.09139,190 620,207.90861 620,230 L620,280 C620,302.09139 602.09139,320 580,320 C557.90861,320 540,302.09139 540,280 L540,270 L380,270 L380,753 L500,753 C522.09139,753 540,770.90861 540,793 C540,815.09139 522.09139,833 500,833 L180,833 C157.90861,833 140,815.09139 140,793 C140,770.90861 157.90861,753 180,753 L300,753 L300,269.999 L140,269.999 L140,279.5 C140,301.59139 122.09139,319.5 100,319.5 C77.90861,319.5 60,301.59139 60,279.5 L60,229.5 C60,207.40861 77.90861,189.5 100,189.5 Z M652,833 C629.90861,833 612,815.09139 612,793 C612,770.90861 629.90861,753 652,753 L712,753 L712,541 L620,541 L620,551 C620,573.09139 602.09139,591 580,591 C557.90861,591 540,573.09139 540,551 L540,501 C540,478.90861 557.90861,461 580,461 L924,461 L924,461 C946.09139,461 964,478.90861 964,501 L964,551 C964,573.09139 946.09139,591 924,591 C901.90861,591 884,573.09139 884,551 L884,541 L792,541 L792,753 L852,753 C874.09139,753 892,770.90861 892,793 C892,815.09139 874.09139,833 852,833 L652,833 Z',
    }),
    kt = React.createElement('path', {
      d: 'M919.461538,904 C941.552928,904 959.461538,921.90861 959.461538,944 C959.461538,966.09139 941.552928,984 919.461538,984 L487.461538,984 C465.370148,984 447.461538,966.09139 447.461538,944 C447.461538,921.90861 465.370148,904 487.461538,904 L919.461538,904 Z M254.74581,426.382395 L367.882895,539.51948 C383.503866,555.140452 383.503866,580.467051 367.882895,596.088023 C352.261923,611.708995 326.935324,611.708995 311.314352,596.088023 L266.461453,551.235 L266.461453,847.431 L311.314352,802.578644 C326.779114,787.113882 351.756362,786.959234 367.411373,802.114701 L367.882895,802.578644 C383.503866,818.199615 383.503866,843.526215 367.882895,859.147186 L367.882895,859.147186 L254.74581,972.284271 C239.124838,987.905243 213.798239,987.905243 198.177267,972.284271 L198.177267,972.284271 L85.0401822,859.147186 C69.4192106,843.526215 69.4192106,818.199615 85.0401822,802.578644 C100.661154,786.957672 125.987753,786.957672 141.608725,802.578644 L141.608725,802.578644 L186.461453,847.432 L186.461453,551.234 L141.608725,596.088023 C125.987753,611.708995 100.661154,611.708995 85.0401822,596.088023 C69.4192106,580.467051 69.4192106,555.140452 85.0401822,539.51948 L198.177267,426.382395 C213.798239,410.761424 239.124838,410.761424 254.74581,426.382395 Z M707.509158,529.333333 C756.703297,529.333333 793.443223,542.410256 816.483516,566.07326 C840.769231,589.736264 851.978022,624.608059 851.978022,667.575092 L851.978022,667.575092 L851.978022,829.479853 C851.978022,850.029304 835.787546,865.59707 815.238095,865.59707 C793.443223,865.59707 778.498168,850.652015 778.498168,833.838828 L778.498168,833.838828 L778.498168,821.384615 C756.080586,848.161172 721.831502,869.333333 671.391941,869.333333 C609.74359,869.333333 554.945055,833.838828 554.945055,767.831502 L554.945055,767.831502 L554.945055,766.586081 C554.945055,695.59707 610.3663,660.725275 690.695971,660.725275 C727.435897,660.725275 753.589744,666.32967 779.120879,674.424908 L779.120879,674.424908 L779.120879,666.32967 C779.120879,619.626374 750.47619,594.717949 697.545788,594.717949 C668.901099,594.717949 645.238095,599.699634 624.688645,607.794872 C620.32967,609.040293 616.593407,609.663004 612.857143,609.663004 C595.421245,609.663004 581.098901,595.96337 581.098901,578.527473 C581.098901,564.827839 590.43956,552.996337 601.648352,548.637363 C632.783883,536.805861 664.542125,529.333333 707.509158,529.333333 Z M705.641026,708.673993 C657.069597,708.673993 628.424908,729.223443 628.424908,763.472527 L628.424908,763.472527 L628.424908,764.717949 C628.424908,796.47619 656.446886,814.534799 692.564103,814.534799 C742.380952,814.534799 780.3663,785.89011 780.3663,744.168498 L780.3663,744.168498 L780.3663,721.750916 C761.062271,714.278388 735.531136,708.673993 705.641026,708.673993 Z M919.461538,414.666667 C941.552928,414.666667 959.461538,432.575277 959.461538,454.666667 C959.461538,476.758057 941.552928,494.666667 919.461538,494.666667 L487.461538,494.666667 C465.370148,494.666667 447.461538,476.758057 447.461538,454.666667 C447.461538,432.575277 465.370148,414.666667 487.461538,414.666667 L919.461538,414.666667 Z M707.509158,40 C756.703297,40 793.443223,53.0769231 816.483516,76.7399267 C840.769231,100.40293 851.978022,135.274725 851.978022,178.241758 L851.978022,178.241758 L851.978022,340.14652 C851.978022,360.695971 835.787546,376.263736 815.238095,376.263736 C793.443223,376.263736 778.498168,361.318681 778.498168,344.505495 L778.498168,344.505495 L778.498168,332.051282 C756.080586,358.827839 721.831502,380 671.391941,380 C609.74359,380 554.945055,344.505495 554.945055,278.498168 L554.945055,278.498168 L554.945055,277.252747 C554.945055,206.263736 610.3663,171.391941 690.695971,171.391941 C727.435897,171.391941 753.589744,176.996337 779.120879,185.091575 L779.120879,185.091575 L779.120879,176.996337 C779.120879,130.29304 750.47619,105.384615 697.545788,105.384615 C668.901099,105.384615 645.238095,110.3663 624.688645,118.461538 C620.32967,119.70696 616.593407,120.32967 612.857143,120.32967 C595.421245,120.32967 581.098901,106.630037 581.098901,89.1941392 C581.098901,75.4945055 590.43956,63.6630037 601.648352,59.3040293 C632.783883,47.4725275 664.542125,40 707.509158,40 Z M705.641026,219.340659 C657.069597,219.340659 628.424908,239.89011 628.424908,274.139194 L628.424908,274.139194 L628.424908,275.384615 C628.424908,307.142857 656.446886,325.201465 692.564103,325.201465 C742.380952,325.201465 780.3663,296.556777 780.3663,254.835165 L780.3663,254.835165 L780.3663,232.417582 C761.062271,224.945055 735.531136,219.340659 705.641026,219.340659 Z',
    }),
    Dt = React.createElement('path', {
      d: 'M551.208577,113.100229 C571.408577,121.400229 587.508577,137.900229 595.408577,158.200229 L734.856,519 L863,519 C890.061953,519 912,540.938047 912,568 C912,595.061953 890.061953,617 863,617 L772.732,617 L867.308577,861.700229 C875.308577,882.300229 865.008577,905.500229 844.408577,913.400229 C839.708577,915.200229 834.808577,916.100229 830.008577,916.100229 C814.008577,916.100229 798.808577,906.400229 792.708577,890.500229 L687.001,617 L343.875,617 L231.008577,891.300229 C222.608577,911.700229 199.208577,921.500229 178.808577,913.100229 C158.408577,904.700229 148.608577,881.300229 157.008577,860.900229 L257.366,617 L161,617 C133.938047,617 112,595.061953 112,568 C112,540.938047 133.938047,519 161,519 L297.69,519 L446.808577,156.600229 C454.908577,136.800229 470.308577,121.400229 490.008577,113.200229 C509.708577,105.000229 531.508577,104.900229 551.208577,113.100229 Z M520.808577,187.000229 L384.199,519 L649.125,519 L520.808577,187.000229 Z',
    }),
    St = React.createElement('path', {
      d: 'M772,844 C794.09139,844 812,861.90861 812,884 C812,906.09139 794.09139,924 772,924 L252,924 C229.90861,924 212,906.09139 212,884 C212,861.90861 229.90861,844 252,844 L772,844 Z M272,100 C274.155215,100 276.27062,100.17045 278.333468,100.498605 L752,100.5 L752,100.5 C774.09139,100.5 792,118.40861 792,140.5 L792,190.5 C792,212.59139 774.09139,230.5 752,230.5 C729.90861,230.5 712,212.59139 712,190.5 L712,180.5 L552,180.5 L552,663.5 L672,663.5 C694.09139,663.5 712,681.40861 712,703.5 C712,725.59139 694.09139,743.5 672,743.5 L352,743.5 C329.90861,743.5 312,725.59139 312,703.5 C312,681.40861 329.90861,663.5 352,663.5 L472,663.5 L472,180.499 L312,180.499 L312,190 C312,212.09139 294.09139,230 272,230 C249.90861,230 232,212.09139 232,190 L232,140 C232,117.90861 249.90861,100 272,100 Z',
    }),
    _t = React.createElement('path', {
      d: 'M551.208577,113.100229 C571.408577,121.400229 587.508577,137.900229 595.408577,158.200229 L734.856,519 L863,519 C890.061953,519 912,540.938047 912,568 C912,595.061953 890.061953,617 863,617 L772.732,617 L867.308577,861.700229 C875.308577,882.300229 865.008577,905.500229 844.408577,913.400229 C839.708577,915.200229 834.808577,916.100229 830.008577,916.100229 C814.008577,916.100229 798.808577,906.400229 792.708577,890.500229 L687.001,617 L343.875,617 L231.008577,891.300229 C222.608577,911.700229 199.208577,921.500229 178.808577,913.100229 C158.408577,904.700229 148.608577,881.300229 157.008577,860.900229 L257.366,617 L161,617 C133.938047,617 112,595.061953 112,568 C112,540.938047 133.938047,519 161,519 L297.69,519 L446.808577,156.600229 C454.908577,136.800229 470.308577,121.400229 490.008577,113.200229 C509.708577,105.000229 531.508577,104.900229 551.208577,113.100229 Z M520.808577,187.000229 L384.199,519 L649.125,519 L520.808577,187.000229 Z',
    }),
    Nt = React.createElement('path', {
      d: 'M461.421356,629.715729 C477.042328,645.3367 477.042328,670.6633 461.421356,686.284271 L416.567,731.137 L884,731.137085 C906.09139,731.137085 924,749.045695 924,771.137085 C924,793.228475 906.09139,811.137085 884,811.137085 L416.568,811.137 L461.421356,855.989899 C477.042328,871.61087 477.042328,896.93747 461.421356,912.558441 C445.800385,928.179413 420.473785,928.179413 404.852814,912.558441 L291.715729,799.421356 C276.094757,783.800385 276.094757,758.473785 291.715729,742.852814 L404.852814,629.715729 C420.473785,614.094757 445.800385,614.094757 461.421356,629.715729 Z M140,100 C162.09139,100 180,117.90861 180,140 L180,884 C180,906.09139 162.09139,924 140,924 C117.90861,924 100,906.09139 100,884 L100,140 C100,117.90861 117.90861,100 140,100 Z M884,478 C906.09139,478 924,495.90861 924,518 C924,540.09139 906.09139,558 884,558 L320,558 C297.90861,558 280,540.09139 280,518 C280,495.90861 297.90861,478 320,478 L884,478 Z M884,289 C906.09139,289 924,306.90861 924,329 C924,351.09139 906.09139,369 884,369 L320,369 C297.90861,369 280,351.09139 280,329 C280,306.90861 297.90861,289 320,289 L884,289 Z M884,100 C906.09139,100 924,117.90861 924,140 C924,162.09139 906.09139,180 884,180 L320,180 C297.90861,180 280,162.09139 280,140 C280,117.90861 297.90861,100 320,100 L884,100 Z',
    }),
    Ft = React.createElement('path', {
      d: 'M884,844 C906.09139,844 924,861.90861 924,884 C924,906.09139 906.09139,924 884,924 L140,924 C117.90861,924 100,906.09139 100,884 C100,861.90861 117.90861,844 140,844 L884,844 Z M590,658 C612.09139,658 630,675.90861 630,698 C630,720.09139 612.09139,738 590,738 L140,738 C117.90861,738 100,720.09139 100,698 C100,675.90861 117.90861,658 140,658 L590,658 Z M884,472 C906.09139,472 924,489.90861 924,512 C924,534.09139 906.09139,552 884,552 L140,552 C117.90861,552 100,534.09139 100,512 C100,489.90861 117.90861,472 140,472 L884,472 Z M590,286 C612.09139,286 630,303.90861 630,326 C630,348.09139 612.09139,366 590,366 L140,366 C117.90861,366 100,348.09139 100,326 C100,303.90861 117.90861,286 140,286 L590,286 Z M884,100 C906.09139,100 924,117.90861 924,140 C924,162.09139 906.09139,180 884,180 L140,180 C117.90861,180 100,162.09139 100,140 C100,117.90861 117.90861,100 140,100 L884,100 Z',
    }),
    At = React.createElement('path', {
      d: 'M884,844 C906.09139,844 924,861.90861 924,884 C924,906.09139 906.09139,924 884,924 L140,924 C117.90861,924 100,906.09139 100,884 C100,861.90861 117.90861,844 140,844 L884,844 Z M737,658 C759.09139,658 777,675.90861 777,698 C777,720.09139 759.09139,738 737,738 L287,738 C264.90861,738 247,720.09139 247,698 C247,675.90861 264.90861,658 287,658 L737,658 Z M884,472 C906.09139,472 924,489.90861 924,512 C924,534.09139 906.09139,552 884,552 L140,552 C117.90861,552 100,534.09139 100,512 C100,489.90861 117.90861,472 140,472 L884,472 Z M737,286 C759.09139,286 777,303.90861 777,326 C777,348.09139 759.09139,366 737,366 L287,366 C264.90861,366 247,348.09139 247,326 C247,303.90861 264.90861,286 287,286 L737,286 Z M884,100 C906.09139,100 924,117.90861 924,140 C924,162.09139 906.09139,180 884,180 L140,180 C117.90861,180 100,162.09139 100,140 C100,117.90861 117.90861,100 140,100 L884,100 Z',
    }),
    Tt = React.createElement('path', {
      d: 'M884,844 C906.09139,844 924,861.90861 924,884 C924,906.09139 906.09139,924 884,924 L140,924 C117.90861,924 100,906.09139 100,884 C100,861.90861 117.90861,844 140,844 L884,844 Z M884,658 C906.09139,658 924,675.90861 924,698 C924,720.09139 906.09139,738 884,738 L434,738 C411.90861,738 394,720.09139 394,698 C394,675.90861 411.90861,658 434,658 L884,658 Z M884,472 C906.09139,472 924,489.90861 924,512 C924,534.09139 906.09139,552 884,552 L140,552 C117.90861,552 100,534.09139 100,512 C100,489.90861 117.90861,472 140,472 L884,472 Z M884,286 C906.09139,286 924,303.90861 924,326 C924,348.09139 906.09139,366 884,366 L434,366 C411.90861,366 394,348.09139 394,326 C394,303.90861 411.90861,286 434,286 L884,286 Z M884,100 C906.09139,100 924,117.90861 924,140 C924,162.09139 906.09139,180 884,180 L140,180 C117.90861,180 100,162.09139 100,140 C100,117.90861 117.90861,100 140,100 L884,100 Z',
    }),
    Bt = React.createElement('path', {
      d: 'M590,844 C612.09139,844 630,861.90861 630,884 C630,906.09139 612.09139,924 590,924 L140,924 C117.90861,924 100,906.09139 100,884 C100,861.90861 117.90861,844 140,844 L590,844 Z M884,658 C906.09139,658 924,675.90861 924,698 C924,720.09139 906.09139,738 884,738 L140,738 C117.90861,738 100,720.09139 100,698 C100,675.90861 117.90861,658 140,658 L884,658 Z M884,472 C906.09139,472 924,489.90861 924,512 C924,534.09139 906.09139,552 884,552 L140,552 C117.90861,552 100,534.09139 100,512 C100,489.90861 117.90861,472 140,472 L884,472 Z M884,286 C906.09139,286 924,303.90861 924,326 C924,348.09139 906.09139,366 884,366 L140,366 C117.90861,366 100,348.09139 100,326 C100,303.90861 117.90861,286 140,286 L884,286 Z M884,100 C906.09139,100 924,117.90861 924,140 C924,162.09139 906.09139,180 884,180 L140,180 C117.90861,180 100,162.09139 100,140 C100,117.90861 117.90861,100 140,100 L884,100 Z',
    }),
    Pt = React.createElement('path', {
      d: 'M904,212 C970.27417,212 1024,265.72583 1024,332 L1024,692 C1024,758.27417 970.27417,812 904,812 L120,812 C53.72583,812 2.23270997e-14,758.27417 0,692 L0,332 C6.0946097e-15,265.72583 53.72583,212 120,212 L904,212 Z M864,292 L160,292 C115.81722,292 80,327.81722 80,372 L80,372 L80,652 C80,696.18278 115.81722,732 160,732 L160,732 L864,732 C908.18278,732 944,696.18278 944,652 L944,652 L944,372 C944,327.81722 908.18278,292 864,292 L864,292 Z',
    }),
    Wt = React.createElement('path', {
      d: 'M904,212 C970.27417,212 1024,265.72583 1024,332 L1024,692 C1024,758.27417 970.27417,812 904,812 L120,812 C53.72583,812 2.23270997e-14,758.27417 0,692 L0,332 C6.0946097e-15,265.72583 53.72583,212 120,212 L904,212 Z M864,292 L160,292 C116.259048,292 80.717181,327.104457 80.0107177,370.677054 L80,372 L80,652 C80,695.740952 115.104457,731.282819 158.677054,731.989282 L160,732 L864,732 C907.740952,732 943.282819,696.895543 943.989282,653.322946 L944,652 L944,372 C944,327.81722 908.18278,292 864,292 Z M805.022222,357.5 C848.222222,357.5 876.622222,371.157459 901.022222,391.216851 C906.222222,395.484807 910.622222,402.740331 910.622222,412.129834 C910.622222,426.640884 899.822222,437.737569 886.222222,437.737569 C879.422222,437.737569 874.622222,435.176796 871.422222,432.616022 C852.222222,415.970994 831.422222,405.727901 804.622222,405.727901 C751.422222,405.727901 712.222222,452.675414 712.222222,511.146409 L712.222222,511.146409 L712.222222,512 C712.222222,570.470994 751.022222,617.845304 804.622222,617.845304 C834.222222,617.845304 854.222222,607.60221 874.622222,589.25 C878.222222,585.835635 883.422222,583.274862 889.422222,583.274862 C901.822222,583.274862 912.622222,594.371547 912.622222,607.60221 C912.622222,615.711326 909.022222,622.11326 904.622222,626.381215 C878.222222,651.135359 848.222222,666.5 803.022222,666.5 C721.422222,666.5 660.622222,598.639503 660.622222,512.853591 L660.622222,512.853591 L660.622222,512 C660.622222,427.06768 720.222222,357.5 805.022222,357.5 Z M250.577778,358.353591 C264.577778,358.353591 274.177778,366.462707 279.777778,379.69337 L279.777778,379.69337 L383.777778,627.234807 C385.777778,631.075967 386.577778,634.917127 386.577778,638.331492 C386.577778,652.415746 376.577778,663.512431 363.377778,663.512431 C351.777778,663.512431 343.777778,656.256906 339.377778,645.160221 L339.377778,645.160221 L316.577778,589.25 L180.577778,589.25 L156.977778,646.867403 C152.977778,657.537293 144.577778,663.512431 134.177778,663.512431 C121.377778,663.512431 111.377778,652.842541 111.377778,639.185083 C111.377778,635.343923 112.577778,631.502762 114.577778,627.234807 L114.577778,627.234807 L218.577778,379.69337 C224.177778,366.462707 234.177778,358.353591 248.177778,358.353591 L248.177778,358.353591 Z M537.6,362.621547 C569.6,362.621547 594.8,372.01105 610.8,389.082873 C623.2,402.313536 629.6,418.531768 629.6,438.59116 L629.6,438.59116 L629.6,439.444751 C629.6,475.29558 610.4,494.501381 589.6,506.024862 C622.4,517.975138 645.2,538.03453 645.2,578.58011 L645.2,578.58011 L645.2,579.433702 C645.2,632.783149 604,661.378453 541.6,661.378453 L541.6,661.378453 L436.8,661.378453 C422.8,661.378453 412,649.854972 412,634.917127 L412,634.917127 L412,389.082873 C412,374.145028 422.8,362.621547 436.8,362.621547 L436.8,362.621547 Z M538.4,532.912983 L460.4,532.912983 L460.4,614.857735 L542,614.857735 C575.6,614.857735 596,600.773481 596,573.885359 L596,573.885359 L596,573.031768 C596,547.850829 577.2,532.912983 538.4,532.912983 L538.4,532.912983 Z M248.577778,421.946133 L199.377778,542.729282 L297.777778,542.729282 L248.577778,421.946133 Z M531.2,409.142265 L460.4,409.142265 L460.4,488.526243 L527.6,488.526243 C559.2,488.526243 580.4,475.29558 580.4,447.980663 L580.4,447.980663 L580.4,447.127072 C580.4,423.653315 562.8,409.142265 531.2,409.142265 L531.2,409.142265 Z',
    }),
    Ht = React.createElement('path', {
      d: 'M322.059019,705.634702 C338.928777,705.634702 351.708897,691.453006 351.708897,673.45316 C351.708897,669.089561 350.686488,664.180512 348.130464,659.271464 L215.217218,342.910542 C208.060351,326.001596 195.791436,315.638049 177.899268,315.638049 L174.832039,315.638049 C156.939871,315.638049 144.159751,326.001596 137.002884,342.910542 L4.08963834,659.271464 C1.53361438,664.725962 0,669.635011 0,674.54406 C0,691.998455 12.7801198,705.634702 29.1386732,705.634702 C42.4299978,705.634702 53.1652984,697.998404 58.2773464,684.362157 L88.4384291,610.726426 L262.248059,610.726426 L291.386732,682.180358 C297.009984,696.362054 307.23408,705.634702 322.059019,705.634702 Z M238.221433,551.27239 L112.465054,551.27239 L175.343244,396.910078 L238.221433,551.27239 Z M549.829155,702.907453 C629.577102,702.907453 682.231196,666.362312 682.231196,598.181079 L682.231196,597.090179 C682.231196,545.272442 653.092523,519.636298 611.17373,504.363702 C637.756379,489.636556 662.294209,465.091312 662.294209,419.273523 L662.294209,418.182623 C662.294209,392.54648 654.114932,371.819385 638.267584,354.910439 C617.819392,333.092444 585.61349,321.092547 544.717107,321.092547 L415.893499,321.092547 C398.001331,321.092547 384.198802,335.819694 384.198802,354.910439 L384.198802,669.089561 C384.198802,688.180306 398.001331,702.907453 415.893499,702.907453 L549.829155,702.907453 Z M531.936987,482.000257 L446.054582,482.000257 L446.054582,380.546583 L536.53783,380.546583 C576.923009,380.546583 599.41602,399.091878 599.41602,429.091621 L599.41602,430.18252 C599.41602,465.091312 572.322166,482.000257 531.936987,482.000257 Z M550.340359,643.453417 L446.054582,643.453417 L446.054582,538.727043 L545.739516,538.727043 C595.326381,538.727043 619.353006,557.817789 619.353006,589.999331 L619.353006,591.09023 C619.353006,625.453572 593.281562,643.453417 550.340359,643.453417 Z M883.929887,709.452851 C941.696028,709.452851 980.036388,689.816656 1013.7759,658.180564 C1019.39916,652.726065 1024,644.544317 1024,634.18077 C1024,617.271824 1010.19747,603.090127 994.350122,603.090127 C986.68205,603.090127 980.036388,606.362827 975.435545,610.726426 C949.3641,634.18077 923.803861,647.271567 885.974706,647.271567 C817.473264,647.271567 767.886399,586.726632 767.886399,512 L767.886399,510.9091 C767.886399,436.182469 817.984469,376.182984 885.974706,376.182984 C920.225427,376.182984 946.808076,389.27378 971.345906,410.546325 C975.435545,413.819024 981.570002,417.091723 990.260484,417.091723 C1007.64145,417.091723 1021.44398,402.910027 1021.44398,384.364732 C1021.44398,372.364835 1015.82072,363.092187 1009.17506,357.637688 C977.991569,332.001545 941.696028,314.547149 886.485911,314.547149 C778.110495,314.547149 701.940981,403.455477 701.940981,512 L701.940981,513.0909 C701.940981,622.726323 779.644109,709.452851 883.929887,709.452851 Z',
    }),
    It = React.createElement('path', {
      d: 'M904,212 C970.27417,212 1024,265.72583 1024,332 L1024,692 C1024,758.27417 970.27417,812 904,812 L120,812 C53.72583,812 2.23270997e-14,758.27417 0,692 L0,332 C6.0946097e-15,265.72583 53.72583,212 120,212 L904,212 Z M864,292 L160,292 C116.259048,292 80.717181,327.104457 80.0107177,370.677054 L80,372 L80,652 C80,695.740952 115.104457,731.282819 158.677054,731.989282 L160,732 L864,732 C907.740952,732 943.282819,696.895543 943.989282,653.322946 L944,652 L944,372 C944,327.81722 908.18278,292 864,292 Z M250,382 C294.18278,382 330,417.81722 330,462 L330,562 C330,606.18278 294.18278,642 250,642 C205.81722,642 170,606.18278 170,562 L170,462 C170,417.81722 205.81722,382 250,382 Z M512,382 C556.18278,382 592,417.81722 592,462 L592,562 C592,606.18278 556.18278,642 512,642 C467.81722,642 432,606.18278 432,562 L432,462 C432,417.81722 467.81722,382 512,382 Z M774,382 C818.18278,382 854,417.81722 854,462 L854,562 C854,606.18278 818.18278,642 774,642 C729.81722,642 694,606.18278 694,562 L694,462 C694,417.81722 729.81722,382 774,382 Z',
    }),
    Vt = React.createElement('path', {
      d: 'M879.715178,837.944106 C885.731596,828.680733 898.118315,826.048555 907.381688,832.064973 L907.381688,832.064973 L1014.96809,901.940678 C1017.35919,903.493661 1019.39062,905.539937 1020.92614,907.942288 C1026.87492,917.249244 1024.15257,929.616459 1014.84562,935.565235 L1014.84562,935.565235 L907.259212,1004.3318 C904.042825,1006.38764 900.305277,1007.48007 896.488,1007.48007 C885.442305,1007.48007 876.488,998.525762 876.488,987.480067 L876.488,987.480067 L876.488,958 L40,958 C17.90861,958 2.705415e-15,940.09139 0,918 C-2.705415e-15,895.90861 17.90861,878 40,878 L876.488,878 L876.488,848.837795 C876.488,845.125618 877.521081,841.489854 879.46717,838.335822 Z M904,0 C970.27417,-1.21743675e-14 1024,53.72583 1024,120 L1024,680 C1024,746.27417 970.27417,800 904,800 L664,800 C597.72583,800 544,746.27417 544,680 L544,120 C544,53.72583 597.72583,1.21743675e-14 664,0 L904,0 Z M360,0 C426.27417,-1.21743675e-14 480,53.72583 480,120 L480,680 C480,746.27417 426.27417,800 360,800 L120,800 C53.72583,800 8.11624501e-15,746.27417 0,680 L0,120 C-8.11624501e-15,53.72583 53.72583,1.21743675e-14 120,0 L360,0 Z M320,80 L160,80 C116.259048,80 80.717181,115.104457 80.0107177,158.677054 L80,160 L80,640 C80,683.740952 115.104457,719.282819 158.677054,719.989282 L160,720 L320,720 C363.740952,720 399.282819,684.895543 399.989282,641.322946 L400,640 L400,160 C400,115.81722 364.18278,80 320,80 Z',
    }),
    Ot = React.createElement('path', {
      d: 'M918,0 C940.09139,1.3527075e-15 958,17.90861 958,40 L958,876.487 L987.162205,876.488 C990.874382,876.488 994.510146,877.521081 997.664178,879.46717 L998.055894,879.715178 C1007.21634,885.664747 1009.89213,897.843841 1004.13237,907.071766 L1003.93503,907.381688 L934.059322,1014.96809 C932.506339,1017.35919 930.460063,1019.39062 928.057712,1020.92614 C918.85303,1026.80954 906.654978,1024.21136 900.633191,1015.15005 L900.434765,1014.84562 L831.668198,907.259212 C829.612363,904.042825 828.519933,900.305277 828.519933,896.488 C828.519933,885.557364 837.288662,876.674775 848.175444,876.490907 L848.519933,876.488 L878,876.487 L878,40 C878,17.90861 895.90861,-1.3527075e-15 918,0 Z M680,544 C746.27417,544 800,597.72583 800,664 L800,904 C800,970.27417 746.27417,1024 680,1024 L120,1024 C53.72583,1024 -1.05570593e-13,970.27417 -1.13686838e-13,904 L-1.13686838e-13,664 C-1.21803083e-13,597.72583 53.72583,544 120,544 L680,544 Z M680,1.36700294e-13 C746.27417,1.40758416e-13 800,53.72583 800,120 L800,360 C800,426.27417 746.27417,480 680,480 L120,480 C53.72583,480 -2.27373675e-13,426.27417 -2.27373675e-13,360 L-1.13686838e-13,120 C-1.13686838e-13,53.72583 53.72583,2.97718402e-14 120,3.38299627e-14 L680,1.36700294e-13 Z M640,80 L160,80 C116.259048,80 80.717181,115.104457 80.0107177,158.677054 L80,160 L80,320 C80,363.740952 115.104457,399.282819 158.677054,399.989282 L160,400 L640,400 C684.18278,400 720,364.18278 720,320 L720,160 C720,116.259048 684.895543,80.717181 641.322946,80.0107177 L640,80 Z',
    }),
    Ut = React.createElement('path', {
      d: 'M842,616 C908.27417,616 962,669.72583 962,736 L962,736 L962,816 C962,882.27417 908.27417,936 842,936 L842,936 L182,936 C115.72583,936 62,882.27417 62,816 L62,816 L62,736 C62,669.72583 115.72583,616 182,616 L182,616 Z M984,472 C1006.09139,472 1024,489.90861 1024,512 C1024,534.09139 1006.09139,552 984,552 L984,552 L40,552 C17.90861,552 -2.705415e-15,534.09139 0,512 C2.705415e-15,489.90861 17.90861,472 40,472 L40,472 Z M842,88 C908.27417,88 962,141.72583 962,208 L962,208 L962,288 C962,354.27417 908.27417,408 842,408 L842,408 L182,408 C115.72583,408 62,354.27417 62,288 L62,288 L62,208 C62,141.72583 115.72583,88 182,88 L182,88 Z',
    }),
    Gt = React.createElement('path', {
      d: 'M842,584 C908.27417,584 962,637.72583 962,704 L962,704 L962,784 C962,850.27417 908.27417,904 842,904 L842,904 L182,904 C115.72583,904 62,850.27417 62,784 L62,784 L62,704 C62,637.72583 115.72583,584 182,584 L182,584 Z M40,200 C17.90861,200 -2.705415e-15,182.09139 0,160 C2.705415e-15,137.90861 17.90861,120 40,120 L40,120 L984,120 C1006.09139,120 1024,137.90861 1024,160 C1024,182.09139 1006.09139,200 984,200 L984,200 L962,200 L962,400 C962,466.27417 908.27417,520 842,520 L182,520 C115.72583,520 62,466.27417 62,400 L62,200 Z',
    }),
    Jt = React.createElement('path', {
      d: 'M62,624 C62,557.72583 115.72583,504 182,504 L182,504 L842,504 C908.27417,504 962,557.72583 962,624 L962,624 L962,824 L984,824 C1006.09139,824 1024,841.90861 1024,864 C1024,886.09139 1006.09139,904 984,904 L40,904 C17.90861,904 2.705415e-15,886.09139 0,864 C-2.705415e-15,841.90861 17.90861,824 40,824 L62,824 Z M842,120 C908.27417,120 962,173.72583 962,240 L962,320 C962,386.27417 908.27417,440 842,440 L182,440 C115.72583,440 62,386.27417 62,320 L62,240 C62,173.72583 115.72583,120 182,120 L842,120 Z',
    }),
    Yt = React.createElement('path', {
      d: 'M984,944 C1006.09139,944 1024,961.90861 1024,984 C1024,1006.09139 1006.09139,1024 984,1024 L40,1024 C17.90861,1024 2.705415e-15,1006.09139 0,984 C-2.705415e-15,961.90861 17.90861,944 40,944 L984,944 Z M842,560 C908.27417,560 962,613.72583 962,680 L962,680 L962,760 C962,826.27417 908.27417,880 842,880 L842,880 L182,880 C115.72583,880 62,826.27417 62,760 L62,760 L62,680 C62,613.72583 115.72583,560 182,560 L182,560 Z M842,144 C908.27417,144 962,197.72583 962,264 L962,344 C962,410.27417 908.27417,464 842,464 L182,464 C115.72583,464 62,410.27417 62,344 L62,264 C62,197.72583 115.72583,144 182,144 L842,144 Z M984,0 C1006.09139,-4.05812251e-15 1024,17.90861 1024,40 C1024,62.09139 1006.09139,80 984,80 L40,80 C17.90861,80 2.705415e-15,62.09139 0,40 C-2.705415e-15,17.90861 17.90861,4.05812251e-15 40,0 L984,0 Z',
    }),
    jt = React.createElement('path', {
      d: 'M62,744 C62,677.72583 115.72583,624 182,624 L182,624 L842,624 C908.27417,624 962,677.72583 962,744 L962,744 L962,944 L984,944 C1006.09139,944 1024,961.90861 1024,984 C1024,1006.09139 1006.09139,1024 984,1024 L40,1024 C17.90861,1024 2.705415e-15,1006.09139 0,984 C-2.705415e-15,961.90861 17.90861,944 40,944 L62,944 Z M984,0 C1006.09139,-4.05812251e-15 1024,17.90861 1024,40 C1024,62.09139 1006.09139,80 984,80 L962,80 L962,280 C962,346.27417 908.27417,400 842,400 L182,400 C115.72583,400 62,346.27417 62,280 L62,80 L40,80 C17.90861,80 2.705415e-15,62.09139 0,40 C-2.705415e-15,17.90861 17.90861,4.05812251e-15 40,0 L984,0 Z',
    }),
    qt = React.createElement('path', {
      d: 'M62,664 C62,597.72583 115.72583,544 182,544 L182,544 L842,544 C908.27417,544 962,597.72583 962,664 L962,664 L962,944 L984,944 C1006.09139,944 1024,961.90861 1024,984 C1024,1006.09139 1006.09139,1024 984,1024 L40,1024 C17.90861,1024 2.705415e-15,1006.09139 0,984 C-2.705415e-15,961.90861 17.90861,944 40,944 L62,944 Z M984,0 C1006.09139,-4.05812251e-15 1024,17.90861 1024,40 C1024,62.09139 1006.09139,80 984,80 L962,80 L962,360 C962,426.27417 908.27417,480 842,480 L182,480 C115.72583,480 62,426.27417 62,360 L62,80 L40,80 C17.90861,80 2.705415e-15,62.09139 0,40 C-2.705415e-15,17.90861 17.90861,4.05812251e-15 40,0 L984,0 Z',
    }),
    Xt = React.createElement('path', {
      d: 'M512,0 C534.09139,1.3527075e-15 552,17.90861 552,40 L552,40 L552,984 C552,1006.09139 534.09139,1024 512,1024 C489.90861,1024 472,1006.09139 472,984 L472,984 L472,40 C472,17.90861 489.90861,-1.3527075e-15 512,0 Z M288,242 C354.27417,242 408,295.72583 408,362 L408,362 L408,662 C408,728.27417 354.27417,782 288,782 L288,782 L208,782 C141.72583,782 88,728.27417 88,662 L88,662 L88,362 C88,295.72583 141.72583,242 208,242 L208,242 Z M816,242 C882.27417,242 936,295.72583 936,362 L936,362 L936,662 C936,728.27417 882.27417,782 816,782 L816,782 L736,782 C669.72583,782 616,728.27417 616,662 L616,662 L616,362 C616,295.72583 669.72583,242 736,242 L736,242 Z',
    }),
    Kt = React.createElement('path', {
      d: 'M160,0 C182.09139,1.3527075e-15 200,17.90861 200,40 L200,40 L200,984 C200,1006.09139 182.09139,1024 160,1024 C137.90861,1024 120,1006.09139 120,984 L120,984 L120,40 C120,17.90861 137.90861,-1.3527075e-15 160,0 Z M400,242 C466.27417,242 520,295.72583 520,362 L520,362 L520,662 C520,728.27417 466.27417,782 400,782 L400,782 L200,782 L200,242 Z M784,242 C850.27417,242 904,295.72583 904,362 L904,362 L904,662 C904,728.27417 850.27417,782 784,782 L784,782 L704,782 C637.72583,782 584,728.27417 584,662 L584,662 L584,362 C584,295.72583 637.72583,242 704,242 L704,242 Z',
    }),
    $t = React.createElement('path', {
      d: 'M864,0 C886.09139,-1.3527075e-15 904,17.90861 904,40 L904,984 C904,1006.09139 886.09139,1024 864,1024 C841.90861,1024 824,1006.09139 824,984 L824,782 L624,782 C557.72583,782 504,728.27417 504,662 L504,362 C504,295.72583 557.72583,242 624,242 L824,242 L824,40 C824,17.90861 841.90861,1.3527075e-15 864,0 Z M320,242 C386.27417,242 440,295.72583 440,362 L440,662 C440,728.27417 386.27417,782 320,782 L240,782 C173.72583,782 120,728.27417 120,662 L120,362 C120,295.72583 173.72583,242 240,242 L320,242 Z',
    }),
    Qt = React.createElement('path', {
      d: 'M984,0 C1006.09139,-1.3527075e-15 1024,17.90861 1024,40 L1024,984 C1024,1006.09139 1006.09139,1024 984,1024 C961.90861,1024 944,1006.09139 944,984 L944,782 L744,782 C677.72583,782 624,728.27417 624,662 L624,362 C624,295.72583 677.72583,242 744,242 L944,242 L944,40 C944,17.90861 961.90861,1.3527075e-15 984,0 Z M40,0 C62.09139,-1.3527075e-15 80,17.90861 80,40 L80,242 L280,242 C345.611428,242 398.924229,294.656686 399.983923,360.015581 L400,362 L400,662 C400,728.27417 346.27417,782 280,782 L280,782 L80,782 L80,512 L80,984 C80,1006.09139 62.09139,1024 40,1024 C17.90861,1024 -4.8316906e-13,1006.09139 -4.8316906e-13,984 L-4.26325641e-13,40 C-4.26325641e-13,17.90861 17.90861,1.3527075e-15 40,0 Z',
    }),
    ea = React.createElement('path', {
      d: 'M984,0 C1006.09139,-1.3527075e-15 1024,17.90861 1024,40 L1024,984 C1024,1006.09139 1006.09139,1024 984,1024 C961.90861,1024 944,1006.09139 944,984 L944,40 C944,17.90861 961.90861,1.3527075e-15 984,0 Z M40,0 C62.09139,-1.3527075e-15 80,17.90861 80,40 L80,984 C80,1006.09139 62.09139,1024 40,1024 C17.90861,1024 -2.84217094e-14,1006.09139 -2.84217094e-14,984 L2.84217094e-14,40 C2.84217094e-14,17.90861 17.90861,1.3527075e-15 40,0 Z M784,242 C850.27417,242 904,295.72583 904,362 L904,662 C904,728.27417 850.27417,782 784,782 L704,782 C637.72583,782 584,728.27417 584,662 L584,362 C584,295.72583 637.72583,242 704,242 L784,242 Z M320,242 C386.27417,242 440,295.72583 440,362 L440,362 L440,662 C440,728.27417 386.27417,782 320,782 L320,782 L240,782 C173.72583,782 120,728.27417 120,662 L120,662 L120,362 C120,295.72583 173.72583,242 240,242 L240,242 Z',
    }),
    ta = React.createElement('path', {
      d: 'M984,0 C1006.09139,-1.3527075e-15 1024,17.90861 1024,40 L1024,984 C1024,1006.09139 1006.09139,1024 984,1024 C961.90861,1024 944,1006.09139 944,984 L944,40 C944,17.90861 961.90861,1.3527075e-15 984,0 Z M40,0 C62.09139,-1.3527075e-15 80,17.90861 80,40 L80,984 C80,1006.09139 62.09139,1024 40,1024 C17.90861,1024 -2.84217094e-14,1006.09139 -2.84217094e-14,984 L2.84217094e-14,40 C2.84217094e-14,17.90861 17.90861,1.3527075e-15 40,0 Z M744,242 C810.27417,242 864,295.72583 864,362 L864,662 C864,728.27417 810.27417,782 744,782 L664,782 C597.72583,782 544,728.27417 544,662 L544,362 C544,295.72583 597.72583,242 664,242 L744,242 Z M360,242 C426.27417,242 480,295.72583 480,362 L480,362 L480,662 C480,728.27417 426.27417,782 360,782 L360,782 L280,782 C213.72583,782 160,728.27417 160,662 L160,662 L160,362 C160,295.72583 213.72583,242 280,242 L280,242 Z',
    }),
    aa = React.createElement('path', {
      d: 'M744,112 C810.27417,112 864,165.72583 864,232 L864,232 L864,471.999 L984,472 C1005.87048,472 1023.64141,489.552229 1023.99464,511.338527 L1024,512 C1024,534.09139 1006.09139,552 984,552 L984,552 L864,551.999 L864,792 C864,857.611428 811.343314,910.924229 745.984419,911.983923 L744,912 L664,912 C597.72583,912 544,858.27417 544,792 L544,792 L544,551.999 L479.999,552 L480,662 C480,727.611428 427.343314,780.924229 361.984419,781.983923 L360,782 L280,782 C213.72583,782 160,728.27417 160,662 L160,662 L159.999,552 L40,552 C18.1295239,552 0.358590478,534.447771 0.00535885717,512.661473 L6.82121026e-13,512 C6.82121026e-13,489.90861 17.90861,472 40,472 L40,472 L159.999,472 L160,362 C160,296.388572 212.656686,243.075771 278.015581,242.016077 L280,242 L360,242 C426.27417,242 480,295.72583 480,362 L480,362 L479.999,472 L544,471.999 L544,232 C544,166.388572 596.656686,113.075771 662.015581,112.016077 L664,112 Z',
    }),
    na = React.createElement('path', {
      d: 'M864,80 L864,760 C864,826.27417 810.27417,880 744,880 L744,880 L664,880 C597.72583,880 544,826.27417 544,760 L544,760 L544,80 L864,80 Z M480,80 L480,500 C480,566.27417 426.27417,620 360,620 L360,620 L280,620 C213.72583,620 160,566.27417 160,500 L160,500 L160,80 L480,80 Z M984,-1.15893678e-13 C1006.09139,-1.1454097e-13 1024,17.90861 1024,40 C1024,62.09139 1006.09139,80 984,80 L984,80 L40,80 C17.90861,80 6.82121026e-13,62.09139 6.82121026e-13,40 C6.82121026e-13,17.90861 17.90861,-1.63972755e-15 40,-2.87020043e-16 L40,-2.87020043e-16 Z',
    }),
    ra = React.createElement('path', {
      d: 'M160,524 C160,457.72583 213.72583,404 280,404 L360,404 C426.27417,404 480,457.72583 480,524 L480,944 L544,944 L544,264 C544,197.72583 597.72583,144 664,144 L744,144 C810.27417,144 864,197.72583 864,264 L864,944 L984,944 C1006.09139,944 1024,961.90861 1024,984 C1024,1006.09139 1006.09139,1024 984,1024 L40,1024 C17.90861,1024 9.09494702e-13,1006.09139 9.09494702e-13,984 C9.09494702e-13,961.90861 17.90861,944 40,944 L160,944 L160,524 Z',
    }),
    la = React.createElement('path', {
      d: 'M480,80 L479.999,943.999 L544,944 L544,80 L864,80 L864,944 L984,944 C1006.09139,944 1024,961.90861 1024,984 C1024,1006.09139 1006.09139,1024 984,1024 L40,1024 C17.90861,1024 9.09494702e-13,1006.09139 9.09494702e-13,984 C9.09494702e-13,961.90861 17.90861,944 40,944 L159.999,943.999 L160,80 L480,80 Z M984,0 C1006.09139,0 1024,17.90861 1024,40 C1024,62.09139 1006.09139,80 984,80 L40,80 C17.90861,80 9.09494702e-13,62.09139 9.09494702e-13,40 C9.09494702e-13,17.90861 17.90861,-1.27897692e-13 40,-1.13686838e-13 L984,0 Z',
    }),
    ia = React.createElement('path', {
      d: 'M40,944 L984,944 C1006.09139,944 1024,961.90861 1024,984 C1024,1006.09139 1006.09139,1024 984,1024 L40,1024 C17.90861,1024 9.09494702e-13,1006.09139 9.09494702e-13,984 C9.09494702e-13,961.90861 17.90861,944 40,944 Z M516.71049,0 C557.927273,0 586.19021,22.3748252 602.676923,58.8811189 L602.676923,58.8811189 L908.858741,741.902098 C914.746853,752.500699 917.102098,763.099301 917.102098,772.52028 C917.102098,811.381818 887.661538,842 848.8,842 C814.648951,842 791.096503,821.98042 778.142657,791.362238 L778.142657,791.362238 L711.018182,637.093706 L310.626573,637.093706 L241.146853,796.072727 C229.370629,825.513287 204.640559,842 174.022378,842 C136.338462,842 106.897902,812.559441 106.897902,774.875524 C106.897902,764.276923 110.430769,753.678322 116.318881,741.902098 L116.318881,741.902098 L422.500699,58.8811189 C438.987413,22.3748252 468.427972,0 509.644755,0 L509.644755,0 Z M510.822378,175.465734 L365.974825,508.732867 L655.66993,508.732867 L510.822378,175.465734 Z',
    }),
    Ca = React.createElement('path', {
      d: 'M541,272 C607.27417,272 661,325.72583 661,392 L661,632 C661,698.27417 607.27417,752 541,752 L483,752 C416.72583,752 363,698.27417 363,632 L363,392 C363,325.72583 416.72583,272 483,272 L541,272 Z M178,272 C244.27417,272 298,325.72583 298,392 L298,632 C298,698.27417 244.27417,752 178,752 L120,752 C53.72583,752 8.11624501e-15,698.27417 0,632 L0,392 C-3.65379544e-14,325.72583 53.72583,272 120,272 L178,272 Z M904,272 C970.27417,272 1024,325.72583 1024,392 L1024,632 C1024,698.27417 970.27417,752 904,752 L846,752 C779.72583,752 726,698.27417 726,632 L726,392 C726,325.72583 779.72583,272 846,272 L904,272 Z M149,352 C111.273429,352 80.6185686,382.277594 80.009244,419.858959 L80,421 L80,603 C80,641.107648 110.892352,672 149,672 C186.726571,672 217.381431,641.722406 217.990756,604.141041 L218,603 L218,421 C218,382.892352 187.107648,352 149,352 Z M875,352 C837.273429,352 806.618569,382.277594 806.009244,419.858959 L806,421 L806,603 C806,641.107648 836.892352,672 875,672 C912.726571,672 943.381431,641.722406 943.990756,604.141041 L944,603 L944,421 C944,382.892352 913.107648,352 875,352 Z',
    }),
    ca = React.createElement('path', {
      d: 'M178,544 C244.27417,544 298,597.72583 298,664 L298,904 C298,970.27417 244.27417,1024 178,1024 L120,1024 C53.72583,1024 8.11624501e-15,970.27417 0,904 L0,664 C-3.65379544e-14,597.72583 53.72583,544 120,544 L178,544 Z M904,544 C970.27417,544 1024,597.72583 1024,664 L1024,904 C1024,970.27417 970.27417,1024 904,1024 L846,1024 C779.72583,1024 726,970.27417 726,904 L726,664 C726,597.72583 779.72583,544 846,544 L904,544 Z M541,544 C607.27417,544 661,597.72583 661,664 L661,904 C661,970.27417 607.27417,1024 541,1024 L483,1024 C416.72583,1024 363,970.27417 363,904 L363,664 C363,597.72583 416.72583,544 483,544 L541,544 Z M512,624 C474.273429,624 443.618569,654.277594 443.009244,691.858959 L443,693 L443,875 C443,913.107648 473.892352,944 512,944 C549.726571,944 580.381431,913.722406 580.990756,876.141041 L581,875 L581,693 C581,654.892352 550.107648,624 512,624 Z M541,0 C607.27417,-1.21743675e-14 661,53.72583 661,120 L661,360 C661,426.27417 607.27417,480 541,480 L483,480 C416.72583,480 363,426.27417 363,360 L363,120 C363,53.72583 416.72583,1.21743675e-14 483,0 L541,0 Z M178,0 C244.27417,-1.21743675e-14 298,53.72583 298,120 L298,360 C298,426.27417 244.27417,480 178,480 L120,480 C53.72583,480 8.11624501e-15,426.27417 0,360 L0,120 C-3.65379544e-14,53.72583 53.72583,1.21743675e-14 120,0 L178,0 Z M904,0 C970.27417,-1.21743675e-14 1024,53.72583 1024,120 L1024,360 C1024,426.27417 970.27417,480 904,480 L846,480 C779.72583,480 726,426.27417 726,360 L726,120 C726,53.72583 779.72583,1.21743675e-14 846,0 L904,0 Z M149,80 C111.273429,80 80.6185686,110.277594 80.009244,147.858959 L80,149 L80,331 C80,369.107648 110.892352,400 149,400 C186.726571,400 217.381431,369.722406 217.990756,332.141041 L218,331 L218,149 C218,110.892352 187.107648,80 149,80 Z M875,80 C837.273429,80 806.618569,110.277594 806.009244,147.858959 L806,149 L806,331 C806,369.107648 836.892352,400 875,400 C912.726571,400 943.381431,369.722406 943.990756,332.141041 L944,331 L944,149 C944,110.892352 913.107648,80 875,80 Z',
    }),
    oa = React.createElement('path', {
      d: 'M512 384c-70.592 0-128 57.408-128 128s57.408 128 128 128 128-57.408 128-128-57.408-128-128-128z m0 192c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64z m416-96h-0.928C911.424 275.776 748.224 112.576 544 96.928V96c0-17.664-14.336-32-32-32s-32 14.336-32 32v0.928C275.776 112.576 112.576 275.776 96.928 480H96c-17.664 0-32 14.336-32 32s14.336 32 32 32h0.928C112.576 748.224 275.776 911.424 480 927.072V928c0 17.696 14.336 32 32 32s32-14.304 32-32v-0.928C748.224 911.424 911.424 748.224 927.072 544H928c17.696 0 32-14.336 32-32s-14.304-32-32-32zM544 863.072V800c0-17.696-14.336-32-32-32s-32 14.304-32 32v63.072C311.04 847.776 176.224 712.928 160.928 544H224c17.664 0 32-14.336 32-32s-14.336-32-32-32h-63.072C176.224 311.04 311.04 176.224 480 160.928V224c0 17.664 14.336 32 32 32s32-14.336 32-32v-63.072C712.928 176.224 847.776 311.04 863.072 480H800c-17.696 0-32 14.336-32 32s14.304 32 32 32h63.072C847.776 712.928 712.928 847.776 544 863.072z',
    }),
    La = React.createElement('path', {
      d: 'M648 307.2H217.6l128-128c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L118.4 315.2c-6.4 6.4-9.6 14.4-9.6 22.4s3.2 16 9.6 22.4l180.8 180.8c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L219.2 371.2H648c120 0 216 96 216 216s-96 216-216 216H320c-17.6 0-32 14.4-32 32s14.4 32 32 32h328c155.2 0 280-124.8 280-280s-124.8-280-280-280z',
    }),
    sa = React.createElement(
      'svg',
      { viewBox: '0 0 1056 1024' },
      React.createElement('path', {
        d: 'M144.050432 311.120128C150.72016 298.14528 159.483744 281.657568 165.972256 271.480736 245.506592 146.735712 385.091328 64 544 64 791.423552 64 992 264.576448 992 512 992 759.423552 791.423552 960 544 960 383.12528 960 242.055648 875.204416 163.047904 747.870016 152.260384 730.484064 148.608608 721.877024 148.608608 721.877024 140.526912 706.07824 121.00352 698.887232 104.646144 705.605952 88.174688 712.371488 81.331744 730.490304 89.107264 746.180064 89.107264 746.180064 94.27984 757.936064 105.745536 776.866816 195.465184 925.000928 358.17136 1024 544 1024 826.769792 1024 1056 794.769792 1056 512 1056 229.230208 826.769792 0 544 0 360.797344 0 200.068256 96.220896 109.592672 240.882816 105.015264 248.201632 99.386304 258.44688 94.010208 268.65776L76.719904 159.49104C73.980704 142.19648 57.73136 130.398432 40.154144 133.182368 22.698592 135.947072 10.815968 152.506944 13.539136 169.700448L38.593024 327.884448C44.117152 362.762368 76.620576 386.597728 111.74736 381.034208L269.931392 355.98032C287.335072 353.22384 299.2216 336.96048 296.437632 319.383232 293.67296 301.927712 277.178208 290.034752 260.117184 292.73696L144.050432 311.120128 144.050432 311.120128 144.050432 311.120128ZM544 223.852736C544 206.26096 529.79632 192 512 192 494.32688 192 480 206.584352 480 224.079136L480 511.72704C480 547.224 508.8624 576 544.27296 576L831.920864 576C849.637664 576 864 561.79632 864 544 864 526.32688 849.418752 512 832.147264 512L575.852736 512C558.26096 512 544 497.418752 544 480.147264L544 223.852736 544 223.852736 544 223.852736Z',
      })
    ),
    da = React.createElement('path', {
      d: 'M453.553208,130.165945 C510.884384,98.2598995 583.075347,118.345868 615.784549,174.941064 L616.763596,176.667229 L924.649574,729.899847 C934.581184,747.745708 939.793739,767.831089 939.793739,788.254399 C939.793739,853.865828 887.137053,907.178628 821.778158,908.238323 L819.793739,908.254399 L204.021781,908.254399 C183.598471,908.254399 163.51309,903.041844 145.667229,893.110235 C88.3360528,861.204189 67.357712,789.267478 98.2149938,731.641648 L99.1659454,729.899847 L407.051924,176.667229 C417.919777,157.139057 434.025036,141.033798 453.553208,130.165945 Z M492.456243,200.069836 C485.946852,203.692453 480.578432,209.060873 476.955815,215.570264 L169.069836,768.802882 C158.327059,788.106308 165.266837,812.463568 184.570264,823.206345 C190.518884,826.516881 197.214011,828.254399 204.021781,828.254399 L819.793739,828.254399 C841.885129,828.254399 859.793739,810.345789 859.793739,788.254399 C859.793739,781.446629 858.056221,774.751502 854.745684,768.802882 L546.859705,215.570264 C536.116929,196.266837 511.759669,189.327059 492.456243,200.069836 Z',
      transform:
        'translate(511.896869, 511.627200) rotate(-270.000000) translate(-511.896869, -511.627200) ',
    }),
    ha = React.createElement(
      'svg',
      { viewBox: '64 64 896 896' },
      React.createElement('path', {
        d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
      }),
      React.createElement('path', {
        d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
      })
    ),
    ma = React.createElement(
      'svg',
      { viewBox: '64 64 896 896' },
      React.createElement('path', {
        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
      }),
      React.createElement('path', {
        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z',
      })
    ),
    fa = React.createElement(
      'svg',
      { viewBox: '0 0 1424 1024' },
      React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(150.000000, 512.000000) rotate(90.000000) translate(-150.000000, -512.000000) ',
          x: '-50',
          y: '502',
          width: '400',
          height: '20',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M1344,218 C1388.18278,218 1424,253.81722 1424,298 L1424,726 C1424,770.18278 1388.18278,806 1344,806 L80,806 C35.81722,806 0,770.18278 0,726 L0,298 C0,253.81722 35.81722,218 80,218 L1344,218 Z M1344,238 L80,238 C47.1942859,238 20.5378857,264.328343 20,297.00779 L20,298 L20,726 C20,758.805714 46.328343,785.462114 79.0077903,785.991962 L80,786 L1344,786 C1376.80571,786 1403.46211,759.671657 1404,726.99221 L1404,726 L1404,298 C1404,265.194286 1377.67166,238.537886 1344.99221,238.008038 L1344,238 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        })
      )
    ),
    pa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M947.487373,862.63456 C951.392616,866.539803 951.392616,872.871452 947.487373,876.776695 L876.776695,947.487373 C872.871452,951.392616 866.539803,951.392616 862.63456,947.487373 C858.729317,943.58213 858.729317,937.250481 862.63456,933.345238 L933.345238,862.63456 C937.250481,858.729317 943.58213,858.729317 947.487373,862.63456 Z M912.132034,784.852814 C916.037277,788.758057 916.037277,795.089706 912.132034,798.994949 L798.994949,912.132034 C795.089706,916.037277 788.758057,916.037277 784.852814,912.132034 C780.947571,908.226791 780.947571,901.895142 784.852814,897.989899 L897.989899,784.852814 C901.895142,780.947571 908.226791,780.947571 912.132034,784.852814 Z M876.776695,707.071068 C880.681938,710.976311 880.681938,717.307961 876.776695,721.213203 L721.213203,876.776695 C717.307961,880.681938 710.976311,880.681938 707.071068,876.776695 C703.165825,872.871452 703.165825,866.539803 707.071068,862.63456 L862.63456,707.071068 C866.539803,703.165825 872.871452,703.165825 876.776695,707.071068 Z M150,90 C155.522847,90 160,94.4771525 160,100 L160,380 C160,385.522847 155.522847,390 150,390 C144.477153,390 140,385.522847 140,380 L140,100 C140,94.4771525 144.477153,90 150,90 Z',
        fill: 'var(--dn-brand-color)',
      })
    ),
    ua = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 571.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -571.000000) ',
        x: '502',
        y: '171',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 791.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -791.000000) ',
        x: '502',
        y: '391',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 350.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -350.000000) ',
        x: '503.5',
        y: '-150.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M903.653115,129.492777 C906.69467,124.882919 912.897366,123.611559 917.507223,126.653115 C922.036206,129.64131 923.342804,135.6807 920.50299,140.263154 L920.346885,140.507223 L863.014644,227.401401 C860.820018,230.727631 857.984696,233.583294 854.674239,235.801642 C841.047887,244.932702 822.647581,241.416301 813.331586,227.989873 L813.052078,227.579981 L754.744243,140.56675 C751.669812,135.978753 752.896799,129.767127 757.484796,126.692696 C761.990865,123.673166 768.063093,124.802804 771.191174,129.190685 L771.35885,129.43325 L829.666685,216.446481 C832.741116,221.034478 838.952742,222.261466 843.540739,219.187035 C844.533876,218.52153 845.398727,217.683951 846.09506,216.714816 L846.320874,216.386954 L903.653115,129.492777 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(362.000000, 181.000000) scale(-1, 1) rotate(630.000000) translate(-362.000000, -181.000000) ',
        x: '352',
        y: '-69',
        width: '20',
        height: '500',
        rx: '10',
      })
    ),
    Ra = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 350.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -350.000000) ',
        x: '503.5',
        y: '-150.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement(
        'g',
        { transform: 'translate(244.000000, 435.000000)' },
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(246.000000, 249.582549) scale(-1, 1) rotate(630.000000) translate(-246.000000, -249.582549) ',
          x: '236',
          y: '131.582549',
          width: '20',
          height: '236',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M475.900188,188.615819 C509.037273,188.615819 535.900188,215.478734 535.900188,248.615819 L535.900188,250.549278 C535.900188,283.686363 509.037273,310.549278 475.900188,310.549278 L413,310.549278 C379.862915,310.549278 353,283.686363 353,250.549278 L353,248.615819 C353,215.478734 379.862915,188.615819 413,188.615819 L475.900188,188.615819 Z M475.900188,208.615819 L413,208.615819 C391.129524,208.615819 373.35859,226.168048 373.005359,247.954346 L373,248.615819 L373,250.549278 C373,272.419754 390.552229,290.190688 412.338527,290.543919 L413,290.549278 L475.900188,290.549278 C497.770664,290.549278 515.541598,272.997049 515.894829,251.210751 L515.900188,250.549278 L515.900188,248.615819 C515.900188,226.745343 498.34796,208.97441 476.561661,208.621178 L475.900188,208.615819 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M475.900188,371.516008 C509.037273,371.516008 535.900188,398.378923 535.900188,431.516008 L535.900188,433.449466 C535.900188,466.586551 509.037273,493.449466 475.900188,493.449466 L413,493.449466 C379.862915,493.449466 353,466.586551 353,433.449466 L353,431.516008 C353,398.378923 379.862915,371.516008 413,371.516008 L475.900188,371.516008 Z M475.900188,391.516008 L413,391.516008 C391.129524,391.516008 373.35859,409.068236 373.005359,430.854534 L373,431.516008 L373,433.449466 C373,455.319943 390.552229,473.090876 412.338527,473.444108 L413,473.449466 L475.900188,473.449466 C497.770664,473.449466 515.541598,455.897238 515.894829,434.11094 L515.900188,433.449466 L515.900188,431.516008 C515.900188,409.645531 498.34796,391.874598 476.561661,391.521366 L475.900188,391.516008 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M147,141.5 L147,372.5 C147,399.838095 168.940286,422.051762 196.173159,422.493301 L197,422.5 L364,422.5 L364,442.5 L197,442.5 C158.726667,442.5 127.627533,411.7836 127.009378,373.657578 L127,372.5 L127,141.5 L147,141.5 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M214.350282,1.56319402e-13 C247.487367,1.56319402e-13 274.350282,26.862915 274.350282,60 L274.350282,92.4168236 C274.350282,125.553909 247.487367,152.416824 214.350282,152.416824 L60,152.416824 C26.862915,152.416824 2.84217094e-14,125.553909 2.84217094e-14,92.4168236 L2.84217094e-14,60 C2.84217094e-14,26.862915 26.862915,1.56319402e-13 60,1.56319402e-13 L214.350282,1.56319402e-13 Z M214.350282,20 L60,20 C38.1295239,20 20.3585905,37.5522287 20.0053589,59.3385269 L20,60 L20,92.4168236 C20,114.2873 37.5522287,132.058233 59.3385269,132.411465 L60,132.416824 L214.350282,132.416824 C236.220759,132.416824 253.991692,114.864595 254.344924,93.0782967 L254.350282,92.4168236 L254.350282,60 C254.350282,38.1295239 236.798054,20.3585905 215.011756,20.0053589 L214.350282,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        })
      ),
      React.createElement('path', {
        d: 'M903.653115,129.492777 C906.69467,124.882919 912.897366,123.611559 917.507223,126.653115 C922.036206,129.64131 923.342804,135.6807 920.50299,140.263154 L920.346885,140.507223 L863.014644,227.401401 C860.820018,230.727631 857.984696,233.583294 854.674239,235.801642 C841.047887,244.932702 822.647581,241.416301 813.331586,227.989873 L813.052078,227.579981 L754.744243,140.56675 C751.669812,135.978753 752.896799,129.767127 757.484796,126.692696 C761.990865,123.673166 768.063093,124.802804 771.191174,129.190685 L771.35885,129.43325 L829.666685,216.446481 C832.741116,221.034478 838.952742,222.261466 843.540739,219.187035 C844.533876,218.52153 845.398727,217.683951 846.09506,216.714816 L846.320874,216.386954 L903.653115,129.492777 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(362.000000, 181.000000) scale(-1, 1) rotate(630.000000) translate(-362.000000, -181.000000) ',
        x: '352',
        y: '-69',
        width: '20',
        height: '500',
        rx: '10',
      })
    ),
    ga = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 350.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -350.000000) ',
        x: '503.5',
        y: '-150.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 571.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -571.000000) ',
        x: '502',
        y: '171',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 791.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -791.000000) ',
        x: '502',
        y: '391',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M903.653115,129.492777 C906.69467,124.882919 912.897366,123.611559 917.507223,126.653115 C922.036206,129.64131 923.342804,135.6807 920.50299,140.263154 L920.346885,140.507223 L863.014644,227.401401 C860.820018,230.727631 857.984696,233.583294 854.674239,235.801642 C841.047887,244.932702 822.647581,241.416301 813.331586,227.989873 L813.052078,227.579981 L754.744243,140.56675 C751.669812,135.978753 752.896799,129.767127 757.484796,126.692696 C761.990865,123.673166 768.063093,124.802804 771.191174,129.190685 L771.35885,129.43325 L829.666685,216.446481 C832.741116,221.034478 838.952742,222.261466 843.540739,219.187035 C844.533876,218.52153 845.398727,217.683951 846.09506,216.714816 L846.320874,216.386954 L903.653115,129.492777 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M189.695312,247.351563 C194.03125,247.351563 196.199219,245.535156 196.199219,241.902344 C196.199219,241.667969 195.613281,239.265625 194.441406,234.695313 L194.441406,234.695313 L163.503906,118.328125 C162.566406,114.695313 160.457031,112.878906 157.175781,112.878906 C153.777344,112.878906 151.609375,114.695313 150.671875,118.328125 L150.671875,118.328125 L119.382812,235.398438 C119.28583,235.774246 119.193863,236.134378 119.106913,236.478834 L118.939702,237.146844 C118.297609,239.735281 117.976562,241.320447 117.976562,241.902344 C117.976562,245.535156 119.910156,247.351563 123.777344,247.351563 C127.292969,247.351563 129.519531,245.535156 130.457031,241.902344 L130.457031,241.902344 L139.070312,209.558594 L174.929688,209.558594 L183.71875,241.902344 C184.65625,245.535156 186.648438,247.351563 189.695312,247.351563 Z M171.765625,196.726563 L142.410156,196.726563 L157.175781,140.300781 L171.765625,196.726563 Z M315.183594,244.1875 C317.996094,244.1875 322.976562,244.070313 330.125,243.835938 C337.039062,243.71875 342.605469,243.660156 346.824219,243.660156 C357.605469,243.660156 366.804688,240.554688 374.421875,234.34375 C382.507812,227.78125 386.550781,219.226563 386.550781,208.679688 C386.550781,200.945313 383.914062,194.265625 378.640625,188.640625 C373.953125,183.601563 367.742188,179.910156 360.007812,177.566406 C375.476562,171.003906 383.210938,160.984375 383.210938,147.507813 C383.210938,137.078125 379.226562,128.992188 371.257812,123.25 C364.226562,117.976563 355.261719,115.339844 344.363281,115.339844 L344.363281,115.339844 L315.183594,115.339844 C310.027344,115.339844 307.449219,117.917969 307.449219,123.074219 L307.449219,123.074219 L307.449219,236.453125 C307.449219,241.609375 310.027344,244.1875 315.183594,244.1875 Z M320.316345,171.765625 L320.105469,171.765625 L320.105469,133.09375 C320.105469,129.8125 321.804688,128.171875 325.203125,128.171875 L325.203125,128.171875 L345.066406,128.171875 C351.628906,128.171875 357.136719,129.695313 361.589844,132.742188 C366.746094,136.375 369.324219,141.296875 369.324219,147.507813 C369.324219,155.007813 365.691406,161.101563 358.425781,165.789063 C351.980469,169.65625 344.890625,171.589844 337.15625,171.589844 L337.15625,171.589844 L328.367188,171.589844 C324.5,171.707031 321.746094,171.765625 320.105469,171.765625 L320.316345,171.765625 Z M325.203125,231.53125 C321.804688,231.53125 320.105469,229.832031 320.105469,226.433594 L320.105469,226.433594 L320.105469,184.773438 L332.761719,184.773438 C342.488281,184.773438 350.925781,186.355469 358.074219,189.519531 C367.917969,193.738281 372.839844,200.125 372.839844,208.679688 C372.839844,215.828125 369.910156,221.453125 364.050781,225.554688 C358.894531,229.304688 352.507812,231.179688 344.890625,231.179688 C342.429688,231.179688 339.03125,231.238281 334.695312,231.355469 C330.476562,231.472656 327.3125,231.53125 325.203125,231.53125 Z M538.40625,247.175781 C552.234375,247.175781 563.074219,240.4375 570.925781,226.960938 C574.910156,219.929688 576.902344,214.773438 576.902344,211.492188 C576.902344,206.921875 574.441406,204.636719 569.519531,204.636719 C567.292969,204.636719 565.710938,206.570313 564.773438,210.4375 C562.898438,217.351563 559.851562,222.917969 555.632812,227.136719 C550.945312,231.941406 545.203125,234.34375 538.40625,234.34375 C528.445312,234.34375 521.003906,227.605469 516.082031,214.128906 C512.683594,204.519531 510.984375,193.796875 510.984375,181.960938 C510.984375,168.484375 512.507812,156.882813 515.554688,147.15625 C520.242188,132.625 527.859375,125.359375 538.40625,125.359375 C545.90625,125.359375 551.648438,127.820313 555.632812,132.742188 C557.859375,135.4375 560.203125,140.125 562.664062,146.804688 C564.539062,151.726563 566.355469,154.1875 568.113281,154.1875 C573.035156,154.1875 575.496094,151.902344 575.496094,147.332031 C575.496094,137.957031 571.6875,129.871094 564.070312,123.074219 C556.335938,116.277344 547.78125,112.878906 538.40625,112.878906 C523.40625,112.878906 512.332031,121.199219 505.183594,137.839844 C499.910156,150.144531 497.273438,164.851563 497.273438,181.960938 C497.273438,197.78125 500.144531,211.726563 505.886719,223.796875 C513.386719,239.382813 524.226562,247.175781 538.40625,247.175781 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(248.000000, 183.602540) scale(-1, 1) rotate(75.000000) translate(-248.000000, -183.602540) ',
        x: '188',
        y: '173.60254',
        width: '120',
        height: '20',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(449.000000, 183.602540) scale(-1, 1) rotate(75.000000) translate(-449.000000, -183.602540) ',
        x: '389',
        y: '173.60254',
        width: '120',
        height: '20',
        rx: '10',
      })
    ),
    Ma = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M182,172 C259.319865,172 322,234.680135 322,312 C322,389.319865 259.319865,452 182,452 C104.680135,452 42,389.319865 42,312 C42,234.680135 104.680135,172 182,172 Z M182,192 C115.72583,192 62,245.72583 62,312 C62,378.27417 115.72583,432 182,432 C248.27417,432 302,378.27417 302,312 C302,245.72583 248.27417,192 182,192 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(702.000000, 312.000000) scale(-1, 1) rotate(630.000000) translate(-702.000000, -312.000000) ',
        x: '692',
        y: '32',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M182,252 C215.137085,252 242,278.862915 242,312 C242,345.137085 215.137085,372 182,372 C148.862915,372 122,345.137085 122,312 C122,278.862915 148.862915,252 182,252 Z M182,272 C159.90861,272 142,289.90861 142,312 C142,334.09139 159.90861,352 182,352 C204.09139,352 222,334.09139 222,312 C222,289.90861 204.09139,272 182,272 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M182,572 C259.319865,572 322,634.680135 322,712 C322,789.319865 259.319865,852 182,852 C104.680135,852 42,789.319865 42,712 C42,634.680135 104.680135,572 182,572 Z M182,592 C115.72583,592 62,645.72583 62,712 C62,778.27417 115.72583,832 182,832 C248.27417,832 302,778.27417 302,712 C302,645.72583 248.27417,592 182,592 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(702.000000, 712.000000) scale(-1, 1) rotate(630.000000) translate(-702.000000, -712.000000) ',
        x: '692',
        y: '432',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M182,172 C259.319865,172 322,234.680135 322,312 C322,389.319865 259.319865,452 182,452 C104.680135,452 42,389.319865 42,312 C42,234.680135 104.680135,172 182,172 Z M182,192 C115.72583,192 62,245.72583 62,312 C62,378.27417 115.72583,432 182,432 C248.27417,432 302,378.27417 302,312 C302,245.72583 248.27417,192 182,192 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(702.000000, 312.000000) scale(-1, 1) rotate(630.000000) translate(-702.000000, -312.000000) ',
        x: '692',
        y: '32',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M182,252 C215.137085,252 242,278.862915 242,312 C242,345.137085 215.137085,372 182,372 C148.862915,372 122,345.137085 122,312 C122,278.862915 148.862915,252 182,252 Z M182,272 C159.90861,272 142,289.90861 142,312 C142,334.09139 159.90861,352 182,352 C204.09139,352 222,334.09139 222,312 C222,289.90861 204.09139,272 182,272 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M182,572 C259.319865,572 322,634.680135 322,712 C322,789.319865 259.319865,852 182,852 C104.680135,852 42,789.319865 42,712 C42,634.680135 104.680135,572 182,572 Z M182,592 C115.72583,592 62,645.72583 62,712 C62,778.27417 115.72583,832 182,832 C248.27417,832 302,778.27417 302,712 C302,645.72583 248.27417,592 182,592 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(702.000000, 712.000000) scale(-1, 1) rotate(630.000000) translate(-702.000000, -712.000000) ',
        x: '692',
        y: '432',
        width: '20',
        height: '560',
        rx: '10',
      })
    ),
    ya = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M282,162 L82,162 C54.3857625,162 32,184.385763 32,212 L32,412 C32,439.614237 54.3857625,462 82,462 L282,462 C309.614237,462 332,439.614237 332,412 L332,212 C332,184.385763 309.614237,162 282,162 Z M82,182 L282,182 C298.568542,182 312,195.431458 312,212 L312,412 C312,428.568542 298.568542,442 282,442 L82,442 C65.4314575,442 52,428.568542 52,412 L52,212 C52,195.431458 65.4314575,182 82,182 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M282,562 L82,562 C54.3857625,562 32,584.385763 32,612 L32,812 C32,839.614237 54.3857625,862 82,862 L282,862 C309.614237,862 332,839.614237 332,812 L332,612 C332,584.385763 309.614237,562 282,562 Z M82,582 L282,582 C298.568542,582 312,595.431458 312,612 L312,812 C312,828.568542 298.568542,842 282,842 L82,842 C65.4314575,842 52,828.568542 52,812 L52,612 C52,595.431458 65.4314575,582 82,582 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(702.000000, 312.000000) scale(-1, 1) rotate(630.000000) translate(-702.000000, -312.000000) ',
        x: '692',
        y: '32',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(702.000000, 712.000000) scale(-1, 1) rotate(630.000000) translate(-702.000000, -712.000000) ',
        x: '692',
        y: '432',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M266.959609,247.398388 C270.881721,243.510087 277.213311,243.537497 281.101612,247.459609 C284.919216,251.31041 284.962205,257.483868 281.250462,261.387129 L281.040391,261.601612 L179.182262,362.581653 C167.569231,374.094573 148.905532,374.169556 137.200441,362.836926 L136.847885,362.490021 L82.9289322,308.571068 C79.0236893,304.665825 79.0236893,298.334175 82.9289322,294.428932 C86.7631707,290.594694 92.9363852,290.52498 96.8556774,294.219792 L97.0710678,294.428932 L150.990021,348.347885 C154.812528,352.170392 160.962783,352.253054 164.885852,348.586012 L165.10148,348.37843 L266.959609,247.398388 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    ba = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('rect', {
        fill: '#999999',
        x: '289',
        y: '304',
        width: '735',
        height: '20',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        x: '0',
        y: '702',
        width: '531',
        height: '20',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        x: '799',
        y: '702',
        width: '225',
        height: '20',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M150,164 C67.1572875,164 0,231.157288 0,314 C0,396.842712 67.1572875,464 150,464 C232.842712,464 300,396.842712 300,314 C300,231.157288 232.842712,164 150,164 Z M150,184 C221.797017,184 280,242.202983 280,314 C280,385.797017 221.797017,444 150,444 C78.2029825,444 20,385.797017 20,314 C20,242.202983 78.2029825,184 150,184 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M664,562 C581.157288,562 514,629.157288 514,712 C514,794.842712 581.157288,862 664,862 C746.842712,862 814,794.842712 814,712 C814,629.157288 746.842712,562 664,562 Z M664,582 C735.797017,582 794,640.202983 794,712 C794,783.797017 735.797017,842 664,842 C592.202983,842 534,783.797017 534,712 C534,640.202983 592.202983,582 664,582 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    Za = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M487.286155,34.2736908 L320.815283,276.187129 C319.518769,278.071208 317.615604,279.453938 315.423095,280.104784 L33.9074136,363.672628 C30.3952048,364.715226 27.103676,366.392344 24.1957719,368.620957 C11.0451673,378.699558 8.55481647,397.53055 18.6334176,410.681154 L197.264441,643.759726 C198.655661,645.574996 199.382605,647.8123 199.324074,650.098623 L191.808687,943.65983 C191.714925,947.32232 192.29282,950.971008 193.513765,954.425268 C199.035324,970.046695 216.175101,978.234256 231.796528,972.712697 L508.667444,874.849738 C510.82378,874.087558 513.17622,874.087558 515.332556,874.849738 L792.203472,972.712697 C795.657733,973.933642 799.30642,974.511537 802.96891,974.417775 C819.532026,973.993747 832.615341,960.222946 832.191313,943.65983 L824.675926,650.098623 C824.617395,647.8123 825.344339,645.574996 826.735559,643.759726 L1005.36658,410.681154 C1007.5952,407.77325 1009.27231,404.481721 1010.31491,400.969512 C1015.02992,385.086021 1005.97608,368.387637 990.092586,363.672628 L708.576905,280.104784 C706.384396,279.453938 704.481231,278.071208 703.184717,276.187129 L536.713845,34.2736908 C534.636943,31.2555623 532.024771,28.6433902 529.006642,26.5664883 C515.357563,17.1739791 496.678664,20.6246113 487.286155,34.2736908 Z M517.668881,43.0423848 C518.674924,43.7346854 519.545648,44.6054094 520.237948,45.6114523 L686.708821,287.524891 C690.598363,293.177126 696.307856,297.325316 702.885386,299.277853 L984.401066,382.845698 C989.695563,384.417367 992.713511,389.983495 991.141841,395.277992 C990.794309,396.448729 990.235269,397.545905 989.492398,398.515206 L810.861375,631.593778 C806.687715,637.039589 804.506882,643.751501 804.682477,650.610471 L812.197864,944.171677 C812.339206,949.692716 807.978101,954.282983 802.457063,954.430326 C801.236233,954.45558 800.020004,954.262948 798.868583,953.855966 L521.997667,855.993007 C515.528661,853.706468 508.471339,853.706468 502.002333,855.993007 L225.131417,953.855966 C219.924274,955.696486 214.211015,952.967299 212.370496,947.760157 C211.963514,946.608737 211.770882,945.392507 211.802136,944.171677 L219.317523,650.610471 C219.493118,643.751501 217.312285,637.039589 213.138625,631.593778 L34.5076015,398.515206 C31.1480678,394.131671 31.9781848,387.854674 36.3617196,384.49514 C37.331021,383.75227 38.4281973,383.19323 39.5989335,382.845698 L321.114614,299.277853 C327.692144,297.325316 333.401637,293.177126 337.291179,287.524891 L503.762052,45.6114523 C506.83698,41.1430036 512.897807,39.9537114 517.42357,42.8787518 L517.668881,43.0423848 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(512.000000, 659.000000) scale(-1, 1) rotate(90.000000) translate(-512.000000, -659.000000) ',
        x: '502',
        y: '479',
        width: '20',
        height: '360',
        rx: '10',
      })
    ),
    Ea = {
      light: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(266.000000, 123.000000) scale(-1, 1) translate(-266.000000, -123.000000) ',
          x: '256',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(770.000000, 123.000000) scale(-1, 1) translate(-770.000000, -123.000000) ',
          x: '760',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(512.000000, 310.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -310.000000) ',
          x: '502',
          y: '-202',
          width: '20',
          height: '1024',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '152',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '152',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '152',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '632',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '632',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '632',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '312',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '312',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '312',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '792',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '792',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '792',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M165.894531,113.494448 C171.417379,113.494448 175.894531,117.9716 175.894531,123.494448 C175.894531,128.923687 171.56786,133.342379 166.174436,133.490606 L165.894531,133.494448 L88.4375,133.494448 C51.0375365,133.494448 20.613907,163.802329 20.0091744,201.462605 L20,202.606052 L20,934.388395 C20,972.194862 50.0496299,1002.88081 87.3063267,1003.49075 L88.4375,1003.5 L935.5625,1003.5 C972.962464,1003.5 1003.38609,973.192119 1003.99083,935.531843 L1004,934.388395 L1004,202.606052 C1004,164.799585 973.95037,134.113639 936.693673,133.503701 L935.5625,133.494448 L859.085938,133.494448 C853.56309,133.494448 849.085938,129.017295 849.085938,123.494448 C849.085938,118.065208 853.412608,113.646516 858.806033,113.494448 L859.085938,113.494448 L935.5625,113.494448 C983.93581,113.494448 1023.20756,152.615815 1023.98816,201.132989 L1024,202.606052 L1024,934.388395 C1024,983.092351 985.211983,1022.70076 937.025542,1023.48806 L935.5625,1023.5 L88.4375,1023.5 C40.0641901,1023.5 0.792440052,984.378633 0.011842382,935.861458 L0,934.388395 L0,202.606052 C0,153.902096 38.788017,114.293689 86.9744583,113.506392 L88.4375,113.494448 L165.894531,113.494448 Z M661.03125,113.494448 C666.554097,113.494448 671.03125,117.9716 671.03125,123.494448 C671.03125,128.923687 666.704579,133.342379 661.311155,133.490606 L661.03125,133.494448 L363.949219,133.494448 C358.426371,133.494448 353.949219,129.017295 353.949219,123.494448 C353.949219,118.065208 358.27589,113.646516 363.669314,113.498289 L363.949219,113.494448 L661.03125,113.494448 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '472',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '472',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '472',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        })
      ),
      dark: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(266.000000, 123.000000) scale(-1, 1) translate(-266.000000, -123.000000) ',
          x: '256',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(770.000000, 123.000000) scale(-1, 1) translate(-770.000000, -123.000000) ',
          x: '760',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(512.000000, 310.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -310.000000) ',
          x: '502',
          y: '-202',
          width: '20',
          height: '1024',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '152',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '152',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '152',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '632',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '632',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '632',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '312',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '312',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '312',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '792',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '792',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '792',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M165.894531,113.494448 C171.417379,113.494448 175.894531,117.9716 175.894531,123.494448 C175.894531,128.923687 171.56786,133.342379 166.174436,133.490606 L165.894531,133.494448 L88.4375,133.494448 C51.0375365,133.494448 20.613907,163.802329 20.0091744,201.462605 L20,202.606052 L20,934.388395 C20,972.194862 50.0496299,1002.88081 87.3063267,1003.49075 L88.4375,1003.5 L935.5625,1003.5 C972.962464,1003.5 1003.38609,973.192119 1003.99083,935.531843 L1004,934.388395 L1004,202.606052 C1004,164.799585 973.95037,134.113639 936.693673,133.503701 L935.5625,133.494448 L859.085938,133.494448 C853.56309,133.494448 849.085938,129.017295 849.085938,123.494448 C849.085938,118.065208 853.412608,113.646516 858.806033,113.494448 L859.085938,113.494448 L935.5625,113.494448 C983.93581,113.494448 1023.20756,152.615815 1023.98816,201.132989 L1024,202.606052 L1024,934.388395 C1024,983.092351 985.211983,1022.70076 937.025542,1023.48806 L935.5625,1023.5 L88.4375,1023.5 C40.0641901,1023.5 0.792440052,984.378633 0.011842382,935.861458 L0,934.388395 L0,202.606052 C0,153.902096 38.788017,114.293689 86.9744583,113.506392 L88.4375,113.494448 L165.894531,113.494448 Z M661.03125,113.494448 C666.554097,113.494448 671.03125,117.9716 671.03125,123.494448 C671.03125,128.923687 666.704579,133.342379 661.311155,133.490606 L661.03125,133.494448 L363.949219,133.494448 C358.426371,133.494448 353.949219,129.017295 353.949219,123.494448 C353.949219,118.065208 358.27589,113.646516 363.669314,113.498289 L363.949219,113.494448 L661.03125,113.494448 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '472',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '472',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '472',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        })
      ),
    },
    va = {
      light: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(266.000000, 123.000000) scale(-1, 1) translate(-266.000000, -123.000000) ',
          x: '256',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(770.000000, 123.000000) scale(-1, 1) translate(-770.000000, -123.000000) ',
          x: '760',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(512.000000, 310.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -310.000000) ',
          x: '502',
          y: '-202',
          width: '20',
          height: '1024',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '152',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '152',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '152',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '632',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '632',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '632',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '312',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '312',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '312',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '792',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '792',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '792',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '472',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '472',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '472',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M165.894531,113.494448 C171.417379,113.494448 175.894531,117.9716 175.894531,123.494448 C175.894531,128.923687 171.56786,133.342379 166.174436,133.490606 L165.894531,133.494448 L88.4375,133.494448 C51.0375365,133.494448 20.613907,163.802329 20.0091744,201.462605 L20,202.606052 L20,934.388395 C20,972.194862 50.0496299,1002.88081 87.3063267,1003.49075 L88.4375,1003.5 L935.5625,1003.5 C972.962464,1003.5 1003.38609,973.192119 1003.99083,935.531843 L1004,934.388395 L1004,202.606052 C1004,164.799585 973.95037,134.113639 936.693673,133.503701 L935.5625,133.494448 L859.085938,133.494448 C853.56309,133.494448 849.085938,129.017295 849.085938,123.494448 C849.085938,118.065208 853.412608,113.646516 858.806033,113.494448 L859.085938,113.494448 L935.5625,113.494448 C983.93581,113.494448 1023.20756,152.615815 1023.98816,201.132989 L1024,202.606052 L1024,934.388395 C1024,983.092351 985.211983,1022.70076 937.025542,1023.48806 L935.5625,1023.5 L88.4375,1023.5 C40.0641901,1023.5 0.792440052,984.378633 0.011842382,935.861458 L0,934.388395 L0,202.606052 C0,153.902096 38.788017,114.293689 86.9744583,113.506392 L88.4375,113.494448 L165.894531,113.494448 Z M661.03125,113.494448 C666.554097,113.494448 671.03125,117.9716 671.03125,123.494448 C671.03125,128.923687 666.704579,133.342379 661.311155,133.490606 L661.03125,133.494448 L363.949219,133.494448 C358.426371,133.494448 353.949219,129.017295 353.949219,123.494448 C353.949219,118.065208 358.27589,113.646516 363.669314,113.498289 L363.949219,113.494448 L661.03125,113.494448 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        })
      ),
      dark: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(266.000000, 123.000000) scale(-1, 1) translate(-266.000000, -123.000000) ',
          x: '256',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(770.000000, 123.000000) scale(-1, 1) translate(-770.000000, -123.000000) ',
          x: '760',
          y: '63',
          width: '20',
          height: '120',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(512.000000, 310.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -310.000000) ',
          x: '502',
          y: '-202',
          width: '20',
          height: '1024',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '152',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '152',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '152',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '632',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '632',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '632',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '312',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '312',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '312',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '792',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '792',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '792',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '472',
          y: '457',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          x: '472',
          y: '617',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '472',
          y: '777',
          width: '80',
          height: '80',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M165.894531,113.494448 C171.417379,113.494448 175.894531,117.9716 175.894531,123.494448 C175.894531,128.923687 171.56786,133.342379 166.174436,133.490606 L165.894531,133.494448 L88.4375,133.494448 C51.0375365,133.494448 20.613907,163.802329 20.0091744,201.462605 L20,202.606052 L20,934.388395 C20,972.194862 50.0496299,1002.88081 87.3063267,1003.49075 L88.4375,1003.5 L935.5625,1003.5 C972.962464,1003.5 1003.38609,973.192119 1003.99083,935.531843 L1004,934.388395 L1004,202.606052 C1004,164.799585 973.95037,134.113639 936.693673,133.503701 L935.5625,133.494448 L859.085938,133.494448 C853.56309,133.494448 849.085938,129.017295 849.085938,123.494448 C849.085938,118.065208 853.412608,113.646516 858.806033,113.494448 L859.085938,113.494448 L935.5625,113.494448 C983.93581,113.494448 1023.20756,152.615815 1023.98816,201.132989 L1024,202.606052 L1024,934.388395 C1024,983.092351 985.211983,1022.70076 937.025542,1023.48806 L935.5625,1023.5 L88.4375,1023.5 C40.0641901,1023.5 0.792440052,984.378633 0.011842382,935.861458 L0,934.388395 L0,202.606052 C0,153.902096 38.788017,114.293689 86.9744583,113.506392 L88.4375,113.494448 L165.894531,113.494448 Z M661.03125,113.494448 C666.554097,113.494448 671.03125,117.9716 671.03125,123.494448 C671.03125,128.923687 666.704579,133.342379 661.311155,133.490606 L661.03125,133.494448 L363.949219,133.494448 C358.426371,133.494448 353.949219,129.017295 353.949219,123.494448 C353.949219,118.065208 358.27589,113.646516 363.669314,113.498289 L363.949219,113.494448 L661.03125,113.494448 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        })
      ),
    },
    xa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M692,67.4415588 C697.522847,67.4415588 702,71.9187113 702,77.4415588 C702,82.8707987 697.673329,87.2894905 692.279905,87.437717 L692,87.4415588 L352,87.4415588 C346.57076,87.4415588 342.152068,91.7682296 342.003842,97.1616539 L342,97.4415588 L342,437.441559 C342,442.964406 337.522847,447.441559 332,447.441559 C326.57076,447.441559 322.152068,443.114888 322.003842,437.721464 L322,437.441559 L322,97.4415588 C322,81.0387017 335.164172,67.7105016 351.503895,67.4455779 L352,67.4415588 L692,67.4415588 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(512.000000, 257.441559) rotate(45.000000) translate(-512.000000, -257.441559) ',
      }),
      React.createElement('path', {
        d: 'M692,579.441559 C697.522847,579.441559 702,583.918711 702,589.441559 C702,594.870799 697.673329,599.28949 692.279905,599.437717 L692,599.441559 L352,599.441559 C346.57076,599.441559 342.152068,603.76823 342.003842,609.161654 L342,609.441559 L342,949.441559 C342,954.964406 337.522847,959.441559 332,959.441559 C326.57076,959.441559 322.152068,955.114888 322.003842,949.721464 L322,949.441559 L322,609.441559 C322,593.038702 335.164172,579.710502 351.503895,579.445578 L352,579.441559 L692,579.441559 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(512.000000, 769.441559) scale(1, -1) rotate(45.000000) translate(-512.000000, -769.441559) ',
      }),
      React.createElement('path', {
        d: 'M160,656.390625 C181.354167,656.390625 199.583333,647.927083 214.6875,631 C232.395833,611.208333 241.25,575.921875 241.25,525.140625 C241.25,468.630208 233.567708,432.5625 218.203125,416.9375 C203.098958,401.572917 183.697917,393.890625 160,393.890625 C127.1875,393.890625 104.401042,408.864583 91.640625,438.8125 C83.046875,458.604167 78.75,487.380208 78.75,525.140625 C78.75,575.401042 86.171875,609.776042 101.015625,628.265625 C116.119792,647.015625 135.78125,656.390625 160,656.390625 Z M160,629.828125 C137.604167,629.828125 122.239583,617.328125 113.90625,592.328125 C108.958333,576.703125 106.484375,554.307292 106.484375,525.140625 C106.484375,495.192708 108.958333,472.666667 113.90625,457.5625 C122.239583,432.5625 137.604167,420.0625 160,420.0625 C175.625,420.0625 188.385417,426.052083 198.28125,438.03125 C208.177083,449.75 213.125,478.786458 213.125,525.140625 C213.125,564.463542 206.744792,592.979167 193.984375,610.6875 C184.348958,623.447917 173.020833,629.828125 160,629.828125 Z M360,656.390625 C381.354167,656.390625 399.583333,647.927083 414.6875,631 C432.395833,611.208333 441.25,575.921875 441.25,525.140625 C441.25,468.630208 433.567708,432.5625 418.203125,416.9375 C403.098958,401.572917 383.697917,393.890625 360,393.890625 C327.1875,393.890625 304.401042,408.864583 291.640625,438.8125 C283.046875,458.604167 278.75,487.380208 278.75,525.140625 C278.75,575.401042 286.171875,609.776042 301.015625,628.265625 C316.119792,647.015625 335.78125,656.390625 360,656.390625 Z M360,629.828125 C337.604167,629.828125 322.239583,617.328125 313.90625,592.328125 C308.958333,576.703125 306.484375,554.307292 306.484375,525.140625 C306.484375,495.192708 308.958333,472.666667 313.90625,457.5625 C322.239583,432.5625 337.604167,420.0625 360,420.0625 C375.625,420.0625 388.385417,426.052083 398.28125,438.03125 C408.177083,449.75 413.125,478.786458 413.125,525.140625 C413.125,564.463542 406.744792,592.979167 393.984375,610.6875 C384.348958,623.447917 373.020833,629.828125 360,629.828125 Z',
        stroke: '#FFFFFF',
        strokeWidth: '0.5',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M664,656.390625 C685.354167,656.390625 703.583333,647.927083 718.6875,631 C736.395833,611.208333 745.25,575.921875 745.25,525.140625 C745.25,468.630208 737.567708,432.5625 722.203125,416.9375 C707.098958,401.572917 687.697917,393.890625 664,393.890625 C631.1875,393.890625 608.401042,408.864583 595.640625,438.8125 C587.046875,458.604167 582.75,487.380208 582.75,525.140625 C582.75,575.401042 590.171875,609.776042 605.015625,628.265625 C620.119792,647.015625 639.78125,656.390625 664,656.390625 Z M664,629.828125 C641.604167,629.828125 626.239583,617.328125 617.90625,592.328125 C612.958333,576.703125 610.484375,554.307292 610.484375,525.140625 C610.484375,495.192708 612.958333,472.666667 617.90625,457.5625 C626.239583,432.5625 641.604167,420.0625 664,420.0625 C679.625,420.0625 692.385417,426.052083 702.28125,438.03125 C712.177083,449.75 717.125,478.786458 717.125,525.140625 C717.125,564.463542 710.744792,592.979167 697.984375,610.6875 C688.348958,623.447917 677.020833,629.828125 664,629.828125 Z M864,656.390625 C885.354167,656.390625 903.583333,647.927083 918.6875,631 C936.395833,611.208333 945.25,575.921875 945.25,525.140625 C945.25,468.630208 937.567708,432.5625 922.203125,416.9375 C907.098958,401.572917 887.697917,393.890625 864,393.890625 C831.1875,393.890625 808.401042,408.864583 795.640625,438.8125 C787.046875,458.604167 782.75,487.380208 782.75,525.140625 C782.75,575.401042 790.171875,609.776042 805.015625,628.265625 C820.119792,647.015625 839.78125,656.390625 864,656.390625 Z M864,629.828125 C841.604167,629.828125 826.239583,617.328125 817.90625,592.328125 C812.958333,576.703125 810.484375,554.307292 810.484375,525.140625 C810.484375,495.192708 812.958333,472.666667 817.90625,457.5625 C826.239583,432.5625 841.604167,420.0625 864,420.0625 C879.625,420.0625 892.385417,426.052083 902.28125,438.03125 C912.177083,449.75 917.125,478.786458 917.125,525.140625 C917.125,564.463542 910.744792,592.979167 897.984375,610.6875 C888.348958,623.447917 877.020833,629.828125 864,629.828125 Z',
        stroke: '#FFFFFF',
        strokeWidth: '0.5',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('circle', {
        fill: '#999999',
        cx: '512',
        cy: '452',
        r: '20',
      }),
      React.createElement('circle', {
        fill: '#999999',
        cx: '512',
        cy: '572',
        r: '20',
      })
    ),
    za = React.createElement(
      'svg',
      { viewBox: '0 0 1424 1024' },
      React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M495.646406,161.623203 C501.169254,161.623203 505.646406,166.100356 505.646406,171.623203 C505.646406,177.052443 501.319736,181.471135 495.926311,181.619361 L495.646406,181.623203 L208.446406,181.623203 C203.017166,181.623203 198.598475,185.949874 198.450248,191.343298 L198.446406,191.623203 L198.446406,478.823203 C198.446406,484.346051 193.969254,488.823203 188.446406,488.823203 C183.017166,488.823203 178.598475,484.496532 178.450248,479.103108 L178.446406,478.823203 L178.446406,191.623203 C178.446406,175.220346 191.610578,161.892146 207.950302,161.627222 L208.446406,161.623203 L495.646406,161.623203 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
          transform:
            'translate(342.046406, 325.223203) rotate(45.000000) translate(-342.046406, -325.223203) ',
        }),
        React.createElement('path', {
          d: 'M495.646406,535.623203 C501.169254,535.623203 505.646406,540.100356 505.646406,545.623203 C505.646406,551.052443 501.319736,555.471135 495.926311,555.619361 L495.646406,555.623203 L208.446406,555.623203 C203.017166,555.623203 198.598475,559.949874 198.450248,565.343298 L198.446406,565.623203 L198.446406,852.823203 C198.446406,858.346051 193.969254,862.823203 188.446406,862.823203 C183.017166,862.823203 178.598475,858.496532 178.450248,853.103108 L178.446406,852.823203 L178.446406,565.623203 C178.446406,549.220346 191.610578,535.892146 207.950302,535.627222 L208.446406,535.623203 L495.646406,535.623203 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
          transform:
            'translate(342.046406, 699.223203) scale(1, -1) rotate(45.000000) translate(-342.046406, -699.223203) ',
        }),
        React.createElement('path', {
          d: 'M96,613.273438 C110.947917,613.273438 123.708333,607.348958 134.28125,595.5 C146.677083,581.645833 152.875,556.945312 152.875,521.398438 C152.875,481.841146 147.497396,456.59375 136.742188,445.65625 C126.169271,434.901042 112.588542,429.523438 96,429.523438 C73.03125,429.523438 57.0807292,440.005208 48.1484375,460.96875 C42.1328125,474.822917 39.125,494.966146 39.125,521.398438 C39.125,556.580729 44.3203125,580.643229 54.7109375,593.585938 C65.2838542,606.710938 79.046875,613.273438 96,613.273438 Z M96,594.679688 C80.3229167,594.679688 69.5677083,585.929688 63.734375,568.429688 C60.2708333,557.492188 58.5390625,541.815104 58.5390625,521.398438 C58.5390625,500.434896 60.2708333,484.666667 63.734375,474.09375 C69.5677083,456.59375 80.3229167,447.84375 96,447.84375 C106.9375,447.84375 115.869792,452.036458 122.796875,460.421875 C129.723958,468.625 133.1875,488.950521 133.1875,521.398438 C133.1875,548.924479 128.721354,568.885417 119.789062,581.28125 C113.044271,590.213542 105.114583,594.679688 96,594.679688 Z M236,613.273438 C250.947917,613.273438 263.708333,607.348958 274.28125,595.5 C286.677083,581.645833 292.875,556.945312 292.875,521.398438 C292.875,481.841146 287.497396,456.59375 276.742188,445.65625 C266.169271,434.901042 252.588542,429.523438 236,429.523438 C213.03125,429.523438 197.080729,440.005208 188.148438,460.96875 C182.132812,474.822917 179.125,494.966146 179.125,521.398438 C179.125,556.580729 184.320312,580.643229 194.710938,593.585938 C205.283854,606.710938 219.046875,613.273438 236,613.273438 Z M236,594.679688 C220.322917,594.679688 209.567708,585.929688 203.734375,568.429688 C200.270833,557.492188 198.539062,541.815104 198.539062,521.398438 C198.539062,500.434896 200.270833,484.666667 203.734375,474.09375 C209.567708,456.59375 220.322917,447.84375 236,447.84375 C246.9375,447.84375 255.869792,452.036458 262.796875,460.421875 C269.723958,468.625 273.1875,488.950521 273.1875,521.398438 C273.1875,548.924479 268.721354,568.885417 259.789062,581.28125 C253.044271,590.213542 245.114583,594.679688 236,594.679688 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M448.046406,613.273438 C462.994323,613.273438 475.75474,607.348958 486.327656,595.5 C498.72349,581.645833 504.921406,556.945312 504.921406,521.398438 C504.921406,481.841146 499.543802,456.59375 488.788594,445.65625 C478.215677,434.901042 464.634948,429.523438 448.046406,429.523438 C425.077656,429.523438 409.127136,440.005208 400.194844,460.96875 C394.179219,474.822917 391.171406,494.966146 391.171406,521.398438 C391.171406,556.580729 396.366719,580.643229 406.757344,593.585938 C417.330261,606.710938 431.093281,613.273438 448.046406,613.273438 Z M448.046406,594.679688 C432.369323,594.679688 421.614115,585.929688 415.780781,568.429688 C412.31724,557.492188 410.585469,541.815104 410.585469,521.398438 C410.585469,500.434896 412.31724,484.666667 415.780781,474.09375 C421.614115,456.59375 432.369323,447.84375 448.046406,447.84375 C458.983906,447.84375 467.916198,452.036458 474.843281,460.421875 C481.770365,468.625 485.233906,488.950521 485.233906,521.398438 C485.233906,548.924479 480.767761,568.885417 471.835469,581.28125 C465.090677,590.213542 457.16099,594.679688 448.046406,594.679688 Z M588.046406,613.273438 C602.994323,613.273438 615.75474,607.348958 626.327656,595.5 C638.72349,581.645833 644.921406,556.945312 644.921406,521.398438 C644.921406,481.841146 639.543802,456.59375 628.788594,445.65625 C618.215677,434.901042 604.634948,429.523438 588.046406,429.523438 C565.077656,429.523438 549.127136,440.005208 540.194844,460.96875 C534.179219,474.822917 531.171406,494.966146 531.171406,521.398438 C531.171406,556.580729 536.366719,580.643229 546.757344,593.585938 C557.330261,606.710938 571.093281,613.273438 588.046406,613.273438 Z M588.046406,594.679688 C572.369323,594.679688 561.614115,585.929688 555.780781,568.429688 C552.31724,557.492188 550.585469,541.815104 550.585469,521.398438 C550.585469,500.434896 552.31724,484.666667 555.780781,474.09375 C561.614115,456.59375 572.369323,447.84375 588.046406,447.84375 C598.983906,447.84375 607.916198,452.036458 614.843281,460.421875 C621.770365,468.625 625.233906,488.950521 625.233906,521.398438 C625.233906,548.924479 620.767761,568.885417 611.835469,581.28125 C605.090677,590.213542 597.16099,594.679688 588.046406,594.679688 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('circle', {
          fill: '#999999',
          cx: '341.846406',
          cy: '487.3',
          r: '12.8',
        }),
        React.createElement('circle', {
          fill: '#999999',
          cx: '341.846406',
          cy: '564.1',
          r: '12.8',
        }),
        React.createElement('path', {
          d: 'M1234.64641,161.623203 C1240.16925,161.623203 1244.64641,166.100356 1244.64641,171.623203 C1244.64641,177.052443 1240.31974,181.471135 1234.92631,181.619361 L1234.64641,181.623203 L947.446406,181.623203 C942.017166,181.623203 937.598475,185.949874 937.450248,191.343298 L937.446406,191.623203 L937.446406,478.823203 C937.446406,484.346051 932.969254,488.823203 927.446406,488.823203 C922.017166,488.823203 917.598475,484.496532 917.450248,479.103108 L917.446406,478.823203 L917.446406,191.623203 C917.446406,175.220346 930.610578,161.892146 946.950302,161.627222 L947.446406,161.623203 L1234.64641,161.623203 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
          transform:
            'translate(1081.046406, 325.223203) rotate(45.000000) translate(-1081.046406, -325.223203) ',
        }),
        React.createElement('path', {
          d: 'M1234.64641,535.623203 C1240.16925,535.623203 1244.64641,540.100356 1244.64641,545.623203 C1244.64641,551.052443 1240.31974,555.471135 1234.92631,555.619361 L1234.64641,555.623203 L947.446406,555.623203 C942.017166,555.623203 937.598475,559.949874 937.450248,565.343298 L937.446406,565.623203 L937.446406,852.823203 C937.446406,858.346051 932.969254,862.823203 927.446406,862.823203 C922.017166,862.823203 917.598475,858.496532 917.450248,853.103108 L917.446406,852.823203 L917.446406,565.623203 C917.446406,549.220346 930.610578,535.892146 946.950302,535.627222 L947.446406,535.623203 L1234.64641,535.623203 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
          transform:
            'translate(1081.046406, 699.223203) scale(1, -1) rotate(45.000000) translate(-1081.046406, -699.223203) ',
        }),
        React.createElement('path', {
          d: 'M835,613.273438 C849.947917,613.273438 862.708333,607.348958 873.28125,595.5 C885.677083,581.645833 891.875,556.945312 891.875,521.398438 C891.875,481.841146 886.497396,456.59375 875.742188,445.65625 C865.169271,434.901042 851.588542,429.523438 835,429.523438 C812.03125,429.523438 796.080729,440.005208 787.148438,460.96875 C781.132812,474.822917 778.125,494.966146 778.125,521.398438 C778.125,556.580729 783.320312,580.643229 793.710938,593.585938 C804.283854,606.710938 818.046875,613.273438 835,613.273438 Z M835,594.679688 C819.322917,594.679688 808.567708,585.929688 802.734375,568.429688 C799.270833,557.492188 797.539062,541.815104 797.539062,521.398438 C797.539062,500.434896 799.270833,484.666667 802.734375,474.09375 C808.567708,456.59375 819.322917,447.84375 835,447.84375 C845.9375,447.84375 854.869792,452.036458 861.796875,460.421875 C868.723958,468.625 872.1875,488.950521 872.1875,521.398438 C872.1875,548.924479 867.721354,568.885417 858.789062,581.28125 C852.044271,590.213542 844.114583,594.679688 835,594.679688 Z M975,613.273438 C989.947917,613.273438 1002.70833,607.348958 1013.28125,595.5 C1025.67708,581.645833 1031.875,556.945312 1031.875,521.398438 C1031.875,481.841146 1026.4974,456.59375 1015.74219,445.65625 C1005.16927,434.901042 991.588542,429.523438 975,429.523438 C952.03125,429.523438 936.080729,440.005208 927.148438,460.96875 C921.132812,474.822917 918.125,494.966146 918.125,521.398438 C918.125,556.580729 923.320312,580.643229 933.710938,593.585938 C944.283854,606.710938 958.046875,613.273438 975,613.273438 Z M975,594.679688 C959.322917,594.679688 948.567708,585.929688 942.734375,568.429688 C939.270833,557.492188 937.539062,541.815104 937.539062,521.398438 C937.539062,500.434896 939.270833,484.666667 942.734375,474.09375 C948.567708,456.59375 959.322917,447.84375 975,447.84375 C985.9375,447.84375 994.869792,452.036458 1001.79688,460.421875 C1008.72396,468.625 1012.1875,488.950521 1012.1875,521.398438 C1012.1875,548.924479 1007.72135,568.885417 998.789062,581.28125 C992.044271,590.213542 984.114583,594.679688 975,594.679688 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M1187.04641,613.273438 C1201.99432,613.273438 1214.75474,607.348958 1225.32766,595.5 C1237.72349,581.645833 1243.92141,556.945312 1243.92141,521.398438 C1243.92141,481.841146 1238.5438,456.59375 1227.78859,445.65625 C1217.21568,434.901042 1203.63495,429.523438 1187.04641,429.523438 C1164.07766,429.523438 1148.12714,440.005208 1139.19484,460.96875 C1133.17922,474.822917 1130.17141,494.966146 1130.17141,521.398438 C1130.17141,556.580729 1135.36672,580.643229 1145.75734,593.585938 C1156.33026,606.710938 1170.09328,613.273438 1187.04641,613.273438 Z M1187.04641,594.679688 C1171.36932,594.679688 1160.61411,585.929688 1154.78078,568.429688 C1151.31724,557.492188 1149.58547,541.815104 1149.58547,521.398438 C1149.58547,500.434896 1151.31724,484.666667 1154.78078,474.09375 C1160.61411,456.59375 1171.36932,447.84375 1187.04641,447.84375 C1197.98391,447.84375 1206.9162,452.036458 1213.84328,460.421875 C1220.77036,468.625 1224.23391,488.950521 1224.23391,521.398438 C1224.23391,548.924479 1219.76776,568.885417 1210.83547,581.28125 C1204.09068,590.213542 1196.16099,594.679688 1187.04641,594.679688 Z M1327.04641,613.273438 C1341.99432,613.273438 1354.75474,607.348958 1365.32766,595.5 C1377.72349,581.645833 1383.92141,556.945312 1383.92141,521.398438 C1383.92141,481.841146 1378.5438,456.59375 1367.78859,445.65625 C1357.21568,434.901042 1343.63495,429.523438 1327.04641,429.523438 C1304.07766,429.523438 1288.12714,440.005208 1279.19484,460.96875 C1273.17922,474.822917 1270.17141,494.966146 1270.17141,521.398438 C1270.17141,556.580729 1275.36672,580.643229 1285.75734,593.585938 C1296.33026,606.710938 1310.09328,613.273438 1327.04641,613.273438 Z M1327.04641,594.679688 C1311.36932,594.679688 1300.61411,585.929688 1294.78078,568.429688 C1291.31724,557.492188 1289.58547,541.815104 1289.58547,521.398438 C1289.58547,500.434896 1291.31724,484.666667 1294.78078,474.09375 C1300.61411,456.59375 1311.36932,447.84375 1327.04641,447.84375 C1337.98391,447.84375 1346.9162,452.036458 1353.84328,460.421875 C1360.77036,468.625 1364.23391,488.950521 1364.23391,521.398438 C1364.23391,548.924479 1359.76776,568.885417 1350.83547,581.28125 C1344.09068,590.213542 1336.16099,594.679688 1327.04641,594.679688 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('circle', {
          fill: '#999999',
          cx: '1080.84641',
          cy: '487.3',
          r: '12.8',
        }),
        React.createElement('circle', {
          fill: '#999999',
          cx: '1080.84641',
          cy: '564.1',
          r: '12.8',
        })
      )
    ),
    wa = React.createElement(
      'svg',
      { viewBox: '0 0 1424 1024' },
      React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M1344,218 C1388.18278,218 1424,253.81722 1424,298 L1424,726 C1424,770.18278 1388.18278,806 1344,806 L80,806 C35.81722,806 0,770.18278 0,726 L0,298 C0,253.81722 35.81722,218 80,218 L1344,218 Z M1344,238 L80,238 C47.1942859,238 20.5378857,264.328343 20,297.00779 L20,298 L20,726 C20,758.805714 46.328343,785.462114 79.0077903,785.991962 L80,786 L1344,786 C1376.80571,786 1403.46211,759.671657 1404,726.99221 L1404,726 L1404,298 C1404,265.194286 1377.67166,238.537886 1344.99221,238.008038 L1344,238 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(1096.000000, 512.000000) scale(-1, 1) translate(-1096.000000, -512.000000) ',
          x: '1086',
          y: '218',
          width: '20',
          height: '588',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(1260.000000, 512.000000) scale(-1, 1) rotate(90.000000) translate(-1260.000000, -512.000000) ',
          x: '1250',
          y: '348',
          width: '20',
          height: '328',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M1319.65311,602.492777 C1322.69467,597.882919 1328.89737,596.611559 1333.50722,599.653115 C1338.03621,602.64131 1339.3428,608.6807 1336.50299,613.263154 L1336.34689,613.507223 L1279.01464,700.401401 C1276.82002,703.727631 1273.9847,706.583294 1270.67424,708.801642 C1257.04789,717.932702 1238.64758,714.416301 1229.33159,700.989873 L1229.05208,700.579981 L1170.74424,613.56675 C1167.66981,608.978753 1168.8968,602.767127 1173.4848,599.692696 C1177.99087,596.673166 1184.06309,597.802804 1187.19117,602.190685 L1187.35885,602.43325 L1245.66669,689.446481 C1248.74112,694.034478 1254.95274,695.261466 1259.54074,692.187035 C1260.53388,691.52153 1261.39873,690.683951 1262.09506,689.714816 L1262.32087,689.386954 L1319.65311,602.492777 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M1319.65311,314.492777 C1322.69467,309.882919 1328.89737,308.611559 1333.50722,311.653115 C1338.03621,314.64131 1339.3428,320.6807 1336.50299,325.263154 L1336.34689,325.507223 L1279.01464,412.401401 C1276.82002,415.727631 1273.9847,418.583294 1270.67424,420.801642 C1257.04789,429.932702 1238.64758,426.416301 1229.33159,412.989873 L1229.05208,412.579981 L1170.74424,325.56675 C1167.66981,320.978753 1168.8968,314.767127 1173.4848,311.692696 C1177.99087,308.673166 1184.06309,309.802804 1187.19117,314.190685 L1187.35885,314.43325 L1245.66669,401.446481 C1248.74112,406.034478 1254.95274,407.261466 1259.54074,404.187035 C1260.53388,403.52153 1261.39873,402.683951 1262.09506,401.714816 L1262.32087,401.386954 L1319.65311,314.492777 Z',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
          transform:
            'translate(1253.525806, 367.940873) scale(1, -1) translate(-1253.525806, -367.940873) ',
        }),
        React.createElement('path', {
          d: 'M178.761719,654.887695 C188.066406,654.887695 192.71875,649.718424 192.71875,639.379883 L192.71875,639.379883 L192.71875,408.313477 C192.71875,398.750326 188.195638,393.96875 179.149414,393.96875 C176.564779,393.96875 172.817057,397.070312 167.90625,403.273438 C158.601562,415.16276 148.90918,422.787435 138.829102,426.147461 C135.469076,426.922852 132.755208,427.439779 130.6875,427.698242 C122.416667,429.765951 118.28125,433.513672 118.28125,438.941406 C118.28125,447.470703 122.804362,451.735352 131.850586,451.735352 C140.379883,451.735352 151.88151,447.21224 166.355469,438.166016 L166.355469,438.166016 L166.355469,639.379883 C166.355469,649.718424 170.490885,654.887695 178.761719,654.887695 Z M421.84668,649.072266 C432.443685,649.072266 437.742188,644.549154 437.742188,635.50293 C437.742188,626.973633 432.443685,622.708984 421.84668,622.708984 L421.84668,622.708984 L307.088867,622.708984 C317.944336,607.459635 331.772135,591.564128 348.572266,575.022461 C358.652344,565.200846 374.41862,550.985352 395.871094,532.375977 C423.009766,509.114258 436.579102,485.723307 436.579102,462.203125 C436.579102,440.233724 428.179036,423.045898 411.378906,410.639648 C396.646484,399.267253 378.166341,393.581055 355.938477,393.581055 C332.159831,393.581055 312.258138,401.334961 296.233398,416.842773 C280.725586,432.609049 272.97168,449.926107 272.97168,468.793945 C272.97168,479.132487 277.753255,484.301758 287.316406,484.301758 C292.485677,484.301758 295.974935,478.61556 297.78418,467.243164 C299.593424,456.129232 304.116536,446.824544 311.353516,439.329102 C323.501302,426.147461 338.362956,419.556641 355.938477,419.556641 C370.412435,419.556641 382.43099,423.045898 391.994141,430.024414 C402.591146,437.77832 407.889648,448.504557 407.889648,462.203125 C407.889648,480.295573 397.421875,498.646484 376.486328,517.255859 C358.39388,533.797526 344.953776,546.203776 336.166016,554.474609 C317.039714,571.016276 301.661133,586.394857 290.030273,600.610352 C276.848633,616.893555 270.257812,628.265951 270.257812,634.727539 C270.257812,644.29069 276.590169,649.072266 289.254883,649.072266 L289.254883,649.072266 L421.84668,649.072266 Z M547.847656,654.887695 C571.109375,654.887695 591.527995,648.813802 609.103516,636.666016 C629.263672,622.708984 639.34375,604.358073 639.34375,581.613281 C639.34375,548.271484 622.026693,526.04362 587.392578,514.929688 C619.442057,503.557292 635.466797,485.20638 635.466797,459.876953 C635.466797,437.649089 625.903646,420.590495 606.777344,408.701172 C591.269531,398.879557 571.884766,393.96875 548.623047,393.96875 C531.047526,393.96875 514.764323,399.008789 499.773438,409.088867 C482.714844,420.461263 474.185547,435.064453 474.185547,452.898438 C474.185547,462.978516 479.096354,468.018555 488.917969,468.018555 C494.08724,468.018555 497.705729,463.883138 499.773438,455.612305 C502.358073,445.273763 507.527344,437.132161 515.28125,431.1875 C525.102865,423.950521 536.216797,420.332031 548.623047,420.332031 C563.613932,420.332031 576.537109,423.17513 587.392578,428.861328 C600.832682,435.839844 607.552734,445.79069 607.552734,458.713867 C607.552734,475.513997 598.764974,487.40332 581.189453,494.381836 C570.333984,498.775716 554.050781,501.360352 532.339844,502.135742 C519.933594,502.652669 513.730469,507.046549 513.730469,515.317383 C513.730469,524.105143 519.933594,528.499023 532.339844,528.499023 C561.28776,528.499023 581.189453,532.763672 592.044922,541.292969 C604.451172,551.373047 610.654297,564.813151 610.654297,581.613281 C610.654297,596.08724 603.675781,607.718099 589.71875,616.505859 C577.829427,624.259766 563.872396,628.136719 547.847656,628.136719 C516.315104,628.136719 497.447266,614.825846 491.244141,588.204102 C488.659505,578.124023 485.041016,573.083984 480.388672,573.083984 C470.567057,573.083984 465.65625,578.770182 465.65625,590.142578 C465.65625,610.819661 474.702474,627.102865 492.794922,638.992188 C508.302734,649.589193 526.653646,654.887695 547.847656,654.887695 Z',
          stroke: '#FFFFFF',
          fill: '#999999',
          fillRule: 'nonzero',
        })
      )
    ),
    ka = {
      light: React.createElement(
        'svg',
        { viewBox: '0 0 1424 1024' },
        React.createElement(
          'g',
          {
            stroke: 'none',
            strokeWidth: '1',
            fill: 'none',
            fillRule: 'evenodd',
          },
          React.createElement('path', {
            d: 'M1344,218 C1388.18278,218 1424,253.81722 1424,298 L1424,726 C1424,770.18278 1388.18278,806 1344,806 L80,806 C35.81722,806 0,770.18278 0,726 L0,298 C0,253.81722 35.81722,218 80,218 L1344,218 Z M1344,238 L80,238 C47.1942859,238 20.5378857,264.328343 20,297.00779 L20,298 L20,726 C20,758.805714 46.328343,785.462114 79.0077903,785.991962 L80,786 L1344,786 C1376.80571,786 1403.46211,759.671657 1404,726.99221 L1404,726 L1404,298 C1404,265.194286 1377.67166,238.537886 1344.99221,238.008038 L1344,238 Z',
            fill: '#999999',
            fillRule: 'nonzero',
          }),
          React.createElement('circle', {
            fill: '#D8D8D8',
            cx: '170',
            cy: '512',
            r: '50',
          }),
          React.createElement('circle', {
            fill: '#D8D8D8',
            cx: '388',
            cy: '512',
            r: '50',
          }),
          React.createElement('circle', {
            fill: '#D8D8D8',
            cx: '606',
            cy: '512',
            r: '50',
          }),
          React.createElement('circle', {
            fill: '#D8D8D8',
            cx: '824',
            cy: '512',
            r: '50',
          }),
          React.createElement('path', {
            d: 'M1154,452 C1120.86292,452 1094,478.862915 1094,512 C1094,545.137085 1120.86292,572 1154,572 C1187.13708,572 1214,545.137085 1214,512 C1214,478.862915 1187.13708,452 1154,452 Z M1154,472 C1176.09139,472 1194,489.90861 1194,512 C1194,534.09139 1176.09139,552 1154,552 C1131.90861,552 1114,534.09139 1114,512 C1114,489.90861 1131.90861,472 1154,472 Z',
            fill: 'var(--dn-brand-color)',
            fillRule: 'nonzero',
          }),
          React.createElement('path', {
            d: 'M1154,395.333333 C1091.33002,395.333333 1035.15313,432.784592 985.698343,506.424832 L981.954212,512 L985.698343,517.575168 C1035.15313,591.215408 1091.33002,628.666667 1154,628.666667 C1216.66998,628.666667 1272.84687,591.215408 1322.30166,517.575168 L1326.04579,512 L1322.30166,506.424832 C1272.84687,432.784592 1216.66998,395.333333 1154,395.333333 Z M1155.65312,415.343433 C1208.50839,415.989823 1257.0702,447.668766 1301.54117,511.497045 L1301.889,511.999 L1301.54117,512.502955 C1256.60696,576.996112 1207.49624,608.666667 1154,608.666667 L1152.34688,608.656567 C1099.49161,608.010177 1050.9298,576.331234 1006.45883,512.502955 L1006.11,511.999 L1006.45883,511.497045 C1051.39304,447.003888 1100.50376,415.333333 1154,415.333333 L1155.65312,415.343433 Z',
            fill: '#979797',
            fillRule: 'nonzero',
          })
        )
      ),
      dark: React.createElement(
        'svg',
        { viewBox: '0 0 1424 1024' },
        React.createElement(
          'g',
          {
            stroke: 'none',
            strokeWidth: '1',
            fill: 'none',
            fillRule: 'evenodd',
          },
          React.createElement('path', {
            d: 'M1344,218 C1388.18278,218 1424,253.81722 1424,298 L1424,726 C1424,770.18278 1388.18278,806 1344,806 L80,806 C35.81722,806 0,770.18278 0,726 L0,298 C0,253.81722 35.81722,218 80,218 L1344,218 Z M1344,238 L80,238 C47.1942859,238 20.5378857,264.328343 20,297.00779 L20,298 L20,726 C20,758.805714 46.328343,785.462114 79.0077903,785.991962 L80,786 L1344,786 C1376.80571,786 1403.46211,759.671657 1404,726.99221 L1404,726 L1404,298 C1404,265.194286 1377.67166,238.537886 1344.99221,238.008038 L1344,238 Z',
            fill: '#999999',
            fillRule: 'nonzero',
          }),
          React.createElement('circle', {
            fill: '#4D4D4D',
            cx: '170',
            cy: '512',
            r: '50',
          }),
          React.createElement('circle', {
            fill: '#4D4D4D',
            cx: '388',
            cy: '512',
            r: '50',
          }),
          React.createElement('circle', {
            fill: '#4D4D4D',
            cx: '606',
            cy: '512',
            r: '50',
          }),
          React.createElement('circle', {
            fill: '#4D4D4D',
            cx: '824',
            cy: '512',
            r: '50',
          }),
          React.createElement('path', {
            d: 'M1154,452 C1120.86292,452 1094,478.862915 1094,512 C1094,545.137085 1120.86292,572 1154,572 C1187.13708,572 1214,545.137085 1214,512 C1214,478.862915 1187.13708,452 1154,452 Z M1154,472 C1176.09139,472 1194,489.90861 1194,512 C1194,534.09139 1176.09139,552 1154,552 C1131.90861,552 1114,534.09139 1114,512 C1114,489.90861 1131.90861,472 1154,472 Z',
            fill: 'var(--dn-brand-color)',
            fillRule: 'nonzero',
          }),
          React.createElement('path', {
            d: 'M1154,395.333333 C1091.33002,395.333333 1035.15313,432.784592 985.698343,506.424832 L981.954212,512 L985.698343,517.575168 C1035.15313,591.215408 1091.33002,628.666667 1154,628.666667 C1216.66998,628.666667 1272.84687,591.215408 1322.30166,517.575168 L1326.04579,512 L1322.30166,506.424832 C1272.84687,432.784592 1216.66998,395.333333 1154,395.333333 Z M1155.65312,415.343433 C1208.50839,415.989823 1257.0702,447.668766 1301.54117,511.497045 L1301.889,511.999 L1301.54117,512.502955 C1256.60696,576.996112 1207.49624,608.666667 1154,608.666667 L1152.34688,608.656567 C1099.49161,608.010177 1050.9298,576.331234 1006.45883,512.502955 L1006.11,511.999 L1006.45883,511.497045 C1051.39304,447.003888 1100.50376,415.333333 1154,415.333333 L1155.65312,415.343433 Z',
            fill: '#979797',
            fillRule: 'nonzero',
          })
        )
      ),
    },
    Da = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M322,0 C370.127481,0 409.21135,38.8191143 409.988214,86.9753912 L410,88.4375 L410,218.839844 C410,224.362691 405.522847,228.839844 400,228.839844 C394.57076,228.839844 390.152068,224.513173 390.003842,219.119749 L390,218.839844 L390,88.4375 C390,51.006125 360.148902,20.6132787 323.124135,20.009165 L322,20 L88,20 C50.8326247,20 20.6098525,50.0185325 20.0091138,87.3053938 L20,88.4375 L20,935.5625 C20,972.993875 49.8510984,1003.38672 86.875865,1003.99084 L88,1004 L322,1004 C359.167375,1004 389.390148,973.981468 389.990886,936.694606 L390,935.5625 L390,811.042969 C390,805.520121 394.477153,801.042969 400,801.042969 C405.42924,801.042969 409.847932,805.36964 410,810.763064 L410,811.042969 L410,935.5625 C410,983.904398 371.397407,1023.20693 323.45561,1023.98815 L322,1024 L88,1024 C39.8725186,1024 0.788650371,985.180886 0.0117857556,937.024609 L0,935.5625 L0,88.4375 C0,40.0956016 38.6025934,0.793068282 86.5443898,0.0118518055 L88,0 L322,0 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M936,0 C984.127481,0 1023.21135,38.8191143 1023.98821,86.9753912 L1024,88.4375 L1024,218.839844 C1024,224.362691 1019.52285,228.839844 1014,228.839844 C1008.57076,228.839844 1004.15207,224.513173 1004.00384,219.119749 L1004,218.839844 L1004,88.4375 C1004,51.006125 974.148902,20.6132787 937.124135,20.009165 L936,20 L702,20 C664.832625,20 634.609852,50.0185325 634.009114,87.3053938 L634,88.4375 L634,935.5625 C634,972.993875 663.851098,1003.38672 700.875865,1003.99084 L702,1004 L936,1004 C973.167375,1004 1003.39015,973.981468 1003.99089,936.694606 L1004,935.5625 L1004,811.042969 C1004,805.520121 1008.47715,801.042969 1014,801.042969 C1019.42924,801.042969 1023.84793,805.36964 1024,810.763064 L1024,811.042969 L1024,935.5625 C1024,983.904398 985.397407,1023.20693 937.45561,1023.98815 L936,1024 L702,1024 C653.872519,1024 614.78865,985.180886 614.011786,937.024609 L614,935.5625 L614,88.4375 C614,40.0956016 652.602593,0.793068282 700.54439,0.0118518055 L702,0 L936,0 Z',
        fill: '#999999',
        fillRule: 'nonzero',
        transform:
          'translate(819.000000, 512.000000) scale(-1, 1) translate(-819.000000, -512.000000) ',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(506.000000, 375.000000) scale(-1, 1) rotate(630.000000) translate(-506.000000, -375.000000) ',
        x: '496',
        y: '95',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M753,305 C769.402857,305 782.731057,318.164172 782.995981,334.503895 L783,335 L783,435 C783,440.522847 778.522847,445 773,445 C767.57076,445 763.152068,440.673329 763.003842,435.279905 L763,435 L763,335 C763,329.57076 758.673329,325.152068 753.279905,325.003842 L753,325 L653,325 C647.477153,325 643,320.522847 643,315 C643,309.57076 647.326671,305.152068 652.720095,305.003842 L653,305 L753,305 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(713.000000, 375.000000) rotate(45.000000) translate(-713.000000, -375.000000) ',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(518.000000, 649.000000) rotate(630.000000) translate(-518.000000, -649.000000) ',
        x: '508',
        y: '369',
        width: '20',
        height: '560',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M351,579 C367.402857,579 380.731057,592.164172 380.995981,608.503895 L381,609 L381,709 C381,714.522847 376.522847,719 371,719 C365.57076,719 361.152068,714.673329 361.003842,709.279905 L361,709 L361,609 C361,603.57076 356.673329,599.152068 351.279905,599.003842 L351,599 L251,599 C245.477153,599 241,594.522847 241,589 C241,583.57076 245.326671,579.152068 250.720095,579.003842 L251,579 L351,579 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(311.000000, 649.000000) scale(-1, 1) rotate(45.000000) translate(-311.000000, -649.000000) ',
      })
    ),
    Sa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(502.000000, 712.000000) scale(-1, 1) rotate(900.000000) translate(-502.000000, -712.000000) ',
        x: '492',
        y: '512',
        width: '20',
        height: '400',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M622,551.705627 C627.522847,551.705627 632,556.18278 632,561.705627 C632,567.134867 627.673329,571.553559 622.279905,571.701786 L622,571.705627 L402,571.705627 C396.57076,571.705627 392.152068,576.032298 392.003842,581.425723 L392,581.705627 L392,801.705627 C392,807.228475 387.522847,811.705627 382,811.705627 C376.57076,811.705627 372.152068,807.378957 372.003842,801.985532 L372,801.705627 L372,581.705627 C372,565.30277 385.164172,551.97457 401.503895,551.709647 L402,551.705627 L622,551.705627 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(502.000000, 681.705627) rotate(45.000000) translate(-502.000000, -681.705627) ',
      }),
      React.createElement('path', {
        d: 'M524.931034,80 C691.960872,80 786.973493,198.134474 809.205262,430.123156 C809.683377,435.112294 813.780979,438.97686 818.789541,439.162362 C952.942877,444.13101 1022,506.676517 1022,624.482759 C1022,686.378487 997.330268,733.50153 948.40537,764.65293 C900.561062,795.116298 829.824906,810.12931 736.137931,810.12931 C730.615084,810.12931 726.137931,805.652158 726.137931,800.12931 C726.137931,794.606463 730.615084,790.12931 736.137931,790.12931 C826.359002,790.12931 893.553881,775.867897 937.663596,747.782415 C980.692721,720.384964 1002,679.684731 1002,624.482759 C1002,519.142921 943.197337,464.83155 821.748746,459.301313 L818.049306,459.148659 C803.023623,458.592151 790.730816,446.998455 789.296471,432.03104 C767.947106,209.250259 680.079839,100 524.931034,100 C369.7047,100 282.288484,189.964836 260.728055,373.294922 C259.087578,387.244033 247.995507,398.167549 234.064277,399.627152 L233.641257,399.668479 C91.431391,412.557268 22,481.319011 22,608.318966 C22,739.159701 103.629541,799.201265 272.239445,790.143708 C277.754341,789.847453 282.46521,794.077998 282.761465,799.592894 C283.057719,805.10779 278.827175,809.818658 273.312279,810.114913 C94.2210335,819.735517 2,751.903517 2,608.318966 C2,470.51406 79.7276986,393.536025 231.836012,379.750118 C236.545747,379.323264 240.312596,375.655603 240.864945,370.958932 C263.543681,178.119782 358.883821,80 524.931034,80 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      })
    ),
    _a = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M524.931034,80 C691.960872,80 786.973493,198.134474 809.205262,430.123156 C809.683377,435.112294 813.780979,438.97686 818.789541,439.162362 C952.942877,444.13101 1022,506.676517 1022,624.482759 C1022,686.378487 997.330268,733.50153 948.40537,764.65293 C900.561062,795.116298 829.824906,810.12931 736.137931,810.12931 C730.615084,810.12931 726.137931,805.652158 726.137931,800.12931 C726.137931,794.606463 730.615084,790.12931 736.137931,790.12931 C826.359002,790.12931 893.553881,775.867897 937.663596,747.782415 C980.692721,720.384964 1002,679.684731 1002,624.482759 C1002,519.142921 943.197337,464.83155 821.748746,459.301313 L818.049306,459.148659 C803.023623,458.592151 790.730816,446.998455 789.296471,432.03104 C767.947106,209.250259 680.079839,100 524.931034,100 C369.7047,100 282.288484,189.964836 260.728055,373.294922 C259.087578,387.244033 247.995507,398.167549 234.064277,399.627152 L233.641257,399.668479 C91.431391,412.557268 22,481.319011 22,608.318966 C22,739.159701 103.629541,799.201265 272.239445,790.143708 C277.754341,789.847453 282.46521,794.077998 282.761465,799.592894 C283.057719,805.10779 278.827175,809.818658 273.312279,810.114913 C94.2210335,819.735517 2,751.903517 2,608.318966 C2,470.51406 79.7276986,393.536025 231.836012,379.750118 C236.545747,379.323264 240.312596,375.655603 240.864945,370.958932 C263.543681,178.119782 358.883821,80 524.931034,80 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M439.823288,475.014091 C464.593574,475.014091 485.397758,491.949828 485.811365,513.998824 L485.81764,514.668528 L485.81764,702.479967 C485.81764,708.002814 481.340488,712.479967 475.81764,712.479967 C470.3884,712.479967 465.969709,708.153296 465.821482,702.759871 L465.81764,702.479967 L465.81764,514.668528 C465.81764,504.287977 454.561061,495.014091 439.823288,495.014091 C425.232893,495.014091 414.054416,504.103426 413.832306,514.357452 L413.828937,514.668528 L413.828937,702.479967 C413.828937,708.002814 409.351784,712.479967 403.828937,712.479967 C398.399697,712.479967 393.981005,708.153296 393.832778,702.759871 L393.828937,702.479967 L393.828937,514.668528 C393.828937,492.293692 414.802798,475.014091 439.823288,475.014091 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M318.16468,621.831009 C339.943451,609.257029 367.731162,616.518628 380.608496,638.010491 L381.064533,638.788048 L412.578575,697.104545 C415.204243,701.963323 413.393949,708.030664 408.535172,710.656331 C403.761636,713.235933 397.821571,711.533858 395.124732,706.86583 L394.983386,706.612927 L363.622,648.58 L363.455677,648.295578 C356.251384,636.271842 340.789662,632.128886 328.538694,638.939601 L328.16468,639.151517 C317.606783,645.247121 312.168986,671.880929 316.109417,695.352405 L316.261878,696.233685 L316.286102,696.405645 C335.959075,836.064043 400.678916,904.190447 512.004302,904.239372 C622.863427,904.287067 678.799957,838.186966 681.78614,701.57069 C681.90683,696.049161 686.480753,691.670917 692.002281,691.791607 C697.52381,691.912298 701.902054,696.48622 701.7838,702.007749 C698.573653,848.758808 634.654348,924.292141 511.995605,924.239398 C391.025232,924.186206 318.897861,849.53522 297.125965,703.638324 L296.502,699.339 L296.37707,698.61158 C294.258457,685.895152 294.347781,671.15136 296.807723,658.224662 L296.991952,657.282105 C300.285113,640.870794 307.155309,628.187272 318.16468,621.831009 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M583.800696,475.014091 C608.570982,475.014091 629.375166,491.949828 629.788773,513.998824 L629.795048,514.668528 L629.795048,702.479967 L609.795048,702.479967 L609.795048,514.668528 C609.795048,504.287977 598.538469,495.014091 583.800696,495.014091 C569.210301,495.014091 558.031824,504.103426 557.809713,514.357452 L557.806344,514.668528 L557.806344,702.479967 L537.806344,702.479967 L537.806344,514.668528 C537.806344,492.293692 558.780206,475.014091 583.800696,475.014091 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M655.7894,539.503971 C680.557113,539.503971 701.363818,556.41543 701.777476,578.443167 L701.783752,579.112228 L701.783752,702.479967 C701.783752,708.002814 697.306599,712.479967 691.783752,712.479967 C686.354512,712.479967 681.93582,708.153296 681.787594,702.759871 L681.783752,702.479967 L681.783752,579.112228 C681.783752,568.761277 670.529771,559.503971 655.7894,559.503971 C641.196432,559.503971 630.020476,568.577057 629.798416,578.802036 L629.795048,579.112228 L629.795048,702.479967 C629.795048,708.002814 625.317896,712.479967 619.795048,712.479967 C614.365808,712.479967 609.947116,708.153296 609.79889,702.759871 L609.795048,702.479967 L609.795048,579.112228 C609.795048,556.758801 630.771508,539.503971 655.7894,539.503971 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M511.811992,416.523269 C536.577398,416.523269 557.386365,433.412918 557.800067,455.421574 L557.806344,456.090058 L557.806344,702.479967 C557.806344,708.002814 553.329192,712.479967 547.806344,712.479967 C542.377104,712.479967 537.958412,708.153296 537.810186,702.759871 L537.806344,702.479967 L537.806344,456.090058 C537.806344,445.765696 526.554694,436.523269 511.811992,436.523269 C497.216718,436.523269 486.043022,445.581771 485.821008,455.78066 L485.81764,456.090058 L485.81764,702.479967 C485.81764,708.002814 481.340488,712.479967 475.81764,712.479967 C470.3884,712.479967 465.969709,708.153296 465.821482,702.759871 L465.81764,702.479967 L465.81764,456.090058 C465.81764,433.755846 486.796431,416.523269 511.811992,416.523269 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M441.678633,797.281949 C445.757175,793.558063 452.082294,793.845568 455.806181,797.924111 C472.937361,816.686831 491.518588,825.779772 512,825.779772 C532.26195,825.779772 549.247619,816.9009 563.64541,798.503722 C567.049187,794.154452 573.334273,793.387978 577.683543,796.791754 C582.032813,800.195531 582.799287,806.480617 579.395511,810.829887 C561.327597,833.916666 538.632958,845.779772 512,845.779772 C485.586503,845.779772 461.781949,834.130735 441.036471,811.409498 C437.312584,807.330955 437.60009,801.005836 441.678633,797.281949 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    Na = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M764,252 C907.594035,252 1024,368.405965 1024,512 C1024,655.594035 907.594035,772 764,772 L260,772 C116.405965,772 0,655.594035 0,512 C0,368.405965 116.405965,252 260,252 L764,252 Z M764,272 L260,272 C127.45166,272 20,379.45166 20,512 C20,643.222857 125.313372,749.848457 256.031161,751.967847 L260,752 L764,752 C896.54834,752 1004,644.54834 1004,512 C1004,380.777143 898.686628,274.151543 767.968839,272.032153 L764,272 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M764,342 C670.111593,342 594,418.111593 594,512 C594,605.888407 670.111593,682 764,682 C857.888407,682 934,605.888407 934,512 C934,418.111593 857.888407,342 764,342 Z M764,362 C846.842712,362 914,429.157288 914,512 C914,594.842712 846.842712,662 764,662 C681.157288,662 614,594.842712 614,512 C614,429.157288 681.157288,362 764,362 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    Fa = React.createElement(
      'svg',
      { viewBox: '0 0 1424 1024' },
      React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          fill: '#FFFFFF',
          opacity: '0',
          x: '0',
          y: '0',
          width: '1423',
          height: '1024',
        }),
        React.createElement(
          'g',
          {
            transform: 'translate(28.269531, 358.253906)',
            fillRule: 'nonzero',
            stroke: '#FFFFFF',
            strokeWidth: '0.5',
          },
          React.createElement('path', {
            d: 'M73.0078125,335.507812 C77.109375,335.507812 80.6640625,334.003906 83.671875,330.996094 C86.953125,328.261719 88.59375,324.84375 88.59375,320.742188 C88.59375,317.734375 85.859375,314.453125 80.390625,310.898438 C72.734375,306.25 67.8125,302.421875 65.625,299.414062 C60.4296875,293.671875 57.8320312,286.289062 57.8320312,277.265625 L57.8320312,277.265625 L57.8320312,208.359375 C57.8320312,192.5 51.2695312,179.238281 38.1445312,168.574219 C51.2695312,156.816406 57.8320312,143.007812 57.8320312,127.148438 L57.8320312,127.148438 L57.8320312,59.0625 C57.8320312,50.3125 60.4296875,42.7929688 65.625,36.5039062 C67.8125,34.0429688 72.734375,30.3515625 80.390625,25.4296875 C85.859375,21.6015625 88.59375,18.3203125 88.59375,15.5859375 C88.59375,5.1953125 83.3984375,0 73.0078125,0 C70.546875,0 66.8554688,1.77734375 61.9335938,5.33203125 C40.6054688,18.7304688 29.9414062,36.640625 29.9414062,59.0625 L29.9414062,59.0625 L29.9414062,127.148438 C29.9414062,133.710938 27.7539062,140.136719 23.3789062,146.425781 C22.5585938,147.792969 18.046875,151.210938 9.84375,156.679688 C3.28125,161.601562 0,165.566406 0,168.574219 C0,171.582031 3.28125,175.136719 9.84375,179.238281 C18.046875,184.160156 22.5585938,187.304688 23.3789062,188.671875 C27.7539062,194.960937 29.9414062,201.523438 29.9414062,208.359375 L29.9414062,208.359375 L29.9414062,277.265625 C29.9414062,298.320312 38.28125,314.453125 54.9609375,325.664062 C64.53125,332.226562 70.546875,335.507812 73.0078125,335.507812 Z',
            fill: 'var(--dn-brand-color)',
          }),
          React.createElement('path', {
            d: 'M252.65625,305.15625 C292.578125,305.15625 323.339844,291.484375 344.941406,264.140625 C364.355469,240.078125 374.0625,208.222656 374.0625,168.574219 C374.0625,127.832031 364.355469,95.15625 344.941406,70.546875 C323.613281,42.9296875 292.851562,29.1210938 252.65625,29.1210938 C211.914062,29.1210938 181.015625,42.7929688 159.960938,70.1367188 C141.09375,94.7460938 131.660156,127.421875 131.660156,168.164062 C131.660156,207.8125 141.230469,239.804688 160.371094,264.140625 C181.425781,291.484375 212.1875,305.15625 252.65625,305.15625 Z M252.65625,275.214844 C223.398438,275.214844 200.839844,264.140625 184.980469,241.992188 C171.035156,222.578125 164.0625,197.832031 164.0625,167.753906 C164.0625,136.855469 171.035156,111.5625 184.980469,91.875 C200.566406,69.7265625 223.125,58.6523438 252.65625,58.6523438 C281.914062,58.6523438 304.472656,69.8632812 320.332031,92.2851562 C334.277344,112.246094 341.25,137.675781 341.25,168.574219 C341.25,198.378906 334.277344,222.988281 320.332031,242.402344 C304.199219,264.277344 281.640625,275.214844 252.65625,275.214844 Z M498.339844,305.15625 C523.769531,305.15625 545.234375,295.175781 562.734375,275.214844 C579.414062,256.074219 587.753906,233.652344 587.753906,207.949219 C587.753906,181.972656 579.277344,159.6875 562.324219,141.09375 C545.097656,123.046875 523.769531,114.023438 498.339844,114.023438 C472.910156,114.023438 452.675781,124.140625 437.636719,144.375 L437.636719,144.375 L437.636719,46.3476562 C437.636719,34.8632812 432.578125,29.1210938 422.460938,29.1210938 C412.617188,29.1210938 407.695312,34.8632812 407.695312,46.3476562 L407.695312,46.3476562 L407.695312,287.519531 C407.695312,299.277344 412.617188,305.15625 422.460938,305.15625 C432.578125,305.15625 437.636719,299.277344 437.636719,287.519531 L437.636719,287.519531 L437.636719,273.164062 C449.667969,294.492188 469.902344,305.15625 498.339844,305.15625 Z M498.339844,275.214844 C480.292969,275.214844 465.664062,268.652344 454.453125,255.527344 C443.242188,242.402344 437.636719,226.542969 437.636719,207.949219 C437.636719,188.808594 443.105469,173.359375 454.042969,161.601562 C464.980469,149.84375 479.746094,143.964844 498.339844,143.964844 C515.292969,143.964844 528.964844,150.390625 539.355469,163.242188 C550.292969,175.820312 555.761719,190.722656 555.761719,207.949219 C555.761719,226.269531 550.839844,241.855469 540.996094,254.707031 C530.058594,268.378906 515.839844,275.214844 498.339844,275.214844 Z M680.449219,70.546875 C686.191406,70.546875 691.113281,68.6328125 695.214844,64.8046875 C699.316406,60.703125 701.367188,55.6445312 701.367188,49.6289062 C701.367188,43.8867188 699.316406,38.828125 695.214844,34.453125 C691.113281,30.625 686.191406,28.7109375 680.449219,28.7109375 C674.433594,28.7109375 669.375,30.625 665.273438,34.453125 C661.171875,38.828125 659.121094,43.8867188 659.121094,49.6289062 C659.121094,55.6445312 661.171875,60.703125 665.273438,64.8046875 C669.375,68.6328125 674.433594,70.546875 680.449219,70.546875 Z M625.078125,355.605469 C648.867188,355.605469 665,353.691406 673.476562,349.863281 C687.421875,344.121094 694.394531,331.542969 694.394531,312.128906 L694.394531,312.128906 L694.394531,131.660156 C694.394531,119.628906 689.609375,113.613281 680.039062,113.613281 C670.195312,113.613281 665.273438,119.628906 665.273438,131.660156 L665.273438,131.660156 L665.273438,300.234375 C665.273438,311.445312 661.445312,318.691406 653.789062,321.972656 C649.414062,323.886719 640.664062,324.84375 627.539062,324.84375 C618.789062,324.84375 612.773438,325.664062 609.492188,327.304688 C604.84375,329.492188 602.519531,333.867188 602.519531,340.429688 C602.519531,350.546875 610.039062,355.605469 625.078125,355.605469 Z M825.644531,305.15625 C852.988281,305.15625 874.316406,296.132812 889.628906,278.085938 C900.019531,265.78125 905.214844,255.800781 905.214844,248.144531 C905.214844,243.496094 903.574219,239.53125 900.292969,236.25 C897.285156,232.695312 893.867188,230.917969 890.039062,230.917969 C884.023438,230.917969 879.648438,233.378906 876.914062,238.300781 C870.078125,250.332031 864.0625,258.671875 858.867188,263.320312 C850.117188,271.25 839.316406,275.214844 826.464844,275.214844 C810.332031,275.214844 797.207031,269.472656 787.089844,257.988281 C777.519531,247.324219 772.050781,233.378906 770.683594,216.152344 L770.683594,216.152344 L891.269531,216.152344 C903.574219,216.152344 909.726562,211.09375 909.726562,200.976562 C909.726562,178.28125 902.207031,158.320312 887.167969,141.09375 C871.308594,123.046875 850.800781,114.023438 825.644531,114.023438 C801.035156,114.023438 780.390625,123.320312 763.710938,141.914062 C747.304688,160.78125 739.101562,182.65625 739.101562,207.539062 C739.101562,235.15625 746.484375,257.988281 761.25,276.035156 C777.109375,295.449219 798.574219,305.15625 825.644531,305.15625 Z M878.554688,188.671875 C878.828125,188.945312 878.144531,188.945312 876.503906,188.671875 L876.503906,188.671875 L772.734375,188.671875 C776.015625,175.273438 782.441406,164.472656 792.011719,156.269531 C801.308594,147.792969 812.519531,143.554688 825.644531,143.554688 C842.324219,143.554688 854.902344,147.929688 863.378906,156.679688 C873.496094,167.34375 878.554688,178.007812 878.554688,188.671875 Z M1023.75,305.566406 C1053.82812,305.566406 1077.89062,291.621094 1095.9375,263.730469 C1102.5,253.339844 1105.78125,246.367188 1105.78125,242.8125 C1105.78125,231.601562 1100.17578,225.996094 1088.96484,225.996094 C1083.22266,225.996094 1078.30078,229.960938 1074.19922,237.890625 C1060.25391,263.046875 1043.84766,275.625 1024.98047,275.625 C1007.48047,275.625 993.125,268.925781 981.914062,255.527344 C971.796875,243.222656 966.738281,228.046875 966.738281,210 C966.738281,192.226562 971.386719,177.050781 980.683594,164.472656 C991.074219,150.527344 1005.01953,143.554688 1022.51953,143.554688 C1033.45703,143.554688 1043.98438,146.5625 1054.10156,152.578125 C1062.57812,157.773438 1069.41406,165.703125 1074.60938,176.367188 C1077.34375,182.109375 1081.17188,184.980469 1086.09375,184.980469 C1097.30469,184.980469 1102.91016,179.375 1102.91016,168.164062 C1102.91016,155.859375 1095.39062,143.964844 1080.35156,132.480469 C1064.49219,120.175781 1045.625,114.023438 1023.75,114.023438 C998.046875,114.023438 976.855469,123.457031 960.175781,142.324219 C943.496094,161.464844 935.15625,184.023438 935.15625,210 C935.15625,235.976562 943.359375,258.125 959.765625,276.445312 C976.992188,295.859375 998.320312,305.566406 1023.75,305.566406 Z M1226.77734,299.003906 C1238.26172,299.003906 1244.00391,294.082031 1244.00391,284.238281 C1244.00391,274.394531 1238.26172,269.472656 1226.77734,269.472656 L1226.77734,269.472656 L1199.29688,269.472656 C1195.19531,269.472656 1193.14453,264.003906 1193.14453,253.066406 L1193.14453,253.066406 L1193.14453,149.296875 L1224.31641,149.296875 C1235.80078,149.296875 1241.54297,144.238281 1241.54297,134.121094 C1241.54297,124.003906 1235.80078,118.945312 1224.31641,118.945312 L1224.31641,118.945312 L1193.14453,118.945312 L1193.14453,86.5429688 C1193.14453,74.7851562 1188.08594,68.90625 1177.96875,68.90625 C1168.67188,68.90625 1164.02344,74.7851562 1164.02344,86.5429688 L1164.02344,86.5429688 L1164.02344,118.945312 L1141.875,118.945312 C1130.39062,118.945312 1124.64844,124.003906 1124.64844,134.121094 C1124.64844,144.238281 1130.39062,149.296875 1141.875,149.296875 L1141.875,149.296875 L1164.02344,149.296875 L1164.02344,254.296875 C1164.02344,283.828125 1174.00391,298.59375 1193.96484,298.59375 C1197.79297,298.59375 1203.26172,298.730469 1210.37109,299.003906 L1210.37109,299.003906 L1226.77734,299.003906 Z',
            fill: '#999999',
          }),
          React.createElement('path', {
            d: 'M1294.45312,335.507812 C1296.91406,335.507812 1302.92969,332.226562 1312.5,325.664062 C1329.17969,314.453125 1337.51953,298.320312 1337.51953,277.265625 L1337.51953,277.265625 L1337.51953,208.359375 C1337.51953,201.523438 1339.70703,194.960937 1344.08203,188.671875 C1344.90234,187.304688 1349.41406,184.160156 1357.61719,179.238281 C1364.45312,175.136719 1367.87109,171.582031 1367.87109,168.574219 C1367.87109,165.566406 1364.45312,161.601562 1357.61719,156.679688 C1349.41406,151.210938 1344.90234,147.792969 1344.08203,146.425781 C1339.70703,140.136719 1337.51953,133.710938 1337.51953,127.148438 L1337.51953,127.148438 L1337.51953,59.0625 C1337.51953,36.640625 1326.85547,18.7304688 1305.52734,5.33203125 C1300.60547,1.77734375 1296.91406,0 1294.45312,0 C1284.33594,0 1279.27734,5.1953125 1279.27734,15.5859375 C1279.27734,18.3203125 1281.875,21.6015625 1287.07031,25.4296875 C1294.72656,30.3515625 1299.64844,34.0429688 1301.83594,36.5039062 C1307.03125,42.7929688 1309.62891,50.3125 1309.62891,59.0625 L1309.62891,59.0625 L1309.62891,127.148438 C1309.62891,143.007812 1316.19141,156.816406 1329.31641,168.574219 C1316.19141,179.238281 1309.62891,192.5 1309.62891,208.359375 L1309.62891,208.359375 L1309.62891,277.265625 C1309.62891,286.289062 1307.03125,293.671875 1301.83594,299.414062 C1299.64844,302.421875 1294.72656,306.25 1287.07031,310.898438 C1281.875,314.453125 1279.27734,317.734375 1279.27734,320.742188 C1279.27734,324.84375 1280.78125,328.261719 1283.78906,330.996094 C1286.79688,334.003906 1290.35156,335.507812 1294.45312,335.507812 Z',
            fill: 'var(--dn-brand-color)',
          })
        )
      )
    ),
    Aa = {
      light: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M65,17 L962,17 C990.718807,17 1014,40.281193 1014,69 L1014,267 L1014,267 L13,267 L13,69 C13,40.281193 36.281193,17 65,17 Z',
          fill: '#D8D8D8',
        }),
        React.createElement('path', {
          d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(513.500000, 267.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -267.000000) ',
          x: '503.5',
          y: '-233.5',
          width: '20',
          height: '1001',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(340.000000, 142.000000) scale(-1, 1) rotate(630.000000) translate(-340.000000, -142.000000) ',
          x: '330',
          y: '-108',
          width: '20',
          height: '500',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(824.000000, 142.000000) scale(-1, 1) rotate(630.000000) translate(-824.000000, -142.000000) ',
          x: '814',
          y: '42',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
      dark: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M65,17 L962,17 C990.718807,17 1014,40.281193 1014,69 L1014,267 L1014,267 L13,267 L13,69 C13,40.281193 36.281193,17 65,17 Z',
          fill: '#4D4D4D',
        }),
        React.createElement('path', {
          d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(513.500000, 267.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -267.000000) ',
          x: '503.5',
          y: '-233.5',
          width: '20',
          height: '1001',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(340.000000, 142.000000) scale(-1, 1) rotate(630.000000) translate(-340.000000, -142.000000) ',
          x: '330',
          y: '-108',
          width: '20',
          height: '500',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(824.000000, 142.000000) scale(-1, 1) rotate(630.000000) translate(-824.000000, -142.000000) ',
          x: '814',
          y: '42',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
    },
    Ta = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 252.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -252.000000) ',
        x: '502',
        y: '-148',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(512.000000, 512.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -512.000000) ',
        x: '502',
        y: '112',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 772.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -772.000000) ',
        x: '502',
        y: '372',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(772.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-772.000000, -512.000000) ',
        x: '762',
        y: '112',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(512.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-512.000000, -512.000000) ',
        x: '502',
        y: '112',
        width: '20',
        height: '800',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(252.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-252.000000, -512.000000) ',
        x: '242',
        y: '112',
        width: '20',
        height: '800',
        rx: '10',
      })
    ),
    Ba = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 512.000000) scale(-1, 1) translate(-512.000000, -512.000000) ',
        x: '502',
        y: '11.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(251.000000, 292.000000) scale(-1, 1) rotate(630.000000) translate(-251.000000, -292.000000) ',
        x: '241',
        y: '192',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(773.000000, 292.000000) scale(-1, 1) rotate(630.000000) translate(-773.000000, -292.000000) ',
        x: '763',
        y: '192',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(251.000000, 512.000000) scale(-1, 1) rotate(630.000000) translate(-251.000000, -512.000000) ',
        x: '241',
        y: '412',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(773.000000, 512.000000) scale(-1, 1) rotate(630.000000) translate(-773.000000, -512.000000) ',
        x: '763',
        y: '412',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(251.000000, 732.000000) scale(-1, 1) rotate(630.000000) translate(-251.000000, -732.000000) ',
        x: '241',
        y: '632',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(773.000000, 732.000000) scale(-1, 1) rotate(630.000000) translate(-773.000000, -732.000000) ',
        x: '763',
        y: '632',
        width: '20',
        height: '200',
        rx: '10',
      })
    ),
    Pa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M294.928581,105.844361 C300.146969,107.652751 302.911317,113.349081 301.102927,118.567468 C299.325715,123.695883 293.793476,126.454152 288.65014,124.831284 L288.379819,124.741813 C283.16358,122.934167 277.652303,122 272,122 C266.477153,122 262,117.522847 262,112 C262,106.477153 266.477153,102 272,102 C279.888963,102 287.613158,103.309259 294.928581,105.844361 Z M340.088269,155.693363 C341.370742,161.065244 338.055622,166.459664 332.683741,167.742137 C327.31186,169.02461 321.91744,165.70949 320.634967,160.337609 C319.338201,154.905862 317.138154,149.754737 314.137952,145.071652 C311.158708,140.421281 312.513424,134.236256 317.163795,131.257012 C321.814166,128.277768 327.999191,129.632484 330.978435,134.282855 C335.182,140.844298 338.268511,148.070963 340.088269,155.693363 Z M342,217.890597 C342,223.413445 337.522847,227.890597 332,227.890597 C326.477153,227.890597 322,223.413445 322,217.890597 L322,197.890597 C322,192.36775 326.477153,187.890597 332,187.890597 C337.522847,187.890597 342,192.36775 342,197.890597 L342,217.890597 Z M342,277.890597 C342,283.413445 337.522847,287.890597 332,287.890597 C326.477153,287.890597 322,283.413445 322,277.890597 L322,257.890597 C322,252.36775 326.477153,247.890597 332,247.890597 C337.522847,247.890597 342,252.36775 342,257.890597 L342,277.890597 Z M342,337.890597 C342,343.413445 337.522847,347.890597 332,347.890597 C326.477153,347.890597 322,343.413445 322,337.890597 L322,317.890597 C322,312.36775 326.477153,307.890597 332,307.890597 C337.522847,307.890597 342,312.36775 342,317.890597 L342,337.890597 Z M342,397.890597 C342,403.413445 337.522847,407.890597 332,407.890597 C326.477153,407.890597 322,403.413445 322,397.890597 L322,377.890597 C322,372.36775 326.477153,367.890597 332,367.890597 C337.522847,367.890597 342,372.36775 342,377.890597 L342,397.890597 Z M342,457.890597 C342,463.413445 337.522847,467.890597 332,467.890597 C326.477153,467.890597 322,463.413445 322,457.890597 L322,437.890597 C322,432.36775 326.477153,427.890597 332,427.890597 C337.522847,427.890597 342,432.36775 342,437.890597 L342,457.890597 Z M342,517.890597 C342,523.413445 337.522847,527.890597 332,527.890597 C326.477153,527.890597 322,523.413445 322,517.890597 L322,497.890597 C322,492.36775 326.477153,487.890597 332,487.890597 C337.522847,487.890597 342,492.36775 342,497.890597 L342,517.890597 Z M342,577.890597 C342,583.413445 337.522847,587.890597 332,587.890597 C326.477153,587.890597 322,583.413445 322,577.890597 L322,557.890597 C322,552.36775 326.477153,547.890597 332,547.890597 C337.522847,547.890597 342,552.36775 342,557.890597 L342,577.890597 Z M342,637.890597 C342,643.413445 337.522847,647.890597 332,647.890597 C326.477153,647.890597 322,643.413445 322,637.890597 L322,617.890597 C322,612.36775 326.477153,607.890597 332,607.890597 C337.522847,607.890597 342,612.36775 342,617.890597 L342,637.890597 Z M342,697.890597 C342,703.413445 337.522847,707.890597 332,707.890597 C326.477153,707.890597 322,703.413445 322,697.890597 L322,677.890597 C322,672.36775 326.477153,667.890597 332,667.890597 C337.522847,667.890597 342,672.36775 342,677.890597 L342,697.890597 Z M342,757.890597 C342,763.413445 337.522847,767.890597 332,767.890597 C326.477153,767.890597 322,763.413445 322,757.890597 L322,737.890597 C322,732.36775 326.477153,727.890597 332,727.890597 C337.522847,727.890597 342,732.36775 342,737.890597 L342,757.890597 Z M342,817.890597 C342,823.413445 337.522847,827.890597 332,827.890597 C326.477153,827.890597 322,823.413445 322,817.890597 L322,797.890597 C322,792.36775 326.477153,787.890597 332,787.890597 C337.522847,787.890597 342,792.36775 342,797.890597 L342,817.890597 Z M335.582572,881.313533 C333.267558,886.327768 327.326028,888.515919 322.311793,886.200905 C317.38401,883.925805 315.1857,878.148163 317.308686,873.190286 L317.424421,872.930126 C319.641243,868.128569 321.082691,862.994404 321.682313,857.675759 L321.762239,856.914714 C322.297205,851.417837 327.18698,847.395414 332.683857,847.93038 C338.180734,848.465346 342.203157,853.355121 341.668191,858.851998 C340.906019,866.683456 338.840608,874.256748 335.582572,881.313533 Z M281.638325,921.340659 C276.167253,922.095123 271.120459,918.271556 270.365996,912.800484 C269.624319,907.422142 273.306801,902.453818 278.629414,901.570197 L278.90617,901.528155 C284.457635,900.762605 289.790584,899.075198 294.728948,896.549618 C299.646067,894.034903 305.670758,895.982436 308.185473,900.899554 C310.700188,905.816673 308.752655,911.841364 303.835537,914.356079 C296.909177,917.898361 289.422579,920.267206 281.638325,921.340659 Z M220.218805,922 C214.695958,922 210.218805,917.522847 210.218805,912 C210.218805,906.477153 214.695958,902 220.218805,902 L240.218805,902 C245.741653,902 250.218805,906.477153 250.218805,912 C250.218805,917.522847 245.741653,922 240.218805,922 L220.218805,922 Z M158.334497,920.664848 C152.916888,919.591839 149.394893,914.330153 150.467902,908.912544 C151.540911,903.494934 156.802597,899.972939 162.220207,901.045948 C165.413744,901.678458 168.683351,902 172,902 L180.218805,902 C185.741653,902 190.218805,906.477153 190.218805,912 C190.218805,917.522847 185.741653,922 180.218805,922 L172,922 C167.377019,922 162.806019,921.550476 158.334497,920.664848 Z M106.788592,877.489713 C104.776845,872.346298 107.315564,866.545893 112.458979,864.534146 C117.513715,862.557085 123.20298,864.974929 125.307134,869.940827 L125.414546,870.204533 C127.444377,875.394185 130.335633,880.206211 133.955544,884.445868 C137.541718,888.646011 137.043997,894.958068 132.843853,898.544242 C128.64371,902.130415 122.331653,901.632694 118.74548,897.432551 C113.682413,891.502664 109.634218,884.7651 106.788592,877.489713 Z M102,814.328208 C102,808.805361 106.477153,804.328208 112,804.328208 C117.522847,804.328208 122,808.805361 122,814.328208 L122,834.328208 C122,839.851056 117.522847,844.328208 112,844.328208 C106.477153,844.328208 102,839.851056 102,834.328208 L102,814.328208 Z M102,754.328208 C102,748.805361 106.477153,744.328208 112,744.328208 C117.522847,744.328208 122,748.805361 122,754.328208 L122,774.328208 C122,779.851056 117.522847,784.328208 112,784.328208 C106.477153,784.328208 102,779.851056 102,774.328208 L102,754.328208 Z M102,694.328208 C102,688.805361 106.477153,684.328208 112,684.328208 C117.522847,684.328208 122,688.805361 122,694.328208 L122,714.328208 C122,719.851056 117.522847,724.328208 112,724.328208 C106.477153,724.328208 102,719.851056 102,714.328208 L102,694.328208 Z M102,634.328208 C102,628.805361 106.477153,624.328208 112,624.328208 C117.522847,624.328208 122,628.805361 122,634.328208 L122,654.328208 C122,659.851056 117.522847,664.328208 112,664.328208 C106.477153,664.328208 102,659.851056 102,654.328208 L102,634.328208 Z M102,574.328208 C102,568.805361 106.477153,564.328208 112,564.328208 C117.522847,564.328208 122,568.805361 122,574.328208 L122,594.328208 C122,599.851056 117.522847,604.328208 112,604.328208 C106.477153,604.328208 102,599.851056 102,594.328208 L102,574.328208 Z M102,514.328208 C102,508.805361 106.477153,504.328208 112,504.328208 C117.522847,504.328208 122,508.805361 122,514.328208 L122,534.328208 C122,539.851056 117.522847,544.328208 112,544.328208 C106.477153,544.328208 102,539.851056 102,534.328208 L102,514.328208 Z M102,454.328208 C102,448.805361 106.477153,444.328208 112,444.328208 C117.522847,444.328208 122,448.805361 122,454.328208 L122,474.328208 C122,479.851056 117.522847,484.328208 112,484.328208 C106.477153,484.328208 102,479.851056 102,474.328208 L102,454.328208 Z M102,394.328208 C102,388.805361 106.477153,384.328208 112,384.328208 C117.522847,384.328208 122,388.805361 122,394.328208 L122,414.328208 C122,419.851056 117.522847,424.328208 112,424.328208 C106.477153,424.328208 102,419.851056 102,414.328208 L102,394.328208 Z M102,334.328208 C102,328.805361 106.477153,324.328208 112,324.328208 C117.522847,324.328208 122,328.805361 122,334.328208 L122,354.328208 C122,359.851056 117.522847,364.328208 112,364.328208 C106.477153,364.328208 102,359.851056 102,354.328208 L102,334.328208 Z M102,274.328208 C102,268.805361 106.477153,264.328208 112,264.328208 C117.522847,264.328208 122,268.805361 122,274.328208 L122,294.328208 C122,299.851056 117.522847,304.328208 112,304.328208 C106.477153,304.328208 102,299.851056 102,294.328208 L102,274.328208 Z M102,214.328208 C102,208.805361 106.477153,204.328208 112,204.328208 C117.522847,204.328208 122,208.805361 122,214.328208 L122,234.328208 C122,239.851056 117.522847,244.328208 112,244.328208 C106.477153,244.328208 102,239.851056 102,234.328208 L102,214.328208 Z M105.003353,151.661096 C106.606034,146.375904 112.189758,143.390638 117.474951,144.993319 C122.670564,146.568836 125.643552,151.991589 124.220277,157.195942 L124.142728,157.464917 C122.727567,162.131721 122,167.011384 122,172 L122,174.328208 C122,179.851056 117.522847,184.328208 112,184.328208 C106.477153,184.328208 102,179.851056 102,174.328208 L102,172 C102,165.03958 103.019114,158.20456 105.003353,151.661096 Z M153.077691,104.590148 C158.395706,103.099992 163.914819,106.203084 165.404975,111.521099 C166.869874,116.748978 163.895909,122.171196 158.742512,123.76916 L158.474024,123.848383 C153.345681,125.285392 148.496997,127.536467 144.09376,130.504765 L143.467775,130.933676 C138.935521,134.089705 132.702936,132.974054 129.546907,128.4418 C126.390878,123.909546 127.506528,117.676962 132.038782,114.520933 C138.435844,110.066347 145.539059,106.702542 153.077691,104.590148 Z M215.562389,102 C221.085237,102 225.562389,106.477153 225.562389,112 C225.562389,117.522847 221.085237,122 215.562389,122 L195.562389,122 C190.039542,122 185.562389,117.522847 185.562389,112 C185.562389,106.477153 190.039542,102 195.562389,102 L215.562389,102 Z M272,102 C277.522847,102 282,106.477153 282,112 C282,117.522847 277.522847,122 272,122 L255.562389,122 C250.039542,122 245.562389,117.522847 245.562389,112 C245.562389,106.477153 250.039542,102 255.562389,102 L272,102 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M584.928581,105.844361 C590.146969,107.652751 592.911317,113.349081 591.102927,118.567468 C589.325715,123.695883 583.793476,126.454152 578.65014,124.831284 L578.379819,124.741813 C573.16358,122.934167 567.652303,122 562,122 C556.477153,122 552,117.522847 552,112 C552,106.477153 556.477153,102 562,102 C569.888963,102 577.613158,103.309259 584.928581,105.844361 Z M630.088269,155.693363 C631.370742,161.065244 628.055622,166.459664 622.683741,167.742137 C617.31186,169.02461 611.91744,165.70949 610.634967,160.337609 C609.338201,154.905862 607.138154,149.754737 604.137952,145.071652 C601.158708,140.421281 602.513424,134.236256 607.163795,131.257012 C611.814166,128.277768 617.999191,129.632484 620.978435,134.282855 C625.182,140.844298 628.268511,148.070963 630.088269,155.693363 Z M632,217.890597 C632,223.413445 627.522847,227.890597 622,227.890597 C616.477153,227.890597 612,223.413445 612,217.890597 L612,197.890597 C612,192.36775 616.477153,187.890597 622,187.890597 C627.522847,187.890597 632,192.36775 632,197.890597 L632,217.890597 Z M632,277.890597 C632,283.413445 627.522847,287.890597 622,287.890597 C616.477153,287.890597 612,283.413445 612,277.890597 L612,257.890597 C612,252.36775 616.477153,247.890597 622,247.890597 C627.522847,247.890597 632,252.36775 632,257.890597 L632,277.890597 Z M632,337.890597 C632,343.413445 627.522847,347.890597 622,347.890597 C616.477153,347.890597 612,343.413445 612,337.890597 L612,317.890597 C612,312.36775 616.477153,307.890597 622,307.890597 C627.522847,307.890597 632,312.36775 632,317.890597 L632,337.890597 Z M632,397.890597 C632,403.413445 627.522847,407.890597 622,407.890597 C616.477153,407.890597 612,403.413445 612,397.890597 L612,377.890597 C612,372.36775 616.477153,367.890597 622,367.890597 C627.522847,367.890597 632,372.36775 632,377.890597 L632,397.890597 Z M632,457.890597 C632,463.413445 627.522847,467.890597 622,467.890597 C616.477153,467.890597 612,463.413445 612,457.890597 L612,437.890597 C612,432.36775 616.477153,427.890597 622,427.890597 C627.522847,427.890597 632,432.36775 632,437.890597 L632,457.890597 Z M632,517.890597 C632,523.413445 627.522847,527.890597 622,527.890597 C616.477153,527.890597 612,523.413445 612,517.890597 L612,497.890597 C612,492.36775 616.477153,487.890597 622,487.890597 C627.522847,487.890597 632,492.36775 632,497.890597 L632,517.890597 Z M632,577.890597 C632,583.413445 627.522847,587.890597 622,587.890597 C616.477153,587.890597 612,583.413445 612,577.890597 L612,557.890597 C612,552.36775 616.477153,547.890597 622,547.890597 C627.522847,547.890597 632,552.36775 632,557.890597 L632,577.890597 Z M632,637.890597 C632,643.413445 627.522847,647.890597 622,647.890597 C616.477153,647.890597 612,643.413445 612,637.890597 L612,617.890597 C612,612.36775 616.477153,607.890597 622,607.890597 C627.522847,607.890597 632,612.36775 632,617.890597 L632,637.890597 Z M632,697.890597 C632,703.413445 627.522847,707.890597 622,707.890597 C616.477153,707.890597 612,703.413445 612,697.890597 L612,677.890597 C612,672.36775 616.477153,667.890597 622,667.890597 C627.522847,667.890597 632,672.36775 632,677.890597 L632,697.890597 Z M632,757.890597 C632,763.413445 627.522847,767.890597 622,767.890597 C616.477153,767.890597 612,763.413445 612,757.890597 L612,737.890597 C612,732.36775 616.477153,727.890597 622,727.890597 C627.522847,727.890597 632,732.36775 632,737.890597 L632,757.890597 Z M632,817.890597 C632,823.413445 627.522847,827.890597 622,827.890597 C616.477153,827.890597 612,823.413445 612,817.890597 L612,797.890597 C612,792.36775 616.477153,787.890597 622,787.890597 C627.522847,787.890597 632,792.36775 632,797.890597 L632,817.890597 Z M625.582572,881.313533 C623.267558,886.327768 617.326028,888.515919 612.311793,886.200905 C607.38401,883.925805 605.1857,878.148163 607.308686,873.190286 L607.424421,872.930126 C609.641243,868.128569 611.082691,862.994404 611.682313,857.675759 L611.762239,856.914714 C612.297205,851.417837 617.18698,847.395414 622.683857,847.93038 C628.180734,848.465346 632.203157,853.355121 631.668191,858.851998 C630.906019,866.683456 628.840608,874.256748 625.582572,881.313533 Z M571.638325,921.340659 C566.167253,922.095123 561.120459,918.271556 560.365996,912.800484 C559.624319,907.422142 563.306801,902.453818 568.629414,901.570197 L568.90617,901.528155 C574.457635,900.762605 579.790584,899.075198 584.728948,896.549618 C589.646067,894.034903 595.670758,895.982436 598.185473,900.899554 C600.700188,905.816673 598.752655,911.841364 593.835537,914.356079 C586.909177,917.898361 579.422579,920.267206 571.638325,921.340659 Z M510.218805,922 C504.695958,922 500.218805,917.522847 500.218805,912 C500.218805,906.477153 504.695958,902 510.218805,902 L530.218805,902 C535.741653,902 540.218805,906.477153 540.218805,912 C540.218805,917.522847 535.741653,922 530.218805,922 L510.218805,922 Z M448.334497,920.664848 C442.916888,919.591839 439.394893,914.330153 440.467902,908.912544 C441.540911,903.494934 446.802597,899.972939 452.220207,901.045948 C455.413744,901.678458 458.683351,902 462,902 L470.218805,902 C475.741653,902 480.218805,906.477153 480.218805,912 C480.218805,917.522847 475.741653,922 470.218805,922 L462,922 C457.377019,922 452.806019,921.550476 448.334497,920.664848 Z M396.788592,877.489713 C394.776845,872.346298 397.315564,866.545893 402.458979,864.534146 C407.513715,862.557085 413.20298,864.974929 415.307134,869.940827 L415.414546,870.204533 C417.444377,875.394185 420.335633,880.206211 423.955544,884.445868 C427.541718,888.646011 427.043997,894.958068 422.843853,898.544242 C418.64371,902.130415 412.331653,901.632694 408.74548,897.432551 C403.682413,891.502664 399.634218,884.7651 396.788592,877.489713 Z M392,814.328208 C392,808.805361 396.477153,804.328208 402,804.328208 C407.522847,804.328208 412,808.805361 412,814.328208 L412,834.328208 C412,839.851056 407.522847,844.328208 402,844.328208 C396.477153,844.328208 392,839.851056 392,834.328208 L392,814.328208 Z M392,754.328208 C392,748.805361 396.477153,744.328208 402,744.328208 C407.522847,744.328208 412,748.805361 412,754.328208 L412,774.328208 C412,779.851056 407.522847,784.328208 402,784.328208 C396.477153,784.328208 392,779.851056 392,774.328208 L392,754.328208 Z M392,694.328208 C392,688.805361 396.477153,684.328208 402,684.328208 C407.522847,684.328208 412,688.805361 412,694.328208 L412,714.328208 C412,719.851056 407.522847,724.328208 402,724.328208 C396.477153,724.328208 392,719.851056 392,714.328208 L392,694.328208 Z M392,634.328208 C392,628.805361 396.477153,624.328208 402,624.328208 C407.522847,624.328208 412,628.805361 412,634.328208 L412,654.328208 C412,659.851056 407.522847,664.328208 402,664.328208 C396.477153,664.328208 392,659.851056 392,654.328208 L392,634.328208 Z M392,574.328208 C392,568.805361 396.477153,564.328208 402,564.328208 C407.522847,564.328208 412,568.805361 412,574.328208 L412,594.328208 C412,599.851056 407.522847,604.328208 402,604.328208 C396.477153,604.328208 392,599.851056 392,594.328208 L392,574.328208 Z M392,514.328208 C392,508.805361 396.477153,504.328208 402,504.328208 C407.522847,504.328208 412,508.805361 412,514.328208 L412,534.328208 C412,539.851056 407.522847,544.328208 402,544.328208 C396.477153,544.328208 392,539.851056 392,534.328208 L392,514.328208 Z M392,454.328208 C392,448.805361 396.477153,444.328208 402,444.328208 C407.522847,444.328208 412,448.805361 412,454.328208 L412,474.328208 C412,479.851056 407.522847,484.328208 402,484.328208 C396.477153,484.328208 392,479.851056 392,474.328208 L392,454.328208 Z M392,394.328208 C392,388.805361 396.477153,384.328208 402,384.328208 C407.522847,384.328208 412,388.805361 412,394.328208 L412,414.328208 C412,419.851056 407.522847,424.328208 402,424.328208 C396.477153,424.328208 392,419.851056 392,414.328208 L392,394.328208 Z M392,334.328208 C392,328.805361 396.477153,324.328208 402,324.328208 C407.522847,324.328208 412,328.805361 412,334.328208 L412,354.328208 C412,359.851056 407.522847,364.328208 402,364.328208 C396.477153,364.328208 392,359.851056 392,354.328208 L392,334.328208 Z M392,274.328208 C392,268.805361 396.477153,264.328208 402,264.328208 C407.522847,264.328208 412,268.805361 412,274.328208 L412,294.328208 C412,299.851056 407.522847,304.328208 402,304.328208 C396.477153,304.328208 392,299.851056 392,294.328208 L392,274.328208 Z M392,214.328208 C392,208.805361 396.477153,204.328208 402,204.328208 C407.522847,204.328208 412,208.805361 412,214.328208 L412,234.328208 C412,239.851056 407.522847,244.328208 402,244.328208 C396.477153,244.328208 392,239.851056 392,234.328208 L392,214.328208 Z M395.003353,151.661096 C396.606034,146.375904 402.189758,143.390638 407.474951,144.993319 C412.670564,146.568836 415.643552,151.991589 414.220277,157.195942 L414.142728,157.464917 C412.727567,162.131721 412,167.011384 412,172 L412,174.328208 C412,179.851056 407.522847,184.328208 402,184.328208 C396.477153,184.328208 392,179.851056 392,174.328208 L392,172 C392,165.03958 393.019114,158.20456 395.003353,151.661096 Z M443.077691,104.590148 C448.395706,103.099992 453.914819,106.203084 455.404975,111.521099 C456.869874,116.748978 453.895909,122.171196 448.742512,123.76916 L448.474024,123.848383 C443.345681,125.285392 438.496997,127.536467 434.09376,130.504765 L433.467775,130.933676 C428.935521,134.089705 422.702936,132.974054 419.546907,128.4418 C416.390878,123.909546 417.506528,117.676962 422.038782,114.520933 C428.435844,110.066347 435.539059,106.702542 443.077691,104.590148 Z M505.562389,102 C511.085237,102 515.562389,106.477153 515.562389,112 C515.562389,117.522847 511.085237,122 505.562389,122 L485.562389,122 C480.039542,122 475.562389,117.522847 475.562389,112 C475.562389,106.477153 480.039542,102 485.562389,102 L505.562389,102 Z M562,102 C567.522847,102 572,106.477153 572,112 C572,117.522847 567.522847,122 562,122 L545.562389,122 C540.039542,122 535.562389,117.522847 535.562389,112 C535.562389,106.477153 540.039542,102 545.562389,102 L562,102 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M874.928581,105.844361 C880.146969,107.652751 882.911317,113.349081 881.102927,118.567468 C879.325715,123.695883 873.793476,126.454152 868.65014,124.831284 L868.379819,124.741813 C863.16358,122.934167 857.652303,122 852,122 C846.477153,122 842,117.522847 842,112 C842,106.477153 846.477153,102 852,102 C859.888963,102 867.613158,103.309259 874.928581,105.844361 Z M920.088269,155.693363 C921.370742,161.065244 918.055622,166.459664 912.683741,167.742137 C907.31186,169.02461 901.91744,165.70949 900.634967,160.337609 C899.338201,154.905862 897.138154,149.754737 894.137952,145.071652 C891.158708,140.421281 892.513424,134.236256 897.163795,131.257012 C901.814166,128.277768 907.999191,129.632484 910.978435,134.282855 C915.182,140.844298 918.268511,148.070963 920.088269,155.693363 Z M922,217.890597 C922,223.413445 917.522847,227.890597 912,227.890597 C906.477153,227.890597 902,223.413445 902,217.890597 L902,197.890597 C902,192.36775 906.477153,187.890597 912,187.890597 C917.522847,187.890597 922,192.36775 922,197.890597 L922,217.890597 Z M922,277.890597 C922,283.413445 917.522847,287.890597 912,287.890597 C906.477153,287.890597 902,283.413445 902,277.890597 L902,257.890597 C902,252.36775 906.477153,247.890597 912,247.890597 C917.522847,247.890597 922,252.36775 922,257.890597 L922,277.890597 Z M922,337.890597 C922,343.413445 917.522847,347.890597 912,347.890597 C906.477153,347.890597 902,343.413445 902,337.890597 L902,317.890597 C902,312.36775 906.477153,307.890597 912,307.890597 C917.522847,307.890597 922,312.36775 922,317.890597 L922,337.890597 Z M922,397.890597 C922,403.413445 917.522847,407.890597 912,407.890597 C906.477153,407.890597 902,403.413445 902,397.890597 L902,377.890597 C902,372.36775 906.477153,367.890597 912,367.890597 C917.522847,367.890597 922,372.36775 922,377.890597 L922,397.890597 Z M922,457.890597 C922,463.413445 917.522847,467.890597 912,467.890597 C906.477153,467.890597 902,463.413445 902,457.890597 L902,437.890597 C902,432.36775 906.477153,427.890597 912,427.890597 C917.522847,427.890597 922,432.36775 922,437.890597 L922,457.890597 Z M922,517.890597 C922,523.413445 917.522847,527.890597 912,527.890597 C906.477153,527.890597 902,523.413445 902,517.890597 L902,497.890597 C902,492.36775 906.477153,487.890597 912,487.890597 C917.522847,487.890597 922,492.36775 922,497.890597 L922,517.890597 Z M922,577.890597 C922,583.413445 917.522847,587.890597 912,587.890597 C906.477153,587.890597 902,583.413445 902,577.890597 L902,557.890597 C902,552.36775 906.477153,547.890597 912,547.890597 C917.522847,547.890597 922,552.36775 922,557.890597 L922,577.890597 Z M922,637.890597 C922,643.413445 917.522847,647.890597 912,647.890597 C906.477153,647.890597 902,643.413445 902,637.890597 L902,617.890597 C902,612.36775 906.477153,607.890597 912,607.890597 C917.522847,607.890597 922,612.36775 922,617.890597 L922,637.890597 Z M922,697.890597 C922,703.413445 917.522847,707.890597 912,707.890597 C906.477153,707.890597 902,703.413445 902,697.890597 L902,677.890597 C902,672.36775 906.477153,667.890597 912,667.890597 C917.522847,667.890597 922,672.36775 922,677.890597 L922,697.890597 Z M922,757.890597 C922,763.413445 917.522847,767.890597 912,767.890597 C906.477153,767.890597 902,763.413445 902,757.890597 L902,737.890597 C902,732.36775 906.477153,727.890597 912,727.890597 C917.522847,727.890597 922,732.36775 922,737.890597 L922,757.890597 Z M922,817.890597 C922,823.413445 917.522847,827.890597 912,827.890597 C906.477153,827.890597 902,823.413445 902,817.890597 L902,797.890597 C902,792.36775 906.477153,787.890597 912,787.890597 C917.522847,787.890597 922,792.36775 922,797.890597 L922,817.890597 Z M915.582572,881.313533 C913.267558,886.327768 907.326028,888.515919 902.311793,886.200905 C897.38401,883.925805 895.1857,878.148163 897.308686,873.190286 L897.424421,872.930126 C899.641243,868.128569 901.082691,862.994404 901.682313,857.675759 L901.762239,856.914714 C902.297205,851.417837 907.18698,847.395414 912.683857,847.93038 C918.180734,848.465346 922.203157,853.355121 921.668191,858.851998 C920.906019,866.683456 918.840608,874.256748 915.582572,881.313533 Z M861.638325,921.340659 C856.167253,922.095123 851.120459,918.271556 850.365996,912.800484 C849.624319,907.422142 853.306801,902.453818 858.629414,901.570197 L858.90617,901.528155 C864.457635,900.762605 869.790584,899.075198 874.728948,896.549618 C879.646067,894.034903 885.670758,895.982436 888.185473,900.899554 C890.700188,905.816673 888.752655,911.841364 883.835537,914.356079 C876.909177,917.898361 869.422579,920.267206 861.638325,921.340659 Z M800.218805,922 C794.695958,922 790.218805,917.522847 790.218805,912 C790.218805,906.477153 794.695958,902 800.218805,902 L820.218805,902 C825.741653,902 830.218805,906.477153 830.218805,912 C830.218805,917.522847 825.741653,922 820.218805,922 L800.218805,922 Z M738.334497,920.664848 C732.916888,919.591839 729.394893,914.330153 730.467902,908.912544 C731.540911,903.494934 736.802597,899.972939 742.220207,901.045948 C745.413744,901.678458 748.683351,902 752,902 L760.218805,902 C765.741653,902 770.218805,906.477153 770.218805,912 C770.218805,917.522847 765.741653,922 760.218805,922 L752,922 C747.377019,922 742.806019,921.550476 738.334497,920.664848 Z M686.788592,877.489713 C684.776845,872.346298 687.315564,866.545893 692.458979,864.534146 C697.513715,862.557085 703.20298,864.974929 705.307134,869.940827 L705.414546,870.204533 C707.444377,875.394185 710.335633,880.206211 713.955544,884.445868 C717.541718,888.646011 717.043997,894.958068 712.843853,898.544242 C708.64371,902.130415 702.331653,901.632694 698.74548,897.432551 C693.682413,891.502664 689.634218,884.7651 686.788592,877.489713 Z M682,814.328208 C682,808.805361 686.477153,804.328208 692,804.328208 C697.522847,804.328208 702,808.805361 702,814.328208 L702,834.328208 C702,839.851056 697.522847,844.328208 692,844.328208 C686.477153,844.328208 682,839.851056 682,834.328208 L682,814.328208 Z M682,754.328208 C682,748.805361 686.477153,744.328208 692,744.328208 C697.522847,744.328208 702,748.805361 702,754.328208 L702,774.328208 C702,779.851056 697.522847,784.328208 692,784.328208 C686.477153,784.328208 682,779.851056 682,774.328208 L682,754.328208 Z M682,694.328208 C682,688.805361 686.477153,684.328208 692,684.328208 C697.522847,684.328208 702,688.805361 702,694.328208 L702,714.328208 C702,719.851056 697.522847,724.328208 692,724.328208 C686.477153,724.328208 682,719.851056 682,714.328208 L682,694.328208 Z M682,634.328208 C682,628.805361 686.477153,624.328208 692,624.328208 C697.522847,624.328208 702,628.805361 702,634.328208 L702,654.328208 C702,659.851056 697.522847,664.328208 692,664.328208 C686.477153,664.328208 682,659.851056 682,654.328208 L682,634.328208 Z M682,574.328208 C682,568.805361 686.477153,564.328208 692,564.328208 C697.522847,564.328208 702,568.805361 702,574.328208 L702,594.328208 C702,599.851056 697.522847,604.328208 692,604.328208 C686.477153,604.328208 682,599.851056 682,594.328208 L682,574.328208 Z M682,514.328208 C682,508.805361 686.477153,504.328208 692,504.328208 C697.522847,504.328208 702,508.805361 702,514.328208 L702,534.328208 C702,539.851056 697.522847,544.328208 692,544.328208 C686.477153,544.328208 682,539.851056 682,534.328208 L682,514.328208 Z M682,454.328208 C682,448.805361 686.477153,444.328208 692,444.328208 C697.522847,444.328208 702,448.805361 702,454.328208 L702,474.328208 C702,479.851056 697.522847,484.328208 692,484.328208 C686.477153,484.328208 682,479.851056 682,474.328208 L682,454.328208 Z M682,394.328208 C682,388.805361 686.477153,384.328208 692,384.328208 C697.522847,384.328208 702,388.805361 702,394.328208 L702,414.328208 C702,419.851056 697.522847,424.328208 692,424.328208 C686.477153,424.328208 682,419.851056 682,414.328208 L682,394.328208 Z M682,334.328208 C682,328.805361 686.477153,324.328208 692,324.328208 C697.522847,324.328208 702,328.805361 702,334.328208 L702,354.328208 C702,359.851056 697.522847,364.328208 692,364.328208 C686.477153,364.328208 682,359.851056 682,354.328208 L682,334.328208 Z M682,274.328208 C682,268.805361 686.477153,264.328208 692,264.328208 C697.522847,264.328208 702,268.805361 702,274.328208 L702,294.328208 C702,299.851056 697.522847,304.328208 692,304.328208 C686.477153,304.328208 682,299.851056 682,294.328208 L682,274.328208 Z M682,214.328208 C682,208.805361 686.477153,204.328208 692,204.328208 C697.522847,204.328208 702,208.805361 702,214.328208 L702,234.328208 C702,239.851056 697.522847,244.328208 692,244.328208 C686.477153,244.328208 682,239.851056 682,234.328208 L682,214.328208 Z M685.003353,151.661096 C686.606034,146.375904 692.189758,143.390638 697.474951,144.993319 C702.670564,146.568836 705.643552,151.991589 704.220277,157.195942 L704.142728,157.464917 C702.727567,162.131721 702,167.011384 702,172 L702,174.328208 C702,179.851056 697.522847,184.328208 692,184.328208 C686.477153,184.328208 682,179.851056 682,174.328208 L682,172 C682,165.03958 683.019114,158.20456 685.003353,151.661096 Z M733.077691,104.590148 C738.395706,103.099992 743.914819,106.203084 745.404975,111.521099 C746.869874,116.748978 743.895909,122.171196 738.742512,123.76916 L738.474024,123.848383 C733.345681,125.285392 728.496997,127.536467 724.09376,130.504765 L723.467775,130.933676 C718.935521,134.089705 712.702936,132.974054 709.546907,128.4418 C706.390878,123.909546 707.506528,117.676962 712.038782,114.520933 C718.435844,110.066347 725.539059,106.702542 733.077691,104.590148 Z M795.562389,102 C801.085237,102 805.562389,106.477153 805.562389,112 C805.562389,117.522847 801.085237,122 795.562389,122 L775.562389,122 C770.039542,122 765.562389,117.522847 765.562389,112 C765.562389,106.477153 770.039542,102 775.562389,102 L795.562389,102 Z M852,102 C857.522847,102 862,106.477153 862,112 C862,117.522847 857.522847,122 852,122 L835.562389,122 C830.039542,122 825.562389,117.522847 825.562389,112 C825.562389,106.477153 830.039542,102 835.562389,102 L852,102 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      })
    ),
    Wa = {
      light: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          stroke: '#979797',
          fill: '#D8D8D8',
          x: '325',
          y: '84',
          width: '285',
          height: '140',
        }),
        React.createElement('rect', {
          stroke: '#979797',
          fill: '#D8D8D8',
          x: '630',
          y: '84',
          width: '285',
          height: '140',
        }),
        React.createElement('path', {
          d: 'M944,224 C988.18278,224 1024,259.81722 1024,304 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,224 L944,224 Z M20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1003.99196 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,304 C1004,271.194286 977.671657,244.537886 944.99221,244.008038 L944,244 L20,244 L20,944 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M265,20 C298.137085,20 325,46.862915 325,80 L325,244 L0,244 L0,80 C0,46.862915 26.862915,20 60,20 L265,20 Z M265,40 L60,40 C38.1295239,40 20.3585905,57.5522287 20.0053589,79.3385269 L20,80 L20,224 L305,224 L305,80 C305,58.1295239 287.447771,40.3585905 265.661473,40.0053589 L265,40 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M570,64 C603.137085,64 630,90.862915 630,124 L630,244 L305,244 L305,124 C305,90.862915 331.862915,64 365,64 L570,64 Z M570,84 L365,84 C343.129524,84 325.35859,101.552229 325.005359,123.338527 L325,124 L325,224 L610,224 L610,124 C610,102.129524 592.447771,84.3585905 570.661473,84.0053589 L570,84 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M875,64 C908.137085,64 935,90.862915 935,124 L935,244 L610,244 L610,124 C610,90.862915 636.862915,64 670,64 L875,64 Z M875,84 L670,84 C648.129524,84 630.35859,101.552229 630.005359,123.338527 L630,124 L630,224 L915,224 L915,124 C915,102.129524 897.447771,84.3585905 875.661473,84.0053589 L875,84 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(162.500000, 132.000000) scale(-1, 1) rotate(630.000000) translate(-162.500000, -132.000000) ',
          x: '152.5',
          y: '32',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(467.500000, 154.000000) scale(-1, 1) rotate(630.000000) translate(-467.500000, -154.000000) ',
          x: '457.5',
          y: '54',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(772.500000, 154.000000) scale(-1, 1) rotate(630.000000) translate(-772.500000, -154.000000) ',
          x: '762.5',
          y: '54',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
      dark: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('rect', {
          stroke: '#979797',
          fill: '#4D4D4D',
          x: '325',
          y: '84',
          width: '285',
          height: '140',
        }),
        React.createElement('rect', {
          stroke: '#979797',
          fill: '#4D4D4D',
          x: '630',
          y: '84',
          width: '285',
          height: '140',
        }),
        React.createElement('path', {
          d: 'M944,224 C988.18278,224 1024,259.81722 1024,304 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,224 L944,224 Z M20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1003.99196 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,304 C1004,271.194286 977.671657,244.537886 944.99221,244.008038 L944,244 L20,244 L20,944 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M265,20 C298.137085,20 325,46.862915 325,80 L325,244 L0,244 L0,80 C0,46.862915 26.862915,20 60,20 L265,20 Z M265,40 L60,40 C38.1295239,40 20.3585905,57.5522287 20.0053589,79.3385269 L20,80 L20,224 L305,224 L305,80 C305,58.1295239 287.447771,40.3585905 265.661473,40.0053589 L265,40 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M570,64 C603.137085,64 630,90.862915 630,124 L630,244 L305,244 L305,124 C305,90.862915 331.862915,64 365,64 L570,64 Z M570,84 L365,84 C343.129524,84 325.35859,101.552229 325.005359,123.338527 L325,124 L325,224 L610,224 L610,124 C610,102.129524 592.447771,84.3585905 570.661473,84.0053589 L570,84 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M875,64 C908.137085,64 935,90.862915 935,124 L935,244 L610,244 L610,124 C610,90.862915 636.862915,64 670,64 L875,64 Z M875,84 L670,84 C648.129524,84 630.35859,101.552229 630.005359,123.338527 L630,124 L630,224 L915,224 L915,124 C915,102.129524 897.447771,84.3585905 875.661473,84.0053589 L875,84 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(162.500000, 132.000000) scale(-1, 1) rotate(630.000000) translate(-162.500000, -132.000000) ',
          x: '152.5',
          y: '32',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(467.500000, 154.000000) scale(-1, 1) rotate(630.000000) translate(-467.500000, -154.000000) ',
          x: '457.5',
          y: '54',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(772.500000, 154.000000) scale(-1, 1) rotate(630.000000) translate(-772.500000, -154.000000) ',
          x: '762.5',
          y: '54',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
    },
    Ha = {
      light: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M65,17 L962,17 C990.718807,17 1014,40.281193 1014,69 L1014,237 L1014,237 L13,237 L13,69 C13,40.281193 36.281193,17 65,17 Z',
          fill: '#D8D8D8',
        }),
        React.createElement('rect', {
          fill: '#D8D8D8',
          x: '13',
          y: '517',
          width: '1001',
          height: '220',
        }),
        React.createElement('path', {
          d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(513.500000, 237.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -237.000000) ',
          x: '503.5',
          y: '-263.5',
          width: '20',
          height: '1001',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(340.000000, 127.000000) scale(-1, 1) rotate(630.000000) translate(-340.000000, -127.000000) ',
          x: '330',
          y: '-123',
          width: '20',
          height: '500',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(824.000000, 127.000000) scale(-1, 1) rotate(630.000000) translate(-824.000000, -127.000000) ',
          x: '814',
          y: '27',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M1014,727 L1014,747 L13,747 L13,727 L1014,727 Z M1014,507 L1014,527 L13,527 L13,507 L1014,507 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(340.000000, 627.000000) scale(-1, 1) rotate(630.000000) translate(-340.000000, -627.000000) ',
          x: '330',
          y: '377',
          width: '20',
          height: '500',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(824.000000, 627.000000) scale(-1, 1) rotate(630.000000) translate(-824.000000, -627.000000) ',
          x: '814',
          y: '527',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
      dark: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M65,17 L962,17 C990.718807,17 1014,40.281193 1014,69 L1014,237 L1014,237 L13,237 L13,69 C13,40.281193 36.281193,17 65,17 Z',
          fill: '#4D4D4D',
        }),
        React.createElement('rect', {
          fill: '#4D4D4D',
          x: '13',
          y: '517',
          width: '1001',
          height: '220',
        }),
        React.createElement('path', {
          d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(513.500000, 237.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -237.000000) ',
          x: '503.5',
          y: '-263.5',
          width: '20',
          height: '1001',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(340.000000, 127.000000) scale(-1, 1) rotate(630.000000) translate(-340.000000, -127.000000) ',
          x: '330',
          y: '-123',
          width: '20',
          height: '500',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(824.000000, 127.000000) scale(-1, 1) rotate(630.000000) translate(-824.000000, -127.000000) ',
          x: '814',
          y: '27',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('path', {
          d: 'M1014,727 L1014,747 L13,747 L13,727 L1014,727 Z M1014,507 L1014,527 L13,527 L13,507 L1014,507 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(340.000000, 627.000000) scale(-1, 1) rotate(630.000000) translate(-340.000000, -627.000000) ',
          x: '330',
          y: '377',
          width: '20',
          height: '500',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(824.000000, 627.000000) scale(-1, 1) rotate(630.000000) translate(-824.000000, -627.000000) ',
          x: '814',
          y: '527',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
    },
    Ia = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 220.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -220.000000) ',
        x: '503.5',
        y: '-280.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M511.799425,386 C384.332422,386 281,489.332422 281,616.799425 C281,744.266428 384.332422,847.598851 511.799425,847.598851 C639.266428,847.598851 742.598851,744.266428 742.598851,616.799425 C742.598851,489.332422 639.266428,386 511.799425,386 Z M511.799425,406 C628.220733,406 722.598851,500.378117 722.598851,616.799425 C722.598851,733.220733 628.220733,827.598851 511.799425,827.598851 C395.378117,827.598851 301,733.220733 301,616.799425 C301,500.378117 395.378117,406 511.799425,406 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(511.799425, 616.799425) scale(-1, 1) rotate(630.000000) translate(-511.799425, -616.799425) ',
        x: '501.799425',
        y: '516.799425',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(511.799425, 616.799425) scale(-1, 1) translate(-511.799425, -616.799425) ',
        x: '501.799425',
        y: '516.799425',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(340.000000, 114.944390) scale(-1, 1) rotate(630.000000) translate(-340.000000, -114.944390) ',
        x: '330',
        y: '-135.05561',
        width: '20',
        height: '500',
        rx: '10',
      })
    ),
    Va = {
      light: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(512.000000, 220.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -220.000000) ',
          x: '502',
          y: '-292',
          width: '20',
          height: '1024',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(124.086526, 119.944390) scale(-1, 1) rotate(45.000000) translate(-124.086526, -119.944390) ',
          x: '114.086526',
          y: '-11.5556095',
          width: '20',
          height: '263',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(220.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-220.000000, -512.000000) ',
          x: '210',
          y: '0',
          width: '20',
          height: '1024',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(415.666667, 512.000000) scale(-1, 1) rotate(720.000000) translate(-415.666667, -512.000000) ',
          x: '405.666667',
          y: '9.09494702e-13',
          width: '20',
          height: '1024',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(611.333333, 512.000000) scale(-1, 1) rotate(720.000000) translate(-611.333333, -512.000000) ',
          x: '601.333333',
          y: '0',
          width: '20',
          height: '1024',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(807.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-807.000000, -512.000000) ',
          x: '797',
          y: '0',
          width: '20',
          height: '1024',
        }),
        React.createElement('path', {
          d: 'M511.799425,386 C384.332422,386 281,489.332422 281,616.799425 C281,744.266428 384.332422,847.598851 511.799425,847.598851 C639.266428,847.598851 742.598851,744.266428 742.598851,616.799425 C742.598851,489.332422 639.266428,386 511.799425,386 Z M511.799425,406 C628.220733,406 722.598851,500.378117 722.598851,616.799425 C722.598851,733.220733 628.220733,827.598851 511.799425,827.598851 C395.378117,827.598851 301,733.220733 301,616.799425 C301,500.378117 395.378117,406 511.799425,406 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('circle', {
          fill: '#FFFFFF',
          cx: '511.799425',
          cy: '616.799425',
          r: '211',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(511.799425, 616.799425) scale(-1, 1) rotate(630.000000) translate(-511.799425, -616.799425) ',
          x: '501.799425',
          y: '516.799425',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(511.799425, 616.799425) scale(-1, 1) translate(-511.799425, -616.799425) ',
          x: '501.799425',
          y: '516.799425',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
      dark: React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(512.000000, 220.000000) scale(-1, 1) rotate(630.000000) translate(-512.000000, -220.000000) ',
          x: '502',
          y: '-292',
          width: '20',
          height: '1024',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(124.086526, 119.944390) scale(-1, 1) rotate(45.000000) translate(-124.086526, -119.944390) ',
          x: '114.086526',
          y: '-11.5556095',
          width: '20',
          height: '263',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(220.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-220.000000, -512.000000) ',
          x: '210',
          y: '0',
          width: '20',
          height: '1024',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(415.666667, 512.000000) scale(-1, 1) rotate(720.000000) translate(-415.666667, -512.000000) ',
          x: '405.666667',
          y: '9.09494702e-13',
          width: '20',
          height: '1024',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(611.333333, 512.000000) scale(-1, 1) rotate(720.000000) translate(-611.333333, -512.000000) ',
          x: '601.333333',
          y: '0',
          width: '20',
          height: '1024',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(807.000000, 512.000000) scale(-1, 1) rotate(720.000000) translate(-807.000000, -512.000000) ',
          x: '797',
          y: '0',
          width: '20',
          height: '1024',
        }),
        React.createElement('path', {
          d: 'M511.799425,386 C384.332422,386 281,489.332422 281,616.799425 C281,744.266428 384.332422,847.598851 511.799425,847.598851 C639.266428,847.598851 742.598851,744.266428 742.598851,616.799425 C742.598851,489.332422 639.266428,386 511.799425,386 Z M511.799425,406 C628.220733,406 722.598851,500.378117 722.598851,616.799425 C722.598851,733.220733 628.220733,827.598851 511.799425,827.598851 C395.378117,827.598851 301,733.220733 301,616.799425 C301,500.378117 395.378117,406 511.799425,406 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('circle', {
          fill: '#222222',
          fillRule: 'nonzero',
          cx: '511.799425',
          cy: '616.799425',
          r: '211',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(511.799425, 616.799425) scale(-1, 1) rotate(630.000000) translate(-511.799425, -616.799425) ',
          x: '501.799425',
          y: '516.799425',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(511.799425, 616.799425) scale(-1, 1) translate(-511.799425, -616.799425) ',
          x: '501.799425',
          y: '516.799425',
          width: '20',
          height: '200',
          rx: '10',
        })
      ),
    },
    Oa = React.createElement(
      'svg',
      { viewBox: '0 0 1424 1024' },
      React.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement('path', {
          d: 'M369.1875,573.625 C395.020833,573.625 414.708333,568.416667 428.25,558 C441.791667,547.583333 448.5625,534.25 448.5625,518 C448.5625,505.916667 444.291667,494.770833 435.75,484.5625 C430.125,477.6875 421.270833,472.583333 409.1875,469.25 C430.4375,460.916667 441.0625,445.291667 441.0625,422.375 C441.0625,406.541667 435.229167,393.833333 423.5625,384.25 C413.5625,376.333333 400.125,372.375 383.25,372.375 L383.25,372.375 L312.3125,372.375 C303.354167,372.375 298.875,376.854167 298.875,385.8125 L298.875,385.8125 L298.875,560.1875 C298.875,569.145833 303.354167,573.625 312.3125,573.625 L312.3125,573.625 L369.1875,573.625 Z M372.3125,458.3125 L322,458.3125 L322,400.1875 C322,396.854167 323.770833,395.1875 327.3125,395.1875 L327.3125,395.1875 L389.1875,395.1875 C397.3125,395.1875 403.666667,396.958333 408.25,400.5 C414.916667,405.916667 418.25,413.208333 418.25,422.375 C418.25,434.041667 413.354167,443.208333 403.5625,449.875 C395.020833,455.5 384.604167,458.3125 372.3125,458.3125 L372.3125,458.3125 Z M377.9375,551.125 L327.3125,551.125 C323.770833,551.125 322,549.458333 322,546.125 L322,546.125 L322,481.125 L372.3125,481.125 C390.020833,481.125 403.25,484.5625 412,491.4375 C421.166667,498.9375 425.75,507.583333 425.75,517.375 C425.75,528.208333 420.4375,536.854167 409.8125,543.3125 C401.479167,548.520833 390.854167,551.125 377.9375,551.125 L377.9375,551.125 Z M593.25,578.625 C600.75,578.625 604.5,574.145833 604.5,565.1875 L604.5,565.1875 L604.5,446.125 C604.5,437.166667 600.75,432.6875 593.25,432.6875 C585.958333,432.6875 582.3125,437.166667 582.3125,446.125 L582.3125,446.125 L582.3125,518.625 C582.3125,528 575.645833,536.958333 562.3125,545.5 C551.479167,552.375 541.270833,555.8125 531.6875,555.8125 C520.645833,555.8125 512,552.6875 505.75,546.4375 C499.708333,540.395833 496.6875,531.75 496.6875,520.5 L496.6875,520.5 L496.6875,446.125 C496.6875,437.166667 492.9375,432.6875 485.4375,432.6875 C477.9375,432.6875 474.1875,437.166667 474.1875,446.125 L474.1875,446.125 L474.1875,518.9375 C474.1875,536.229167 479.708333,550.395833 490.75,561.4375 C501.791667,572.895833 515.854167,578.625 532.9375,578.625 C541.6875,578.625 550.645833,576.333333 559.8125,571.75 C569.1875,567.166667 576.6875,561.541667 582.3125,554.875 L582.3125,554.875 L582.3125,565.1875 C582.3125,574.145833 585.958333,578.625 593.25,578.625 Z M699.8125,573.625 C708.5625,573.625 712.9375,569.875 712.9375,562.375 C712.9375,554.875 708.5625,551.125 699.8125,551.125 L699.8125,551.125 L678.875,551.125 C675.75,551.125 674.1875,546.958333 674.1875,538.625 L674.1875,538.625 L674.1875,459.5625 L697.9375,459.5625 C706.6875,459.5625 711.0625,455.708333 711.0625,448 C711.0625,440.291667 706.6875,436.4375 697.9375,436.4375 L697.9375,436.4375 L674.1875,436.4375 L674.1875,411.75 C674.1875,402.791667 670.333333,398.3125 662.625,398.3125 C655.541667,398.3125 652,402.791667 652,411.75 L652,411.75 L652,436.4375 L635.125,436.4375 C626.375,436.4375 622,440.291667 622,448 C622,455.708333 626.375,459.5625 635.125,459.5625 L635.125,459.5625 L652,459.5625 L652,539.5625 C652,562.0625 659.604167,573.3125 674.8125,573.3125 C677.729167,573.3125 681.895833,573.416667 687.3125,573.625 L687.3125,573.625 L699.8125,573.625 Z M802,573.625 C810.75,573.625 815.125,569.875 815.125,562.375 C815.125,554.875 810.75,551.125 802,551.125 L802,551.125 L781.0625,551.125 C777.9375,551.125 776.375,546.958333 776.375,538.625 L776.375,538.625 L776.375,459.5625 L800.125,459.5625 C808.875,459.5625 813.25,455.708333 813.25,448 C813.25,440.291667 808.875,436.4375 800.125,436.4375 L800.125,436.4375 L776.375,436.4375 L776.375,411.75 C776.375,402.791667 772.520833,398.3125 764.8125,398.3125 C757.729167,398.3125 754.1875,402.791667 754.1875,411.75 L754.1875,411.75 L754.1875,436.4375 L737.3125,436.4375 C728.5625,436.4375 724.1875,440.291667 724.1875,448 C724.1875,455.708333 728.5625,459.5625 737.3125,459.5625 L737.3125,459.5625 L754.1875,459.5625 L754.1875,539.5625 C754.1875,562.0625 761.791667,573.3125 777,573.3125 C779.916667,573.3125 784.083333,573.416667 789.5,573.625 L789.5,573.625 L802,573.625 Z M905.75,578.3125 C926.791667,578.3125 944.291667,571.229167 958.25,557.0625 C972.416667,542.895833 979.5,525.5 979.5,504.875 C979.5,483.416667 972.520833,465.916667 958.5625,452.375 C945.020833,439.041667 927.416667,432.375 905.75,432.375 C883.875,432.375 865.958333,438.9375 852,452.0625 C838.25,465.395833 831.375,483 831.375,504.875 C831.375,526.333333 838.354167,543.9375 852.3125,557.6875 C866.479167,571.4375 884.291667,578.3125 905.75,578.3125 Z M905.75,555.5 C891.375,555.5 879.395833,550.708333 869.8125,541.125 C860.229167,531.541667 855.4375,519.458333 855.4375,504.875 C855.4375,489.458333 860.020833,477.270833 869.1875,468.3125 C878.354167,459.354167 890.541667,454.875 905.75,454.875 C920.958333,454.875 933.041667,459.458333 942,468.625 C950.75,477.583333 955.125,489.666667 955.125,504.875 C955.125,519.25 950.541667,531.333333 941.375,541.125 C932,550.708333 920.125,555.5 905.75,555.5 Z M1120.125,578.3125 C1127.625,578.3125 1131.375,573.833333 1131.375,564.875 L1131.375,564.875 L1131.375,488.3125 C1131.375,472.0625 1125.54167,458.729167 1113.875,448.3125 C1102.625,437.6875 1088.77083,432.375 1072.3125,432.375 C1052.9375,432.375 1037,439.979167 1024.5,455.1875 L1024.5,455.1875 L1024.5,445.8125 C1024.5,436.854167 1020.75,432.375 1013.25,432.375 C1005.75,432.375 1002,436.854167 1002,445.8125 L1002,445.8125 L1002,564.875 C1002,573.833333 1006.27083,578.3125 1014.8125,578.3125 C1021.27083,578.3125 1024.5,573.833333 1024.5,564.875 L1024.5,564.875 L1024.5,491.4375 C1024.5,483.3125 1028.97917,475.395833 1037.9375,467.6875 C1047.9375,459.145833 1059.39583,454.875 1072.3125,454.875 C1082.10417,454.875 1090.64583,458 1097.9375,464.25 C1105.22917,470.708333 1108.875,478.729167 1108.875,488.3125 L1108.875,488.3125 L1108.875,564.875 C1108.875,573.833333 1112.625,578.3125 1120.125,578.3125 Z',
          fill: '#999999',
          fillRule: 'nonzero',
        }),
        React.createElement('rect', {
          stroke: '#999999',
          strokeWidth: '20',
          x: '10',
          y: '228',
          width: '1404',
          height: '568',
          rx: '80',
        }),
        React.createElement('rect', {
          fill: 'var(--dn-brand-color)',
          transform:
            'translate(712.000000, 686.000000) scale(-1, 1) rotate(90.000000) translate(-712.000000, -686.000000) ',
          x: '702',
          y: '286',
          width: '20',
          height: '800',
          rx: '10',
        })
      )
    ),
    Ua = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M760.68194,324.234056 L458.713667,385.538094 C452.938335,386.710572 447.636234,389.558058 443.469151,393.725142 C431.753422,405.44087 431.753422,424.43582 443.469151,436.151548 L684.087803,676.770201 C688.253627,680.936024 693.553811,683.783077 699.327192,684.956207 C715.563927,688.255454 731.40097,677.767548 734.700217,661.530813 L796.049836,359.608122 C796.850539,355.667586 796.850893,351.606295 796.050878,347.66562 C792.754463,331.428309 776.91925,320.937641 760.68194,324.234056 Z M776.45071,351.644744 C776.717382,352.958303 776.717264,354.312067 776.450363,355.625579 L715.100743,657.548269 C714.000994,662.960514 708.72198,666.456483 703.309735,665.356734 C701.385275,664.965691 699.618547,664.016673 698.229939,662.628065 L457.611287,422.009413 C453.706044,418.10417 453.706044,411.77252 457.611287,407.867277 C459.000314,406.478249 460.767681,405.529087 462.692792,405.138261 L764.661064,343.834223 C769.981765,342.754042 775.172938,346.115089 776.391257,351.3712 L776.45071,351.644744 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(615.666491, 504.595655) scale(-1, 1) rotate(45.000000) translate(-615.666491, -504.595655) ',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(363.000000, 512.000000) scale(-1, 1) translate(-363.000000, -512.000000) ',
        x: '353',
        y: '312',
        width: '20',
        height: '400',
        rx: '10',
      })
    ),
    Ga = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(266.000000, 123.000000) scale(-1, 1) translate(-266.000000, -123.000000) ',
        x: '256',
        y: '63',
        width: '20',
        height: '120',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(770.000000, 123.000000) scale(-1, 1) translate(-770.000000, -123.000000) ',
        x: '760',
        y: '63',
        width: '20',
        height: '120',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M165.894531,113.494448 C171.417379,113.494448 175.894531,117.9716 175.894531,123.494448 C175.894531,128.923687 171.56786,133.342379 166.174436,133.490606 L165.894531,133.494448 L88.4375,133.494448 C51.0375365,133.494448 20.613907,163.802329 20.0091744,201.462605 L20,202.606052 L20,934.388395 C20,972.194862 50.0496299,1002.88081 87.3063267,1003.49075 L88.4375,1003.5 L935.5625,1003.5 C972.962464,1003.5 1003.38609,973.192119 1003.99083,935.531843 L1004,934.388395 L1004,202.606052 C1004,164.799585 973.95037,134.113639 936.693673,133.503701 L935.5625,133.494448 L859.085938,133.494448 C853.56309,133.494448 849.085938,129.017295 849.085938,123.494448 C849.085938,118.065208 853.412608,113.646516 858.806033,113.494448 L859.085938,113.494448 L935.5625,113.494448 C983.93581,113.494448 1023.20756,152.615815 1023.98816,201.132989 L1024,202.606052 L1024,934.388395 C1024,983.092351 985.211983,1022.70076 937.025542,1023.48806 L935.5625,1023.5 L88.4375,1023.5 C40.0641901,1023.5 0.792440052,984.378633 0.011842382,935.861458 L0,934.388395 L0,202.606052 C0,153.902096 38.788017,114.293689 86.9744583,113.506392 L88.4375,113.494448 L165.894531,113.494448 Z M661.03125,113.494448 C666.554097,113.494448 671.03125,117.9716 671.03125,123.494448 C671.03125,128.923687 666.704579,133.342379 661.311155,133.490606 L661.03125,133.494448 L363.949219,133.494448 C358.426371,133.494448 353.949219,129.017295 353.949219,123.494448 C353.949219,118.065208 358.27589,113.646516 363.669314,113.498289 L363.949219,113.494448 L661.03125,113.494448 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,353.997224 C539.884857,353.997224 562.542797,376.376315 562.993167,404.153846 L563,404.997224 L543,404.997224 C543,387.876397 529.120827,373.997224 512,373.997224 C495.050381,373.997224 481.277908,387.600201 481.004153,404.484582 L481,404.997224 L461,404.997224 C461,376.830702 483.833478,353.997224 512,353.997224 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,784.997224 C539.884857,784.997224 562.542797,807.376315 562.993167,835.153846 L563,835.997224 L543,835.997224 C543,818.876397 529.120827,804.997224 512,804.997224 C495.050381,804.997224 481.277908,818.600201 481.004153,835.484582 L481,835.997224 L461,835.997224 C461,807.830702 483.833478,784.997224 512,784.997224 Z',
        fill: '#979797',
        fillRule: 'nonzero',
        transform:
          'translate(512.000000, 810.497224) scale(1, -1) translate(-512.000000, -810.497224) ',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(512.000000, 784.997224) scale(-1, 1) rotate(630.000000) translate(-512.000000, -784.997224) ',
        x: '502',
        y: '584.997224',
        width: '20',
        height: '400',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M511.449219,394.997224 C603.031837,394.997224 677.447621,468.497181 678.926778,559.724009 L678.949219,562.493827 L679,711.997224 L679,795 L659,795 L659.000001,712.000621 L658.949219,562.497224 C658.949219,481.035223 592.911219,414.997224 511.449219,414.997224 C430.801838,414.997224 365.271521,479.721067 363.968979,560.054746 L363.949219,562.493827 L364,711.997224 L364,795 L344,795 L344.000001,712.000621 L343.949219,562.497224 C343.949219,469.989528 418.941523,394.997224 511.449219,394.997224 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      })
    ),
    Ja = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M340,140 C428.36556,140 500,211.63444 500,300 C500,388.36556 428.36556,460 340,460 C251.63444,460 180,388.36556 180,300 C180,211.63444 251.63444,140 340,140 Z M340,160 C262.680135,160 200,222.680135 200,300 C200,377.319865 262.680135,440 340,440 C417.319865,440 480,377.319865 480,300 C480,222.680135 417.319865,160 340,160 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M734.597206,481.106686 C757.881472,450.245168 801.775303,444.102591 832.636822,467.386857 C839.857253,472.834496 845.951313,479.628196 850.584274,487.390305 L851.014324,488.120829 L1032.6482,800.979178 L1015.3518,811.020822 L833.717925,498.162472 C830.372759,492.400534 825.909759,487.365262 820.591138,483.352492 C798.767635,466.88719 767.820583,471.022779 751.066182,492.496352 L750.562841,493.15237 L547.180849,762.719689 C546.774236,763.258623 546.359848,763.791646 545.937815,764.318592 C522.012172,794.191852 478.596414,799.263866 448.45171,775.912797 L447.54233,775.196485 L325.857503,677.738501 C324.721792,676.828904 323.546916,675.969317 322.33623,675.162193 C299.58956,659.997746 268.936391,665.931242 253.462928,688.34544 L252.998706,689.029698 L45.3205029,1000.547 L28.6794971,989.452998 L236.3577,677.935694 C257.802372,645.768686 301.263226,637.076515 333.430234,658.521187 C334.8427,659.462831 336.220352,660.455482 337.560471,661.497151 L338.360016,662.128019 L460.044843,759.586002 C481.598422,776.84837 513.064964,773.369657 530.327332,751.816079 L530.775403,751.248253 L531.215213,750.674005 L734.597206,481.106686 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      })
    ),
    Ya = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M550.172056,176.958801 L294.240951,176.958801 C272.816052,176.958801 253.772297,190.608913 246.890487,210.898492 L179.876194,408.476126 C174.967796,422.947511 176.946524,438.868968 185.247913,451.698633 L419.119809,813.143935 L658.760775,451.908879 C667.319335,439.007696 669.418771,422.869559 664.445887,408.208049 L597.522521,210.898492 C590.64071,190.608913 571.596956,176.958801 550.172056,176.958801 Z M294.240951,196.958801 L550.172056,196.958801 C563.026996,196.958801 574.453249,205.148868 578.582335,217.322615 L645.505701,414.632172 L645.661487,415.104267 C648.443208,423.774276 647.138071,433.250188 642.094634,440.85267 L419.328,776.651 L202.039411,440.833754 C197.058578,433.135955 195.871341,423.583081 198.81638,414.90025 L265.830673,217.322615 C269.959759,205.148868 281.386011,196.958801 294.240951,196.958801 Z',
        fill: '#979797',
        fillRule: 'nonzero',
        transform:
          'translate(422.161055, 495.051368) rotate(45.000000) translate(-422.161055, -495.051368) ',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(364.149199, 543.157628) rotate(45.000000) translate(-364.149199, -543.157628) ',
        x: '352.764584',
        y: '333.111474',
        width: '22.7692308',
        height: '420.092308',
      }),
      React.createElement('path', {
        d: 'M703.68796,65.6188677 L706.45719,65.6188677 C711.980038,65.6188677 716.45719,70.0960202 716.45719,75.6188677 L716.45719,328.849637 C716.45719,334.372484 711.980038,338.849637 706.45719,338.849637 L703.68796,338.849637 C698.165112,338.849637 693.68796,334.372484 693.68796,328.849637 L693.68796,75.6188677 C693.68796,70.0960202 698.165112,65.6188677 703.68796,65.6188677 Z',
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(705.072575, 202.234252) rotate(135.000000) translate(-705.072575, -202.234252) ',
      }),
      React.createElement('circle', {
        fill: '#999999',
        transform:
          'translate(519.516877, 387.789950) rotate(45.000000) translate(-519.516877, -387.789950) ',
        cx: '519.516877',
        cy: '387.78995',
        r: '24.4769231',
      }),
      React.createElement('path', {
        d: 'M764.560664,481.577606 C768.827837,478.071458 775.129359,478.68839 778.635508,482.955563 C782.141656,487.222736 781.524724,493.524258 777.257551,497.030407 C753.992056,516.146642 733.176046,541.574627 713.702878,573.670311 L712.262861,576.059969 C711.064865,578.061523 709.871882,580.088517 708.683652,582.141034 L707.579762,584.0571 L706.480345,585.983916 L705.385141,587.921935 L704.293892,589.871611 L703.206337,591.833396 C703.025371,592.161395 702.844549,592.489917 702.663864,592.818972 L701.581364,594.799772 L700.50191,596.793814 L699.425243,598.801553 C699.246016,599.137343 699.066894,599.473722 698.887873,599.8107 L697.814898,601.839834 L696.744061,603.883796 L695.675102,605.943041 L694.607762,608.018022 L693.541781,610.109191 L692.4769,612.217004 L691.412859,614.341911 L690.349398,616.484368 L689.286259,618.644827 C689.109082,619.006429 688.931907,619.3688 688.754729,619.731949 L687.691585,621.920261 C687.514375,622.286562 687.33715,622.65366 687.159907,623.021564 L686.096175,625.238749 L685.031726,627.475749 L683.966301,629.733018 L682.89964,632.011008 C682.721746,632.392425 682.54379,632.774724 682.365766,633.157915 L681.296765,635.467838 L680.22588,637.799615 L679.152852,640.153701 L678.07742,642.530548 L676.999325,644.93061 L675.918309,647.354339 L674.290737,651.035302 L673.201279,653.520184 L672.107991,656.030321 L671.010613,658.566165 L669.908886,661.12817 L668.80255,663.716789 L667.133836,667.650611 L666.014843,670.307748 L664.325927,674.346472 L663.192655,677.074961 L661.481104,681.222836 L660.331931,684.025508 L659.175943,686.858648 L658.012882,689.722707 L656.813988,692.691714 L653.665611,700.584206 L648.57097,713.466473 L627.086022,768.085028 L625.836738,771.219108 L624.649518,774.178068 L622.893636,778.529126 L621.739037,781.372797 L620.030015,785.554841 L618.34712,789.63924 L616.688861,793.628816 L615.596304,796.237248 L614.513592,798.805626 L613.440282,801.334788 C613.262156,801.753094 613.084403,802.1698 612.907015,802.584924 L612.058308,804.565445 L610.972663,807.082142 L609.895443,809.56013 L608.826165,812.000327 L607.764344,814.403648 L606.709497,816.771008 L605.66114,819.103323 L604.618787,821.401509 C604.445536,821.781747 604.272514,822.160601 604.099712,822.53809 L603.06546,824.786801 C602.721536,825.531013 602.378411,826.269919 602.036004,827.003672 L601.010859,829.189619 L599.989542,831.345558 C599.819614,831.702432 599.649826,832.058093 599.480167,832.412562 L598.463683,834.525207 C598.2945,834.874979 598.125427,835.223596 597.956453,835.571078 L596.943713,837.642489 C596.775094,837.985503 596.606554,838.32742 596.438082,838.668258 L595.427998,840.700496 C595.091524,841.373696 594.755244,842.042735 594.419078,842.707764 L593.41084,844.690976 L592.402799,846.651049 L591.394471,848.588899 C591.226365,848.910073 591.058227,849.230359 590.890048,849.549777 L589.880381,851.456009 L588.869218,853.342307 L587.856074,855.209588 L586.840464,857.058766 L585.821906,858.890758 C585.651874,859.194708 585.481698,859.497981 585.31137,859.800595 L584.184141,861.788753 L583.055017,863.7511 C582.113255,865.375646 581.169384,866.973352 580.223073,868.544331 L579.086307,870.416684 C564.861556,893.660931 550.057783,910.902071 533.553373,922.526917 C469.480948,967.65619 388.685598,981.260906 291.747026,963.635711 C286.313262,962.647754 282.709224,957.441921 283.697181,952.008157 C284.685138,946.574394 289.890971,942.970356 295.324735,943.958313 C387.296085,960.680376 462.673427,947.987972 522.036462,906.175747 C529.428814,900.96896 536.571079,894.251691 543.567123,885.964477 L544.642298,884.677127 C547.327421,881.427746 549.991702,877.945673 552.64105,874.227526 L553.700006,872.727668 C554.405465,871.719358 555.109918,870.694229 555.813477,869.652216 L556.86816,868.076526 C557.39518,867.282341 557.921729,866.478641 558.447854,865.665399 L559.499552,864.026184 C560.025133,863.200207 560.550321,862.364669 561.075164,861.519545 L562.124403,859.816504 C563.872416,856.956771 565.616943,853.990311 567.359736,850.916123 L568.258884,849.320367 L569.010494,847.972146 L569.760798,846.613345 L570.510005,845.243564 L571.258324,843.862404 L572.379592,841.768456 L573.126603,840.357104 L573.873456,838.932978 L574.620359,837.495678 L575.741266,835.314156 L576.489209,833.842178 L577.612654,831.606769 L578.738561,829.337233 L579.867634,827.032225 L580.622457,825.475181 L581.379208,823.901374 L582.138097,822.310406 L582.899333,820.701878 L584.046042,818.255287 L584.814057,816.601113 L585.971913,814.084186 L586.748011,812.381874 L588.311211,808.916992 L589.494062,806.264035 L590.686654,803.563042 L591.487473,801.73503 L592.293144,799.884672 L593.511202,797.066363 L594.741348,794.195533 L595.984286,791.270835 L597.662654,787.285118 L598.938181,784.229495 L600.662556,780.064324 L602.415517,775.792223 L603.750002,772.516054 L605.557006,768.049147 L607.397186,763.466534 L608.507135,760.680615 L630.724898,704.204366 L636.542866,689.518364 L638.481786,684.673812 L640.086166,680.709525 L641.278886,677.779683 L643.054969,673.443648 L644.230765,670.591409 L645.982766,666.369522 L647.721569,662.213954 L648.873903,659.479618 L650.592798,655.430971 L652.301,651.444309 L653.434324,648.820167 L654.563592,646.222369 L655.689082,643.650433 L657.37084,639.839967 L659.045662,636.084981 L660.15882,633.611676 L661.269591,631.161824 L662.378253,628.734945 C662.56287,628.332352 662.74741,627.930697 662.93188,627.529968 L664.037901,625.136643 L665.142509,622.765084 L666.245981,620.41481 L667.348597,618.08534 L668.450635,615.776192 L669.552373,613.486884 L670.654088,611.216933 L671.75606,608.965859 L672.858567,606.73318 L673.961887,604.518414 C674.145857,604.150752 674.329872,603.783816 674.513939,603.417597 L675.619,601.228796 L676.725569,599.056704 L677.833926,596.900838 L678.944348,594.760717 L680.057113,592.635858 L681.1725,590.525781 L682.290787,588.430004 L683.412252,586.348044 L684.537174,584.279419 L685.66583,582.223649 L686.7985,580.180251 L687.935461,578.148743 L689.076991,576.128644 L690.223369,574.119472 L691.374874,572.120744 C713.399942,534.075238 737.233372,504.031241 764.560664,481.577606 Z',
        fill: '#979797',
        fillRule: 'nonzero',
        transform:
          'translate(532.221771, 725.196578) rotate(45.000000) translate(-532.221771, -725.196578) ',
      })
    ),
    ja = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,322 C407.065898,322 322,407.065898 322,512 C322,616.934102 407.065898,702 512,702 C616.934102,702 702,616.934102 702,512 C702,407.065898 616.934102,322 512,322 Z M512,342 C605.888407,342 682,418.111593 682,512 C682,605.888407 605.888407,682 512,682 C418.111593,682 342,605.888407 342,512 C342,418.111593 418.111593,342 512,342 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(511.799425, 511.799425) scale(-1, 1) rotate(630.000000) translate(-511.799425, -511.799425) ',
        x: '501.799425',
        y: '411.799425',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(511.799425, 511.799425) scale(-1, 1) translate(-511.799425, -511.799425) ',
        x: '501.799425',
        y: '411.799425',
        width: '20',
        height: '200',
        rx: '10',
      })
    ),
    qa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,322 C407.065898,322 322,407.065898 322,512 C322,616.934102 407.065898,702 512,702 C616.934102,702 702,616.934102 702,512 C702,407.065898 616.934102,322 512,322 Z M512,342 C605.888407,342 682,418.111593 682,512 C682,605.888407 605.888407,682 512,682 C418.111593,682 342,605.888407 342,512 C342,418.111593 418.111593,342 512,342 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement(
        'g',
        {
          transform:
            'translate(511.799425, 511.799425) rotate(45.000000) translate(-511.799425, -511.799425) translate(411.799425, 411.799425)',
          fill: 'var(--dn-brand-color)',
        },
        React.createElement('rect', {
          transform:
            'translate(100.000000, 100.000000) scale(-1, 1) rotate(630.000000) translate(-100.000000, -100.000000) ',
          x: '90',
          y: '0',
          width: '20',
          height: '200',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(100.000000, 100.000000) scale(-1, 1) translate(-100.000000, -100.000000) ',
          x: '90',
          y: '0',
          width: '20',
          height: '200',
          rx: '10',
        })
      )
    ),
    Xa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M658.502514,333.621244 L317.482641,448.99623 C308.065853,452.18215 303.014736,462.398662 306.200656,471.81545 C307.662804,476.137198 310.711524,479.742469 314.730328,481.902234 L460.237096,560.099749 L537.160002,704.08365 C541.844412,712.851904 552.749951,716.162514 561.518205,711.478105 C565.634183,709.279157 568.735305,705.56766 570.167564,701.126345 L681.402364,356.196416 C684.453499,346.735097 679.257019,336.591749 669.7957,333.540614 C666.120129,332.355296 662.160785,332.383565 658.502514,333.621244 Z M661.147,353.84 L552.579,690.501 L477.877462,550.675445 L477.658795,550.277097 C475.800449,546.981033 473.04329,544.276793 469.704796,542.482637 L328.255,466.465 L661.147,353.84 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M658.430254,343.31015 C662.291622,339.36152 668.622876,339.290779 672.571507,343.152147 C676.448344,346.943308 676.587023,353.115359 672.93623,357.075687 L672.72951,357.2934 L474.782764,559.713519 C470.921396,563.662149 464.590141,563.732889 460.641511,559.871521 C456.764674,556.08036 456.625995,549.90831 460.276787,545.947982 L460.483508,545.730268 L658.430254,343.31015 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    Ka = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,322 C616.934102,322 702,407.065898 702,512 C702,616.934102 616.934102,702 512,702 C506.477153,702 502,697.522847 502,692 C502,686.57076 506.326671,682.152068 511.720095,682.003842 L512,682 C605.888407,682 682,605.888407 682,512 C682,418.111593 605.888407,342 512,342 C418.111593,342 342,418.111593 342,512 C342,517.522847 337.522847,522 332,522 C326.477153,522 322,517.522847 322,512 C322,407.065898 407.065898,322 512,322 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M362,450.213203 C367.522847,450.213203 372,454.690356 372,460.213203 C372,465.642443 367.673329,470.061135 362.279905,470.209362 L362,470.213203 L322,470.213203 C316.57076,470.213203 312.152068,474.539874 312.003842,479.933299 L312,480.213203 L312,520.213203 C312,525.736051 307.522847,530.213203 302,530.213203 C296.57076,530.213203 292.152068,525.886533 292.003842,520.493108 L292,520.213203 L292,480.213203 C292,463.810346 305.164172,450.482146 321.503895,450.217223 L322,450.213203 L362,450.213203 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(332.000000, 490.213203) rotate(225.000000) translate(-332.000000, -490.213203) ',
      })
    ),
    $a = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M549.519975,311 L372,311 C344.385763,311 322,333.385763 322,361 L322,657 C322,684.614237 344.385763,707 372,707 L652,707 C679.614237,707 702,684.614237 702,657 L702,457.228178 C702,437.706097 693.847671,419.070907 679.510818,405.820764 L597.030793,329.592586 C584.096712,317.638887 567.131943,311 549.519975,311 Z M372,331 L549.519975,331 C562.099952,331 574.217644,335.742062 583.456274,344.280419 L665.936299,420.508596 C676.176908,429.972984 682,443.283834 682,457.228178 L682,657 C682,673.568542 668.568542,687 652,687 L372,687 C355.431458,687 342,673.568542 342,657 L342,361 C342,344.431458 355.431458,331 372,331 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M395,321 L395,371 C395,376.42924 399.326671,380.847932 404.720095,380.996158 L405,381 L502,381 C507.42924,381 511.847932,376.673329 511.996158,371.279905 L512,371 L512,321 L532,321 L532,371 C532,387.402857 518.835828,400.731057 502.496105,400.995981 L502,401 L405,401 C388.597143,401 375.268943,387.835828 375.004019,371.496105 L375,371 L375,321 L395,321 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M397.5,597 L397.5,677 C397.5,682.42924 401.826671,686.847932 407.220095,686.996158 L407.5,687 L616.5,687 C621.92924,687 626.347932,682.673329 626.496158,677.279905 L626.5,677 L626.5,597 L646.5,597 L646.5,677 C646.5,693.402857 633.335828,706.731057 616.996105,706.995981 L616.5,707 L407.5,707 C391.097143,707 377.768943,693.835828 377.504019,677.496105 L377.5,677 L377.5,597 L397.5,597 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(512.000000, 652.000000) scale(1, -1) translate(-512.000000, -652.000000) ',
      })
    ),
    Qa = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement(
        'g',
        {
          transform: 'translate(438.500000, 421.000000)',
          fill: 'var(--dn-brand-color)',
          fillRule: 'nonzero',
        },
        React.createElement('path', {
          d: 'M123,33.2132034 C128.522847,33.2132034 133,37.6903559 133,43.2132034 C133,48.6424433 128.673329,53.0611352 123.279905,53.2093616 L123,53.2132034 L40,53.2132034 C23.5971429,53.2132034 10.2689429,66.3773749 10.0040191,82.7170986 L10,83.2132034 L10,181.213203 C10,186.736051 5.5228475,191.213203 0,191.213203 C-5.42923991,191.213203 -9.84793172,186.886533 -9.9961582,181.493108 L-10,181.213203 L-10,83.2132034 C-10,55.8751083 11.9402858,33.6614415 39.1731586,33.219902 L40,33.2132034 L123,33.2132034 Z',
        }),
        React.createElement('path', {
          d: 'M133.926407,3.21320344 C139.449254,3.21320344 143.926407,7.69035594 143.926407,13.2132034 C143.926407,18.6424433 139.599736,23.0611352 134.206312,23.2093616 L133.926407,23.2132034 L93.9264069,23.2132034 C88.497167,23.2132034 84.0784752,27.5398742 83.9302487,32.9332986 L83.9264069,33.2132034 L83.9264069,73.2132034 C83.9264069,78.7360509 79.4492544,83.2132034 73.9264069,83.2132034 C68.497167,83.2132034 64.0784752,78.8865326 63.9302487,73.4931083 L63.9264069,73.2132034 L63.9264069,33.2132034 C63.9264069,16.8103464 77.0905784,3.48214629 93.430302,3.21722258 L93.9264069,3.21320344 L133.926407,3.21320344 Z',
          transform:
            'translate(103.926407, 43.213203) rotate(135.000000) translate(-103.926407, -43.213203) ',
        })
      ),
      React.createElement('path', {
        d: 'M512,322 C407.065898,322 322,407.065898 322,512 C322,616.934102 407.065898,702 512,702 C616.934102,702 702,616.934102 702,512 C702,407.065898 616.934102,322 512,322 Z M512,342 C605.888407,342 682,418.111593 682,512 C682,605.888407 605.888407,682 512,682 C418.111593,682 342,605.888407 342,512 C342,418.111593 418.111593,342 512,342 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    en = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M459.627934,315.876727 L459.47481,315.882155 C448.426223,315.887387 439.474321,324.850702 439.488988,335.900192 L439.631704,637.238594 C439.633717,641.489223 440.989934,645.628668 443.503602,649.056397 L480.703515,699.783551 C481.650545,701.074956 482.749254,702.247943 483.976035,703.277311 C492.437608,710.377252 505.052708,709.273431 512.152649,700.811858 L553.260074,651.820816 C556.260604,648.244842 557.91576,643.731941 557.938797,639.06394 L559.434776,335.911563 L559.431869,335.56631 C559.248031,324.655616 550.365442,315.886887 539.434806,315.886887 L459.871,315.886 L459.688923,315.876727 C459.66796,315.876727 459.647898,315.876727 459.627934,315.876727 Z M496.831615,687.956278 L459.631702,637.229124 L459.489,335.886 L539.434806,335.886 L537.939041,638.965236 L496.831615,687.956278 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(499.461873, 511.916736) scale(-1, 1) rotate(-45.000000) translate(-499.461873, -511.916736) ',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(589.927912, 424.572088) rotate(585.000000) translate(-589.927912, -424.572088) ',
        x: '579.927912',
        y: '374.572088',
        width: '20',
        height: '100',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M547,319 L467,319 C455.954305,319 447,327.954305 447,339 L447,676 C447,687.045695 455.954305,696 467,696 L547,696 C558.045695,696 567,687.045695 567,676 L567,339 C567,327.954305 558.045695,319 547,319 Z M467,339 L547,339 L547,676 L467,676 L467,339 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(507.000000, 507.500000) scale(-1, 1) rotate(45.000000) translate(-507.000000, -507.500000) ',
      }),
      React.createElement('path', {
        d: 'M415.528493,412.81529 C421.051341,412.81529 425.528493,417.292442 425.528493,422.81529 L425.528493,462.81529 L425.528493,462.81529 L405.528493,462.81529 L405.528493,422.81529 C405.528493,417.292442 410.005646,412.81529 415.528493,412.81529 Z',
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(415.528493, 437.815290) scale(-1, 1) rotate(675.000000) translate(-415.528493, -437.815290) ',
      }),
      React.createElement('path', {
        d: 'M573.920412,571.207209 C579.44326,571.207209 583.920412,575.684361 583.920412,581.207209 L583.920412,621.207209 L583.920412,621.207209 L563.920412,621.207209 L563.920412,581.207209 C563.920412,575.684361 568.397565,571.207209 573.920412,571.207209 Z',
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(573.920412, 596.207209) scale(-1, 1) rotate(675.000000) translate(-573.920412, -596.207209) ',
      })
    ),
    tn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,322 C407.065898,322 322,407.065898 322,512 C322,616.934102 407.065898,702 512,702 C616.934102,702 702,616.934102 702,512 C702,407.065898 616.934102,322 512,322 Z M512,342 C605.888407,342 682,418.111593 682,512 C682,605.888407 605.888407,682 512,682 C418.111593,682 342,605.888407 342,512 C342,418.111593 418.111593,342 512,342 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement(
        'g',
        {
          transform: 'translate(390.500000, 434.000000)',
          fill: 'var(--dn-brand-color)',
        },
        React.createElement('rect', {
          transform:
            'translate(57.500000, 99.071068) scale(-1, 1) rotate(45.000000) translate(-57.500000, -99.071068) ',
          x: '47.5',
          y: '29.0710678',
          width: '20',
          height: '140',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(164.426407, 77.857864) rotate(45.000000) translate(-164.426407, -77.857864) ',
          x: '154.426407',
          y: '-22.1421356',
          width: '20',
          height: '200',
          rx: '10',
        })
      )
    ),
    an = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M512,322 C407.065898,322 322,407.065898 322,512 C322,616.934102 407.065898,702 512,702 C616.934102,702 702,616.934102 702,512 C702,407.065898 616.934102,322 512,322 Z M512,342 C605.888407,342 682,418.111593 682,512 C682,605.888407 605.888407,682 512,682 C418.111593,682 342,605.888407 342,512 C342,418.111593 418.111593,342 512,342 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(512.000000, 512.000000) rotate(45.000000) translate(-512.000000, -512.000000) ',
        x: '502',
        y: '332',
        width: '20',
        height: '360',
        rx: '10',
      })
    ),
    nn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement(
        'g',
        {
          transform: 'translate(442.000000, 436.000000)',
          fill: 'var(--dn-brand-color)',
        },
        React.createElement('rect', {
          transform:
            'translate(70.000000, 10.000000) scale(-1, 1) rotate(630.000000) translate(-70.000000, -10.000000) ',
          x: '60',
          y: '-60',
          width: '20',
          height: '140',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(70.000000, 76.000000) scale(-1, 1) rotate(630.000000) translate(-70.000000, -76.000000) ',
          x: '60',
          y: '6',
          width: '20',
          height: '140',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(70.000000, 142.000000) scale(-1, 1) rotate(630.000000) translate(-70.000000, -142.000000) ',
          x: '60',
          y: '72',
          width: '20',
          height: '140',
          rx: '10',
        })
      ),
      React.createElement(
        'g',
        {
          transform:
            'translate(659.882687, 643.916739) rotate(45.000000) translate(-659.882687, -643.916739) translate(619.882687, 535.916739)',
          stroke: 'var(--dn-brand-color)',
          strokeLinecap: 'round',
          strokeWidth: '20',
        },
        React.createElement('path', {
          d: 'M42,130 L38,130 C17.0131795,130 0,112.98682 0,92 L0,38 C0,17.0131795 17.0131795,0 38,0 L42,0 C62.9868205,0 80,17.0131795 80,38 C80,46.4486328 80,53.7819626 80,60',
        }),
        React.createElement('path', {
          d: 'M42,216 L38,216 C17.0131795,216 0,198.98682 0,178 L0,124 C0,103.01318 17.0131795,86 38,86 L42,86 C62.9868205,86 80,103.01318 80,124 C80,132.448633 80,139.781963 80,146',
          transform:
            'translate(40.000000, 151.000000) scale(-1, -1) translate(-40.000000, -151.000000) ',
        })
      ),
      React.createElement('path', {
        d: 'M512,322 C616.934102,322 702,407.065898 702,512 C702,517.522847 697.522847,522 692,522 C686.57076,522 682.152068,517.673329 682.003842,512.279905 L682,512 C682,418.111593 605.888407,342 512,342 C418.111593,342 342,418.111593 342,512 C342,604.949523 416.596972,680.47599 509.188739,681.977225 L512,682 C517.522847,682 522,686.477153 522,692 C522,697.522847 517.522847,702 512,702 C407.065898,702 322,616.934102 322,512 C322,407.065898 407.065898,322 512,322 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    rn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(511.799425, 511.799425) scale(-1, 1) rotate(630.000000) translate(-511.799425, -511.799425) ',
        x: '501.799425',
        y: '411.799425',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(511.799425, 511.799425) scale(-1, 1) translate(-511.799425, -511.799425) ',
        x: '501.799425',
        y: '411.799425',
        width: '20',
        height: '200',
        rx: '10',
      }),
      React.createElement(
        'g',
        {
          transform:
            'translate(659.882687, 643.916739) rotate(45.000000) translate(-659.882687, -643.916739) translate(619.882687, 535.916739)',
          stroke: 'var(--dn-brand-color)',
          strokeLinecap: 'round',
          strokeWidth: '20',
        },
        React.createElement('path', {
          d: 'M42,130 L38,130 C17.0131795,130 0,112.98682 0,92 L0,38 C0,17.0131795 17.0131795,0 38,0 L42,0 C62.9868205,0 80,17.0131795 80,38 C80,46.4486328 80,53.7819626 80,60',
        }),
        React.createElement('path', {
          d: 'M42,216 L38,216 C17.0131795,216 0,198.98682 0,178 L0,124 C0,103.01318 17.0131795,86 38,86 L42,86 C62.9868205,86 80,103.01318 80,124 C80,132.448633 80,139.781963 80,146',
          transform:
            'translate(40.000000, 151.000000) scale(-1, -1) translate(-40.000000, -151.000000) ',
        })
      ),
      React.createElement('path', {
        d: 'M512,322 C616.934102,322 702,407.065898 702,512 C702,517.522847 697.522847,522 692,522 C686.57076,522 682.152068,517.673329 682.003842,512.279905 L682,512 C682,418.111593 605.888407,342 512,342 C418.111593,342 342,418.111593 342,512 C342,604.949523 416.596972,680.47599 509.188739,681.977225 L512,682 C517.522847,682 522,686.477153 522,692 C522,697.522847 517.522847,702 512,702 C407.065898,702 322,616.934102 322,512 C322,407.065898 407.065898,322 512,322 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      })
    ),
    ln = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M944,212 C988.18278,212 1024,247.81722 1024,292 L1024,732 C1024,776.18278 988.18278,812 944,812 L80,812 C35.81722,812 0,776.18278 0,732 L0,292 C0,247.81722 35.81722,212 80,212 L944,212 Z M944,232 L80,232 C47.1942859,232 20.5378857,258.328343 20,291.00779 L20,292 L20,732 C20,764.805714 46.328343,791.462114 79.0077903,791.991962 L80,792 L944,792 C976.805714,792 1003.46211,765.671657 1004,732.99221 L1004,732 L1004,292 C1004,259.194286 977.671657,232.537886 944.99221,232.008038 L944,232 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M549.519975,311 C566.900206,311 583.650158,317.465328 596.518152,329.123493 L597.030793,329.592586 L679.510818,405.820764 C693.686582,418.922029 701.816021,437.288008 702,456.570472 L702,457.228178 L702,505 C702,510.522847 697.522847,515 692,515 C686.57076,515 682.152068,510.673329 682.003842,505.279905 L682,505 L682,457.228178 C682,443.485926 676.34447,430.358939 666.378755,420.922505 L665.936299,420.508596 L583.456274,344.280419 C574.369097,335.882035 562.49648,331.156498 550.138279,331.003819 L549.519975,331 L372,331 C355.597143,331 342.268943,344.164172 342.004019,360.503895 L342,361 L342,657 C342,673.402857 355.164172,686.731057 371.503895,686.995981 L372,687 L513,687 C518.522847,687 523,691.477153 523,697 C523,702.42924 518.673329,706.847932 513.279905,707 L513,707 L372,707 C344.661905,707 322.448238,685.059714 322.006699,657.826841 L322,657 L322,361 C322,333.661905 343.940286,311.448238 371.173159,311.006699 L372,311 L549.519975,311 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M395,321 L395,371 C395,376.42924 399.326671,380.847932 404.720095,380.996158 L405,381 L502,381 C507.42924,381 511.847932,376.673329 511.996158,371.279905 L512,371 L512,321 L532,321 L532,371 C532,387.402857 518.835828,400.731057 502.496105,400.995981 L502,401 L405,401 C388.597143,401 375.268943,387.835828 375.004019,371.496105 L375,371 L375,321 L395,321 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M397,597 L397,677 C397,682.42924 401.326671,686.847932 406.720095,686.996158 L407,687 L492,687 C497.42924,687 501.847932,682.673329 501.996158,677.279905 L502,677 L502,597 L522,597 L522,677 C522,693.402857 508.835828,706.731057 492.496105,706.995981 L492,707 L407,707 C390.597143,707 377.268943,693.835828 377.004019,677.496105 L377,677 L377,597 L397,597 Z',
        fill: 'var(--dn-brand-color)',
        fillRule: 'nonzero',
        transform:
          'translate(449.500000, 652.000000) scale(1, -1) translate(-449.500000, -652.000000) ',
      }),
      React.createElement(
        'g',
        {
          transform:
            'translate(659.882687, 643.916739) rotate(45.000000) translate(-659.882687, -643.916739) translate(619.882687, 535.916739)',
          stroke: 'var(--dn-brand-color)',
          strokeLinecap: 'round',
          strokeWidth: '20',
        },
        React.createElement('path', {
          d: 'M42,130 L38,130 C17.0131795,130 0,112.98682 0,92 L0,38 C0,17.0131795 17.0131795,0 38,0 L42,0 C62.9868205,0 80,17.0131795 80,38 C80,46.4486328 80,53.7819626 80,60',
        }),
        React.createElement('path', {
          d: 'M42,216 L38,216 C17.0131795,216 0,198.98682 0,178 L0,124 C0,103.01318 17.0131795,86 38,86 L42,86 C62.9868205,86 80,103.01318 80,124 C80,132.448633 80,139.781963 80,146',
          transform:
            'translate(40.000000, 151.000000) scale(-1, -1) translate(-40.000000, -151.000000) ',
        })
      )
    ),
    Cn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M880,0 C929.208571,0 969.193171,39.4925145 969.987943,88.5116854 L970,90 L970,607 L950,607 L950,90 C950,51.7266668 919.2836,20.6275333 881.157578,20.009378 L880,20 L90,20 C51.7266668,20 20.6275333,50.7164002 20.009378,88.842422 L20,90 L20,830 C20,868.273333 50.7164002,899.372467 88.842422,899.990622 L90,900 L695,900 L695,920 L90,920 C40.7914288,920 0.806828576,880.507485 0.0120574286,831.488315 L0,830 L0,90 C0,40.7914288 39.4925145,0.806828576 88.5116854,0.0120574286 L90,0 L880,0 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(482.500000, 463.833333) scale(-1, 1) rotate(90.000000) translate(-482.500000, -463.833333) ',
        x: '472.5',
        y: '-7.16666667',
        width: '20',
        height: '942',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(482.500000, 239.055556) scale(-1, 1) rotate(90.000000) translate(-482.500000, -239.055556) ',
        x: '472.5',
        y: '-231.944444',
        width: '20',
        height: '942',
      }),
      React.createElement(
        'g',
        { transform: 'translate(684.639279, 588.000000)' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(10.657480, 213.058014) scale(-1, 1) translate(-10.657480, -213.058014) ',
          x: '0.657479548',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(329.360721, 213.058014) scale(-1, 1) translate(-329.360721, -213.058014) ',
          x: '319.360721',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('path', {
          d: 'M170.0091,-10 C77.1992035,-10 0.657479548,29.2914183 0.657479548,81.8004988 C0.657479548,134.309579 77.1992035,173.600998 170.0091,173.600998 C262.818997,173.600998 339.360721,134.309579 339.360721,81.8004988 C339.360721,29.2914183 262.818997,-10 170.0091,-10 Z M170.0091,10 C253.214144,10 319.360721,43.9552432 319.360721,81.8004988 C319.360721,119.645754 253.214144,153.600998 170.0091,153.600998 C86.8040573,153.600998 20.6574795,119.645754 20.6574795,81.8004988 C20.6574795,43.9552432 86.8040573,10 170.0091,10 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,169.266833 C20.6574795,207.112088 86.8040573,241.067332 170.0091,241.067332 C252.382093,241.067332 318.036084,207.787798 319.340927,170.400994 L319.360721,169.266833 L339.360721,169.266833 C339.360721,221.775913 262.818997,261.067332 170.0091,261.067332 C78.1273025,261.067332 2.18994084,222.557813 0.680381791,170.838114 L0.657479548,169.266833 L20.6574795,169.266833 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,344.315529 C20.6574795,382.160784 86.8040573,416.116028 170.0091,416.116028 C252.382093,416.116028 318.036084,382.836494 319.340927,345.449689 L319.360721,344.315529 L339.360721,344.315529 C339.360721,396.824609 262.818997,436.116028 170.0091,436.116028 C78.1273025,436.116028 2.18994084,397.606508 0.680381791,345.88681 L0.657479548,344.315529 L20.6574795,344.315529 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,256.733167 C20.6574795,294.578423 86.8040573,328.533666 170.0091,328.533666 C252.382093,328.533666 318.036084,295.254132 319.340927,257.867328 L319.360721,256.733167 L339.360721,256.733167 C339.360721,309.242248 262.818997,348.533666 170.0091,348.533666 C78.1273025,348.533666 2.18994084,310.024147 0.680381791,258.304448 L0.657479548,256.733167 L20.6574795,256.733167 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        })
      ),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(353.500000, 688.611111) scale(-1, 1) rotate(90.000000) translate(-353.500000, -688.611111) ',
        x: '343.5',
        y: '346.611111',
        width: '20',
        height: '684',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 351.444444) scale(-1, 1) rotate(630.000000) translate(-189.000000, -351.444444) ',
        x: '179',
        y: '276.444444',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 126.666667) scale(-1, 1) rotate(630.000000) translate(-189.000000, -126.666667) ',
        x: '179',
        y: '51.6666667',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 576.222222) scale(-1, 1) rotate(630.000000) translate(-189.000000, -576.222222) ',
        x: '179',
        y: '501.222222',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 801.000000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -801.000000) ',
        x: '179',
        y: '726',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 351.444444) scale(-1, 1) rotate(630.000000) translate(-486.000000, -351.444444) ',
        x: '476',
        y: '276.444444',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 126.666667) scale(-1, 1) rotate(630.000000) translate(-486.000000, -126.666667) ',
        x: '476',
        y: '51.6666667',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 576.222222) scale(-1, 1) rotate(630.000000) translate(-486.000000, -576.222222) ',
        x: '476',
        y: '501.222222',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 801.000000) scale(-1, 1) rotate(630.000000) translate(-486.000000, -801.000000) ',
        x: '476',
        y: '726',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(783.000000, 351.444444) scale(-1, 1) rotate(630.000000) translate(-783.000000, -351.444444) ',
        x: '773',
        y: '276.444444',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(783.000000, 126.666667) scale(-1, 1) rotate(630.000000) translate(-783.000000, -126.666667) ',
        x: '773',
        y: '51.6666667',
        width: '20',
        height: '150',
        rx: '10',
      })
    ),
    cn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M880,295 C929.208571,295 969.193171,334.492515 969.987943,383.511685 L970,385 L970,607 L950,607 L950,385 C950,346.726667 919.2836,315.627533 881.157578,315.009378 L880,315 L90,315 C51.7266668,315 20.6275333,345.7164 20.009378,383.842422 L20,385 L20,830 C20,868.273333 50.7164002,899.372467 88.842422,899.990622 L90,900 L695,900 L695,920 L90,920 C40.7914288,920 0.806828576,880.507485 0.0120574286,831.488315 L0,830 L0,385 C0,335.791429 39.4925145,295.806829 88.5116854,295.012057 L90,295 L880,295 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(482.500000, 515.000000) scale(-1, 1) rotate(90.000000) translate(-482.500000, -515.000000) ',
        x: '472.5',
        y: '44',
        width: '20',
        height: '942',
      }),
      React.createElement(
        'g',
        { transform: 'translate(684.639279, 588.000000)' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(10.657480, 213.058014) scale(-1, 1) translate(-10.657480, -213.058014) ',
          x: '0.657479548',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(329.360721, 213.058014) scale(-1, 1) translate(-329.360721, -213.058014) ',
          x: '319.360721',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('path', {
          d: 'M170.0091,-10 C77.1992035,-10 0.657479548,29.2914183 0.657479548,81.8004988 C0.657479548,134.309579 77.1992035,173.600998 170.0091,173.600998 C262.818997,173.600998 339.360721,134.309579 339.360721,81.8004988 C339.360721,29.2914183 262.818997,-10 170.0091,-10 Z M170.0091,10 C253.214144,10 319.360721,43.9552432 319.360721,81.8004988 C319.360721,119.645754 253.214144,153.600998 170.0091,153.600998 C86.8040573,153.600998 20.6574795,119.645754 20.6574795,81.8004988 C20.6574795,43.9552432 86.8040573,10 170.0091,10 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,169.266833 C20.6574795,207.112088 86.8040573,241.067332 170.0091,241.067332 C252.382093,241.067332 318.036084,207.787798 319.340927,170.400994 L319.360721,169.266833 L339.360721,169.266833 C339.360721,221.775913 262.818997,261.067332 170.0091,261.067332 C78.1273025,261.067332 2.18994084,222.557813 0.680381791,170.838114 L0.657479548,169.266833 L20.6574795,169.266833 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,344.315529 C20.6574795,382.160784 86.8040573,416.116028 170.0091,416.116028 C252.382093,416.116028 318.036084,382.836494 319.340927,345.449689 L319.360721,344.315529 L339.360721,344.315529 C339.360721,396.824609 262.818997,436.116028 170.0091,436.116028 C78.1273025,436.116028 2.18994084,397.606508 0.680381791,345.88681 L0.657479548,344.315529 L20.6574795,344.315529 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,256.733167 C20.6574795,294.578423 86.8040573,328.533666 170.0091,328.533666 C252.382093,328.533666 318.036084,295.254132 319.340927,257.867328 L319.360721,256.733167 L339.360721,256.733167 C339.360721,309.242248 262.818997,348.533666 170.0091,348.533666 C78.1273025,348.533666 2.18994084,310.024147 0.680381791,258.304448 L0.657479548,256.733167 L20.6574795,256.733167 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        })
      ),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(353.500000, 709.000000) scale(-1, 1) rotate(90.000000) translate(-353.500000, -709.000000) ',
        x: '343.5',
        y: '367',
        width: '20',
        height: '684',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(272.500000, 125.500000) scale(-1, 1) rotate(630.000000) translate(-272.500000, -125.500000) ',
        x: '262.5',
        y: '-33',
        width: '20',
        height: '317',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M920,0 L50,0 C22.3857625,0 0,22.3857625 0,50 L0,201 C0,228.614237 22.3857625,251 50,251 L920,251 C947.614237,251 970,228.614237 970,201 L970,50 C970,22.3857625 947.614237,0 920,0 Z M50,20 L920,20 C936.568542,20 950,33.4314575 950,50 L950,201 C950,217.568542 936.568542,231 920,231 L50,231 C33.4314575,231 20,217.568542 20,201 L20,50 C20,33.4314575 33.4314575,20 50,20 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        x: '521.5',
        y: '95.5',
        width: '150',
        height: '60',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        x: '708',
        y: '95.5',
        width: '150',
        height: '60',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 414.666667) scale(-1, 1) rotate(630.000000) translate(-189.000000, -414.666667) ',
        x: '179',
        y: '339.666667',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 607.000000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -607.000000) ',
        x: '179',
        y: '532',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 801.000000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -801.000000) ',
        x: '179',
        y: '726',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 414.666667) scale(-1, 1) rotate(630.000000) translate(-486.000000, -414.666667) ',
        x: '476',
        y: '339.666667',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 607.000000) scale(-1, 1) rotate(630.000000) translate(-486.000000, -607.000000) ',
        x: '476',
        y: '532',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(486.000000, 801.000000) scale(-1, 1) rotate(630.000000) translate(-486.000000, -801.000000) ',
        x: '476',
        y: '726',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(783.000000, 414.666667) scale(-1, 1) rotate(630.000000) translate(-783.000000, -414.666667) ',
        x: '773',
        y: '339.666667',
        width: '20',
        height: '150',
        rx: '10',
      })
    ),
    on = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M90,920 C40.7914288,920 0.806828576,880.507485 0.0120574286,831.488315 L0,830 L0,90 C0,40.7914288 39.4925145,0.806828576 88.5116854,0.0120574286 L90,0 L880,0 C929.208571,0 969.193171,39.4925145 969.987943,88.5116854 L970,90 L970,610 L950,610 L950,90 C950,51.7266668 919.2836,20.6275333 881.157578,20.009378 L880,20 L90,20 C51.7266668,20 20.6275333,50.7164002 20.009378,88.842422 L20,90 L20,830 C20,868.273333 50.7164002,899.372467 88.842422,899.990622 L90,900 L695,900 L695,920 L90,920 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(479.500000, 223.700000) scale(-1, 1) rotate(90.000000) translate(-479.500000, -223.700000) ',
        x: '469.5',
        y: '-142.3',
        width: '20',
        height: '732',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(479.500000, 443.100000) scale(-1, 1) rotate(90.000000) translate(-479.500000, -443.100000) ',
        x: '469.5',
        y: '77.1',
        width: '20',
        height: '732',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(313.000000, 662.500000) scale(-1, 1) rotate(90.000000) translate(-313.000000, -662.500000) ',
        x: '303',
        y: '463',
        width: '20',
        height: '399',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 114.000000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -114.000000) ',
        x: '179',
        y: '39',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 333.400000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -333.400000) ',
        x: '179',
        y: '258.4',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 552.800000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -552.800000) ',
        x: '179',
        y: '477.8',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        x: '113.5',
        y: '754',
        width: '150',
        height: '60',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        x: '300',
        y: '754',
        width: '150',
        height: '60',
        rx: '10',
      }),
      React.createElement(
        'g',
        { transform: 'translate(684.639279, 588.000000)' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(10.657480, 213.058014) scale(-1, 1) translate(-10.657480, -213.058014) ',
          x: '0.657479548',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(329.360721, 213.058014) scale(-1, 1) translate(-329.360721, -213.058014) ',
          x: '319.360721',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('path', {
          d: 'M170.0091,-10 C77.1992035,-10 0.657479548,29.2914183 0.657479548,81.8004988 C0.657479548,134.309579 77.1992035,173.600998 170.0091,173.600998 C262.818997,173.600998 339.360721,134.309579 339.360721,81.8004988 C339.360721,29.2914183 262.818997,-10 170.0091,-10 Z M170.0091,10 C253.214144,10 319.360721,43.9552432 319.360721,81.8004988 C319.360721,119.645754 253.214144,153.600998 170.0091,153.600998 C86.8040573,153.600998 20.6574795,119.645754 20.6574795,81.8004988 C20.6574795,43.9552432 86.8040573,10 170.0091,10 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,169.266833 C20.6574795,207.112088 86.8040573,241.067332 170.0091,241.067332 C252.382093,241.067332 318.036084,207.787798 319.340927,170.400994 L319.360721,169.266833 L339.360721,169.266833 C339.360721,221.775913 262.818997,261.067332 170.0091,261.067332 C78.1273025,261.067332 2.18994084,222.557813 0.680381791,170.838114 L0.657479548,169.266833 L20.6574795,169.266833 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,344.315529 C20.6574795,382.160784 86.8040573,416.116028 170.0091,416.116028 C252.382093,416.116028 318.036084,382.836494 319.340927,345.449689 L319.360721,344.315529 L339.360721,344.315529 C339.360721,396.824609 262.818997,436.116028 170.0091,436.116028 C78.1273025,436.116028 2.18994084,397.606508 0.680381791,345.88681 L0.657479548,344.315529 L20.6574795,344.315529 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,256.733167 C20.6574795,294.578423 86.8040573,328.533666 170.0091,328.533666 C252.382093,328.533666 318.036084,295.254132 319.340927,257.867328 L319.360721,256.733167 L339.360721,256.733167 C339.360721,309.242248 262.818997,348.533666 170.0091,348.533666 C78.1273025,348.533666 2.18994084,310.024147 0.680381791,258.304448 L0.657479548,256.733167 L20.6574795,256.733167 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        })
      )
    ),
    Ln = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M90,920 C40.7914288,920 0.806828576,880.507485 0.0120574286,831.488315 L0,830 L0,90 C0,40.7914288 39.4925145,0.806828576 88.5116854,0.0120574286 L90,0 L880,0 C929.208571,0 969.193171,39.4925145 969.987943,88.5116854 L970,90 L970,610 L950,610 L950,90 C950,51.7266668 919.2836,20.6275333 881.157578,20.009378 L880,20 L90,20 C51.7266668,20 20.6275333,50.7164002 20.009378,88.842422 L20,90 L20,830 C20,868.273333 50.7164002,899.372467 88.842422,899.990622 L90,900 L695,900 L695,920 L90,920 Z',
        fill: '#999999',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(479.500000, 223.700000) scale(-1, 1) rotate(90.000000) translate(-479.500000, -223.700000) ',
        x: '469.5',
        y: '-142.3',
        width: '20',
        height: '732',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(479.500000, 507.600000) scale(-1, 1) rotate(90.000000) translate(-479.500000, -507.600000) ',
        x: '469.5',
        y: '141.6',
        width: '20',
        height: '732',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(313.000000, 791.500000) scale(-1, 1) rotate(90.000000) translate(-313.000000, -791.500000) ',
        x: '303',
        y: '592',
        width: '20',
        height: '399',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 114.000000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -114.000000) ',
        x: '179',
        y: '39',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 365.650000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -365.650000) ',
        x: '179',
        y: '290.65',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(189.000000, 649.550000) scale(-1, 1) rotate(630.000000) translate(-189.000000, -649.550000) ',
        x: '179',
        y: '574.55',
        width: '20',
        height: '150',
        rx: '10',
      }),
      React.createElement(
        'g',
        { transform: 'translate(684.639279, 588.000000)' },
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(10.657480, 213.058014) scale(-1, 1) translate(-10.657480, -213.058014) ',
          x: '0.657479548',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('rect', {
          fill: '#999999',
          transform:
            'translate(329.360721, 213.058014) scale(-1, 1) translate(-329.360721, -213.058014) ',
          x: '319.360721',
          y: '81.8004988',
          width: '20',
          height: '262.51503',
        }),
        React.createElement('path', {
          d: 'M170.0091,-10 C77.1992035,-10 0.657479548,29.2914183 0.657479548,81.8004988 C0.657479548,134.309579 77.1992035,173.600998 170.0091,173.600998 C262.818997,173.600998 339.360721,134.309579 339.360721,81.8004988 C339.360721,29.2914183 262.818997,-10 170.0091,-10 Z M170.0091,10 C253.214144,10 319.360721,43.9552432 319.360721,81.8004988 C319.360721,119.645754 253.214144,153.600998 170.0091,153.600998 C86.8040573,153.600998 20.6574795,119.645754 20.6574795,81.8004988 C20.6574795,43.9552432 86.8040573,10 170.0091,10 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,169.266833 C20.6574795,207.112088 86.8040573,241.067332 170.0091,241.067332 C252.382093,241.067332 318.036084,207.787798 319.340927,170.400994 L319.360721,169.266833 L339.360721,169.266833 C339.360721,221.775913 262.818997,261.067332 170.0091,261.067332 C78.1273025,261.067332 2.18994084,222.557813 0.680381791,170.838114 L0.657479548,169.266833 L20.6574795,169.266833 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,344.315529 C20.6574795,382.160784 86.8040573,416.116028 170.0091,416.116028 C252.382093,416.116028 318.036084,382.836494 319.340927,345.449689 L319.360721,344.315529 L339.360721,344.315529 C339.360721,396.824609 262.818997,436.116028 170.0091,436.116028 C78.1273025,436.116028 2.18994084,397.606508 0.680381791,345.88681 L0.657479548,344.315529 L20.6574795,344.315529 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        }),
        React.createElement('path', {
          d: 'M20.6574795,256.733167 C20.6574795,294.578423 86.8040573,328.533666 170.0091,328.533666 C252.382093,328.533666 318.036084,295.254132 319.340927,257.867328 L319.360721,256.733167 L339.360721,256.733167 C339.360721,309.242248 262.818997,348.533666 170.0091,348.533666 C78.1273025,348.533666 2.18994084,310.024147 0.680381791,258.304448 L0.657479548,256.733167 L20.6574795,256.733167 Z',
          fill: '#979797',
          fillRule: 'nonzero',
        })
      )
    ),
    sn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement('rect', {
        stroke: '#999999',
        strokeWidth: '20',
        x: '10',
        y: '10',
        width: '1004',
        height: '1004',
        rx: '80',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 210.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -210.000000) ',
        x: '503.5',
        y: '-290.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M517.661479,308.887976 L273.916036,449.614473 C267.728014,453.187129 263.916036,459.78967 263.916036,466.934982 L263.916036,748.387976 C263.916036,755.533288 267.728014,762.135828 273.916036,765.708484 L517.661479,906.434982 C523.8495,910.007637 531.473457,910.007637 537.661479,906.434982 L781.406922,765.708484 C787.594944,762.135828 791.406922,755.533288 791.406922,748.387976 L791.406922,466.934982 C791.406922,459.78967 787.594944,453.187129 781.406922,449.614473 L537.661479,308.887976 C531.473457,305.31532 523.8495,305.31532 517.661479,308.887976 Z M283.916036,466.934982 L527.661479,326.208484 L771.406922,466.934982 L771.406922,748.387976 L527.661479,889.114473 L283.916036,748.387976 L283.916036,466.934982 Z',
        fill: '#979797',
        fillRule: 'nonzero',
      }),
      React.createElement(
        'g',
        {
          transform: 'translate(457.661479, 470.000000)',
          fill: 'var(--dn-brand-color)',
        },
        React.createElement('rect', {
          transform:
            'translate(70.000000, 10.000000) scale(-1, 1) rotate(630.000000) translate(-70.000000, -10.000000) ',
          x: '60',
          y: '-60',
          width: '20',
          height: '140',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(50.000000, 130.500000) scale(-1, 1) rotate(630.000000) translate(-50.000000, -130.500000) ',
          x: '40',
          y: '90.5',
          width: '20',
          height: '80',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(82.000000, 130.500000) scale(-1, 1) translate(-82.000000, -130.500000) ',
          x: '72',
          y: '110.5',
          width: '20',
          height: '40',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(130.000000, 30.000000) scale(-1, 1) translate(-130.000000, -30.000000) ',
          x: '120',
          y: '0',
          width: '20',
          height: '60',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(130.000000, 231.000000) scale(-1, 1) translate(-130.000000, -231.000000) ',
          x: '120',
          y: '201',
          width: '20',
          height: '60',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(70.000000, 251.000000) scale(-1, 1) rotate(630.000000) translate(-70.000000, -251.000000) ',
          x: '60',
          y: '181',
          width: '20',
          height: '140',
          rx: '10',
        }),
        React.createElement('rect', {
          transform:
            'translate(10.000000, 130.500000) scale(-1, 1) translate(-10.000000, -130.500000) ',
          x: '0',
          y: '0',
          width: '20',
          height: '261',
          rx: '10',
        })
      )
    ),
    dn = React.createElement(
      'g',
      { stroke: 'none', fill: 'none' },
      React.createElement('path', {
        d: 'M944,0 C988.18278,0 1024,35.81722 1024,80 L1024,944 C1024,988.18278 988.18278,1024 944,1024 L80,1024 C35.81722,1024 0,988.18278 0,944 L0,80 C0,35.81722 35.81722,0 80,0 L944,0 Z M944,20 L80,20 C47.1942859,20 20.5378857,46.328343 20,79.0077903 L20,80 L20,944 C20,976.805714 46.328343,1003.46211 79.0077903,1004 L80,1004 L944,1004 C976.805714,1004 1003.46211,977.671657 1004,944.99221 L1004,944 L1004,80 C1004,47.1942859 977.671657,20.5378857 944.99221,20 L944,20 Z',
        fill: '#999999',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 210.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -210.000000) ',
        x: '503.5',
        y: '-290.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M501.745443,308.887976 L258,449.614473 C251.811978,453.187129 248,459.78967 248,466.934982 L248,748.387976 C248,755.533288 251.811978,762.135828 258,765.708484 L501.745443,906.434982 C507.933465,910.007637 515.557422,910.007637 521.745443,906.434982 L765.490887,765.708484 C771.678908,762.135828 775.490887,755.533288 775.490887,748.387976 L775.490887,466.934982 C775.490887,459.78967 771.678908,453.187129 765.490887,449.614473 L521.745443,308.887976 C515.557422,305.31532 507.933465,305.31532 501.745443,308.887976 Z M268,466.934982 L511.745443,326.208484 L755.490887,466.934982 L755.490887,748.387976 L511.745443,889.114473 L268,748.387976 L268,466.934982 Z',
        fill: '#979797',
      }),
      React.createElement('path', {
        d: 'M444.694491,438 C484.071424,438 515.992736,469.921312 515.992736,509.298246 C515.992736,548.675179 484.071424,580.596491 444.694491,580.596491 C405.317557,580.596491 373.396245,548.675179 373.396245,509.298246 C373.396245,469.921312 405.317557,438 444.694491,438 Z M444.694491,458 C416.363252,458 393.396245,480.967007 393.396245,509.298246 C393.396245,537.629484 416.363252,560.596491 444.694491,560.596491 C473.025729,560.596491 495.992736,537.629484 495.992736,509.298246 C495.992736,480.967007 473.025729,458 444.694491,458 Z',
        fill: 'var(--dn-brand-color)',
      }),
      React.createElement('path', {
        d: 'M622.492294,598.549112 C638.021928,582.837333 663.348097,582.689676 679.059875,598.21931 C680.206394,599.352537 681.283184,600.553865 682.28442,601.816661 L682.778715,602.45315 L773.63287,721.908356 L757.714006,734.015782 L666.85985,614.560576 C666.290581,613.8121 665.669233,613.104705 665.00043,612.443656 C657.234839,604.768089 644.771927,604.752006 636.986319,612.340748 L636.71664,612.608556 L532.459335,718.088677 C519.538645,731.160912 499.394504,733.730454 483.623258,724.384289 L483.146692,724.097423 L416.986275,683.650209 C408.549633,678.492463 397.630586,680.28107 391.275853,687.807782 L391.033706,688.100098 L312.844261,784.306964 L297.323668,771.693036 L375.513113,675.48617 C388.019775,660.097561 409.885948,656.215893 426.904049,666.277232 L427.418251,666.586391 L493.578668,707.033605 C501.383946,711.805367 511.413908,710.666156 517.948964,704.312903 L518.23499,704.029232 L622.492294,598.549112 Z',
        fill: 'var(--dn-brand-color)',
      })
    ),
    hn = React.createElement(
      'g',
      { fill: 'none' },
      React.createElement('rect', {
        stroke: '#999999',
        strokeWidth: '20',
        x: '10',
        y: '10',
        width: '1004',
        height: '1004',
        rx: '80',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(513.500000, 210.000000) scale(-1, 1) rotate(630.000000) translate(-513.500000, -210.000000) ',
        x: '503.5',
        y: '-290.5',
        width: '20',
        height: '1001',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M502,308.887976 L258.254557,449.614473 C252.066535,453.187129 248.254557,459.78967 248.254557,466.934982 L248.254557,748.387976 C248.254557,755.533288 252.066535,762.135828 258.254557,765.708484 L502,906.434982 C508.188022,910.007637 515.811978,910.007637 522,906.434982 L765.745443,765.708484 C771.933465,762.135828 775.745443,755.533288 775.745443,748.387976 L775.745443,466.934982 C775.745443,459.78967 771.933465,453.187129 765.745443,449.614473 L522,308.887976 C515.811978,305.31532 508.188022,305.31532 502,308.887976 Z M268.254557,466.934982 L512,326.208484 L755.745443,466.934982 L755.745443,748.387976 L512,889.114473 L268.254557,748.387976 L268.254557,466.934982 Z',
        fill: '#979797',
      }),
      React.createElement('path', {
        d: 'M476.010023,471.661479 C482.948688,471.661479 489.555133,474.537023 494.277456,479.566204 L494.507,479.815 L528.279384,507.830929 L528.855274,508.51466 C529.760103,509.58893 531.06784,510.23569 532.462732,510.308062 L532.725219,510.314865 L590.812749,510.314865 C604.514472,510.314865 615.647855,521.311232 615.869111,534.931862 L615.872467,535.345403 L615.999957,578.970776 L596.000043,579.029224 L595.87251,535.374626 C595.87251,532.653735 593.724837,530.43446 591.032231,530.31954 L590.812749,530.314865 L532.725219,530.314865 C525.786554,530.314865 519.180109,527.439321 514.457786,522.41014 L514.223,522.156 L480.455858,494.145415 L479.879968,493.461684 C478.975139,492.387415 477.667402,491.740654 476.27251,491.668282 L476.010023,491.661479 L396.039841,491.661479 C396.025172,491.661479 396.012354,491.669407 396.005439,491.681211 L396,491.70132 L396,714 C396,719.42924 400.326671,723.847932 405.720095,723.996158 L406,724 L484,724 L484,744 L406,744 C389.597143,744 376.268943,730.835828 376.004019,714.496105 L376,714 L376,491.70132 C376,480.74891 384.786196,471.848626 395.694665,471.664392 L396.039841,471.661479 L476.010023,471.661479 Z',
        fill: 'var(--dn-brand-color)',
      }),
      React.createElement('path', {
        d: 'M617.749004,569 L450.61788,569 C434.049337,569 420.61788,582.431458 420.61788,599 L420.61788,714 C420.61788,730.568542 434.049337,744 450.61788,744 L617.749004,744 C634.317546,744 647.749004,730.568542 647.749004,714 L647.749004,599 C647.749004,582.431458 634.317546,569 617.749004,569 Z M450.61788,589 L617.749004,589 C623.271851,589 627.749004,593.477153 627.749004,599 L627.749004,714 C627.749004,719.522847 623.271851,724 617.749004,724 L450.61788,724 C445.095032,724 440.61788,719.522847 440.61788,714 L440.61788,599 C440.61788,593.477153 445.095032,589 450.61788,589 Z',
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(534.183442, 656.500000) scale(1, -1) translate(-534.183442, -656.500000) ',
      })
    ),
    mn = React.createElement(
      'g',
      { stroke: 'none', fill: 'none' },
      React.createElement('rect', {
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(612.000000, 628.500000) scale(-1, -1) rotate(900.000000) translate(-612.000000, -628.500000) ',
        x: '602',
        y: '478.5',
        width: '20',
        height: '300',
        rx: '10',
      }),
      React.createElement('path', {
        d: 'M681.5,600.712157 C687.022847,600.712157 691.5,605.18931 691.5,610.712157 C691.5,616.141397 687.173329,620.560089 681.779905,620.708316 L681.5,620.712157 L562.5,620.712157 C557.07076,620.712157 552.652068,625.038828 552.503842,630.432253 L552.5,630.712157 L552.5,749.712157 C552.5,755.235005 548.022847,759.712157 542.5,759.712157 C537.07076,759.712157 532.652068,755.385487 532.503842,749.992062 L532.5,749.712157 L532.5,630.712157 C532.5,614.3093 545.664172,600.9811 562.003895,600.716177 L562.5,600.712157 L681.5,600.712157 Z',
        fill: 'var(--dn-brand-color)',
        transform:
          'translate(612.000000, 680.212157) scale(1, -1) rotate(45.000000) translate(-612.000000, -680.212157) ',
      }),
      React.createElement('path', {
        d: 'M368.611363,0 C388.827208,0 408.033481,8.73837915 421.311263,23.926975 L421.547,24.198 L555.753643,135.526842 L556.329533,136.210573 C565.703127,147.33948 579.452383,153.825549 593.98243,153.996532 L594.571904,154 L826,154 C864.273333,154 895.372467,184.7164 895.990622,222.842422 L896,224 L896,351 L876,351 L876,224 C876,196.661905 854.059714,174.448238 826.826841,174.006699 L826,174 L594.571904,174 C574.356059,174 555.149786,165.261621 541.872003,150.073025 L541.639,149.804 L407.429624,38.4731584 L406.853734,37.7894269 C397.48014,26.6605198 383.730884,20.1744513 369.200837,20.0034679 L368.611363,20 L50,20 C33.5971429,20 20.2689429,33.1641715 20.0040191,49.5038951 L20,50 L20,974 C20,990.402857 33.1641715,1003.73106 49.5038951,1003.99598 L50,1004 L50,1024 C22.6619049,1024 0.448238098,1002.05971 0,974.826841 L0,974 L0,50 C0,22.6619049 21.9402858,0.448238098 49.1731586,0 L50,0 L368.611363,0 Z',
        fill: '#999999',
      }),
      React.createElement('path', {
        d: 'M953,333 L127.763298,333 L127.763298,353 C155.377535,353 177.763298,375.385763 177.763298,403 L177.763298,954 C177.763298,992.659932 209.103365,1024 247.763298,1024 L953,1024 C991.659932,1024 1023,992.659932 1023,954 L1023,403 C1023,364.340068 991.659932,333 953,333 Z M177.260773,353.502525 L176.75,353 L953,353 C980.614237,353 1003,375.385763 1003,403 L1003,954 C1003,981.614237 980.614237,1004 953,1004 L247.763298,1004 C220.14906,1004 197.763298,981.614237 197.763298,954 L197.763298,403 C197.763298,383.670034 189.928281,366.170034 177.260773,353.502525 Z',
        fill: '#999999',
        transform:
          'translate(575.381649, 678.500000) scale(1, -1) translate(-575.381649, -678.500000) ',
      }),
      React.createElement('path', {
        d: 'M769.5,768.5 C774.92924,768.5 779.347932,772.826671 779.496158,778.220095 L779.5,778.5 L779.5,818.5 C779.5,834.902857 766.335828,848.231057 749.996105,848.495981 L749.5,848.5 L474.5,848.5 C458.097143,848.5 444.768943,835.335828 444.504019,818.996105 L444.5,818.5 L444.5,787.5 C444.5,781.977153 448.977153,777.5 454.5,777.5 C459.92924,777.5 464.347932,781.826671 464.496158,787.220095 L464.5,787.5 L464.5,818.5 C464.5,823.92924 468.826671,828.347932 474.220095,828.496158 L474.5,828.5 L749.5,828.5 C754.92924,828.5 759.347932,824.173329 759.496158,818.779905 L759.5,818.5 L759.5,778.5 C759.5,772.977153 763.977153,768.5 769.5,768.5 Z',
        fill: 'var(--dn-brand-color)',
      }),
      React.createElement('rect', {
        fill: '#999999',
        transform:
          'translate(108.500000, 1014.000000) scale(-1, 1) rotate(90.000000) translate(-108.500000, -1014.000000) ',
        x: '98.5',
        y: '940.5',
        width: '20',
        height: '147',
        rx: '10',
      })
    ),
    fn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
      React.createElement('rect', {
        transform:
          'translate(370.000000, 495.274170) scale(1, -1) rotate(90.000000) translate(-370.000000, -495.274170) ',
        x: '-70',
        y: '455.27417',
        width: '880',
        height: '80',
        rx: '40',
      }),
      React.createElement('rect', {
        transform:
          'translate(313.431458, 838.637085) scale(-1, -1) rotate(45.000000) translate(-313.431458, -838.637085) ',
        x: '193.431458',
        y: '798.637085',
        width: '240',
        height: '80',
        rx: '40',
      }),
      React.createElement('rect', {
        transform:
          'translate(654.000000, 512.000000) scale(-1, 1) rotate(90.000000) translate(-654.000000, -512.000000) ',
        x: '214',
        y: '472',
        width: '880',
        height: '80',
        rx: '40',
      }),
      React.createElement('rect', {
        transform:
          'translate(710.568542, 168.637085) rotate(45.000000) translate(-710.568542, -168.637085) ',
        x: '590.568542',
        y: '128.637085',
        width: '240',
        height: '80',
        rx: '40',
      })
    ),
    pn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M281,34 C195.672006,34 126.5,103.172006 126.5,188.5 C126.5,273.827994 195.672006,343 281,343 C366.327994,343 435.5,273.827994 435.5,188.5 C435.5,103.172006 366.327994,34 281,34 Z M281,114 C322.145214,114 355.5,147.354786 355.5,188.5 C355.5,229.645214 322.145214,263 281,263 C239.854786,263 206.5,229.645214 206.5,188.5 C206.5,147.354786 239.854786,114 281,114 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M739.612903,685 C654.284909,685 585.112903,754.172006 585.112903,839.5 C585.112903,924.827994 654.284909,994 739.612903,994 C824.940897,994 894.112903,924.827994 894.112903,839.5 C894.112903,754.172006 824.940897,685 739.612903,685 Z M739.612903,765 C780.758117,765 814.112903,798.354786 814.112903,839.5 C814.112903,880.645214 780.758117,914 739.612903,914 C698.467689,914 665.112903,880.645214 665.112903,839.5 C665.112903,798.354786 698.467689,765 739.612903,765 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M393.732359,149.064329 C505.758065,142.703248 593.848922,154.953101 658.388544,187.222912 C727.464102,221.760691 768.75285,279.025488 779.602138,355.372328 C790.479268,431.915099 771.469071,492.660327 720.942087,531.663613 C674.39496,567.594729 604.894755,581.798404 512.610685,577.088366 L510.128,576.956 L508.190557,576.875971 C440.452561,574.16688 391.4421,583.200136 361.247153,602.098655 L360.328695,602.68026 C333.829878,619.657857 321,645.428695 321,685 C321,720.96408 339.709031,746.580224 383.432217,766.281079 C434.006015,789.068691 513.641467,800.721303 621.377837,800.026361 L624.651176,800.001521 L625.348824,879.998479 C505.413438,881.044427 414.149806,867.867798 350.567783,839.218921 C279.624302,807.253109 241,754.369254 241,685 C241,619.237972 266.670122,567.675476 317.171305,535.31974 C363.286163,505.77429 427.932493,493.623563 511.200993,496.932429 L513.961445,497.047448 L514.192776,497.060149 C590.511632,501.250203 643.075213,490.708997 672.057913,468.336387 C697.530929,448.673006 707.520732,416.751568 700.397862,366.627672 C693.24715,316.307846 668.202565,281.572642 622.611456,258.777088 C572.985682,233.9642 499.070973,223.506553 401.23955,228.771319 L398.267641,228.935671 L393.732359,149.064329 Z',
        fillRule: 'nonzero',
      })
    ),
    un = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
      React.createElement('rect', {
        transform:
          'translate(354.000000, 512.000000) rotate(90.000000) translate(-354.000000, -512.000000) ',
        x: '-56',
        y: '472',
        width: '820',
        height: '80',
        rx: '40',
      }),
      React.createElement('path', {
        d: 'M864,62 L160,62 C71.63444,62 0,133.63444 0,222 L0,802 C0,890.36556 71.63444,962 160,962 L864,962 C952.36556,962 1024,890.36556 1024,802 L1024,222 C1024,133.63444 952.36556,62 864,62 Z M160,142 L864,142 C908.18278,142 944,177.81722 944,222 L944,802 C944,846.18278 908.18278,882 864,882 L160,882 C115.81722,882 80,846.18278 80,802 L80,222 C80,177.81722 115.81722,142 160,142 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        transform:
          'translate(670.000000, 512.000000) rotate(90.000000) translate(-670.000000, -512.000000) ',
        x: '260',
        y: '472',
        width: '820',
        height: '80',
        rx: '40',
      })
    ),
    Rn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M864,62 L160,62 C71.63444,62 0,133.63444 0,222 L0,802 C0,890.36556 71.63444,962 160,962 L864,962 C952.36556,962 1024,890.36556 1024,802 L1024,222 C1024,133.63444 952.36556,62 864,62 Z M160,142 L864,142 C908.18278,142 944,177.81722 944,222 L944,802 C944,846.18278 908.18278,882 864,882 L160,882 C115.81722,882 80,846.18278 80,802 L80,222 C80,177.81722 115.81722,142 160,142 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        x: '32',
        y: '472',
        width: '960',
        height: '80',
        rx: '40',
      }),
      React.createElement('rect', {
        transform:
          'translate(512.000000, 716.500000) rotate(90.000000) translate(-512.000000, -716.500000) ',
        x: '307.5',
        y: '676.5',
        width: '409',
        height: '80',
        rx: '40',
      })
    ),
    gn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M864,62 L160,62 C71.63444,62 0,133.63444 0,222 L0,802 C0,890.36556 71.63444,962 160,962 L864,962 C952.36556,962 1024,890.36556 1024,802 L1024,222 C1024,133.63444 952.36556,62 864,62 Z M160,142 L864,142 C908.18278,142 944,177.81722 944,222 L944,802 C944,846.18278 908.18278,882 864,882 L160,882 C115.81722,882 80,846.18278 80,802 L80,222 C80,177.81722 115.81722,142 160,142 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('rect', {
        x: '40',
        y: '281',
        width: '984',
        height: '80',
        rx: '40',
      })
    ),
    Mn = React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
      React.createElement('path', {
        d: 'M421.97834,146.878887 C449.098125,146.878887 475.034958,155.079747 495.071944,170.058344 C517.366493,186.724577 531.199744,210.946101 531.474179,238.012376 L531.47834,238.833432 L531.47834,567.878887 C531.47834,589.970277 513.56973,607.878887 491.47834,607.878887 C469.607864,607.878887 451.83693,590.326658 451.483699,568.54036 L451.47834,567.878887 L451.47762,238.832254 L451.424408,238.717723 L451.319172,238.517315 L451.202904,238.308109 C450.531417,237.121323 449.203347,235.651792 447.172579,234.133697 C441.310242,229.751322 432.225599,226.878887 421.97834,226.878887 C411.73108,226.878887 402.646438,229.751322 396.784101,234.133697 C394.753333,235.651792 393.425263,237.121323 392.753776,238.308109 L392.559374,238.664382 L392.47834,238.833432 L392.47834,567.878887 C392.47834,589.970277 374.56973,607.878887 352.47834,607.878887 C330.607864,607.878887 312.83693,590.326658 312.483699,568.54036 L312.47834,567.878887 L312.47834,238.833432 C312.47834,211.436195 326.364989,186.892923 348.884736,170.058344 C368.921722,155.079747 394.858555,146.878887 421.97834,146.878887 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M699.97834,363.356159 C759.848768,363.356159 808.496698,411.405385 809.46367,471.045377 L809.47834,472.856159 L809.47834,567.878887 L729.47834,567.878887 L729.47834,472.856159 C729.47834,456.563759 716.27074,443.356159 699.97834,443.356159 C683.848864,443.356159 670.7428,456.300928 670.482292,472.368323 L670.47834,472.856159 L670.47834,567.878887 L590.47834,567.878887 L590.47834,472.856159 C590.47834,412.380979 639.50316,363.356159 699.97834,363.356159 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M832.43132,430.773744 C888.722088,430.773744 934.461351,475.9501 935.370508,532.024208 L935.3843,533.726724 L935.3843,567.878887 C935.3843,589.970277 917.47569,607.878887 895.3843,607.878887 C873.513824,607.878887 855.742891,590.326658 855.389659,568.54036 L855.3843,567.878887 L855.3843,533.726724 C855.3843,521.050143 845.107901,510.773744 832.43132,510.773744 C819.881505,510.773744 809.684108,520.845643 809.481415,533.347154 L809.47834,533.726724 L809.47834,567.878887 C809.47834,589.970277 791.56973,607.878887 769.47834,607.878887 C747.607864,607.878887 729.83693,590.326658 729.483699,568.54036 L729.47834,567.878887 L729.47834,533.726724 C729.47834,476.867363 775.571959,430.773744 832.43132,430.773744 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M560.97834,279.163422 C620.848768,279.163422 669.496698,327.212648 670.46367,386.852639 L670.47834,388.663422 L670.47834,567.878887 C670.47834,589.970277 652.56973,607.878887 630.47834,607.878887 C608.607864,607.878887 590.83693,590.326658 590.483699,568.54036 L590.47834,567.878887 L590.47834,388.663422 C590.47834,372.371022 577.27074,359.163422 560.97834,359.163422 C544.848864,359.163422 531.7428,372.10819 531.482292,388.175585 L531.47834,388.663422 L531.47834,567.878887 C531.47834,589.970277 513.56973,607.878887 491.47834,607.878887 C469.607864,607.878887 451.83693,590.326658 451.483699,568.54036 L451.47834,567.878887 L451.47834,388.663422 C451.47834,328.188242 500.50316,279.163422 560.97834,279.163422 Z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d: 'M577.326586,260.358513 C632.767553,240.933771 694.424586,258.909478 730.740134,305.085234 C824.066269,423.750711 874.61782,534.886747 880.966628,638.993166 C887.483675,745.85833 847.257108,842.899322 762.327561,927.828869 C671.364292,1018.79214 572.753664,1061.66055 468.28526,1053.62452 C365.843318,1045.74437 261.475519,989.153266 154.690995,885.869874 C138.811879,870.511385 138.389828,845.188303 153.748317,829.309187 C169.106806,813.430071 194.429889,813.008019 210.309005,828.366509 C304.814212,919.773184 393.015159,967.598178 474.42098,973.860164 C553.800339,979.966268 630.316491,946.702854 705.759018,871.260327 C775.074298,801.945047 806.179407,726.908303 801.114976,643.862825 C795.882306,558.058601 751.939226,461.451087 667.85757,354.540094 C652.68919,335.253275 626.936111,327.745133 603.779371,335.858514 C588.359483,341.261149 579.811803,357.691411 584.168374,373.380386 L584.304347,373.855571 L611.89921,467.510864 C618.142899,488.701566 606.025951,510.941535 584.835249,517.185224 C563.856454,523.366476 541.849273,511.552468 535.352982,490.754252 L535.16089,490.121262 L507.566026,396.465969 C490.857458,339.758101 521.533808,279.906517 577.326586,260.358513 Z',
        fillRule: 'nonzero',
        transform:
          'translate(512.074373, 653.600003) scale(-1, 1) rotate(45.000000) translate(-512.074373, -653.600003) ',
      }),
      React.createElement('path', {
        d: 'M416,26.3788866 C531.427513,26.3788866 625,119.951374 625,235.378887 C625,257.470277 607.09139,275.378887 585,275.378887 C563.129524,275.378887 545.35859,257.826658 545.005359,236.04036 L545,235.378887 C545,164.134154 487.244733,106.378887 416,106.378887 C345.467715,106.378887 288.156454,162.984824 287.017282,233.245636 L287,235.378887 C287,257.470277 269.09139,275.378887 247,275.378887 C224.90861,275.378887 207,257.470277 207,235.378887 C207,119.951374 300.572487,26.3788866 416,26.3788866 Z',
        fillRule: 'nonzero',
      })
    ),
    yn = Object.freeze({
      __proto__: null,
      Clone: be,
      Repeat: Ze,
      Component: Ee,
      Container: ve,
      Hidden: xe,
      Page: ze,
      Remove: we,
      Setting: ke,
      Undo: De,
      Redo: Se,
      PC: _e,
      Mobile: Ne,
      Responsive: Fe,
      Move: Ae,
      FreeMove: Te,
      Selection: Be,
      Recover: Pe,
      Flip: We,
      Close: He,
      Expand: Ie,
      Menu: Ve,
      DragMove: Oe,
      PushPinOutlined: Ue,
      PushPinFilled: Ge,
      Outline: Je,
      Design: Ye,
      JSON: je,
      Code: qe,
      Eye: Xe,
      EyeClose: Ke,
      Logo: {
        light:
          '//img.alicdn.com/imgextra/i3/O1CN01Eib3GC1c7JthHYQnI_!!6000000003553-55-tps-1783-385.svg',
        dark: '//img.alicdn.com/imgextra/i1/O1CN018hbWup1QhhyhiElX0_!!6000000002008-55-tps-1783-385.svg',
      },
      Command: $e,
      Delete: Qe,
      Shift: et,
      DragLeftSourceAnimation: {
        light: {
          shadow:
            '\n      <style>\n@keyframes helper-drag-rec_w { 0% { width: 210px; } 54.5455% { width: 210px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { width: 540px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { width: 520px; } 100% { width: 520px; } }\n@keyframes helper-drag-rec_h { 0% { height: 100px; } 54.5455% { height: 100px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { height: 560px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { height: 540px; } 100% { height: 540px; } }\n@keyframes helper-drag-rec_mo { 0% { offset-distance: 0%; } 33.3333% { offset-distance: 0.12%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 64.297%; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { offset-distance: 98.331%; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n@keyframes helper-drag-mouse_mo { 0% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 18.1818% { offset-distance: 37.49%; } 24.2424% { offset-distance: 38.651%; } 33.3333% { offset-distance: 38.651%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n@keyframes helper-drag-boomrightup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a0_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a1_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a2_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-drag-boomleftup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a3_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a4_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a5_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-drag-boomrightbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a6_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a7_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a8_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-drag-boomleftbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a9_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a10_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a11_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n    </style>\n    <rect id="helper-drag-leftrec" width="260" height="600" fill="#eeeeee" stroke="none" fill-rule="evenodd" rx="12" transform="translate(97.4763,336) translate(-27.4763,-124)"/>\n    <rect id="helper-drag-rightrec" width="580" height="600" fill="#eeeeee" stroke="none" fill-rule="evenodd" rx="12" transform="translate(443.476,336) translate(-69.5,-124)"/>\n    <rect id="helper-drag-rec" width="210" height="100" fill="#ffffff" rx="10" stroke="none" style="transform: translate(-111.034px,-48.1565px); animation: 3.3s linear infinite both helper-drag-rec_w, 3.3s linear infinite both helper-drag-rec_h, 3.3s linear infinite both helper-drag-rec_mo; offset-path: path(\'M206.034,298.157L205.034,298.157C481.262,280.399,662.717,480.353,670.01,510.157L505.01,280.552L515.01,290.157L515.01,290.157\'); offset-rotate: 0deg;"/>\n    <g id="helper-drag-mouse" fill="#000000" fill-rule="nonzero" opacity="1" style="transform: scale(2,2) translate(-14px,-14px); animation: 3.3s linear infinite both helper-drag-mouse_mo; offset-path: path(\'M200,613L200,290L200,300L200,300C371.375,309.667,501.439,327.173,663.976,512L663.976,512\'); offset-rotate: 0deg;">\n        <path id="helper-drag-mouse-path" d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z" transform="translate(14,14) translate(-14,-14)"/>\n    </g>\n    <g id="helper-drag-boomrightup" opacity="0" transform="translate(985.577,207.1) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomrightup_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a0_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a1_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a2_d;"/>\n    </g>\n    <g id="helper-drag-boomleftup" opacity="0" transform="translate(367.253,188.323) rotate(-90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomleftup_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a3_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a4_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a5_d;"/>\n    </g>\n    <g id="helper-drag-boomrightbottom" opacity="0" transform="translate(960.3,845.127) rotate(90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomrightbottom_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a6_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a7_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a8_d;"/>\n    </g>\n    <g id="helper-drag-boomleftbottom" opacity="0" transform="translate(335.477,819.85) rotate(-180) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomleftbottom_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a9_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a10_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a11_d;"/>\n    </g>\n',
        },
        dark: {
          shadow:
            '\n        <style>\n        @keyframes helper-drag-rec_w { 0% { width: 210px; } 54.5455% { width: 210px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { width: 540px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { width: 520px; } 100% { width: 520px; } }\n        @keyframes helper-drag-rec_h { 0% { height: 100px; } 54.5455% { height: 100px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { height: 560px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { height: 540px; } 100% { height: 540px; } }\n        @keyframes helper-drag-rec_mo { 0% { offset-distance: 0%; } 33.3333% { offset-distance: 0.12%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 64.297%; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { offset-distance: 98.331%; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n        @keyframes helper-drag-mouse_mo { 0% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 18.1818% { offset-distance: 37.49%; } 24.2424% { offset-distance: 38.651%; } 33.3333% { offset-distance: 38.651%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n        @keyframes helper-drag-boomrightup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a0_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a1_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a2_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-drag-boomleftup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a3_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a4_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a5_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-drag-boomrightbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a6_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a7_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a8_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-drag-boomleftbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a9_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a10_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a11_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n            </style>\n            <rect id="helper-drag-leftrec" width="260" height="600" fill="#3b3b3b" stroke="none" fill-rule="evenodd" rx="12" transform="translate(97.4763,336) translate(-27.4763,-124)"/>\n            <rect id="helper-drag-rightrec" width="580" height="600" fill="#3b3b3b" stroke="none" fill-rule="evenodd" rx="12" transform="translate(443.476,336) translate(-69.5,-124)"/>\n            <rect id="helper-drag-rec" width="210" height="100" fill="#1a1a1a" rx="10" stroke="none" style="transform: translate(-111.034px,-48.1565px); animation: 3.3s linear infinite both helper-drag-rec_w, 3.3s linear infinite both helper-drag-rec_h, 3.3s linear infinite both helper-drag-rec_mo; offset-path: path(\'M206.034,298.157L205.034,298.157C481.262,280.399,662.717,480.353,670.01,510.157L505.01,280.552L515.01,290.157L515.01,290.157\'); offset-rotate: 0deg;"/>\n            <g id="helper-drag-mouse" fill="#000000" fill-rule="nonzero" opacity="1" style="transform: scale(2,2) translate(-14px,-14px); animation: 3.3s linear infinite both helper-drag-mouse_mo; offset-path: path(\'M200,613L200,290L200,300L200,300C371.375,309.667,501.439,327.173,663.976,512L663.976,512\'); offset-rotate: 0deg;">\n                <path id="helper-drag-mouse-path" d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z" fill="#ffffff" transform="translate(14,14) translate(-14,-14)"/>\n            </g>\n            <g id="helper-drag-boomrightup" opacity="0" transform="translate(985.577,207.1) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomrightup_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a0_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a1_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a2_d;"/>\n            </g>\n            <g id="helper-drag-boomleftup" opacity="0" transform="translate(367.253,188.323) rotate(-90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomleftup_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a3_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a4_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a5_d;"/>\n            </g>\n            <g id="helper-drag-boomrightbottom" opacity="0" transform="translate(960.3,845.127) rotate(90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomrightbottom_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a6_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a7_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a8_d;"/>\n            </g>\n            <g id="helper-drag-boomleftbottom" opacity="0" transform="translate(335.477,819.85) rotate(-180) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-drag-boomleftbottom_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a9_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a10_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a11_d;"/>\n            </g>\n        ',
        },
      },
      DragRightSourceAnimation: {
        light: {
          shadow:
            '\n<style>\n@keyframes helper-rec_w { 0% { width: 210px; } 54.5455% { width: 210px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { width: 540px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { width: 520px; } 100% { width: 520px; } }\n@keyframes helper-rec_h { 0% { height: 100px; } 54.5455% { height: 100px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { height: 560px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { height: 540px; } 100% { height: 540px; } }\n@keyframes helper-rec_mo { 0% { offset-distance: 0%; } 33.3333% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 64.764%; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { offset-distance: 98.323%; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n@keyframes helper-mouse_mo { 0% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 18.1818% { offset-distance: 36.981%; } 24.2424% { offset-distance: 38.116%; } 33.3333% { offset-distance: 38.116%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n@keyframes helper-boomrightup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a0_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a1_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a2_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-boomleftup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a3_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a4_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a5_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-boomrightbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a6_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a7_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a8_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-boomleftbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a9_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a10_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a11_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n    </style>\n    <rect id="helper-leftrec" width="260" height="600" fill="#eeeeee" stroke="none" fill-rule="evenodd" rx="12" transform="translate(721.276,336) translate(-27.4763,-124)"/>\n    <rect id="helper-rightrec" width="580" height="600" fill="#eeeeee" stroke="none" fill-rule="evenodd" rx="12" transform="translate(139.5,336) translate(-69.5,-124)"/>\n    <rect id="helper-rec" width="210" height="100" fill="#ffffff" rx="10" stroke="none" style="transform: translate(-105px,-50px); animation: 3.3s linear infinite both helper-rec_w, 3.3s linear infinite both helper-rec_h, 3.3s linear infinite both helper-rec_mo; offset-path: path(\'M823.8,300.3L823.8,300.3C649.753,292.487,465.346,303.22,360,512L195,282L205,292L205,292\'); offset-rotate: 0deg;"/>\n    <g id="helper-mouse" fill="#000000" fill-rule="nonzero" opacity="1" style="transform: scale(2,2) translate(-14px,-14px); animation: 3.3s linear infinite both helper-mouse_mo; offset-path: path(\'M823.8,616L823.8,290L823.8,300L823.8,300C630.302,283.946,461.204,322.291,360,512L360,512\'); offset-rotate: 0deg;">\n        <path id="helper-mouse-path" d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z" transform="translate(14,14) translate(-14,-14)"/>\n    </g>\n    <g id="helper-boomrightup" opacity="0" transform="translate(678.153,207.1) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomrightup_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a0_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a1_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a2_d;"/>\n    </g>\n    <g id="helper-boomleftup" opacity="0" transform="translate(65.1,188.323) rotate(-90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomleftup_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a3_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a4_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a5_d;"/>\n    </g>\n    <g id="helper-boomrightbottom" opacity="0" transform="translate(652.876,845.127) rotate(90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomrightbottom_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a6_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a7_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a8_d;"/>\n    </g>\n    <g id="helper-boomleftbottom" opacity="0" transform="translate(39.8234,819.85) rotate(-180) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomleftbottom_o;">\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a9_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a10_d;"/>\n        <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a11_d;"/>\n    </g>\n  ',
        },
        dark: {
          shadow:
            '\n<style>\n@keyframes helper-rec_w { 0% { width: 210px; } 54.5455% { width: 210px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { width: 540px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { width: 520px; } 100% { width: 520px; } }\n@keyframes helper-rec_h { 0% { height: 100px; } 54.5455% { height: 100px; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { height: 560px; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { height: 540px; } 100% { height: 540px; } }\n@keyframes helper-rec_mo { 0% { offset-distance: 0%; } 33.3333% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 64.764%; animation-timing-function: cubic-bezier(0.904,0,0.726,0.668); } 66.6667% { offset-distance: 98.323%; animation-timing-function: cubic-bezier(0.214,0.499,0.52,0.867); } 72.7273% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n@keyframes helper-mouse_mo { 0% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 18.1818% { offset-distance: 36.981%; } 24.2424% { offset-distance: 38.116%; } 33.3333% { offset-distance: 38.116%; animation-timing-function: cubic-bezier(0.62,0.079,0.616,1); } 54.5455% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n@keyframes helper-boomrightup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a0_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a1_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a2_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-boomleftup_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a3_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a4_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a5_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-boomrightbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a6_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a7_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a8_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes helper-boomleftbottom_o { 0% { opacity: 0; } 66.6667% { opacity: 0; } 69.697% { opacity: 1; } 75.7576% { opacity: 1; } 78.7879% { opacity: 0; } 100% { opacity: 0; } }\n@keyframes a9_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a10_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n@keyframes a11_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 66.6667% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 72.7273% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 78.7879% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n    </style>\n    <rect id="helper-leftrec" width="260" height="600" fill="#3b3b3b" stroke="none" fill-rule="evenodd" rx="12" transform="translate(721.276,336) translate(-27.4763,-124)"/>\n    <rect id="helper-rightrec" width="580" height="600" fill="#3b3b3b" stroke="none" fill-rule="evenodd" rx="12" transform="translate(139.5,336) translate(-69.5,-124)"/>\n    <rect id="helper-rec" width="210" height="100" fill="#1a1a1a" rx="10" stroke="none" style="transform: translate(-105px,-50px); animation: 3.3s linear infinite both helper-rec_w, 3.3s linear infinite both helper-rec_h, 3.3s linear infinite both helper-rec_mo; offset-path: path(\'M823.8,300.3L823.8,300.3C649.753,292.487,465.346,303.22,360,512L195,282L205,292L205,292\'); offset-rotate: 0deg;"/>\n    <g id="helper-mouse" fill="#000000" fill-rule="nonzero" opacity="1" style="transform: scale(2,2) translate(-14px,-14px); animation: 3.3s linear infinite both helper-mouse_mo; offset-path: path(\'M823.8,616L823.8,290L823.8,300L823.8,300C630.302,283.946,461.204,322.291,360,512L360,512\'); offset-rotate: 0deg;">\n        <path id="helper-mouse-path" d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z" fill="#ffffff" transform="translate(14,14) translate(-14,-14)"/>\n    </g>\n    <g id="helper-boomrightup" opacity="0" transform="translate(678.153,207.1) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomrightup_o;">\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a0_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a1_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a2_d;"/>\n    </g>\n    <g id="helper-boomleftup" opacity="0" transform="translate(65.1,188.323) rotate(-90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomleftup_o;">\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a3_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a4_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a5_d;"/>\n    </g>\n    <g id="helper-boomrightbottom" opacity="0" transform="translate(652.876,845.127) rotate(90) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomrightbottom_o;">\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a6_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a7_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a8_d;"/>\n    </g>\n    <g id="helper-boomleftbottom" opacity="0" transform="translate(39.8234,819.85) rotate(-180) scale(1.3,1.3) translate(-13,-13)" style="animation: 3.3s linear infinite both helper-boomleftbottom_o;">\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a9_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a10_d;"/>\n        <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 3.3s linear infinite both a11_d;"/>\n    </g>',
        },
      },
      BatchDragAnimation: {
        light: {
          shadow:
            '\n        <style>\n        @keyframes helper-batch-drag-boomrightup_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a0_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a1_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a2_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-batch-drag-boomleftup_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a3_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a4_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a5_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-batch-drag-boomrightbottom_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a6_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a7_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a8_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-batch-drag-boomleftbottom_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a9_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a10_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a11_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helpler-dragwhole_t { 0% { transform: scale(1,1) translate(-166.5px,-140px); } 60% { transform: scale(1,1) translate(-166.5px,-140px); } 64% { transform: scale(1.1,1.1) translate(-166.5px,-140px); } 68% { transform: scale(1,1) translate(-166.5px,-140px); } 100% { transform: scale(1,1) translate(-166.5px,-140px); } }\n        @keyframes helpler-dragwhole_mo { 0% { offset-distance: 0%; } 20% { offset-distance: 0%; } 28% { offset-distance: 0%; } 40% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 68% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n        @keyframes helper-batch-drag-mouse_mo { 0% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.766821,0.127231,0.642631,0.749003); } 20% { offset-distance: 39.885%; animation-timing-function: cubic-bezier(0.232064,0.618697,0.545352,1); } 28% { offset-distance: 41.847%; } 40% { offset-distance: 41.847%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 68% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n            </style>\n            <rect id="helper-batch-drag-rightrec" width="880" height="600" fill="#eeeeee" stroke="none" fill-rule="evenodd" rx="12" transform="translate(441.5,336) translate(-369.5,-124)"/>\n            <g id="helper-batch-drag-boomrightup" opacity="0" transform="translate(953.977,487.425) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomrightup_o;">\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a0_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a1_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a2_d;"/>\n            </g>\n            <g id="helper-batch-drag-boomleftup" opacity="0" transform="translate(560.35,462.149) rotate(-90) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomleftup_o;">\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a3_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a4_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a5_d;"/>\n            </g>\n            <g id="helper-batch-drag-boomrightbottom" opacity="0" transform="translate(928.7,805.302) rotate(90) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomrightbottom_o;">\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a6_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a7_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a8_d;"/>\n            </g>\n            <g id="helper-batch-drag-boomleftbottom" opacity="0" transform="translate(535.073,784.75) rotate(-180) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomleftbottom_o;">\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a9_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a10_d;"/>\n                <path fill="#b6b6b6" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a11_d;"/>\n            </g>\n            <g id="helpler-dragwhole" style="transform: translate(-166.5px,-140px); animation: 2.5s linear infinite both helpler-dragwhole_t, 2.5s linear infinite both helpler-dragwhole_mo; offset-path: path(\'M286.5,396L286.5,396L286.5,396L286.5,396C470.732,414.82,636.636,472.739,744.5,633.126L744.5,633.126\'); offset-rotate: 0deg;">\n                <rect id="helper-batch-drag-rec" width="333" height="280" fill="none" rx="10" stroke="#a5a5a5" fill-rule="nonzero" stroke-width="6" stroke-dasharray="12 20" transform="translate(111.034,48.1565) translate(-111.034,-48.1565)"/>\n                <rect width="281" height="60" stroke="none" fill="#c4c4c4" stroke-width="2" rx="10" transform="translate(166.5,53) translate(-140.5,-30)"/>\n                <rect width="140.5" height="60" stroke="none" fill="#c4c4c4" stroke-width="2" rx="10" transform="translate(166.5,137.525) translate(-140.5,-30)"/>\n                <rect width="190.054" height="60" stroke="none" fill="#c4c4c4" stroke-width="2" rx="10" transform="translate(166.5,222.051) translate(-140.5,-30)"/>\n            </g>\n            <g id="helper-batch-drag-mouse" fill="#000000" fill-rule="nonzero" opacity="1" style="transform: scale(2,2) translate(-14px,-14px); animation: 2.5s linear infinite both helper-batch-drag-mouse_mo; offset-path: path(\'M286.5,744L286.5,378L286.5,396L286.5,396C474.045,416.166,638.679,477.076,744.5,633.126L744.5,633.126\'); offset-rotate: 0deg;">\n                <path id="helper-batch-drag-mouse-path" d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z" transform="translate(14,14) translate(-14,-14)"/>\n            </g>\n          ',
        },
        dark: {
          shadow:
            '\n        <style>\n        @keyframes helper-batch-drag-boomrightup_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a0_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a1_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a2_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-batch-drag-boomleftup_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a3_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a4_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a5_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-batch-drag-boomrightbottom_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a6_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a7_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a8_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helper-batch-drag-boomleftbottom_o { 0% { opacity: 0; } 60% { opacity: 0; } 64% { opacity: 1; } 72% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } }\n        @keyframes a9_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a10_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes a11_d { 0% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); } 60% { d: path(\'M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 68% { d: path(\'M1,-15L3,-15C3.55228,-15,4,-14.5523,4,-14L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,-14C0,-14.5523,0.447715,-15,1,-15Z\'); animation-timing-function: cubic-bezier(0.455,0.03,0.515,0.955); } 76% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } 100% { d: path(\'M1,-10L3,-10C3.55228,-10,4,-9.55228,4,-9L4,-7C4,-6.44772,3.55228,-6,3,-6L1,-6C0.447715,-6,0,-6.44772,0,-7L0,-9C0,-9.55228,0.447715,-10,1,-10Z\'); } }\n        @keyframes helpler-dragwhole_t { 0% { transform: scale(1,1) translate(-166.5px,-140px); } 60% { transform: scale(1,1) translate(-166.5px,-140px); } 64% { transform: scale(1.1,1.1) translate(-166.5px,-140px); } 68% { transform: scale(1,1) translate(-166.5px,-140px); } 100% { transform: scale(1,1) translate(-166.5px,-140px); } }\n        @keyframes helpler-dragwhole_mo { 0% { offset-distance: 0%; } 20% { offset-distance: 0%; } 28% { offset-distance: 0%; } 40% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 68% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n        @keyframes helper-batch-drag-mouse_mo { 0% { offset-distance: 0%; animation-timing-function: cubic-bezier(0.766821,0.127231,0.642631,0.749003); } 20% { offset-distance: 39.885%; animation-timing-function: cubic-bezier(0.232064,0.618697,0.545352,1); } 28% { offset-distance: 41.847%; } 40% { offset-distance: 41.847%; animation-timing-function: cubic-bezier(0.69,0.145,0.37,1); } 68% { offset-distance: 100%; } 100% { offset-distance: 100%; } }\n            </style>\n            <rect id="helper-batch-drag-rightrec" width="880" height="600" fill="#3b3b3b" stroke="none" fill-rule="evenodd" rx="12" transform="translate(441.5,336) translate(-369.5,-124)"/>\n            <g id="helper-batch-drag-boomrightup" opacity="0" transform="translate(953.977,487.425) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomrightup_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a0_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a1_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a2_d;"/>\n            </g>\n            <g id="helper-batch-drag-boomleftup" opacity="0" transform="translate(560.35,462.149) rotate(-90) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomleftup_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a3_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a4_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a5_d;"/>\n            </g>\n            <g id="helper-batch-drag-boomrightbottom" opacity="0" transform="translate(928.7,805.302) rotate(90) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomrightbottom_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a6_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a7_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a8_d;"/>\n            </g>\n            <g id="helper-batch-drag-boomleftbottom" opacity="0" transform="translate(535.073,784.75) rotate(-180) scale(1.3,1.3) translate(-13,-13)" style="animation: 2.5s linear infinite both helper-batch-drag-boomleftbottom_o;">\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a9_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a10_d;"/>\n                <path fill="#808080" opacity="1" stroke="none" d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z" transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)" style="animation: 2.5s linear infinite both a11_d;"/>\n            </g>\n            <g id="helpler-dragwhole" style="transform: translate(-166.5px,-140px); animation: 2.5s linear infinite both helpler-dragwhole_t, 2.5s linear infinite both helpler-dragwhole_mo; offset-path: path(\'M286.5,396L286.5,396L286.5,396L286.5,396C470.732,414.82,636.636,472.739,744.5,633.126L744.5,633.126\'); offset-rotate: 0deg;">\n                <rect id="helper-batch-drag-rec" width="333" height="280" fill="none" rx="10" stroke="#151515" fill-rule="nonzero" stroke-width="6" stroke-dasharray="12 20" transform="translate(111.034,48.1565) translate(-111.034,-48.1565)"/>\n                <rect width="281" height="60" stroke="none" fill="#1a1a1a" stroke-width="2" rx="10" transform="translate(166.5,53) translate(-140.5,-30)"/>\n                <rect width="140.5" height="60" stroke="none" fill="#1a1a1a" stroke-width="2" rx="10" transform="translate(166.5,137.525) translate(-140.5,-30)"/>\n                <rect width="190.054" height="60" stroke="none" fill="#1a1a1a" stroke-width="2" rx="10" transform="translate(166.5,222.051) translate(-140.5,-30)"/>\n            </g>\n            <g id="helper-batch-drag-mouse" fill="#000000" fill-rule="nonzero" opacity="1" style="transform: scale(2,2) translate(-14px,-14px); animation: 2.5s linear infinite both helper-batch-drag-mouse_mo; offset-path: path(\'M286.5,744L286.5,378L286.5,396L286.5,396C474.045,416.166,638.679,477.076,744.5,633.126L744.5,633.126\'); offset-rotate: 0deg;">\n                <path id="helper-batch-drag-mouse-path" d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z" fill="#ffffff" transform="translate(14,14) translate(-14,-14)"/>\n            </g>\n            ',
        },
      },
      CloudUpload: tt,
      Boolean: at,
      Number: nt,
      Text: rt,
      RichText: lt,
      Expression: it,
      Formula: Ct,
      Top: ct,
      Bottom: ot,
      Right: Lt,
      Left: st,
      Position: dt,
      TopLeft: ht,
      TopRight: mt,
      BottomRight: ft,
      BottomLeft: pt,
      Image: ut,
      ImageSize: Rt,
      Blur: gt,
      Shadow: Mt,
      AxisX: yt,
      AxisY: bt,
      FontWeight: Zt,
      FontStyle: Et,
      NormalFontStyle: vt,
      ItalicFontStyle: xt,
      FontColor: zt,
      FontSize: wt,
      LineHeight: kt,
      TextDecoration: Dt,
      TextUnderline: St,
      TextLineThrough: _t,
      TextAlign: Nt,
      TextAlignLeft: Ft,
      TextAlignCenter: At,
      TextAlignRight: Tt,
      TextAlignJustify: Bt,
      DisplayBlock: Pt,
      DisplayInlineBlock: Wt,
      DisplayInline: Ht,
      DisplayFlex: It,
      FlexDirectionRow: Vt,
      FlexDirectionColumn: Ot,
      FlexAlignContentCenter: Ut,
      FlexAlignContentStart: Gt,
      FlexAlignContentEnd: Jt,
      FlexAlignContentSpaceAround: Yt,
      FlexAlignContentSpaceBetween: jt,
      FlexAlignContentStretch: qt,
      FlexJustifyCenter: Xt,
      FlexJustifyStart: Kt,
      FlexJustifyEnd: $t,
      FlexJustifySpaceBetween: Qt,
      FlexJustifySpaceAround: ea,
      FlexJustifySpaceEvenly: ta,
      FlexAlignItemsCenter: aa,
      FlexAlignItemsStart: na,
      FlexAlignItemsEnd: ra,
      FlexAlignItemsStretch: la,
      FlexAlignItemsBaseline: ia,
      FlexNoWrap: Ca,
      FlexWrap: ca,
      Focus: oa,
      Return: La,
      History: sa,
      Play: da,
      Add: ha,
      Help: ma,
      InputSource: fa,
      TextAreaSource: pa,
      SelectSource: ua,
      TreeSelectSource: Ra,
      CascaderSource: ga,
      RadioGroupSource: Ma,
      CheckboxGroupSource: ya,
      SliderSource: ba,
      RateSource: Za,
      DatePickerSource: Ea,
      DateRangePickerSource: va,
      TimePickerSource: xa,
      TimeRangePickerSource: za,
      NumberPickerSource: wa,
      PasswordSource: ka,
      TransferSource: Da,
      UploadSource: Sa,
      UploadDraggerSource: _a,
      SwitchSource: Na,
      ObjectSource: Fa,
      CardSource: Aa,
      GridSource: Ta,
      FormLayoutSource: Ba,
      SpaceSource: Pa,
      TabSource: Wa,
      CollapseSource: Ha,
      ArrayCardsSource: Ia,
      ArrayTableSource: Va,
      ButtonSource: Oa,
      MediaSource: Ua,
      NotificationSource: Ga,
      ImageSource: Ja,
      TextSource: Ya,
      CreateButtonSource: ja,
      DeleteButtonSource: qa,
      SubmitButtonSource: Xa,
      ResetButtonSource: Ka,
      UpdateButtonSource: $a,
      OpenPageButtonSource: Qa,
      CustomButtonSource: en,
      ConfirmButtonSource: tn,
      CancelButtonSource: an,
      DetailLinkButtonSource: nn,
      CreateLinkButtonSource: rn,
      UpdateLinkButtonSource: ln,
      DataTableSource: Cn,
      DataQueryListSource: cn,
      DataFormSource: on,
      DataDetailFormSource: Ln,
      EntitySource: sn,
      ImageEntitySource: dn,
      FileEntitySource: hn,
      FileSource: mn,
      AddSort: fn,
      AddIndex: pn,
      AddColumn: un,
      AddColumnGroup: Rn,
      AddPanel: gn,
      AddOperation: Mn,
    })
  Designable.Core.GlobalRegistry.registerDesignerIcons(yn)
  var bn = function (e) {
    var a = o(),
      n = React.useRef()
    if (
      (React.useEffect(
        function () {
          return (
            e.engine &&
              (e.engine &&
                n.current &&
                e.engine !== n.current &&
                n.current.unmount(),
              e.engine.mount(),
              (n.current = e.engine)),
            function () {
              e.engine && e.engine.unmount()
            }
          )
        },
        [e.engine]
      ),
      a)
    )
      throw new Error(
        'There can only be one Designable Engine Context in the React Tree'
      )
    return React.createElement(
      B,
      t({}, e),
      React.createElement(
        i.Provider,
        { value: e.engine },
        e.children,
        React.createElement(se, null)
      )
    )
  }
  bn.defaultProps = { prefixCls: 'dn-', theme: 'light' }
  var Zn = function (e) {
      var t = e.id,
        n = e.title,
        r = e.description,
        l = a(e, ['id', 'title', 'description']),
        i = React.useRef(),
        C = o(),
        L = React.useMemo(
          function () {
            if (C) {
              if (i.current && i.current !== t) {
                var e = C.workbench.findWorkspaceById(i.current)
                e && e.viewport.detachEvents()
              }
              var a = { id: t || 'index', title: n, description: r }
              return C.workbench.ensureWorkspace(a), (i.current = a.id), a
            }
          },
          [t, C]
        )
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(c.Provider, { value: L }, l.children)
      )
    },
    En = function (e) {
      var a = v('pc-simulator')
      return React.createElement(
        'div',
        t({}, e, { className: T(a, e.className) }),
        e.children
      )
    },
    vn = {
      dark: [
        '//img.alicdn.com/imgextra/i3/O1CN01zXMc8W26oJZGUaCK1_!!6000000007708-55-tps-946-459.svg',
        '//img.alicdn.com/imgextra/i3/O1CN012KWk2i1DLduN7InSK_!!6000000000200-55-tps-459-945.svg',
      ],
      light: [
        '//img.alicdn.com/imgextra/i4/O1CN01vuXGe31tEy00v2xBx_!!6000000005871-55-tps-946-459.svg',
        '//img.alicdn.com/imgextra/i4/O1CN01ehfzMc1QPqY6HONTJ_!!6000000001969-55-tps-459-945.svg',
      ],
    },
    xn = Formily.ReactiveReact.observer(function (e) {
      var t = s(),
        a = p(),
        n = v('mobile-simulator-body')
      return React.createElement(
        'div',
        {
          className: n,
          style: {
            alignItems: t.flip ? 'center' : '',
            minWidth: t.flip ? 1e3 : 0,
          },
        },
        React.createElement(
          'div',
          {
            className: n + '-wrapper',
            style: { position: 'relative', minHeight: t.flip ? 0 : 1e3 },
          },
          React.createElement('img', {
            src: t.flip ? vn[a][0] : vn[a][1],
            style: {
              display: 'block',
              margin: '20px 0',
              width: t.flip ? 946.667 : 460,
              height: t.flip ? 460 : 946.667,
              boxShadow: '0 0 20px #0000004d',
              borderRadius: 60,
              backfaceVisibility: 'hidden',
            },
          }),
          React.createElement(
            'div',
            {
              className: n + '-content',
              style: t.flip
                ? {
                    position: 'absolute',
                    width: 736,
                    height: 414,
                    top: 43.3333,
                    left: 106.667,
                    overflow: 'hidden',
                  }
                : {
                    position: 'absolute',
                    width: 414,
                    height: 736,
                    top: 126.667,
                    left: 23.3333,
                    overflow: 'hidden',
                  },
            },
            e.children
          )
        )
      )
    })
  xn.defaultProps = {}
  var zn,
    wn = function (e) {
      var a = v('mobile-simulator')
      return React.createElement(
        'div',
        t({}, e, { className: T(a, e.className) }),
        React.createElement(
          'div',
          { className: a + '-content' },
          React.createElement(xn, null, e.children)
        )
      )
    }
  !(function (e) {
    ;(e.Resize = 'RESIZE'),
      (e.ResizeWidth = 'RESIZE_WIDTH'),
      (e.ResizeHeight = 'RESIZE_HEIGHT')
  })(zn || (zn = {}))
  var kn = function (e) {
      var a,
        n,
        r = v('resize-handle'),
        l = o()
      return React.createElement(
        'div',
        t(
          {},
          e,
          (((a = {})[l.props.screenResizeHandlerAttrName] = e.type), a),
          {
            className: T(
              r,
              ((n = {}), (n[''.concat(r, '-').concat(e.type)] = !!e.type), n)
            ),
          }
        ),
        e.children
      )
    },
    Dn = function (e, t, a) {
      var n = null,
        r = 0,
        l = 0,
        i = 0,
        C = 0,
        c = null,
        o = null,
        L = function (t, r) {
          var l,
            c =
              null === (l = e.current) || void 0 === l
                ? void 0
                : l.getBoundingClientRect()
          n === zn.Resize
            ? (a.screen.setSize(i + t, C + r),
              e.current.scrollBy(c.width + t, c.height + r))
            : n === zn.ResizeHeight
            ? (a.screen.setSize(i, C + r),
              e.current.scrollBy(e.current.scrollLeft, c.height + r))
            : n === zn.ResizeWidth &&
              (a.screen.setSize(i + t, C),
              e.current.scrollBy(c.width + t, e.current.scrollTop))
        }
      a.subscribeTo(Designable.Core.DragStartEvent, function (e) {
        var c, o
        if (
          null === (c = a.workbench.currentWorkspace) || void 0 === c
            ? void 0
            : c.viewport
        ) {
          var L = e.data.target
          if (
            null == L
              ? void 0
              : L.closest('*['.concat(a.props.screenResizeHandlerAttrName, ']'))
          ) {
            var s =
              null === (o = t.current) || void 0 === o
                ? void 0
                : o.getBoundingClientRect()
            if (!s) return
            ;(n = L.getAttribute(a.props.screenResizeHandlerAttrName)),
              a.cursor.setStyle(
                (function (e) {
                  return e === zn.Resize
                    ? 'nwse-resize'
                    : e === zn.ResizeHeight
                    ? 'ns-resize'
                    : e === zn.ResizeWidth
                    ? 'ew-resize'
                    : void 0
                })(n)
              ),
              (r = e.data.topClientX),
              (l = e.data.topClientY),
              (i = s.width),
              (C = s.height),
              a.cursor.setDragType(Designable.Core.CursorDragType.Resize)
          }
        }
      }),
        a.subscribeTo(Designable.Core.DragMoveEvent, function (t) {
          var i, C
          if (
            (null === (i = a.workbench.currentWorkspace) || void 0 === i
              ? void 0
              : i.viewport) &&
            n
          ) {
            var s = t.data.topClientX - r,
              d = t.data.topClientY - l,
              h =
                null === (C = e.current) || void 0 === C
                  ? void 0
                  : C.getBoundingClientRect(),
              m = Math.floor(h.right - t.data.topClientX),
              f = Math.floor(h.bottom - t.data.topClientY),
              p = Designable.Shared.calcSpeedFactor(m, 10),
              u = Designable.Shared.calcSpeedFactor(f, 10)
            L(s, d),
              m <= 10
                ? c ||
                  (c = Designable.Shared.createUniformSpeedAnimation(
                    1e3 * p,
                    function (e) {
                      L(s + e, d)
                    }
                  ))
                : c && (c = c()),
              f <= 10
                ? o ||
                  (o = Designable.Shared.createUniformSpeedAnimation(
                    300 * u,
                    function (e) {
                      L(s, d + e)
                    }
                  ))
                : o && (o = o())
          }
        }),
        a.subscribeTo(Designable.Core.DragStopEvent, function () {
          n &&
            ((n = null),
            a.cursor.setStyle(''),
            a.cursor.setDragType(Designable.Core.CursorDragType.Move),
            c && (c = c()),
            o && (o = o()))
        })
    },
    Sn = Formily.ReactiveReact.observer(function (e) {
      var a = React.useRef(),
        n = React.useRef(),
        r = v('responsive-simulator'),
        l = s()
      return (
        o(function (e) {
          Dn(a, n, e)
        }),
        React.createElement(
          'div',
          t({}, e, {
            className: T(r, e.className),
            style: t(
              {
                height: '100%',
                width: '100%',
                minHeight: 100,
                position: 'relative',
              },
              e.style
            ),
          }),
          React.createElement(
            'div',
            {
              ref: a,
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                overflow: 'overlay',
              },
            },
            React.createElement(
              'div',
              {
                ref: n,
                style: {
                  width: l.width,
                  height: l.height,
                  paddingRight: 15,
                  paddingBottom: 15,
                  position: 'relative',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                },
              },
              e.children,
              React.createElement(
                kn,
                { type: zn.Resize },
                React.createElement(I, {
                  infer: 'DragMove',
                  style: { pointerEvents: 'none' },
                })
              ),
              React.createElement(
                kn,
                { type: zn.ResizeHeight },
                React.createElement(I, {
                  infer: 'Menu',
                  style: { pointerEvents: 'none' },
                })
              ),
              React.createElement(
                kn,
                { type: zn.ResizeWidth },
                React.createElement(I, {
                  infer: 'Menu',
                  style: { pointerEvents: 'none' },
                })
              )
            )
          )
        )
      )
    }),
    _n = Formily.ReactiveReact.observer(
      function (e) {
        var a = s()
        return a.type === Designable.Core.ScreenType.PC
          ? React.createElement(En, t({}, e), e.children)
          : a.type === Designable.Core.ScreenType.Mobile
          ? React.createElement(wn, t({}, e), e.children)
          : a.type === Designable.Core.ScreenType.Responsive
          ? React.createElement(Sn, t({}, e), e.children)
          : React.createElement(En, t({}, e), e.children)
      },
      { scheduler: Designable.Shared.requestIdle }
    ),
    Nn = function (e) {
      var r = e.placeholder,
        l = e.dragTipsDirection,
        i = a(e, ['placeholder', 'dragTipsDirection']),
        C = n(React.useState(!1), 2),
        c = C[0],
        o = C[1],
        L = v('viewport'),
        s = M(),
        d = React.useRef(),
        h = React.useRef(),
        m = React.useRef(!1)
      return (
        React.useLayoutEffect(
          function () {
            var e = d.current.querySelector('iframe')
            if (s)
              return (
                h.current && h.current !== s && h.current.onUnmount(),
                e
                  ? e.addEventListener('load', function () {
                      s.onMount(e, e.contentWindow),
                        Designable.Shared.requestIdle(function () {
                          ;(m.current = !0), o(!0)
                        })
                    })
                  : (s.onMount(d.current, Designable.Shared.globalThisPolyfill),
                    Designable.Shared.requestIdle(function () {
                      ;(m.current = !1), o(!0)
                    })),
                (h.current = s),
                function () {
                  s.onUnmount()
                }
              )
          },
          [s]
        ),
        React.createElement(
          'div',
          t({}, i, {
            ref: d,
            className: T(L, i.className),
            style: t(
              {
                opacity: c ? 1 : 0,
                overflow: m.current ? 'hidden' : 'overlay',
              },
              i.style
            ),
          }),
          i.children,
          React.createElement(re, null),
          React.createElement(de, { dragTipsDirection: l }, r)
        )
      )
    },
    Fn = Formily.ReactiveReact.observer(function (e) {
      var t,
        a = Z()
      return React.createElement(
        Zn,
        {
          id: null === (t = a.currentWorkspace) || void 0 === t ? void 0 : t.id,
        },
        e.children
      )
    }),
    An = function (e) {
      var n = e.logo,
        r = e.actions,
        l = a(e, ['logo', 'actions']),
        i = v('main-panel'),
        C = u(),
        c = T('root', C, l.className)
      return n || r
        ? React.createElement(
            'div',
            t({}, l, { className: T(''.concat(i, '-container'), c) }),
            React.createElement(
              'div',
              { className: i + '-header' },
              React.createElement('div', { className: i + '-header-logo' }, n),
              React.createElement(
                'div',
                { className: i + '-header-actions' },
                r
              )
            ),
            React.createElement('div', { className: i }, l.children)
          )
        : React.createElement(
            'div',
            t({}, l, { className: T(i, c) }),
            l.children
          )
    },
    Tn = function (e) {
      var a = []
      return (
        React.Children.forEach(e, function (e, n) {
          var r
          ;(null == e ? void 0 : e.type) === Bn.Item &&
            a.push(
              t({ key: null !== (r = e.key) && void 0 !== r ? r : n }, e.props)
            )
        }),
        a
      )
    },
    Bn = function (e) {
      var t,
        a,
        r,
        l,
        i = v('composite-panel'),
        C = n(
          React.useState(
            null !== (a = e.defaultActiveKey) && void 0 !== a
              ? a
              : (function (e) {
                  var t = Tn(e)
                  return null == t ? void 0 : t[0].key
                })(e.children)
          ),
          2
        ),
        c = C[0],
        o = C[1],
        L = React.useRef(null),
        s = n(
          React.useState(null !== (r = e.defaultPinning) && void 0 !== r && r),
          2
        ),
        d = s[0],
        h = s[1],
        m = n(
          React.useState(null === (l = e.defaultOpen) || void 0 === l || l),
          2
        ),
        f = m[0],
        p = m[1],
        u = Tn(e.children),
        R = (function (e, t) {
          for (var a = 0; a < e.length; a++) {
            var n = e[a]
            if (t === a) return n
            if (t === n.key) return n
          }
        })(u, c),
        g = null == R ? void 0 : R.children
      ;(L.current = c),
        React.useEffect(
          function () {
            Designable.Shared.isValid(e.activeKey) &&
              e.activeKey !== L.current &&
              o(e.activeKey)
          },
          [e.activeKey]
        )
      return React.createElement(
        'div',
        {
          className: T(
            i,
            ((t = {}), (t['direction-'.concat(e.direction)] = !!e.direction), t)
          ),
        },
        React.createElement(
          'div',
          { className: i + '-tabs' },
          u.map(function (t, a) {
            var n,
              r = null !== (n = t.shape) && void 0 !== n ? n : 'tab',
              l = 'link' === r ? 'a' : 'div'
            return React.createElement(
              l,
              {
                className: T(i + '-tabs-pane', { active: c === t.key }),
                key: a,
                href: t.href,
                onClick: function (a) {
                  var n, l
                  'tab' === r &&
                    (c === t.key ? p(!f) : p(!0),
                    ((null == e ? void 0 : e.activeKey) &&
                      (null == e ? void 0 : e.onChange)) ||
                      o(t.key)),
                    null === (n = t.onClick) || void 0 === n || n.call(t, a),
                    null === (l = e.onChange) ||
                      void 0 === l ||
                      l.call(e, t.key)
                },
              },
              t.href
                ? React.createElement('a', { href: t.href }, t.icon)
                : React.createElement(I, {
                    tooltip: e.showNavTitle
                      ? null
                      : {
                          title: React.createElement(oe, null, t.title),
                          placement: 'right' === e.direction ? 'left' : 'right',
                        },
                    infer: t.icon,
                  }),
              e.showNavTitle && t.title
                ? React.createElement(
                    'div',
                    { className: i + '-tabs-pane-title' },
                    React.createElement(oe, null, t.title)
                  )
                : null
            )
          })
        ),
        (function () {
          if (g && f)
            return React.createElement(
              'div',
              { className: T(i + '-tabs-content', { pinning: d }) },
              React.createElement(
                'div',
                { className: i + '-tabs-header' },
                React.createElement(
                  'div',
                  { className: i + '-tabs-header-title' },
                  React.createElement(oe, null, R.title)
                ),
                React.createElement(
                  'div',
                  { className: i + '-tabs-header-actions' },
                  React.createElement(
                    'div',
                    { className: i + '-tabs-header-extra' },
                    R.extra
                  ),
                  !d &&
                    React.createElement(I, {
                      infer: 'PushPinOutlined',
                      className: i + '-tabs-header-pin',
                      onClick: function () {
                        h(!d)
                      },
                    }),
                  d &&
                    React.createElement(I, {
                      infer: 'PushPinFilled',
                      className: i + '-tabs-header-pin-filled',
                      onClick: function () {
                        h(!d)
                      },
                    }),
                  React.createElement(I, {
                    infer: 'Close',
                    className: i + '-tabs-header-close',
                    onClick: function () {
                      p(!1)
                    },
                  })
                )
              ),
              React.createElement('div', { className: i + '-tabs-body' }, g)
            )
        })()
      )
    }
  Bn.Item = function () {
    return React.createElement(React.Fragment, null)
  }
  var Pn = Formily.ReactiveReact.observer(function (e) {
      var t = v('settings-panel'),
        a = Z(),
        r = n(React.useState(!0), 2),
        l = r[0],
        i = r[1],
        C = n(React.useState(!1), 2),
        c = C[0],
        o = C[1],
        L = n(React.useState(!0), 2),
        s = L[0],
        d = L[1]
      return (
        React.useEffect(
          function () {
            ;(s || 'DESIGNABLE' === a.type) &&
              (l ||
                Designable.Shared.requestIdle(function () {
                  requestAnimationFrame(function () {
                    i(!0)
                  })
                }))
          },
          [s, a.type]
        ),
        'DESIGNABLE' !== a.type
          ? (l && i(!1), null)
          : s
          ? React.createElement(
              'div',
              { className: T(t, { pinning: c }) },
              React.createElement(
                'div',
                { className: t + '-header' },
                React.createElement(
                  'div',
                  { className: t + '-header-title' },
                  React.createElement(oe, null, e.title)
                ),
                React.createElement(
                  'div',
                  { className: t + '-header-actions' },
                  React.createElement(
                    'div',
                    { className: t + '-header-extra' },
                    e.extra
                  ),
                  !c &&
                    React.createElement(I, {
                      infer: 'PushPinOutlined',
                      className: t + '-header-pin',
                      onClick: function () {
                        o(!c)
                      },
                    }),
                  c &&
                    React.createElement(I, {
                      infer: 'PushPinFilled',
                      className: t + '-pin-filled',
                      onClick: function () {
                        o(!c)
                      },
                    }),
                  React.createElement(I, {
                    infer: 'Close',
                    className: t + '-header-close',
                    onClick: function () {
                      d(!1)
                    },
                  })
                )
              ),
              React.createElement(
                'div',
                { className: t + '-body' },
                l && e.children
              )
            )
          : (l && i(!1),
            React.createElement(
              'div',
              {
                className: t + '-opener',
                onClick: function () {
                  d(!0)
                },
              },
              React.createElement(I, { infer: 'Setting', size: 20 })
            ))
      )
    }),
    Wn = function (e) {
      var t = v('workspace-panel')
      return React.createElement('div', { className: t }, e.children)
    }
  Wn.Item = function (e) {
    var a = v('workspace-panel-item')
    return React.createElement(
      'div',
      {
        className: a,
        style: t(t({}, e.style), {
          flexGrow: e.flexable ? 1 : 0,
          flexShrink: e.flexable ? 1 : 0,
        }),
      },
      e.children
    )
  }
  var Hn = Formily.ReactiveReact.observer(function (e) {
    var t = n(React.useState(!0), 2),
      a = t[0],
      r = t[1],
      l = Z(),
      i = m()
    if (
      (React.useEffect(
        function () {
          l.type === e.type
            ? Designable.Shared.requestIdle(function () {
                requestAnimationFrame(function () {
                  r(!0)
                })
              })
            : r(!1)
        },
        [l.type]
      ),
      l.type !== e.type)
    )
      return null
    var C = function () {
      return e.children(i, function (e) {
        i.from(e), i.takeSnapshot()
      })
    }
    return 'DESIGNABLE' === l.type
      ? React.createElement(Nn, { dragTipsDirection: e.dragTipsDirection }, C())
      : React.createElement(
          'div',
          {
            style: {
              overflow: e.scrollable ? 'overlay' : 'hidden',
              height: '100%',
              cursor: 'auto',
              userSelect: 'text',
            },
          },
          a && C()
        )
  })
  ;(Hn.defaultProps = { scrollable: !0 }),
    (e.AuxToolWidget = re),
    (e.ComponentTreeWidget = ie),
    (e.CompositePanel = Bn),
    (e.Designer = bn),
    (e.DesignerComponentsContext = r),
    (e.DesignerEngineContext = i),
    (e.DesignerLayoutContext = l),
    (e.DesignerToolsWidget = Ce),
    (e.DroppableWidget = ye),
    (e.EmptyWidget = de),
    (e.GhostWidget = se),
    (e.HistoryWidget = Re),
    (e.IconWidget = I),
    (e.Layout = B),
    (e.MobileSimulator = wn),
    (e.NodeActionsWidget = Me),
    (e.NodePathWidget = ge),
    (e.NodeTitleWidget = V),
    (e.OutlineTreeWidget = pe),
    (e.PCSimulator = En),
    (e.ResourceWidget = Le),
    (e.ResponsiveSimulator = Sn),
    (e.SettingsPanel = Pn),
    (e.Simulator = _n),
    (e.StudioPanel = function (e) {
      return React.createElement(
        B,
        { theme: e.theme, prefixCls: e.prefixCls, position: e.position },
        React.createElement(An, t({}, e))
      )
    }),
    (e.TextWidget = oe),
    (e.ToolbarPanel = function (e) {
      return React.createElement(
        Wn.Item,
        t({}, e, {
          style: t(
            {
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 4,
              padding: '0 4px',
            },
            e.style
          ),
        }),
        e.children
      )
    }),
    (e.TreeNodeContext = C),
    (e.TreeNodeWidget = le),
    (e.ViewPanel = Hn),
    (e.ViewToolsWidget = ce),
    (e.Viewport = Nn),
    (e.ViewportPanel = function (e) {
      return React.createElement(
        Wn.Item,
        t({}, e, { flexable: !0 }),
        React.createElement(_n, null, e.children)
      )
    }),
    (e.Workbench = Fn),
    (e.Workspace = Zn),
    (e.WorkspaceContext = c),
    (e.WorkspacePanel = Wn),
    (e.useComponents = F),
    (e.useCurrentNode = N),
    (e.useCursor = L),
    (e.useDesigner = o),
    (e.useHistory = E),
    (e.useHover = g),
    (e.useLayout = f),
    (e.useMoveHelper = w),
    (e.useNodeIdProps = k),
    (e.useOperation = h),
    (e.useOutline = y),
    (e.usePosition = u),
    (e.usePrefix = v),
    (e.useRegistry = x),
    (e.useScreen = s),
    (e.useSelected = S),
    (e.useSelectedNode = _),
    (e.useSelection = b),
    (e.useTheme = p),
    (e.useTransformHelper = D),
    (e.useTree = m),
    (e.useTreeNode = R),
    (e.useValidNodeOffsetRect = z),
    (e.useViewport = M),
    (e.useWorkbench = Z),
    (e.useWorkspace = d),
    Object.defineProperty(e, '__esModule', { value: !0 })
})