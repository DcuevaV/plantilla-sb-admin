import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ArchiveBusiness } from '../../service/app.archive.business';
import { Archive } from '../../model/archive';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    providers: [ArchiveBusiness],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    archives: Archive[] = [];
    
    constructor(
        private archiveBusiness: ArchiveBusiness
    ) {}

    ngOnInit() {
        this.archiveBusiness
        .getAllTodos()
        .subscribe(
            (archives) => {
            this.archives = archives;
            }
        );
    }
}
