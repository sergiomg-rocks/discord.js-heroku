const { Command } = require('discord.js-commando');
module.exports = class serverCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'server',
            group: 'general',
			memberName: 'server',
			description: 'Cuenta cosas del server',
		});
	}

run(message) {
    return message.say('Server: ${msg.guild.name}');
}
}