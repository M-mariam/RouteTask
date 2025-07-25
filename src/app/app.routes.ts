import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CardComponent } from './Components/card/card.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
    {path:'Home', component: HomeComponent},
    {path:'card', component: CardComponent},
    {path: '**', component: NotfoundComponent}

];
