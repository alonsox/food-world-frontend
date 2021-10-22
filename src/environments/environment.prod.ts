import { ApiMenuService } from 'src/app/services/api-menu.service';
import { MenuService } from 'src/app/services/menu-service';
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  apiUrl: 'http://www.localhost:8000', // TODO: Change for final URL
  providers: [{ provide: MenuService, useClass: ApiMenuService }],
};
