const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
    // index fields
    var index = elasticlunr(function () {
        this.addField("title");
        this.addField("tags");
        this.addField("content");
        this.setRef("id");
    })

    // loop through each page and add it to index
    collection.forEach((page) => {
        index.addDoc({
            id: page.url,
            title: page.template.frontMatter.data.title,
            tags: page.template.frontMatter.data.tags,
            content: page.template.frontMatter.content
        })
    })

    return index;
}