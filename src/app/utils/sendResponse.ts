import { Response } from 'express';


type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data: T;
}

const sendRenponse = <T>(res: Response, data: TResponse<T>) => {
    
}