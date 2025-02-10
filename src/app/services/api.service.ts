import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = '';

  http = inject(HttpClient);
  httpOptions = {
    'Content-Type': 'application/json',
    'Bearer token': '',
  };

  get(url: string) {
    this.http.get(url);
  }

  put(url: string, payload: any) {
    this.http.put(url, payload);
  }

  post(url: string, payload: any) {
    this.http.post(url, payload);
  }
}
