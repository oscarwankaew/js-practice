1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
var person = { firstName: "Ada", lastName: "Lovelace", email: "ada.lovelace@email.com" };
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.email);

2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
var people = [
  { firstName: "Oscar", lastName: "Wankaew" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" },
];
console.log(people[0].firstName);
console.log(people[0].lastName);

3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
var menu = { burger: 8.99, frenchFries: 1.99, soda: 2.99 };
menu["salad"] = 5.99;
console.log(menu);

4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
var book = { title: "Bedtime story", author: "Santa", pages: 15 };
console.log(book.title);
console.log(book.author);
console.log(book.pages);

5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.
var books = [
  { title: "Bedtime story", author: "Santa" },
  { title: "Routines", author: "David Doe" },
  { title: "Food", author: "Chef Jane" },
];
console.log(books[2].author);

6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.
var captitals = { illinois: "Chicago", california: "Los Angeles", washington: "Seattle" };
captitals["texas"] = "Dallas";
console.log(captitals);

7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.
var laptop = { brand: "Apple", model: "MacBook", year: "2022" };
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.
var laptops = [
  { brand: "Apple", model: "MacBook" },
  { brand: "Apple", model: "MacBook Pro" },
  { brand: "Asus", model: "AsusX gaming" },
];
console.log(laptops[1].model);

9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.
var dictionary = { bad: "of poor quality or a low standard", mad: "very angry" };
dictionary["glad"] = "delighted";
console.log(dictionary);

10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.
var shirt = { brand: "Hanes", color: "white", size: "large" };
console.log(shirt.brand);
console.log(shirt["color"]);
