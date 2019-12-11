module.exports = `
  type Query {
    me: User
    user(id: ID!): User
    users: [User]!
    coaches: [User]!
  }

  type User {
    _id: ID!
    name: String!
    timezone: String!
    appointments: [Appointment]!
  }
`;
