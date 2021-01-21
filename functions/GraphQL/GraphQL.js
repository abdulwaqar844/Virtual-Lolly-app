const { ApolloServer, gql } = require('apollo-server-lambda')
var faunadb = require('faunadb'),
  q = faunadb.query;
  const shortid = require('shortid');
const typeDefs = gql`
  type Query {
    getLolly : [Lolly!]
  }
  type Lolly {
    id: ID!,
    c1: String,
    c2: String,
    c3: String,
    sender: String,
    message: String,
    rec: String,
    link:String
  }
  type Mutation {
    addLolly( 
      c1: String,
      c2: String,
      c3: String,
      sender: String,
      message: String,
      rec: String): Lolly
  }
`
const resolvers = {
  Query: {
    getLolly: async (parent, args, context) => {
      try {
        var client = new faunadb.Client({ secret:process.env.FAUNADB_SECRET});
        let result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index('vlink'))),
            q.Lambda(x => q.Get(x))
          )
        );
        return result.data.map(d => {
          return {
           id:d.ref.id,
           c1:d.data.c1,
           c2:d.data.c2,
           c3:d.data.c3,
           sender:d.data.sender,
           rec:d.data.rec,
           message:d.data.message,
           link:d.data.link
          }
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    addLolly: async (_, { c1, c2, c3, sender, message, rec }) => {
      try {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
        let result = await client.query(
          q.Create(
            q.Collection('vlolly'),
            {
              data: {
                c1, 
                c2, 
                c3,
                 sender, 
                 message, 
                 rec, 
                 link:shortid.generate()
              }

            },
            )
            );
            return result.data;
          } catch (err) {
            return err.toString();
          }
        },    
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
