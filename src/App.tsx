import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import CreateSpinner from "./pages/CreateSpinner";
import SpinHomePage from "./pages/SpinHomePage";
import SpinHomePage1 from "./pages/SpinHomePage1";
import SpinHomePage2 from "./pages/SpinHomePage2";
import SpinHomePage3 from "./pages/SpinHomePage3";
import ResturantsAdd8 from "./pages/ResturantsAdd8";
import ResturantsAdd7 from "./pages/ResturantsAdd7";
import ResturantsAdd6 from "./pages/ResturantsAdd6";
import ResturantsAdd5 from "./pages/ResturantsAdd5";
import ResturantsAdd4 from "./pages/ResturantsAdd4";
import ResturantsAdd3 from "./pages/ResturantsAdd3";
import ResturantsAdd2 from "./pages/ResturantsAdd2";
import ResturantsAdd1 from "./pages/ResturantsAdd1";
import Resturants from "./pages/Resturants";
import DietaryPrefs1Removed from "./pages/DietaryPrefs1Removed";
import DietaryPrefs5Added from "./pages/DietaryPrefs5Added";
import DietaryPrefs4Added from "./pages/DietaryPrefs4Added";
import DietaryPrefs3Added from "./pages/DietaryPrefs3Added";
import DietaryPrefs2Added from "./pages/DietaryPrefs2Added";
import DietaryPrefs1Added from "./pages/DietaryPrefs1Added";
import DietaryPrefs from "./pages/DietaryPrefs";
import TaskOrientedButtons from "./pages/TaskOrientedButtons";
import OtherThings from "./pages/OtherThings";
import NavigationTools from "./pages/NavigationTools";
import ButtonsAndAdders from "./pages/ButtonsAndAdders";
import SpinnerStuffs from "./pages/SpinnerStuffs";
import SpinHomePage4 from "./pages/SpinHomePage4";
import CreateSpinner1 from "./pages/CreateSpinner1";
import NameSpinner1 from "./pages/NameSpinner1";
import NameSpinner from "./pages/NameSpinner";
import CreateSpinner2 from "./pages/CreateSpinner2";
import ColorPallete from "./pages/ColorPallete";
import DietaryPrefs1Removed1 from "./pages/DietaryPrefs1Removed1";
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
      case "/create-spinner":
        title = "";
        metaDescription = "";
        break;
      case "/spin-home-page2":
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
      case "/spin-home-page1":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-8":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-7":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-6":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-5":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-4":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-3":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-2":
        title = "";
        metaDescription = "";
        break;
      case "/resturants-add-1":
        title = "";
        metaDescription = "";
        break;
      case "/resturants":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-1-removed":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-5-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-4-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-3-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-2-added":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-1-added":
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
      case "/other-things":
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
      case "/spin-home-page4":
        title = "";
        metaDescription = "";
        break;
      case "/create-spinner1":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner1":
        title = "";
        metaDescription = "";
        break;
      case "/name-spinner":
        title = "";
        metaDescription = "";
        break;
      case "/create-spinner2":
        title = "";
        metaDescription = "";
        break;
      case "/color-pallete":
        title = "";
        metaDescription = "";
        break;
      case "/dietary-prefs-1-removed1":
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
      <Route path="/create-spinner" element={<CreateSpinner />} />
      <Route path="/spin-home-page2" element={<SpinHomePage />} />
      <Route path="/spin-home-page3" element={<SpinHomePage1 />} />
      <Route path="/spin-home-page" element={<SpinHomePage2 />} />
      <Route path="/spin-home-page1" element={<SpinHomePage3 />} />
      <Route path="/resturants-add-8" element={<ResturantsAdd8 />} />
      <Route path="/resturants-add-7" element={<ResturantsAdd7 />} />
      <Route path="/resturants-add-6" element={<ResturantsAdd6 />} />
      <Route path="/resturants-add-5" element={<ResturantsAdd5 />} />
      <Route path="/resturants-add-4" element={<ResturantsAdd4 />} />
      <Route path="/resturants-add-3" element={<ResturantsAdd3 />} />
      <Route path="/resturants-add-2" element={<ResturantsAdd2 />} />
      <Route path="/resturants-add-1" element={<ResturantsAdd1 />} />
      <Route path="/resturants" element={<Resturants />} />
      <Route
        path="/dietary-prefs-1-removed"
        element={<DietaryPrefs1Removed />}
      />
      <Route path="/dietary-prefs-5-added" element={<DietaryPrefs5Added />} />
      <Route path="/dietary-prefs-4-added" element={<DietaryPrefs4Added />} />
      <Route path="/dietary-prefs-3-added" element={<DietaryPrefs3Added />} />
      <Route path="/dietary-prefs-2-added" element={<DietaryPrefs2Added />} />
      <Route path="/dietary-prefs-1-added" element={<DietaryPrefs1Added />} />
      <Route path="/dietary-prefs" element={<DietaryPrefs />} />
      <Route path="/task-oriented-buttons" element={<TaskOrientedButtons />} />
      <Route path="/other-things" element={<OtherThings />} />
      <Route path="/navigation-tools" element={<NavigationTools />} />
      <Route path="/buttons-and-adders" element={<ButtonsAndAdders />} />
      <Route path="/spinner-stuffs" element={<SpinnerStuffs />} />
      <Route path="/spin-home-page4" element={<SpinHomePage4 />} />
      <Route path="/create-spinner1" element={<CreateSpinner1 />} />
      <Route path="/name-spinner1" element={<NameSpinner1 />} />
      <Route path="/name-spinner" element={<NameSpinner />} />
      <Route path="/create-spinner2" element={<CreateSpinner2 />} />
      <Route path="/color-pallete" element={<ColorPallete />} />
      <Route
        path="/dietary-prefs-1-removed1"
        element={<DietaryPrefs1Removed1 />}
      />
    </Routes>
  );
}
export default App;
