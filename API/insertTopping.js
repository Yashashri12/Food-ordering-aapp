const dbConnect=require("./mongodbcon");
const insert=async()=>{
    const db=await dbConnect("Menu","Topping");
    const docs=[
        {
            _id:"1",
            tname:"Tomato",
            tprice:30,
        },
        {
            _id:"2",
            tname:"Extra cheese",
            tprice:40,
        },
        {
            _id:"3",
            tname:"Extra onion",
            tprice:40,
        },
        {
            _id:"4",
            tname:"Extra capsicum",
            tprice:20,
        },
        {
            _id:"5",
            tname:"Extra ",
            tprice:80,
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
