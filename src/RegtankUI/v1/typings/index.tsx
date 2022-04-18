export interface TimestampRes extends Date {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  nanos: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;
}

export interface AttachmentDtoRes {
  createdAt: TimestampRes;
  createdBy: BasicUserInfoDto;
  id: number;
  lastModifiedBy: BasicUserInfoDto;
  name: string;
  updatedAt: TimestampRes;
}

export interface BasicUserInfoDto {
  avatar: string;
  colorCode: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  userPermissions?: string[];
  roles: Array<any>;
}

export interface NoteDtoRes {
  attachments: AttachmentDtoRes[];
  content: string;
  createdAt: TimestampRes;
  createdBy: BasicUserInfoDto;
  id: number;
  lastModifiedBy: BasicUserInfoDto;
  referenceId: number;
  type: string;
  updatedAt: TimestampRes;
}

export interface IAttachmentReducerStateItem {
  complete: boolean;
  file: File;
  instanceId: string;
  name: string;
  progress: number;
}

export interface FileUploadProps {
  accept?: string;
  children: any;
  multiple?: boolean;
  onChange?: React.ChangeEvent<HTMLInputElement>;
}
