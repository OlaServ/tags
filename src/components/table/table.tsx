import TableBody from "@mui/material/TableBody";
import { TableContainerProps } from "@mui/material";
import { TablePaginationProps } from "@mui/material";
import { TableElements as el } from "./table.elements";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export interface ITableProps<T extends string> extends TableContainerProps {
  rows: { [key in T]: string | number }[];
  onSort: (column: T) => void;
  sortOrder?: "asc" | "desc";
  sortBy: T;
  paginationProps: Pick<
    TablePaginationProps,
    | "count"
    | "rowsPerPage"
    | "onPageChange"
    | "onRowsPerPageChange"
    | "slotProps"
    | "page"
  >;
}

export const Table = <T extends string>({
  rows,
  onSort,
  sortOrder = "desc",
  sortBy,
  paginationProps,
  ...rest
}: ITableProps<T>) => {
  const columns = Object.keys(rows[0]);
  const Icon = sortOrder === "desc" ? <ArrowDownward /> : <ArrowUpward />;

  const {
    count,
    onPageChange,
    onRowsPerPageChange,
    slotProps,
    page,
    rowsPerPage,
  } = paginationProps;

  return (
    <el.StyledContainer {...rest}>
      <el.StyledPagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage >= rows.length ? rows.length : rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => onPageChange(event, newPage)}
        onRowsPerPageChange={onRowsPerPageChange}
        slotProps={slotProps}
      />
      <el.StyledTable>
        <el.StyledHead>
          <el.StyledHeadRow>
            {columns.map((column, index) => (
              <el.StyledHeadCell
                key={`column-${index}-${column}`}
                onClick={() => onSort(column as T)}
              >
                {column}
                {sortBy === column && Icon}
              </el.StyledHeadCell>
            ))}
          </el.StyledHeadRow>
        </el.StyledHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <el.StyledRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <el.StyledBodyCell key={`col-${colIndex}`}>
                  {row[column as T]}
                </el.StyledBodyCell>
              ))}
            </el.StyledRow>
          ))}
        </TableBody>
      </el.StyledTable>
    </el.StyledContainer>
  );
};
