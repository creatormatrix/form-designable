import React from 'react'
import { Content } from './content'
import { renderSandboxContent } from '@creatormatrix/react-sandbox'
import './theme.less'

renderSandboxContent(() => {
  return <Content />
})
