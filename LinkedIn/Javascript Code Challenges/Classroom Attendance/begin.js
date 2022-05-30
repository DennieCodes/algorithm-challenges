getStudents = (classroom) => {
	const { hasTeachingAssistant } = classroom;

	if (hasTeachingAssistant) {
		let [teacher, assistant, ...students] = classroom.classList;
		return students;
	} else {
		let [teacher, ...students] = classroom.classList;
		return students;
	}
};

const classroom = {
	hasTeachingAssistant: true,
	classList: ['John', 'Mary', 'Abel', 'Cain', 'John', 'Paul'],
};

const classroom2 = {
	hasTeachingAssistant: false,
	classList: ['John', 'Mary', 'Abel', 'Cain', 'John', 'Paul'],
};

console.log(getStudents(classroom2));
