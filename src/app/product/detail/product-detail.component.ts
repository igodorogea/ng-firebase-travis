import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  product$ = this.dataSvc.getProduct(this.route.snapshot.params.id);
  routes = appRoutes;

  constructor(
    private dataSvc: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
