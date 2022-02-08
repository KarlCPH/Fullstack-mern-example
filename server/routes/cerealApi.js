
import { Router } from 'express';
const router = Router();


import Cereal from '../models/Cereal.js'

router.get('/test', (req, res) => res.send('cereal route testing!'));


router.get('/', (req, res) => {
  Cereal.find()
    .then(cereals => res.json(cereals))
    .catch(err => res.status(404).json({ nocerealsfound: 'No Cereals found' }));
});


router.get('/:id', (req, res) => {
  Cereal.findById(req.params.id)
    .then(cereal => res.json(cereal))
    .catch(err => res.status(404).json({ nobookfound: 'No Cereal found' }));
});


router.post('/', (req, res) => {
  Cereal.create(req.body)
    .then(cereal => res.json({ msg: 'Cereal added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Cereal' }));
});


router.put('/:id', (req, res) => {
  Cereal.findByIdAndUpdate(req.params.id, req.body)
    .then(cereal => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


router.delete('/:id', (req, res) => {
  Cereal.findByIdAndRemove(req.params.id, req.body)
    .then(cereal => res.json({ mgs: 'Cereal entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such cereal' }));
});

export default router;