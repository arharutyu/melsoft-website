const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
    features: {
        serverComponents: true,
      },
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
}