import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CardComponent } from './Components/card/card.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    { path: 'products/:id', component: ProductDetailsComponent },
    {path:'card', component: CardComponent},
    {path: '**', component: NotfoundComponent}

];
