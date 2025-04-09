import app from "@app";
import { PORT } from "@configs/env";
import { logger } from "yash-msa";

app.listen(PORT, (err) => {
  if (!err) {
    logger.info("Cart server is working");
  } else {
    logger.error("Cart server is not working", err);
  }
});
