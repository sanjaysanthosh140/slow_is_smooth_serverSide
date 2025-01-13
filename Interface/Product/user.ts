import { deleteProd, FetchProduct, newProduct, updateProd} from "../Controls/Product";

const express = require('express');
const router = express.Router();

router.post('/new',newProduct)
router.get('/get',FetchProduct)
router.delete('/delete/:id',deleteProd)
router.patch('/update/:id',updateProd)

module.exports = router;
