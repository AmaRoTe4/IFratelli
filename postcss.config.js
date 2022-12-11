//module.exports = {}

module.exports = { // eslint-disable-line import/no-anonymous-default-export
    plugins: [
        'postcss-import',
		'postcss-flexbugs-fixes',
		'postcss-nested',
		'postcss-custom-properties',
		'tailwindcss',
		'autoprefixer',
    ],
    images: {
        unoptimized: true,
        disableStaticImages:true
    },
}