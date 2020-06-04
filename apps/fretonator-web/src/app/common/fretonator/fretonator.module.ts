import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { DisplayScaleDegreesPipe } from './display-scale-degrees.pipe';
import { ChordMapModule } from './chord-map/chord-map.module';
import { IntervalMapModule } from './interval-map/interval-map.module';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
    DisplayScaleDegreesPipe,
  ],
  imports: [
    CommonModule,
    ChordMapModule,
    IntervalMapModule
  ],
  exports: [
    FretonatorComponent
  ]
})
export class FretonatorModule {
}
