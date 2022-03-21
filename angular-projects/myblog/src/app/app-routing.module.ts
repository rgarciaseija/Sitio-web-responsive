import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  // TODO: Please expound this line
  //    ng generate articles --route=articles --module=app-routing
  // TODO: Learn more about Angular Routing
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  // this is the default route
  // for example, when the route is localhost:4200/
  //  the users will be routed to the articles
  { path: '', pathMatch: 'full', redirectTo: 'articles'},
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  // { path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  // ** refers or means a wildcard path
  // this means that users will be redirected
  // to articles for any unmatched routes
  { path: '**', redirectTo: 'articles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
