import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api/api.service';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ApiService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

});
