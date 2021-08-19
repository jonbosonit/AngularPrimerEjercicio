import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../Interfaces/person.interface';
import { PersonService } from '../Services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  //person: Person | undefined;
  @Input() person!: Person;

  constructor(private personService: PersonService,
              private route: ActivatedRoute){}

  ngOnInit(): void{
    this.getPersona();
  }

  getPersona(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10)
    this.personService.getPersona(id).subscribe(person => this.person = person)
  }

  


}
