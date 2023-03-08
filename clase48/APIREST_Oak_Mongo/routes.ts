import { Router } from "./deps.ts";
import {
  addQuote,
  getQuotes,
  getQuote,
  updateQuote,
  deleteQuote,
} from "./controllers/quotes.ts";

const router = new Router();

router
  .get("/api/quotes", getQuotes) // Get all quotes
  .get("/api/quotes/:id", getQuote) // Get one quote of quoteID: id
  .post("/api/quotes", addQuote) // Add a quote
  .put("/api/quotes/:id", updateQuote) // Update a quote
  .delete("/api/quotes/:id", deleteQuote); // Delete a quote

export default router;
