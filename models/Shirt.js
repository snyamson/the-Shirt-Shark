const { Model } = require("vertex360")({ site_id: process.env.TURBO_APP_ID });

const props = {
  name: { type: String, default: "" },
  image: { type: String, default: "" },
  slug: { type: String, default: "" },
  price: { type: Number, default: 0 },
  description: { type: String, default: "" },
  images: { type: Array, default: [] },
  schema: { type: String, default: "shirt", immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true },
};

class Shirt extends Model {
  constructor() {
    super();
    this.schema(props);
  }
}

module.exports = Shirt;
