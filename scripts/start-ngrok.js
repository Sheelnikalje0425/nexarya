import ngrok from "@ngrok/ngrok";

async function startTunnel() {
  const authtoken = "38qZtO8uSLdu83VbY9pWcJpVubl_4Jsb2L1q1jv4LW7XmdKWB";

  // Try different endpoints/regions if needed
  try {
    const listener = await ngrok.forward({
      addr: 3000,
      authtoken: authtoken,
      server_addr: "connect.ngrok-agent.com:443",
    });

    const url = listener.url();
    console.log("==========================================");
    console.log(`[NGROK TUNNEL ACTIVE] Live at: ${url}`);
    console.log("==========================================");

    process.stdin.resume();
  } catch (err) {
    console.error("Failed to start ngrok tunnel:", err);
    process.exit(1);
  }
}

startTunnel();
