let postcss = require('postcss')

module.exports = postcss.plugin('postcss-tailwind-data-attr', () => {
  return root => {
    root.walkRules(rule => {
      if (rule.selector.includes('tw-')) {
        rule.selector = rule.selector
          .split('.')
          .map(i => i === '' ? '' : '[data-tw="' +
            i.split('tw-').join('') + '"]'
          )
          .join('')
      }
    })
  }
})
