import { Provider } from '@angular/core';

export interface Environment {
  production: boolean;
  apiUrl: string;
  providers?: Provider[];
}
