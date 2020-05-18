import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutIndexComponent } from './about-index/about-index.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: AboutIndexComponent,
};

const routes: Routes = [home];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
