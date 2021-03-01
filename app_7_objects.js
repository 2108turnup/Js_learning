const user = {
  firstName: 'Denis',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  // "user-adress" дифис нужен для кавычек, тк будет неправильно распозанно 
  'user-adress': {
    city: 'Kharkiv'
  },
skills: ['html', 'css', 'js']
}
let value;
let prop = 'email';

value = user.firstName;//можно обращаться через точно
value = user['isAdmin']//в более сложных ситуациях через масив и кавычки
value = user['user-adress'];
value = user['user-adress'].city;
value = user['user-adress']['city'];
value = user[prop];//можно образаться к переменным через скобки масива, но без кавычек
value = user[prop][0];

user.firstName = 'Den';

value = user.firstName;

user.info = 'Some info';

user['user-adress'].city = 'Kiev';
user['user-adress'].country = 'Ukraine';

// user.plan.basik = 'basic';нельзя записать в объект, которого не сузествует


console.log(value);
console.log(user);