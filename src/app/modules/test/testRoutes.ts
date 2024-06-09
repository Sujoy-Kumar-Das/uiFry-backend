import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    data: [],
  });
});

export const testRoutes = router;
