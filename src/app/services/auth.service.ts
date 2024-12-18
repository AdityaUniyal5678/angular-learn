import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly API_LOGIN_URL = 'http://192.168.1.6/school_backend/api/';
  userToken$ = new BehaviorSubject<string | null>('');

  constructor(private httpClient: HttpClient) {}

  /**
   * user login with email and password.
   * @param payload
   * @returns {Observable<any>}
   */
  login(payload: any): Observable<any> {
    return this.httpClient
      .post(`${this.API_LOGIN_URL}users/signIn.json`, payload)
      .pipe(
        map((response: any) => {
          if (response?.['status']) {
            localStorage.setItem('accessToken', response?.['body']['token']);
            this.userToken$.next(response?.['body']['token']);
          }
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }

  /** Description placeholder */
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.clear();
    this.userToken$.next('');
  }

  /**
   * Returns token from either localStorage or userToken$.
   *
   * @returns {(string | null)}
   */
  getToken(): string | null {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('accessToken')
    ) {
      this.userToken$.next(
        localStorage.getItem('accessToken') as string | null
      );
    }
    return this.userToken$.getValue();
  }
}
