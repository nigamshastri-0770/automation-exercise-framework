
import fetch from "node-fetch";

export async function runTests() {
  const res = await fetch("http://localhost:3000/run-tests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      command: "npx playwright test"
    })
  });

  return await res.json();
}

runTests().then(console.log);
