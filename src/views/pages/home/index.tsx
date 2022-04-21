import React, { Component } from 'react';
import ItemsService from "../../../api/services/ItemsService";
import Grid, { GridColumn } from '../../components/grid';
import Menu from "../../components/menu";
import {ItemCategoryType} from "../../../api/objects/ItemCategoryModel";
import ItemModel from "../../../api/objects/ItemModel";

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
        this.setState((previousState, props) => ({
            selectedType: type,
        }));
    }

    private get filteredData (): Array<ItemModel> {
        return this.data.filter((item) => item.category === this.state.selectedType || !this.state.selectedType);
    }

    render() {
        return (<div>
            <h2> Hello World </h2>
            <Menu items={this.categories} onSelect={this.onSelectCategory} />
            <Grid data={this.filteredData} columns={this.columns} />
        </div>);
    }
}

export default Home;
