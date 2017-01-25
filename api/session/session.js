
/**
 * @api {post} /session/register Session Registration 
 * @apiName SessionRegistration
 * @apiGroup Session
 *
 * @apiParam {String} username Users username.
 * @apiParam {String} email Users email.
 * @apiParam {String} password Users password.
 * @apiParam {String} confirm_password password confirmation.
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
 * @apiError (409) ValidationError The input is not acceptable.
 * @apiError (409) UsernameOrEmailHasBeenUsed The username/email has been used of another user
 *
 *
 * @apiErrorExample ValidationError:
 *  HTTP/1.1 409 Conflict
 *	{
 * 		"error": {
 *  		"message": "Invalid Data",
 *   		"errors": [
 *     			{
 *					"field": "username",
 *      			"message": "Username cannot be empty"
 *    			}
 *   		]
 * 		}
 *	}
 *
 *
 * @apiErrorExample UsernameOrEmailHasBeenUsed:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "Username/Email has been registered"
 *		}
 *  }
 *
 */
 
 /**
 * @api {post} /session/login Session Login
 * @apiName SessionLogin
 * @apiGroup Session
 *
 * @apiParam {String} username Users username.
 * @apiParam {String} email Users email.
 *
 * @apiSuccess (201) {Number} id Users unique ID.
 * @apiSuccess (201) {String} username Username of the User.
 *
 * @apiSuccessExample Login-Success:
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
 * @apiError (409) ValidationError The input is not acceptable.
 * @apiError (409) WrongUsernameOrPassword Wrong username/password combination.
 *
 * @apiErrorExample ValidationError:
 *  HTTP/1.1 409 Conflict
 *	{
 *		"error": {
 *			"message": "Invalid Data",
 *			"errors": [
 *				{
 *					"field": "username",
 *					"message": "Usename cannot be empty"
 *				}
 *			]
 *		}
 *   }
 *
 * @apiErrorExample WrongUsernameOrPassword:
 *  HTTP/1.1 409 Conflict
 *   {
 *		"field": "username",
 *		"message": "wrong username/password combination"
 *   }
 */
