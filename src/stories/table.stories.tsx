import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../components/table/table";
import { ITableProps } from "../components/table/table";

type ColumnNamesType = "name" | "count";

const meta: Meta<ITableProps<ColumnNamesType>> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const rowData = [
  { name: "C", count: 456 },
  { name: "C#", count: 234 },
  { name: "C++", count: 123 },
  { name: "Go", count: 345 },
  { name: "HTML", count: 567 },
  { name: "Java", count: 789 },
  { name: "JavaScript", count: 700 },
  { name: "Kotlin", count: 321 },
  { name: "PHP", count: 432 },
  { name: "Python", count: 654 },
   /*{ name: "Ruby", count: 987 },
  { name: "Rust", count: 876 },
  { name: "Swift", count: 543 },
  { name: "TypeScript", count: 876 },
  { name: "Assembly", count: 654 },
  { name: "Bash", count: 543 },
  { name: "Dart", count: 432 },
  { name: "Elixir", count: 321 },
  { name: "Fortran", count: 987 },
  { name: "Haskell", count: 876 },
  { name: "Julia", count: 765 },
  { name: "Lua", count: 654 },
  { name: "Matlab", count: 543 },
  { name: "Objective-C", count: 432 },
  { name: "Perl", count: 321 },
  { name: "R", count: 210 },
  { name: "Scala", count: 109 },
  { name: "Shell", count: 456 },
  { name: "SQL", count: 543 },
  { name: "VBA", count: 987 }, */
];

export const TableComponent: Story = {
  args: {
    rows: rowData,
    onSort: () => {},
    sortBy: "name",
  },
  render: (args) => {
    const { rows } = args;
    const [sortedRows, setSortedRows] = useState(rows);
    const [order, setOrder] = useState<"asc" | "desc">("desc");
    const [sortBy, setSortBy] = useState<ColumnNamesType>("name");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    const onSort = (columnName: ColumnNamesType) => {
      setSortBy(columnName);
      const sortOrder = order === "asc" ? 1 : -1;
      const sortedRows = [...rows].sort((a, b) => {
        if (a[columnName] < b[columnName]) return -1 * sortOrder;
        if (a[columnName] > b[columnName]) return 1 * sortOrder;
        return 0;
      });
      setSortedRows(sortedRows);
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setRowsPerPage(parseInt(event.target.value));
    };

    const handlePageChange = (event: unknown, newPage: number) => {
      setCurrentPage(newPage);
    };

    const startIndex = currentPage * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, sortedRows.length);

    const slicedRows = sortedRows.slice(startIndex, endIndex);


    const totalPages = Math.ceil(sortedRows.length / rowsPerPage);

    const nextButtonDisabled = currentPage === totalPages - 1;
    

    return (
      <Table
        rows={slicedRows}
        onSort={onSort}
        sortBy={sortBy}
        sortOrder={order}
        paginationProps={{
          rowsPerPage,
          onRowsPerPageChange: handleChangeRowsPerPage,
          page: currentPage,
          onPageChange: handlePageChange,
          count: sortedRows.length,
          slotProps: {
            actions: {
              previousButton: {
                disabled: currentPage === 0,
              },
              nextButton: {
                disabled: nextButtonDisabled,
              },
            },
          },
        }}
      />
    );
  },
};
