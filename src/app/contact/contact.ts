import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
id: any;
// we use the dependency injection
constructor(private route: ActivatedRoute) {
this.route.paramMap.subscribe((paramMap) => {
// we call for 'id' parameter, the same name used in the route
this.id = paramMap.get("id");
});
}
}
