const express = require("express");
const router = express.Router();

const {
	getColorOptions,
	getPeopleByColor,
	getPeople,
	addPerson
} = require("../queries/person");

//=====================================================
// GET

/**
 * @swagger
 * paths:
 *   /person:
 *     get:
 *       summary: Fetches a list of all the people along with their favorite color.
 *       responses:
 *         200:
 *           description: A list of people.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The person ID.
 *                       example: 0
 *                     firstName:
 *                       type: string
 *                       description: The first name of the person.
 *                       example: Nick
 *                     color:
 *                       type: string
 *                       description: The favorite color of the person.
 *                       example: blue
 *                     created_at:
 *                       type: string
 *                       format: date
 *                       description: The date of the record creation.
 */
router.get('/', getPeople);

/**
 * @swagger
 * paths:
 *   /person/getPeopleByColor:
 *     get:
 *       summary: Retrieves a list of people based on a given favorite color.
 *       parameters:
 *         - in: query
 *           name: color
 *           required: true
 *           schema:
 *             type: string
 *           description: A given favorite color.
 *       responses:
 *         200:
 *           description: A list of people with a given favorite color.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The person ID.
 *                       example: 0
 *                     firstName:
 *                       type: string
 *                       description: The first name of the person.
 *                       example: Nick
 *                     color:
 *                       type: string
 *                       description: The favorite color of the person.
 *                       example: blue
 *                     created_at:
 *                       type: string
 *                       format: date
 *                       description: The date of the record creation.
 */
router.get('/getPeopleByColor', getPeopleByColor);

/**
 * @swagger
 * paths:
 *   /person/colors:
 *     get:
 *       summary: Retrieves a list of all unique favorite colors.
 *       responses:
 *         200:
 *           description: A list of unique favorite colors.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: The favorite color of the person.
 *                   example: blue
 */
router.get('/colors', getColorOptions);

//=====================================================
// POST

/**
 * @swagger
 * paths:
 *  /person:
 *   post:
 *     summary: Adds a new person if the person does not exist. Otherwise, it will update that person's record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the person.
 *                 example: Nick
 *               color:
 *                 type: string
 *                 description: The favorite color of the person.
 *                 example: blue
 *     responses:
 *       200:
 *         description: People successfully added or updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The person ID.
 *                     example: 0
 *                   firstName:
 *                     type: string
 *                     description: The first name of the person.
 *                     example: Nick
 *                   color:
 *                     type: string
 *                     description: The favorite color of the person.
 *                     example: blue
 *                   created_at:
 *                     type: string
 *                     format: date
 *                     description: The date of the record creation.
 */
router.post('/', addPerson);

module.exports = router;
