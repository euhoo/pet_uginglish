import express from "express";

const router = express.Router();

router.get('/', (request, response) => {
	res.redirect('/registration');
});

export default router
