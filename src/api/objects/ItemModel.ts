export interface IItem {
    data: string;
    summary1: number;
    summary2: number;
    summary3: number;
    summary4: number;
    summary5: number;
}

export const DEFAULT_ITEM: IItem = {
    data: '',
    summary1: 0,
    summary2: 0,
    summary3: 0,
    summary4: 0,
    summary5: 0,
};

export class ItemModel implements IItem {
    constructor (dto: IItem = DEFAULT_ITEM) {
        Object.assign(this, dto);
    }

    data!: string;

    summary1!: number;

    summary2!: number;

    summary3!: number;

    summary4!: number;

    summary5!: number;
}

export default ItemModel;
