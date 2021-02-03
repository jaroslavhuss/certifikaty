const data = [
  {
    name: "MUDr. Karel Volný",
    email: "volkare@seznam.cz"
  },
  {
    name: "MUDr. Jana Volná",
    email: "j.volnafm@seznam.cz"
  },
  {
    name: "MUDr. Vít Pávek",
    email: "conradv@tiscali.cz"
  },
  {
    name: "MUDr. Jana Zmeková",
    email: "zmekovaj@email.cz"
  },
  {
    name: "MUDr. Andrea Cinculová",
    email: "andrea.cinculova@spea.cz"
  },
  {
    name: "MUDr. Jakub Dehner",
    email: "dehner.jakub@post.cz"
  },
  {
    name: "MUDr. Barbora Talová",
    email: "b.talova@seznam.cz"
  },
  {
    name: "MUDr. Dana Fidlerová",
    email: "fidlerova@vnol.cz"
  },
  {
    name: "MUDr. Michal Samson",
    email: "michal.samson@nsphav.cz"
  },
  {
    name: "MUDr. Markéta Dobrá",
    email: "mdobra@centrum.cz"
  },
  {
    name: "MUDr. Henrich Kalafa",
    email: "ambulance@tvujpsychiatr.cz"
  },
  {
    name: "MUDr. Bohdan Brozda",
    email: "brozdab@seznam.cz"
  },
  {
    name: "MUDr. Richard Bosák",
    email: "rbosak@seznam.cz"
  },
  {
    name: "MUDr. Petr Dostálek",
    email: "petr.dostalek@fno.cz"
  },
  {
    name: "MUDr. Petra Pekárková",
    email: "p.pekarkova@post.cz"
  },
  {
    name: "MUDr. Lucie Hlochová",
    email: "lucie.hlochova@seznam.cz"
  },
  {
    name: "MUDr. Jonáš Boček",
    email: "jonas.bocek@fnol.cz"
  },
  {
    name: "MUDr. Olga Kováčová",
    email: "olga.kovac@seznam.cz"
  },
  {
    name: "MUDr. František Chudárek",
    email: "f.chudarek@email.cz"
  },
  {
    name: "MUDr. Eva De La Hozová",
    email: "edlh.psychiatrie@seznam.cz"
  },
  {
    name: "MUDr. Ľuboslav Procházka",
    email: "psychiatrie.opava@gmail.com"
  },
  {
    name: "MUDr. Jan Svěch",
    email: "honzasvech@centrum.cz"
  },
  {
    name: "MUDr. Dominika Procházková",
    email: "domi.dominika@seznam.cz"
  },
  {
    name: "MUDr. Lenka Šebelová",
    email: "l.sebe@seznam.cz"
  },
  {
    name: "MUDr. Dagmar Pilcová",
    email: "dagmar.pilcova@gmail.com"
  },
  {
    name: "MUDr. Ondřej Pilc",
    email: "ondrej.pilc@gmail.com"
  },
  {
    name: "MUDr. Michaela Šedová",
    email: "misasedova@seznam.cz"
  },
  {
    name: "MUDr. Vlastimil Nesnídal",
    email: "vlastimilnesnidal@gmail.com"
  },
  {
    name: "Mgr. MUDr. Eva Rozsívalová",
    email: "rozsivalova@plstbk.cz"
  },
  {
    name: "MUDr. Pavla Čiklová",
    email: "dudova.pavla@seznam.cz"
  },
  {
    name: "MUDr. Milan Karas",
    email: "karas.br@centrum.cz"
  },
  {
    name: "MUDr. Miroslav Hajda",
    email: "mirekhajda@seznam.cz"
  },
  {
    name: "MUDr. Natália Poliačiková",
    email: "polinatka@gmail.com"
  },
  {
    name: "MUDr. Ivana Drcmánková",
    email: "ivanadrcmankova@centrum.cz"
  },
  {
    name: "MUDr. Adéla Chmelařová",
    email: "chmelarova@mens.cz"
  },
  {
    name: "MUDr. Zuzana Kučerová",
    email: "zuzana.kucerova@fno.cz"
  },
  {
    name: "MUDr. Lucie Bundárová",
    email: "lucie.bundarova@fnol.cz"
  },
  {
    name: "MUDr. Martin Hýža",
    email: "martin.hyza@seznam.cz"
  },
  {
    name: "MUDr. Michal Vrátný",
    email: "vratny@centrum.cz"
  },
  {
    name: "MUDr. Miloš Sedláček",
    email: "sedlacek@mens.cz"
  },
  {
    name: "MUDr. Jiří Rozkoš",
    email: "jiri.rozkos@seznam.cz"
  },
  {
    name: "MUDr. Rastislav Poliačik",
    email: "poliacikpsyvse@gmail.com"
  },
  {
    name: "MUDr. Denisa Perničková",
    email: "pernickova@centrum.cz"
  },
  {
    name: "MUDr. Kryštof Kantor",
    email: "krystof.kantor@fnol.cz"
  },
  {
    name: "MUDr. Peter Bobovnik",
    email: "bobovnik.peter@gmail.com"
  },
  {
    name: "MUDr. Věra Táborská",
    email: "drtab@seznam.cz"
  },
  {
    name: "MUDr. Sandra Matějková",
    email: "sandra.krizova1@gmail.com"
  },
  {
    name: "MUDr. Tomáš Novák",
    email: "halos@centrum.cz"
  },
  {
    name: "MUDr. Jana Kollerová",
    email: "j.klaricova@seznam.cz"
  },
  {
    name: "MUDr. Jana Blagová",
    email: "blagova@pnopava.cz"
  },
  {
    name: "MUDr. Alicja Santariusová",
    email: "alice.santariusova@gmail.com"
  },
  {
    name: "MUDr. Kristýna Pravdová",
    email: "Kristyna.pravdova@gmail.com"
  },
  {
    name: "MUDr. Svatopluk Sedláček",
    email: "svatopluk.sedlacek@seznam.cz"
  },
  {
    name: "MUDr. Dana Trávníčková",
    email: "travnickova@pnopava.cz"
  },
  {
    name: "MUDr. Nina Drábková",
    email: "drabkova@pnopava.cz"
  },
  {
    name: "prim. MUDr. Vlasta Hanušková",
    email: "hanuskova@pnopava.cz"
  },
  {
    name: "MUDr. Krystyna Sulejmaniová",
    email: "krystyna.sulejmaniova@nct.agel.cz"
  },
  {
    name: "MUDr. Jolana Hučková",
    email: "motavato@centrum.cz"
  },
  {
    name: "MUDr. Robert Dojčár",
    email: "dojcar@plstbk.cz"
  },
  {
    name: "MUDr. Hajdová Veronika",
    email: "hajdova@plstbk.cz"
  },
  {
    name: "MUDr. Tereza Krystynová",
    email: "krystynova3@centrum.cz"
  },
  {
    name: "MUDr. Denisa Olejová",
    email: "denisa.dybo@gmail.com"
  },
  {
    name: "MUDr. Daniela Hahnová",
    email: "hahnovadaniela@seznam.cz"
  },
  {
    name: "MUDr. Franek Ondřej",
    email: "franekon@pnopava.cz"
  },
  {
    name: "MUDr. Miroslav Bukovjan",
    email: "miroslav.bukovjan@seznam.cz"
  },
  {
    name: "MUDr. Adéla Kašíková",
    email: "kasikova.adela@gmail.com"
  },
  {
    name: "MUDr. Lenka Chroboková",
    email: "lenka.chrobokova@seznam.cz"
  },
  {
    name: "MUDr. Kamil Krömer",
    email: "kamil.kromer@seznam.cz"
  },
  {
    name: "MUDr. Šárka Černohorská",
    email: "cernohorskas@seznam.cz"
  },
  {
    name: "MUDr. Linda Kovářová",
    email: "kovarova.linda@seznam.cz"
  },
  {
    name: "MUDr. Kateřina Drábková",
    email: "kamirada@kamirada.eu"
  },
  {
    name: "MUDr. Samuel Ambroš",
    email: "samuel.ambros@fno.cz"
  },
  {
    name: "MUDr. Pavol Dubovský",
    email: "dubovsky@centrum.cz"
  },
  {
    name: "MUDr. Mgr. Marek Pérez, Ph.D",
    email: "marek.perez@centrum.cz"
  },
  {
    name: "MUDr. David Polednik",
    email: "d.polednik@tiscali.cz"
  },
  {
    name: "MUDr. Kateřina Bakhtary",
    email: "katerina.bakhtary@seznam.cz"
  }
]

module.exports = data;