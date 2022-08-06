import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SearchResult } from '../dataModels/SearchResult';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  searchResults$: Subject<SearchResult[]> = new Subject();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  makeSearch(query: string): void {
    this.http.get<SearchResult[]>(`/api?query=${query}`).subscribe({
      next: results => this.sendSearchResults(results),
      error: error => this.logError(error.message)
    });
  }

  sendSearchResults(results: SearchResult[]): void {
    if (results.length <= 0) {
      this.logError("No results for query");
    }
    else {
      this.searchResults$.next(results);
    }
  }

  getSearchResults(): Subject<SearchResult[]> {
    return this.searchResults$;
  }

  logError(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: "Error",
      detail: message
    })
  }
}
