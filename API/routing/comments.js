/**
 * Auth is in middlewares
 * @type {Object}-Auth is object(Functions) which is sent by middlewares
 */
const auth = require('../middlewares/auth');
const checkOwnership = require('../middlewares/checkOwnership');
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const commentsController = require('../controllers/comments');

/** @route      GET /api/posts/comments/:id
 *  @desc       fetch all comments of a post
 *  @access     Private
 */
router.get('/:id', commentsController.getComments);

/** @route      POST /api/posts/comments/:id
 *  @desc       add a comment to a post
 *  @access     Private
 */
router.post(
    '/:id',
    [
        auth,
        [
            check('body','body is required')
                .not()
                .isEmpty()
        ]
    ], commentsController.addComment);

/** @route      DELETE /api/posts/comments/:id
 *  @desc       delete a comment to a post
 *  @access     Private
 */
router.delete('/:id', [ auth, checkOwnership ], commentsController.deleteComment);



module.exports = router;