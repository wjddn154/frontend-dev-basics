/**
 * 6. 구조 분해
 */

//ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'wjddn154@gmail.com'
};

// 동일한 의미
// let firstName = user.firstName;
// let lastName = user.lastName;
({firstName, lastName} = user);



console.log(firstName, lastName);


