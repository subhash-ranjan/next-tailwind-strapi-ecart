export type CartItemType = {
    item: number;
    price: number;
    qty: number;
    title: string;
    author: string;
    image: string;
};

export interface CartType {
    items: CartItemType[];
    add: (ietm: CartItemType) => void;
    remove: (ietm: CartItemType) => void;
    setItems: (items: CartItemType[]) => void;
}

export class Cart implements CartType {
    items: CartItemType[];
    constructor() {
        this.items = [];
    }
    add(ietm: CartItemType): void {
        this.items.push(ietm);
    }
    remove(item: CartItemType): void {
        this.items.filter((x) => x.item == item.item);
    }
    setItems(items: CartItemType[]): void {
        this.items = items;
    }
}
