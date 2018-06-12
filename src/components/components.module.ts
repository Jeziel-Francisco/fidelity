import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeaderTitleComponent } from './header-title/header-title';
import { UserInfoComponent } from './user-info/user-info';

@NgModule({
	declarations: [
		HeaderTitleComponent,
		UserInfoComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		HeaderTitleComponent,
		UserInfoComponent
	]
})
export class ComponentsModule { }
