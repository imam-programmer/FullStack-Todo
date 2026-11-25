import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./root/RootLayout";
import HomePage from "./components/HomePage";
import { EmailVerifyView } from "./components/EmailVerifyView";
import { ForgotPasswordView } from "./components/ForgotPasswordView";
import { LoginView } from "./components/LoginView";
import { ResetPasswordView } from "./components/ResetPasswordView";
import { TodoView } from "./components/TodoView";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "email-verify", Component: EmailVerifyView },
      { path: "todo-view", Component: TodoView },
    ],
  },
  { path: "login", Component: LoginView },
  { path: "forgot-password", Component: ForgotPasswordView },
  { path: "reset-password", Component: ResetPasswordView },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
