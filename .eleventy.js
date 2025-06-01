module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/css/");
  
  // Add filters
  eleventyConfig.addFilter("dateReadable", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Add year filter
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });
  
  // Add date filter for datetime attribute
  eleventyConfig.addFilter("date", (dateObj, format) => {
    const date = new Date(dateObj);
    if (format === '%Y-%m-%d') {
      return date.toISOString().split('T')[0];
    }
    return date.toISOString();
  });

  // Add global data
  eleventyConfig.addGlobalData("currentYear", () => {
    return new Date().getFullYear();
  });
  
  // Collections
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByTag("blog").sort(function(a, b) {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};