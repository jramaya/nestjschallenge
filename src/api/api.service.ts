import { Injectable } from '@nestjs/common';
import { Person } from 'src/person';

@Injectable()
export class ApiService {
  persons: Array<Person> = [
    {
      id: 1,
      name: "Aldo",
      age: 21
    },
    {
      id: 2,
      name: "Kate",
      age: 28
    }
  ];


  getPersons(): Array<Person> {
    return this.persons.filter(n=>n);
  }

  setPerson(person: Person) {
    this.persons.push(person);
  }

  deletePersons(id: number) {
    delete this.persons[this.persons.findIndex(n => n?.id == id)];
  }
}
