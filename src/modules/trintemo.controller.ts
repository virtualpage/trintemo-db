import type { Request, Response } from 'express';
import { handleControllerError } from '../utils/errors';
import { confirmationService, drinkService, guestsService, messageService, newGuestsService, notConfirmationService, notDrinkService, stepService } from './trintemo.service';

export const guests = async (req: Request, res: Response): Promise<void> => {

    try {
        const guests = await guestsService();
        res.status(200).json(guests);
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
}

export const newGuest = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;

    try {
        await newGuestsService(convidado);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
}
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

export const step = async (req: Request, res: Response): Promise<void> => {
    const convidado = req.params.nome;
    const step = Number(req.params.step);

    try {
        await stepService(convidado, step);
        res.status(204).end();
        return;

    } catch (error: any) {
        handleControllerError(res, error);
    }
}
