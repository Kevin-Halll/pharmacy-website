import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
	productsOfType = new Array(136);

	/**
	 * Image used in the hero slide of the home page
	 */
	images = [
		// {
		// 	imageSrc: 'https://healthitanalytics.com/images/site/article_headers/_normal/GettyImages-1035982466.jpg',
		// 	imageAlt: 'nature1',
		// },
		{
			imageSrc: '/assets/img/hero_banner.png',
			imageAlt: 'nature1',
		},
		{
			imageSrc: '/assets/img/hero_banner.png',
			imageAlt: 'nature1',
		},
	];

	/**
	 * Brands used in the hero section
	 */
	brands: { name: string; link?: string; image?: string }[] = [
		{ name: 'Federated Pharmaceutical Co. Ltd.', image: 'https://federatedpharma.com/wp-content/uploads/2017/09/logo.png' },
		{ name: 'Fontana Pharmacy', image: 'https://fontanapharmacy.com/product_images/Fontana%20Jamaica%20Logo%20160%20x%2065.png' },
		{ name: 'York Pharmacy', image: 'https://yorkpharmacyjm.com/wp-content/uploads/sites/109/2017/10/Logo.png' },
		{ name: 'J & J Pharmacy Ltd.', image: 'https://www.jandjpharmacyltd.com/files/2014/02/logo.png' },
		{ name: "Pharma Pack N' Go", image: 'https://pharmapackngo.com/product_images/PharmaPackNGo-Logo-Color.png' },
	];

	constructor() {}

	ngOnInit(): void {}
}
