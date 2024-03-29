// change language of microseason labels - kanji default
var kanji = {
    "立春":["東風解凍", "黄鶯睍睆", "魚上氷"],
    "雨水":["土脉潤起", "霞始靆", "草木萌動"],
    "啓蟄":["蟄虫啓戸", "桃始笑", "菜虫化蝶"],
    "春分":["雀始巣", "櫻始開", "雷乃発声"],
    "清明":["玄鳥至", "鴻雁北", "虹始見"],
    "穀雨":["虹始見", "霜止出苗", "牡丹華"],
    "立夏":["蛙始鳴", "蚯蚓出", "竹笋生"],
    "小満":["蚕起食桑", "紅花栄", "麦秋至"],
    "芒種":["蟷螂生", "腐草為螢", "梅子黄"],
    "夏至":["乃東枯", "菖蒲華", "半夏生"],
    "小暑":["温風至", "蓮始開", "鷹乃学習"],
    "大暑":["桐始結花", "土潤溽暑", "大雨時行"],
    "立秋":["涼風至", "寒蝉鳴", "蒙霧升降"],
    "処暑":["綿柎開", "天地始粛", "禾乃登"],
    "白露":["草露白", "鶺鴒鳴", "玄鳥去"],
    "秋分":["雷乃収声", "蟄虫坏戸", "水始涸"],
    "寒露":["鴻雁来", "菊花開", "蟋蟀在戸"],
    "霜降":["霜始降", "霎時施", "楓蔦黄"], 
    "立冬":["山茶始開", "地始凍", "金盞香"],
    "小雪":["虹蔵不見", "朔風払葉", "橘始黄"],
    "大雪":["閉塞成冬", "熊蟄穴", "鱖魚群"],
    "冬至":["乃東生", "麋角解", "雪下出麦"],
    "小寒":["芹乃栄", "水泉動", "雉始雊"],
    "大寒":["款冬華", "水沢腹堅", "鶏始乳"]
}
var romaji = {
    "risshun":  ["harukaze kōri o toku", "kōō kenkan su", "uo kōri o izuru"],
    "usui":     ["tsuchi no shō uruoi okoru", "kasumi hajimete tanabiku", "sōmoku mebae izuru"],
    "keichitsu":["sugomori mushito o hiraku", "momo hajimete saku", "namushi chō to naru"],
    "shunbun":  ["suzume hajimete sukū", "sakura hajimete saku", "kaminari sunawachi koe o hassu"],
    "seimei":   ["tsubame kitaru", "kōgan kaeru", "niji hajimete arawaru"],
    "kokuu":    ["ashi hajimete shōzu", "shimo yamite nae izuru", "otan hana saku"],
    "rikka":    ["kawazu hajimete naku", "mimizu izuru", "takenoko shōzu"],
    "shōman":   ["kaiko okite kuwa o hamu", "benibana sakau", "mugi no toki itaru"],
    "bōshu":    ["kamakiri shōzu", "kusaretaru kusa hotaru to naru", "ume no mi kibamu"],
    "geshi":    ["natsukarekusa karuru", "ayame hana saku", "hange shōzu"],
    "shōsho":   ["atsukaze itaru", "hasu hajimete hiraku", "taka sunawachi waza o narau"],
    "taisho":   ["kiri hajimete hana o musubu", "tsuchi uruōte mushi atsushi", "taiu tokidoki furu"],
    "risshū":   ["suzukaze itaru", "higurashi naku", "fukaki kiri matō"],
    "shosho":   ["wata no hana shibe hiraku", "tenchi hajimete samushi", "kokumono sunawachi minoru"],
    "hakuro":   ["kusa no tsuyu shiroshi", "sekirei naku", "tsubame saru"],
    "shūbun":   ["kaminari sunawachi koe o osamu", "mushi kakurete to o fusagu", "mizu hajimete karuru"],
    "kanro":    ["kōgan kitaru", "kiku no hana hiraku", "kirigirisu to ni ari"],
    "sōkō":     ["shimo hajimete furu", "kosame tokidoki furu", "momiji tsuta kibamu"],
    "rittō":    ["tsubaki hajimete hiraku", "chi hajimete kōru", "kinsenka saku"],
    "shōsetsu": ["niji kakurete miezu", "kitakaze konoha o harau", "tachibana hajimete kibamu"],
    "taisetsu": ["sora samuku fuyu to naru", "kuma ana ni komoru", "sake no uo muragaru"],
    "tōji":     ["natsukarekusa shōzu", "sawashika no tsuno otsuru", "yuki watarite mugi nobiru"],
    "shōkan":   ["seri sunawachi sakau", "shimizu atataka o fukumu", "khimizu atataka o fukumu"],
    "daikan":   ["fuki no hana saku", "sawamizu kōri tsumeru", "niwatori hajimete toya ni tsuku"]
}
var english = {
    "beginning of spring":      ["east wind melts the ice", "bush warblers start singing in the mountains", "fish emerge from the ice"],
    "rainwater":                ["rain moistents the soil", "mist starts to linger", "grass sprouts, trees bud"],
    "insects awaken":           ["hibernating insects surface", "first peach blossoms", "caterpillars become butterflies"],
    "spring equinox":           ["sparrows start to nest", "first cherry blossoms", "distant thunder"],
    "pure and clear":           ["swallows return", "wild geese fly north", "first rainbows"],
    "grain rains":              ["first reeds sprout", "last frost, rice seedlings grow", "peonies bloom"],
    "beginning of summer":      ["frogs start singing", "worms surface", "bamboo shoots sprout"],
    "lesser ripening":          ["silkworms start feasting on mulberry leaves", "safflowers bloom", "wheat ripens and is harvested"],
    "grain beards and seeds":   ["praying mantises hatch", "rotten grass becomes fireflies", "plums turn yellow"],
    "summer solstice":          ["self - heal withers", "irises bloom", "crow - dipper sprouts"],
    "lesser heat":              ["warm winds blow", "first lotus blossoms", "hawks learn to fly"],
    "greater heat":             ["paulownia trees produce seeds", "earth is damp, air is humid", "great rains sometimes fall"],
    "beginning of autumn":      ["cool winds blow", "evening cicadas sing", "thick fog descends"],
    "manageable heat":          ["cotton flowers bloom", "heat starts to die down", "rice ripens"],
    "white dew":                ["dew glistens white on grass", "wagtails sing", "swallows leave"],
    "autumn equinox":           ["thunder ceases", "insects hole up underground", "farmers drain fields"],
    "cold dew":                 ["wild geese return", "chrysanthemums bloom", "crickets chirp around the door"],
    "frost falls":              ["first frost", "light rains sometimes fall", "maple leaves and ivy turn yellow"],
    "beginning of winter":      ["camellias bloom", "land starts to freeze", "daffodils bloom"],
    "lesser snow":              ["rainbows hide", "north wind blows the leaves from the trees", "tachibana citrus tree leaves start to turn yellow"],
    "greater snow":             ["cold sets in, winter begins", "bears start hibernating in their dens", "salmon gather and swim upstream"],
    "winter solstice":          ["self - heal sprouts", "deer shed antlers", "wheat sprouts under snow"],
    "lesser cold":              ["parsley flourishes", "springs thaw", "pheasants start to call"],
    "greater cold":             ["butterburs bud", "ice thickens on streams", "hens start laying eggs"]
}

