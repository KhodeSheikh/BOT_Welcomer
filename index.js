const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client(); -
client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});

client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("938325370850115644");
    let targetchannel = '938193953738596422'
    if (welcomeChannel) {

        let welcomeEmbed = new discord.MessageEmbed()

        if (member.user.bot) {

            welcomeEmbed.setColor(colors.yellow)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی .جهت ارتباط با تیم مدیریتی فمیلی تیکت ${member.guild.channels.cache.get(targetchannel).toString()} باز کنید`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        } else {
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی .جهت ارتباط با تیم مدیریتی فمیلی تیکت ${member.guild.channels.cache.get(targetchannel).toString()} باز کنید`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  (=`)
            welcomeChannel.send(welcomeEmbed)
        }
    } else {
        console.log("Welcome Channel Yaft Nashod")
    }
})

client.on("ready", () => {
    function YousamPower() {
        let hungry = ["Welcome to Server", "Coded By Sheikh", "AL Nasr Family"]
        let Power = Math.floor(Math.random() * hungry.length);
        client.user.setActivity(hungry[Power], { type: "STREAMING", url: "https://www.twitch.tv/sheikh" });
    };
    setInterval(YousamPower, 2000)
});

client.login(botconfig.token);