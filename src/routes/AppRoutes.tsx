import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import '../Custom.css';
import OrganisationList from "../pages/OrganisationList";
import HomePage from "../pages/Homepage";

function AppRoutes() {


  return (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<OrganisationList />} />
            {/* <Route path="/organisation-list" element={<OrganisationList />} />
            <Route path="/add-organisation" element={<AddOrganisation />} />
            <Route path="/view-organisation" element={<ViewOrganisation />} /> */}
          </Routes>
  );
};

export default AppRoutes;
