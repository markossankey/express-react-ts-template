import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import { Test } from "./components/TestBackendApi";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div>
          <a href="https://vitejs.dev" target="_blank"></a>
          <a href="https://reactjs.org" target="_blank"></a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <h2>Testing Express API</h2>
        <Test />
      </QueryClientProvider>
    </div>
  );
}

export default App;
