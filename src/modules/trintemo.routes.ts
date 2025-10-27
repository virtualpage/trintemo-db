import { Router } from 'express';
import { confirmation, drink, message, notConfirmation, notDrink } from './trintemo.controller';

const router = Router()

router.patch('/confirmation/:nome', confirmation);
router.patch('/not-confirmation/:nome', notConfirmation);

router.patch('/drink/:nome', drink);
router.patch('/not-drink/:nome', notDrink);

router.patch('/message/:nome', message);

export default router;