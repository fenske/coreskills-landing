module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './public/*.html',
      ],
      defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
    }),
    require('@tailwindcss/ui'),
  ]
}