import { registerEnumType } from '@nestjs/graphql';

export enum ProductType {
	STANDARD = 'STANDARD', 		// Classic all-purpose bikes
	CRUISER = 'CRUISER', 		// Harley-style low seat, long body
	SPORT = 'SPORT', 			// High-speed, performance bikes
	TOURING = 'TOURING', 		// Long-distance comfort motorcycles
	DUAL_SPORT = 'DUAL SPORT', 	// On-road + off-road
	ADVENTURE = 'ADVENTURE', 	// Big off-road touring bikes
	OFF_ROAD = 'OFF ROAD', 		// Dirt bikes, motocross
	SCOOTER = 'SCOOTER', 		// Lightweight, automatic transmission
	MOPED = 'MOPED', 			// Small engine, pedal-like
	CAFE_RACER = 'CAFE RACER', 	// Retro-style lightweight racer
}

registerEnumType(ProductType, {
	name: 'ProductType',
});

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
	name: 'ProductStatus',
});

export enum ProductLocation {
	ALABAMA = 'ALABAMA',
	ALASKA = 'ALASKA',
	ARIZONA = 'ARIZONA',
	ARKANSAS = 'ARKANSAS',
	CALIFORNIA = 'CALIFORNIA',
	COLORADO = 'COLORADO',
	CONNECTICUT = 'CONNECTICUT',
	DELAWARE = 'DELAWARE',
	FLORIDA = 'FLORIDA',
	GEORGIA = 'GEORGIA',
	HAWAII = 'HAWAII',
	IDAHO = 'IDAHO',
	ILLINOIS = 'ILLINOIS',
	INDIANA = 'INDIANA',
	IOWA = 'IOWA',
	KANSAS = 'KANSAS',
	KENTUCKY = 'KENTUCKY',
	LOUISIANA = 'LOUISIANA',
	MAINE = 'MAINE',
	MARYLAND = 'MARYLAND',
	MASSACHUSETTS = 'MASSACHUSETTS',
	MICHIGAN = 'MICHIGAN',
	MINNESOTA = 'MINNESOTA',
	MISSISSIPPI = 'MISSISSIPPI',
	MISSOURI = 'MISSOURI',
	MONTANA = 'MONTANA',
	NEBRASKA = 'NEBRASKA',
	NEVADA = 'NEVADA',
	NEW_HAMPSHIRE = 'NEW HAMPSHIRE',
	NEW_JERSEY = 'NEW JERSEY',
	NEW_MEXICO = 'NEW MEXICO',
	NEW_YORK = 'NEW_YORK',
	NORTH_CAROLINA = 'NORTH CAROLINA',
	NORTH_DAKOTA = 'NORTH DAKOTA',
	OHIO = 'OHIO',
	OKLAHOMA = 'OKLAHOMA',
	OREGON = 'OREGON',
	PENNSYLVANIA = 'PENNSYLVANIA',
	RHODE_ISLAND = 'RHODE ISLAND',
	SOUTH_CAROLINA = 'SOUTH CAROLINA',
	SOUTH_DAKOTA = 'SOUTH DAKOTA',
	TENNESSEE = 'TENNESSEE',
	TEXAS = 'TEXAS',
	UTAH = 'UTAH',
	VERMONT = 'VERMONT',
	VIRGINIA = 'VIRGINIA',
	WASHINGTON = 'WASHINGTON',
	WEST_VIRGINIA = 'WEST VIRGINIA',
	WISCONSIN = 'WISCONSIN',
	WYOMING = 'WYOMING',
}

registerEnumType(ProductLocation, {
	name: 'ProductLocation',
});
