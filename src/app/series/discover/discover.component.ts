import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Series } from "../series.model";
import { SeriesdataService } from "../seriesdata.service";

@Component({
  selector: "discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"],
})
export class DiscoverComponent implements OnInit {
  public today$: Observable<Series[]>;
  public thisweek$: Observable<Series[]>;

  public searchresults: Series[];
  public loading: boolean;

  constructor(private _seriesdataService: SeriesdataService) {}

  ngOnInit() {
    this.today$ = this._seriesdataService.today$("US");
    this.thisweek$ = this._seriesdataService.schedule$("US", 1, 7);
  }
}
