import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; 
import { AppRoutingModule } from './app/app.routes'; 

platformBrowserDynamic()
  .bootstrapModule(AppModule) 
  .catch(err => console.error('Error durante el arranque de la aplicación:', err));
