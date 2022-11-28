const dbConnect=require("./mongodbcon");
const insert=async()=>{
    const db=await dbConnect("Menu","Foodmenu");
    const docs=[
        {
            _id:"1",
            name:"Veg Pizza",
            description:" gfdhgjhjsh",
            price: 500,
            ToppingId:"1"
            
        },
        {
            _id:"2",
            name:"Non-Veg Pizza",
            description:" gfdhgjhjsh",
            price: 1000,
            ToppingId:"2"
            
        },
        {
            _id:"3",
            name:"Paneer Pizza",
            description:" gfdhgjhjsh",
            price: 500,
            ToppingId:"3"
            
        },
        {
            _id:"4",
            name:"Margrita Pizza",
            description:" gfdhgjhjsh",
            price: 700,
            ToppingId:"4"
            
        },
        {
            _id:"5",
            name:"Loaded Non-veg Pizza",
            description:" gfdhgjhjsh",
            price: 1200,
            ToppingId:"5"
            
        },



    ];
    const option={ordered:true};
    const result=await db.insertMany(docs, option);
    if(result.acknowledged)
    {
        console.log(`${result.insertedCount}record inserted sucessfully`);
    }else{
        console.log("data not inserted");

    }
    };
        insert()
