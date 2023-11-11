import products from '@/data/products';
import { TCartItem, TProduct } from '@/types';
import { atom } from 'jotai';
import { splitAtom } from 'jotai/utils';

const serializeCartItem = ({ id, attributes }: TProduct): TCartItem => ({
	id: +id,
	name: attributes.name,
	price: attributes.price,
	size:
		attributes.size.data.find((s) => s.enabled)?.size ??
		attributes.size?.data?.[0]?.size,
	category: attributes.subtitle,
	thumbnail: attributes.image,
	availableSizes: attributes.size.data,
	maxQuantity: 10,
	quantity: 1,
	originalPrice: attributes.price,
});

const loadCartItems = async () => {
	const cartItems = products.data.map(serializeCartItem);
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(cartItems);
		}, 2000);
	});
};

export const cartLoadingAtom = atom(false);

export const cartItemsAtom = atom<TCartItem[]>([]);

export const splitCartItemsAtom = splitAtom(cartItemsAtom);

export const cartItemsCountAtom = atom((get) => get(cartItemsAtom)?.length);

export const cartSubTotalAtom = atom((get) =>
	get(cartItemsAtom)?.reduce(
		(sum: number, current: TCartItem) => sum + +current?.price,
		0,
	),
);

export const addToCartAtom = atom(null, (get, set, product: TProduct) => {
	const cartItems = get(cartItemsAtom);
	const isExistingItem = cartItems.find((item) => item?.id === product?.id);
	if (isExistingItem) {
		const updatedCartItems = cartItems.map((item) =>
			item?.id === product?.id
				? {
						...item,
						quantity: item.quantity + 1,
						price: (item.quantity + 1) * item?.originalPrice,
				  }
				: item,
		);
		set(cartItemsAtom, updatedCartItems);
	} else {
		set(cartItemsAtom, [...get(cartItemsAtom), serializeCartItem(product)]);
	}
});

export const removeFromCartAtom = atom(null, (get, set, productId) => {
	const cartItems = get(cartItemsAtom);
	const updatedCartItems = cartItems.filter((item) => item.id !== productId);
	set(cartItemsAtom, updatedCartItems);
});

export const getCartItemsAtom = atom(null, async (_, set) => {
	set(cartLoadingAtom, true);
	const cartItems = (await loadCartItems()) as TCartItem[];
	set(cartItemsAtom, cartItems);
	set(cartLoadingAtom, false);
});
