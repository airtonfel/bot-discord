const Discord = require('discord.js');

const bot = new Discord.Client(); //INSTANCIAR A CLASSE QUE SERÁ UTILIZADA

const token = 'INSIRA O TOKEN NESSA STRING'; //INSIRA O TOKEN DO BOT DISCORD NESSA STRING

bot.login(token); //BOT LOGIN UTILIZANDO O TOKEN COMO PARÂMETRO

//MOSTRAR MSG NO CONSOLE INDICANDO QUE O BOT ESTÁ PRONTO PARA SER UTILIZADO
bot.on('ready', () => {
    console.log('Iniciando...');
})

//ENVIANDO MSG E RECEBENDO MSG DO BOT
bot.on('message', msg => {
    if (msg.content === 'Teste') {
        msg.reply('Bem-vindo(a) ao bot!');
    }
})