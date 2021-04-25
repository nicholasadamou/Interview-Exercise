const groupByColor = (groups) => {
	let result = {};
	let people = {};
	Object.keys(groups).forEach(key => {
		const group = groups[key]
		Object.keys(group).forEach(personName => {
			const color = group[personName];
			people[personName] = color;
		})
	})
	let dictionary = []
	Object.keys(people).forEach(name => {
		const color = people[name];
		if (dictionary.indexOf(color) < 0) {
			dictionary.push(color);
		}
	});
	dictionary.forEach((color, i) => {
		let persons = {};
		Object.keys(people).forEach(name => {
			if (people[name] === color) {
				persons[name] = color;
			}
		})
		result[`Group${++i}`] = persons;
	})
	return result;
}

const groups = {
	"Group1": {
	"John": "Blue",
	"Peter": "Green"
  },
  "Group2": {
	"Jane": "Red",
	"May": "Green"
  },
  "Group3": {
	"Howard": "Blue",
	"Nguyen": "Red",
	"Lim": "Green"
  }
}
// const expected = {
// 	"Group1": {
// 		"John": "Blue",
// 		"Howard": "Blue",
// 	  },
// 	  "Group2": {
// 		"Lim": "Green"
// 		"May": "Green"
// 	  },
// 	  "Group3": {
// 		"Jane": "Red",
// 		"Nguyen": "Red",
// 	  }
// }

const result = groupByColor(groups);
console.log(result);
