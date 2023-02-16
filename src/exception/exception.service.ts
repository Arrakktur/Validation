import {HttpException, HttpStatus, Injectable} from '@nestjs/common';

@Injectable()
export class ExceptionService {
    newException(error: any): HttpException{
        return new HttpException({
            status: 'exception',
            ...error
        }, HttpStatus.FORBIDDEN, { cause: new Error("Исключение")});
    }

    async wrapException<T>(func: Function, params?: any): Promise<T> {
        try {
            return await func(params);
        } catch (error) {
            throw this.newException(error);
        }
    }
}
