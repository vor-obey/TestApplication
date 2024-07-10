import { useState } from "react";
import { container } from "tsyringe";
import { AuthService } from "../services/auth.service.ts";
import { useRouter } from "@tanstack/react-router";

const authService = container.resolve(AuthService);

export const useAuth = () => {
  const [error, setError] = useState<string | null>();
  const router = useRouter();
  const [inProgress, setInProgress] = useState<boolean>(false);

  const onLogin = async (username, password) => {
    setInProgress(true);
    setError(null);
    await authService.login(username, password).subscribe((response) => {
      if (response.success) {
        localStorage.setItem("isAuthenticated", "true");
        setInProgress(false);
        router.navigate({ to: "/" });
      } else {
        setInProgress(false);
        setError(response.message || "Invalid credentials");
      }
    });
  };

  const onLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.navigate({ to: "/login" });
  };

  const isLogged = () => !!localStorage.getItem("isAuthenticated");

  return { onLogin, onLogout, isLogged, inProgress, error };
};

export type AuthContext = ReturnType<typeof useAuth>;
