const Task = `
  type GetTasks {
    tasks: [Task]
  }
  type Task {
    id: ID!
    title: String!
    description: String!
    promo: String!
    price: Float!
    state: String!
  }
`;

module.exports = Task;
