const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const chalk = require("chalk");

const PHONE = "628XXXXXXXXX"; // Ganti dengan nomor sendiri
const MAX_SPAM = 50; // stop setelah 50 spaman
let count = 0;

console.clear();
console.log(chalk.green.bold(`
G4NGGAA PAIRING SPAMMER v1.1
🔥 Interval: 1–2 detik | Auto-stop @${MAX_SPAM} | Export .txt
`));

async function spamPair() {
  if (count >= MAX_SPAM) {
    console.log(chalk.red.bold(`🚫 Limit tercapai (${MAX_SPAM}). Berhenti.`));
    process.exit(0);
  }

  const { state, saveCreds } = await useMultiFileAuthState("./auth_info");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    auth: state,
    version,
    printQRInTerminal: false,
    syncFullHistory: false
  });

  sock.ev.on("creds.update", saveCreds);

  try {
    const codeRaw = await sock.requestPairingCode(PHONE);
    const code = codeRaw.match(/.{1,3}/g).join("-");
    count++;
    console.log(chalk.cyan(`[${count}] Pairing Code:`), chalk.yellow(code));

    fs.appendFileSync("codes.txt", `${new Date().toISOString()} – ${code}\n`);
  } catch (err) {
    console.log(chalk.red(`❌ Error request pairing code: ${err.message}`));
  }

  const delay = Math.floor(Math.random() * 1000) + 1000;
  setTimeout(async () => {
    await sock.logout();
    await spamPair();
  }, delay);
}

spamPair();
