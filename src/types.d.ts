export interface PageResult<T> {
  records: T[];
  total_pages: number;
  total_records: number;
}
export type Fn<T = unknown> = (...args: any[]) => T;
export interface SupportTicketDto {
  company?: string;
  email: string;
  message: string;
  name: string;
  phone?: string;
  subject: string;
  files?: any;
  supportType?: string;
  priorityType?: string;
}
