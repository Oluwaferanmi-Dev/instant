import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import CustomerLayout from "./components/layout/CustomerLayout";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import SearchPage from "./pages/customer/SearchPage";
import ProviderProfilePage from "./pages/customer/ProviderProfilePage";
import BookingFlowPage from "./pages/customer/BookingFlowPage";
import BookingDetailsPage from "./pages/customer/BookingDetailsPage";
import CustomerMessagesPage from "./pages/customer/CustomerMessagesPage";
import NotificationsPage from "./pages/customer/NotificationsPage";
import CustomerSettingsPage from "./pages/customer/CustomerSettingsPage";
import PaymentPage from "./pages/customer/PaymentPage";
import ReviewPage from "./pages/customer/ReviewPage";
import ProviderLayout from "./components/layout/ProviderLayout";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import ProviderRequestsPage from "./pages/provider/ProviderRequestsPage";
import ProviderServicesPage from "./pages/provider/ProviderServicesPage";
import ProviderMessagesPage from "./pages/provider/ProviderMessagesPage";
import ProviderEarningsPage from "./pages/provider/ProviderEarningsPage";
import ProviderSettingsPage from "./pages/provider/ProviderSettingsPage";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminVerificationsPage from "./pages/admin/AdminVerificationsPage";
import AdminBookingsPage from "./pages/admin/AdminBookingsPage";
import LegalPage from "./pages/LegalPage";

export const router = createBrowserRouter([
  { path: "/", Component: LandingPage },
  { path: "/login", Component: LoginPage },
  { path: "/signup", Component: SignupPage },
  { path: "/forgot-password", Component: ForgotPasswordPage },
  { path: "/privacy", Component: LegalPage },
  { path: "/terms", Component: LegalPage },
  {
    path: "/customer",
    Component: CustomerLayout,
    children: [
      { index: true, Component: CustomerDashboard },
      { path: "search", Component: SearchPage },
      { path: "provider/:id", Component: ProviderProfilePage },
      { path: "book/:id", Component: BookingFlowPage },
      { path: "booking/:id", Component: BookingDetailsPage },
      { path: "messages", Component: CustomerMessagesPage },
      { path: "notifications", Component: NotificationsPage },
      { path: "settings", Component: CustomerSettingsPage },
      { path: "payment/:id", Component: PaymentPage },
      { path: "review/:id", Component: ReviewPage },
    ],
  },
  {
    path: "/provider",
    Component: ProviderLayout,
    children: [
      { index: true, Component: ProviderDashboard },
      { path: "requests", Component: ProviderRequestsPage },
      { path: "services", Component: ProviderServicesPage },
      { path: "messages", Component: ProviderMessagesPage },
      { path: "earnings", Component: ProviderEarningsPage },
      { path: "settings", Component: ProviderSettingsPage },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "users", Component: AdminUsersPage },
      { path: "verifications", Component: AdminVerificationsPage },
      { path: "bookings", Component: AdminBookingsPage },
    ],
  },
]);
