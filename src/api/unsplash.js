import axios from "axios";


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
      Authorization: "Client-ID HbnU7C1KYwCEu2HSs2zapffaWi7gfGMwRpGo-valZ_U"
    }
});