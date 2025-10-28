import { Router } from 'express';
import { confirmation, drink, guests, message, newGuest, notConfirmation, notDrink, step } from './trintemo.controller';

const router = Router()

router.get('/guests', guests)
router.post('/new-guest/:nome', newGuest);

router.patch('/confirmation/:nome', confirmation);
router.patch('/not-confirmation/:nome', notConfirmation);

router.patch('/drink/:nome', drink);
router.patch('/not-drink/:nome', notDrink);

router.patch('/message/:nome', message);

router.patch('/step/:nome/:step', step);

export default router;
