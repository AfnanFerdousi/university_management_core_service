import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemester } from '@prisma/client';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.insertIntoDB(req.body);
        sendResponse<AcademicSemester>(res,{
            statusCode: 200,
            success: true,
            message: "inserted",
            data: result
        })
    } catch (error) {
        next(error);        
    }

}

export const AcademicSemesterController = {
    insertIntoDB
}