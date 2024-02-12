import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { MmCmSmapComponent } from './observable/mm-cm-smap/mm-cm-smap.component';
import { SwitchMapSearchFComponent } from './observable/switch-map-search-f/switch-map-search-f.component';
import { ExhaustmapComponent } from './observable/exhaustmap/exhaustmap.component';
import { SharereplayComponent } from './observable/sharereplay/sharereplay.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ZipComponent } from './observable/zip/zip.component';
import { ErrorCTComponent } from './observable/error-ct/error-ct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocsComponent } from './docs/docs.component';



const routes: Routes = [
  {   
    path: 'promise', component: PromiseComponent,
  },
  {
    path:'observable',
    component: ObservableComponent,
    children:[
      { path:'', component: ListComponent},
      { path:'from-event', component:FromEventComponent},
      { path:'interval', component: IntervalComponent },
      { path:'ofFrom', component: OfFromComponent },
      { path:'to-array', component: ToArrayComponent },
      { path:'custom', component: CustomComponent },
      { path:'map', component: MapComponent },
      { path:'pluck', component: PluckComponent},
      { path:'filter', component: FilterComponent},
      { path:'tap', component: TapComponent},
      { path:'take', component: TakeComponent},
      { path:'retry', component: RetryComponent},
      { path:'debouncetime', component: DebouncetimeComponent},
      { path:'subject', component: SubjectComponent },
      { path:'replay-subject', component: ReplaySubjectComponent },
      { path:'async-subject', component: AsyncSubjectComponent },
      { path:'concat', component: ConcatComponent },
      { path:'merge', component: MergeComponent },
      { path:'mergemap', component: MergemapComponent },
      { path:'concatmap', component: ConcatmapComponent },
      { path:'switchmap', component: SwitchmapComponent },
      { path:'MmCmSmap', component: MmCmSmapComponent },
      { path:'exhaustmap', component: ExhaustmapComponent },
      { path:'sharereplay', component: SharereplayComponent },
      { path:'combine-latest', component: CombineLatestComponent },
      { path:'zip', component: ZipComponent },
      { path:'errorCT', component: ErrorCTComponent }
    ]
  },
  {
    path: 'homepage', component: HomepageComponent,
  },
  {
    path: 'docs', component: DocsComponent,
  },
  {
    path:'**', redirectTo:'homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
