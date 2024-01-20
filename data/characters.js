//This file contains simple data structures that houses character data from sf6


const characters = [
    {
        id: 1,
        name: "Ryu",
        description: "Ever training, this martial artist seeks true strength. Well-mannered and sincere, Ryu travels the globe in search of worthy opponents. Having overcome the Satsui no Hado, he now seeks yet greater heights.",
        ratings : [2.4,3.0,2.0,3],
        img_src : "https://www.streetfighter.com/6/assets/images/character/ryu/ryu.png"
    },
    {
        id: 2,
        name: "Chun-Li",
        description: "A former high-kicking ICPO agent, Chun-Li looks after Li-Fen, a victim of the Black Moon Incident. With Shadaloo sundered, she now runs Kung Fu classes and has become a well-loved member of the local community.",
        ratings: [4.0,5.0,4.5,4.5],
        img_src: "https://www.streetfighter.com/6/assets/images/character/chunli/chunli.png"

    },
    {
        id: 3,
        name: "Ken",
        description: "Former US National Fighting Champ, and ex-VP of the Masters Foundation. Accusations of orchestrating a criminal plot have forced Ken to abandon his family and business and go into hiding.",
        ratings: [5.0,5.0,5.0,4.5],
        img_src:"https://www.streetfighter.com/6/assets/images/character/ken/ken.png"
    }
]

module.exports = characters;
