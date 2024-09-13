export const ALLOWED_FILE_TYPES = {
    image: ['image/jpeg', 'image/png', 'image/gif'],
    pdf: ['application/pdf'],
    documents: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    text: ['text/plain'],
    code: ['application/javascript', 'application/json'],
  } as const;
  
  export type FileType = keyof typeof ALLOWED_FILE_TYPES;
  export type AllowedType = (typeof ALLOWED_FILE_TYPES)[FileType][number];
  