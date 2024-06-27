export const upperFirst = (string) => {
  if (!string) return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const variableToLabel = (str: string) => {
  if (
    ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(str)
  ) {
    return str.toUpperCase()
  }
  return upperFirst(str)
}
