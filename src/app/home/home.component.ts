import { Component, OnInit, ViewChildren } from '@angular/core';
import { ProductService } from '../services/products.service';

import { Product } from '../models/product.model';
import { Subcategory } from '../models/subcategory.model';
import { CartService } from '../cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SubcategoryService } from '../services/subcategories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	tabChangeEvent?: MatTabChangeEvent;
	Category: Subcategory[] = [];
	Category_currentPage = 0;
	cart: any[] = [];
	pageLimit1 = 8;
	pageLimit2 = 5;
	Product: any;

	
	public get pageLimit() : number {
		return this.width <= 1024 && this.width > this.height ? this.pageLimit1 : this.width > this.height && this.width > 1024 ? this.pageLimit1 : this.pageLimit2;
	}
	
	public set pageLimit(v : number) {		
		if (this.width > this.height && this.width > 1024) this.pageLimit1 = v;
		else if (this.width <= 1024 && this.width < this.height) this.pageLimit2 = v;
		else this.pageLimit1 = v;
	}

	
	public get height() : number {
		return window.innerHeight;
	}
	public get width() : number {
		return window.innerWidth;
	}
	

	constructor(private subcategoryService: SubcategoryService, private productService: ProductService, private router: Router, private route: ActivatedRoute, private cartService: CartService, private succcessPopup: MatSnackBar, public dialog: MatDialog) {}

	ngOnInit() {
		this.startUp();
	}

	startUp() {
		this.productService.getAll().subscribe((data: Product[]) => {
			this.Category = data.filter((value) => {
				return value.name == Subcategory.name;
			});
			// this.entrees = data.filter((value) => {
			// 	return value.category == Category.ENTREE;
			// });
			// this.sides = data.filter((value) => {
			// 	return value.category == Category.SIDE;
			// });
			// this.desserts = data.filter((value) => {
			// 	return value.category == Category.DESSERT;
			// });
			// this.beverages = data.filter((value) => {
			// 	return value.category == Category.BEVERAGE;
			// });
		});
	}

	changePage(event: any, property: string) {
		this[(property + '_currentPage') as keyof this] = event.pageIndex;
		this.pageLimit = event.pageSize;
	}

	tabChangeEventHandler(event: MatTabChangeEvent): void {
		this.tabChangeEvent = event;
	}

	addProduct(id: number): void {
		this.cartService.addCartItem(id);
		this.succcessPopup.open('Added to cart', 'Okay', {
			panelClass: ['hazel-snackbar'],
			duration: 2000,
		});

		this.productService.get(id).subscribe((product: Product) => {
			let dialogConfig: MatDialogConfig = {
				panelClass: 'modal',
				height: 'max-content',
				width: '70%',
			};

			// if (this.tabChangeEvent == undefined) {
			//     // Use here to select the products category to upsell for the first tab
			//     this.dialog.open(SideOrderModalComponent, {
			//         data: { category: Category.SIDE, product },
			//         ...dialogConfig,
			//     });
			// }

			if (this.tabChangeEvent) {
				switch (this.tabChangeEvent.tab.textLabel.toLowerCase()) {
					// Use above where `this.tabChangeEvent == undefined` is for the first tab.
					// case 'sides':
					// case 'beverages':
					// case 'appetizers':
					//     this.dialog.open(SideOrderModalComponent, {
					//         data: { category: Category.ENTREE, product },
					//         ...dialogConfig,
					//     });
					//     break;
					// case 'entrees':
					// 	this.dialog.open(SideOrderModalComponent, {
					// 		data: { category: Category.SIDE, product },
					// 		...dialogConfig,
					// 	});
					// 	break;
					// case 'desserts':
					//     this.dialog.open(SideOrderModalComponent, {
					//         data: { category: Category.BEVERAGE, product },
					//         ...dialogConfig,
					//     });
					//     break;
				}
			}
		});
	}
}
