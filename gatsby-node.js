const path = require("path");
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
    console.log("++++++++++++++++ page created", d)
    createPage({
      path: `/lollies/${d.link}`,
      component: path.resolve(`./src/components/template.js`),
      context: {
        data: d
      },
    });
  });
};