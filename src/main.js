import BodyParser from "body-parser";
import Express from "express";
import * as Config from "../config.js";

export const App = Express();

/* INITIALIZATION */
App.disable("x-powered-by");
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

/* BACKEND */

// TODO:
// - build/js.bat
// 		* Obfuscates *.js -> *.obf.js
// - App.get(/.*(?<!\.obf)\.js/)
// 		* Redirects to /
// - App.get(/.*\.scss/)
// 		* Redirects to /

App.get("/discord", (_Request, Response) => Response.redirect(`https://discord.gg/${Config.DISCORD}`));

/* FRONTEND */
App.use("/", Express.static(`${process.cwd()}/src/frontend`, { index: "index.html" }));
App.use("/files", Express.static(`${process.cwd()}/res`));
App.get("*", (_Request, Response) => Response.redirect("/"));

/* STARTUP */
App.listen(Config.PORT, () =>
	console.log(`Server started successfully on port ${Config.PORT}`));
