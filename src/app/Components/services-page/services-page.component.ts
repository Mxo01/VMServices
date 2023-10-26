import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  constructor(private router: Router) {}

  zoom(e: Event): void {
    const target = (e.target as HTMLElement).parentElement?.previousSibling as HTMLImageElement;
    target.style.transform = 'scale(2)';
    this.router.navigate(['/info', { id: target.id }]);
  }
}
