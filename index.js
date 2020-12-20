let postcss = require('postcss')

module.exports = postcss.plugin('postcss-tailwind-data-attr', () => {
  return root => {
    root.walkRules(rule => {
      if (rule.selector.includes('tw-')) {
        rule.selector = rule.selector
          .split(' ')
          .map(j => j
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
          )
          .join(' ')
      }
    })
  }
})
