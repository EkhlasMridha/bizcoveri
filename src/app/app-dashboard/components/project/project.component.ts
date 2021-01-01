import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnConfig, ProjectCategory } from '../../configs/category.project';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProjectComponent implements OnInit {
  @Input() project: ProjectCategory;
  displayedColumns: string[] = [];
  displayedColumns2: string[] = ['name', 'weight', 'symbol', 'position', 'action'];
  dataSource = ELEMENT_DATA;
  constructor (private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayedColumns = this.initializeColumns(this.project.tableConf);
  }

  initializeColumns(columns: Partial<ColumnConfig>[]) {
    let columnList: string[] = [];
    columns.forEach(col => {
      columnList.push(col.cellId);
    });
    return columnList;
  }

  navigateTo(route: string, param: any) {
    if (route) {
      this.router.navigate([route], { relativeTo: this.route, queryParams: { p_step: param } });
    }
  }
}
