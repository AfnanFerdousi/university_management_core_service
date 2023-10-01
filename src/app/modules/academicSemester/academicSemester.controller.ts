import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemester } from '@prisma/client';
import catchAsync from '../../../shared/catchAsync';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insertIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'inserted',
    data: result,
  });
});

export const AcademicSemesterController = {
  insertIntoDB,
};
