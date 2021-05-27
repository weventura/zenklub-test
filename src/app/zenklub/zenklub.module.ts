import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

// Components
import { HomeComponent } from './pages/home/home.component';

// Modules
import { ZenklubRoutingModule } from './zenklub.routing.module';
import { SharedModule } from '../shared/shared.module';

// Services
import { ProfileService } from '../services/profile/profile.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
    ZenklubRoutingModule
  ],
  providers: [ProfileService]
})
export class ZenklubModule { }
