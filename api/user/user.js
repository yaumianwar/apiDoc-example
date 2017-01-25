/**
 *
 * @api {get} /user Get All User Information 
 * @apiName GetAllUser
 * @apiGroup User
 *
 * @apiSuccess (200) {Number} id Users unique ID.
 * @apiSuccess (200) {String} username Username of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *			"type": "user",
 *			"attributes": [
 *				{
 *					"id": 1,
 *					"username": "yaumianwar"
 *				},
 *				{
 *					"id": 2,
 *					"username": "anwaramin"	
 *				}
 *			]
 *		}   
 *     }
 *
 *
 * @apiError (409) NotAuthenticated Only authenticated user can read the data.
 *
 * @apiErrorExample NotAuthenticated:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "You don't have permission"
 *		}
 *  }
 *
 */

 /**
 *
 * @api {get} /user/:id Get a User Information 
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess (200) {Number} id Users unique ID.
 * @apiSuccess (200) {String} username Username of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [{
 *			"type": "user",
 *			"id": 1,
 *			"attributes": {
 *				"username": "nuryaumi"
 *			}
 *		}]   
 *     }
 *
 *
 * @apiError (409) NotAuthenticated Only authenticated user can read the data.
 * @apiError (404) UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample NotAuthenticated:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "You don't have permission"
 *		}
 *  }
 *
 * @apiErrorExample UserNotFound:
 *  HTTP/1.1 404 Not Found
 *	{
 *		"error": {
 *			"message": "User is not found"
 *		}
 *  }
 *
 */

 /**
 *
 * @api {post} /user/update-username Update Username 
 * @apiName UpdateUsername
 * @apiGroup User
 *
 * @apiParam {String} username Users username.
 *
 * @apiSuccess (201) {Number} id Users unique ID.
 * @apiSuccess (201) {String} username Username of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "data": [{
 *			"type": "user",
 *			"id": 1,
 *			"attributes": {
 *				"username": "nuryaumi"
 *			}
 *		}]   
 *     }
 *
 *
 * @apiError (409) NotAuthenticated Only authenticated user can update the username.
 * @apiError (409) ValidationError The input is not acceptable.
 * @apiError (409) MaximumUpdate Username update has passed the maximum limit.
 * @apiError (409) BlockedUsername Username cannot be used.
 * @apiError (409) ReUseUsername New username is same with old username.
 * @apiError (409) UsernameNotAvailable Username is not available.
 *
 * @apiErrorExample NotAuthenticated:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "You don't have permission"
 *		}
 *  }
 *
 * @apiErrorExample ValidationError:
 *  HTTP/1.1 409 Conflit
 *	{
 * 		"error": {
 *  		"message": "Invalid Data",
 *   		"errors": [
 *     			{
 *					"field": "username",
 *      			"message": "Username cannot be empty"
 *    			},
 *     			{
 *       			"field": "username",
 *       			"message": "Min 8 characters"
 *     			},
 *     			{
 *       			"field": "username",
 *       			"message": "Max 15 characters"
 *     			}
 *   		]
 * 		}
 *	}
 *
 *
 * @apiErrorExample MaximumUpdate:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "Username Update Has Passed the Maximum Limit"
 *		}
 *  }
 *
 * @apiErrorExample BlockedUsername:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "Username can't be used"
 *		}
 *  }
 *
 * @apiErrorExample ReUseUsername:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "New username can't be the same with old username"
 *		}
 *  }
 *
 * @apiErrorExample UsernameNotAvailable:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "Username is not available"
 *		}
 *  }
 *
 */

 /**
 *
 * @api {post} /user/update-password Update Password 
 * @apiName UpdatePassword
 * @apiGroup User
 *
 * @apiParam {String} password Users password.
 * @apiParam {String} confirm_password Password confirmation.
 *
 * @apiSuccess (201) {Number} id Users unique ID.
 * @apiSuccess (201) {String} username Username of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "data": [{
 *			"type": "user",
 *			"id": 1,
 *			"attributes": {
 *				"username": "nuryaumi"
 *			}
 *		}]   
 *     }
 *
 *
 * @apiError (409) NotAuthenticated Only authenticated user can update the password.
 * @apiError (409) ValidationError The input is not acceptable.
 * @apiError (409) MaximumUpdate Password update has passed the maximum limit.
 *
 * @apiErrorExample NotAuthenticated:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "You don't have permission"
 *		}
 *  }
 *
 * @apiErrorExample ValidationError:
 *  HTTP/1.1 409 Conflict
 *	{
 * 		"error": {
 *  		"message": "Invalid Data",
 *   		"errors": [
 *     			{
 *					"field": "password",
 *      			"message": "Password cannot be empty"
 *    			},
 *     			{
 *       			"field": "password",
 *       			"message": "Min 8 characters"
 *     			},
 *     			{
 *       			"field": "password",
 *       			"message": "Max 15 characters"
 *     			},
 *     			{
 *					"field": "confirm_password",
 *      			"message": "Confirm password cannot be empty"
 *    			},
 *     			{
 *					"field": "confirm_password",
 *      			"message": "Confirm Password doesn't match with Password"
 *    			}
 *   		]
 * 		}
 *	}
 *
 *
 * @apiErrorExample MaximumUpdate:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "Password Update Has Passed the Maximum Limit"
 *		}
 *  }
 *
 */