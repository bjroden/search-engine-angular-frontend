import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SearchResult } from '../dataModels/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  searchResults$: Subject<SearchResult[]> = new Subject();

  constructor(private http: HttpClient) { }

  makeSearch(query: string): void {
    this.http.get<SearchResult[]>('/api').subscribe({
      next: results => this.sendSearchResults(results),
      error: error => console.log(error)
    });
  }

  sendSearchResults(results: SearchResult[]): void {
    this.searchResults$.next(results);
  }

  getSearchResults(): Subject<SearchResult[]> {
    return this.searchResults$;
  }
}
