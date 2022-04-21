export enum ItemCategoryType {
    None,
    Even,
    Odd
}
export interface IItemCategory {
    name: string;
    description: string;
    type: ItemCategoryType;
}

export const DEFAULT_ITEM_CATEGORY: IItemCategory = {
    name: '',
    description: '',
    type: ItemCategoryType.None,
};

export class ItemCategoryModel implements IItemCategory {
    constructor (dto: IItemCategory = DEFAULT_ITEM_CATEGORY) {
        Object.assign(this, dto);
    }

    name!: string;

    description!: string;

    type!: ItemCategoryType;
}

export default ItemCategoryModel;
