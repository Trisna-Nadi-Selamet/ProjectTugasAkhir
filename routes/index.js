const router = require('express').Router();

const UserRoutes = require('./users');
const BlogRoutes = require('./blogs');
const ItemRoutes = require('./items');
const TypeRoutes = require('./types');
const BlogcommentRoutes = require('./blogcomment');

router.get('/', (req, res) => {
  res.json({
    message: 'home Page',
  });
});

router.use('/users', UserRoutes);
router.use('/blogs', BlogRoutes);
router.use('/items', ItemRoutes);
router.use('/types', TypeRoutes);
router.use('/blogcomment', BlogcommentRoutes);

module.exports = router;
