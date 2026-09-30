import { HttpStatus } from '@nestjs/common';

export class APIException {
  constructor(status: HttpStatus, code: string, message: string, data?: any) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  public status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

  public code: string = 'COMMON_ERROR';

  public message: string = '일시적인 오류가 발생하였습니다.';

  public data?: any;
}

export default APIException;
