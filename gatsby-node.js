 exports.onCreatePage = async ({ page, actions }) => {
   const { createPage } = actions;

 if (page.path.match(/^\/lollies/)) {
   console.log("Page Created")
    page.matchPath = "/lollies/*";
    createPage(page);
  }}
/*const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
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
          message 
          rec 
          link       
      }
    }
  }
`);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.getlolly.getLolly.forEach((d) => {
    createPage({
      path: `/lollies/${d.link}`,
      component: path.resolve(`./src/components/template.js`),
      context: {
         d
      },
    });
  });
};*/