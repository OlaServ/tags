import { styled } from "@mui/material";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import { TablePaginationProps } from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledContainer = styled(TableContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));

const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: "#232325",
  borderRadius: "12px",
  fontFamily: "Manrope, sans-serif",
  [theme.breakpoints.up("md")]: {},
}));

const StyledHead = styled(TableHead)({
  backgroundColor: "#232325",
});

const StyledHeadRow = styled(TableRow)({
  backgroundColor: "#232325",
});

const StyledCell = styled(TableCell)(({ theme }) => ({
  "&:first-child": {
    textAlign: "left",
  },
  fontFamily: "inherit",
  textAlign: "right",
  [theme.breakpoints.up("md")]: {},
}));

const StyledHeadCell = styled(StyledCell)(({ theme }) => ({
  backgroundColor: "#232325",
  color: " #c0ff5b",
  fontWeight: "bold",
  fontFamily: "inherit",
  [theme.breakpoints.up("md")]: {},
  textTransform: "capitalize",
}));

const StyledBodyCell = styled(StyledCell)({
  backgroundColor: "#232325",
  color: " #ffffff",
});

const StyledRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#232325",

  "&:last-child td, &:last-child th": {
    border: "0",
  },
  [theme.breakpoints.up("md")]: {},
}));

const StyledPagination = styled(TablePagination)<TablePaginationProps>({
  background: " #c0ff5b",
  fontFamily: "inherit",
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
