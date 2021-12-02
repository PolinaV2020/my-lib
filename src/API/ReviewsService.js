import axios from "axios";

export default class ReviewsService {
  static async getAll() {
      const response = await axios.get("http://localhost:3001/reviews");
      return response;
  }
}
