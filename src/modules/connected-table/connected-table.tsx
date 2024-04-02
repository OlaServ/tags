"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Table } from "@/components/table/table";
import { ITableProps } from "@/components/table/table";
import { TagItemType } from "@/domain/tags-table.type";
import { TableContainerProps } from "@mui/material";

type TagPickedProperties = Pick<TagItemType, "name" | "count">;

interface IConnectedTableProps
  extends TableContainerProps,
    Pick<ITableProps<keyof TagPickedProperties>, "rows"> {}

export const ConnectedTable = ({ rows, ...rest }: IConnectedTableProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const rowsPerPage = Number(searchParams.get("pagesize")) || 5;
  const order = searchParams.get("order") || "desc";
  const sortBy = searchParams.get("sortBy") || "name";

  const createPageURL = (_event: unknown, newPage: number) => {
    const params = new URLSearchParams(searchParams);
    const updatedPage = (newPage + 1).toString();
    params.set("page", updatedPage);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("pagesize", event.target.value);

    replace(`${pathname}?${params.toString()}`);
  };

  const handleRequestSort = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);
    const sortOrder = sortBy === "name" ? "name" : "popular";
    params.set("sort", sortOrder);
    if (order === "desc") {
      params.set("order", "asc");
    } else {
      params.set("order", "desc");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Table
      rows={rows}
      onSort={handleRequestSort}
      sortBy={sortBy}
      paginationProps={{
        rowsPerPage,
        page: Number(currentPage) - 1,
        onRowsPerPageChange: handleChangeRowsPerPage,
        count: -1,
        onPageChange: createPageURL,
        slotProps: {
          actions: {
            nextButton: { disabled: rows.length === 0 || currentPage == 25 }, // I disabled the button on page 25 because the Stack Overflow API requires an API key (which I don't have) to query for pages with idx higher than 25
            previousButton: {
              disabled: rows.length === 0 || currentPage === 1,
            },
          },
        },
      }}
      {...rest}
    />
  );
};
