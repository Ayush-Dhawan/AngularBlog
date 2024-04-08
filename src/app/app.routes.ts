import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'category', component: SingleCategoryComponent},
    {path: 'post', component: SinglePostComponent},
    {path: 'about', component: TermsConditionsComponent},
    {path: 'contact', component: ContactComponent}
];
