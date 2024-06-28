import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'http://localhost:9000/api/generate-text';

  constructor(private http: HttpClient) {}

  generateText(userInput: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { userInput });
  }
}
