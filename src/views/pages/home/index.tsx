import React, {Component} from 'react';
import './index.scss';
import Header from '../../components/header/index';
import ItemsService from "../../../api/services/ItemsService";
import Grid, { GridColumn } from '../../components/grid';
import Menu from "../../components/menu";
import {ItemCategoryType} from "../../../api/objects/ItemCategoryModel";
import ItemModel from "../../../api/objects/ItemModel";
import triangleDown from '../../../assets/img/icon/triangleDown.svg';
import { ReactComponent as Printer } from '../../../assets/img/icon/printer.svg';
import { ReactComponent as Download } from '../../../assets/img/icon/download.svg';

interface IHomeProps {
}

interface IHomeState {
    selectedType: ItemCategoryType;
}

class Home extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);

        this.state = {
            selectedType: ItemCategoryType.None,
        };

        this.onSelectCategory = this.onSelectCategory.bind(this);
    }

    private data = ItemsService.generate();

    private categories = ItemsService.categories();

    private columns = [
        {
            name: 'Data',
            field: 'data',
        } as GridColumn,
        {
            name: 'Summary1',
            field: 'summary1',
        } as GridColumn,
        {
            name: 'Summary2',
            field: 'summary2',
        } as GridColumn,
        {
            name: 'Summary3',
            field: 'summary3',
        } as GridColumn,
        {
            name: 'Summary4',
            field: 'summary4',
        } as GridColumn,
        {
            name: 'Summary5',
            field: 'summary5',
        } as GridColumn,
    ];

    private onSelectCategory (type: ItemCategoryType) {
        this.setState({
            selectedType: type
        });
    }

    private get filteredData (): Array<ItemModel> {
        return this.data.filter((item) => item.category === this.state.selectedType || !this.state.selectedType);
    }

    render() {
        return (<div className="homePage">
            <Header />
            <div className="main">
                <Menu items={this.categories} selected={this.state.selectedType} onSelect={this.onSelectCategory} />
                <div className="dashboard">
                    <div className="dashboard__header">
                        <div className="dashboard__header__items">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="dashboard__header__items dashboard__header__items--right">
                            <button className="date">
                                <span>Aug 21, 2021 · Sep 21 2021</span>
                                <img src={triangleDown} alt=""/>
                            </button>
                            <button className="printer">
                                <Printer />
                            </button>
                            <button className="download">
                                <Download />
                            </button>
                        </div>
                    </div>
                    <Grid data={this.filteredData} columns={this.columns} />
                </div>
            </div>
        </div>);
    }
}

export default Home;
