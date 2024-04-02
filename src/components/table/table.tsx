import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import { TableContainerProps } from "@mui/material";
import { TableElements as el } from "./table.elements";


interface ITableProps<T extends string> extends TableContainerProps {
  rows: {[K in T]: string | number}[];
}

export const Table = <T extends string>({ rows, ...rest }: ITableProps<T>) => {

  const columns =  Object.keys(rows[0]);

  return (
    <el.StyledContainer {...rest}>
      <el.StyledPagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={5}
        page={0}
        onPageChange={() => {
          return;
        }}
        onRowsPerPageChange={() => {
          return;
        }}
      />
      <el.StyledTable>
        <el.StyledHead>
          <el.StyledHeadRow>
            {columns.map((column, index) => (
              <el.StyledHeadCell key={`column-${index}-${column}`}>
                {column}
              </el.StyledHeadCell>
            ))}
          </el.StyledHeadRow>
        </el.StyledHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <el.StyledRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <el.StyledBodyCell key={colIndex}>{row[column as T]}</el.StyledBodyCell>
              ))}
            </el.StyledRow>
          ))}
        </TableBody>
      </el.StyledTable>
    </el.StyledContainer>
  );
};