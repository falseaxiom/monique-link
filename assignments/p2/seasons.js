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
    "summer solstice":          ["self-heal withers", "irises bloom", "crow-dipper sprouts"],
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
    "greater snow":             ["cold sets in, winter begins", "beats start hibernating in their dens", "salmon gather and swim upstream"],
    "winter solstice":          ["self-heal sprouts", "deer shed antlers", "wheat sprouts under snow"],
    "lesser cold":              ["parsley flourishes", "springs thaw", "pheasants start to call"],
    "greater cold":             ["butterburs bud", "ice thickens on streams", "hens start laying eggs"]
}

var conversions = {
    1: ["02_04^02_08", "02_09^02_13", "02_14^02_18"],
    2: ["02_19^02_23", "02_24^02_28", "03_01^03_05"],
    3: ["03_06^03_10", "03_11^02_15", "03_16^03_20"],
    4: ["03_21^03_25", "03_26^03_30", "03_31^04_04"],
    5: ["04_05^04_09", "04_10^04_14", "04_15^04_19"],
    6: ["04_20^04_24", "04_25^04_29", "04_30^05_04"],
    7: ["05_04^05_09", "05_10^05_14", "05_15^05_20"],
    8: ["05_21^05_25", "05_26^05_30", "05_31^06_05"],
    9: ["06_06^06_10", "06_11^06_15", "06_16^06_20"],
    10:["06_21^06_26", "06_27^07_01", "07_02^07_06"],
    11:["07_07^07_11", "07_12^07_16", "07_17^07_22"],
    12:["07_23^07_28", "07_29^08_02", "08_03^08_07"],
    13:["08_08^08_12", "08_13^08_17", "08_18^08_22"],
    14:["08_23^08_27", "08_28^09_01", "09_02^09_07"],
    15:["09_08^09_12", "09_13^09_17", "09_18^09_22"],
    16:["09_23^09_27", "09_28^10_02", "10_03^10_07"],
    17:["10_08^10_12", "10_13^10_17", "10_18^10_22"],
    18:["10_23^10_27", "10_28^11_01", "11_02^11_06"],
    19:["11_07^11_11", "11_12^11_16", "11_17^11_21"],
    20:["11_22^11_26", "11_27^12_01", "12_02^12_06"],
    21:["12_07^12_11", "12_12^12_16", "12_17^12_21"],
    22:["12_22^12_26", "12_27^12_31", "01_01^01_04"],
    23:["01_05^01_09", "01_10^01_14", "01_15^01_19"],
    24:["01_20^01_24", "01_25^01_29", "01_30^02_03"]
}