import type { Request, Response } from 'express';
import { handleControllerError } from '../utils/errors';
import { confirmationService, drinkService, messageService, notConfirmationService, notDrinkService } from './trintemo.service';

export const confirmation = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;

    try {
        await confirmationService(convidado);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
};

export const notConfirmation = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;

    try {
        await notConfirmationService(convidado);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
};

export const drink = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;

    try {
        await drinkService(convidado);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
};

export const notDrink = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;

    try {
        await notDrinkService(convidado);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
};

export const message = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;
    const message = req.body.message;

    try {
        await messageService(convidado, message);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
};