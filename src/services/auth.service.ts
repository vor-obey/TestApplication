import { injectable } from "@ditsmod/core";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

// @injectable()
export class AuthService {
  login(username: string, password: string): Observable<LoginResponse> {
    return of({ username, password }).pipe(
      delay(1000),
      map((credentials) => {
        if (
          credentials.username === "admin@test.com" &&
          credentials.password === "password"
        ) {
          return { success: true, token: "fake-jwt-token" };
        } else {
          return { success: false, message: "Invalid credentials" };
        }
      }),
    );
  }
}
