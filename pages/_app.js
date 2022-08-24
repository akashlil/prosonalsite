import Layout from "../components/layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/index";
import "../styles/bootstrap.min.css";
import AuthProvider from "../context/AuthProvider";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Provider>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default MyApp;
