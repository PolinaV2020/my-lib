import axios from "axios";

export default class ReviewsService {
  static async getAll() {
    try {
      const response = await axios.get("http://localhost:3001/reviews");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
