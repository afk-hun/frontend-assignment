import { ThemeProvider } from "styled-components";
import { globalTheme } from "./global/theme";
import { useEffect } from "react";
import { useProductsDispatch } from "./store/hooks";
import { fetchProducts } from "./store/product-slice";
import { LandingPage } from "./pages/Landing";

function App() {
  const dispatch = useProductsDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <ThemeProvider theme={globalTheme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
