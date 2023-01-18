import { Injectable } from '@nestjs/common';
import {ValidationService} from "./validation/validation.service";
import {ValidationEntity} from "./validation/validation.entity";

@Injectable()
export class AppService {

  constructor(private validationService: ValidationService) {}

  getAllValidation(): Promise<ValidationEntity[]> {
    return this.validationService.getAll();
  }
}
