import React, { Component } from 'react';
import ItemCategoryModel, {ItemCategoryType} from "../../../api/objects/ItemCategoryModel";

interface MenuProps {
    items: Array<ItemCategoryModel>,
    onSelect: (type: ItemCategoryType) => void,
}

class Menu extends Component<MenuProps>  {
    render() {
        return (
            <ul>
                {this.props.items.map(item =>
                    <li key={`item_category_${item.type}`} onClick={() => this.props.onSelect(item.type)}>
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                    </li>
                )}
            </ul>
        );
    }
}

export default Menu;
