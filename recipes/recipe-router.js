const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes.' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getRecipeById(id)
        .then(recipe => {
            if (recipe) {
                res.status(200).json(recipe);
            } else {
                res.status(404).json({ message: 'Could not find recipe with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipe.' });
        });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(list => {
            if (list.length) {
                res.status(200).json(list);
            } else {
                res.status(404).json({ message: 'Could not find recipe shopping list.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get shopping list.' });
        });
});

router.get('/:id/instructions', (req, res) => {
    const { id} = req.params;
    Recipes.getInstructions(id)
        .then(instructions => {
            if (instructions.length) {
                res.status(200).json(instructions);
            } else {
                res.status(404).json({ message: 'Could not find instructions.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions.' });
        });
})

// router.post('/', (req, res) => {
//     const schemeData = req.body;

//     Schemes.add(schemeData)
//         .then(scheme => {
//             res.status(201).json(scheme);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to create new scheme' });
//         });
// });

// router.post('/:id/steps', (req, res) => {
//     const stepData = req.body;
//     const { id } = req.params;

//     Schemes.findById(id)
//         .then(scheme => {
//             if (scheme) {
//                 Schemes.addStep(stepData, id)
//                     .then(step => {
//                         res.status(201).json(step);
//                     })
//             } else {
//                 res.status(404).json({ message: 'Could not find scheme with given id.' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to create new step' });
//         });
// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;

//     Schemes.findById(id)
//         .then(scheme => {
//             if (scheme) {
//                 Schemes.update(changes, id)
//                     .then(updatedScheme => {
//                         res.json(updatedScheme);
//                     });
//             } else {
//                 res.status(404).json({ message: 'Could not find scheme with given id' });
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to update scheme' });
//         });
// });

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;

//     Schemes.remove(id)
//         .then(deleted => {
//             if (deleted) {
//                 res.json({ removed: deleted });
//             } else {
//                 res.status(404).json({ message: 'Could not find scheme with given id' });
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to delete scheme' });
//         });
// });

module.exports = router;