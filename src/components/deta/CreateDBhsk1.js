import React from 'react';
import { db } from "../../FirebaseConfig";
import { collection, doc, setDoc } from '@firebase/firestore';

// Firestoreにデータを追加する関数
//連番の番号は1~153
export const addHSK1DataToDB = async () => {
  const HSK1 = [
    {
      "hskclass": 1,
      "japanese": "愛する",
      "chinese": "爱",
      "pinyin": "ài"
  },
  {
    "hskclass": 1,
    "japanese": "八",
      "chinese": "八",
      "pinyin": "bā"
  },
  {
    "hskclass": 1,
    "japanese": "お父さん",
      "chinese": "爸爸",
      "pinyin": "bàba"
  },
  {
    "hskclass": 1,
    "japanese": "コップ",
      "chinese": "杯子",
      "pinyin": "bēizi"
  },
  {
    "hskclass": 1,
    "japanese": "北京",
      "chinese": "北京",
      "pinyin": "běijīng"
  },
  {
    "hskclass": 1,
    "japanese": "ノート",
      "chinese": "本",
      "pinyin": "běn"
  },
  {
    "hskclass": 1,
    "japanese": "ではありません（否定）",
      "chinese": "不",
      "pinyin": "bù"
  },
  {
    "hskclass": 1,
    "japanese": "どういたしまして",
      "chinese": "不客气",
      "pinyin": "bù kèqì"
  },
  {
    "hskclass": 1,
    "japanese": "料理",
      "chinese": "菜",
      "pinyin": "cài"
  },
  {
    "hskclass": 1,
    "japanese": "お茶",
      "chinese": "茶",
      "pinyin": "chá"
  },
  {
    "hskclass": 1,
    "japanese": "食べる",
      "chinese": "吃",
      "pinyin": "chī"
  },
  {
    "hskclass": 1,
    "japanese": "タクシー",
      "chinese": "出租车",
      "pinyin": "chūzū chē"
  },
  {
    "hskclass": 1,
    "japanese": "電話をする",
      "chinese": "打电话",
      "pinyin": "dǎ diànhuà"
  },
  {
    "hskclass": 1,
    "japanese": "大きい",
      "chinese": "大",
      "pinyin": "dà"
  },
  {
    "hskclass": 1,
    "japanese": "の",
      "chinese": "的",
      "pinyin": "de"
  },
  {
    "hskclass": 1,
    "japanese": "点、時",
      "chinese": "点",
      "pinyin": "diǎn"
  },
  {
    "hskclass": 1,
    "japanese": "パソコン",
      "chinese": "电脑",
      "pinyin": "diànnǎo"
  },
  {
    "hskclass": 1,
    "japanese": "テレビ",
      "chinese": "电视",
      "pinyin": "diànshì"
  },
  {
    "hskclass": 1,
    "japanese": "映画",
      "chinese": "电影",
      "pinyin": "diànyǐng"
  },
  {
    "hskclass": 1,
      "japanese": "事、物",
      "chinese": "东西",
      "pinyin": "dōngxī"
  },
  {
    "hskclass": 1,
      "japanese": "全て",
      "chinese": "都",
      "pinyin": "dōu"
  },
  {
    "hskclass": 1,
      "japanese": "読む",
      "chinese": "读",
      "pinyin": "dú"
  },
  {
    "hskclass": 1,
      "japanese": "すみません",
      "chinese": "对不起",
      "pinyin": "duìbùqǐ"
  },
  {
    "hskclass": 1,
      "japanese": "もっと",
      "chinese": "多",
      "pinyin": "duō"
  },
  {
    "hskclass": 1,
      "japanese": "どの位",
      "chinese": "多少",
      "pinyin": "duōshǎo"
  },
  {
    "hskclass": 1,
      "japanese": "息子",
      "chinese": "儿子",
      "pinyin": "érzi"
  },
  {
    "hskclass": 1,
      "japanese": "二つ",
      "chinese": "二",
      "pinyin": "èr"
  },
  {
    "hskclass": 1,
      "japanese": "レストラン",
      "chinese": "饭馆",
      "pinyin": "fànguǎn"
  },
  {
    "hskclass": 1,
      "japanese": "航空機",
      "chinese": "飞机",
      "pinyin": "fēijī"
  },
  {
    "hskclass": 1,
      "japanese": "分",
      "chinese": "分钟",
      "pinyin": "fēnzhōng"
  },
  {
    "hskclass": 1,
      "japanese": "幸せ、嬉しい",
      "chinese": "高兴",
      "pinyin": "gāoxìng"
  },
  {
    "hskclass": 1,
      "japanese": "個",
      "chinese": "个",
      "pinyin": "gè"
  },
  {
    "hskclass": 1,
      "japanese": "仕事",
      "chinese": "工作",
      "pinyin": "gōngzuò"
  },
  {
    "hskclass": 1,
      "japanese": "犬",
      "chinese": "狗",
      "pinyin": "gǒu"
  },
  {
    "hskclass": 1,
      "japanese": "中国語",
      "chinese": "汉语",
      "pinyin": "hànyǔ"
  },
  {
    "hskclass": 1,
      "japanese": "良い、とても",
      "chinese": "好",
      "pinyin": "hǎo"
  },
  {
    "hskclass": 1,
      "japanese": "飲む",
      "chinese": "喝",
      "pinyin": "hē"
  },
  {
    "hskclass": 1,
      "japanese": "と",
      "chinese": "和",
      "pinyin": "hé"
  },
  {
    "hskclass": 1,
      "japanese": "非常に",
      "chinese": "很",
      "pinyin": "hěn"
  },
  {
      "hskclass": 1,
      "japanese": "後ろ",
      "chinese": "后面",
      "pinyin": "hòumiàn"
  },
  {
    "hskclass": 1,
    "japanese": "帰る",
      "chinese": "回",
      "pinyin": "huí"
  },
  {
    "hskclass": 1,
    "japanese": "できる",
      "chinese": "会",
      "pinyin": "huì"
  },
  {
    "hskclass": 1,
    "japanese": "鉄道駅",
      "chinese": "火车站",
      "pinyin": "huǒchē zhàn"
  },
  {
    "hskclass": 1,
    "japanese": "どのくらい",
      "chinese": "几",
      "pinyin": "jǐ"
  },
  {
    "hskclass": 1,
    "japanese": "家",
      "chinese": "家",
      "pinyin": "jiā"
  },
  {
    "hskclass": 1,
    "japanese": "呼ぶ",
      "chinese": "叫",
      "pinyin": "jiào"
  },
  {
    "hskclass": 1,
    "japanese": "今日",
      "chinese": "今天",
      "pinyin": "jīntiān"
  },
  {
    "hskclass": 1,
    "japanese": "九つ",
      "chinese": "九",
      "pinyin": "jiǔ"
  },
  {
    "hskclass": 1,
    "japanese": "開ける",
      "chinese": "开",
      "pinyin": "kāi"
  },
  {
    "hskclass": 1,
    "japanese": "見る",
      "chinese": "看",
      "pinyin": "kàn"
  },
  {
    "hskclass": 1,
    "japanese": "見かける",
      "chinese": "看见",
      "pinyin": "kànjiàn"
  },
  {
    "hskclass": 1,
    "japanese": "塊",
      "chinese": "块",
      "pinyin": "kuài"
  },
  {
    "hskclass": 1,
    "japanese": "来る",
      "chinese": "来",
      "pinyin": "lái"
  },
  {
    "hskclass": 1,
    "japanese": "教師",
      "chinese": "老师",
      "pinyin": "lǎo shī"
  },
  {
    "hskclass": 1,
    "japanese": "過去形を表す",
      "chinese": "了",
      "pinyin": "le"
  },
  {
    "hskclass": 1,
    "japanese": "冷たい",
      "chinese": "冷",
      "pinyin": "lěng"
  },
  {
    "hskclass": 1,
    "japanese": "〜の中",
      "chinese": "里",
      "pinyin": "lǐ"
  },
  {
    "hskclass": 1,
    "japanese": "ゼロ",
      "chinese": "零",
      "pinyin": "líng"
  },
  {
    "hskclass": 1,
    "japanese": "六",
      "chinese": "六",
      "pinyin": "liù"
  },
  {
    "hskclass": 1,
    "japanese": "お母さん",
      "chinese": "妈妈",
      "pinyin": "māmā"
  },
  {
    "hskclass": 1,
    "japanese": "疑問を表す",
      "chinese": "吗",
      "pinyin": "ma"
  },
  {
    "hskclass": 1,
    "japanese": "購入する",
      "chinese": "买",
      "pinyin": "mǎi"
  },
  {
    "hskclass": 1,
    "japanese": "猫",
      "chinese": "猫",
      "pinyin": "māo"
  },
  {
    "hskclass": 1,
    "japanese": "ではない（過去形の否定）",
      "chinese": "没",
      "pinyin": "méi"
  },
  {
    "hskclass": 1,
    "japanese": "気にしないで",
      "chinese": "没关系",
      "pinyin": "méiguānxì"
  },
  {
    "hskclass": 1,
    "japanese": "米",
      "chinese": "米饭",
      "pinyin": "mǐfàn"
  },
  {
    "hskclass": 1,
    "japanese": "明日",
      "chinese": "明天",
      "pinyin": "míngtiān"
  },
  {
    "hskclass": 1,
    "japanese": "名前",
      "chinese": "名字",
      "pinyin": "míngzì"
  },
  {
    "hskclass": 1,
    "japanese": "どの、どんな",
      "chinese": "哪",
      "pinyin": "nǎ"
  },
  {
    "hskclass": 1,
    "japanese": "どこ",
      "chinese": "哪儿",
      "pinyin": "nǎ'er"
  },
  {
    "hskclass": 1,
    "japanese": "その",
      "chinese": "那",
      "pinyin": "nà"
  },
  {
    "hskclass": 1,
    "japanese": "そこ",
      "chinese": "那儿",
      "pinyin": "nà'er"
  },
  {
    "hskclass": 1,
    "japanese": "疑問を表す表現",
      "chinese": "呢",
      "pinyin": "ne"
  },
  {
    "hskclass": 1,
    "japanese": "できる",
      "chinese": "能",
      "pinyin": "néng"
  },
  {
    "hskclass": 1,
    "japanese": "あなた",
      "chinese": "你",
      "pinyin": "nǐ"
  },
  {
    "hskclass": 1,
    "japanese": "年",
      "chinese": "年",
      "pinyin": "nián"
  },
  {
    "hskclass": 1,
    "japanese": "娘",
      "chinese": "女儿",
      "pinyin": "nǚ'ér"
  },
  {
    "hskclass": 1,
    "japanese": "友人",
      "chinese": "朋友",
      "pinyin": "péngyǒu"
  },
  {
    "hskclass": 1,
    "japanese": "美しい",
      "chinese": "漂亮",
      "pinyin": "piàoliang"
  },
  {
    "hskclass": 1,
    "japanese": "リンゴ",
      "chinese": "苹果",
      "pinyin": "píngguǒ"
  },
  {
    "hskclass": 1,
    "japanese": "七",
      "chinese": "七",
      "pinyin": "qī"
  },
  {
    "hskclass": 1,
    "japanese": "お金",
      "chinese": "钱",
      "pinyin": "qián"
  },
  {
    "hskclass": 1,
    "japanese": "前",
      "chinese": "前面",
      "pinyin": "qiánmiàn"
  },
  {
    "hskclass": 1,
    "japanese": "してください",
      "chinese": "请",
      "pinyin": "qǐng"
  },
  {
    "hskclass": 1,
    "japanese": "行く",
      "chinese": "去",
      "pinyin": "qù"
  },
  {
    "hskclass": 1,
    "japanese": "熱い",
      "chinese": "热",
      "pinyin": "rè"
  },
  {
    "hskclass": 1,
    "japanese": "人々",
      "chinese": "人",
      "pinyin": "rén"
  },
  {
    "hskclass": 1,
    "japanese": "知っている",
      "chinese": "认识",
      "pinyin": "rènshì"
  },
  {
    "hskclass": 1,
    "japanese": "日",
      "chinese": "日",
      "pinyin": "rì"
  },
  {
    "hskclass": 1,
    "japanese": "三つ",
      "chinese": "三",
      "pinyin": "sān"
  },
  {
    "hskclass": 1,
    "japanese": "お店",
      "chinese": "商店",
      "pinyin": "shāngdiàn"
  },
  {
    "hskclass": 1,
    "japanese": "上の",
      "chinese": "上",
      "pinyin": "shàng"
  },
  {
    "hskclass": 1,
    "japanese": "朝",
      "chinese": "上午",
      "pinyin": "shàngwǔ"
  },
  {
    "hskclass": 1,
    "japanese": "少ない",
      "chinese": "少",
      "pinyin": "shǎo"
  },
  {
    "hskclass": 1,
    "japanese": "誰",
      "chinese": "谁",
      "pinyin": "shéi"
  },
  {
    "hskclass": 1,
    "japanese": "何",
      "chinese": "什么",
      "pinyin": "shénme"
  },
  {
    "hskclass": 1,
    "japanese": "十",
      "chinese": "十",
      "pinyin": "shí"
  },
  {
    "hskclass": 1,
    "japanese": "～の時",
      "chinese": "时候",
      "pinyin": "shíhòu"
  },
  {
    "hskclass": 1,
    "japanese": "～である",
      "chinese": "是",
      "pinyin": "shì"
  },
  {
    "hskclass": 1,
    "japanese": "本",
      "chinese": "书",
      "pinyin": "shū"
  },
  {
    "hskclass": 1,
    "japanese": "水",
      "chinese": "水",
      "pinyin": "shuǐ"
  },
  {
    "hskclass": 1,
    "japanese": "果物",
      "chinese": "水果",
      "pinyin": "shuǐguǒ"
  },
  {
    "hskclass": 1,
    "japanese": "寝る",
      "chinese": "睡觉",
      "pinyin": "shuìjiào"
  },
  {
    "hskclass": 1,
    "japanese": "話す",
      "chinese": "说话",
      "pinyin": "shuōhuà"
  },
  {
    "hskclass": 1,
    "japanese": "四",
      "chinese": "四",
      "pinyin": "sì"
  },
  {
    "hskclass": 1,
    "japanese": "歳",
      "chinese": "岁",
      "pinyin": "suì"
  },
  {
    "hskclass": 1,
    "japanese": "彼",
      "chinese": "他",
      "pinyin": "tā"
  },
  {
    "hskclass": 1,
    "japanese": "彼女",
      "chinese": "她",
      "pinyin": "tā"
  },
  {
    "hskclass": 1,
    "japanese": "かなり",
      "chinese": "太",
      "pinyin": "tài"
  },
  {
    "hskclass": 1,
    "japanese": "天気",
      "chinese": "天气",
      "pinyin": "tiānqì"
  },
  {
    "hskclass": 1,
    "japanese": "聞く",
      "chinese": "听",
      "pinyin": "tīng"
  },
  {
    "hskclass": 1,
    "japanese": "同級生",
      "chinese": "同学",
      "pinyin": "tóngxué"
  },
  {
    "hskclass": 1,
    "japanese": "もしもし",
      "chinese": "喂",
      "pinyin": "wèi"
  },
  {
    "hskclass": 1,
    "japanese": "私",
      "chinese": "我",
      "pinyin": "wǒ"
  },
  {
    "hskclass": 1,
    "japanese": "私たち",
      "chinese": "我们",
      "pinyin": "wǒmen"
  },
  {
    "hskclass": 1,
    "japanese": "五",
      "chinese": "五",
      "pinyin": "wǔ"
  },
  {
    "hskclass": 1,
    "japanese": "好き",
      "chinese": "喜欢",
      "pinyin": "xǐhuān"
  },
  {
    "hskclass": 1,
    "japanese": "下",
      "chinese": "下",
      "pinyin": "xià"
  },
  {
    "hskclass": 1,
    "japanese": "午後",
      "chinese": "下午",
      "pinyin": "xià wǔ"
  },
  {
    "hskclass": 1,
    "japanese": "雨が降る",
      "chinese": "下雨",
      "pinyin": "xià yǔ"
  },
  {
    "hskclass": 1,
    "japanese": "〜さん",
      "chinese": "先生",
      "pinyin": "xiānshēng"
  },
  {
    "hskclass": 1,
    "japanese": "今",
      "chinese": "现在",
      "pinyin": "xiànzài"
  },
  {
      "hskclass": "1",
      "japanese": "したい",
      "chinese": "想",
      "pinyin": "xiǎng"
  },
  {
      "hskclass": "1",
      "japanese": "小さな",
      "chinese": "小",
      "pinyin": "xiǎo"
  },
  {
      "hskclass": "1",
      "japanese": "若い女性",
      "chinese": "小姐",
      "pinyin": "xiǎojiě"
  },
  {
      "hskclass": "1",
      "japanese": "一部",
      "chinese": "些",
      "pinyin": "xiē"
  },
  {
      "hskclass": "1",
      "japanese": "書く",
      "chinese": "写",
      "pinyin": "xiě"
  },
  {
      "hskclass": "1",
      "japanese": "ありがとう",
      "chinese": "谢谢",
      "pinyin": "xièxiè"
  },
  {
      "hskclass": "1",
      "japanese": "週",
      "chinese": "星期",
      "pinyin": "xīngqí"
  },
  {
      "hskclass": "1",
      "japanese": "学生",
      "chinese": "学生",
      "pinyin": "xuéshēng"
  },
  {
      "hskclass": "1",
      "japanese": "勉強する",
      "chinese": "学习",
      "pinyin": "xuéxí"
  },
  {
      "hskclass": "1",
      "japanese": "学校",
      "chinese": "学校",
      "pinyin": "xuéxiào"
  },
  {
      "hskclass": "1",
      "japanese": "1",
      "chinese": "一",
      "pinyin": "yī"
  },
  {
      "hskclass": "1",
      "japanese": "服",
      "chinese": "衣服",
      "pinyin": "yīfú"
  },
  {
      "hskclass": "1",
      "japanese": "医者",
      "chinese": "医生",
      "pinyin": "yīshēng"
  },
  {
      "hskclass": "1",
      "japanese": "病院",
      "chinese": "医院",
      "pinyin": "yīyuàn"
  },
  {
      "hskclass": "1",
      "japanese": "椅子",
      "chinese": "椅子",
      "pinyin": "yǐzi"
  },
  {
      "hskclass": "1",
      "japanese": "持っている",
      "chinese": "有",
      "pinyin": "yǒu"
  },
  {
      "hskclass": "1",
      "japanese": "月",
      "chinese": "月",
      "pinyin": "yuè"
  },
  {
      "hskclass": "1",
      "japanese": "どこどこで",
      "chinese": "在",
      "pinyin": "zài"
  },
  {
      "hskclass": "1",
      "japanese": "さようなら",
      "chinese": "再见",
      "pinyin": "zàijiàn"
  },
  {
      "hskclass": "1",
      "japanese": "どのように",
      "chinese": "怎么",
      "pinyin": "zěnme"
  },
  {
      "hskclass": "1",
      "japanese": "どうですか？",
      "chinese": "怎么样",
      "pinyin": "zěnme yàng"
  },
  {
      "hskclass": "1",
      "japanese": "これ",
      "chinese": "这",
      "pinyin": "zhè"
  },
  {
      "hskclass": "1",
      "japanese": "ここに",
      "chinese": "这儿",
      "pinyin": "zhè'er"
  },
  {
      "hskclass": "1",
      "japanese": "中国",
      "chinese": "中国",
      "pinyin": "zhōngguó"
  },
  {
      "hskclass": "1",
      "japanese": "正午",
      "chinese": "中午",
      "pinyin": "zhōngwǔ"
  },
  {
      "hskclass": "1",
      "japanese": "住んでいる",
      "chinese": "住",
      "pinyin": "zhù"
  },
  {
      "hskclass": "1",
      "japanese": "机",
      "chinese": "桌子",
      "pinyin": "zhuōzi"
  },
  {
      "hskclass": "1",
      "japanese": "字",
      "chinese": "字",
      "pinyin": "zì"
  },
  {
      "hskclass": "1",
      "japanese": "昨日",
      "chinese": "昨天",
      "pinyin": "zuótiān"
  },
  {
      "hskclass": "1",
      "japanese": "する",
      "chinese": "做",
      "pinyin": "zuò"
  },
  {
      "hskclass": "1",
      "japanese": "座る",
      "chinese": "坐",
      "pinyin": "zuò"
  }
  ];

  const promises = HSK1.map((item, index) => {
    const newItem = {
      ...item,
      id: index + 1, // 連番を追加
      hskclass: Number(item.hskclass), // 明示的にnumber型に変換
    };
    // コレクションのリファレンスを取得
    const collectionRef = collection(db, "HSK1");
    // 自動IDを使用して新しいドキュメントリファレンスを生成
    const docRef = doc(collectionRef);    
    // ドキュメントリファレンスを使用して、データをFirestoreに追加
    return setDoc(docRef, newItem);
  });

  try {
    await Promise.all(promises);
    console.log("All documents were successfully written.");
  } catch (error) {
    console.error("Error adding documents: ", error);
    throw error; // エラーを外部に伝える
  }
};

// コンポーネント
const Createhsk1DB = () => {
  return (
    <div>
      <h1>Firestoreにデータを追加</h1>
      <button onClick={() => addHSK1DataToDB().catch(console.error)}>データを追加する</button>
    </div>
  );
};

export default Createhsk1DB;