var conversions = {
    1: ["02.04 - 02.08", "02.09 - 02.13", "02.14 - 02.18"],
    2: ["02.19 - 02.23", "02.24 - 02.28", "03.01 - 03.05"],
    3: ["03.06 - 03.10", "03.11 - 03.15", "03.16 - 03.20"],
    4: ["03.21 - 03.25", "03.26 - 03.30", "03.31 - 04.04"],
    5: ["04.05 - 04.09", "04.10 - 04.14", "04.15 - 04.19"],
    6: ["04.20 - 04.24", "04.25 - 04.29", "04.30 - 05.04"],
    7: ["05.05 - 05.09", "05.10 - 05.14", "05.15 - 05.20"],
    8: ["05.21 - 05.25", "05.26 - 05.30", "05.31 - 06.05"],
    9: ["06.06 - 06.10", "06.11 - 06.15", "06.16 - 06.20"],
    10:["06.21 - 06.26", "06.27 - 07.01", "07.02 - 07.06"],
    11:["07.07 - 07.11", "07.12 - 07.16", "07.17 - 07.22"],
    12:["07.23 - 07.28", "07.29 - 08.02", "08.03 - 08.07"],
    13:["08.08 - 08.12", "08.13 - 08.17", "08.18 - 08.22"],
    14:["08.23 - 08.27", "08.28 - 09.01", "09.02 - 09.07"],
    15:["09.08 - 09.12", "09.13 - 09.17", "09.18 - 09.22"],
    16:["09.23 - 09.27", "09.28 - 10.02", "10.03 - 10.07"],
    17:["10.08 - 10.12", "10.13 - 10.17", "10.18 - 10.22"],
    18:["10.23 - 10.27", "10.28 - 11.01", "11.02 - 11.06"],
    19:["11.07 - 11.11", "11.12 - 11.16", "11.17 - 11.21"],
    20:["11.22 - 11.26", "11.27 - 12.01", "12.02 - 12.06"],
    21:["12.07 - 12.11", "12.12 - 12.16", "12.17 - 12.21"],
    22:["12.22 - 12.26", "12.27 - 12.31", "01.01 - 01.04"],
    23:["01.05 - 01.09", "01.10 - 01.14", "01.15 - 01.19"],
    24:["01.20 - 01.24", "01.25 - 01.29", "01.30 - 02.03"]
}

var szndays = [
    5, 5, 5, // beginning of spring
    5, 5, 5, // rainwater
    5, 5, 5, // insects awaken
    5, 5, 5, // spring equinox
    5, 5, 5, // pure and clear
    5, 5, 5, // grain rains
    5, 5, 6, // beginning of summer
    5, 5, 6, // lesser ripening
    5, 5, 5, // grain beards and seeds
    6, 5, 5, // summer solstice
    5, 5, 6, // lesser heat
    6, 5, 5, // greater heat
    5, 5, 5, // beginning of autumn
    5, 5, 6, // manageable heat
    5, 5, 5, // white dew
    5, 5, 5, // autumn equinox
    5, 5, 5, // cold dew
    5, 5, 5, // frost falls
    5, 5, 5, // beginning of winter
    5, 5, 5, // lesser snow
    5, 5, 5, // greater snow
    5, 5, 4, // winter solstice
    5, 5, 5, // lesser cold
    5, 5, 5  // greater cold
]

// refer to this site for seasons:
// https://www.nippon.com/en/features/h00124/