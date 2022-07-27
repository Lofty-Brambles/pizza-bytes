interface page {
	name: string;
	path: string;
	component: JSX.Element;
	icon: JSX.Element;
}

interface item {
	picture: string;
	name: string;
	desc: string;
	price: number;
}

interface cartItem {
	dtls: item;
	quantity: number;
}

export type { page, item, cartItem };
