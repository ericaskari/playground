import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { TodoModel } from "./Todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'class-instance-constructor';

  data$ = this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
    .pipe(map(todo => {
      const realUsers = plainToClass(TodoModel, todo);
      console.log(realUsers)
      return realUsers;
    }));


  constructor(private httpClient: HttpClient) {

  }
}
