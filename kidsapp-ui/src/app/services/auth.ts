import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // Mock implementation - replace with real API call
    const mockUser = { 
      email, 
      name: 'Test User',
      token: 'mock-jwt-token' 
    };
    
    return of(mockUser).pipe(
      tap(user => {
        localStorage.setItem('token', user.token);
        this.currentUser.next(user);
      }),
      catchError(error => {
        this.handleError('Login failed', error);
        throw error;
      })
    );
  }

  register(user: { email: string; password: string; name: string }): Observable<any> {
    // Mock implementation
    const mockResponse = {
      ...user,
      token: 'mock-jwt-token'
    };
    
    return of(mockResponse).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.currentUser.next(response);
      }),
      catchError(error => {
        this.handleError('Registration failed', error);
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUser.next(null);
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    // You could add error notifications here
  }
}