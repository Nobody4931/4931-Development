import BodyParser from "body-parser";
import Express from "express";
import * as Config from "../config.js";

export const App = Express();

/* INITIALIZATION */
App.disable("x-powered-by");
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

/* BACKEND */
App.get(/.*\.scss/, (_Request, Response) => Response.redirect("/"));
App.get(/.*(?<!\.obf)\.js/, (_Request, Response) => Response.redirect("/"));

App.get("/discord", (_Request, Response) => Response.redirect(`https://discord.gg/${Config.DISCORD}`));

/* FRONTEND */
App.use("/", Express.static(`${process.cwd()}/src/frontend`, { index: "index.html" }));
App.get("*", (_Request, Response) => Response.redirect("/"));

/* STARTUP */
App.listen(Config.PORT, () =>
	console.log(`Server started successfully on port ${Config.PORT}`));
