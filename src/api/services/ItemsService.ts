import ItemModel, { IItem } from '../objects/ItemModel';

class ItemsService {
    public static generate (): ItemModel[] {
        const items = [];
        for (let i = 10; i >= 0; i--) {
            items.push(new ItemModel({
                data: `Data${i}`,
                summary1: this.randomNumber(),
                summary2: this.randomNumber(),
                summary3: this.randomNumber(),
                summary4: this.randomNumber(),
                summary5: this.randomNumber(),
            } as IItem))
        }

        return items;
    }

    private static randomNumber (): number {
        const MAX = 500;
        const MIN = 1;
        return Math. floor(Math. random() * (MAX - MIN + 1)) + MIN;
    }
}

export default ItemsService;
