const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    dateofbirth:{
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    quizzes: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        quiz: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Quiz",
        },
        marks: {
          type: Number,
        },
        totalMarks: {
          type: Number,
        },
        answers: {
          type: String,
          set: function (value) {
            return JSON.stringify(value);
          },
        },
      },
    ],

    completedLessons :[{
       type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
    }]
  },

  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
