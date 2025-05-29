# staffengineer-poc-02-graphql

# GraphQL Counter Server

## 🏆 Introduction

This project is a Proof of Concept (PoC) for a GraphQL-based counter server, built to demonstrate key architectural concepts using a React web frontend. The following sections outline the setup, data storage approach, and additional architectural details.

---

## Starting the Server

1. **Ensure Prerequisites**:

   - Node.js (version 14 or higher) and npm are installed.
   - The `graphql-server.js` file is in the project directory.
   - Dependencies are installed (`apollo-server` and `graphql`).

2. **Run the Server**:

   ```bash
   node graphql-server.js
   ```

3. **Access the Server**:
   - The server will start at `http://localhost:4000`.
   - Open `http://localhost:4000` in a browser to access the GraphQL Playground for testing.

## Data Storage

For this Proof of Concept (PoC), instead of creating a database, data is stored in a JSON file.
