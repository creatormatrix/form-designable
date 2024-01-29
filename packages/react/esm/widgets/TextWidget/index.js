import React, { Fragment } from 'react'
import { isStr, isPlainObj } from '@designable/shared'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/reactive-react'
export var TextWidget = observer(function (props) {
  let takeLocale = function (message) {
    if (isStr(message)) return message
    if (isPlainObj(message)) {
      let lang = GlobalRegistry.getDesignerLanguage()
      for (let key in message) {
        if (key.toLocaleLowerCase() === lang) return message[key]
      }
      return
    }
    return message
  }
  let takeMessage = function (token) {
    if (!token) return
    let message = isStr(token)
      ? GlobalRegistry.getDesignerMessage(token)
      : token
    if (message) return takeLocale(message)
    return token
  }
  return React.createElement(
    Fragment,
    null,
    takeMessage(props.children) ||
      takeMessage(props.token) ||
      takeMessage(props.defaultMessage)
  )
})
