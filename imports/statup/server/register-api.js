import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolucionsSchema from '../../api/resolucions/Resolucions.graphql';
import ResolucionResolvers from '../../api/resolucions/Resolvers'


const testSchema = `
type Query{
    hi: String 
    resolucions: [Resolucion]
}
`

const typeDefs = [
    testSchema,
    ResolucionsSchema
];

const resolvers = {
    Query:{
        hi(){
            return "Hellow level Up";
        }
    },
    ...ResolucionResolvers
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema});