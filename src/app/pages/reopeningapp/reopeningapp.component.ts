import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface BizData {
  id: string;
  name: string;
  address: string;
  approval: 'green' | 'yellow' | 'red';
}
@Component({
  selector: 'app-reopening-list',
  styleUrls: ['./reopeningapp.component.scss'],
  templateUrl: './reopeningapp.component.html'
})
export class ReopeningListComponent implements AfterViewInit {
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
    ) { }
  data: Array<BizData>;
  fullScreen = false;
  iframeVis = false;
  isLoadingResults = false;
  cols: Array<any> = ['label', 'pubDate'];
  selection = new SelectionModel<BizData>(false, []);
  filterValue;
  selectedDoc: BizData | null;
  resultsLength = 0;
  dataSource = new MatTableDataSource<BizData>();
  sideStatus = false;
  textHide = true;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatInput, {static: true}) input: MatInput;
  setDocsControl = new FormControl();
  expandedElement: BizData | null;
  @Output() readonly groupChange: EventEmitter<string> = new EventEmitter<string>();
  isExpansionDetailRow = (i: number, row: BizData) => row.hasOwnProperty('expanded');
  ngAfterViewInit(): void {
      this.route.queryParams.pipe(
        filter(params => params.id)
      )
      .subscribe(params => {
        console.log(params); // {order: "popular"}
      });
    }
  applyFilter(text = ''): void {
    this.dataSource.filter = text.trim()
      .toLowerCase();
    if (text === '') { this.input.value = ''; }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  download(doc: BizData): any {
    window.open(`https://drive.google.com/uc?export=download&id=${doc.id}`, '_blank');
  }
  shrinkSideNav(): void {
    this.sideStatus = !this.sideStatus;
    this.textHide = !this.textHide;
  }
  setExpanded(row: BizData): void {
    // tslint:disable-next-line: no-null-keyword
    this.expandedElement === row ? this.expandedElement = null : this.expandedElement = row;
  }
}
