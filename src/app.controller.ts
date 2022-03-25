import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get() @Redirect('v2', 301) getAPI() {}
}
