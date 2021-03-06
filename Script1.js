// JavaScript source code
$(function () {

    var images = [
        [ "photo/000.JPG" ],
        ["photo/001.JPG"],
        ["photo/002.JPG"],
        [ "photo/003.JPG" ],
        [ "photo/004.JPG" ],
        [ "photo/005.JPG" ],
        [ "photo/006.JPG" ],
        [ "photo/007.JPG" ],
        [ "photo/008.JPG" ],
        [ "photo/009.JPG" ],
        [ "photo/010.JPG" ],
        [ "photo/011.JPG" ],
        [ "photo/012.JPG" ],
        [ "photo/013.JPG" ],
        [ "photo/014.JPG" ],
        [ "photo/015.JPG" ],
        [ "photo/016.JPG" ],
        [ "photo/017.JPG" ],
        [ "photo/018.JPG" ],
        [ "photo/019.JPG" ],
        ["photo/020.JPG"],
        ["photo/021.JPG"],
    ]

    var card = [
        ['愚者','自由'],
        ['魔術師','コミュニケーション'],
        ['女司祭','直観'],
        ['女帝','はぐくむ'],
        ['皇帝', '安定'],
        ['皇帝', '安定'],
        ['神官', '信念'],
        ['恋人', '調和'],
        ['戦車', '目標達成'],
        ['調整', 'バランス'],
        ['隠者', '洞察'],
        ['運命', '運命'],
        ['欲望', '情熱'],
        ['吊るされた男', '忍耐'],
        ['死神', '再生'],
        ['技', '融合'],
        ['悪魔', '誘惑'],
        ['塔', '解放'],
        ['星', '吉兆'],
        ['月', '不安'],
        ['太陽', '喜び'],
        ['永劫', 'スタート'],
        ['宇宙', '完成'],
    ]

    var str = [
        //        [ "photo/000.JPG" ],
        ['今日はオープンな気分で過ごせそう。思い込みを捨てて、何事も真剣に考えないようにしましょう。\
          \nイヤなことや苦手なことにも、好奇心を持って取組んでみて。\
          \n自由に心を開放すれば、イキイキと楽しい日を過ごせるはず。\
          \n仕事や勉強は、全く違う方法を試してみましょう。プライベートは、思い切り羽を伸ばして楽しんで!'
        ],
        //["photo/001.JPG"],
        ['もし私じゃなけれは、誰がやる？」「今じゃなければ、いつやる？」それが今日の開運ワードです。\
          \n今日のあなたには、目標を達成するための自信と集中力が備わっています。\
          \n周りの人達とのコミュニケーションを大切にし、情報収集と準備をしっかりして挑みましょう。\
          \nそうすれば、困難なことでも簡単に乗り越えることができるはず。'
        ],
        // ["photo/002.JPG"],
        ['何も期待や予測をせず、物事が起こるままにしておきましょう。\
          \nその代わり、直感が告げるメッセージに細心の注意を払い、内なる衝動に従ってみて。\
          \nあなたの心の声が「動け」と告げたときだけ、行動するようにしましょう。\
          \nそうすれば、ありふれた1日が刺激的な1日に変わり、満たされた気分で過ごせるでしょう。'
        ],
        //[ "photo/003.JPG" ],
        ['イキイキと過ごせる1日です。自然の中でのんびり過ごすと、リラックスして豊かな想像力を発揮できそう。\
          \n興味のアンテナをグングン伸ばしましょう。\
          \n直感的にあなたが「正しい」と思うことをすれば、すべてがスムーズに動き出します。\
          \nまた、今日新しく始めることは、発展する兆しがあります。停滞していることも再び動き出すでしょう。'
        ],

        ['充実した活動をしたい1日です。\
          \n今日のあなたは十分なエネルギーに満ちあふれているので、やるべきことや、\
          \n長い間やってみたかったことなどに、思い切ってトライしてみましょう。\
          \n特に仕事運が好調。技術と能力を発揮して、依頼や期待に応えることができるはず。\
          \n不明瞭なことをクリアにし、未解決の仕事をやり遂げましょう。'
        ],
        //[ "photo/004.JPG" ],
        ['「信じる気持ち」を大切にしましょう。\
          \nあなたにとって本当に価値のある活動をし、充実した経験をするチャンスです。\
          \nつまらないことにこだわったり、意味のない言葉に耳を傾けないで。外見に惑わされず、\
          \nそこに隠された潜在的な価値を見るようにしましょう。\
          \n迷ったときは良心に従って。後悔しないような決断を下しましょう。'
        ],
        //[ "photo/005.JPG" ],
        ['決断力がアップする日。イライラした気分を解き放ち、心の声に耳を傾けてみて。\
          \n穏やかさを取り戻し、落ち着いた気分になるでしょう。\
          \nまた、今日は公私共に、大事な決定をするのに良いタイミングです。\
          \n違和感や矛盾点をどうやって克服するか考えてみて。\
          \n壊れたものがあるのなら、その破片を集めて修復しましょう。'
        ],
        //[ "photo/006.JPG" ],
        ['今日は新しいことが始まるスタートの日です。\
          \n今まで保留にしていたことがあるなら、これ以上待つ必要はありません。\
          \n目の前で起こっていることに興味を持ち、よく観察しながら、目標に照準を合わせましょう。\
          \nいったん始めるとノンストップで進んでいくので、大事なことを見落としていないか、事前によく確認しましょう。'
        ],
        //[ "photo/007.JPG" ],
        ['今日は頭をクリアにしましょう。\
          \n何事にも公平な態度で向き合い、フェアプレーを心がけて。\
          \nそして、あなたの行動がどのような影響を及ぼすのか、よく考えてみましょう。\
          \nあらゆる角度からじっくり検討して動けば、その結果に満足できるはず。\
          \n逆に、なんだかソワソワするなら、それは自分に嘘をついている証拠。素直な気持ちを大切に。'
        ],
        //[ "photo/008.JPG" ],
        ['今日は「あなたのための日」です。ひとりで過ごす時間を作って、マイペースで過ごすと吉。\
          \n今日中にやるべきことがあるなら、慎重に取り組みましょう。\
          \n重要な決定をする際は、納得できる方法が見つかるまで待って。\
          \n瞑想をしたり、散歩をしたり、きれいな景色を眺めたり・・・焦らず機が熟すのを待てば、条件が整うはずです。'
        ],
        //[ "photo/009.JPG" ],
        ['今日は避けることのできない状況や出来事に直面しそう。\
          \nただし、何があっても、それに逆らうべきではありません。\
          \nなぜそんなこと起こるのか意味がわからなくても、慌てないこと。\
          \nそれはトラブルではなくチャンスだったのだと、後から気付くはずです。\
          \n今日あなたが体験する出来事は、最終的に幸運な結果となるでしょう。'
        ],
        //[ "photo/010.JPG" ],
        ['ワイルドな1日です。今日のあなたはエネルギーに満ちあふれ、心の中が愛情と喜びでいっぱいになるでしょう。\
          \nテンションも最高謝でビックリするほどパワフルに活動できそう。\
          \n大騒ぎした後は、そのパワーをクリエイティブな方向に転換しましょう。\
          \nあなたの実力と魅力を発揮すれば、難しい局面もスムーズに乗り越えることができるはず。'
        ],
        //[ "photo/011.JPG" ],
        ['今日はあなたの忍耐力が試される1日です。\
          \n停滞中のことが進展しないばかりか、想定外の部分で行き詰まることもありそう。\
          \nただし、離れ技を使って問題を解決しようとするのはNG。\
          \nそんなことをしても状況が悪化するだけです。意識を変えて、\
          \n全く違う角度から物事を見るようにすれば、解決の糸口が見つかるでしょう。'
        ],
        //[ "photo/012.JPG" ]
        ['今日は何かが終わる日です。\
          \nもし「それ」があなたにとって重要なことなら、終わらせるのに苦労するかもしれません。\
          \nでも、あなたは今日こそ「それ」とサヨナラするべきです。\
          \nそのままにしておいてはいけません。ようやく「それ」から解放されて自由の身になったとき、\
          \nあなたはハッピーな気分になって、安心感で満たされるでしょう。'
        ],
        //[ "photo/013.JPG" ],
        ['今日のあなたはラッキーです。面白いもの同士を混ぜ合わせて、新しいものを作ることができるでしょう。\
          \n人々のまとめ役となって、問題の解決法を発見したり、\
          \n素晴らしい発明をしたりすることだってできるかもしれません。\
          \nなかなか打ち解けられない人がいたら、その緊張感を和らげて、深い関係を築けるように力を尽くしましょう'
        ],
        //[ "photo/014.JPG" ],
        ['誘惑の多い1日です。誰かにそそのかされて、自分の信念に反することをしてしまうかも。\
          \nもしくは、憎しみ、嫉妬、貪欲、権力への渇望といった黒い感情が目覚めて、\
          \n自分の"ダークサイド"と向き合うこともあるでしょう。\
          \nただし、それを無視したり、他人のせいにしてはいけません。\
          \n今日は、自分の嫌な一面とトコトン向き合ってみましょう。'
        ],
        //[ "photo/015.JPG" ],
        ['刺激的な1日。良くも悪くもビックリすることが起こりそう。\
          \n「なるほど！」とひらめくこともあれば、邪魔が入って計画通りに進まないことも。\
          \nただ、もし今日挫折感を味わったとしても、落ち込む必要はありません。\
          \nこのカードには、凝り固まった物事を改革する力があります。\
          \n後から振り返ると、それが取るに足らないことだとわかるでしょう。'
        ],
        //[ "photo/016.JPG" ],
        ['素晴らしい1日になりそう!希望の星があなたにほほ笑んでいます。\
          \n今日のあなたは直感が冴えているので、インスピレーションを大切にして、夢を思い描いてみましょう。\
          \nもし何か新しいことをスタートするのなら、楽しくスムーズに進めることができるはず。\
          \nたとえそれが長い道のりになるとしても、うまくいく明るい兆しがあります。'
        ],
        //[ "photo/017.JPG" ],
        ['もしイヤなことがあっても、イライラしないようにしましょう。\
          \n気持ちに負けないで。できるだけ注意深く、慎重に行動しましょう。\
          \nその先には、うれしい出来事が待っています。\
          \n障害や困難を乗り越えた後で、あなたはたくさんのことを達成した実感を得るでしょう。\
          \nそれは素晴らしい経験になるはずです。'
        ],
        //[ "photo/018.JPG" ],
        ['明るい気分で過ごせる日です。うれしいことや楽しいことがいっぱいで、充実感で満たされるでしょう。\
          \n成功体験を通して自信が付き、新しいことに挑戦する勇気が湧いてきます。\
          \n素晴らしい時間を心ゆくまで楽しみましょう。\
          \nまた、今日のあなたはカリスマ的なオーラに包まれているので、身近な人達を勇気づけることもできるでしょう。'
        ],
        //[ "photo/019.JPG" ],
        ['今日は新しいことに挑戦してみましょう。\
          \nライフスタイル、仕事の環境、ヘアスタイルやファッションから考え方まで、思い切ってガラリと変えてみて。\
          \n時代遅れのアイデア、流行遅れのアイテム、形骸化したルールなど、役に立たないものは無視すること。\
          \nその代わり、未来の成長につながる新鮮な刺激をオープンに受け入れましょう。'
        ],
        //[ "photo/020.JPG" ],
        ['今日は特別な日になりそう!気力も体力も充実して、いきいきと過ごせるでしょう。\
          \n仕事もプライベートも、誰にも邪魔されることなくスムーズに進みます。\
          \n新しいチャンスに恵まれる兆しもあります。\
          \nまるで世界と自分が完全に調和しているかのように、すべてがうまくしょう。\
          \nリラックスして今日という素晴らしい1日を楽しんで!'
        ]
    ]

    // 指定ボタンを押下すると処理を開始する
    $("#btn3").on("click", function () {
        //var num = Math.floor(Math.random() * (22 - 1 + 1)) + 1;
        var index = Math.floor(Math.random() * (images.length))
        var str1 = str[index];

        var num = images[index];

        $(".tarot_photo").attr({ 'src': num }); // div領域を隠す
        $("#tarot_name").text(card[index][0]); // div領域を隠す
        $("#tarot_keyword").text(card[index][1]); // div領域を隠す
        $("#tarot_text").text(str[index]); // div領域を隠す

    });

});

