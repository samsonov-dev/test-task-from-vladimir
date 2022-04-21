import React, { Component } from 'react';
import './index.scss';
import ItemCategoryModel, {ItemCategoryType} from "../../../api/objects/ItemCategoryModel";
import classNames from 'classnames';
import create from '../../../assets/img/icon/create.svg';
import { ReactComponent as PieChart } from '../../../assets/img/icon/pieChart.svg';
import { ReactComponent as CheckMark } from '../../../assets/img/icon/checkMark.svg';
import { ReactComponent as Printer } from '../../../assets/img/icon/printer.svg';

interface MenuProps {
    items: Array<ItemCategoryModel>,
    selected: ItemCategoryType,
    onSelect: (type: ItemCategoryType) => void,
}

class Menu extends Component<MenuProps>  {
    renderIcon(type: ItemCategoryType) {
        switch(type) {
            case ItemCategoryType.Even:
                return <PieChart className="pieChart" />;
            case ItemCategoryType.Odd:
                return <CheckMark className="checkMark" />;
            case ItemCategoryType.None:
                return <Printer className="printer" />;
            default:
                return '';
        }
    }

    render() {
        return (
            <div className="menu">
                <button className="create">
                    <img src={create} alt="" />
                    <span>Create new</span>
                </button>
                <div className="presetFilters">
                    {this.props.items.map(item =>
                        <button
                            key={`item_category_${item.type}`}
                            onClick={() => this.props.onSelect(item.type)}
                            className={classNames('item', {'active': this.props.selected === item.type})}
                        >
                            {this.renderIcon(item.type)}
                            <p className="info">
                                <span className="title">{item.name}</span>
                                <span className="desc">{item.description}</span>
                            </p>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Menu;
