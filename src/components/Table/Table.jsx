import React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useSelector} from "react-redux";

const columns = [
    {
        field: 'symbol',
        headerName: 'Symbol',
        width: 150,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'super-app-theme--header',

    },
    {
        field: 'companyName',
        headerName: 'Company Name',
        editable: false,
        headerAlign: 'center',
        align: 'left',
        flex: 1,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'latestPrice',
        headerName: 'Latest Price',
        type: 'number',
        width: 130,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'previousClose',
        headerName: 'Previous Close',
        description: 'This column has a value getter and is not sortable.',
        width: 130,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'change',
        headerName: 'Change',
        description: 'This column has a value getter and is not sortable.',
        width: 130,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'super-app-theme--header',
    },
    {
        field: 'latestUpdate',
        headerName: 'Latest Update',
        description: 'This column has a value getter and is not sortable.',
        width: 130,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        valueGetter: ({value}) => value && new Date(value).toLocaleDateString(),
        headerClassName: 'super-app-theme--header',
    }
];

export default function DataGridDemo({rows}) {
    const currentSector = useSelector(state => state.iexCloudReducer.currentSector)
    return (
        <Box sx={{height: '85%', width: '100%', margin: 'auto', marginTop: '30px'}}>
            <h1>Current sector:
                {currentSector ? currentSector?.name : 'Please select sector'}</h1>
            <DataGrid
                sx={{
                    '& .super-app-theme--header': {
                        fontSize: '18px',
                        backgroundColor: 'rgba(224,224,224,0.5)'
                    },
                }}
                showColumnVerticalBorder={true}
                showCellVerticalBorder={true}
                style={{margin: "auto", marginTop: '30px'}}
                rows={rows}
                columns={columns}
                getRowId={(row) => row.symbol}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}