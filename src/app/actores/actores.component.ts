import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {

  displayedColumns: string[] = ['name', 'popularity'];
  listadoPeople = new MatTableDataSource();

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe(resp => {
      this.listadoPeople.data = resp.results;
    })
  }

}
