import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { Person } from 'src/person';

@Controller('v2')
export class V2Controller {
  constructor(private readonly apiService: ApiService) {}
  @Post()
  createPerson(@Body() person: Person) {
    this.apiService.setPerson(person);
  }

  @Get()
  getPersons() {
    return this.apiService.getPersons();
  }

  @Delete(':id')
  deletePersons(@Param() params) {
    return this.apiService.deletePersons(params.id);
  }
}
