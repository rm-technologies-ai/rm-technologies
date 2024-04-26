
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    address: String
    email: String!
    phone: String
    role: String
    opportunityRating: Int
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      address: String
      email: String!
      phone: String
      role: String
      opportunityRating: Int
    ): User
  }
`;
