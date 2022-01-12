const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
  
module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats(['md']);
  eleventyConfig.addPlugin(ErrorOverlay);
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
  return {
    dir: {
    input: "src",
    output: "_site",
    includes: "_includes",
    data: "_helpers",
    },
    jsDataFileSuffix: '.data',
  };
};