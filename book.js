const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); 

exports.homepage = (req,res)=>{
    console.log(req.body);

    const {boarding,arrival,depart_date,return_date,passengers,email} = req.body;
    db.query('INSERT INTO booked SET ?',{boarding:boarding,arrival:arrival,depart_date:depart_date,return_date:return_date,passengers:passengers,email:email}, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            console.log(results);
            return res.render('Payment',{
                message: 'Flight booked'
            });
        }
    })
}