import { createLocales } from '@creatormatrix/core'
import { Card } from './Card'

export const ArrayList = createLocales(Card, {
  'zh-CN': {
    title: '自增列表',
    addIndex: '添加索引',
    addOperation: '添加操作',
  },
  'en-US': {
    title: 'Array List',
    addIndex: 'Add Index',
    addOperation: 'Add Operations',
  },
  'ko-KR': {
    title: '배열 카드',
    addIndex: '색인 추가',
    addOperation: '작업 추가',
  },
})
