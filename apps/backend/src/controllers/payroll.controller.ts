/**
 * Payroll Controller
 * Handles payroll-related HTTP requests
 */
import type { Response } from 'express';
import { batchIdParamSchema } from '../utils/validation';

import type { AuthRequest } from '../middleware/auth.middleware';
import { PayrollService } from '../services/payroll.service';

function getErrorResponse(error: Error): { status: number; message: string } {
  const errorMap: Record<string, { status: number; message: string }> = {
    'Wallet not found': { status: 404, message: 'Wallet not found' },
    'Wallet does not belong to user': { status: 404, message: 'Wallet not found' },
    'Payroll batch not found': { status: 404, message: 'Payroll batch not found' },
    'Cannot add items to a batch that is not pending approval': {
      status: 400,
      message: 'Cannot add items to a batch that is not pending approval',
    },
    'Only pending batches can be approved': {
      status: 400,
      message: 'Only pending batches can be approved',
    },
    'Only approved batches can be processed': {
      status: 400,
      message: 'Only approved batches can be processed',
    },
    'Batch is already being processed': {
      status: 409,
      message: 'Batch is already being processed',
    },
    'Invalid Stellar recipient address': {
      status: 400,
      message: 'Invalid Stellar recipient address',
    },
    'Amount must be a positive number': {
      status: 400,
      message: 'Amount must be a positive number',
    },
    'Asset code must be a non-empty alphanumeric string of 1 to 12 characters': {
      status: 400,
      message: 'Asset code must be a non-empty alphanumeric string of 1 to 12 characters',
    },
    'Asset issuer is required for non-XLM assets': {
      status: 400,
      message: 'Asset issuer is required for non-XLM assets',
    },
    'Invalid Stellar asset issuer address': {
      status: 400,
      message: 'Invalid Stellar asset issuer address',
    },
    'Asset issuer must not be provided for XLM (native asset)': {
      status: 400,
      message: 'Asset issuer must not be provided for XLM (native asset)',
    },
    'Wallet decryption failure': { status: 500, message: 'Wallet decryption failure' },
  };

  return errorMap[error.message] || { status: 500, message: 'An error occurred' };
}

function handleError(res: Response, error: unknown): void {
  if (error instanceof Error) {
    const { status, message } = getErrorResponse(error);
    res.status(status).json({
      success: false,
      error: message,
    });
    return;
  }

  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
}

function requireUser(req: AuthRequest, res: Response): string | null {
  if (!req.user) {
    res.status(401).json({
      success: false,
      error: 'Unauthorized',
    });
    return null;
  }
  return req.user.userId;
}

export const PayrollController = {
  async createBatch(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const validatedData = req.body as any; // Type should be inferrable from schema or created
      const batch = await PayrollService.createPayrollBatch(validatedData, userId);

      res.status(201).json({
        success: true,
        data: batch,
      });
    } catch (error) {
      handleError(res, error);
    }
  },

  async listBatches(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const batches = await PayrollService.getPayrollBatches(userId);

      res.status(200).json({
        success: true,
        data: batches,
      });
    } catch (error) {
      handleError(res, error);
    }
  },

  async getBatch(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const { id } = batchIdParamSchema.parse(req.params);
      const batch = await PayrollService.getPayrollBatch(id, userId);

      res.status(200).json({
        success: true,
        data: batch,
      });
    } catch (error) {
      handleError(res, error);
    }
  },

  async addItem(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const { id } = batchIdParamSchema.parse(req.params);
      const validatedData = req.body as any;
      const item = await PayrollService.addPayrollItem(id, validatedData, userId);

      res.status(201).json({
        success: true,
        data: item,
      });
    } catch (error) {
      handleError(res, error);
    }
  },

  async approveBatch(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const { id } = batchIdParamSchema.parse(req.params);
      const batch = await PayrollService.approvePayrollBatch(id, userId);

      res.status(200).json({
        success: true,
        data: batch,
      });
    } catch (error) {
      handleError(res, error);
    }
  },

  async processBatch(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const { id } = batchIdParamSchema.parse(req.params);
      const result = await PayrollService.processPayrollBatch(id, userId);

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      handleError(res, error);
    }
  },

  async getHistory(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userId = requireUser(req, res);
      if (!userId) return;

      const history = await PayrollService.getPayrollHistory(userId);

      res.status(200).json({
        success: true,
        data: history,
      });
    } catch (error) {
      handleError(res, error);
    }
  },
};
