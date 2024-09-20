import SideBar from "./components/SideBar";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

export default function App() {
  return (
    <div>
      <SideBar />
      <Link to="/dropdown">go to Dropdown</Link>
      <hr />
      <Link to="/accordion">go to Accordion!</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}
