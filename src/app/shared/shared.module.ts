import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { ContentChildComponent } from './content-child/content-child.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ContentComponent,
    ContentChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ContentComponent
  ]
})
export class SharedModule { }
