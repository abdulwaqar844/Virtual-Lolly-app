const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  query {
    getlolly {
        getLolly {
         id
         c1
         c2
         c3
         sender
         rec
         message
         link      
      }
    }
  }
      `);
            result.data.getlolly.getLolly.forEach((d) => {
    createPage({
      path: `template/${d.link}`,
      component: path.resolve(`./src/pages/template.js`),
      context:{
      data:result.data.getlolly
      },
    });
 });
};