const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); 

exports.Register = (req,res)=>{
    console.log(req.body);

    const {firstName, lastName,email,passportId,stateId,address,city,state,country,password} = req.body;
    
    db.query('SELECT email FROM users WHERE email = ?',[email],(error,results) => {
        if(error){
            console.log(error);
        }
        if(results.length >0){
            return res.render('Register',{
                message:'That Email is already used'
            })   
        }
        
        db.query('INSERT INTO users SET ?',{firstName:firstName, lastName:lastName,email:email,passportId:passportId,stateId:stateId,address:address,city:city,state:state,country:country,password:password}, (error,results)=>{
            if(error){
                console.log(error)
            }else{
                console.log(results);
                return res.render('homepage',{
                    message: 'User Registered'
                });
            }
        })
    });
    
}