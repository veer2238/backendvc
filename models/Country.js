import mongoose from "mongoose"

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    region: {
      type: String,
      required: true,
      enum: ["Middle East", "Asia", "Europe", "Others"]
    },

    image: {
      type: String,
      required: true
    },

    visasApproved: {
      type: String,
      default: "0+ Visas on Time"
    },

    processingTime: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

const Country = mongoose.model("Country", countrySchema)

export default Country