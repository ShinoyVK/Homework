const express = require('express');
const ProductData = require('./src/model/productdata');
const UserData = require('./src/model/newuserdata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = new express();
 app.use(cors());
 app.use(bodyparser.json());

 app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONs")
    ProductData.find()
    .then(function(products){
        res.send(products);
    });
 });

 app.post('/insert', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    var storeProduct = {
        productId: req.body.newProduct.productId,
        productName: req.body.newProduct.productName,
        productCode: req.body.newProduct.productCode,
        releaseDate: req.body.newProduct.releaseDate,
        description: req.body.newProduct.description,
        price: req.body.newProduct.price,
        starRating: req.body.newProduct.starRating,
        imageUrl: req.body.newProduct.imageUrl
    }
    var productToInsert = new ProductData(storeProduct);
    productToInsert.save();
 });

 app.post('/insertUser', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    var storeUser = {
        firstName: req.body.newUser.firstName,
        lastName: req.body.newUser.lastName,
        gender: req.body.newUser.gender,
        dob: req.body.newUser.dob,
        district: req.body.newUser.district,
        phone: req.body.newUser.phone,
        address: req.body.newUser.address,
        email: req.body.newUser.email,
        password: req.body.newUser.password
    }
    var UserToInsert = new UserData(storeUser);
    UserToInsert.save((err, registeredUser)=>{
        if(err){
            console.log(err);
        }
        else{
            let payload = {sunject:UserToInsert._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
    });
 });

 app.post('/loginUser',function(req,res){
    var email = req.body.userCred.email;
    var password = req.body.userCred.password;
    UserData.findOne({email:email},(err,user)=>{
        if(password==user.password){
            let payload = {sunject:user._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
        else{
            res.status(401).send('invalid password');
        }
       
    })
    
});



 app.post('/delete', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONs")
    var id = req.body.productId;
    var query = {_id:id};
    ProductData.deleteOne(query, function(err,result){
        if (err) {
            console.log("error query");

        } else {            
            console.log(result);

        }
    });
 

});


app.post('/updateProduct',function(req,res){
    const id = req.body.DBid;
    console.log(id);
    var query = { _id: id};
    var newvalues = { $set: {
        productId: req.body.newProduct.productId,
        productName: req.body.newProduct.productName,
        productCode: req.body.newProduct.productCode,
        releaseDate: req.body.newProduct.releaseDate,
        description: req.body.newProduct.description,
        price: req.body.newProduct.price,
        starRating: req.body.newProduct.starRating,
        imageUrl: req.body.newProduct.imageUrl
        } };

        ProductData.updateOne(query, newvalues, function(err, result) {
        if (err) {

            console.log("error query");

        } else {
            
            console.log(result);
            res.redirect('/products');

        }
    })
});


app.listen(3030,function(){
    console.log("Listening");
});