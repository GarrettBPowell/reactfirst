import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SpinHomePage4 from "./pages/SpinHomePage4";
import DietaryPrefs1Removed1 from "./pages/DietaryPrefs1Removed1";
import OtherThings from "./pages/OtherThings";
import SpinHomePage3 from "./pages/SpinHomePage3";
import SpinHomePage31 from "./pages/SpinHomePage31";
import CreateSpinner1 from "./pages/CreateSpinner1";
import CreateSpinner2 from "./pages/CreateSpinner2";
import SpinHomePage41 from "./pages/SpinHomePage41";
import NameSpinner11 from "./pages/NameSpinner11";
import NameSpinner2 from "./pages/NameSpinner2";
import DietaryPrefs1Added from "./pages/DietaryPrefs1Added";
import DietaryPrefs2Added from "./pages/DietaryPrefs2Added";
import DietaryPrefs3Added from "./pages/DietaryPrefs3Added";
import DietaryPrefs4Added from "./pages/DietaryPrefs4Added";
import DietaryPrefs5Added from "./pages/DietaryPrefs5Added";
import DietaryPrefs1Removed from "./pages/DietaryPrefs1Removed";
import ResturantsAdd1 from "./pages/ResturantsAdd1";
import ResturantsAdd2 from "./pages/ResturantsAdd2";
import ResturantsAdd3 from "./pages/ResturantsAdd3";
import ResturantsAdd4 from "./pages/ResturantsAdd4";
import ResturantsAdd5 from "./pages/ResturantsAdd5";
import ResturantsAdd6 from "./pages/ResturantsAdd6";
import ResturantsAdd7 from "./pages/ResturantsAdd7";
import ResturantsAdd8 from "./pages/ResturantsAdd8";
import SpinHomePage21 from "./pages/SpinHomePage21";
import SpinHomePage11 from "./pages/SpinHomePage11";
import SpinHomePage5 from "./pages/SpinHomePage5";
import CreateSpinner from "./pages/CreateSpinner";
import AddFriends2 from "./pages/AddFriends2";
import AddFriends1 from "./pages/AddFriends1";
import AddFriends from "./pages/AddFriends";
import NameSpinner3 from "./pages/NameSpinner3";
import NameSpinner1 from "./pages/NameSpinner1";
import NameSpinner from "./pages/NameSpinner";
import SpinHomePage2 from "./pages/SpinHomePage2";
import SpinHomePage1 from "./pages/SpinHomePage1";
import SpinHomePage from "./pages/SpinHomePage";
import Resturants from "./pages/Resturants";
import DietaryPrefs from "./pages/DietaryPrefs";
import TaskOrientedButtons from "./pages/TaskOrientedButtons";
import NavigationTools from "./pages/NavigationTools";
import ButtonsAndAdders from "./pages/ButtonsAndAdders";
import SpinnerStuffs from "./pages/SpinnerStuffs";
import ColorPallete from "./pages/ColorPallete";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page1":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-1-removed1":
        title = "";
        metaDescription = "";
        break;
      case "/other-things":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page3":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-spinner":
        title = "";
        metaDescription = "";
        break;
      case "/create-spinner2":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page4":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner3":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner1":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-1-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-2-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-3-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-4-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-5-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-1-removed":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-1":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-2":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-3":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-4":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-5":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-6":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-7":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-8":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page5":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page6":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page7":
        title = "";
        metaDescription = "";
        break;
      case "/create-spinner1":
        title = "";
        metaDescription = "";
        break;
      case "/add-friends":
        title = "";
        metaDescription = "";
        break;
      case "/add-friends1":
        title = "";
        metaDescription = "";
        break;
      case "/add-friends2":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner2":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner4":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page2":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page8":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page9":
        title = "";
        metaDescription = "";
        break;
      case "/resturants":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs":
        title = "";
        metaDescription = "";
        break;
      case "/task-oriented-buttons":
        title = "";
        metaDescription = "";
        break;
      case "/navigation-tools":
        title = "";
        metaDescription = "";
        break;
      case "/buttons-and-adders":
        title = "";
        metaDescription = "";
        break;
      case "/spinner-stuffs":
        title = "";
        metaDescription = "";
        break;
      case "/color-pallete":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/spin-home-page1" element={<SpinHomePage4 />} />
      <Route
        path="/dietary-prefs-1-removed1"
        element={<DietaryPrefs1Removed1 />}
      />
      <Route path="/other-things" element={<OtherThings />} />
      <Route path="/spin-home-page3" element={<SpinHomePage3 />} />
      <Route path="/spin-home-page" element={<SpinHomePage31 />} />
      <Route path="/create-spinner" element={<CreateSpinner1 />} />
      <Route path="/create-spinner2" element={<CreateSpinner2 />} />
      <Route path="/spin-home-page4" element={<SpinHomePage41 />} />
      <Route path="/name-spinner3" element={<NameSpinner11 />} />
      <Route path="/name-spinner1" element={<NameSpinner2 />} />
      <Route path="/dietary-prefs-1-added" element={<DietaryPrefs1Added />} />
      <Route path="/dietary-prefs-2-added" element={<DietaryPrefs2Added />} />
      <Route path="/dietary-prefs-3-added" element={<DietaryPrefs3Added />} />
      <Route path="/dietary-prefs-4-added" element={<DietaryPrefs4Added />} />
      <Route path="/dietary-prefs-5-added" element={<DietaryPrefs5Added />} />
      <Route
        path="/dietary-prefs-1-removed"
        element={<DietaryPrefs1Removed />}
      />
      <Route path="/resturants-add-1" element={<ResturantsAdd1 />} />
      <Route path="/resturants-add-2" element={<ResturantsAdd2 />} />
      <Route path="/resturants-add-3" element={<ResturantsAdd3 />} />
      <Route path="/resturants-add-4" element={<ResturantsAdd4 />} />
      <Route path="/resturants-add-5" element={<ResturantsAdd5 />} />
      <Route path="/resturants-add-6" element={<ResturantsAdd6 />} />
      <Route path="/resturants-add-7" element={<ResturantsAdd7 />} />
      <Route path="/resturants-add-8" element={<ResturantsAdd8 />} />
      <Route path="/spin-home-page5" element={<SpinHomePage21 />} />
      <Route path="/spin-home-page6" element={<SpinHomePage11 />} />
      <Route path="/spin-home-page7" element={<SpinHomePage5 />} />
      <Route path="/create-spinner1" element={<CreateSpinner />} />
      <Route path="/add-friends" element={<AddFriends2 />} />
      <Route path="/add-friends1" element={<AddFriends1 />} />
      <Route path="/add-friends2" element={<AddFriends />} />
      <Route path="/name-spinner" element={<NameSpinner3 />} />
      <Route path="/name-spinner2" element={<NameSpinner1 />} />
      <Route path="/name-spinner4" element={<NameSpinner />} />
      <Route path="/spin-home-page2" element={<SpinHomePage2 />} />
      <Route path="/spin-home-page8" element={<SpinHomePage1 />} />
      <Route path="/spin-home-page9" element={<SpinHomePage />} />
      <Route path="/resturants" element={<Resturants />} />
      <Route path="/dietary-prefs" element={<DietaryPrefs />} />
      <Route path="/task-oriented-buttons" element={<TaskOrientedButtons />} />
      <Route path="/navigation-tools" element={<NavigationTools />} />
      <Route path="/buttons-and-adders" element={<ButtonsAndAdders />} />
      <Route path="/spinner-stuffs" element={<SpinnerStuffs />} />
      <Route path="/color-pallete" element={<ColorPallete />} />
    </Routes>
  );
}
export default App;
