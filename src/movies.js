const movies = ` [
    {
        "name": "Longlegs",
        "description": "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
        "genre": "Crime/Horror/Thriller",
        "runtime": "1h 41m",
        "release_date": "July 12, 2024",
        "image": "src/assets/Longlegs.jpg",
        "imdb": "https://www.imdb.com/title/tt23468450/"
    },
    {
        "name": "The Surfer",
        "description": "When a man returns to his beach side hometown in Australia, he is humiliated in front of his teenage son by a local group of surfers who claim ownership over the secluded beach of his childhood.",
        "genre": "Thriller",
        "runtime": "1h 39m",
        "release_date": "May 18, 2024",
        "image": "src/assets/The-Surfer.jpg",
        "imdb": "https://www.imdb.com/title/tt27813235/"
    },
    {
        "name": "Arcadian",
        "description": "A father and his twin teenage sons fight to survive in a remote farmhouse at the end of the end of the world.",
        "genre": "Action/Horror/Thriller",
        "runtime": "1h 32m",
        "release_date": "April 12, 2024",
        "image": "src/assets/Arcadian.jpg",
        "imdb": "https://www.imdb.com/title/tt22939186/"
    },

    {
        "name": "Dream Scenario",
        "description": "An ordinary family man finds his life turned upside down when strangers suddenly start seeing him in their dreams.",
        "genre": "Comedy/Drama/Fantasy",
        "runtime": "1h 42m",
        "release_date": "November 10, 2023",
        "image": "src/assets/Dream-Scenario.jpg",
        "imdb": "https://www.imdb.com/title/tt21942866/"
    },
    {
        "name": "The Retirement Plan",
        "description": "When Ashley and her young daughter Sarah get caught up in a criminal enterprise that puts their lives at risk, she turns to estranged father Matt, currently living the life of a retired beach bum in the Cayman Islands.",
        "genre": "Action/Comedy/Crime",
        "runtime": "1h 43m",
        "release_date": "September 15, 2023",
        "image": "src/assets/The-Retirement-Plan.jpg",
        "imdb": "https://www.imdb.com/title/tt14827638/"
    },
    {
        "name": "Sympathy for the Devil",
        "description": "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems.",
        "genre": "Action/Thriller",
        "runtime": "1h 30m",
        "release_date": "July 28, 2023",
        "image": "src/assets/Sympathy-for-the-Devil.jpg",
        "imdb": "https://www.imdb.com/title/tt21991654/"
    },
    {
        "name": "The Flash",
        "description": "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
        "genre": "Action/Adventure/Fantasy",
        "runtime": "2h 24m",
        "release_date": "June 16, 2023",
        "image": "src/assets/The-Flash.jpg",
        "imdb": "https://www.imdb.com/title/tt0439572/"
    },
    {
        "name": "Renfield",
        "description": "Renfield, Dracula's tortured henchman, is forced to capture prey for his master and do his every bidding. But now, after centuries of servitude, Renfield is ready to see if there is a life outside his boss's shadow.",
        "genre": "Action/Comedy/Fantasy",
        "runtime": "1h 33m",
        "release_date": "April 14, 2023",
        "image": "src/assets/Renfield.jpg",
        "imdb": "https://www.imdb.com/title/tt11358390/"
    },
    {
        "name": "The Old Way",
        "description": "An old gunslinger and his daughter must face the consequences of his past, when the son of a man he murdered years ago arrives to take his revenge.",
        "genre": "Action/Drama/Western",
        "runtime": "1h 35m",
        "release_date": "January 6, 2023",
        "image": "src/assets/The-Old-Way.jpg",
        "imdb": "https://www.imdb.com/title/tt8593824/"
    },
    {
        "name": "Butcher's Crossing",
        "description": "An Ivy League drop-out travels to the Colorado wilderness, where he joins a team of buffalo hunters on a journey that puts his life and sanity at risk. Based on the highly acclaimed novel by John Williams.",
        "genre": "Adventure/Drama/Western",
        "runtime": "1h 45m",
        "release_date": "September 9, 2022",
        "image": "src/assets/Butcher's-Crossing.jpg",
        "imdb": "https://www.imdb.com/title/tt1462759/"
    },
    {
        "name": "The Unbearable Weight of Massive Talent",
        "description": "Moviestar Nick Cage is channeling his iconic characters as he's caught between a superfan and a CIA agent.",
        "genre": "Action/Comedy/Crime",
        "runtime": "1h 47m",
        "release_date": "April 22, 2022",
        "image": "src/assets/The-Unbearable-Weight-of-Massive-Talent.jpg",
        "imdb": "https://www.imdb.com/title/tt11291274/"
    },
    {
        "name": "Prisoners of the Ghostland",
        "description": "A notorious criminal must break an evil curse in order to rescue an abducted girl who has mysteriously disappeared.",
        "genre": "Fantasy/Horror/Thriller",
        "runtime": "1h 43m",
        "release_date": "September 17, 2021",
        "image": "src/assets/Prisoners-of-the-Ghostland.jpg",
        "imdb": "https://imdb.com/title/tt6372694/"
    },
    {
        "name": "Pig",
        "description": "A truffle hunter who lives alone in the Oregon wilderness must return to his past in Portland in search of his beloved foraging pig after she is kidnapped.",
        "genre": "Drama/Mystery",
        "runtime": "1h 32m",
        "release_date": "July 16, 2021",
        "image": "src/assets/Pig.jpg",
        "imdb": "https://www.imdb.com/title/tt11003218/"
    },
    {
        "name": "Willy's Wonderland",
        "description": "A quiet drifter is tricked into a janitorial job at the now condemned Willy's Wonderland. The mundane tasks suddenly become an all-out fight for survival against wave after wave of demonic animatronics. Fists fly, kicks land, titans clash -- and only one side will make it out alive.",
        "genre": "Action/Comedy/Horror",
        "runtime": "1h 28m",
        "release_date": "February 12, 2021",
        "image": "src/assets/Willy's-Wonderland.jpg",
        "imdb": "https://www.imdb.com/title/tt8114980/"
    },
    {
        "name": "The Croods: A New Age",
        "description": "The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.",
        "genre": "Animation/Adventure/Comedy",
        "runtime": "1h 35m",
        "release_date": "November 25, 2020",
        "image": "src/assets/The-Croods-A-New-Age.jpg",
        "imdb": "https://www.imdb.com/title/tt2850386/"
    },
    {
        "name": "Jiu Jitsu",
        "description": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
        "genre": "Action/Sci-Fi/Thriller",
        "runtime": "1h 42m",
        "release_date": "November 20, 2020",
        "image": "src/assets/Jiu-Jitsu.jpg",
        "imdb": "https://www.imdb.com/title/tt9624766/"
    },
    {
        "name": "Color Out of Space",
        "description": "A secluded farm is struck by a strange meteorite which has apocalyptic consequences for the family living there and possibly the world.",
        "genre": "Horror/Mystery/Sci-Fi",
        "runtime": "1h 51m",
        "release_date": "February 25, 2020",
        "image": "src/assets/Color-Out-of-Space.jpg",
        "imdb": "https://www.imdb.com/title/tt5073642/"
    },
    {
        "name": "Grand Isle",
        "description": "A young father is charged with murder and must prove his innocence by recalling a very twisted and dark night of events.",
        "genre": "Crime/Mystery/Thriller",
        "runtime": "1h 37m",
        "release_date": "December 6, 2019",
        "image": "src/assets/Grand-Isle.jpg",
        "imdb": "https://www.imdb.com/title/tt8380776/"
    },
    {
        "name": "Primal",
        "description": "Frank's caught wildlife in the Brazilian jungle incl. a 400 lbs. white jaguar. He ships it on the same ship as an arrested assassin. The assassin breaks free and frees the animals.",
        "genre": "Action/Thriller",
        "runtime": "1h 37m",
        "release_date": "November 8, 2019",
        "image": "src/assets/Primal.jpg",
        "imdb": "https://www.imdb.com/title/tt7394816/"
    },
    {
        "name": "Kill Chain",
        "description": "Three strangers' lives are inevitably entangled in a conflict none of them are prepared for.",
        "genre": "Action/Thriller",
        "runtime": "1h 31m",
        "release_date": "October 18, 2019",
        "image": "src/assets/Kill-Chain.jpg",
        "imdb": "https://www.imdb.com/title/tt8535180/"
    },
    {
        "name": "Running with the Devil",
        "description": "The CEO of an international conglomerate sends two of his most regarded executives to investigate why shipments of cocaine are being hijacked and over cut somewhere on the supply chain.",
        "genre": "Crime/Drama/Thriller",
        "runtime": "1h 40m",
        "release_date": "September 20, 2019",
        "image": "src/assets/Running-with-the-Devil.jpg",
        "imdb": "https://www.imdb.com/title/tt5792656/"
    },
    {
        "name": "A Score to Settle",
        "description": "An ex-enforcer for a local crime syndicate has vowed to enact retribution on his mob bosses after 19 years of wrongful imprisonment. The only thing diverting his violent plans is a new found relationship to his beloved son.",
        "genre": "Action/Crime/Drama",
        "runtime": "1h 43m",
        "release_date": "August 2, 2019",
        "image": "src/assets/A-Score-to-Settle.jpg",
        "imdb": "https://www.imdb.com/title/tt3758162/"
    },
    {
        "name": "Between Worlds",
        "description": "Joe meets a mother who can contact spirits when suffocating. Her daughter is dying when Joe helps the mother spiritually contact the daughter and save her. Unfortunately, the spirit in the daughter's body is now that of Joe's dead wife.",
        "genre": "Fantasy/Mystery/Thriller",
        "runtime": "1h 30m",
        "release_date": "December 21, 2018",
        "image": "src/assets/Between-Worlds.jpg",
        "imdb": "https://www.imdb.com/title/tt7295450/"
    },
    {
        "name": "Spider-Man: Into the Spider-Verse",
        "description": "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        "genre": "Animation/Action/Adventure",
        "runtime": "1h 57m",
        "release_date": "December 14, 2018",
        "image": "src/assets/Spider-Man-Into-the-Spider-Verse.jpg",
        "imdb": "https://www.imdb.com/title/tt4633694/"
    },
    {
        "name": "Mandy",
        "description": "The enchanted lives of a couple in a secluded forest are brutally shattered by a nightmarish hippie cult and their demon-biker henchmen, propelling a man into a spiraling, surreal rampage of vengeance.",
        "genre": "Action/Fantasy/Horror",
        "runtime": "2h 1m",
        "release_date": "September 14, 2018",
        "image": "src/assets/Mandy.jpg",
        "imdb": "https://www.imdb.com/title/tt6998518/"
    },
    {
        "name": "Teen Titans GO! To the Movies",
        "description": "A villain's maniacal plan for world domination sidetracks five teenage superheroes who dream of Hollywood stardom.",
        "genre": "Animation/Action/Adventure",
        "runtime": "1h 24m",
        "release_date": "July 22, 2018",
        "image": "src/assets/Teen-Titans-GO!-To-the-Movies.jpg",
        "imdb": "https://www.imdb.com/title/tt7424200/"
    },
    {
        "name": "211",
        "description": "While on a routine patrol, an aging cop, his partner and their ride-along, get caught in a standoff with a band of former mercenaries robbing a bank.",
        "genre": "Action/Drama/Horror",
        "runtime": "1h 26m",
        "release_date": "June 8, 2018",
        "image": "src/assets/211.jpg",
        "imdb": "https://www.imdb.com/title/tt4976192/"
    },
    {
        "name": "The Humanity Bureau",
        "description": "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
        "genre": "Sci-Fi/Thriller",
        "runtime": "1h 35m",
        "release_date": "April 6, 2018",
        "image": "src/assets/The-Humanity-Bureau.jpg",
        "imdb": "https://www.imdb.com/title/tt6143568/"
    },
    {
        "name": "Looking Glass",
        "description": "A couple buy a desert motel where they find that strange, mysterious events occur.",
        "genre": "Mystery/Thriller",
        "runtime": "1h 43m",
        "release_date": "February 16, 2018",
        "image": "src/assets/Looking-Glass.jpg",
        "imdb": "https://www.imdb.com/title/tt6083648/"
    },
    {
        "name": "Mom and Dad",
        "description": "A teenage girl and her younger brother must survive a wild 24 hours during which a mass hysteria of unknown origin causes parents to turn violently on their own kids.",
        "genre": "Comedy/Horror/Thriller",
        "runtime": "1h 26m",
        "release_date": "January 19, 2018",
        "image": "src/assets/Mom-and-Dad.jpg",
        "imdb": "https://www.imdb.com/title/tt5462326/"
    },
    {
        "name": "Dark",
        "description": "A government agent must track down and kill a terrorist before he loses his full memory from dementia.",
        "genre": "Drama/Thriller",
        "runtime": "1h 15m",
        "release_date": "December 11, 2017",
        "image": "src/assets/Dark.jpg",
        "imdb": "https://www.imdb.com/title/tt10690676/"
    },
    {
        "name": "Inconceivable",
        "description": "A mother looks to escape her abusive past by moving to a new town where she befriends another mother, who grows suspicious of her.",
        "genre": "Drama/Thriller",
        "runtime": "1h 45m",
        "release_date": "June 30, 2017",
        "image": "src/assets/Inconceivable.jpg",
        "imdb": "https://www.imdb.com/title/tt3481634/"
    },
    {
        "name": "Vengeance: A Love Story",
        "description": "One vigilante policeman comes to the aid of a single mother seeking to bring her rapists to justice.",
        "genre": "Action/Adventure/Crime",
        "runtime": "1h 39m",
        "release_date": "March 16, 2017",
        "image": "src/assets/Vengeance-A-Love-Story.jpg",
        "imdb": "https://www.imdb.com/title/tt5460530/"
    },
    {
        "name": "Arsenal",
        "description": "A Southern businessman attempts to rescue his kidnapped mobster brother.",
        "genre": "Action/Crime/Thriller",
        "runtime": "1h 32m",
        "release_date": "January 6, 2017",
        "image": "src/assets/Arsenal.jpg",
        "imdb": "https://www.imdb.com/title/tt5580536/"
    },
    {
        "name": "Dog Eat Dog",
        "description": "A crew of ex-cons are hired by a Cleveland mafioso to kidnap the baby of a rival mobster.",
        "genre": "Action/Crime/Thriller",
        "runtime": "1h 33m",
        "release_date": "November 11, 2016",
        "image": "src/assets/Dog-Eat-Dog.jpg",
        "imdb": "https://www.imdb.com/title/tt4054654/"
    },
    {
        "name": "Army of One",
        "description": "After a personal visit by God himself, the eccentric construction worker Gary Faulkner takes the decision to embark on an adventure in the badlands of Pakistan to bring Al-Qaeda's leader Osama Bin Laden to justice.",
        "genre": "Biography/Comedy/Crime",
        "runtime": "1h 32m",
        "release_date": "November 4, 2016",
        "image": "src/assets/Army-of-One.jpg",
        "imdb": "https://www.imdb.com/title/tt4382824/"
    },
    {
        "name": "USS Indianapolis: Men of Courage",
        "description": "During World War II, an American navy ship is sunk by a Japanese submarine leaving 890 crewmen stranded in shark infested waters.",
        "genre": "Action/Drama/History",
        "runtime": "2h 8m",
        "release_date": "October 14, 2016",
        "image": "src/assets/USS-Indianapolis-Men-of-Courage.jpg",
        "imdb": "https://www.imdb.com/title/tt2032572/"
    },
    {
        "name": "Snowden",
        "description": "The NSA's illegal surveillance techniques are leaked to the public by one of the agency's employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.",
        "genre": "Biography/Crime/Drama",
        "runtime": "2h 14m",
        "release_date": "September 16, 2016",
        "image": "src/assets/Snowden.jpg",
        "imdb": "https://www.imdb.com/title/tt3774114/"
    },
    {
        "name": "The Trust",
        "description": "A pair of cops investigating a drug invasion stumble upon a mysterious bank vault.",
        "genre": "Action/Crime/Mystery",
        "runtime": "1h 32m",
        "release_date": "May 13, 2016",
        "image": "src/assets/The-Trust.jpg",
        "imdb": "https://www.imdb.com/title/tt3733774/"
    },
    {
        "name": "Pay the Ghost",
        "description": "A professor frantically searches for his son who was abducted during a Halloween carnival.",
        "genre": "Horror/Mystery",
        "runtime": "1h 34m",
        "release_date": "September 16, 2015",
        "image": "src/assets/Pay-the-Ghost.jpg",
        "imdb": "https://www.imdb.com/title/tt3733778/"
    },
    {
        "name": "The Runner",
        "description": "In the aftermath of the 2010 BP oil spill, an idealistic but flawed politician is forced to confront his dysfunctional life after his career is destroyed in a sex scandal.",
        "genre": "Drama",
        "runtime": "1h 30m",
        "release_date": "August 7, 2015",
        "image": "src/assets/The-Runner.jpg",
        "imdb": "https://www.imdb.com/title/tt3687398/"
    },
    {
        "name": "Outcast",
        "description": "A mysterious warrior teams up with the daughter and son of a deposed Chinese Emperor to defeat their cruel brother, who seeks their deaths.",
        "genre": "Action/Adventure/Thriller",
        "runtime": "1h 39m",
        "release_date": "February 6, 2015",
        "image": "src/assets/Outcast.jpg",
        "imdb": "https://www.imdb.com/title/tt1552224/"
    },
    {
        "name": "Dying of the Light",
        "description": "When a devastating illness threatens to end Evan Lake's career in the C.I.A., he goes rogue to hunt down a terrorist who tortured him during a mission gone awry years ago.",
        "genre": "Action/Drama/Thriller",
        "runtime": "1h 34m",
        "release_date": "December 5, 2014",
        "image": "src/assets/Dying-of-the-Light.jpg",
        "imdb": "https://www.imdb.com/title/tt1274586/"
    },
    {
        "name": "Left Behind",
        "description": "A small group of survivors is left behind after millions of people suddenly vanish and the world is plunged into chaos and destruction.",
        "genre": "Action/Fantasy/Sci-Fi",
        "runtime": "1h 50m",
        "release_date": "October 3, 2014",
        "image": "src/assets/Left-Behind.jpg",
        "imdb": "https://www.imdb.com/title/tt2467046/"
    },
    {
        "name": "Joe",
        "description": "An ex-con, who is the unlikeliest of role models, meets a 15-year-old boy and is faced with the choice of redemption or ruin.",
        "genre": "Crime/Drama/Thriller",
        "runtime": "1h 57m",
        "release_date": "April 9, 2014",
        "image": "src/assets/Joe.jpg",
        "imdb": "https://www.imdb.com/title/tt2382396/"
    },
    {
        "name": "Rage",
        "description": "When the daughter of a reformed criminal is kidnapped, he rounds up his old crew and seeks his own brand of justice.",
        "genre": "Action/Thriller",
        "runtime": "1h 32m",
        "release_date": "January 31, 2014",
        "image": "src/assets/Rage.jpg",
        "imdb": "https://www.imdb.com/title/tt2401807/"
    },
    {
        "name": "The Frozen Ground",
        "description": "An Alaska State Trooper partners with a young woman who escaped the clutches of serial killer Robert Hansen to bring the murderer to justice. Based on actual events.",
        "genre": "Biography/Crime/Drama",
        "runtime": "1h 45m",
        "release_date": "August 23, 2013",
        "image": "src/assets/The-Frozen-Ground.jpg",
        "imdb": "https://www.imdb.com/title/tt2005374/"
    },
    {
        "name": "The Croods",
        "description": "After their cave is destroyed, a caveman family must trek through an unfamiliar fantastical world with the help of an inventive boy.",
        "genre": "Animation/Adventure/Comedy",
        "runtime": "1h 38m",
        "release_date": "March 22, 2013",
        "image": "src/assets/The-Croods.jpg",
        "imdb": "https://www.imdb.com/title/tt0481499/"
    },
    {
        "name": "Stolen",
        "description": "A former thief frantically searches for his missing daughter, who has been kidnapped and locked in the trunk of a taxi.",
        "genre": "Action/Crime/Thriller",
        "runtime": "1h 36m",
        "release_date": "September 14, 2012",
        "image": "src/assets/Stolen.jpg",
        "imdb": "https://www.imdb.com/title/tt1656186/"
    },
    {
        "name": "Seeking Justice",
        "description": "After his wife is assaulted, a husband enlists the services of a vigilante group to help him settle the score. Then he discovers they want a 'favor' from him in return.",
        "genre": "Action/Crime/Drama",
        "runtime": "1h 45m",
        "release_date": "March 16, 2012",
        "image": "src/assets/Seeking-Justice.jpg",
        "imdb": "https://www.imdb.com/title/tt1214962/"
    },
    {
        "name": "Ghost Rider: Spirit of Vengeance",
        "description": "Johnny Blaze, tortured by the Ghost Rider's curse, gets a chance of redemption through protecting the Devil's son, whose father is pursuing him.",
        "genre": "Action/Fantasy/Thriller",
        "runtime": "1h 36m",
        "release_date": "February 17, 2012",
        "image": "src/assets/Ghost-Rider-Spirit-of-Vengeance.jpg",
        "imdb": "https://www.imdb.com/title/tt1071875/"
    },
    {
        "name": "Trespass",
        "description": "As they're held for ransom, a husband and wife's predicament grows more dire amid the discovery of betrayal and deception.",
        "genre": "Crime/Drama/Mystery",
        "runtime": "1h 31m",
        "release_date": "September 14, 2011",
        "image": "src/assets/Trespass.jpg",
        "imdb": "https://www.imdb.com/title/tt1674784/"
    },
    {
        "name": "Drive Angry",
        "description": "A vengeful father escapes from hell and chases after the men who killed his daughter and kidnapped his granddaughter.",
        "genre": "Action/Comedy/Fantasy",
        "runtime": "1h 44m",
        "release_date": "February 25, 2011",
        "image": "src/assets/Drive-Angry.jpg",
        "imdb": "https://www.imdb.com/title/tt1502404/"
    },
    {
        "name": "Season of the Witch",
        "description": "14th-century knights transport a suspected witch to a monastery, where monks deduce that her powers could be the source of the Black Plague.",
        "genre": "Action/Adventure/Fantasy",
        "runtime": "1h 35m",
        "release_date": "January 7, 2011",
        "image": "src/assets/Season-of-the-Witch.jpg",
        "imdb": "https://www.imdb.com/title/tt0479997/"
    },
    {
        "name": "The Sorcerer's Apprentice",
        "description": "A protege of the magician Merlin must train his teacher's successor - an introverted but resourceful physics prodigy - in the art of sorcery to prevent the return of Morgana le Fay.",
        "genre": "Action/Adventure/Family",
        "runtime": "1h 49m",
        "release_date": "July 14, 2010",
        "image": "src/assets/The-Sorcerer's-Apprentice.jpg",
        "imdb": "https://www.imdb.com/title/tt0963966/"
    },
    {
        "name": "Kick-Ass",
        "description": "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a superhero, even though he has no powers, training or meaningful reason to do so.",
        "genre": "Action/Comedy/Crime",
        "runtime": "1h 57m",
        "release_date": "April 16, 2010",
        "image": "src/assets/Kick-Ass.jpg",
        "imdb": "https://www.imdb.com/title/tt1250777/"
    },
    {
        "name": "Bad Lieutenant: Port of Call New Orleans",
        "description": "Terence McDonagh is a drug- and gambling-addled detective in post-Katrina New Orleans investigating the killing of five Senegalese immigrants.",
        "genre": "Crime/Drama/Mystery",
        "runtime": "2h 2m",
        "release_date": "November 20, 2009",
        "image": "src/assets/Bad-Lieutenant-Port-of-Call-New-Orleans.jpg",
        "imdb": "https://www.imdb.com/title/tt1095217/"
    },
    {
        "name": "Astro Boy",
        "description": "When an android replica of a boy is rejected by his aggrieved creator, he goes off to find his own identity in an adventure that would make him the greatest hero of his time.",
        "genre": "Animation/Action/Adventure",
        "runtime": "1h 34m",
        "release_date": "October 23, 2009",
        "image": "src/assets/Astro-Boy.jpg",
        "imdb": "https://www.imdb.com/title/tt0375568/"
    },
    {
        "name": "G-Force",
        "description": "A specially trained squad of guinea pigs is dispatched to stop a diabolical billionaire from taking over the world.",
        "genre": "Animation/Action/Adventure",
        "runtime": "1h 28m",
        "release_date": "July 19, 2009",
        "image": "src/assets/G-Force.jpg",
        "imdb": "https://www.imdb.com/title/tt0436339/"
    },
    {
        "name": "Knowing",
        "description": "M.I.T. professor John Koestler links a mysterious list of numbers from a time capsule to past and future disasters and sets out to prevent the ultimate catastrophe.",
        "genre": "Action/Mystery/Sci-Fi",
        "runtime": "2h 1m",
        "release_date": "March 20, 2009",
        "image": "src/assets/Knowing.jpg",
        "imdb": "https://www.imdb.com/title/tt0448011/"
    },
    {
        "name": "Bangkok Dangerous",
        "description": "A hitman who's in Bangkok to pull off a series of jobs violates his personal code when he falls for a local woman and bonds with his errand boy.",
        "genre": "Action/Crime/Thriller",
        "runtime": "1h 39m",
        "release_date": "September 5, 2008",
        "image": "src/assets/Bangkok-Dangerous.jpg",
        "imdb": "https://www.imdb.com/title/tt0814022/"
    },
    {
        "name": "National Treasure: Book of Secrets",
        "description": "Benjamin Gates must follow a clue left in John Wilkes Booth's diary to prove his ancestor's innocence in the assassination of Abraham Lincoln.",
        "genre": "Action/Adventure/Mystery",
        "runtime": "2h 4m",
        "release_date": "December 21, 2007",
        "image": "src/assets/National-Treasure-Book-of-Secrets.jpg",
        "imdb": "https://www.imdb.com/title/tt0465234/"
    },
    {
        "name": "Next",
        "description": "A Las Vegas magician who can see into the future is pursued by FBI agents seeking to use his abilities to prevent a nuclear terrorist attack.",
        "genre": "Action/Sci-Fi/Thriller",
        "runtime": "1h 36m",
        "release_date": "April 27, 2007",
        "image": "src/assets/Next.jpg",
        "imdb": "https://www.imdb.com/title/tt0435705/"
    },
    {
        "name": "Grindhouse",
        "runtime": "3h 11m",
        "genre": "Action/Horror/Thriller",
        "description": "Quentin Tarantino and Robert Rodriguez's homage to exploitation double features in the '60s and '70s with two back-to-back cult films that include previews of coming attractions between them.",
        "release_date": "April 6, 2007",
        "image": "src/assets/Grindhouse.jpg",
        "imdb": "https://www.imdb.com/title/tt0462322/"
    },
    {
        "name": "Ghost Rider",
        "description": "When motorcycle rider Johnny Blaze sells his soul to the Devil to save his father's life, he is transformed into the Ghost Rider, the Devil's own bounty hunter, and is sent to hunt down sinners.",
        "genre": "Action/Fantasy/Thriller",
        "runtime": "1h 50m",
        "release_date": "February 16, 2007",
        "image": "src/assets/Ghost-Rider.jpg",
        "imdb": "https://www.imdb.com/title/tt0259324/"
    },
    {
        "name": "The Wicker Man",
        "description": "A sheriff investigating the disappearance of a young girl from a small island discovers there's a larger mystery to solve among the island's secretive, neo-pagan community.",
        "genre": "Horror/Mystery/Thriller",
        "runtime": "1h 42m",
        "release_date": "September 1, 2006",
        "image": "src/assets/The-Wicker-Man.jpg",
        "imdb": "https://www.imdb.com/title/tt0450345/"
    },
    {
        "name": "World Trade Center",
        "description": "Two Port Authority police officers become trapped under the rubble of the World Trade Center.",
        "genre": "Drama/History/Thriller",
        "runtime": "2h 9m",
        "release_date": "August 9, 2006",
        "image": "src/assets/World-Trade-Center.jpg",
        "imdb": "https://www.imdb.com/title/tt0469641/"
    },
    {
        "name": "The Ant Bully",
        "description": "After Lucas Nickle floods an ant colony with his water gun, he's magically shrunken down to insect size and sentenced to hard labor in the ruins.",
        "genre": "Animation/Adventure/Comedy",
        "runtime": "1h 28m",
        "release_date": "July 28, 2006",
        "image": "src/assets/The-Ant-Bully.jpg",
        "imdb": "https://www.imdb.com/title/tt0429589/"
    },
    {
        "name": "The Weather Man",
        "description": "A Chicago weather man, separated from his wife and children, debates whether professional and personal success are mutually exclusive.",
        "genre": "Comedy/Drama",
        "runtime": "1h 42m",
        "release_date": "October 28, 2005",
        "image": "src/assets/The-Weather-Man.jpg",
        "imdb": "https://www.imdb.com/title/tt0384680/"
    },
    {
        "name": "Lord of War",
        "description": "An arms dealer confronts the morality of his work as he is being chased by an INTERPOL Agent.",
        "genre": "Crime/Drama",
        "runtime": "2h 2m",
        "release_date": "September 16, 2005",
        "image": "src/assets/Lord-of-War.jpg",
        "imdb": "https://www.imdb.com/title/tt0399295/"
    },
    {
        "name": "National Treasure",
        "description": "A historian races to find the legendary Templar Treasure before a team of mercenaries.",
        "genre": "Action/Adventure/Mystery",
        "runtime": "2h 11m",
        "release_date": "November 19, 2004",
        "image": "src/assets/National-Treasure.jpg",
        "imdb": "https://www.imdb.com/title/tt0368891/"
    },
    {
        "name": "Matchstick Men",
        "description": "A phobic con artist and his protégé are on the verge of pulling off a lucrative swindle when the former's teenage daughter arrives unexpectedly.",
        "genre": "Comedy/Crime/Drama",
        "runtime": "1h 56m",
        "release_date": "September 12, 2003",
        "image": "src/assets/Matchstick-Men.jpg",
        "imdb": "https://www.imdb.com/title/tt0325805/"
    },
    {
        "name": "Sonny",
        "description": "An honorably discharged soldier returns home to New Orleans, hoping to break away from his upbringing as a trained prostitute, but his brothel-madam mother has other expectations.",
        "genre": "Crime/Drama",
        "runtime": "1h 50m",
        "release_date": "December 27, 2002",
        "image": "src/assets/Sonny.jpg",
        "imdb": "https://www.imdb.com/title/tt0305973/"
    },
    {
        "name": "Adaptation.",
        "description": "A lovelorn screenwriter becomes desperate as he tries and fails to adapt 'The Orchid Thief' by Susan Orlean for the screen.",
        "genre": "Comedy/Drama",
        "runtime": "1h 55m",
        "release_date": "December 6, 2002",
        "image": "src/assets/Adaptation..jpg",
        "imdb": "https://www.imdb.com/title/tt0268126/"
    },
    {
        "name": "Windtalkers",
        "description": "Two U.S. Marines in World War II are assigned to protect Navajo Marines, who use their native language as an unbreakable radio cypher.",
        "genre": "Action/Drama/War",
        "runtime": "2h 14m",
        "release_date": "June 14, 2002",
        "image": "src/assets/Windtalkers.jpg",
        "imdb": "https://www.imdb.com/title/tt0245562/"
    },
    {
        "name": "Christmas Carol: The Movie",
        "description": "Old bitter miser Ebenezer Scrooge (Simon Callow) who makes excuses for his uncaring nature learns real compassion when three ghosts visit him on Christmas Eve.",
        "genre": "Animation/Family/Fantasy",
        "runtime": "1h 17m",
        "release_date": "December 7, 2001",
        "image": "src/assets/Christmas-Carol-The-Movie.jpg",
        "imdb": "https://www.imdb.com/title/tt0259929/"
    },
    {
        "name": "Captain Corelli's Mandolin",
        "description": "When a fisherman leaves to fight with the Greek army during World War II, his fiancée falls in love with the local Italian commander.",
        "genre": "Drama/Music/Romance",
        "runtime": "2h 11m",
        "release_date": "August 13, 2001",
        "image": "src/assets/Captain-Corelli's-Mandolin.jpg",
        "imdb": "https://www.imdb.com/title/tt0238112/"
    },
    {
        "name": "The Family Man",
        "description": "A fast-lane investment broker, offered the opportunity to see how the other half lives, wakes up to find that his sports car and girlfriend have become a mini-van and wife.",
        "genre": "Comedy/Drama/Fantasy",
        "runtime": "2h 5m",
        "release_date": "December 22, 2000",
        "image": "src/assets/The-Family-Man.jpg",
        "imdb": "https://www.imdb.com/title/tt0218967/"
    },
    {
        "name": "Gone in 60 Seconds",
        "description": "A retired master car thief must come back to the industry and steal fifty cars with his crew in one night to save his brother's life.",
        "genre": "Action/Crime/Thriller",
        "runtime": "1h 58m",
        "release_date": "June 5, 2000",
        "image": "src/assets/Gone-in-60-Seconds.jpg",
        "imdb": "https://www.imdb.com/title/tt0187078/"
    },
    {
        "name": "Bringing Out the Dead",
        "description": "Haunted by the patients he failed to save, a monumentally burned-out Manhattan ambulance paramedic fights to maintain his sanity over three increasingly turbulent nights.",
        "genre": "Drama/Thriller",
        "runtime": "2h 1m",
        "release_date": "October 22, 1999",
        "image": "src/assets/Bringing-Out-the-Dead.jpg",
        "imdb": "https://www.imdb.com/title/tt0163988/"
    },
    {
        "name": "8MM",
        "description": "A private investigator is hired to discover if a snuff film is authentic or not.",
        "genre": "Crime/Drama/Mystery",
        "runtime": "2h 3m",
        "release_date": "February 26, 1999",
        "image": "src/assets/8MM.jpg",
        "imdb": "https://www.imdb.com/title/tt0134273/"
    },
    {
        "name": "Snake Eyes",
        "description": "Corrupt Atlantic City police officer Rick Santoro and Navy Commander Kevin Dunn join forces to investigate both the assassination of Secretary of Defense Charles Kirkland and the disappearance of a beautiful stranger.",
        "genre": "Crime/Mystery/Thriller",
        "runtime": "1h 38m",
        "release_date": "August 7, 1998",
        "image": "src/assets/Snake-Eyes.jpg",
        "imdb": "https://www.imdb.com/title/tt0120832/"
    },
    {
        "name": "City of Angels",
        "description": "An angel on Earth, a doctor unable to believe, a patient with a secret, a love story made in Heaven.",
        "genre": "Drama/Fantasy/Romance",
        "runtime": "1h 54m",
        "release_date": "April 10, 1998",
        "image": "src/assets/City-of-Angels.jpg",
        "imdb": "https://www.imdb.com/title/tt0120632/"
    },
    {
        "name": "Face/Off",
        "description": "To foil a terrorist plot, FBI agent Sean Archer assumes the identity of the criminal Castor Troy who murdered his son through facial transplant surgery, but the crook wakes up prematurely and vows revenge.",
        "genre": "Action/Crime/Sci-Fi",
        "runtime": "2h 18m",
        "release_date": "June 19, 1997",
        "image": "src/assets/Face-Off.jpg",
        "imdb": "https://www.imdb.com/title/tt0119094/"
    },
    {
        "name": "Con Air",
        "description": "Newly-paroled ex-con and former U.S. Ranger Cameron Poe finds himself trapped in a prisoner-transport plane when the passengers seize control.",
        "genre": "Action/Crime/Thriller",
        "runtime": "1h 55m",
        "release_date": "June 6, 1997",
        "image": "src/assets/Con-Air.jpg",
        "imdb": "https://www.imdb.com/title/tt0118880/"
    },
    {
        "name": "The Rock",
        "description": "A mild-mannered chemist and an ex-con must lead the counterstrike when a rogue group of military men, led by a renegade general, threaten a nerve gas attack from Alcatraz against San Francisco.",
        "genre": "Action/Adventure/Thriller",
        "runtime": "2h 16m",
        "release_date": "June 7, 1996",
        "image": "src/assets/The-Rock.jpg",
        "imdb": "https://www.imdb.com/title/tt0117500/"
    },
    {
        "name": "Leaving Las Vegas",
        "description": "Ben Sanderson, a Hollywood screenwriter who lost everything because of his alcoholism, arrives in Las Vegas to drink himself to death. There, he meets and forms an uneasy friendship and non-interference pact with prostitute Sera.",
        "genre": "Drama/Romance",
        "runtime": "1h 51m",
        "release_date": "October 27, 1995",
        "image": "src/assets/Leaving-Las-Vegas.jpg",
        "imdb": "https://www.imdb.com/title/tt0113627/"
    },
    {
        "name": "Kiss of Death",
        "description": "A reformed convict goes undercover with the help of an angry detective to ensnare a psychotic mobster.",
        "genre": "Crime/Drama/Thriller",
        "runtime": "1h 41m",
        "release_date": "April 21, 1995",
        "image": "src/assets/Kiss-of-Death.jpg",
        "imdb": "https://www.imdb.com/title/tt0113552/"
    },
    {
        "name": "Trapped in Paradise",
        "description": "Residents of a friendly Pennsylvania town foil three brothers' plan to rob a bank on Christmas Eve.",
        "genre": "Adventure/Comedy/Crime",
        "runtime": "1h 51m",
        "release_date": "November 21, 1994",
        "image": "src/assets/Trapped-in-Paradise.jpg",
        "imdb": "https://www.imdb.com/title/tt0111477/"
    },
    {
        "name": "It Could Happen to You",
        "description": "A police officer promises to share his lottery ticket with a waitress in lieu of a tip.",
        "genre": "Comedy/Drama/Romance",
        "runtime": "1h 41m",
        "release_date": "July 29, 1994",
        "image": "src/assets/It-Could-Happen-to-You.jpg",
        "imdb": "https://www.imdb.com/title/tt0110167/"
    },
    {
        "name": "Red Rock West",
        "description": "Upon arriving to a small town, a drifter is mistaken for a hitman, but when the real hitman arrives, complications ensue.",
        "genre": "Crime/Drama/Thriller",
        "runtime": "1h 38m",
        "release_date": "April 8, 1994",
        "image": "src/assets/Red-Rock-West.jpg",
        "imdb": "https://www.imdb.com/title/tt0105226/"
    },
    {
        "name": "Guarding Tess",
        "description": "A former U.S. First Lady wants a particular Secret Service agent to head her bodyguard detail, even though he can't stand her.",
        "genre": "Comedy/Drama",
        "runtime": "1h 36m",
        "release_date": "March 11, 1994",
        "image": "src/assets/Guarding-Tess.jpg",
        "imdb": "https://www.imdb.com/title/tt0109951/"
    },
    {
        "name": "Deadfall",
        "description": "When Joe loses his dad in a sting, he contacts his dad's twin, Lou, who has a major sting planned. Lou's helper feels threatened by Joe. Who's conning who?",
        "genre": "Crime/Drama",
        "runtime": "1h 38m",
        "release_date": "October 8, 1993",
        "image": "src/assets/Deadfall.jpg",
        "imdb": "https://www.imdb.com/title/tt0106684/"
    },
    {
        "name": "Amos & Andrew",
        "description": "A Pulitzer prize writer buys a cabin. The neighbors get suspicious when a stranger breaks in. They see a black man and call the police, who start shooting at him. The sheriff tries a cover-up involving a white petty crook. Bad idea.",
        "genre": "Comedy/Crime",
        "runtime": "1h 36m",
        "release_date": "March 5, 1993",
        "image": "src/assets/Amos-&-Andrew.jpg",
        "imdb": "https://www.imdb.com/title/tt0106266/"
    },
    {
        "name": "Honeymoon in Vegas",
        "description": "Jack loses $65,000 in poker in Las Vegas, where he's marrying Betsy. The wedding will have to wait as the poker winner wants the weekend with Betsy to cancel the debt. She accepts. Whom will she marry?",
        "genre": "Comedy/Romance/Thriller",
        "runtime": "1h 36m",
        "release_date": "August 28, 1992",
        "image": "src/assets/Honeymoon-in-Vegas.jpg",
        "imdb": "https://www.imdb.com/title/tt0104438/"
    },
    {
        "name": "Zandalee",
        "description": "Thierry's wife Zandalee married the poet he once was. Taking over his dad's company in New Orleans gives him stress and impotence. Thierry meets his highschool buddy Johnny at a bachelor party. The painter Johnny can satisfy Zandalee.",
        "genre": "Drama/Romance/Thriller",
        "runtime": "1h 40m",
        "release_date": "May 9, 1991",
        "image": "src/assets/Zandalee.jpg",
        "imdb": "https://www.imdb.com/title/tt0101004/"
    },
    {
        "name": "Wild at Heart",
        "description": "Young lovers Sailor and Lula run from the variety of weirdos that Lula's mom has hired to kill Sailor.",
        "genre": "Crime/Drama/Thriller",
        "runtime": "2h 5m",
        "release_date": "August 17, 1990",
        "image": "src/assets/Wild-at-Heart.jpg",
        "imdb": "https://www.imdb.com/title/tt0100935/"
    },
    {
        "name": "Fire Birds",
        "description": "Elite Apache helicopter pilots are tasked with destroying powerful armed drug cartels operating in South America.",
        "genre": "Action/Adventure",
        "runtime": "1h 25m",
        "release_date": "May 25, 1990",
        "image": "src/assets/Fire-Birds.jpg",
        "imdb": "https://www.imdb.com/title/tt0099575/"
    },
    {
        "name": "Time to Kill",
        "description": "In 1936, when Ethiopia is being invaded by the Italian army, Lieutenant Silvestri sets off for the nearest camp hospital to take care of a toothache. En route he meets a young Ethiopian girl, which leads to a tragic course of events that devastates his entire life.",
        "genre": "Drama/War",
        "runtime": "1h 50m",
        "release_date": "October 27, 1989",
        "image": "src/assets/Time-to-Kill.jpg",
        "imdb": "https://www.imdb.com/title/tt0100762/"
    },
    {
        "name": "Vampire's Kiss",
        "description": "After an encounter with a neck-biter, a publishing executive thinks that he's turning into a vampire.",
        "genre": "Comedy/Crime/Fantasy",
        "runtime": "1h 43m",
        "release_date": "June 2, 1989",
        "image": "src/assets/Vampire's-Kiss.jpg",
        "imdb": "https://www.imdb.com/title/tt0098577/"
    },
    {
        "name": "Never on Tuesday",
        "description": "After their cars collide on a desert highway in the middle of nowhere, two friends and a woman they both like must wait for someone to pass by and help them. Unfortunately, those who do stop turn out to be criminals, eccentrics or wackos.",
        "genre": "Comedy/Drama",
        "runtime": "1h 30m",
        "release_date": "April 13, 1989",
        "image": "src/assets/Never-on-Tuesday.jpg",
        "imdb": "https://www.imdb.com/title/tt0095722/"
    },
    {
        "name": "Moonstruck",
        "description": "Loretta Castorini, a bookkeeper from Brooklyn, New York, finds herself in a difficult situation when she falls for the brother of the man she has agreed to marry.",
        "genre": "Comedy/Drama/Romance",
        "runtime": "1h 42m",
        "release_date": "December 18, 1987",
        "image": "src/assets/Moonstruck.jpg",
        "imdb": "https://www.imdb.com/title/tt0093565/"
    },
    {
        "name": "Raising Arizona",
        "description": "When a childless couple--an ex-con and an ex-cop--decide to help themselves to one of another family's quintuplets, their lives become more complicated than they anticipated.",
        "genre": "Comedy/Crime",
        "runtime": "1h 34m",
        "release_date": "March 13, 1987",
        "image": "src/assets/Raising-Arizona.jpg",
        "imdb": "https://www.imdb.com/title/tt0093822/"
    },
    {
        "name": "Peggy Sue Got Married",
        "description": "Peggy Sue, on the verge of a divorce, faints at her 25th high school reunion, and wakes up to find herself back in 1960, leading her to try to spot and correct the mistakes that led to disappointments and an unhappy marriage.",
        "genre": "Comedy/Drama/Fantasy",
        "runtime": "1h 43m",
        "release_date": "October 10, 1986",
        "image": "src/assets/Peggy-Sue-Got-Married.jpg",
        "imdb": "https://www.imdb.com/title/tt0091738/"
    },
    {
        "name": "The Boy in Blue",
        "description": "A biography of the famous sculler Ned Hanlon who led a colorful life as a bootlegger at the turn of the 20th century.",
        "genre": "Biography/Drama/Sport",
        "runtime": "1h 37m",
        "release_date": "January 17, 1986",
        "image": "src/assets/The-Boy-in-Blue.jpg",
        "imdb": "https://www.imdb.com/title/tt0090769/"
    },
    {
        "name": "Birdy",
        "description": "After two friends return home from the Vietnam War one becomes mentally unstable and obsesses with becoming a bird.",
        "genre": "Drama/War",
        "runtime": "2h",
        "release_date": "December 21, 1984",
        "image": "src/assets/Birdy.jpg",
        "imdb": "https://www.imdb.com/title/tt0086969/"
    },
    {
        "name": "The Cotton Club",
        "description": "Meet the jazz musicians, dancers, owner, and guests (like gangster Dutch Schultz) of The Cotton Club in 1928-1930s Harlem.",
        "genre": "Crime/Drama/Music",
        "runtime": "2h 9m",
        "release_date": "December 14, 1984",
        "image": "src/assets/The-Cotton-Club.jpg",
        "imdb": "https://www.imdb.com/title/tt0087089/"
    },
    {
        "name": "Racing with the Moon",
        "description": "In 1942 California, two young men await induction into the U.S. Marines and say goodbye to their girlfriends.",
        "genre": "Comedy/Drama/Romance",
        "runtime": "1h 48m",
        "release_date": "March 23, 1984",
        "image": "src/assets/Racing-with-the-Moon.jpg",
        "imdb": "https://www.imdb.com/title/tt0087968/"
    },
    {
        "name": "Rumble Fish",
        "description": "Absent-minded street thug Rusty James struggles to live up to his legendary older brother's reputation, and longs for the days of gang warfare.",
        "genre": "Crime/Drama/Romance",
        "runtime": "1h 34m",
        "release_date": "October 21, 1983",
        "image": "src/assets/Rumble-Fish.jpg",
        "imdb": "https://www.imdb.com/title/tt0086216/"
    },
    {
        "name": "Valley Girl",
        "description": "Julie, a girl from the valley, meets Randy, a punk from the city. They are from different worlds and find love. Somehow they need to stay together in spite of her trendy, shallow friends.",
        "genre": "Comedy/Romance",
        "runtime": "1h 39m",
        "release_date": "April 29, 1983",
        "image": "src/assets/Valley-Girl.jpg",
        "imdb": "https://www.imdb.com/title/tt0086525/"
    },
    {
        "name": "Fast Times at Ridgemont High",
        "description": "A group of Southern California high school students are enjoying their most important subjects: sex, drugs and rock n' roll.",
        "genre": "Comedy/Drama",
        "runtime": "1h 30m",
        "release_date": "August 13, 1982",
        "image": "src/assets/Fast-Times-at-Ridgemont-High.jpg",
        "imdb": "https://www.imdb.com/title/tt0083929/"
    }
]`

const template = `
    {
        "name": "",
        "description": "",
        "genre": "",
        "runtime": "",
        "release_date": "",
        "image": "",
        "imdb": ""
    },
`

export default movies;
