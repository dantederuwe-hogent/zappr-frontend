import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiscoverComponent } from "./series/discover/discover.component";
import { SeriesDetailComponent } from "./series/series-detail/series-detail.component";
import { FavoriteSeriesComponent } from "./series/favorite-series/favorite-series.component";
import { LoginComponent } from "./users/login/login.component";
import { AuthGuard } from "./users/auth.guard";

const routes: Routes = [
  { path: "discover", component: DiscoverComponent },
  {
    path: "favorites",
    canActivate: [AuthGuard],
    component: FavoriteSeriesComponent,
  },
  { path: "series/:id", component: SeriesDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "discover", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
