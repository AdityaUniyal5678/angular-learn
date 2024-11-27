import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly API_BASE_URL = 'https://673c724f96b8dcd5f3fa13b9.mockapi.io/';

  constructor(private httpClient: HttpClient) {}

  /**
   * Creates new user in backend.
   * @param data
   * @returns
   */
  createNewUser(data: any): Observable<any> {
    return this.httpClient.post(`${this.API_BASE_URL}getUsers`, data).pipe(
      map((response) => response),
      catchError((error) => throwError(() => error))
    );
  }
  /**
   * Returns User list from server.
   * @returns {Observable<any>}
   */
  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.API_BASE_URL}getUsers`).pipe(
      map((response) => response),
      catchError((error) => throwError(() => error))
    );
  }

  /**
   * Deletes the user
   * @param {number} id
   * @returns {Observable<any>}
   */
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_BASE_URL}getUsers/` + id).pipe(
      map((response) => response),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }
}
