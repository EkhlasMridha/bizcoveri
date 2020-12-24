import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
  displayedColumns2: string[] = ['name', 'weight', 'symbol', 'position'];
  dataSource = ELEMENT_DATA;
  constructor () { }

  ngOnInit(): void {
    console.log(this.project.tableConf);
    this.displayedColumns = this.initializeColumns(this.project.tableConf);
  }

  initializeColumns(columns: Partial<ColumnConfig>[]) {
    let columnList: string[] = [];
    columns.forEach(col => {
      columnList.push(col.cellId);
    });
    columnList.push('action');
    console.log(columnList);
    return columnList;
  }
}
