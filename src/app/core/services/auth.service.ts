import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '@core/models';

interface IResponseAuth {
  token: string,
  user: User,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uri: string;
  private userCurrent!: User;
  constructor(private http: HttpClient) {
    this.uri = `${environment.urlServer}/auth`;
  }

  public signin(email: string, password: string): Observable<boolean> {
    return this.http.post<IResponseAuth>(`${this.uri}/signin`, { email, password })
      .pipe(
        tap(resp => this.setDataAuth(resp)),
        map(resp => resp.token ? true : false),
        catchError(err => of(false))
      );
  }

  public verifyToken(): Observable<boolean> {
    return this.http.get<IResponseAuth>(`${this.uri}/user`)
      .pipe(
        tap(resp => this.setDataAuth(resp)),
        map(resp => resp.token ? true : false),
        catchError(err => of(false)),
      );
  }

  private setDataAuth(data: IResponseAuth): void {
    localStorage.setItem('gi-token', data.token);
    this.userCurrent = data.user;
  }
}
