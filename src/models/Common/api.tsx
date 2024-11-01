/* eslint-disable @typescript-eslint/no-explicit-any */
export type ApiResponse<T> = Pick<Response, "status"> &
  Partial<ApiError> & {
    result?: T | any;
    data?: T | any;
  };

export type ApiError = Pick<Response, "status"> & {
  errors?: ErrorDetails[];
  context: string | null;
  error?: any;
  message: string;
  status: any;
  type: string;
};

export interface AppError {
  message: string;
  status: any;
  metadata?: any;
  context?: string;
  error?: any;
  isUnhandledError?: any;
  meta?: any;
}

interface ErrorDetails {
  id: number;
  message: string;
  friendlyMessageError: boolean;
  metadata: any;
  context: any;
}
