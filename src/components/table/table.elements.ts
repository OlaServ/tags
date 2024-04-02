import { styled } from "@mui/material";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import { TablePaginationProps } from "@mui/material/TablePagination";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledContainer = styled(TableContainer)({
  width: "100%",
  minWidth: "420px",
  borderRadius: "12px",
});

const StyledTable = styled(Table)({
  backgroundColor: "#232325",
  fontFamily: "Manrope, sans-serif",
   
 
});

const StyledHead = styled(TableHead)({
  backgroundColor: "#232325",
});

const StyledHeadRow = styled(TableRow)({
  backgroundColor: "#323235",
});

const StyledCell = styled(TableCell)(({ theme }) => ({
  "&:first-child": {
    textAlign: "left",
  },
  fontFamily: "inherit",
  textAlign: "right",
  padding: "12px 40px",
  position: "relative",

  "& svg": {
    position: "absolute",
    marginLeft: "8px",
  },
}));

const StyledHeadCell = styled(StyledCell)<TableCellProps>(({ theme }) => ({

  color: " #c0ff5b",
  fontWeight: "bold",
  fontFamily: "inherit",
  [theme.breakpoints.up("md")]: {},
  textTransform: "capitalize",
  cursor: "pointer",
}));

const StyledBodyCell = styled(StyledCell)({

  color: " #ffffff",
});

const StyledRow = styled(TableRow)(({ theme }) => ({
  background: "#323235",
  
  
  

  "&:last-child td, &:last-child th": {
    border: "0",
    borderRadius: "12px",
  },
  [theme.breakpoints.up("md")]: {},
}));

const StyledPagination = styled(TablePagination)<TablePaginationProps>({
  background: " #c0ff5b",
  overflow: "unset",
  fontFamily: "inherit",
  width: "100%",
});

export const TableElements = {
  StyledContainer,
  StyledTable,
  StyledHead,
  StyledHeadRow,
  StyledHeadCell,
  StyledRow,
  StyledBodyCell,
  StyledPagination,
};
