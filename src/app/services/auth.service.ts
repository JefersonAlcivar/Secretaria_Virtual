import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'authUser';

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.storageKey, JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  getUser(): any {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }
}
