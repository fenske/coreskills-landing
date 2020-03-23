module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './public/index.html',
        './public/pricing.html',
        './public/faq.html',
      ],
      defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
    }),
    require('@tailwindcss/ui'),
  ]
}