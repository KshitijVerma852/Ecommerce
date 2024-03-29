const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Config
dotenv.config({ path: "./backend/config/config.env" });
const connectionName = connectDatabase();
console.log(connectionName);

app.get("/", (req, res) => {
	res.send(`${connectionName}`);
});

const server = app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection

process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log("Shutting down the server due to unhandled promise rejection");
	server.close(() => {
		process.exit(1);
	});
});
