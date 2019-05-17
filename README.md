# E-Commerce Team Project

#### Created by [K Strickland](https://github.com/kstrickland0612), [Robbie Bixler](https://github.com/rrbixler), [Aiden Flynn](https://github.com/awf825) & [Yurii Yarema](https://github.com/yura85).

Welcome to our e-commerce app! This store sells hats modeled by adorable animals. Users can browse a catalog of hats without being logged in, and when they log in they are able to add items to their cart and go through checkout (integrated with Stripe). Users can also view past orders.  

## Technologies Used

* HTML5
* CSS3
* Bootstrap
* JavaScript
* jQuery
* Handlebars
* Ajax
* Express
* MongoDB
* Mongoose
* Heroku
* Stripe

## Planning

Throughout the project we had daily standups and used mob programming and pair programming on most of the features. 

### Planned Schedule

#### Day 1:
- Back-end setup
- CRUD actions
- Auth actions

#### Day 2:
- Stripe

#### Day 3:
- Design
- README
- Bugs/troubleshooting

### ERD
[ERD](https://i.imgur.com/1JQanwT.png)

### Wireframe
[Wireframe](https://i.imgur.com/xf3y2Tn.png)

### User Stories

#### Authorization Features:
1. As an unregistered user, I would like to sign up with email and password.
2. As a registered user, I would like to sign in with email and password.
3. As a signed in user, I would like to change password.
4. As a signed in user, I would like to sign out.

#### Main Features:
5. As an unregistered user, I would like to see all of the products.
6. As a signed in user, I would like to add and remove products from a shopping cart.
7. As a signed in user, I would like to purchase products in a shopping cart using Stripe.
8. As a signed in user, I would like to see all my past orders.

#### Extra Features (if there is time):
9. Build a search feature so that people can search for specific products by name

### Routes

- POST /sign-up users#signup
- POST /sign-in users#signin
- DELETE /sign-out users#sign-out
- PATCH /change-password users#changepw
- GET /products products#index
- GET /products/:id products#show (related to stretch goal)
- POST /orders orders#create
- GET /orders orders#index
- PATCH /orders/:id orders#update

## Challenges

### Stripe

The stripe documentation was pretty confusing to sort through. We spent a lot of time figuring out where to set up stripe in our files, and what pieces were necessary from the docs. We watched several tutorials and were able to get it working on the third day! 

### Seeding documents into Heroku

We were considering creating a seed button with admin privilleges that we could click to populate the store with items. We ended up figuring out how to use mLab to add documents to the database, and that worked very well. 

### Remove item from cart

This feature was confuding because it seems like we should be 'deleting' something, but really we are using a PATCH route to update the cart by remove an item from the order's items array. We had to troubleshoot a lot of bugs related to this feature. 

## Future Thinking

#### Future improvements:
* Make past order display only owned past order of signed in user (bug).
* Add more information to past order display (currently shows timestamp).
* Remove add to cart button for items already in cart.
* Give the user a confirmation message when an item is successfully added to the cart.
* When cart is empty, show a message to the user, "Cart empty". 
* Add quantity to items in cart.
* Item search bar.

## Try it out!

### [You can visit the deployed app here!](https://team-kray.github.io/e-commerce-client/)
Please do not submit real credit card information through the app. Instead, use the following test card number, a valid expiration date in the future, and any random CVC number, to create a successful payment: 4242 4242 4242 4242

### [The deployed Heroku database lives here](https://hidden-tor-37672.herokuapp.com/)

### [Check out our back-end repo here](https://github.com/team-kray/e-commerce-client)
