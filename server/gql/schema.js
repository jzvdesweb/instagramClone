const { gql } = require("apollo-server");

const typeDefs = gql`

scalar Upload

  type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createAt: String
  }



# token
  type Token {
    token: String
  }

  # Avatar
  type UpdateAvatar {
    status: Boolean
    urlAvatar: String
  }

# Register
  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }
  
# Login
  input LoginInput {
    email: String!
    password: String!
  }

# Actualizar formulario (Cambio de contraseña, email, etc...)
  input UserUpdateInput {
    name: String
    email: String
    currentPassword: String
    newPassword: String
    siteWeb: String
    description: String
  }


  type Query {
# User
    getUser(id: ID, username: String): User
    search(search: String): [User]

# Follow
    isFollow(username: String!): Boolean
    getFollowers(username: String!): [User]
    getFolloweds(username: String!): [User]
  }
  

  type Mutation {
# User
    register(input: UserInput): User
    login(input: LoginInput): Token
    updateAvatar(file: Upload): UpdateAvatar
    deleteAvatar: Boolean
    updateUser(input: UserUpdateInput): Boolean

# Follow
    follow(username: String!): Boolean
    unFollow(username: String!): Boolean
  }


`;

module.exports = typeDefs;
