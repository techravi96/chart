

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 150,
    editable: true,
  },


  {
    field: 'city',
    headerName: 'City',
    width: 160,
  },
  {
    field: 'gst',
    headerName: 'Gst',
    type: 'number',
    width: 150,
  },

  {
    field: 'pincode',
    headerName: 'Pincode',
    type: 'number',
    description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', state: 'Haryana', city:'Faridabad', pincode: '121003' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', state: 'Delhi', city:'South Delhi', pincode:'110044', gst :'GSTIN2304813' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', state: 'Haryana', pincode: '121003'  },
  { id: 4, lastName: 'Stark', firstName: 'Arya',   state: 'Delhi', city:'South Delhi', pincode:'110044', gst :'GSTIN2304813'  },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', state: 'Haryana', pincode: '121003' },
  { id: 6, lastName: 'Melisandre', firstName: null,  state: 'Haryana', pincode: '121003'  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',  state: 'Haryana',city:'Faridabad', pincode: '121003'  },
  { id: 8, lastName: 'Frances', firstName: 'Rossini',  state: 'Haryana', pincode: '121003'  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey',  state: 'Haryana', pincode: '121003' },
];

export default function OrganisationList() {
    return (
        <div className='mainContainer'>
              <Sidebar />
              <Topbar/>
            <div className='heading_title'>
                <h2>Organisation List</h2>
            </div>
        <div className='inner_wrapper'>
            <div className='custom_table'>
                <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                />
            </div>
        </div>
        </div>
    );
}
