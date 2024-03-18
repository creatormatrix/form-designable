export const dataSourceToExpressions = (dataSource: any) => {
  if (Array.isArray(dataSource) && dataSource.length > 0) {
    return `
      declare var $values : {
        ${dataSource.map(({ label, value }) => {
          if (!label) return ''
          return `
          /**
          * ${label}
          */
          ${value}?: 'any';
          `
        })}
      }
    `
  }
  return ''
}

export const contextExpressions = () => {
  return `
      declare var $context: {
        /**
        * 表单状态 \n
        * add: 新增 
        * edit: 编辑
        * read: 详情
        */
        formPattern: 'add' | 'update' | 'read';
        /**
        * 用户信息
        */
        user: any;
      }
    `
}
