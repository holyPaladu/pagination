# React Pagination Project

This project is a React-based application that implements a pagination component. The code in the `src` folder contains the core logic and components for rendering and managing pagination.

## Project Structure

The `src` folder contains the following key components and files:

- **App**: Reusable React page for pagination.
- **App/styles**: global style for project.
- **Features**: Main functions for managing pagination logic.
- **Shared**: More usable components for the pagination UI.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the project locally using `npm run dev`.

## Usage

Import the `Pagination` component and use it in your React application:

```jsx
import Pagination from "./components/Pagination";

function App() {
  return (
    <div>
      <Pagination totalPages={100} />
    </div>
  );
}
```

## Contributing

Feel free to submit issues or pull requests to improve the project.
