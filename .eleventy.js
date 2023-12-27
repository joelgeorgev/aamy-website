module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME')
  eleventyConfig.addPassthroughCopy('fonts/arizonia-v21-latin-regular.woff2')
}
