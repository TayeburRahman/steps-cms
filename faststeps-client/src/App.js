import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import SignIn from "./components/authentication/SingIn";
import SignUp from "./components/authentication/SingUp";
import Layout from "./components/dashboards/Layout";
import Profile from "./components/dashboards/component/Profile";
import AboutDashboard from "./components/dashboards/component/about/AboutDashboard";
import ContactDashboard from "./components/dashboards/component/contact/ContactDashboard";
import HomeDashboard from "./components/dashboards/component/home/HomeDashboard";
import JoinDashboard from "./components/dashboards/component/join/JoinDashboard";
import Consultation_Services from "./components/dashboards/component/services/Consultation_Services";
import Financial_Management from "./components/dashboards/component/services/Financial_Management";
import Food_Beverage from "./components/dashboards/component/services/Food_Beverage";
import Offices_services from "./components/dashboards/component/services/Offices_services";
import People_Organization from "./components/dashboards/component/services/People_Organization";
import ServiceDashboard from "./components/dashboards/component/services/ServiceDashboard";
import AboutUs from "./components/pages/AboutUs";
import ConsultationServices from "./components/pages/ConsultationServices";
import Contact from "./components/pages/Contact";
import FinancialManagment from "./components/pages/FinancialManagment";
import FoodBeverage from "./components/pages/FoodBeverage";
import Home from "./components/pages/Home";
import JoinUs from "./components/pages/JoinUs";
import PeopleOrganization from "./components/pages/PeopleOrganization";
import Services from "./components/pages/Services";
import ScrollToTop from "./components/shared/ScrollToTop";
import useAuthCheck from "./hooks/useAuthCheck";
function App() {
  const authChecked = useAuthCheck();
  if (authChecked) {
    return (
      <div className="App">
        <ToastContainer />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/consultation" element={<ConsultationServices />} />
            <Route path="/services/food_beverage" element={<FoodBeverage />} />
            <Route path="/services/consultation_services" element={<PeopleOrganization />} />
            <Route path="/services/financial_managment" element={<FinancialManagment />} />

            <Route
              path="/dashboard"
              element={<Layout />}
            >
              <Route path="profile" element={<Profile />} />
              <Route path="home" element={<HomeDashboard />} />
              <Route path="join" element={<JoinDashboard />} />
              <Route path="about" element={<AboutDashboard />} />
              <Route path="contact" element={<ContactDashboard />} />
              <Route
                path="/dashboard/services"
                element={<ServiceDashboard />}
              >
                <Route path="" element={<Offices_services />} />
                <Route path="consultation_services" element={<Consultation_Services />} />
                <Route path="offices_services" element={<Food_Beverage />} />
                <Route path="financial_Management" element={<Financial_Management />} />
                <Route path="offices_services" element={<Offices_services />} />
                <Route path="people_organization" element={<People_Organization />} /> 
              </Route>
            </Route>



            <Route path="/login" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />

          </Routes>
        </ScrollToTop>
      </div>
    );
  } else {
    return <h4>Checking Authentication...</h4>;
  }
}

export default App;
