const dbConnect=require("./mongodbcon");
const insert=async()=>{
    const db=await dbConnect("Menu","Hotel");
    const docs=[
        {
            _id:"1",
            name:"Royal Tulip ",
            location:"Kharghar",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4A6OazePSow0Zjv_pXizSFkzvdizIc0O6U9gYwpS3g&s",
           MenuId:"1"
            
        },
        {
            _id:"2",
            name:"Hotel Executive",
            location:"Khaghar",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvt3khCENgNs2XWg-rTSNLiORHX3iYSSb-NMaImiwfrg&s",
            MenuId:"1"
            
        },
        {
            _id:"3",
            name:"Bottle Three star",
            location:" Kharghar",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5jqNgwhqMsB-Sv3A4ks-cO62KWp76XfQbYtAeyMnsg&s",
            MenuId:"1"
            
        },
        {
            _id:"4",
            name:"Pallavi avida",
            location:"Vashi",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvt3khCENgNs2XWg-rTSNLiORHX3iYSSb-NMaImiwfrg&s",
            MenuId:"1"
            
        },
        {
            _id:"5",
            name:"Hotel Dream",
            location:"kopra",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4A6OazePSow0Zjv_pXizSFkzvdizIc0O6U9gYwpS3g&s",
            MenuId:"1"
            
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
