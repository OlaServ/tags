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
  position: "relative",
});

const StyledTable = styled(Table)({
  backgroundColor: "#232325",
  fontFamily: "Manrope, sans-serif",
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
  "&:first-of-type": {
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

  "&:last-of-type": {
    "& td, & th": {
      borderRadius: "0px 0px 12px 12px",
    },
  },

  "&:last-of-type td, &:last-of-type th": {
    border: "0",
  },
});

const StyledPagination = styled(TablePagination)<TablePaginationProps>(
  ({ theme }) => ({
    background: " #c0ff5b",
    overflow: "unset",
    fontFamily: "inherit",
    width: "100%",
    position: "sticky",
    top: "0",
    zIndex: 100,
    borderRadius: "12px 12px 0 0",
    "&> .MuiTablePagination-toolbar": {
      flexWrap: "wrap",
    },

    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
      [theme.breakpoints.down("sm")]: {
        margin: "0",
      },
    },

    "& .MuiTablePagination-toolbar": {
      [theme.breakpoints.down("sm")]: {
        padding: "8px",
        justifyContent: "center",
      },
    },

    "& .MuiTablePagination-actions": {
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0",
      },
    },
  })
);

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
