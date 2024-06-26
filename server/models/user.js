const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Imageurl: {
      type: String,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
    admin:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Admin"
    },
    role: {
      type: Number,
      default: 0,
    },
    flag: {
      type: Number,
      default: 0,
    },
    resetPasswordToken: {
      type:String, 
    },

    resetPasswordExpires: {
      type:Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
