module.exports = `
  extend type Query {
    appointment(id: ID!): Appointment
    appointments(userId: String, coachId: String, start: String, end: String): [Appointment]!
  }

  type Mutation {
    addAppointment(input: AppointmentInput!): Appointment!
  }

  type Appointment  {
    _id: ID!
    id: ID!
    start(inTimezone: Boolean): String!
    end(inTimezone: Boolean): String!
    coach: User!
    user: User!
  }

  input AppointmentInput {
    start: String!
    coachId: ID!
  }
`;
