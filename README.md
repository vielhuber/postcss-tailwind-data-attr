# PostCSS Tailwind Data Attr

[PostCSS] plugin that moves tailwind classes to data attributes.

[postcss]: https://github.com/postcss/postcss

```css
.tw-text-left {}
.md:tw-text-xl {}
```

```css
[data-tw="text-left"] {}
[data-tw="md:text-xl"] {}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-tailwind-data-attr'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
