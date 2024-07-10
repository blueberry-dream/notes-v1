// 11ty config file
const searchFilter = require("./scripts/search_filter");

module.exports = function (eleventyConfig) {
  // do not use .gitignore to determine which files to compile
  eleventyConfig.setUseGitIgnore(false);

  // ignore server side scripts
  eleventyConfig.ignores.add("scripts/*_filter*");
  eleventyConfig.ignores.add("notes/.new-note-template.md");

  // passthrough for static assets
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  // custom filters for collections
  eleventyConfig.addFilter("search", searchFilter);
  eleventyConfig.addFilter("toJson", JSON.stringify);

  // testing config
  // if (process.env.NODE_ENV != "dev") {
  //   eleventyConfig.ignores.add("notes/sample-notes/**");
  // }

  return {
    dir: {
      output: "_site",
      input: "notes",
      data: "data",
      includes: "templates"
    },

    templateFormtats: ["liquid", "md"]
  };
};
