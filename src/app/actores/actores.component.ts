import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements AfterViewInit  {
  imagenUrl:string='https://image.tmdb.org/t/p/original';
  displayedColumns: string[] = ['name', 'popularity', 'profile_path'];
  listadoPeople = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private peopleService: PeopleService) { }
  ngAfterViewInit(): void {
    this.listadoPeople.paginator = this.paginator;
      this.peopleService.getPeopleList().subscribe(resp => {
        this.listadoPeople.data = resp.results;
      })
  }

  // ngOnInit(): void {
  //   this.peopleService.getPeopleList().subscribe(resp => {
  //     this.listadoPeople.data = resp.results;
  //   })
  // }

}
