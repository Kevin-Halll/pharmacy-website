import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-header',
	template: `
		<header>
			<!-- <div class="header transition-all p-5" id="main-nav"> -->
			<div class="header transition-all shadow-2xl bg-gradient-to-r from-[#2b2a2a38] via-[#00000044] to-[#00000048] p-5" id="main-nav  ">
				<mat-toolbar>
					<div class="m-h-inner flex flex-wrap md:flex-nowrap md:justify-around w-full">
						<div class="flex justify-left flex-row logo w-full md:w-fit   ">
							<a>
								<div
									class="w-fit flex items-center gap-x-5 mx-auto md:mr-auto
 ">
									<img src="assets/img/logo.jpg" />
									<span> Amber Pharma </span>
								</div>
							</a>
						</div>
						<div class="navigation flex md:justify-end mx-auto md:mx-0  ">
							<!-- <button
                                    mat-button
                                    class="no-hover-effect"
                                    routerLink="/"
                                >
                                    Home
                                </button> -->

							<button mat-button class="no-hover-effect" routerLink="/home">Home</button>
							<button mat-button class="no-hover-effect" routerLink="/products">Product</button>
							<button mat-button class="no-hover-effect" routerLink="/aboutus">About Us</button>
							<button mat-button class="no-hover-effect " routerLink="/about">Contact Us</button>

							<button mat-button class="no-hover-effect  " routerLink="/cart">
								<mat-icon [matBadge]="cartService.getCartCount() > 0 ? cartService.getCartCount() : null">shopping_cart</mat-icon>
							</button>
						</div>
					</div>
				</mat-toolbar>
			</div>
		</header>
	`,
	styles: [
		`
			.active {
				color: blue;
			}
			.header {
				width: 100%;
				position: fixed;
				z-index: 999;
				top: 0;
			}
			::ng-deep .mat-badge-content {
				background: rgba(0, 0, 0, 0.5);
				color: #fff;
			}
			.main-container {
				min-width: 7;
				margin: 0 auto;
			}

			/* .secondary-header {
                width: 100%;
                background-color: #231942;
                font-size: 14px;
                color: #fff;
            } */

			/* .s-h-inner {
                width: 100%;
                height: auto;
                padding: 0.5rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            } */
			/* 
            .m-h-inner {
                width: 100%;
                height: auto;
                display: flex;

                justify-content: space-between;
                align-items: center;
            } */
			/* 
            .header-location {
                display: flex;
                align-items: center;
            }

            .header-location svg {
                width: 15px;
                fill: #fff;
                margin-right: 0.5rem;
            } */
			::ng-deep .mat-toolbar-row,
			.mat-toolbar-single-row {
				min-height: 88px;
				justify-content: space-between;
				padding: 0 !important;
				background-color: transparent;
			}

			.logo a {
				display: block;
				width: 100%;
				height: 100%;
				font-family: 'Inter';
				color: white;
				text-decoration: none;
			}
			.navigation button {
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 2px;
			}
			.navigation ::ng-deep .mat-button {
				color: white;
			}

			.navigation ::ng-deep .mat-button:hover {
				color: white;
			}

			::ng-deep .mat-button-ripple.mat-ripple {
				display: none !important;
			}

			.sticky-nav {
				background: white !important;
			}

			.sticky-nav .logo a,
			.sticky-nav .navigation ::ng-deep .mat-button {
				color: #3182ce;
			}
			.header-change {
				background: #3182ce;
				display: block;
				position: relative;
			}
		`,
	],
})
export class HeaderComponent implements OnInit {
	constructor(public cartService: CartService, private router: Router) {}

	ngOnInit() {
		this.routerCheck();
	}

	routerCheck() {
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
			if (this.router.url == '/home') {
				let navMenu = document.querySelector('.header');
				navMenu?.classList.remove('header-change');
				window.onscroll = () => {
					let body = document.querySelector('body') as HTMLBodyElement;
					if (window.pageYOffset > 600 && true) {
						navMenu?.classList.add('sticky-nav');
					} else {
						navMenu?.classList.remove('sticky-nav');
						body.style.margin = '0';
					}
				};
			} else {
				let navMenu = document.querySelector('.header');
				navMenu?.classList.add('header-change');
			}
		});
	}
}
