import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

import { ApiService } from '../../service/app.service';
import { ArchiveBusiness } from '../../service/app.archive.business';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule],
    declarations: [FormComponent],
    providers: [ArchiveBusiness,ApiService]

})
export class FormModule {}
