import React, {Component, ChangeEvent} from 'react';
import './grid.scss';
import ItemModel from "../../../api/objects/ItemModel";
import classNames from 'classnames';
import { compareStrings } from '../../../utils/functions';
import { ReactComponent as ArrowDown } from '../../../assets/img/icon/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/img/icon/arrowUp.svg';

export interface GridColumn {
    name: string,
    field: keyof ItemModel,
}

interface GridProps {
    columns: Array<GridColumn>,
    data: Array<ItemModel>,
}

export enum SortDirection {
    Ask,
    Desc
}

interface IGridState {
    filter: ItemModel;
    sort: {
        field: keyof ItemModel,
        direction: SortDirection,
    }
}

class Grid extends Component<GridProps, IGridState> {
    constructor(props: GridProps) {
        super(props);

        this.state = {
            filter: new ItemModel(),
            sort: {
                field: 'data',
                direction: SortDirection.Ask
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    handleChange(value: string, name: keyof ItemModel) {
        const filter = this.state.filter;
        // @ts-ignore
        filter[name] = (typeof filter[name] === 'number') ? (value ? parseInt(value, 10) : 0) : value;
        this.setState({filter});
    }

    handleSort(name: keyof ItemModel) {
        const direction = (this.state.sort.field !== name) ? SortDirection.Ask : (this.state.sort.direction === SortDirection.Ask ? SortDirection.Desc : SortDirection.Ask);
        this.setState({
            sort: {
                field: name,
                direction
            }
        });
    }

    private get filteredData (): Array<ItemModel> {
        const data = this.props.data
            .filter((item) =>
                Object.entries(this.state.filter).every(([key, value]) =>
                    // @ts-ignore
                    !item[key] || !value || String(item[key]).toLowerCase().indexOf(String(value).toLowerCase()) !== -1
                ))
            .sort((a, b) => {
                const { field } = this.state.sort;

                if (typeof a[field] === 'string' && typeof b[field] === 'string') {
                    return compareStrings((a[field] as string).trim().toLowerCase(), (b[field] as string).trim().toLowerCase());
                } else {
                    if (a[field] < b[field]) {
                        return -1;
                    }

                    if (a[field] > b[field]) {
                        return 1;
                    }
                }

                return 0;
            });

        if (this.state.sort.direction === SortDirection.Desc) {
            data.reverse();
        }

        return data;
    }

    private renderSortIcon (name: keyof ItemModel) {
        if (this.state.sort.field === name) {
            return <div className={classNames('sort', SortDirection[this.state.sort.direction])}><ArrowUp /><ArrowDown /></div>;
        }

        return '';
    }

    render() {
        return (
            <div className="grid">
                <table >
                    <thead>
                    <tr>
                        {this.props.columns.map(column =>
                            <th key={`item_columns_${column.field}`} onClick={() => this.handleSort(column.field)}>
                                <div className="column">
                                    {this.renderSortIcon(column.field)}
                                    <span>{column.name}</span>
                                </div>
                            </th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {this.filteredData.map((data) =>
                        <tr key={`item_data_${data.data}`}>
                            {this.props.columns.map(column =>
                                <td key={`item_data_${column.field}_${data.data}`}>
                                    {data[column.field]}
                                </td>
                            )}
                        </tr>
                    )}
                    <tr className="filter">
                        {this.props.columns.map(column =>
                            <td key={`item_filter_${column.field}`}>
                                <input type="text" name={column.field} onInput={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event.target.value, column.field as keyof ItemModel)} />
                            </td>
                        )}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Grid;
