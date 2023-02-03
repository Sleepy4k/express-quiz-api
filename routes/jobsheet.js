import * as JobsheetController from "../controllers/jobsheet";
import { Router } from "express";

Router.post("/one", JobsheetController.one);
Router.post("/many", JobsheetController.many);

export default Router;
