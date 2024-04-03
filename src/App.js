import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utlis/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Mainbar from "./components/Mainbar";
import WatchPAge from "./components/WatchPage";
const appRouter=createBrowserRouter(
  [{path:'/',
    element:<Body/>,
    children: [
      {
      path:'/',
      element:<Mainbar/>
      },
    { 
      path:'watch',
      element:<WatchPAge/>

    },
    ] 

  }]
)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
