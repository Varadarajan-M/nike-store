import products from '@/data/products';
import { TProduct } from '@/types';
import { atom } from 'jotai';

const loadWishlistItems = async () => {
	const items = products.data?.slice(0, 6);
	return new Promise((res) => {
		setTimeout(() => {
			res(items);
		}, 2000);
	});
};

const addToWishList = (wishList: TProduct[], product: TProduct) =>
	wishList.concat(product);

const removeFromWishList = (wishList: TProduct[], product: TProduct) =>
	wishList?.filter((item) => item?.id !== product?.id);

export const wishListLoadingAtom = atom(false);

export const wishListItemsAtom = atom<TProduct[]>([]);

export const wishListCountAtom = atom(
	(get) => get(wishListItemsAtom)?.length ?? 0,
);

export const toggleWishListAtom = atom(
	null,
	async (get, set, product: TProduct) => {
		const wishListItems = get(wishListItemsAtom);
		const isExistingItem = wishListItems?.find(
			(item) => product?.id === item?.id,
		);
		const updatedWishList = isExistingItem
			? removeFromWishList(wishListItems, product)
			: addToWishList(wishListItems, product);

		set(wishListItemsAtom, updatedWishList);
	},
);

export const getWishListItemsAtom = atom(null, async (_, set) => {
	set(wishListLoadingAtom, true);
	const data = (await loadWishlistItems()) as TProduct[];
	set(wishListItemsAtom, data);
	set(wishListLoadingAtom, false);
});
