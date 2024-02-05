import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
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
import { HttpClientModule } from '@angular/common/http';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp1Component } from './component/comp1/comp1.component';
import { Comp2Component } from './component/comp2/comp2.component';
import { Comp3Component } from './component/comp3/comp3.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
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
import { ScrollToElementDirective } from './scroll-to-element.directive';
import { environment } from 'src/environments/environment';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent,
    ConcatmapComponent,
    SwitchmapComponent,
    MmCmSmapComponent,
    SwitchMapSearchFComponent,
    ExhaustmapComponent,
    SharereplayComponent,
    CombineLatestComponent,
    ZipComponent,
    ErrorCTComponent,
    ScrollToElementDirective,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
