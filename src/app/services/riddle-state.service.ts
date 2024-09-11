import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {StorageItem} from "../dev-page/dev-page.component";
import {catchError, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RiddleStateService {

  url: string = 'https://quick-server.de/tlRiddleState.php';
  constructor(private http: HttpClient) { }

  storeNewRiddleState(){

    const data = this.fromStorage()
      .map(s => JSON.stringify(s))
      .join('; ')
    console.log(data);

    // Prepare the data in the required format
    const body = `data=${encodeURIComponent(data)}`;

    // Set the appropriate headers for URL-encoded form data
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    // Fire-and-forget: make the POST request without expecting a response
    this.http.post(this.url, body, {headers: headers, responseType: 'text'}).subscribe(
      () => {
        console.log('Request sent successfully.');
      },
      error => {
        console.error('Error sending request:', error);
      }
    );
  }


  private fromStorage(): StorageItem[] {
    return Object.keys(localStorage)
      .map(key => {
        return {
          key: key,
          value: localStorage.getItem(key)
        }
      })

  }
}
