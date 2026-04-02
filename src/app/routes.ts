import { createBrowserRouter } from "react-router";
import LoginScreen from "./components/auth/LoginScreen";
import SignUpScreen from "./components/auth/SignUpScreen";
import OnboardingScreen1 from "./components/onboarding/OnboardingScreen1";
import OnboardingScreen2 from "./components/onboarding/OnboardingScreen2";
import OnboardingScreen3 from "./components/onboarding/OnboardingScreen3";
import HomeScreen from "./components/auth/HomeScreen";
import ForgotPasswordPhone from "./components/auth/ForgotPasswordPhone";
import ForgotPasswordCode from "./components/auth/ForgotPasswordCode";
import ForgotPasswordReset from "./components/auth/ForgotPasswordReset";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: OnboardingScreen1,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/signup",
    Component: SignUpScreen,
  },
  {
    path: "/forgot-password",
    Component: ForgotPasswordPhone,
  },
  {
    path: "/forgot-password/code",
    Component: ForgotPasswordCode,
  },
  {
    path: "/forgot-password/reset",
    Component: ForgotPasswordReset,
  },
  {
    path: "/onboarding/1",
    Component: OnboardingScreen1,
  },
  {
    path: "/onboarding/2",
    Component: OnboardingScreen2,
  },
  {
    path: "/onboarding/3",
    Component: OnboardingScreen3,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
]);