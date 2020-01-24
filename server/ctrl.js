module.exports = {
	getProduct: (req, res) => {
		const db = req.app.get("db");
		const {id} = req.params
		db.get_meme(+id).then(response => {
			const data = response[0];
			console.log(data)
			res.status(200).send(data);
		});
	},

	getAllProducts: (req, res) => {
		const db = req.app.get("db");
		db.get_products().then(data => res.status(200).send(data));
	},

	addProduct: (req, res) => {
		console.log(req.body);
		const db = req.app.get("db");
		const { name, price, url } = req.body;

		db.add_product([ name, price, url ]).then(() => res.sendStatus(200));
	},

	updateProduct: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const { name, price, url } = req.body;

		db.update_product([name, price, url]).then(() => res.sendStatus(200));
	},

	deleteProduct: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;

		db.delete_product(id).then(data => res.sendStatus(200));
	}
};