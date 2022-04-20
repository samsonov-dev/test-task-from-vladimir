import React, { Component } from 'react';
import ItemsService from "../../../api/services/ItemsService";
import Grid, { GridColumn } from '../../components/grid';

class Home extends Component {
    private data = ItemsService.generate();

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

    render() {
        return (<div>
            <h2> Hello World </h2>
            <Grid data={this.data} columns={this.columns} />
        </div>);
    }
}

export default Home;
