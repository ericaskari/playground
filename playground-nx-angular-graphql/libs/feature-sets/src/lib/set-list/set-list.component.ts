import { Component, OnInit } from '@angular/core';
import { Set, SetListGQL } from '@nx-angular-graphql/data-access';
import { map } from 'rxjs/operators';

@Component({
    selector: 'nx-angular-graphql-set-list',
    templateUrl: './set-list.component.html',
    styleUrls: ['./set-list.component.css']
})
export class SetListComponent {
    sets$ = this.setListGQL.watch().valueChanges.pipe(map((result) => result.data.allSets));

    constructor(private setListGQL: SetListGQL) {}
}
