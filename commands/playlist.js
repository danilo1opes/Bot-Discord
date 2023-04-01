const { SlashCommandBuilder } = require("discord.js")

module.exports = {
 data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Nfrealmusic"),

async execute(interaction) {
    await interaction.reply("https://open.spotify.com/playlist/7BOjZE6zMGBFpPC1DJSyEB?si=126ec61deca64c62")
   }
}
