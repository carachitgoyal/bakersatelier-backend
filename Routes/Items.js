const Item = require('../Model/Item');
const router = require('express').Router();

//* create
router.post('/', async (req, res) => {
  try {
    const createdItem = await Item.create(req.body);
    console.log(createdItem);
    res.status(201).json({ createdItem });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//* get featured Items
router.get('/', async (req, res) => {
  try {
    const { featured, category } = req.query;
    const queryObject = {};
    if (featured) {
      queryObject.featured = featured === 'true' ? true : false;
    }
    if (category) {
      queryObject.category = category;
    }
    const getItems = await Item.find(queryObject);
    res.status(200).json({ getItems, nbHits: getItems.length });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

//* get Item by :id
router.get('/:id', async (req, res) => {
  try {
    const { id: ItemID } = req.params;
    const getItem = await Item.findOne({ _id: ItemID });
    if (!getItem) {
      return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(201).json({ getItem });
  } catch (err) {
    res.status(500).json(err);
  }
});
//* get Item by :id
router.get('/category/:id', async (req, res) => {
  try {
    const { id: ItemID } = req.params;
    const getItem = await Item.findOne({ _id: ItemID });
    if (!getItem) {
      return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(201).json({ getItem });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* delete Item
router.delete('/:id', async (req, res) => {
  try {
    const { id: ItemID } = req.params;
    const deleteItem = await Item.findOneAndDelete({ _id: ItemID });
    if (!deleteItem) {
      return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(201).json({ Item: null, status: 'Success' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* get all Items
router.get('/', async (req, res) => {
  try {
    const getAllItems = await Item.find({});
    res.status(201).json({ getAllItems });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
