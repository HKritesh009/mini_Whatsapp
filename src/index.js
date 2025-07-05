const express = require("express");
const app = express();
const path = require("path");
const method_override = require("method-override");

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true }));

// Middleware to support PUT and DELETE methods from forms using query parameter _method
app.use(method_override("_method"));

// Set views directory and view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files (CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

const mongoose = require("mongoose");

// Connect to MongoDB using Mongoose
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => {
    console.log("Connection to DB Successful");
  })
  .catch((error) => {
    console.log(error);
  });

// Require the chat model/schema
const chat = require("./models/chat.js");

// Route: GET /chats
// Fetch all chats from DB sorted by newest first, then render index.ejs
app.get("/chats", async (req, res) => {
  let chats = await chat.find().sort({ created_at: -1 });
  res.render("index.ejs", { chats });
});

// Route: GET /chats/new
// Render the form to create a new chat
app.get("/chats/new", async (req, res) => {
  res.render("new.ejs");
});

// Route: PUT /chats/:id
// Update the message and last_update timestamp for a specific chat by ID
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  console.log(req.body);
  let { msg } = req.body; // Get the new message from the form data
  await chat.findByIdAndUpdate(
    id,
    {
      msg: msg,
      last_update: new Date(), // Update the last_update field to current date/time
    },
    { runValidators: true } // Validate updated fields according to schema
  );
  res.redirect("/chats"); // Redirect back to chat list
});

// Route: GET /chats/:id/edit
// Render the edit form for a specific chat
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let individualChat = await chat.findById(id); // Find chat by ID
  res.render("update.ejs", { individualChat }); // Render update.ejs with the chat data
});

// Route: DELETE /chats/:id
// Delete a specific chat from the database
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await chat.findByIdAndDelete(id);
  res.redirect("/chats"); // Redirect to chat list after deletion
});

// Route: POST /chats
// Create a new chat document and save it to the database
app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body; // Get form data

  let newChat = new chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(), // Set creation date to now
  });

  // Save new chat to database
  newChat
    .save()
    .then(() => {
      console.log("Successfully created and sent new Chat");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chats"); // Redirect to chat list after creation
});

// Start the server on port 8080
app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
