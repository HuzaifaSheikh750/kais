import {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss"
import "@/styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Provider } from "react-redux";
import store from "@/redux/store";
import rootSaga from "@/redux/blog/saga";


export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //   store.runSagaTask(rootSaga);
  // }, []);

  return (
  <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  );
}
