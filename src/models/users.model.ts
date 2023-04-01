import { model, Schema, Document } from "mongoose";
import { User } from "../interface/users.interface";


const userSubscriptionSchema: Schema = new Schema({
  subscriptionType: {
    type: String,
    required: true,
    default: "Basic"
  },
  isSubscribe: {
    type: Boolean,
    required: true,
    default: false
  },
  startDate: {
    type: Date,
    required: true,
    default: null
  },
  endDate: {
    type: Date,
    required: true,
    default: null
  },

}, { versionKey: false, _id: false })


const userSettingsSchema = new Schema({
  Currency: {
    type: String,
    required: true,
    default: "Inr"
  },
  Language: {
    type: String,
    required: true,
    default: "En"
  },
  Theme: {
    type: String,
    required: true,
    default: "Dark"
  },
}, { versionKey: false, _id: false })

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  profileType: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  subscription: {
    subscriptionType: {
      type: String,
      default: "Basic"
    },
    isSubscribe: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
  },
  settings: { 
    Currency: {
      type: String,
      required: true,
      default: "Inr"
    },
    Language: {
      type: String,
      required: true,
      default: "En"
    },
    Theme: {
      type: String,
      required: true,
      default: "Dark"
    },
  }
});

const userModel = model<User & Document>("User", userSchema);

export default userModel;
