let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined
  })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('basic tests', async () => {
  await run('.foo {}', '.foo {}', {})
  await run('.tw-text-left {}', '[data-tw~="text-left"] {}', {})
  await run('.md:tw-text-xl {}', '[data-tw~="md:text-xl"] {}', {})
  await run(
    '.tw-text-left.md:tw-text-xl {}',
    '[data-tw~="text-left"][data-tw~="md:text-xl"] {}',
    {}
  )
  await run(
    '.tw-sm:space-x-96 > :not([hidden]) ~ :not([hidden]) {}',
    '[data-tw~="sm:space-x-96"] > :not([hidden]) ~ :not([hidden]) {}',
    {}
  )
})
