 'use strict'

 //-----------------------------------------Задание 1 -------------------------------------------------
 for (let i = 0; i <= 10; i++) {
     let result = i % 2;
     if (i == 0) {
         console.log("0 - это ноль")
     } else if (result !== 0) {
         console.log(`${i} - нечётное число`);
     } else {
         console.log(`${i} - чётное число`);
     }
 }
 //-----------------------------------------Задание 2 -------------------------------------------------
 const post = {
     autor: "John", //вывести этот текст
     postId: 23,
     comments: [{
             userId: 10,
             userName: "Alex",
             text: "Lorem ipsum",
             rating: {
                 likes: 10,
                 dislikes: 2 //вывести это число
             }
         },
         {
             userId: 5, //вывести это число
             userName: "Jane",
             text: "Lorem ipsum 2", //вывести этот текст
             rating: {
                 likes: 3,
                 dislikes: 1
             }
         }

     ]
 };
 console.log(post.autor);
 console.log(post.comments[0].rating.dislikes);
 console.log(post.comments[1].userId);
 console.log(post.comments[1].text);
 //-----------------------------------------Задание 3 -------------------------------------------------
 const product = [{
         id: 3,
         price: 200,
     },
     {
         id: 4,
         price: 900,
     },
     {
         id: 1,
         price: 1000,
     }
 ];

 const keys = Object.keys(product);

 keys.forEach(key => {
     let priceWithoutDiscount = product[key].price;
     let discountPrice = priceWithoutDiscount - priceWithoutDiscount * 0.15;
     product[key].price = discountPrice;
 })

 console.log(product);
 //-----------------------------------------Задание 4 -------------------------------------------------
 const anotherProducts = [{
         id: 3,
         price: 127,
         photos: [
             "1.jpg",
             "2.jpg",
         ]
     },
     {
         id: 5,
         price: 499,
         photos: []
     },
     {
         id: 10,
         price: 26,
         photos: [
             "3.jpg"
         ]
     },
     {
         id: 8,
         price: 78,
     }
 ];

 // filter передаем объект, проверяем у него наличие атрибута photos, потом проверяем есть ли там элементы
 const filtredAnotherProducts = anotherProducts.filter(function(product) {
     if (product.photos !== undefined) {
         if (product.photos.length !== 0) {
             return product.photos;
         }
     }
 })

 console.log(filtredAnotherProducts);

 anotherProducts.sort(function(a, b) {
     if (a.price < b.price) {
         return -1;
     }
     if (a.price > b.price) {
         return 1;
     }
     return 0;
 })
 console.log(anotherProducts);
 //-----------------------------------------Задание 5 -------------------------------------------------

 for (let i = 0; i <= 9; console.log(i++));

 //-----------------------------------------Задание 6 -------------------------------------------------
 let x = "";
 for (let i = 1; i < 20; i++) {
     x = x + "x";
     console.log(x);
 }