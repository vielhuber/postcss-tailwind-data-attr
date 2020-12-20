module.exports = () => {
  return {
    postcssPlugin: 'postcss-tailwind-data-attr',
    Root (root) {
      root.walkRules(rule => {
        if (rule.selector.includes('tw-')) {
          rule.selector = rule.selector
            .split(' ')
            .map(j =>
              j
                .replace(/\\\./g, 'SPECIALSEPARATOR')
                .split('.')
                .map(i => {
                  if (i === '') {
                    return ''
                  }
                  if (i.includes('tw-')) {
                    return '[data-tw~="' + i.split('tw-').join('') + '"]'
                  }
                  return i
                })
                .join('')
                .replace(/SPECIALSEPARATOR/g, '\\.')
            )
            .join(' ')
        }
      })
    }
  }
}
module.exports.postcss = true
