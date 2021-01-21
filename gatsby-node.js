const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  query MyQuery {
        getLolly {
        getLolly {
        c1
        c2
        c3
        link
        message
        rec
        id
        sender
      }
    }
  }
      `);
      console.log(JSON.stringify(result))
  result.data.forEach((d) => {
        console.log("++++++++++++++++" , d)
    createPage({
      path: `template/${d.link}`,
      component: path.resolve(`./src/pages/template.js`),
      context: d,
    });
  });
};