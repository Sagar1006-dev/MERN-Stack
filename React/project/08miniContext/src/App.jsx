import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="container mx-auto p-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Context API Crash Course</h1>

        {/* Login Component */}
        <Login />

        {/* Profile Component */}
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
