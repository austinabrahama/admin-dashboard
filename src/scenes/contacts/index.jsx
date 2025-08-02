import { Box, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 0.5
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1
        },
        {
            field: "city",
            headerName: "City",
            flex: 1
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1
        }
    ]

    return (
        <Box m="20px">
            <Header title="CONTACTS" subTitle="List of Contacts for Future Reference" />
            <Box sx={{
                "& .MuiDataGrid-root": { border: "none !important"},
                "& .MuiDataGrid-cell": { borderBottom: "none !important"},
                "& .name-column--cell": { color: `${colors.greenAccent[300]} !important`},
                "& .MuiDataGrid-columnHeader": { backgroundColor: `${colors.blueAccent[700]} !important`, borderBottom: "none !important" },
                "& .MuiDataGrid-virtualScroller": { backgroundColor: `${colors.primary[400]} !important`},
                "& .MuiDataGrid-footerContainer": { borderTop: "none !important", backgroundColor: `${colors.blueAccent[700]} !important`},
                "& .MuiDataGrid-columnSeparator": { display: "none !important" },
            }}>
                <DataGrid rows={mockDataContacts} columns={columns} showToolbar={true} />
            </Box>
        </Box>
    );
}

export default Contacts;