let express = require('express')
const {notesControllerCreate,
       notesControllerGetAll,
       notesControllerSingle,
       notesControllerUpdate,
       notesControllerDelete,
       notesControllerPatch
}= require('../controller/notes.controller')

let router = express.Router()

router.post('/create',notesControllerCreate)
router.get('/allNotes',notesControllerGetAll)
router.get('/:id',notesControllerSingle)
router.put('/:id',notesControllerUpdate)
router.delete('/:id',notesControllerDelete)
router.patch('/:id',notesControllerPatch)



module.exports = router