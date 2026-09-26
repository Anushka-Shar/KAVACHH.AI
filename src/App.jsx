import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Splash from "./pages/Splash";
import RoleSelection from "./pages/RoleSelection";
import CitizenLogin from "./pages/CitizenLogin";
import RescueLogin from "./pages/RescueLogin";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import CitizenDashboard from "./pages/CitizenDashboard";
import RescueDashboard from "./pages/RescueDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ReportDisaster from "./pages/ReportDisaster";
import MyReports from "./pages/MyReports";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import IncidentDetails from "./pages/IncidentDetails";
import RescueIncidentDetails from "./pages/RescueIncidentDetails";
import Profile from "./pages/Profile";

// Newly added public pages (present in the redesigned theme, missing before)
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import LiveMap from "./pages/LiveMap";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live-map" element={<LiveMap />} />

          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/register" element={<Register />} />

          {/* Login Pages */}
          <Route path="/login/citizen" element={<CitizenLogin />} />
          <Route path="/login/rescue" element={<RescueLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />

          {/* Citizen Extra Pages */}
          <Route
            path="/report-disaster"
            element={
              <ProtectedRoute allowedRole="citizen">
                <ReportDisaster />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-reports"
            element={
              <ProtectedRoute allowedRole="citizen">
                <MyReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRole="citizen">
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dashboards */}
          <Route
            path="/citizen/dashboard"
            element={
              <ProtectedRoute allowedRole="citizen">
                <CitizenDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rescue/dashboard"
            element={
              <ProtectedRoute allowedRole="rescue">
                <RescueDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/incident-details"
            element={
              <ProtectedRoute allowedRole="citizen">
                <IncidentDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rescue/incident-details"
            element={
              <ProtectedRoute allowedRole="rescue">
                <RescueIncidentDetails />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


