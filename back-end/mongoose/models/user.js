    
const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
 const userSchema = new Schema( {
 "height": Number,
"weight": Number,
"bmi": Number,
"bmr": Number,
"cal": Number,
"condition": String,
"recomandetCal": Number,
"name": String,
"saveDate": String,
"food": String,
"posts": String
 } )





 const user = mongoose.model( 'user', userSchema )

  module.exports = user