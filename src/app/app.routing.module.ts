import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'zenklub', pathMatch: 'full' },
    {
        path: 'zenklub',
        loadChildren: () => import('./zenklub/zenklub.module').then(module => module.ZenklubModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
