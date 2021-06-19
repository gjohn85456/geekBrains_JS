'use strict'
//-----------------------------------------Задание 1.1 -------------------------------------------------
//Стиль es5
let dicount = 0.25;

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function(price) {
    return console.log(this.price - this.price * dicount);
}
let product1 = new Product;
product1.name = "meat";
product1.price = 100;
product1.make25PercentDiscount();
//Стиль es6 
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscountES6() {
        console.log(this.price - this.price * dicount);
    }
}
let product2 = new ProductES6;
product2.name = "cheese";
product2.price = 120;
product2.make25PercentDiscountES6();

//-----------------------------------------Задание 1.2 -------------------------------------------------
//Стиль es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}


AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let post1 = new AttachedPost;
post1.author = "Ben";
post1.text = "dude";
post1.date = "05.05.1987";
post1.edit("friend");
post1.makeTextHighlighted();
console.log(post1);
//Стиль es6

class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}
class AttachedPostES6 extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let postES6 = new AttachedPostES6;
postES6.author = "Jack";
postES6.text = "colleague";
postES6.date = "01.02.1990";
console.log(postES6);
postES6.makeTextHighlighted();
postES6.edit("brother");
console.log(postES6);