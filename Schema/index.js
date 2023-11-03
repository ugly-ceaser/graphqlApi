const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,

  } = graphql;
  const userData = require("../mockData.json");

const userType = require('./TypDef/userType')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(userType),
            args :  {id :{ type: GraphQLInt}},
            resolve(parents,args){
                return userData
            }
        }
        
    }
})

const Mutation = new GraphQLObjectType({
    name : "Mutation",
    fields: {
        createUser:{
            type : userType,
            args :{
                firstname:{type : GraphQLString}
            },
            resolve(parents,args){

                userData.push({id :userData.length + 1, firstname : args.firstname})
                return args
            }

        }
    }
})

module.exports = new GraphQLSchema({query:RootQuery,mutation:Mutation})
