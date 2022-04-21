import ItemModel, {IItem} from '../objects/ItemModel';
import {ItemCategoryModel, ItemCategoryType} from "../objects/ItemCategoryModel";

class ItemsService {
    public static categories (): Array<ItemCategoryModel> {
        return [
            new ItemCategoryModel({
                name: 'Even rows of data',
                description: 'Display rows 2, 4, 6 etc',
                type: ItemCategoryType.Even,
            }),
            new ItemCategoryModel({
                name: 'Odd rows of data',
                description: 'Display rows 1, 3, 5 etc',
                type: ItemCategoryType.Odd,
            }),
            new ItemCategoryModel({
                name: 'All data',
                description: 'Display all data',
                type: ItemCategoryType.None,
            })
        ]
    }

    public static generate (): Array<ItemModel> {
        const items = [];
        for (let i = 20; i >= 0; i--) {
            items.push(new ItemModel({
                data: `Data${i}`,
                summary1: this.randomNumber(),
                summary2: this.randomNumber(),
                summary3: this.randomNumber(),
                summary4: this.randomNumber(),
                summary5: this.randomNumber(),
                category: (i % 2) ? ItemCategoryType.Odd : ItemCategoryType.Even,
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
