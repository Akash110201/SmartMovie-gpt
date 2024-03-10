import { Provider } from "react-redux";
import Body from "./Components/Main/Body";
import appStore from "./Utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
