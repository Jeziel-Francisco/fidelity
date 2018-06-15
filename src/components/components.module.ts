import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeaderTitleComponent } from './header-title/header-title';
import { UserInfoComponent } from './user-info/user-info';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
	declarations: [
		HeaderTitleComponent,
		UserInfoComponent,
		ProgressBarComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		HeaderTitleComponent,
		UserInfoComponent,
		ProgressBarComponent
	]
})
export class ComponentsModule { }
