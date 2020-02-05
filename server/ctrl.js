module.exports = {
	getProduct: (req, res) => {
		const db = req.app.get("db");
		const {id} = req.params;

		db.get_product(id).then(result => {
			res.status(200).send(result)
		}).catch(err => console.log(err))
	},

	getProducts: (req, res) => {
		const db = req.app.get('db');

		db.get_products().then(results => {
			res.status(200).send(results)
		}).catch(err => res.status(500).send(err))
	},

	addProduct: (req, res) => {
		const db = req.app.get('db');
		const {name, price, url} = req.body;
		console.log(req.body)

		db.add_product([name, price, url]).then(results => {
			res.sendStatus(200)
		}).catch(err => res.status(500).send(err))
	},

	updateProduct: (req, res) => {
		const db = req.app.get("db");
		const {id} = req.params;
		const { name, price, url } = req.body;
		
		db.update_product([id, name, price, url]).then(results => {
			res.sendStatus(200)
		}).catch(err => console.log(err))
	},

	deleteProduct: (req, res) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.delete_product(id).then(results => {
			res.status(200).send(results)
		}).catch(err => console.log(err))
	}
};