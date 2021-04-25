# Interview Question

Process/parse the json file & store the content in a NoSQL database of your choice. Note that the content of the input file could change. More groups, people, & colors can be added in the file before being parsed by your program. You can assume that the structure of the object remains the same (ie, no further nested groups) & that 1 person only has 1 color & no duplication in person’s name. You should not hard code any person's names/colors in your application. Input should be parsed from the json file.

Develop RESTful APIs to handle the following:

- Feature for users to add new person and color to the database (via a UI). If a person’s name already exists, replace the input color as the color for that person
- Feature for users to retrieve all people for a particular color. Color can be selected from a pre-populated drop down list retrieved from DB. If no color is selected, display all the people organized by color.

Things to note:

- Ensure that proper security mechanism is implemented for your APIs
- You can use any languages for backend / API (Java, NodeJS, Go, etc..).
- DB must be NoSQL
- Front end must be React
- Bonus points for including any automated testing and Docker/container deployment.
- State any assumptions that you make on the logics/rules.
- Organize your code in your own personal Github & send the link to the repo with detailed instruction on how to setup & run the application.
