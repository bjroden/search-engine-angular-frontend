import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/dataModels/SearchResult';
import { QueryService } from 'src/app/services/query-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  results: SearchResult[] = []

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this.queryService.getSearchResults().subscribe(
      results => this.results = results
    )
  }

}
