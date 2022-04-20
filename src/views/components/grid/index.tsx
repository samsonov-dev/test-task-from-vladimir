import React, { Component } from 'react';

export interface GridColumn {
    name: string,
    field: string,
}

interface GridProps {
    columns: Array<GridColumn>,
    data: Array<any>,
}

class Grid extends Component<GridProps>  {
    render() {
        return (
            <div className="grid">
                <div className="header">
                    Header
                </div>
                <div className="body">
                    Body
                </div>
                <div className="filters">
                    Filters
                </div>
            </div>
        );
    }
}

export default Grid;
