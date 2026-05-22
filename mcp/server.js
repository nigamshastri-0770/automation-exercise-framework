import express from "express";
import { exec } from "child_process";
import { analyzeLogs } from "./tools/analyzeLogs.js";

const app = express();

app.use(express.json());

app.post("/run-tests", async (req, res) => {

  console.log("Running Playwright Tests...");

  exec(
    "npx playwright test",
    (error, stdout, stderr) => {

      const logs = stdout + stderr;

      const analysis = analyzeLogs(logs);

      if (error) {

        return res.json({
          status: "failed",
          analysis,
          logs
        });
      }

      res.json({
        status: "success",
        analysis,
        logs
      });

    }
  );

});

app.listen(3000, () => {
  console.log("MCP Server running on port 3000");
});