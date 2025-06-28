#!/data/data/com.termux/files/usr/bin/bash
clear
echo -e "\e[92m🔧 Installing Requirements...\e[0m"
pkg update -y
pkg install nodejs git -y

echo -e "\e[96m📥 Cloning Tool...\e[0m"
git clone https://github.com/g4nggaa/pair-spam || git pull
cd pair-spam
npm install

echo -e "\e[92m🚀 Starting Spam Script...\e[0m"
node index.js
