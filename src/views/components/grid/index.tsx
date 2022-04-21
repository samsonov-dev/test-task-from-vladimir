import React, {Component, FormEvent} from 'react';
import './grid.scss';
import ItemModel from "../../../api/objects/ItemModel";

export interface GridColumn {
    name: string,
    field: string,
}

interface GridProps {
    columns: Array<GridColumn>,
    data: Array<any>,
    filter: ItemModel,
    onInput: (name: string, value: string) => void,
}

class Grid extends Component<GridProps> {
    constructor(props: GridProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: FormEvent<HTMLInputElement>) {
        const { target } = event;
        // console.log(target);
        // @ts-ignore
        this.props.onInput(target.name, target.value)
    }

    render() {
        return (
            <table className="grid">
                <thead>
                <tr>
                    {this.props.columns.map(column =>
                        <th key={`item_columns_${column.field}`}>
                            {column.name}
                        </th>
                    )}
                </tr>
                </thead>
                <tbody>
                {this.props.data.map((data) =>
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
                            <input type="text" name={column.field} onInput={this.handleChange} />
                        </td>
                    )}
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Grid;
