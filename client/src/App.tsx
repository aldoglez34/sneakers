import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, SneakerDetails, Store } from "./pages";
import { VERSION } from "./constants/strings";
import { QueryClient, QueryClientProvider } from "react-query";

const App: FC = () => {
  useEffect(() => console.log(`Release: ${VERSION}`), []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Store />} path="store" />
          <Route element={<SneakerDetails />} path="store/:sneakerId" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
