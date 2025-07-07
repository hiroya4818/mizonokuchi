export const QUESTION_INFO = [
  {
    id: 1,
    imageSrc: "/Quiz/Quiz1.png",
    questionNumber: 1,
    question: "画像から導き出される言葉は何だろうか？",
    answer: "えんとう",
    answerDetail: "問題は時計をイメージしています。数字は時計の文字をイメージしており、順番に読むとえ→ん→と→うとなります。",
    title: "きらりデッキの広場の謎を解こう！",
    conversation: [
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "えっ、ここは昔の溝の口駅前！？タイムスリップしちゃったみたい！",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: [
          "そうニャ、ここは昔の駅前だよ。",
          "2009年にキラリデッキや、あるものをモチーフにした広場ができて、今のにぎやかな駅前になったんだ。"
        ].join('\n'),
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "どんなものをモチーフにした広場なの？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "それじゃあ、謎を解いて、その広場の名前を当ててみてニャ！",
      }
    ],
  },
  {
    id: 2,
    imageSrc: "/Quiz/Quiz2.png",
    questionNumber: 1,
    question: "画像から導き出される言葉は何だろうか？",
    answer: "フリーマーケット",
    answerDetail: [
      "2つのイラストは、それぞれ色を付けることで何を表しているかが分かります。",
      "上のアイテムは緑に塗ると『ピーマン』、オレンジに塗ると『パプリカ』になります。カラーボックスの位置は、例えばオレンジなら『パプリカ』の3文字目『リ』を示しています。",
      "下のアイテムは赤で塗ると『ケチャップ』、黄色で塗ると『マヨネーズ』になります。同じようにカラーボックスの位置の文字を拾います。",
      "それぞれのカラーボックスの文字を順に集めて読むと『フリーマーケット』となります。"
    ].join('\n'),
    title: "商店街の名前とイベントのヒミツ",
    conversation: [
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "昔の商店街にタイムスリップしちゃった？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: [
          "そうニャ、ここは昔の商店街だよ。",
        ].join('\n'),
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "なんだか商店街がすごくにぎやかで楽しそうだね！",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "実はこの商店街の名前、みんなで決めている所なんだニャ。",
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "どんな名前に決まっるのかな？それに、これから商店街ではイベントがあるのかな？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "それを知りたければ、謎を解いてみてニャ！",
      }
    ],
  },
  {
    id: 3,
    imageSrc: "/Quiz/Quiz3.png",
    questionNumber: 1,
    question: "画像から導き出される言葉は何だろうか？",
    answer: "けやき",
    answerDetail: [
      "イラストには『たぬき』『ことり』『はがき』が描かれています。",
      "文章から『た』『こ』を消し、『は』を『が』に変えて読むと、残る文字が『けやき』となります。",
      "このようにして答えは『けやき』と導き出せます。"
    ].join('\n'),
    title: "神社の大樹のヒミツを探ろう！",
    conversation: [
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "あれ？ここは…昔の神社の場所であってるのかな？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "500年前の溝の口神社にタイムスリップしたニャ！この場所で何かを植えているみたいだよ。",
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "何を植えているんだろう？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: [
          "それは今も神社を見守る、樹齢500年の大樹なんだニャ。",
          "なんの種類の木かは、謎に挑戦して解き明かしてほしいニャ！"
        ].join('\n'),
      }
    ],
  },
  {
    id: 4,
    imageSrc: "/Quiz/Quiz4.png",
    questionNumber: 1,
    question: "画像から導き出される言葉は何だろうか？",
    answer: "くすり",
    answerDetail: [
      "まず、数字の小さい順に迷路を進むと『きすうだけとおれ』という指示が現れます。",
      "この指示通り、1→3→5と奇数の順に通ると、通ったマスの文字を拾っていくことで『くすり』という答えが導き出せます。"
    ].join('\n'),
    title: "灰吹屋のはじまりを探ろう！",
    conversation: [
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "ここは…300年前の溝の口？灰吹屋ってこんな昔からあったんだ！",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "そうニャ。この時代の灰吹屋は“萬屋（よろずや）”として、いろんな商品を扱っていたんだよ。",
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "今はどんなお店になっているんだろう？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "それは謎を解いて確かめてみてニャ！",
      }
    ],
  },
  {
    id: 5,
    imageSrc: "/Quiz/Quiz5.png",
    questionNumber: 1,
    question: "画像から導き出される言葉は何だろうか？",
    answer: "のうぎょう",
    answerDetail: [
      "問題にはひらがなが7文字並んでいますが、これは実は曜日を表しています。",
      "6文字目が青色で土曜日、7文字目が赤色で日曜日を示しているのがヒントです。",
      "下に並んだイラストは曜日に関係したアイテムになっています。",
      "例えば「きんぴらごぼう」は金曜日、「木魚」は木曜日、「どらやき」は土曜日、「満月」は月曜日を表しています。",
      "それぞれの曜日に対応する文字を拾って順に読むと『のうぎょう』という答えが導き出せます。"
    ].join('\n'),
    title: "二ヶ領用水のはじまりを探ろう！",
    conversation: [
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "ここは…昔の時代？大きな川のそばに来たみたいだね。",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "二ヶ領用水ができた時代にタイムスリップしたニャ！当時は多摩川の水を堰き止めて、二ヶ領用水に導いたんだよ。",
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "どうして二ヶ領用水を作る必要があったの？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "それは謎を解いて確かめてみてニャ！",
      }
    ],
  },
  {
    id: 6,
    imageSrc: "/Quiz/Quiz6.png",
    questionNumber: 1,
    question: "画像から導き出される言葉は何だろうか？",
    answer: "ぶんすい",
    answerDetail: [
      "イラストを漢字に直して組み合わせると、それぞれ1つの漢字になります。",
      "1つ目は「八」と「刀」を合わせて『分』、2つ目は「竹」「力」「月」を合わせて『筋』、3つ目は「口」と「貝」を合わせて『員』を表しています。",
      "それぞれの漢字の読み（ぶん・すじ・いん）からキーワードを考え、つなげて読むと『ぶんすい』という答えが導き出せます。"
    ].join('\n'),
    title: "久地円筒分水のナゾを解こう！",
    conversation: [
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "ここは…久地円筒分水ができたばかりの時代かな？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "そうニャ、それまでは水門で水を分けていたけど、今は円筒分水になっているんだよ。",
      },
      {
        name: "あなた",
        imageSrc: "/icon/man.png",
        message: "どうして水門から円筒分水に変わったんだろう？",
      },
      {
        name: "のくち",
        imageSrc: "/icon/cat.png",
        message: "その理由は謎を解いて確かめてみてニャ！",
      }
    ],
  },
  // 他の目印データ...
];