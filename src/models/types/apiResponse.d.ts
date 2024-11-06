export interface ApiResponse<T> {
  Total: number;
  Items: T;
}

export interface ApiRequestPagination {
  skip: number;
  take: number;
}
