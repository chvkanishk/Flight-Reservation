const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); 

exports.Payment = (req,res)=>{
    console.log(req.body);

    const {email,cardName,cardNumber,expiryDate,cvv} = req.body;
    db.query('INSERT INTO payment SET ?',{email:email,cardName:cardName,cardNumber:cardNumber,expiryDate:expiryDate,cvv:cvv}, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            console.log(results);
            return res.render('myTrip',{
                message: 'Payment Successful'
            });
        }
    })
}