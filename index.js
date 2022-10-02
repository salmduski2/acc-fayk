// =============== Port ===============
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
// =============== Bot ===============

const Discord = require('discord.js-self');
const user_1 = new Discord.Client(OTIyMDc5NjE3Nzc3NTMyOTQ4.GZYN1c.c1k1EzmCCvrDa58BstSUEuH4Z5BgqeUq82PVTQ);
const user_2 = new Discord.Client();
const user_3 = new Discord.Client();
const user_4 = new Discord.Client();
const user_5 = new Discord.Client();
const user_6 = new Discord.Client();
const user_7 = new Discord.Client();
const user_8 = new Discord.Client();
const user_9 = new Discord.Client();
const user_10 = new Discord.Client();
const user_11 = new Discord.Client();
const user_12 = new Discord.Client();
const user_13 = new Discord.Client();
const user_14 = new Discord.Client();
const user_15 = new Discord.Client();
const user_16 = new Discord.Client();
const user_17 = new Discord.Client();
const user_18 = new Discord.Client();
const user_19 = new Discord.Client();
const user_20 = new Discord.Client();
const user_21 = new Discord.Client();
const user_22 = new Discord.Client();
const user_23 = new Discord.Client();
const user_24 = new Discord.Client();

const { id, id_1, error, success } = require('./config.json');

user_1.on('ready', () => {
	console.log(`USER_1 ${user_1.user.tag}!`);
	user_1.user.setPresence({ activity: { name: 'polat bot' }, status: 'idle' });
	const channel = user_1.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(820079987721371678);
			connection.voice.setSelfMute(820079987721371678);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_2.on('ready', () => {
	console.log(`USER_2 ${user_2.user.tag}!`);
	user_2.user.setPresence({ activity: { name: 'polat bot' }, status: 'idle' });
	const channel = user_2.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_3.on('ready', () => {
	console.log(`USER_3 ${user_3.user.tag}!`);
	user_3.user.setPresence({ activity: { name: 'polat bot' }, status: 'idle' });
	const channel = user_3.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_4.on('ready', () => {
	console.log(`USER_4 ${user_4.user.tag}!`);
	user_4.user.setPresence({
		activity: { name: 'polat bot' },status: 'dnd'
	});
	const channel = user_4.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_5.on('ready', () => {
	console.log(`USER_5 ${user_5.user.tag}!`);
	user_5.user.setPresence({
		activity: { name: 'polat bot' },status: 'idle'
	});
	const channel = user_5.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_6.on('ready', () => {
	console.log(`USER_6 ${user_6.user.tag}!`);
	user_6.user.setPresence({
		activity: { name: 'polat bot' },status: 'dnd'
	});
	const channel = user_6.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true)
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_7.on('ready', () => {
	console.log(`USER_7 ${user_7.user.tag}!`);
	user_7.user.setPresence({
		activity: { name: 'polat bot' },status: 'dnd'
	});
	const channel = user_7.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_8.on('ready', () => {
	console.log(`USER_8 ${user_8.user.tag}!`);
	user_8.user.setPresence({
		activity: { name: 'polat bot' },status: 'dnd'
	});
	const channel = user_8.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true );
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_9.on('ready', () => {
	console.log(`USER_9 ${user_9.user.tag}!`);
	user_9.user.setPresence({
		activity: { name: 'polat bot' },status: 'online'
	});
	const channel = user_9.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_10.on('ready', () => {
	console.log(`USER_10 ${user_10.user.tag}!`);
	user_10.user.setPresence({
		activity: { name: '' },status: 'idle'
	});
	const channel = user_10.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_11.on('ready', () => {
	console.log(`USER_11 ${user_11.user.tag}!`);
	user_11.user.setPresence({
		activity: { name: '' },status: 'dnd'
	});
	const channel = user_11.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_12.on('ready', () => {
	console.log(`USER_12 ${user_12.user.tag}!`);
	user_12.user.setPresence({ activity: { name: 'polat bot' }, status: 'idle' });
	const channel = user_12.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_13.on('ready', () => {
	console.log(`USER_13 ${user_13.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_13.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_14.on('ready', () => {
	console.log(`USER_14 ${user_14.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_14.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_15.on('ready', () => {
	console.log(`USER_15 ${user_15.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_15.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_16.on('ready', () => {
	console.log(`USER_16 ${user_16.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_1.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_17.on('ready', () => {
	console.log(`USER_17 ${user_17.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_17.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_18.on('ready', () => {
	console.log(`USER_18 ${user_18.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_18.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_19.on('ready', () => {
	console.log(`USER_19 ${user_19.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_19.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_20.on('ready', () => {
	console.log(`USER_20 ${user_20.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_20.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_21.on('ready', () => {
	console.log(`USER_21 ${user_21.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_21.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_22.on('ready', () => {
	console.log(`USER_22 ${user_22.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_22.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_23.on('ready', () => {
	console.log(`USER_23 ${user_23.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_23.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_24.on('ready', () => {
	console.log(`USER_24 ${user_24.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_24.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================

user_1.login('');
user_2.login('');
user_3.login('');
user_4.login('');
user_5.login('');
user_6.login('');
user_7.login('');
user_8.login('');
user_9.login('');
user_10.login('');
user_11.login('');
user_12.login('');
user_1.login('');
user_2.login('');
user_3.login('');
user_4.login('');
user_5.login('');
user_6.login('');
user_7.login('');
user_8.login('');
user_9.login('');
user_10.login('');
user_11.login('');
user_12.login('');
user_13.login('');
user_14.login('');
user_15.login('');
user_16.login('');
user_17.login('');
user_18.login('');
user_19.login('');
user_20.login('');
user_21.login('');
user_22.login('');
user_23.login('');
user_24.login('OTIyMDc5NjE3Nzc3NTMyOTQ4.GZYN1c.c1k1EzmCCvrDa58BstSUEuH4Z5BgqeUq82PVTQ');
