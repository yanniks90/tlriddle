import { Routes } from '@angular/router';
import {TeilZweiComponent} from "./teil-zwei/teil-zwei.component";
import {TeilEinsComponent} from "./teil-eins/teil-eins.component";
import {TeilDreiComponent} from "./teil-drei/teil-drei.component";
import {DevPageComponent} from "./dev-page/dev-page.component";
import {TeilVierComponent} from "./teil-vier/teil-vier.component";
import {LastPageComponent} from "./last-page/last-page.component";


export const DEV_PAGE = 'devPage';
export const routes: Routes = [
  {path:'', component: TeilEinsComponent},
  {path:'teilZwei', component: TeilZweiComponent},
  {path:'teilDrei', component: TeilDreiComponent},
  {path:'teilVier', component: TeilVierComponent},
  {path:'ende', component: LastPageComponent},
  {path: DEV_PAGE, component: DevPageComponent}
];
