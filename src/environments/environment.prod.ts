import { ApiMenuService } from 'src/app/services/api-menu.service';
import { MenuService } from 'src/app/services/menu-service';
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  apiUrl: 'https://food-world-backend.herokuapp.com',
  providers: [{ provide: MenuService, useClass: ApiMenuService }],
};
