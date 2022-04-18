import * as React from "react";
import { PageResult } from "../../types";

interface ColumnDataRenderCell<RecordType, FieldType> {
  (value: FieldType): React.ReactNode;
  (value: FieldType, record: RecordType): React.ReactNode;
}

export interface ColumnData<RecordType, FieldType> {
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  style?: React.CSSProperties;
  headerProps?: React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
  disablePadding?: boolean;
  enable?: boolean;
  id?: string;
  label?: string | React.ReactNode;
  numeric?: boolean;
  renderCell?: (value: FieldType, record: RecordType) => React.ReactNode;
  sort?: boolean;
}

export interface CustomTableProps<
  RecordType,
  RK extends keyof RecordType = keyof RecordType
> {
  className?: string;
  columnData: {
    [F in RK | string]?: ColumnData<
      RecordType,
      F extends RK ? RecordType[F] : any
    >;
  };
  component?: React.ComponentType;
  data: Array<RecordType> | PageResult<RecordType>;
  options?: {
    enableCollapsibleCell?: boolean;
    onSelected?: (records: Array<RecordType>) => void;
    pagination?: boolean;
    renderCollapse?: (record: RecordType) => React.ReactNode;
    selectable?: boolean;
    selections?: Array<RecordType>;
    renderEmpty?: boolean | string | React.ReactNode;
    checkHighlight?: string | ((record: RecordType) => boolean);
    isFixedFirstColumn?: boolean;
  };
  lang: any;
}

export default function CustomTable<T>(props: CustomTableProps<T>): JSX.Element;
