import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const home: Route = {
  path: '',
  loadChildren: () => import('./pages/home/home.module').then((mod) => mod.HomeModule),
};

const about: Route = {
  path: 'about',
  loadChildren: () => import('./pages/about/about.module').then((mod) => mod.AboutModule),
};

const notFound: Route = {
  path: '**',
  loadChildren: () => import('./pages/not-found/not-found.module').then((mod) => mod.NotFoundModule),
};

const routes: Routes = [home, about, notFound];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'disabled',
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
