// import * as React from 'react';
// import Box from '@mui/material/Box';
// import {DataGrid} from '@mui/x-data-grid';
// import {useSelector} from "react-redux";
// import {useEffect, useState} from "@types/react";
// import styles from "../List/List.module.scss";
//
//
// const columns = [
//     {
//         field: 'symbol',
//         headerName: 'Symbol',
//         width: 150,
//         editable: false,
//         headerAlign: 'center',
//         align: 'center',
//         headerClassName: 'super-app-theme--header',
//
//     },
//     {
//         field: 'companyName',
//         headerName: 'Company Name',
//         editable: false,
//         headerAlign: 'center',
//         align: 'left',
//         flex: 1,
//         headerClassName: 'super-app-theme--header'
//     },
//     {
//         field: 'latestPrice',
//         headerName: 'Latest Price',
//         type: 'number',
//         width: 130,
//         editable: false,
//         headerAlign: 'center',
//         align: 'center',
//         headerClassName: 'super-app-theme--header'
//     },
//     {
//         field: 'previousClose',
//         headerName: 'Previous Close',
//         description: 'This column has a value getter and is not sortable.',
//         width: 130,
//         editable: false,
//         headerAlign: 'center',
//         align: 'center',
//         headerClassName: 'super-app-theme--header'
//     },
//     {
//         field: 'change',
//         headerName: 'Change',
//         description: 'This column has a value getter and is not sortable.',
//         width: 130,
//         editable: false,
//         headerAlign: 'center',
//         align: 'center',
//         headerClassName: 'super-app-theme--header',
//     },
//     {
//         field: 'latestUpdate',
//         headerName: 'Latest Update',
//         description: 'This column has a value getter and is not sortable.',
//         width: 130,
//         editable: false,
//         headerAlign: 'center',
//         align: 'center',
//         valueGetter: ({value}) => value && new Date(value).toLocaleDateString(),
//         headerClassName: 'super-app-theme--header',
//     }
// ];
//
// export default function DataGridDemo({rows}) {
//     const currentSector = useSelector(state => state.iexCloudReducer.currentSector)
//     return (
//         <Box sx={{height: '85%', width: '100%', margin: 'auto', marginTop: '30px'}}>
//             <h1>Current sector:
//                 {currentSector ? currentSector?.name : 'Please select sector'}</h1>
//             <DataGrid
//                 sx={{
//                     '& .super-app-theme--header': {
//                         fontSize: '18px',
//                         backgroundColor: 'rgba(224,224,224,0.5)'
//                     },
//                 }}
//                 showColumnVerticalBorder={true}
//                 showCellVerticalBorder={true}
//                 style={{margin: "auto", marginTop: '30px'}}
//                 rows={rows}
//                 columns={columns}
//                 getRowId={(row) => row.symbol}
//                 initialState={{
//                     pagination: {
//                         paginationModel: {
//                             pageSize: 10,
//                         },
//                     },
//                 }}
//                 pageSizeOptions={[5, 10, 20]}
//                 checkboxSelection
//                 disableRowSelectionOnClick
//             />
//         </Box>
//     );
// }
//
//
// const List = () => {
//     const filteredSectorCollection = useSelector(state => state.iexCloudReducer.filteredSectorCollection)
//     const [range,setRange] = useState(0)
//     const [page,setPage] = useState(1)
//     const currentSector = useSelector(state => state.iexCloudReducer.currentSector)
//     useEffect(()=>{
//         if(filteredSectorCollection.length<10){
//             setRange(0)
//             setPage(1)
//         }
//     },[filteredSectorCollection])
//     const setNext = ()=>{
//         if(filteredSectorCollection.length/10>page){
//             setRange(range+10)
//             setPage(prev=>prev+1)
//         }
//     }
//     const setPrev = ()=>{
//         if(page>1){
//             setRange(prev=>prev-10)
//             setPage(prev=>prev-1)
//         }
//
//     }
//
//     return (
//         <div className={styles.wrapper}>
//             <h1>Current sector:
//                 {currentSector ? currentSector?.name : 'Please select sector'}</h1>
//             <li className={styles.item}>
//                 <h3>Symbol</h3>
//                 <h3>Company name</h3>
//                 <h3>Latest price</h3>
//                 <h3>Previous close</h3>
//                 <h3>Change</h3>
//                 <h3>Latest update</h3>
//             </li>
//             <ul>
//                 {filteredSectorCollection.slice(range,range+10).map(props=><li key={props.symbol} className={styles.item}>
//                     <div>{props.symbol}</div>
//                     <div>{props.companyName}</div>
//                     <div>{props.latestPrice}</div>
//                     <div>{props.previousClose}</div>
//                     <div className={props.change<0 ? styles.red : styles.green}>{props.change}</div>
//                     <div>{new Date(props.latestUpdate).toLocaleDateString()}</div>
//                 </li>)}
//             </ul>
//             <div className={styles.navigation}>
//                 <div onClick={setPrev}>Prev</div>
//                 <div>{page}</div>
//                 <div onClick={setNext}>Next</div>
//             </div>
//
//         </div>
//     );
// };
//
// export default List;