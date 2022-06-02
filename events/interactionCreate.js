module.exports = {
  name: 'interactionCreate',
  execute(interaction) {
    try {
      console.log(
        `\n${interaction.user.tag} in ${interaction.guild.name} #${interaction.channel.name}\ntriggered an interaction.`
      )
    } catch (error) {
      console.error(error)
    }
  },
}
