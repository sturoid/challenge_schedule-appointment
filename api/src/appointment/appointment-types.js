module.exports = `
  extend type Query {
    appointment(id: ID!): Appointment
    appointmentsInRage(start: String!, end: String!): [Appointment]!
    appointments(userId: String, coachId: String, start: String, end: String): [Appointment]!
  }

  type Appointment  {
    _id: ID!
    start: String!
    end: String!
    coach: User!
    user: User!
  }
`;
