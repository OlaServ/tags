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
  position: "relative",
});

const StyledTable = styled(Table)({
  backgroundColor: "#232325",
  fontFamily: "Manrope, sans-serif",
  minWidth: "420px",
});

const StyledHead = styled(TableHead)({
  backgroundColor: "#232325",
  position: "sticky",
});

const StyledHeadRow = styled(TableRow)({
  backgroundColor: "#323235",
  marginTop: "52px",
});

const StyledCell = styled(TableCell)({
  backgroundColor: "#232325",
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
});

const StyledHeadCell = styled(StyledCell)<TableCellProps>({
  color: "#c0ff5b",
  fontWeight: "bold",
  fontFamily: "inherit",
  textTransform: "capitalize",
  cursor: "pointer",
});

const StyledBodyCell = styled(StyledCell)({
  color: " #ffffff",
});

const StyledRow = styled(TableRow)({
  background: "#323235",

  "&:last-child": {
    "& td, & th": {
      borderRadius: "0px 0px 12px 12px",
    },
  },

  "&:last-child td, &:last-child th": {
    border: "0",
  },
});

const StyledPagination = styled(TablePagination)<TablePaginationProps>({
  background: " #c0ff5b",
  overflow: "unset",
  fontFamily: "inherit",
  width: "100%",
  minWidth: "420px",
  position: "sticky",
  top: "0",
  zIndex: 100,
  borderRadius: "12px 12px 0 0",
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
