import { Router, Request, Response } from "express";

const pageRouter = Router();

pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("about", { title: "About" });
});

export default pageRouter;
