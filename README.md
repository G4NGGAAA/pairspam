# G4NGGAA Pairing Spammer v1.1

Spam pairing code WhatsApp tiap 1–2 detik, auto-stop & simpan ke `codes.txt`.

## Instal (Termux)
```shell
 pkg install nodejs git -y
 git clone https://github.com/g4nggaa/pair-spam
 cd pair-spam
 nano index.js
```
 
## Konfigurasi

- Ubah nomor WA di `PHONE` (E.164 tanpa +).
- Atur limit spam lewat `MAX_SPAM`.
- Lihat hasil pairing di `codes.txt`.

## Fitur

- Interval acak 1–2 detik
- Auto-stop di hitungan tertentu
- Export pairing code + timestamp

## Catatan Etis & Legal

Gunakan hanya untuk testing/edukasi, akun sendiri. Risiko:
- BAN akun/IP
- Melanggar Terms WhatsApp

Creator: g4nggaa
MIT License
