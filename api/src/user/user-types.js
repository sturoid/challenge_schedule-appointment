module.exports = `
  type Query {
    user(id: ID!): User
  }

  type User {
    _id: ID!
    name: String!
    timezone: String!
    appointments: [Appointment]!
  }
`;
