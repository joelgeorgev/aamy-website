module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME')
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('assets')

  return {
    pathPrefix: '/aamy-website/'
  }
}
