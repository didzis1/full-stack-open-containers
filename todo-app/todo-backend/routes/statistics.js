const express = require('express');
const router = express.Router();
const {getAsync} = require('../redis');

router.get('/', async (_, res) => {
	const todosCounter = await getAsync('added_todos');
	res.send({
		added_todos: todosCounter
	})
});

module.exports = router;