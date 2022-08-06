import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query-service.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  query: string = ""

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeQuery(): void {
    this.queryService.makeSearch(this.query);
  }
}
