const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString,

  } = graphql;

const userType = new GraphQLObjectType({
    name: "User",
    fields: ()=>({
        id:{type :GraphQLInt},
        firstname :{type : GraphQLString}
    })
})

module.exports = userType