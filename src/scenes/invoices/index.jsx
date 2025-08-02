import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "id",
            headerName: "Id"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
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
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[300]}>{params.row.cost}</Typography>
            )
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1
        }
    ]

    return (
        <Box m="20px">
            <Header title="INVOICES" subTitle="List of Invoice Balances" />
            <Box sx={{
                "& .MuiDataGrid-root": { border: "none !important"},
                "& .MuiDataGrid-cell": { borderBottom: "none !important"},
                "& .name-column--cell": { color: `${colors.greenAccent[300]} !important`},
                "& .MuiDataGrid-columnHeader": { backgroundColor: `${colors.blueAccent[700]} !important`, borderBottom: "none !important" },
                "& .MuiDataGrid-virtualScroller": { backgroundColor: `${colors.primary[400]} !important`},
                "& .MuiDataGrid-footerContainer": { borderTop: "none !important", backgroundColor: `${colors.blueAccent[700]} !important`},
                "& .MuiDataGrid-columnSeparator": { display: "none !important" },
                "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important`, },
            }}>
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}/>
            </Box>
        </Box>
    );
}

export default Invoices;