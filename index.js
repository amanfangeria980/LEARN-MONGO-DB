const mongoose =require("mongoose")

// Connecting to our database
mongoose.connect("mongodb://127.0.0.1:27017/Sample",{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Connected to MongoDB succesfully")
}).catch((err)=>{
    console.log(err)
})

// Defining a schema
const student= new mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
})

// Model is nothing but a collection
// Creating a collection
const Student=new mongoose.model("Student",student);

// Creating some documents or data or entries, we will not use this
//  const adder=async()=>{
//     const ss= new Student({
//         name: "Aman",
//         workout: true,
//         height: 6
//     })
    
//     await ss.save();
//  }

//  adder();

// Instead we can use this:
//  const adder=async()=>{
//     const ss= await Student.create({
//         name: "Akash",
//         workout: false,
//         height: 5
//     })
//     console.log(ss);

//  }

//  adder();


// To read or find data
//  const finder=async()=>{
//     const ss= await Student.find();
//     console.log(ss);
//  }

//  finder();

//  const finder=async()=>{
//     const ss= await Student.find({height: {$lt:6}});
//     console.log(ss);
//  }

//  finder();

