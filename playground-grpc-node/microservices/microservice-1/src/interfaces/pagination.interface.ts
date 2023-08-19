export interface DecoratorStructure {
  (target: unknown, name: string, descriptor: PropertyDescriptor): void;
}
export interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
}
export interface Pagination {
  pageSize: string;
  pageIndex: string;
  sortType: string;
  sortKey: string;
  filter: string;
}
