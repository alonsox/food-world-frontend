import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Environment } from 'src/environments/environment.interface';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements Environment {
  constructor() {}

  get production(): boolean {
    return environment.production;
  }
  get apiUrl(): string {
    return environment.apiUrl;
  }
}
