import { BookType } from '../types/book';
import { CartItemType } from '../types/cart';

export const SetCartItems = (data: BookType): CartItemType[] => {
    let cartItems: CartItemType[] = [];
    if (typeof window !== 'undefined') {
        const cartlist = window.sessionStorage.getItem('cart');
        const cartArray = cartlist ? JSON.parse(cartlist) : [];

        if (cartArray.length > 0) {
            cartArray.map((itm: any, index: number) => {
                let item: CartItemType = {
                    item: itm.item,
                    price: itm.price,
                    qty: itm.qty,
                    title: itm.title,
                    author: itm.author,
                    image: itm.image,
                };
                cartItems.push(item);
            });

            const abc = cartItems.filter((x: any) => x.item == data.id);
            if (abc?.length > 0) {
                cartItems.map((itm: any, index) => {
                    itm.qty = parseInt(itm.qty) + 1;
                });
            } else {
                cartItems.push({
                    item: data.id,
                    price: data.attributes.price,
                    qty: 1,
                    title: data.attributes.title,
                    author: data.attributes.author.data.attributes.name,
                    image: data.attributes.imgurl,
                });
            }
        } else {
            cartItems.push({
                item: data.id,
                price: data.attributes.price,
                qty: 1,
                title: data.attributes.title,
                author: data.attributes.author.data.attributes.name,
                image: data.attributes.imgurl,
            });
        }
        window.sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }

    return cartItems;
};

export const RemoveCartItems = (id: number): CartItemType[] => {
    let cartItems: CartItemType[] = [];
    if (typeof window !== 'undefined') {
        const cartlist = window.sessionStorage.getItem('cart');
        const cartArray = cartlist ? JSON.parse(cartlist) : [];
        const filtered = cartArray.filter((x: any) => x.item != id);
        cartItems = filtered;
        window.sessionStorage.setItem('cart', JSON.stringify(filtered));
    }

    return cartItems;
};

export const GetCartItems = (): CartItemType[] => {
    let cartItems: CartItemType[] = [];
    if (typeof window !== 'undefined') {
        const cartlist = window.sessionStorage.getItem('cart');
        const cartArray = cartlist ? JSON.parse(cartlist) : [];

        if (cartArray.length > 0) {
            cartArray.map((itm: any, index: number) => {
                let item: CartItemType = {
                    item: itm.item,
                    price: itm.price,
                    qty: itm.qty,
                    title: itm.title,
                    author: itm.author,
                    image: itm.image,
                };
                cartItems.push(item);
            });
        }
    }
    return cartItems;
};

export const GetCartItemsCount = (): number => {
    let count = 0;

    if (typeof window !== 'undefined') {
        const cartlist = window.sessionStorage.getItem('cart');
        const cartArray = cartlist ? JSON.parse(cartlist) : [];
        count = cartArray.length;
    }
    return count;
};
