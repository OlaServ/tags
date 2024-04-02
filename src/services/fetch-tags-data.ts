import { TagsTableType } from "@/domain/tags-table.type";

export interface IQueryDataParams {
  page: string | number;
  pageSize: string | number;
  sort: string;
  order: "asc" | "desc";
}

export async function fetchTagsData({
  page,
  pageSize,
  sort,
  order,
}: IQueryDataParams): Promise<TagsTableType> {
  const baseUrl = "https://api.stackexchange.com/2.3/tags?";

  const params = new URLSearchParams({
    page: page.toString(),
    pagesize: pageSize.toString(),
    order: order,
    sort: sort,
    site: "stackoverflow",
  });

  const res = await fetch(baseUrl + params);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
