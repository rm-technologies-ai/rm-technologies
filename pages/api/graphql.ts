
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { NextApiRequest, NextApiResponse } from 'next';

// ... rest of your Apollo Server setup, using Next.js types for request and response.

export default ApolloServer.createHandler({ path: '/api/graphql' });

export const config = {
    api: {
        bodyParser: false,
    },
};
