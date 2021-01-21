/*Instalado con npm discord.js + commando */

// load commando
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

// how comando works + owner(Rocks)
const client = new CommandoClient({
	commandPrefix: '!',
	owner: '96981405673717760',
});

        // Se pueden anadir mas en formato array

client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['general', 'General Commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
    client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
        client.user.setActivity('No code');
    });
    
    client.on('error', console.error);
    client.login('ODAwOTEwMzIyMjI3MDg1MzIz.YAY_3Q.4B7Zn3s_ahA5iq3kwhS64f2V0i4');