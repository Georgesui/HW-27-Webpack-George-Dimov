import {
	Student
} from '../student';
import {
	Teacher
} from '../teacher';


const student1 = new Student('George', 27, 'male', 'sport')
const teacher = new Teacher('Olga', 34, 'female', 'science', 'biology')
console.log(student1, teacher)