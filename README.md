# backend-task

<h3> APIs :</h3>
POST https://pulseid.herokuapp.com/transaction
<br>
POST https://pulseid.herokuapp.com/ruleset
<br>
GET https://pulseid.herokuapp.com/cashback

<br>
<h3> Tech stack/Library used </h3>
<li> Nodejs,Expressjs for APIs. </li> 
<li> MongoDB as Database. </li>
<li> Mongoose for DB queries. </li>
<li> JOI for request body validation </li>

<h3>Assumptions :</h3>
<h4>For Cashback Calculation Logic </h4>
1. For cashback , startDate and endDate both are inclusive.

<h4>For Request Body validation:</h4>
1) For Post Ruleset Request:
<br>
    "startDate"  <br>
    "endDate" <br>
    "cashback" <br>
    "redemptionLimit"
 <br>
 
Above keys are added as mandatory fields in request body, can be updated in ruleset.schema.js file as per need
<br>
2) For Post Transaction Request:
  <br>
    "id" <br>
    "date" <br>
    
Above keys are added as mandatory fields in request body, can be updated in transaction.schema.js file as per need


<h4>For DB : </h4>
1. Transaction ID must be unique for each Transaction
