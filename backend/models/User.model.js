const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required : [true, 'Please enter a username'],
    },

    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    campus: {
      type :String,
      required : [true, 'Please add a campus'],
    },

    course: {
      type : String,
      required : [true, 'Please add a course'],
    },

    image: {
      type:String,
    }

  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
