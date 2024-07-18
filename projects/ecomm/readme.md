## eComm Project Modules

### eComm User Facing WebApp
1. User => Login, SignUp, Logout, Forgot Password, Reset Password etc
2. Product => Prod CRUD withuct , Read -> List product, Product Details
3. Cart => Add to cart, Remove From Cart, Wishlist etc
4. Checkout Module => Placing an order, Making Payments etc
5. Misc => View order history etc

### Seller Portal

### Admin Portal
Roles : Customer, Seller, Admin


how will the product list api know that the user is logged in and WHICH USER IS CALLING THE API?
when the user logs in save isLogged true in users collection for that user.

unauthorized?
authorization?
authentication?

Authentication : To verify the user if they are the same user they claim to be (Login)
Authorization : Verifying the access level (permission) of the user (Role of the user)

JWT (Json Web Token)


abcd12345 => Plain Text

asdf&*S*F9738947ff30_!%^# => Cipher Text

Encode / Decode => Not related to security (Std conversion for different systems) 2 Way Process

Encryption / Decryption => 2 Way process

Hashing => 1 Way Process


100 Records
10 Items Per page -> 10 Pages

Page Size = 10
Page No -> 1 ==> 1 - 10
Page No -> 2 ==> 11 - 20
Page No -> 3 ===> 21 - 30
.....


Middlewares