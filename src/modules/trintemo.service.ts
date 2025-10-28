import { prisma } from '../lib/prisma';

export const guestsService = async () => {
    return await prisma.convidado.findMany();
}

export const newGuestsService = async (nome: string) => {
    await prisma.convidado.createMany({
        data: {nome},
    })
}

//----------------------------

export const confirmationService = async  (nome: string) => {
    await prisma.convidado.updateMany({
        where: { nome },
        data: { presenca: true },
    })
}

export const notConfirmationService = async  (nome: string) => {
    await prisma.convidado.updateMany({
        where: { nome },
        data: { presenca: false },
    })
}

//----------------------------

export const drinkService = async  (nome: string) => {
    await prisma.convidado.updateMany({
        where: { nome },
        data: { bebidaAlcoolica: true },
    })
}

export const notDrinkService = async  (nome: string) => {
    await prisma.convidado.updateMany({
        where: { nome },
        data: { bebidaAlcoolica: false },
    })
}

//----------------------------

export const messageService = async (nome: string, message: string) => {
    await prisma.convidado.updateMany({
        where: { nome },
        data: { message },
    })
}

export const stepService = async (nome: string, number: number) => {
    await prisma.convidado.updateMany({
        where: {nome},
        data: {step: number},
    })
}
