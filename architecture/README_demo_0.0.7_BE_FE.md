# Staff Engineer POC 02 - React TypeScript with GraphQL

## Overview

The `staffengineer-poc-02-react-typescript` project is a proof-of-concept application demonstrating a modern web architecture. The frontend (FE) is a React single-page application built with TypeScript, Redux Toolkit, and Apollo Client, featuring a counter interface that retrieves and saves data to a GraphQL backend (BE). The BE is a Node.js Apollo Server with a GraphQL API, persisting data to a JSON file and handling CORS for cross-origin requests. This project showcases type-safe development, state management, and GraphQL integration, serving as a foundation for scalable web applications.

## Features

- **Counter Interface**: Displays a counter with buttons to increment, decrement, or add 5 to the value, managed by Redux.
- **Data Retrieval**: Fetches the counter value from the server on load using a GraphQL query.
- **Data Saving**: Includes a Save button to send the counter value to the server via a GraphQL mutation.
- **Error Handling**: Shows loading states and error messages for GraphQL operations.
- **Responsive Design**: Styled with Tailwind CSS for a clean, modern UI.
- **CORS Support**: Backend allows requests from the frontend and Apollo Studio, resolving cross-origin issues.

## Technologies

### Frontend

- React
- TypeScript
- Redux Toolkit
- React-Redux
- Apollo Client
- Tailwind CSS
- Create React App
- Node.js & npm

### Backend

- Apollo Server
- GraphQL
- Node.js
- File System (fs)

## Project Structure

### Frontend

- Main component: Contains the counter UI and GraphQL integration.
- Apollo Client: Configures GraphQL queries and mutations.
- Redux Store: Manages counter state and actions.
- Styles: Uses Tailwind CSS with optional custom styles.
- Types: Includes typed Redux hooks for type safety.

### Backend

- Server: Implements the GraphQL API.
- Storage: Persists counter data to a JSON file.
- Configuration: Handles CORS and server setup.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm
- Git

### Frontend Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd staffengineer-poc-02-react-typescript
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open `http://localhost:3000` in a browser to view the app.

### Backend Setup

1. Navigate to the backend directory (if separate) or create a `backend` folder.
2. Install dependencies:
   ```
   npm install apollo-server graphql
   ```
3. Run the server:
   ```
   node server.js
   ```
4. Verify the server is running at `http://localhost:4000`.

### Notes

- Ensure the backend is running before starting the frontend to enable GraphQL communication.
- The frontend connects to the backend at `http://localhost:4000`. Update the Apollo Client configuration if the backend URL changes.

## Usage

1. **View Counter**: On load, the app fetches the counter value from the server and displays it.
2. **Update Counter**: Use the Increment, Decrement, or Add 5 buttons to modify the counter locally.
3. **Save Counter**: Click the Save button to send the counter value to the server. A success alert confirms the save, or an error message appears if the operation fails.
4. **Monitor State**: Use Redux DevTools (browser extension) to inspect counter state changes.
5. **Debug GraphQL**: Check the browser console for GraphQL query and mutation logs.

## Extending the Project

- **Frontend**:
  - Add new Redux slices for features like authentication.
  - Create additional components for enhanced UI.
  - Integrate more GraphQL queries or mutations for new data.
- **Backend**:
  - Extend the GraphQL schema with new types and resolvers.
  - Replace JSON file storage with a database (e.g., MongoDB, PostgreSQL).
  - Update CORS settings for additional origins.

## Deployment

- **Frontend**:
  - Build with `npm run build` and deploy to a static hosting service (e.g., Netlify, Vercel).
  - Update the backend URL in the Apollo Client configuration for production.
- **Backend**:
  - Deploy to a Node.js hosting platform (e.g., Heroku, AWS).
  - Secure with HTTPS and update CORS origins.
  - Consider a database for production-grade persistence.

## Testing and Debugging

- **Frontend**:
  - Use Redux DevTools to monitor state changes.
  - Log GraphQL responses and errors in the console.
  - Add Jest and React Testing Library for unit tests.
- **Backend**:
  - Test GraphQL queries and mutations via Apollo Studio.
  - Log file operation errors for debugging.
  - Validate CORS settings with frontend and Apollo Studio requests.

## Contributing

Contributions are welcome! Submit pull requests or open issues on the repository. Ensure new code follows TypeScript conventions, Redux Toolkit patterns, and includes tests where applicable.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## References

- React Documentation
- TypeScript Documentation
- Redux Toolkit Documentation
- Apollo Client Documentation
- Tailwind CSS Documentation
- Apollo Server Documentation
- GraphQL Documentation
