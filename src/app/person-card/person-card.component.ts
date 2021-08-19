import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonService } from '../Services/person.service';
import { Person } from '../Interfaces/person.interface';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void{

  }

  @Output() enviar: EventEmitter<string> = new EventEmitter<string>();

  @Input() person!: Person;

  borrarPerson(){
    console.log('soy el hijo' + this.person.id)
    this.enviar.emit(this.person.id)
  }

}
