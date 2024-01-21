// // a task that runs daily at 8 pm and sends a reminder on the admin channel to update the stats.
// pylon.tasks.cron('reminder', '0 0 8 * * 1-7 *', async () => {
//   let guild = await discord.getGuildTextChannel('730783724941082636');

//   await guild?.sendMessage(
//     'Centrala SI zachęca: nie trzymaj innych w niepewności, zapisz się już dziś!\nhttps://docs.google.com/forms/d/e/1FAIpQLSeKdpHewDeCM7TRsIo1MErqvCHBwmXhzYG9uIVC2B_YYnO_cw/viewform'
//   );
// });
