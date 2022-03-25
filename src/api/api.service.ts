import { Injectable } from '@nestjs/common';
import { Person } from 'src/person';

@Injectable()
export class ApiService {
  persons: Array<Person> = [];

  getPersons(): Array<Person> {
    return this.persons;
  }

  setPerson(person: Person) {
    console.log(person)
      this.persons.push(person);
  }
}
