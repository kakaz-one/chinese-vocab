import React from 'react';
import { db } from "../../FirebaseConfig";
import { collection, doc, setDoc, getDocs, query, where } from '@firebase/firestore';

// Firestoreにデータを追加する関数
//連番の番号
export const addHSKDataToDB = async () => {
  const HSK = [
    
      {
          "hskclass": "1",
          "japanese": "愛する",
          "chinese": "爱",
          "pinyin": "ài"
      },
      {
          "hskclass": "1",
          "japanese": "八",
          "chinese": "八",
          "pinyin": "bā"
      },
      {
          "hskclass": "1",
          "japanese": "お父さん",
          "chinese": "爸爸",
          "pinyin": "bàba"
      },
      {
          "hskclass": "1",
          "japanese": "コップ",
          "chinese": "杯子",
          "pinyin": "bēizi"
      },
      {
          "hskclass": "1",
          "japanese": "北京",
          "chinese": "北京",
          "pinyin": "běijīng"
      },
      {
          "hskclass": "1",
          "japanese": "ノート",
          "chinese": "本",
          "pinyin": "běn"
      },
      {
          "hskclass": "1",
          "japanese": "ではありません（否定）",
          "chinese": "不",
          "pinyin": "bù"
      },
      {
          "hskclass": "1",
          "japanese": "どういたしまして",
          "chinese": "不客气",
          "pinyin": "bù kèqì"
      },
      {
          "hskclass": "1",
          "japanese": "料理",
          "chinese": "菜",
          "pinyin": "cài"
      },
      {
          "hskclass": "1",
          "japanese": "お茶",
          "chinese": "茶",
          "pinyin": "chá"
      },
      {
          "hskclass": "1",
          "japanese": "食べる",
          "chinese": "吃",
          "pinyin": "chī"
      },
      {
          "hskclass": "1",
          "japanese": "タクシー",
          "chinese": "出租车",
          "pinyin": "chūzū chē"
      },
      {
          "hskclass": "1",
          "japanese": "電話をする",
          "chinese": "打电话",
          "pinyin": "dǎ diànhuà"
      },
      {
          "hskclass": "1",
          "japanese": "大きい",
          "chinese": "大",
          "pinyin": "dà"
      },
      {
          "hskclass": "1",
          "japanese": "の",
          "chinese": "的",
          "pinyin": "de"
      },
      {
          "hskclass": "1",
          "japanese": "点、時",
          "chinese": "点",
          "pinyin": "diǎn"
      },
      {
          "hskclass": "1",
          "japanese": "パソコン",
          "chinese": "电脑",
          "pinyin": "diànnǎo"
      },
      {
          "hskclass": "1",
          "japanese": "テレビ",
          "chinese": "电视",
          "pinyin": "diànshì"
      },
      {
          "hskclass": "1",
          "japanese": "映画",
          "chinese": "电影",
          "pinyin": "diànyǐng"
      },
      {
          "hskclass": "1",
          "japanese": "事、物",
          "chinese": "东西",
          "pinyin": "dōngxī"
      },
      {
          "hskclass": "1",
          "japanese": "全て",
          "chinese": "都",
          "pinyin": "dōu"
      },
      {
          "hskclass": "1",
          "japanese": "読む",
          "chinese": "读",
          "pinyin": "dú"
      },
      {
          "hskclass": "1",
          "japanese": "すみません",
          "chinese": "对不起",
          "pinyin": "duìbùqǐ"
      },
      {
          "hskclass": "1",
          "japanese": "もっと",
          "chinese": "多",
          "pinyin": "duō"
      },
      {
          "hskclass": "1",
          "japanese": "どの位",
          "chinese": "多少",
          "pinyin": "duōshǎo"
      },
      {
          "hskclass": "1",
          "japanese": "息子",
          "chinese": "儿子",
          "pinyin": "érzi"
      },
      {
          "hskclass": "1",
          "japanese": "二つ",
          "chinese": "二",
          "pinyin": "èr"
      },
      {
          "hskclass": "1",
          "japanese": "レストラン",
          "chinese": "饭馆",
          "pinyin": "fànguǎn"
      },
      {
          "hskclass": "1",
          "japanese": "航空機",
          "chinese": "飞机",
          "pinyin": "fēijī"
      },
      {
          "hskclass": "1",
          "japanese": "分",
          "chinese": "分钟",
          "pinyin": "fēnzhōng"
      },
      {
          "hskclass": "1",
          "japanese": "幸せ、嬉しい",
          "chinese": "高兴",
          "pinyin": "gāoxìng"
      },
      {
          "hskclass": "1",
          "japanese": "個",
          "chinese": "个",
          "pinyin": "gè"
      },
      {
          "hskclass": "1",
          "japanese": "仕事",
          "chinese": "工作",
          "pinyin": "gōngzuò"
      },
      {
          "hskclass": "1",
          "japanese": "犬",
          "chinese": "狗",
          "pinyin": "gǒu"
      },
      {
          "hskclass": "1",
          "japanese": "中国語",
          "chinese": "汉语",
          "pinyin": "hànyǔ"
      },
      {
          "hskclass": "1",
          "japanese": "良い、とても",
          "chinese": "好",
          "pinyin": "hǎo"
      },
      {
          "hskclass": "1",
          "japanese": "飲む",
          "chinese": "喝",
          "pinyin": "hē"
      },
      {
          "hskclass": "1",
          "japanese": "と",
          "chinese": "和",
          "pinyin": "hé"
      },
      {
          "hskclass": "1",
          "japanese": "非常に",
          "chinese": "很",
          "pinyin": "hěn"
      },
      {
          "hskclass": "1",
          "japanese": "後ろ",
          "chinese": "后面",
          "pinyin": "hòumiàn"
      },
      {
          "hskclass": "1",
          "japanese": "帰る",
          "chinese": "回",
          "pinyin": "huí"
      },
      {
          "hskclass": "1",
          "japanese": "できる",
          "chinese": "会",
          "pinyin": "huì"
      },
      {
          "hskclass": "1",
          "japanese": "鉄道駅",
          "chinese": "火车站",
          "pinyin": "huǒchē zhàn"
      },
      {
          "hskclass": "1",
          "japanese": "どのくらい",
          "chinese": "几",
          "pinyin": "jǐ"
      },
      {
          "hskclass": "1",
          "japanese": "家",
          "chinese": "家",
          "pinyin": "jiā"
      },
      {
          "hskclass": "1",
          "japanese": "呼ぶ",
          "chinese": "叫",
          "pinyin": "jiào"
      },
      {
          "hskclass": "1",
          "japanese": "今日",
          "chinese": "今天",
          "pinyin": "jīntiān"
      },
      {
          "hskclass": "1",
          "japanese": "九つ",
          "chinese": "九",
          "pinyin": "jiǔ"
      },
      {
          "hskclass": "1",
          "japanese": "開ける",
          "chinese": "开",
          "pinyin": "kāi"
      },
      {
          "hskclass": "1",
          "japanese": "見る",
          "chinese": "看",
          "pinyin": "kàn"
      },
      {
          "hskclass": "1",
          "japanese": "見かける",
          "chinese": "看见",
          "pinyin": "kànjiàn"
      },
      {
          "hskclass": "1",
          "japanese": "塊",
          "chinese": "块",
          "pinyin": "kuài"
      },
      {
          "hskclass": "1",
          "japanese": "来る",
          "chinese": "来",
          "pinyin": "lái"
      },
      {
          "hskclass": "1",
          "japanese": "教師",
          "chinese": "老师",
          "pinyin": "lǎo shī"
      },
      {
          "hskclass": "1",
          "japanese": "過去形を表す",
          "chinese": "了",
          "pinyin": "le"
      },
      {
          "hskclass": "1",
          "japanese": "冷たい",
          "chinese": "冷",
          "pinyin": "lěng"
      },
      {
          "hskclass": "1",
          "japanese": "〜の中",
          "chinese": "里",
          "pinyin": "lǐ"
      },
      {
          "hskclass": "1",
          "japanese": "ゼロ",
          "chinese": "零",
          "pinyin": "líng"
      },
      {
          "hskclass": "1",
          "japanese": "六",
          "chinese": "六",
          "pinyin": "liù"
      },
      {
          "hskclass": "1",
          "japanese": "お母さん",
          "chinese": "妈妈",
          "pinyin": "māmā"
      },
      {
          "hskclass": "1",
          "japanese": "疑問を表す",
          "chinese": "吗",
          "pinyin": "ma"
      },
      {
          "hskclass": "1",
          "japanese": "購入する",
          "chinese": "买",
          "pinyin": "mǎi"
      },
      {
          "hskclass": "1",
          "japanese": "猫",
          "chinese": "猫",
          "pinyin": "māo"
      },
      {
          "hskclass": "1",
          "japanese": "ではない（過去形の否定）",
          "chinese": "没",
          "pinyin": "méi"
      },
      {
          "hskclass": "1",
          "japanese": "気にしないで",
          "chinese": "没关系",
          "pinyin": "méiguānxì"
      },
      {
          "hskclass": "1",
          "japanese": "米",
          "chinese": "米饭",
          "pinyin": "mǐfàn"
      },
      {
          "hskclass": "1",
          "japanese": "明日",
          "chinese": "明天",
          "pinyin": "míngtiān"
      },
      {
          "hskclass": "1",
          "japanese": "名前",
          "chinese": "名字",
          "pinyin": "míngzì"
      },
      {
          "hskclass": "1",
          "japanese": "どの、どんな",
          "chinese": "哪",
          "pinyin": "nǎ"
      },
      {
          "hskclass": "1",
          "japanese": "どこ",
          "chinese": "哪儿",
          "pinyin": "nǎ'er"
      },
      {
          "hskclass": "1",
          "japanese": "その",
          "chinese": "那",
          "pinyin": "nà"
      },
      {
          "hskclass": "1",
          "japanese": "そこ",
          "chinese": "那儿",
          "pinyin": "nà'er"
      },
      {
          "hskclass": "1",
          "japanese": "疑問を表す表現",
          "chinese": "呢",
          "pinyin": "ne"
      },
      {
          "hskclass": "1",
          "japanese": "できる",
          "chinese": "能",
          "pinyin": "néng"
      },
      {
          "hskclass": "1",
          "japanese": "あなた",
          "chinese": "你",
          "pinyin": "nǐ"
      },
      {
          "hskclass": "1",
          "japanese": "年",
          "chinese": "年",
          "pinyin": "nián"
      },
      {
          "hskclass": "1",
          "japanese": "娘",
          "chinese": "女儿",
          "pinyin": "nǚ'ér"
      },
      {
          "hskclass": "1",
          "japanese": "友人",
          "chinese": "朋友",
          "pinyin": "péngyǒu"
      },
      {
          "hskclass": "1",
          "japanese": "美しい",
          "chinese": "漂亮",
          "pinyin": "piàoliang"
      },
      {
          "hskclass": "1",
          "japanese": "リンゴ",
          "chinese": "苹果",
          "pinyin": "píngguǒ"
      },
      {
          "hskclass": "1",
          "japanese": "七",
          "chinese": "七",
          "pinyin": "qī"
      },
      {
          "hskclass": "1",
          "japanese": "お金",
          "chinese": "钱",
          "pinyin": "qián"
      },
      {
          "hskclass": "1",
          "japanese": "前",
          "chinese": "前面",
          "pinyin": "qiánmiàn"
      },
      {
          "hskclass": "1",
          "japanese": "してください",
          "chinese": "请",
          "pinyin": "qǐng"
      },
      {
          "hskclass": "1",
          "japanese": "行く",
          "chinese": "去",
          "pinyin": "qù"
      },
      {
          "hskclass": "1",
          "japanese": "熱い",
          "chinese": "热",
          "pinyin": "rè"
      },
      {
          "hskclass": "1",
          "japanese": "人々",
          "chinese": "人",
          "pinyin": "rén"
      },
      {
          "hskclass": "1",
          "japanese": "知っている",
          "chinese": "认识",
          "pinyin": "rènshì"
      },
      {
          "hskclass": "1",
          "japanese": "日",
          "chinese": "日",
          "pinyin": "rì"
      },
      {
          "hskclass": "1",
          "japanese": "三つ",
          "chinese": "三",
          "pinyin": "sān"
      },
      {
          "hskclass": "1",
          "japanese": "お店",
          "chinese": "商店",
          "pinyin": "shāngdiàn"
      },
      {
          "hskclass": "1",
          "japanese": "上の",
          "chinese": "上",
          "pinyin": "shàng"
      },
      {
          "hskclass": "1",
          "japanese": "朝",
          "chinese": "上午",
          "pinyin": "shàngwǔ"
      },
      {
          "hskclass": "1",
          "japanese": "少ない",
          "chinese": "少",
          "pinyin": "shǎo"
      },
      {
          "hskclass": "1",
          "japanese": "誰",
          "chinese": "谁",
          "pinyin": "shéi"
      },
      {
          "hskclass": "1",
          "japanese": "何",
          "chinese": "什么",
          "pinyin": "shénme"
      },
      {
          "hskclass": "1",
          "japanese": "十",
          "chinese": "十",
          "pinyin": "shí"
      },
      {
          "hskclass": "1",
          "japanese": "～の時",
          "chinese": "时候",
          "pinyin": "shíhòu"
      },
      {
          "hskclass": "1",
          "japanese": "～である",
          "chinese": "是",
          "pinyin": "shì"
      },
      {
          "hskclass": "1",
          "japanese": "本",
          "chinese": "书",
          "pinyin": "shū"
      },
      {
          "hskclass": "1",
          "japanese": "水",
          "chinese": "水",
          "pinyin": "shuǐ"
      },
      {
          "hskclass": "1",
          "japanese": "果物",
          "chinese": "水果",
          "pinyin": "shuǐguǒ"
      },
      {
          "hskclass": "1",
          "japanese": "寝る",
          "chinese": "睡觉",
          "pinyin": "shuìjiào"
      },
      {
          "hskclass": "1",
          "japanese": "話す",
          "chinese": "说话",
          "pinyin": "shuōhuà"
      },
      {
          "hskclass": "1",
          "japanese": "四",
          "chinese": "四",
          "pinyin": "sì"
      },
      {
          "hskclass": "1",
          "japanese": "歳",
          "chinese": "岁",
          "pinyin": "suì"
      },
      {
          "hskclass": "1",
          "japanese": "彼",
          "chinese": "他",
          "pinyin": "tā"
      },
      {
          "hskclass": "1",
          "japanese": "彼女",
          "chinese": "她",
          "pinyin": "tā"
      },
      {
          "hskclass": "1",
          "japanese": "かなり",
          "chinese": "太",
          "pinyin": "tài"
      },
      {
          "hskclass": "1",
          "japanese": "天気",
          "chinese": "天气",
          "pinyin": "tiānqì"
      },
      {
          "hskclass": "1",
          "japanese": "聞く",
          "chinese": "听",
          "pinyin": "tīng"
      },
      {
          "hskclass": "1",
          "japanese": "同級生",
          "chinese": "同学",
          "pinyin": "tóngxué"
      },
      {
          "hskclass": "1",
          "japanese": "もしもし",
          "chinese": "喂",
          "pinyin": "wèi"
      },
      {
          "hskclass": "1",
          "japanese": "私",
          "chinese": "我",
          "pinyin": "wǒ"
      },
      {
          "hskclass": "1",
          "japanese": "私たち",
          "chinese": "我们",
          "pinyin": "wǒmen"
      },
      {
          "hskclass": "1",
          "japanese": "五",
          "chinese": "五",
          "pinyin": "wǔ"
      },
      {
          "hskclass": "1",
          "japanese": "好き",
          "chinese": "喜欢",
          "pinyin": "xǐhuān"
      },
      {
          "hskclass": "1",
          "japanese": "下",
          "chinese": "下",
          "pinyin": "xià"
      },
      {
          "hskclass": "1",
          "japanese": "午後",
          "chinese": "下午",
          "pinyin": "xià wǔ"
      },
      {
          "hskclass": "1",
          "japanese": "雨が降る",
          "chinese": "下雨",
          "pinyin": "xià yǔ"
      },
      {
          "hskclass": "1",
          "japanese": "〜さん",
          "chinese": "先生",
          "pinyin": "xiānshēng"
      },
      {
          "hskclass": "1",
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
      },
      {
          "hskclass": "2",
          "japanese": "でしょ？",
          "chinese": "吧",
          "pinyin": "ba"
      },
      {
          "hskclass": "2",
          "japanese": "白",
          "chinese": "白",
          "pinyin": "bái"
      },
      {
          "hskclass": "2",
          "japanese": "百",
          "chinese": "百",
          "pinyin": "bǎi"
      },
      {
          "hskclass": "2",
          "japanese": "助ける",
          "chinese": "帮助",
          "pinyin": "bāngzhù"
      },
      {
          "hskclass": "2",
          "japanese": "新聞",
          "chinese": "报纸",
          "pinyin": "bàozhǐ"
      },
      {
          "hskclass": "2",
          "japanese": "比較して",
          "chinese": "比",
          "pinyin": "bǐ"
      },
      {
          "hskclass": "2",
          "japanese": "しないでください",
          "chinese": "别",
          "pinyin": "bié"
      },
      {
          "hskclass": "2",
          "japanese": "長い",
          "chinese": "长",
          "pinyin": "zhǎng"
      },
      {
          "hskclass": "2",
          "japanese": "歌を歌う",
          "chinese": "唱歌",
          "pinyin": "chànggē"
      },
      {
          "hskclass": "2",
          "japanese": "出る",
          "chinese": "出",
          "pinyin": "chū"
      },
      {
          "hskclass": "2",
          "japanese": "着る",
          "chinese": "穿",
          "pinyin": "chuān"
      },
      {
          "hskclass": "2",
          "japanese": "船",
          "chinese": "船",
          "pinyin": "chuán"
      },
      {
          "hskclass": "2",
          "japanese": "次",
          "chinese": "次",
          "pinyin": "cì"
      },
      {
          "hskclass": "2",
          "japanese": "〜から",
          "chinese": "从",
          "pinyin": "cóng"
      },
      {
          "hskclass": "2",
          "japanese": "間違う",
          "chinese": "错",
          "pinyin": "cuò"
      },
      {
          "hskclass": "2",
          "japanese": "バスケットボールをする",
          "chinese": "打篮球",
          "pinyin": "dǎ lánqiú"
      },
      {
          "hskclass": "2",
          "japanese": "みんな",
          "chinese": "大家",
          "pinyin": "dàjiā"
      },
      {
          "hskclass": "2",
          "japanese": "しかし",
          "chinese": "但是",
          "pinyin": "dànshì"
      },
      {
          "hskclass": "2",
          "japanese": "〜へ",
          "chinese": "到",
          "pinyin": "dào"
      },
      {
          "hskclass": "2",
          "japanese": "得る",
          "chinese": "得",
          "pinyin": "dé"
      },
      {
          "hskclass": "2",
          "japanese": "待つ",
          "chinese": "等",
          "pinyin": "děng"
      },
      {
          "hskclass": "2",
          "japanese": "弟",
          "chinese": "弟弟",
          "pinyin": "dìdì"
      },
      {
          "hskclass": "2",
          "japanese": "最初の",
          "chinese": "第一",
          "pinyin": "dì yī"
      },
      {
          "hskclass": "2",
          "japanese": "分かった",
          "chinese": "懂",
          "pinyin": "dǒng"
      },
      {
          "hskclass": "2",
          "japanese": "正しい",
          "chinese": "对",
          "pinyin": "duì"
      },
      {
          "hskclass": "2",
          "japanese": "部屋",
          "chinese": "房间",
          "pinyin": "fángjiān"
      },
      {
          "hskclass": "2",
          "japanese": "非常に",
          "chinese": "非常",
          "pinyin": "fēicháng"
      },
      {
          "hskclass": "2",
          "japanese": "店員",
          "chinese": "服务员",
          "pinyin": "fúwùyuán"
      },
      {
          "hskclass": "2",
          "japanese": "高い",
          "chinese": "高",
          "pinyin": "gāo"
      },
      {
          "hskclass": "2",
          "japanese": "伝える",
          "chinese": "告诉",
          "pinyin": "gàosù"
      },
      {
          "hskclass": "2",
          "japanese": "兄",
          "chinese": "哥哥",
          "pinyin": "gēgē"
      },
      {
          "hskclass": "2",
          "japanese": "与える",
          "chinese": "给",
          "pinyin": "gěi"
      },
      {
          "hskclass": "2",
          "japanese": "バス",
          "chinese": "公共汽车",
          "pinyin": "gōnggòng qìchē"
      },
      {
          "hskclass": "2",
          "japanese": "kg キログラム",
          "chinese": "公斤",
          "pinyin": "gōngjīn"
      },
      {
          "hskclass": "2",
          "japanese": "会社",
          "chinese": "公司",
          "pinyin": "gōngsī"
      },
      {
          "hskclass": "2",
          "japanese": "値段が高い",
          "chinese": "贵",
          "pinyin": "guì"
      },
      {
          "hskclass": "2",
          "japanese": "過ぎる",
          "chinese": "过",
          "pinyin": "guò"
      },
      {
          "hskclass": "2",
          "japanese": "さらに",
          "chinese": "还",
          "pinyin": "hái"
      },
      {
          "hskclass": "2",
          "japanese": "子供",
          "chinese": "孩子",
          "pinyin": "háizi"
      },
      {
          "hskclass": "2",
          "japanese": "美味しい",
          "chinese": "好吃",
          "pinyin": "hào chī"
      },
      {
          "hskclass": "2",
          "japanese": "番号",
          "chinese": "号",
          "pinyin": "hào"
      },
      {
          "hskclass": "2",
          "japanese": "黒",
          "chinese": "黑",
          "pinyin": "hēi"
      },
      {
          "hskclass": "2",
          "japanese": "赤",
          "chinese": "红",
          "pinyin": "hóng"
      },
      {
          "hskclass": "2",
          "japanese": "歓迎する",
          "chinese": "欢迎",
          "pinyin": "huānyíng"
      },
      {
          "hskclass": "2",
          "japanese": "答える",
          "chinese": "回答",
          "pinyin": "huídá"
      },
      {
          "hskclass": "2",
          "japanese": "空港",
          "chinese": "机场",
          "pinyin": "jīchǎng"
      },
      {
          "hskclass": "2",
          "japanese": "卵",
          "chinese": "鸡蛋",
          "pinyin": "jīdàn"
      },
      {
          "hskclass": "2",
          "japanese": "着（上着類の数を数える）",
          "chinese": "件",
          "pinyin": "jiàn"
      },
      {
          "hskclass": "2",
          "japanese": "教室",
          "chinese": "教室",
          "pinyin": "jiàoshì"
      },
      {
          "hskclass": "2",
          "japanese": "お姉ちゃん",
          "chinese": "姐姐",
          "pinyin": "jiějiě"
      },
      {
          "hskclass": "2",
          "japanese": "紹介する",
          "chinese": "介绍",
          "pinyin": "jièshào"
      },
      {
          "hskclass": "2",
          "japanese": "入る",
          "chinese": "进",
          "pinyin": "jìn"
      },
      {
          "hskclass": "2",
          "japanese": "近い",
          "chinese": "近",
          "pinyin": "jìn"
      },
      {
          "hskclass": "2",
          "japanese": "すぐに",
          "chinese": "就",
          "pinyin": "jiù"
      },
      {
          "hskclass": "2",
          "japanese": "思う、感じる",
          "chinese": "觉得",
          "pinyin": "juédé"
      },
      {
          "hskclass": "2",
          "japanese": "コーヒー",
          "chinese": "咖啡",
          "pinyin": "kāfēi"
      },
      {
          "hskclass": "2",
          "japanese": "始める",
          "chinese": "开始",
          "pinyin": "kāishǐ"
      },
      {
          "hskclass": "2",
          "japanese": "試験",
          "chinese": "考试",
          "pinyin": "kǎoshì"
      },
      {
          "hskclass": "2",
          "japanese": "かもしれない",
          "chinese": "可能",
          "pinyin": "kěnéng"
      },
      {
          "hskclass": "2",
          "japanese": "できる",
          "chinese": "可以",
          "pinyin": "kěyǐ"
      },
      {
          "hskclass": "2",
          "japanese": "授業",
          "chinese": "课",
          "pinyin": "kè"
      },
      {
          "hskclass": "2",
          "japanese": "速い",
          "chinese": "快",
          "pinyin": "kuài"
      },
      {
          "hskclass": "2",
          "japanese": "幸せ",
          "chinese": "快乐",
          "pinyin": "kuàilè"
      },
      {
          "hskclass": "2",
          "japanese": "疲れる",
          "chinese": "累",
          "pinyin": "lèi"
      },
      {
          "hskclass": "2",
          "japanese": "〜から",
          "chinese": "离",
          "pinyin": "lí"
      },
      {
          "hskclass": "2",
          "japanese": "二つ",
          "chinese": "两",
          "pinyin": "liǎng"
      },
      {
          "hskclass": "2",
          "japanese": "道路",
          "chinese": "路",
          "pinyin": "lù"
      },
      {
          "hskclass": "2",
          "japanese": "旅行",
          "chinese": "旅游",
          "pinyin": "lǚyóu"
      },
      {
          "hskclass": "2",
          "japanese": "売る",
          "chinese": "卖",
          "pinyin": "mài"
      },
      {
          "hskclass": "2",
          "japanese": "遅い",
          "chinese": "慢",
          "pinyin": "màn"
      },
      {
          "hskclass": "2",
          "japanese": "忙しい",
          "chinese": "忙",
          "pinyin": "máng"
      },
      {
          "hskclass": "2",
          "japanese": "それぞれ、各々",
          "chinese": "每",
          "pinyin": "měi"
      },
      {
          "hskclass": "2",
          "japanese": "妹",
          "chinese": "妹妹",
          "pinyin": "mèimei"
      },
      {
          "hskclass": "2",
          "japanese": "扉",
          "chinese": "门",
          "pinyin": "mén"
      },
      {
          "hskclass": "2",
          "japanese": "男",
          "chinese": "男人",
          "pinyin": "nánrén"
      },
      {
          "hskclass": "2",
          "japanese": "あなた（敬語）",
          "chinese": "您",
          "pinyin": "nín"
      },
      {
          "hskclass": "2",
          "japanese": "牛乳",
          "chinese": "牛奶",
          "pinyin": "niúnǎi"
      },
      {
          "hskclass": "2",
          "japanese": "女",
          "chinese": "女人",
          "pinyin": "nǚrén"
      },
      {
          "hskclass": "2",
          "japanese": "隣",
          "chinese": "旁边",
          "pinyin": "pángbiān"
      },
      {
          "hskclass": "2",
          "japanese": "走る",
          "chinese": "跑步",
          "pinyin": "pǎobù"
      },
      {
          "hskclass": "2",
          "japanese": "安い",
          "chinese": "便宜",
          "pinyin": "piányí"
      },
      {
          "hskclass": "2",
          "japanese": "チケット",
          "chinese": "票",
          "pinyin": "piào"
      },
      {
          "hskclass": "2",
          "japanese": "妻",
          "chinese": "妻子",
          "pinyin": "qīzi"
      },
      {
          "hskclass": "2",
          "japanese": "起きる",
          "chinese": "起床",
          "pinyin": "qǐchuáng"
      },
      {
          "hskclass": "2",
          "japanese": "千",
          "chinese": "千",
          "pinyin": "qiān"
      },
      {
          "hskclass": "2",
          "japanese": "明確な",
          "chinese": "晴",
          "pinyin": "qíng"
      },
      {
          "hskclass": "2",
          "japanese": "昨年",
          "chinese": "去年",
          "pinyin": "qùnián"
      },
      {
          "hskclass": "2",
          "japanese": "させる",
          "chinese": "让",
          "pinyin": "ràng"
      },
      {
          "hskclass": "2",
          "japanese": "出勤する",
          "chinese": "上班",
          "pinyin": "shàngbān"
      },
      {
          "hskclass": "2",
          "japanese": "体",
          "chinese": "身体",
          "pinyin": "shēntǐ"
      },
      {
          "hskclass": "2",
          "japanese": "病気になる",
          "chinese": "生病",
          "pinyin": "shēngbìng"
      },
      {
          "hskclass": "2",
          "japanese": "誕生日",
          "chinese": "生日",
          "pinyin": "shēngrì"
      },
      {
          "hskclass": "2",
          "japanese": "時間",
          "chinese": "时间",
          "pinyin": "shíjiān"
      },
      {
          "hskclass": "2",
          "japanese": "事",
          "chinese": "事情",
          "pinyin": "shìqíng"
      },
      {
          "hskclass": "2",
          "japanese": "腕時計",
          "chinese": "手表",
          "pinyin": "shǒubiǎo"
      },
      {
          "hskclass": "2",
          "japanese": "携帯電話",
          "chinese": "手机",
          "pinyin": "shǒujī"
      },
      {
          "hskclass": "2",
          "japanese": "送る、届ける",
          "chinese": "送",
          "pinyin": "sòng"
      },
      {
          "hskclass": "2",
          "japanese": "だから",
          "chinese": "所以",
          "pinyin": "suǒyǐ"
      },
      {
          "hskclass": "2",
          "japanese": "それは",
          "chinese": "它",
          "pinyin": "tā"
      },
      {
          "hskclass": "2",
          "japanese": "サッカーをする",
          "chinese": "踢足球",
          "pinyin": "tī zúqiú"
      },
      {
          "hskclass": "2",
          "japanese": "書き記す",
          "chinese": "题",
          "pinyin": "tí"
      },
      {
          "hskclass": "2",
          "japanese": "ダンス",
          "chinese": "跳舞",
          "pinyin": "tiàowǔ"
      },
      {
          "hskclass": "2",
          "japanese": "外",
          "chinese": "外",
          "pinyin": "wài"
      },
      {
          "hskclass": "2",
          "japanese": "完成する",
          "chinese": "完",
          "pinyin": "wán"
      },
      {
          "hskclass": "2",
          "japanese": "遊ぶ",
          "chinese": "玩",
          "pinyin": "wán"
      },
      {
          "hskclass": "2",
          "japanese": "夜",
          "chinese": "晚上",
          "pinyin": "wǎnshàng"
      },
      {
          "hskclass": "2",
          "japanese": "なぜ",
          "chinese": "为什么",
          "pinyin": "wèishéme"
      },
      {
          "hskclass": "2",
          "japanese": "尋ねる",
          "chinese": "问",
          "pinyin": "wèn"
      },
      {
          "hskclass": "2",
          "japanese": "問題",
          "chinese": "问题",
          "pinyin": "wèntí"
      },
      {
          "hskclass": "2",
          "japanese": "スイカ",
          "chinese": "西瓜",
          "pinyin": "xī guā"
      },
      {
          "hskclass": "2",
          "japanese": "望む",
          "chinese": "希望",
          "pinyin": "xīwàng"
      },
      {
          "hskclass": "2",
          "japanese": "洗う",
          "chinese": "洗",
          "pinyin": "xǐ"
      },
      {
          "hskclass": "2",
          "japanese": "へ",
          "chinese": "向",
          "pinyin": "xiàng"
      },
      {
          "hskclass": "2",
          "japanese": "時間",
          "chinese": "小时",
          "pinyin": "xiǎoshí"
      },
      {
          "hskclass": "2",
          "japanese": "笑う",
          "chinese": "笑",
          "pinyin": "xiào"
      },
      {
          "hskclass": "2",
          "japanese": "新しい",
          "chinese": "新",
          "pinyin": "xīn"
      },
      {
          "hskclass": "2",
          "japanese": "姓、名字",
          "chinese": "姓",
          "pinyin": "xìng"
      },
      {
          "hskclass": "2",
          "japanese": "休憩",
          "chinese": "休息",
          "pinyin": "xiūxí"
      },
      {
          "hskclass": "2",
          "japanese": "雪",
          "chinese": "雪",
          "pinyin": "xuě"
      },
      {
          "hskclass": "2",
          "japanese": "色",
          "chinese": "颜色",
          "pinyin": "yánsè"
      },
      {
          "hskclass": "2",
          "japanese": "目",
          "chinese": "眼睛",
          "pinyin": "yǎnjīng"
      },
      {
          "hskclass": "2",
          "japanese": "羊肉",
          "chinese": "羊肉",
          "pinyin": "yángròu"
      },
      {
          "hskclass": "2",
          "japanese": "薬",
          "chinese": "药",
          "pinyin": "yào"
      },
      {
          "hskclass": "2",
          "japanese": "要求する",
          "chinese": "要",
          "pinyin": "yào"
      },
      {
          "hskclass": "2",
          "japanese": "さらに",
          "chinese": "也",
          "pinyin": "yě"
      },
      {
          "hskclass": "2",
          "japanese": "もう既に",
          "chinese": "已经",
          "pinyin": "yǐjīng"
      },
      {
          "hskclass": "2",
          "japanese": "一緒に",
          "chinese": "一起",
          "pinyin": "yīqǐ"
      },
      {
          "hskclass": "2",
          "japanese": "意味",
          "chinese": "意思",
          "pinyin": "yìsi"
      },
      {
          "hskclass": "2",
          "japanese": "陰",
          "chinese": "阴",
          "pinyin": "yīn"
      },
      {
          "hskclass": "2",
          "japanese": "なぜなら",
          "chinese": "因为",
          "pinyin": "yīnwèi"
      },
      {
          "hskclass": "2",
          "japanese": "泳ぐ",
          "chinese": "游泳",
          "pinyin": "yóuyǒng"
      },
      {
          "hskclass": "2",
          "japanese": "右",
          "chinese": "右边",
          "pinyin": "yòubiān"
      },
      {
          "hskclass": "2",
          "japanese": "魚",
          "chinese": "鱼",
          "pinyin": "yú"
      },
      {
          "hskclass": "2",
          "japanese": "中国のお金の単位",
          "chinese": "元",
          "pinyin": "yuán"
      },
      {
          "hskclass": "2",
          "japanese": "遠い",
          "chinese": "远",
          "pinyin": "yuǎn"
      },
      {
          "hskclass": "2",
          "japanese": "運動",
          "chinese": "运动",
          "pinyin": "yùndòng"
      },
      {
          "hskclass": "2",
          "japanese": "再び",
          "chinese": "再",
          "pinyin": "zài"
      },
      {
          "hskclass": "2",
          "japanese": "朝",
          "chinese": "早上",
          "pinyin": "zǎoshang"
      },
      {
          "hskclass": "2",
          "japanese": "枚",
          "chinese": "张",
          "pinyin": "zhāng"
      },
      {
          "hskclass": "2",
          "japanese": "夫",
          "chinese": "丈夫",
          "pinyin": "zhàngfū"
      },
      {
          "hskclass": "2",
          "japanese": "探す",
          "chinese": "找",
          "pinyin": "zhǎo"
      },
      {
          "hskclass": "2",
          "japanese": "着る",
          "chinese": "着",
          "pinyin": "zhe"
      },
      {
          "hskclass": "2",
          "japanese": "本当に",
          "chinese": "真",
          "pinyin": "zhēn"
      },
      {
          "hskclass": "2",
          "japanese": "まさに〜している",
          "chinese": "正在",
          "pinyin": "zhèng zài"
      },
      {
          "hskclass": "2",
          "japanese": "知っている",
          "chinese": "知道",
          "pinyin": "zhīdào"
      },
      {
          "hskclass": "2",
          "japanese": "準備をする",
          "chinese": "准备",
          "pinyin": "zhǔnbèi"
      },
      {
          "hskclass": "2",
          "japanese": "自転車",
          "chinese": "自行车",
          "pinyin": "zìxíngchē"
      },
      {
          "hskclass": "2",
          "japanese": "歩く",
          "chinese": "走",
          "pinyin": "zǒu"
      },
      {
          "hskclass": "2",
          "japanese": "最も",
          "chinese": "最",
          "pinyin": "zuì"
      },
      {
          "hskclass": "2",
          "japanese": "左",
          "chinese": "左边",
          "pinyin": "zuǒbiān"
      },
      {
          "hskclass": "2",
          "japanese": "昨日",
          "chinese": "昨天",
          "pinyin": "zuótiān"
      },
      {
          "hskclass": "2",
          "japanese": "する",
          "chinese": "做",
          "pinyin": "zuò"
      },
      {
          "hskclass": "2",
          "japanese": "座る",
          "chinese": "坐",
          "pinyin": "zuò"
      },
      {
          "hskclass": "3",
          "japanese": "叔母さん",
          "chinese": "阿姨",
          "pinyin": "āyí"
      },
      {
          "hskclass": "3",
          "japanese": "はい，ええ",
          "chinese": "啊",
          "pinyin": "a"
      },
      {
          "hskclass": "3",
          "japanese": "短い",
          "chinese": "矮",
          "pinyin": "ǎi"
      },
      {
          "hskclass": "3",
          "japanese": "趣味",
          "chinese": "爱好",
          "pinyin": "àihào"
      },
      {
          "hskclass": "3",
          "japanese": "静か",
          "chinese": "安静",
          "pinyin": "ānjìng"
      },
      {
          "hskclass": "3",
          "japanese": "握る、つかむ",
          "chinese": "把",
          "pinyin": "bǎ"
      },
      {
          "hskclass": "3",
          "japanese": "授業",
          "chinese": "班",
          "pinyin": "bān"
      },
      {
          "hskclass": "3",
          "japanese": "動く、運ぶ",
          "chinese": "搬",
          "pinyin": "bān"
      },
      {
          "hskclass": "3",
          "japanese": "半分",
          "chinese": "半",
          "pinyin": "bàn"
      },
      {
          "hskclass": "3",
          "japanese": "方法",
          "chinese": "办法",
          "pinyin": "bànfǎ"
      },
      {
          "hskclass": "3",
          "japanese": "事務所",
          "chinese": "办公室",
          "pinyin": "bàngōngshì"
      },
      {
          "hskclass": "3",
          "japanese": "助ける",
          "chinese": "帮忙",
          "pinyin": "bāngmáng"
      },
      {
          "hskclass": "3",
          "japanese": "包む",
          "chinese": "包",
          "pinyin": "bāo"
      },
      {
          "hskclass": "3",
          "japanese": "満腹",
          "chinese": "饱",
          "pinyin": "bǎo"
      },
      {
          "hskclass": "3",
          "japanese": "北",
          "chinese": "北方",
          "pinyin": "běifāng"
      },
      {
          "hskclass": "3",
          "japanese": "〜によって〜される",
          "chinese": "被",
          "pinyin": "bèi"
      },
      {
          "hskclass": "3",
          "japanese": "鼻",
          "chinese": "鼻子",
          "pinyin": "bízi"
      },
      {
          "hskclass": "3",
          "japanese": "比較する",
          "chinese": "比较",
          "pinyin": "bǐjiào"
      },
      {
          "hskclass": "3",
          "japanese": "試合",
          "chinese": "比赛",
          "pinyin": "bǐsài"
      },
      {
          "hskclass": "3",
          "japanese": "しなければならない",
          "chinese": "必须",
          "pinyin": "bìxū"
      },
      {
          "hskclass": "3",
          "japanese": "変化",
          "chinese": "变化",
          "pinyin": "biànhuà"
      },
      {
          "hskclass": "3",
          "japanese": "表現する",
          "chinese": "表示",
          "pinyin": "biǎoshì"
      },
      {
          "hskclass": "3",
          "japanese": "演じる",
          "chinese": "表演",
          "pinyin": "biǎoyǎn"
      },
      {
          "hskclass": "3",
          "japanese": "別の人",
          "chinese": "别人",
          "pinyin": "biérén"
      },
      {
          "hskclass": "3",
          "japanese": "ゲストハウス",
          "chinese": "宾馆",
          "pinyin": "bīnguǎn"
      },
      {
          "hskclass": "3",
          "japanese": "冷蔵庫",
          "chinese": "冰箱",
          "pinyin": "bīngxiāng"
      },
      {
          "hskclass": "3",
          "japanese": "〜だけ",
          "chinese": "才",
          "pinyin": "cái"
      },
      {
          "hskclass": "3",
          "japanese": "メニュー表",
          "chinese": "菜单",
          "pinyin": "càidān"
      },
      {
          "hskclass": "3",
          "japanese": "参加する",
          "chinese": "参加",
          "pinyin": "cānjiā"
      },
      {
          "hskclass": "3",
          "japanese": "草",
          "chinese": "草",
          "pinyin": "cǎo"
      },
      {
          "hskclass": "3",
          "japanese": "層、階",
          "chinese": "层",
          "pinyin": "céng"
      },
      {
          "hskclass": "3",
          "japanese": "違い",
          "chinese": "差",
          "pinyin": "chà"
      },
      {
          "hskclass": "3",
          "japanese": "スーパーマーケット",
          "chinese": "超市",
          "pinyin": "chāoshì"
      },
      {
          "hskclass": "3",
          "japanese": "シャツ",
          "chinese": "衬衫",
          "pinyin": "chènshān"
      },
      {
          "hskclass": "3",
          "japanese": "成績",
          "chinese": "成绩",
          "pinyin": "chéngjī"
      },
      {
          "hskclass": "3",
          "japanese": "街",
          "chinese": "城市",
          "pinyin": "chéngshì"
      },
      {
          "hskclass": "3",
          "japanese": "遅れる",
          "chinese": "迟到",
          "pinyin": "chídào"
      },
      {
          "hskclass": "3",
          "japanese": "現れる",
          "chinese": "出现",
          "pinyin": "chūxiàn"
      },
      {
          "hskclass": "3",
          "japanese": "キッチン",
          "chinese": "厨房",
          "pinyin": "chúfáng"
      },
      {
          "hskclass": "3",
          "japanese": "〜以外、〜を除いて",
          "chinese": "除了",
          "pinyin": "chúle"
      },
      {
          "hskclass": "3",
          "japanese": "春",
          "chinese": "春",
          "pinyin": "chūn"
      },
      {
          "hskclass": "3",
          "japanese": "単語",
          "chinese": "词语",
          "pinyin": "cíyǔ"
      },
      {
          "hskclass": "3",
          "japanese": "賢い",
          "chinese": "聪明",
          "pinyin": "cōngmíng"
      },
      {
          "hskclass": "3",
          "japanese": "掃除する",
          "chinese": "打扫",
          "pinyin": "dǎsǎo"
      },
      {
          "hskclass": "3",
          "japanese": "するつもり",
          "chinese": "打算",
          "pinyin": "dǎsuàn"
      },
      {
          "hskclass": "3",
          "japanese": "持って",
          "chinese": "带",
          "pinyin": "dài"
      },
      {
          "hskclass": "3",
          "japanese": "心配",
          "chinese": "担心",
          "pinyin": "dānxīn"
      },
      {
          "hskclass": "3",
          "japanese": "ケーキ",
          "chinese": "蛋糕",
          "pinyin": "dàngāo"
      },
      {
          "hskclass": "3",
          "japanese": "当然、もちろん",
          "chinese": "当然",
          "pinyin": "dāngrán"
      },
      {
          "hskclass": "3",
          "japanese": "地面",
          "chinese": "地",
          "pinyin": "de"
      },
      {
          "hskclass": "3",
          "japanese": "光",
          "chinese": "灯",
          "pinyin": "dēng"
      },
      {
          "hskclass": "3",
          "japanese": "低い",
          "chinese": "低",
          "pinyin": "dī"
      },
      {
          "hskclass": "3",
          "japanese": "場所",
          "chinese": "地方",
          "pinyin": "dìfāng"
      },
      {
          "hskclass": "3",
          "japanese": "地下鉄",
          "chinese": "地铁",
          "pinyin": "dìtiě"
      },
      {
          "hskclass": "3",
          "japanese": "地図",
          "chinese": "地图",
          "pinyin": "dìtú"
      },
      {
          "hskclass": "3",
          "japanese": "エレベーター",
          "chinese": "电梯",
          "pinyin": "diàntī"
      },
      {
          "hskclass": "3",
          "japanese": "Eメール",
          "chinese": "电子邮件",
          "pinyin": "diànzǐ yóujiàn"
      },
      {
          "hskclass": "3",
          "japanese": "東",
          "chinese": "东",
          "pinyin": "dōng"
      },
      {
          "hskclass": "3",
          "japanese": "冬",
          "chinese": "冬",
          "pinyin": "dōng"
      },
      {
          "hskclass": "3",
          "japanese": "動物",
          "chinese": "动物",
          "pinyin": "dòngwù"
      },
      {
          "hskclass": "3",
          "japanese": "短い",
          "chinese": "短",
          "pinyin": "duǎn"
      },
      {
          "hskclass": "3",
          "japanese": "長いものの一部分を数える量詞",
          "chinese": "段",
          "pinyin": "duàn"
      },
      {
          "hskclass": "3",
          "japanese": "鍛える、鍛錬",
          "chinese": "锻炼",
          "pinyin": "duànliàn"
      },
      {
          "hskclass": "3",
          "japanese": "どのように",
          "chinese": "多么",
          "pinyin": "duōme"
      },
      {
          "hskclass": "3",
          "japanese": "空腹",
          "chinese": "饿",
          "pinyin": "è"
      },
      {
          "hskclass": "3",
          "japanese": "さらに",
          "chinese": "而且",
          "pinyin": "érqiě"
      },
      {
          "hskclass": "3",
          "japanese": "耳",
          "chinese": "耳朵",
          "pinyin": "ěrduǒ"
      },
      {
          "hskclass": "3",
          "japanese": "熱",
          "chinese": "发烧",
          "pinyin": "fāshāo"
      },
      {
          "hskclass": "3",
          "japanese": "発見",
          "chinese": "发现",
          "pinyin": "fāxiàn"
      },
      {
          "hskclass": "3",
          "japanese": "便利",
          "chinese": "方便",
          "pinyin": "fāngbiàn"
      },
      {
          "hskclass": "3",
          "japanese": "離す、入れる",
          "chinese": "放",
          "pinyin": "fàng"
      },
      {
          "hskclass": "3",
          "japanese": "安心する",
          "chinese": "放心",
          "pinyin": "fàngxīn"
      },
      {
          "hskclass": "3",
          "japanese": "分割",
          "chinese": "分",
          "pinyin": "fēn"
      },
      {
          "hskclass": "3",
          "japanese": "近く",
          "chinese": "附近",
          "pinyin": "fùjìn"
      },
      {
          "hskclass": "3",
          "japanese": "復習する",
          "chinese": "复习",
          "pinyin": "fùxí"
      },
      {
          "hskclass": "3",
          "japanese": "清潔",
          "chinese": "干净",
          "pinyin": "gānjìng"
      },
      {
          "hskclass": "3",
          "japanese": "敢えて",
          "chinese": "敢",
          "pinyin": "gǎn"
      },
      {
          "hskclass": "3",
          "japanese": "風邪をひく",
          "chinese": "感冒",
          "pinyin": "gǎnmào"
      },
      {
          "hskclass": "3",
          "japanese": "さっき",
          "chinese": "刚才",
          "pinyin": "gāngcái"
      },
      {
          "hskclass": "3",
          "japanese": "とともに",
          "chinese": "跟",
          "pinyin": "gēn"
      },
      {
          "hskclass": "3",
          "japanese": "〜によると",
          "chinese": "根据",
          "pinyin": "gēnjù"
      },
      {
          "hskclass": "3",
          "japanese": "もっと",
          "chinese": "更",
          "pinyin": "gèng"
      },
      {
          "hskclass": "3",
          "japanese": "公園",
          "chinese": "公园",
          "pinyin": "gōngyuán"
      },
      {
          "hskclass": "3",
          "japanese": "物語",
          "chinese": "故事",
          "pinyin": "gùshì"
      },
      {
          "hskclass": "3",
          "japanese": "風が吹く",
          "chinese": "刮风",
          "pinyin": "guā fēng"
      },
      {
          "hskclass": "3",
          "japanese": "閉める",
          "chinese": "关",
          "pinyin": "guān"
      },
      {
          "hskclass": "3",
          "japanese": "関係",
          "chinese": "关系",
          "pinyin": "guānxì"
      },
      {
          "hskclass": "3",
          "japanese": "関心を持つ",
          "chinese": "关心",
          "pinyin": "guānxīn"
      },
      {
          "hskclass": "3",
          "japanese": "に関して",
          "chinese": "关于",
          "pinyin": "guānyú"
      },
      {
          "hskclass": "3",
          "japanese": "国",
          "chinese": "国家",
          "pinyin": "guójiā"
      },
      {
          "hskclass": "3",
          "japanese": "フルーツジュース",
          "chinese": "果汁",
          "pinyin": "guǒzhī"
      },
      {
          "hskclass": "3",
          "japanese": "過去",
          "chinese": "过去",
          "pinyin": "guòqù"
      },
      {
          "hskclass": "3",
          "japanese": "やはり、依然として",
          "chinese": "还是",
          "pinyin": "háishì"
      },
      {
          "hskclass": "3",
          "japanese": "恐れて",
          "chinese": "害怕",
          "pinyin": "hàipà"
      },
      {
          "hskclass": "3",
          "japanese": "川",
          "chinese": "河",
          "pinyin": "hé"
      },
      {
          "hskclass": "3",
          "japanese": "黒板",
          "chinese": "黑板",
          "pinyin": "hēibǎn"
      },
      {
          "hskclass": "3",
          "japanese": "パスポート",
          "chinese": "护照",
          "pinyin": "hùzhào"
      },
      {
          "hskclass": "3",
          "japanese": "花",
          "chinese": "花",
          "pinyin": "huā"
      },
      {
          "hskclass": "3",
          "japanese": "庭園",
          "chinese": "花园",
          "pinyin": "huāyuán"
      },
      {
          "hskclass": "3",
          "japanese": "絵",
          "chinese": "画",
          "pinyin": "huà"
      },
      {
          "hskclass": "3",
          "japanese": "悪い",
          "chinese": "坏",
          "pinyin": "huài"
      },
      {
          "hskclass": "3",
          "japanese": "さらに",
          "chinese": "还",
          "pinyin": "hái"
      },
      {
          "hskclass": "3",
          "japanese": "環境",
          "chinese": "环境",
          "pinyin": "huánjìng"
      },
      {
          "hskclass": "3",
          "japanese": "変える",
          "chinese": "换",
          "pinyin": "huàn"
      },
      {
          "hskclass": "3",
          "japanese": "黄色",
          "chinese": "黄",
          "pinyin": "huáng"
      },
      {
          "hskclass": "3",
          "japanese": "会議",
          "chinese": "会议",
          "pinyin": "huìyì"
      },
      {
          "hskclass": "3",
          "japanese": "もしくは",
          "chinese": "或者",
          "pinyin": "huòzhě"
      },
      {
          "hskclass": "3",
          "japanese": "ほとんど",
          "chinese": "几乎",
          "pinyin": "jīhū"
      },
      {
          "hskclass": "3",
          "japanese": "機会",
          "chinese": "机会",
          "pinyin": "jīhuì"
      },
      {
          "hskclass": "3",
          "japanese": "極み、頂点",
          "chinese": "极",
          "pinyin": "jí"
      },
      {
          "hskclass": "3",
          "japanese": "思い出す",
          "chinese": "记得",
          "pinyin": "jìdé"
      },
      {
          "hskclass": "3",
          "japanese": "季節",
          "chinese": "季节",
          "pinyin": "jìjié"
      },
      {
          "hskclass": "3",
          "japanese": "検査",
          "chinese": "检查",
          "pinyin": "jiǎnchá"
      },
      {
          "hskclass": "3",
          "japanese": "簡単",
          "chinese": "简单",
          "pinyin": "jiǎndān"
      },
      {
          "hskclass": "3",
          "japanese": "健康",
          "chinese": "健康",
          "pinyin": "jiànkāng"
      },
      {
          "hskclass": "3",
          "japanese": "会う",
          "chinese": "见面",
          "pinyin": "jiànmiàn"
      },
      {
          "hskclass": "3",
          "japanese": "話す",
          "chinese": "讲",
          "pinyin": "jiǎng"
      },
      {
          "hskclass": "3",
          "japanese": "教える",
          "chinese": "教",
          "pinyin": "jiào"
      },
      {
          "hskclass": "3",
          "japanese": "足",
          "chinese": "脚",
          "pinyin": "jiǎo"
      },
      {
          "hskclass": "3",
          "japanese": "角度",
          "chinese": "角",
          "pinyin": "jiǎo"
      },
      {
          "hskclass": "3",
          "japanese": "連結する、つなぐ",
          "chinese": "接",
          "pinyin": "jiē"
      },
      {
          "hskclass": "3",
          "japanese": "道",
          "chinese": "街道",
          "pinyin": "jiēdào"
      },
      {
          "hskclass": "3",
          "japanese": "結婚",
          "chinese": "结婚",
          "pinyin": "jiéhūn"
      },
      {
          "hskclass": "3",
          "japanese": "終わる",
          "chinese": "结束",
          "pinyin": "jiéshù"
      },
      {
          "hskclass": "3",
          "japanese": "出し物、プログラム",
          "chinese": "节目",
          "pinyin": "jiémù"
      },
      {
          "hskclass": "3",
          "japanese": "休日",
          "chinese": "节日",
          "pinyin": "jiérì"
      },
      {
          "hskclass": "3",
          "japanese": "解決する",
          "chinese": "解决",
          "pinyin": "jiějué"
      },
      {
          "hskclass": "3",
          "japanese": "借りる",
          "chinese": "借",
          "pinyin": "jiè"
      },
      {
          "hskclass": "3",
          "japanese": "いつも、しょっちゅう",
          "chinese": "经常",
          "pinyin": "jīngcháng"
      },
      {
          "hskclass": "3",
          "japanese": "経過する、過ぎる",
          "chinese": "经过",
          "pinyin": "jīngguò"
      },
      {
          "hskclass": "3",
          "japanese": "マネージャー",
          "chinese": "经理",
          "pinyin": "jīnglǐ"
      },
      {
          "hskclass": "3",
          "japanese": "長い",
          "chinese": "久",
          "pinyin": "jiǔ"
      },
      {
          "hskclass": "3",
          "japanese": "古い",
          "chinese": "旧",
          "pinyin": "jiù"
      },
      {
          "hskclass": "3",
          "japanese": "執り行なう",
          "chinese": "举行",
          "pinyin": "jǔxíng"
      },
      {
          "hskclass": "3",
          "japanese": "文",
          "chinese": "句子",
          "pinyin": "jùzi"
      },
      {
          "hskclass": "3",
          "japanese": "決める",
          "chinese": "决定",
          "pinyin": "juédìng"
      },
      {
          "hskclass": "3",
          "japanese": "喉が渇く",
          "chinese": "渴",
          "pinyin": "kě"
      },
      {
          "hskclass": "3",
          "japanese": "愛らしい",
          "chinese": "可爱",
          "pinyin": "kě'ài"
      },
      {
          "hskclass": "3",
          "japanese": "1/4（4分の1）",
          "chinese": "刻",
          "pinyin": "kè"
      },
      {
          "hskclass": "3",
          "japanese": "客、ゲスト",
          "chinese": "客人",
          "pinyin": "kèrén"
      },
      {
          "hskclass": "3",
          "japanese": "空調",
          "chinese": "空调",
          "pinyin": "kòngtiáo"
      },
      {
          "hskclass": "3",
          "japanese": "口",
          "chinese": "口",
          "pinyin": "kǒu"
      },
      {
          "hskclass": "3",
          "japanese": "泣く",
          "chinese": "哭",
          "pinyin": "kū"
      },
      {
          "hskclass": "3",
          "japanese": "パンツ",
          "chinese": "裤子",
          "pinyin": "kùzi"
      },
      {
          "hskclass": "3",
          "japanese": "箸",
          "chinese": "筷子",
          "pinyin": "kuàizi"
      },
      {
          "hskclass": "3",
          "japanese": "青い",
          "chinese": "蓝",
          "pinyin": "lán"
      },
      {
          "hskclass": "3",
          "japanese": "老いている",
          "chinese": "老",
          "pinyin": "lǎo"
      },
      {
          "hskclass": "3",
          "japanese": "去る、離れる",
          "chinese": "离开",
          "pinyin": "líkāi"
      },
      {
          "hskclass": "3",
          "japanese": "ギフト",
          "chinese": "礼物",
          "pinyin": "lǐwù"
      },
      {
          "hskclass": "3",
          "japanese": "歴史",
          "chinese": "历史",
          "pinyin": "lìshǐ"
      },
      {
          "hskclass": "3",
          "japanese": "顔",
          "chinese": "脸",
          "pinyin": "liǎn"
      },
      {
          "hskclass": "3",
          "japanese": "練習",
          "chinese": "练习",
          "pinyin": "liànxí"
      },
      {
          "hskclass": "3",
          "japanese": "車",
          "chinese": "辆",
          "pinyin": "liàng"
      },
      {
          "hskclass": "3",
          "japanese": "理解する",
          "chinese": "了解",
          "pinyin": "liǎojiě"
      },
      {
          "hskclass": "3",
          "japanese": "隣人",
          "chinese": "邻居",
          "pinyin": "línjū"
      },
      {
          "hskclass": "3",
          "japanese": "床",
          "chinese": "楼",
          "pinyin": "lóu"
      },
      {
          "hskclass": "3",
          "japanese": "緑",
          "chinese": "绿",
          "pinyin": "lǜ"
      },
      {
          "hskclass": "3",
          "japanese": "馬",
          "chinese": "马",
          "pinyin": "mǎ"
      },
      {
          "hskclass": "3",
          "japanese": "満足する",
          "chinese": "满意",
          "pinyin": "mǎnyì"
      },
      {
          "hskclass": "3",
          "japanese": "帽子",
          "chinese": "帽子",
          "pinyin": "màozi"
      },
      {
          "hskclass": "3",
          "japanese": "m（メートル）",
          "chinese": "米",
          "pinyin": "mǐ"
      },
      {
          "hskclass": "3",
          "japanese": "パン",
          "chinese": "面包",
          "pinyin": "miànbāo"
      },
      {
          "hskclass": "3",
          "japanese": "麺",
          "chinese": "面条",
          "pinyin": "miàntiáo"
      },
      {
          "hskclass": "3",
          "japanese": "理解する",
          "chinese": "明白",
          "pinyin": "míngbái"
      },
      {
          "hskclass": "3",
          "japanese": "取る",
          "chinese": "拿",
          "pinyin": "ná"
      },
      {
          "hskclass": "3",
          "japanese": "祖母",
          "chinese": "奶奶",
          "pinyin": "nǎinai"
      },
      {
          "hskclass": "3",
          "japanese": "南",
          "chinese": "南",
          "pinyin": "nán"
      },
      {
          "hskclass": "3",
          "japanese": "難しい",
          "chinese": "难",
          "pinyin": "nán"
      },
      {
          "hskclass": "3",
          "japanese": "悲しい",
          "chinese": "难过",
          "pinyin": "nánguò"
      },
      {
          "hskclass": "3",
          "japanese": "学年",
          "chinese": "年级",
          "pinyin": "niánjí"
      },
      {
          "hskclass": "3",
          "japanese": "若い",
          "chinese": "年轻",
          "pinyin": "niánqīng"
      },
      {
          "hskclass": "3",
          "japanese": "鳥",
          "chinese": "鸟",
          "pinyin": "niǎo"
      },
      {
          "hskclass": "3",
          "japanese": "努力",
          "chinese": "努力",
          "pinyin": "nǔlì"
      },
      {
          "hskclass": "3",
          "japanese": "山に登る",
          "chinese": "爬山",
          "pinyin": "páshān"
      },
      {
          "hskclass": "3",
          "japanese": "大皿",
          "chinese": "盘子",
          "pinyin": "pánzi"
      },
      {
          "hskclass": "3",
          "japanese": "太っている",
          "chinese": "胖",
          "pinyin": "pàng"
      },
      {
          "hskclass": "3",
          "japanese": "ビール",
          "chinese": "啤酒",
          "pinyin": "píjiǔ"
      },
      {
          "hskclass": "3",
          "japanese": "葡萄",
          "chinese": "葡萄",
          "pinyin": "pútáo"
      },
      {
          "hskclass": "3",
          "japanese": "標準語",
          "chinese": "普通话",
          "pinyin": "pǔtōnghuà"
      },
      {
          "hskclass": "3",
          "japanese": "実際",
          "chinese": "其实",
          "pinyin": "qíshí"
      },
      {
          "hskclass": "3",
          "japanese": "他の",
          "chinese": "其他",
          "pinyin": "qítā"
      },
      {
          "hskclass": "3",
          "japanese": "乗る",
          "chinese": "骑",
          "pinyin": "qí"
      },
      {
          "hskclass": "3",
          "japanese": "鉛筆",
          "chinese": "铅笔",
          "pinyin": "qiānbǐ"
      },
      {
          "hskclass": "3",
          "japanese": "明確な",
          "chinese": "清楚",
          "pinyin": "qīngchǔ"
      },
      {
          "hskclass": "3",
          "japanese": "秋",
          "chinese": "秋",
          "pinyin": "qiū"
      },
      {
          "hskclass": "3",
          "japanese": "奇妙",
          "chinese": "奇怪",
          "pinyin": "qíguài"
      },
      {
          "hskclass": "3",
          "japanese": "スカート",
          "chinese": "裙子",
          "pinyin": "qúnzi"
      },
      {
          "hskclass": "3",
          "japanese": "それから",
          "chinese": "然后",
          "pinyin": "ránhòu"
      },
      {
          "hskclass": "3",
          "japanese": "熱意",
          "chinese": "热情",
          "pinyin": "rèqíng"
      },
      {
          "hskclass": "3",
          "japanese": "思う",
          "chinese": "认为",
          "pinyin": "rènwéi"
      },
      {
          "hskclass": "3",
          "japanese": "真剣",
          "chinese": "认真",
          "pinyin": "rènzhēn"
      },
      {
          "hskclass": "3",
          "japanese": "簡単",
          "chinese": "容易",
          "pinyin": "róngyì"
      },
      {
          "hskclass": "3",
          "japanese": "もし",
          "chinese": "如果",
          "pinyin": "rúguǒ"
      },
      {
          "hskclass": "3",
          "japanese": "傘",
          "chinese": "伞",
          "pinyin": "sǎn"
      },
      {
          "hskclass": "3",
          "japanese": "インターネット",
          "chinese": "上网",
          "pinyin": "shàngwǎng"
      },
      {
          "hskclass": "3",
          "japanese": "怒る",
          "chinese": "生气",
          "pinyin": "shēngqì"
      },
      {
          "hskclass": "3",
          "japanese": "音",
          "chinese": "声音",
          "pinyin": "shēngyīn"
      },
      {
          "hskclass": "3",
          "japanese": "使う",
          "chinese": "使",
          "pinyin": "shǐ"
      },
      {
          "hskclass": "3",
          "japanese": "世界",
          "chinese": "世界",
          "pinyin": "shìjiè"
      },
      {
          "hskclass": "3",
          "japanese": "やせている",
          "chinese": "瘦",
          "pinyin": "shòu"
      },
      {
          "hskclass": "3",
          "japanese": "心地よい、快適",
          "chinese": "舒服",
          "pinyin": "shūfú"
      },
      {
          "hskclass": "3",
          "japanese": "叔父",
          "chinese": "叔叔",
          "pinyin": "shūshu"
      },
      {
          "hskclass": "3",
          "japanese": "木",
          "chinese": "树",
          "pinyin": "shù"
      },
      {
          "hskclass": "3",
          "japanese": "数学",
          "chinese": "数学",
          "pinyin": "shùxué"
      },
      {
          "hskclass": "3",
          "japanese": "歯磨き",
          "chinese": "刷牙",
          "pinyin": "shuāyá"
      },
      {
          "hskclass": "3",
          "japanese": "2つの、対の",
          "chinese": "双",
          "pinyin": "shuāng"
      },
      {
          "hskclass": "3",
          "japanese": "レベル、水準",
          "chinese": "水平",
          "pinyin": "shuǐpíng"
      },
      {
          "hskclass": "3",
          "japanese": "運転手",
          "chinese": "司机",
          "pinyin": "sījī"
      },
      {
          "hskclass": "3",
          "japanese": "〜にもかかわらず",
          "chinese": "虽然",
          "pinyin": "suīrán"
      },
      {
          "hskclass": "3",
          "japanese": "太陽",
          "chinese": "太阳",
          "pinyin": "tàiyáng"
      },
      {
          "hskclass": "3",
          "japanese": "砂糖",
          "chinese": "糖",
          "pinyin": "táng"
      },
      {
          "hskclass": "3",
          "japanese": "特別な",
          "chinese": "特别",
          "pinyin": "tèbié"
      },
      {
          "hskclass": "3",
          "japanese": "痛み",
          "chinese": "疼",
          "pinyin": "téng"
      },
      {
          "hskclass": "3",
          "japanese": "上げる、高める",
          "chinese": "提高",
          "pinyin": "tígāo"
      },
      {
          "hskclass": "3",
          "japanese": "体育",
          "chinese": "体育",
          "pinyin": "tǐyù"
      },
      {
          "hskclass": "3",
          "japanese": "甘い",
          "chinese": "甜",
          "pinyin": "tián"
      },
      {
          "hskclass": "3",
          "japanese": "細長い物を数える量詞",
          "chinese": "条",
          "pinyin": "tiáo"
      },
      {
          "hskclass": "3",
          "japanese": "同僚",
          "chinese": "同事",
          "pinyin": "tóngshì"
      },
      {
          "hskclass": "3",
          "japanese": "一致する",
          "chinese": "同意",
          "pinyin": "tóngyì"
      },
      {
          "hskclass": "3",
          "japanese": "髪",
          "chinese": "头发",
          "pinyin": "tóufǎ"
      },
      {
          "hskclass": "3",
          "japanese": "突然",
          "chinese": "突然",
          "pinyin": "túrán"
      },
      {
          "hskclass": "3",
          "japanese": "図書館",
          "chinese": "图书馆",
          "pinyin": "túshū guǎn"
      },
      {
          "hskclass": "3",
          "japanese": "足",
          "chinese": "腿",
          "pinyin": "tuǐ"
      },
      {
          "hskclass": "3",
          "japanese": "完成する",
          "chinese": "完成",
          "pinyin": "wánchéng"
      },
      {
          "hskclass": "3",
          "japanese": "お椀",
          "chinese": "碗",
          "pinyin": "wǎn"
      },
      {
          "hskclass": "3",
          "japanese": "万",
          "chinese": "万",
          "pinyin": "wàn"
      },
      {
          "hskclass": "3",
          "japanese": "忘れる",
          "chinese": "忘记",
          "pinyin": "wàngjì"
      },
      {
          "hskclass": "3",
          "japanese": "のために",
          "chinese": "为",
          "pinyin": "wèi"
      },
      {
          "hskclass": "3",
          "japanese": "するために",
          "chinese": "为了",
          "pinyin": "wèile"
      },
      {
          "hskclass": "3",
          "japanese": "地位",
          "chinese": "位",
          "pinyin": "wèi"
      },
      {
          "hskclass": "3",
          "japanese": "文化",
          "chinese": "文化",
          "pinyin": "wénhuà"
      },
      {
          "hskclass": "3",
          "japanese": "西",
          "chinese": "西",
          "pinyin": "xī"
      },
      {
          "hskclass": "3",
          "japanese": "習慣",
          "chinese": "习惯",
          "pinyin": "xíguàn"
      },
      {
          "hskclass": "3",
          "japanese": "トイレ",
          "chinese": "洗手间",
          "pinyin": "xǐshǒujiān"
      },
      {
          "hskclass": "3",
          "japanese": "入浴",
          "chinese": "洗澡",
          "pinyin": "xǐzǎo"
      },
      {
          "hskclass": "3",
          "japanese": "夏",
          "chinese": "夏",
          "pinyin": "xià"
      },
      {
          "hskclass": "3",
          "japanese": "先、最初",
          "chinese": "先",
          "pinyin": "xiān"
      },
      {
          "hskclass": "3",
          "japanese": "バナナ",
          "chinese": "香蕉",
          "pinyin": "xiāngjiāo"
      },
      {
          "hskclass": "3",
          "japanese": "同じ",
          "chinese": "相同",
          "pinyin": "xiāngtóng"
      },
      {
          "hskclass": "3",
          "japanese": "信じる",
          "chinese": "相信",
          "pinyin": "xiāngxìn"
      },
      {
          "hskclass": "3",
          "japanese": "のような",
          "chinese": "像",
          "pinyin": "xiàng"
      },
      {
          "hskclass": "3",
          "japanese": "気を付ける",
          "chinese": "小心",
          "pinyin": "xiǎoxīn"
      },
      {
          "hskclass": "3",
          "japanese": "校長",
          "chinese": "校长",
          "pinyin": "xiàozhǎng"
      },
      {
          "hskclass": "3",
          "japanese": "靴",
          "chinese": "鞋",
          "pinyin": "xié"
      },
      {
          "hskclass": "3",
          "japanese": "ニュース",
          "chinese": "新闻",
          "pinyin": "xīnwén"
      },
      {
          "hskclass": "3",
          "japanese": "新鮮",
          "chinese": "新鲜",
          "pinyin": "xīnxiān"
      },
      {
          "hskclass": "3",
          "japanese": "手紙",
          "chinese": "信",
          "pinyin": "xìn"
      },
      {
          "hskclass": "3",
          "japanese": "トランクケース",
          "chinese": "行李箱",
          "pinyin": "xínglǐ xiāng"
      },
      {
          "hskclass": "3",
          "japanese": "関心、興味",
          "chinese": "兴趣",
          "pinyin": "xìngqù"
      },
      {
          "hskclass": "3",
          "japanese": "パンダ",
          "chinese": "熊猫",
          "pinyin": "xióngmāo"
      },
      {
          "hskclass": "3",
          "japanese": "必要",
          "chinese": "需要",
          "pinyin": "xūyào"
      },
      {
          "hskclass": "3",
          "japanese": "選択する、選ぶ",
          "chinese": "选择",
          "pinyin": "xuǎnzé"
      },
      {
          "hskclass": "3",
          "japanese": "眼鏡",
          "chinese": "眼镜",
          "pinyin": "yǎnjìng"
      },
      {
          "hskclass": "3",
          "japanese": "要求する",
          "chinese": "要求",
          "pinyin": "yāoqiú"
      },
      {
          "hskclass": "3",
          "japanese": "祖父",
          "chinese": "爷爷",
          "pinyin": "yéyé"
      },
      {
          "hskclass": "3",
          "japanese": "絶対",
          "chinese": "一定",
          "pinyin": "yīdìng"
      },
      {
          "hskclass": "3",
          "japanese": "合計で、合わせて",
          "chinese": "一共",
          "pinyin": "yīgòng"
      },
      {
          "hskclass": "3",
          "japanese": "しばらく",
          "chinese": "一会儿",
          "pinyin": "yīhuǐ'er"
      },
      {
          "hskclass": "3",
          "japanese": "同じ、同様である",
          "chinese": "一样",
          "pinyin": "yīyàng"
      },
      {
          "hskclass": "3",
          "japanese": "以後、その後",
          "chinese": "以后",
          "pinyin": "yǐhòu"
      },
      {
          "hskclass": "3",
          "japanese": "以前、これまで",
          "chinese": "以前",
          "pinyin": "yǐqián"
      },
      {
          "hskclass": "3",
          "japanese": "認める、考える",
          "chinese": "以为",
          "pinyin": "yǐwéi"
      },
      {
          "hskclass": "3",
          "japanese": "一般的な",
          "chinese": "一般",
          "pinyin": "yībān"
      },
      {
          "hskclass": "3",
          "japanese": "一方、片方",
          "chinese": "一边",
          "pinyin": "yībiān"
      },
      {
          "hskclass": "3",
          "japanese": "真っすぐ",
          "chinese": "一直",
          "pinyin": "yīzhí"
      },
      {
          "hskclass": "3",
          "japanese": "音楽",
          "chinese": "音乐",
          "pinyin": "yīnyuè"
      },
      {
          "hskclass": "3",
          "japanese": "銀行",
          "chinese": "银行",
          "pinyin": "yínháng"
      },
      {
          "hskclass": "3",
          "japanese": "すべき",
          "chinese": "应该",
          "pinyin": "yīnggāi"
      },
      {
          "hskclass": "3",
          "japanese": "影響を及ぼす",
          "chinese": "影响",
          "pinyin": "yǐngxiǎng"
      },
      {
          "hskclass": "3",
          "japanese": "使う",
          "chinese": "用",
          "pinyin": "yòng"
      },
      {
          "hskclass": "3",
          "japanese": "ゲーム",
          "chinese": "游戏",
          "pinyin": "yóuxì"
      },
      {
          "hskclass": "3",
          "japanese": "有名",
          "chinese": "有名",
          "pinyin": "yǒumíng"
      },
      {
          "hskclass": "3",
          "japanese": "また",
          "chinese": "又",
          "pinyin": "yòu"
      },
      {
          "hskclass": "3",
          "japanese": "出会う",
          "chinese": "遇到",
          "pinyin": "yù dào"
      },
      {
          "hskclass": "3",
          "japanese": "〜したいと思う、喜んで〜する",
          "chinese": "愿意",
          "pinyin": "yuànyì"
      },
      {
          "hskclass": "3",
          "japanese": "月",
          "chinese": "月亮",
          "pinyin": "yuèliàng"
      },
      {
          "hskclass": "3",
          "japanese": "越える",
          "chinese": "越",
          "pinyin": "yuè"
      },
      {
          "hskclass": "3",
          "japanese": "雲",
          "chinese": "云",
          "pinyin": "yún"
      },
      {
          "hskclass": "3",
          "japanese": "駅",
          "chinese": "站",
          "pinyin": "zhàn"
      },
      {
          "hskclass": "3",
          "japanese": "長い",
          "chinese": "长",
          "pinyin": "zhǎng"
      },
      {
          "hskclass": "3",
          "japanese": "心配",
          "chinese": "着急",
          "pinyin": "zhāojí"
      },
      {
          "hskclass": "3",
          "japanese": "世話",
          "chinese": "照顾",
          "pinyin": "zhàogù"
      },
      {
          "hskclass": "3",
          "japanese": "写真",
          "chinese": "照片",
          "pinyin": "zhàopiàn"
      },
      {
          "hskclass": "3",
          "japanese": "カメラ",
          "chinese": "照相机",
          "pinyin": "zhàoxiàngjī"
      },
      {
          "hskclass": "3",
          "japanese": "のみ",
          "chinese": "只",
          "pinyin": "zhǐ"
      },
      {
          "hskclass": "3",
          "japanese": "真ん中",
          "chinese": "中间",
          "pinyin": "zhōngjiān"
      },
      {
          "hskclass": "3",
          "japanese": "遂に、最終的に",
          "chinese": "终于",
          "pinyin": "zhōngyú"
      },
      {
          "hskclass": "3",
          "japanese": "種類",
          "chinese": "种",
          "pinyin": "zhǒng"
      },
      {
          "hskclass": "3",
          "japanese": "重要",
          "chinese": "重要",
          "pinyin": "zhòngyào"
      },
      {
          "hskclass": "3",
          "japanese": "週末",
          "chinese": "周末",
          "pinyin": "zhōumò"
      },
      {
          "hskclass": "3",
          "japanese": "主要",
          "chinese": "主要",
          "pinyin": "zhǔyào"
      },
      {
          "hskclass": "3",
          "japanese": "祝う",
          "chinese": "祝",
          "pinyin": "zhù"
      },
      {
          "hskclass": "3",
          "japanese": "注意を払う",
          "chinese": "注意",
          "pinyin": "zhùyì"
      },
      {
          "hskclass": "3",
          "japanese": "辞書",
          "chinese": "字典",
          "pinyin": "zìdiǎn"
      },
      {
          "hskclass": "3",
          "japanese": "自分の",
          "chinese": "自己",
          "pinyin": "zìjǐ"
      },
      {
          "hskclass": "3",
          "japanese": "いつも",
          "chinese": "总是",
          "pinyin": "zǒng shì"
      },
      {
          "hskclass": "3",
          "japanese": "最近",
          "chinese": "最近",
          "pinyin": "zuìjìn"
      },
      {
          "hskclass": "3",
          "japanese": "宿題",
          "chinese": "作业",
          "pinyin": "zuòyè"
      },
      {
          "hskclass": "3",
          "japanese": "作用",
          "chinese": "作用",
          "pinyin": "zuòyòng"
      },
      {
          "hskclass": "4",
          "japanese": "愛",
          "chinese": "爱情",
          "pinyin": "àiqíng"
      },
      {
          "hskclass": "4",
          "japanese": "あんばいする、段取りをする",
          "chinese": "安排",
          "pinyin": "ānpái"
      },
      {
          "hskclass": "4",
          "japanese": "安全",
          "chinese": "安全",
          "pinyin": "ānquán"
      },
      {
          "hskclass": "4",
          "japanese": "暗い",
          "chinese": "暗",
          "pinyin": "àn"
      },
      {
          "hskclass": "4",
          "japanese": "時間通りに",
          "chinese": "按时",
          "pinyin": "ànshí"
      },
      {
          "hskclass": "4",
          "japanese": "〜によると",
          "chinese": "按照",
          "pinyin": "ànzhào"
      },
      {
          "hskclass": "4",
          "japanese": "含む",
          "chinese": "包括",
          "pinyin": "bāokuò"
      },
      {
          "hskclass": "4",
          "japanese": "保護",
          "chinese": "保护",
          "pinyin": "bǎohù"
      },
      {
          "hskclass": "4",
          "japanese": "保証",
          "chinese": "保证",
          "pinyin": "bǎozhèng"
      },
      {
          "hskclass": "4",
          "japanese": "抱える",
          "chinese": "抱",
          "pinyin": "bào"
      },
      {
          "hskclass": "4",
          "japanese": "すみません",
          "chinese": "抱歉",
          "pinyin": "bàoqiàn"
      },
      {
          "hskclass": "4",
          "japanese": "報道する",
          "chinese": "报道",
          "pinyin": "bàodào"
      },
      {
          "hskclass": "4",
          "japanese": "登録する",
          "chinese": "报名",
          "pinyin": "bàomíng"
      },
      {
          "hskclass": "4",
          "japanese": "時間",
          "chinese": "倍",
          "pinyin": "bèi"
      },
      {
          "hskclass": "4",
          "japanese": "本来、元々",
          "chinese": "本来",
          "pinyin": "běnlái"
      },
      {
          "hskclass": "4",
          "japanese": "愚か、バカ",
          "chinese": "笨",
          "pinyin": "bèn"
      },
      {
          "hskclass": "4",
          "japanese": "ノート",
          "chinese": "笔记本",
          "pinyin": "bǐjìběn"
      },
      {
          "hskclass": "4",
          "japanese": "卒業",
          "chinese": "毕业",
          "pinyin": "bìyè"
      },
      {
          "hskclass": "4",
          "japanese": "あまねく、くまなく",
          "chinese": "遍",
          "pinyin": "biàn"
      },
      {
          "hskclass": "4",
          "japanese": "標準",
          "chinese": "标准",
          "pinyin": "biāozhǔn"
      },
      {
          "hskclass": "4",
          "japanese": "表わす、示す",
          "chinese": "表达",
          "pinyin": "biǎodá"
      },
      {
          "hskclass": "4",
          "japanese": "表、フォーム",
          "chinese": "表格",
          "pinyin": "biǎogé"
      },
      {
          "hskclass": "4",
          "japanese": "表彰する",
          "chinese": "表扬",
          "pinyin": "biǎoyáng"
      },
      {
          "hskclass": "4",
          "japanese": "ビスケット、クッキー",
          "chinese": "饼干",
          "pinyin": "bǐnggān"
      },
      {
          "hskclass": "4",
          "japanese": "その他に",
          "chinese": "并且",
          "pinyin": "bìngqiě"
      },
      {
          "hskclass": "4",
          "japanese": "博士",
          "chinese": "博士",
          "pinyin": "bóshì"
      },
      {
          "hskclass": "4",
          "japanese": "だけでなく、",
          "chinese": "不但",
          "pinyin": "bùdàn"
      },
      {
          "hskclass": "4",
          "japanese": "但し",
          "chinese": "不过",
          "pinyin": "bùguò"
      },
      {
          "hskclass": "4",
          "japanese": "しなければなりません",
          "chinese": "不得不",
          "pinyin": "bùdé bù"
      },
      {
          "hskclass": "4",
          "japanese": "にもかかわらず",
          "chinese": "不管",
          "pinyin": "bùguǎn"
      },
      {
          "hskclass": "4",
          "japanese": "だけでなく",
          "chinese": "不仅",
          "pinyin": "bùjǐn"
      },
      {
          "hskclass": "4",
          "japanese": "部分",
          "chinese": "部分",
          "pinyin": "bùfèn"
      },
      {
          "hskclass": "4",
          "japanese": "拭く",
          "chinese": "擦",
          "pinyin": "cā"
      },
      {
          "hskclass": "4",
          "japanese": "推測",
          "chinese": "猜",
          "pinyin": "cāi"
      },
      {
          "hskclass": "4",
          "japanese": "材料",
          "chinese": "材料",
          "pinyin": "cáiliào"
      },
      {
          "hskclass": "4",
          "japanese": "参観",
          "chinese": "参观",
          "pinyin": "cānguān"
      },
      {
          "hskclass": "4",
          "japanese": "殆ど",
          "chinese": "差不多",
          "pinyin": "chàbùduō"
      },
      {
          "hskclass": "4",
          "japanese": "味見する",
          "chinese": "尝",
          "pinyin": "cháng"
      },
      {
          "hskclass": "4",
          "japanese": "万里の長城",
          "chinese": "长城",
          "pinyin": "chángchéng"
      },
      {
          "hskclass": "4",
          "japanese": "揚子江",
          "chinese": "长江",
          "pinyin": "chángjiāng"
      },
      {
          "hskclass": "4",
          "japanese": "場所",
          "chinese": "场",
          "pinyin": "chǎng"
      },
      {
          "hskclass": "4",
          "japanese": "上回り、超える",
          "chinese": "超过",
          "pinyin": "chāoguò"
      },
      {
          "hskclass": "4",
          "japanese": "騒々しい、うるさい",
          "chinese": "吵",
          "pinyin": "chǎo"
      },
      {
          "hskclass": "4",
          "japanese": "成功",
          "chinese": "成功",
          "pinyin": "chénggōng"
      },
      {
          "hskclass": "4",
          "japanese": "成熟",
          "chinese": "成熟",
          "pinyin": "chéngshú"
      },
      {
          "hskclass": "4",
          "japanese": "になる",
          "chinese": "成为",
          "pinyin": "chéngwéi"
      },
      {
          "hskclass": "4",
          "japanese": "誠実、正直",
          "chinese": "诚实",
          "pinyin": "chéngshí"
      },
      {
          "hskclass": "4",
          "japanese": "乗る",
          "chinese": "乘坐",
          "pinyin": "chéngzuò"
      },
      {
          "hskclass": "4",
          "japanese": "驚く",
          "chinese": "吃惊",
          "pinyin": "chījīng"
      },
      {
          "hskclass": "4",
          "japanese": "重ねて、もう一度",
          "chinese": "重新",
          "pinyin": "chóngxīn"
      },
      {
          "hskclass": "4",
          "japanese": "喫煙",
          "chinese": "抽烟",
          "pinyin": "chōuyān"
      },
      {
          "hskclass": "4",
          "japanese": "出張",
          "chinese": "出差",
          "pinyin": "chūchāi"
      },
      {
          "hskclass": "4",
          "japanese": "出発",
          "chinese": "出发",
          "pinyin": "chūfā"
      },
      {
          "hskclass": "4",
          "japanese": "生れる",
          "chinese": "出生",
          "pinyin": "chūshēng"
      },
      {
          "hskclass": "4",
          "japanese": "ファックス",
          "chinese": "传真",
          "pinyin": "chuánzhēn"
      },
      {
          "hskclass": "4",
          "japanese": "窓",
          "chinese": "窗户",
          "pinyin": "chuānghù"
      },
      {
          "hskclass": "4",
          "japanese": "辞書",
          "chinese": "词典",
          "pinyin": "cídiǎn"
      },
      {
          "hskclass": "4",
          "japanese": "これまでずっと",
          "chinese": "从来",
          "pinyin": "cónglái"
      },
      {
          "hskclass": "4",
          "japanese": "注意深くない、そそっかしい",
          "chinese": "粗心",
          "pinyin": "cūxīn"
      },
      {
          "hskclass": "4",
          "japanese": "答え",
          "chinese": "答案",
          "pinyin": "dá'àn"
      },
      {
          "hskclass": "4",
          "japanese": "身支度する、着飾る",
          "chinese": "打扮",
          "pinyin": "dǎbàn"
      },
      {
          "hskclass": "4",
          "japanese": "邪魔する、迷惑をかける",
          "chinese": "打扰",
          "pinyin": "dǎrǎo"
      },
      {
          "hskclass": "4",
          "japanese": "印刷する",
          "chinese": "打印",
          "pinyin": "dǎyìn"
      },
      {
          "hskclass": "4",
          "japanese": "割引する",
          "chinese": "打折",
          "pinyin": "dǎzhé"
      },
      {
          "hskclass": "4",
          "japanese": "注射をする",
          "chinese": "打针",
          "pinyin": "dǎzhēn"
      },
      {
          "hskclass": "4",
          "japanese": "大体の、おおよその",
          "chinese": "大概",
          "pinyin": "dàgài"
      },
      {
          "hskclass": "4",
          "japanese": "大使館",
          "chinese": "大使馆",
          "pinyin": "dàshǐ guǎn"
      },
      {
          "hskclass": "4",
          "japanese": "大体、およそ",
          "chinese": "大约",
          "pinyin": "dàyuē"
      },
      {
          "hskclass": "4",
          "japanese": "着る",
          "chinese": "戴",
          "pinyin": "dài"
      },
      {
          "hskclass": "4",
          "japanese": "代表",
          "chinese": "代表",
          "pinyin": "dàibiǎo"
      },
      {
          "hskclass": "4",
          "japanese": "代える、代わりをする",
          "chinese": "代替",
          "pinyin": "dàitì"
      },
      {
          "hskclass": "4",
          "japanese": "医師",
          "chinese": "大夫",
          "pinyin": "dàfū"
      },
      {
          "hskclass": "4",
          "japanese": "適合する",
          "chinese": "当",
          "pinyin": "dāng"
      },
      {
          "hskclass": "4",
          "japanese": "地元",
          "chinese": "当地",
          "pinyin": "dāng dì"
      },
      {
          "hskclass": "4",
          "japanese": "地方",
          "chinese": "当时",
          "pinyin": "dāngshí"
      },
      {
          "hskclass": "4",
          "japanese": "ナイフ",
          "chinese": "刀",
          "pinyin": "dāo"
      },
      {
          "hskclass": "4",
          "japanese": "ツアーガイド",
          "chinese": "导游",
          "pinyin": "dǎoyóu"
      },
      {
          "hskclass": "4",
          "japanese": "至るところ、どこでも",
          "chinese": "到处",
          "pinyin": "dàochù"
      },
      {
          "hskclass": "4",
          "japanese": "とうとう、ついに",
          "chinese": "到底",
          "pinyin": "dàodǐ"
      },
      {
          "hskclass": "4",
          "japanese": "わびる、おわびを言う",
          "chinese": "道歉",
          "pinyin": "dàoqiàn"
      },
      {
          "hskclass": "4",
          "japanese": "得意になる、したり顔をする",
          "chinese": "得意",
          "pinyin": "déyì"
      },
      {
          "hskclass": "4",
          "japanese": "得る",
          "chinese": "得",
          "pinyin": "dé"
      },
      {
          "hskclass": "4",
          "japanese": "待つ",
          "chinese": "等",
          "pinyin": "děng"
      },
      {
          "hskclass": "4",
          "japanese": "底",
          "chinese": "底",
          "pinyin": "dǐ"
      },
      {
          "hskclass": "4",
          "japanese": "地球",
          "chinese": "地球",
          "pinyin": "dìqiú"
      },
      {
          "hskclass": "4",
          "japanese": "住所",
          "chinese": "地址",
          "pinyin": "dìzhǐ"
      },
      {
          "hskclass": "4",
          "japanese": "落とす",
          "chinese": "掉",
          "pinyin": "diào"
      },
      {
          "hskclass": "4",
          "japanese": "調査",
          "chinese": "调查",
          "pinyin": "diàochá"
      },
      {
          "hskclass": "4",
          "japanese": "投げる",
          "chinese": "丢",
          "pinyin": "diū"
      },
      {
          "hskclass": "4",
          "japanese": "動作、アクション",
          "chinese": "动作",
          "pinyin": "dòngzuò"
      },
      {
          "hskclass": "4",
          "japanese": "交通渋滞",
          "chinese": "堵车",
          "pinyin": "dǔchē"
      },
      {
          "hskclass": "4",
          "japanese": "腹",
          "chinese": "肚子",
          "pinyin": "dùzi"
      },
      {
          "hskclass": "4",
          "japanese": "断つ",
          "chinese": "断",
          "pinyin": "duàn"
      },
      {
          "hskclass": "4",
          "japanese": "正しい",
          "chinese": "对",
          "pinyin": "duì"
      },
      {
          "hskclass": "4",
          "japanese": "対話",
          "chinese": "对话",
          "pinyin": "duì huà"
      },
      {
          "hskclass": "4",
          "japanese": "逆の",
          "chinese": "对面",
          "pinyin": "duìmiàn"
      },
      {
          "hskclass": "4",
          "japanese": "止まる",
          "chinese": "顿",
          "pinyin": "dùn"
      },
      {
          "hskclass": "4",
          "japanese": "花",
          "chinese": "朵",
          "pinyin": "duǒ"
      },
      {
          "hskclass": "4",
          "japanese": "〜と",
          "chinese": "而",
          "pinyin": "ér"
      },
      {
          "hskclass": "4",
          "japanese": "子供",
          "chinese": "儿童",
          "pinyin": "értóng"
      },
      {
          "hskclass": "4",
          "japanese": "髪",
          "chinese": "发",
          "pinyin": "fā"
      },
      {
          "hskclass": "4",
          "japanese": "発生する",
          "chinese": "发生",
          "pinyin": "fāshēng"
      },
      {
          "hskclass": "4",
          "japanese": "発展",
          "chinese": "发展",
          "pinyin": "fāzhǎn"
      },
      {
          "hskclass": "4",
          "japanese": "法律",
          "chinese": "法律",
          "pinyin": "fǎlǜ"
      },
      {
          "hskclass": "4",
          "japanese": "翻訳",
          "chinese": "翻译",
          "pinyin": "fānyì"
      },
      {
          "hskclass": "4",
          "japanese": "思い悩む、思い煩う",
          "chinese": "烦恼",
          "pinyin": "fánnǎo"
      },
      {
          "hskclass": "4",
          "japanese": "反対",
          "chinese": "反对",
          "pinyin": "fǎnduì"
      },
      {
          "hskclass": "4",
          "japanese": "反応",
          "chinese": "反应",
          "pinyin": "fǎnyìng"
      },
      {
          "hskclass": "4",
          "japanese": "範囲",
          "chinese": "范围",
          "pinyin": "fànwéi"
      },
      {
          "hskclass": "4",
          "japanese": "方法",
          "chinese": "方法",
          "pinyin": "fāngfǎ"
      },
      {
          "hskclass": "4",
          "japanese": "方面、領域",
          "chinese": "方面",
          "pinyin": "fāngmiàn"
      },
      {
          "hskclass": "4",
          "japanese": "方向",
          "chinese": "方向",
          "pinyin": "fāngxiàng"
      },
      {
          "hskclass": "4",
          "japanese": "訪れる",
          "chinese": "访问",
          "pinyin": "fǎngwèn"
      },
      {
          "hskclass": "4",
          "japanese": "諦める",
          "chinese": "放弃",
          "pinyin": "fàngqì"
      },
      {
          "hskclass": "4",
          "japanese": "夏休み",
          "chinese": "放暑假",
          "pinyin": "fàng shǔjià"
      },
      {
          "hskclass": "4",
          "japanese": "〜分の〜 （分数を表す）",
          "chinese": "〜分之〜",
          "pinyin": "〜fēn zhī〜"
      },
      {
          "hskclass": "4",
          "japanese": "〜人分の、〜人前の",
          "chinese": "份",
          "pinyin": "fèn"
      },
      {
          "hskclass": "4",
          "japanese": "豊富",
          "chinese": "丰富",
          "pinyin": "fēngfù"
      },
      {
          "hskclass": "4",
          "japanese": "風景",
          "chinese": "风景",
          "pinyin": "fēngjǐng"
      },
      {
          "hskclass": "4",
          "japanese": "その他",
          "chinese": "否则",
          "pinyin": "fǒuzé"
      },
      {
          "hskclass": "4",
          "japanese": "ぴったり合う、合致する",
          "chinese": "符合",
          "pinyin": "fúhé"
      },
      {
          "hskclass": "4",
          "japanese": "豊か",
          "chinese": "富",
          "pinyin": "fù"
      },
      {
          "hskclass": "4",
          "japanese": "お父さん",
          "chinese": "父亲",
          "pinyin": "fùqīn"
      },
      {
          "hskclass": "4",
          "japanese": "コピー",
          "chinese": "复印",
          "pinyin": "fùyìn"
      },
      {
          "hskclass": "4",
          "japanese": "複雑、コンプレックス",
          "chinese": "复杂",
          "pinyin": "fùzá"
      },
      {
          "hskclass": "4",
          "japanese": "責任を負う",
          "chinese": "负责",
          "pinyin": "fùzé"
      },
      {
          "hskclass": "4",
          "japanese": "変更する",
          "chinese": "改变",
          "pinyin": "gǎibiàn"
      },
      {
          "hskclass": "4",
          "japanese": "乾杯",
          "chinese": "干杯",
          "pinyin": "gānbēi"
      },
      {
          "hskclass": "4",
          "japanese": "乾燥",
          "chinese": "干燥",
          "pinyin": "gānzào"
      },
      {
          "hskclass": "4",
          "japanese": "感動する",
          "chinese": "感动",
          "pinyin": "gǎndòng"
      },
      {
          "hskclass": "4",
          "japanese": "感じる",
          "chinese": "感觉",
          "pinyin": "gǎnjué"
      },
      {
          "hskclass": "4",
          "japanese": "気持ち、感情",
          "chinese": "感情",
          "pinyin": "gǎnqíng"
      },
      {
          "hskclass": "4",
          "japanese": "感謝",
          "chinese": "感谢",
          "pinyin": "gǎnxiè"
      },
      {
          "hskclass": "4",
          "japanese": "干す",
          "chinese": "干",
          "pinyin": "gàn"
      },
      {
          "hskclass": "4",
          "japanese": "ついさっき、たったいま",
          "chinese": "刚刚",
          "pinyin": "gānggāng"
      },
      {
          "hskclass": "4",
          "japanese": "高い、高級な",
          "chinese": "高级",
          "pinyin": "gāojí"
      },
      {
          "hskclass": "4",
          "japanese": "各",
          "chinese": "各",
          "pinyin": "gè"
      },
      {
          "hskclass": "4",
          "japanese": "身長、背格好",
          "chinese": "个子",
          "pinyin": "gè zi"
      },
      {
          "hskclass": "4",
          "japanese": "キロ、km",
          "chinese": "公里",
          "pinyin": "gōnglǐ"
      },
      {
          "hskclass": "4",
          "japanese": "工具",
          "chinese": "工具",
          "pinyin": "gōngjù"
      },
      {
          "hskclass": "4",
          "japanese": "賃金",
          "chinese": "工资",
          "pinyin": "gōngzī"
      },
      {
          "hskclass": "4",
          "japanese": "共同の、共通の",
          "chinese": "共同",
          "pinyin": "gòngtóng"
      },
      {
          "hskclass": "4",
          "japanese": "十分に",
          "chinese": "够",
          "pinyin": "gòu"
      },
      {
          "hskclass": "4",
          "japanese": "ショッピング",
          "chinese": "购物",
          "pinyin": "gòuwù"
      },
      {
          "hskclass": "4",
          "japanese": "孤独",
          "chinese": "孤单",
          "pinyin": "gūdān"
      },
      {
          "hskclass": "4",
          "japanese": "推量する、見積もる",
          "chinese": "估计",
          "pinyin": "gūjì"
      },
      {
          "hskclass": "4",
          "japanese": "激励する、励ます",
          "chinese": "鼓励",
          "pinyin": "gǔlì"
      },
      {
          "hskclass": "4",
          "japanese": "拍手",
          "chinese": "鼓掌",
          "pinyin": "gǔzhǎng"
      },
      {
          "hskclass": "4",
          "japanese": "顧客",
          "chinese": "顾客",
          "pinyin": "gùkè"
      },
      {
          "hskclass": "4",
          "japanese": "わざと",
          "chinese": "故意",
          "pinyin": "gùyì"
      },
      {
          "hskclass": "4",
          "japanese": "掛ける、つるす",
          "chinese": "挂",
          "pinyin": "guà"
      },
      {
          "hskclass": "4",
          "japanese": "要、鍵",
          "chinese": "关键",
          "pinyin": "guānjiàn"
      },
      {
          "hskclass": "4",
          "japanese": "聴衆",
          "chinese": "观众",
          "pinyin": "guānzhòng"
      },
      {
          "hskclass": "4",
          "japanese": "管理",
          "chinese": "管理",
          "pinyin": "guǎnlǐ"
      },
      {
          "hskclass": "4",
          "japanese": "ライト",
          "chinese": "光",
          "pinyin": "guāng"
      },
      {
          "hskclass": "4",
          "japanese": "放送",
          "chinese": "广播",
          "pinyin": "guǎngbò"
      },
      {
          "hskclass": "4",
          "japanese": "広告",
          "chinese": "广告",
          "pinyin": "guǎnggào"
      },
      {
          "hskclass": "4",
          "japanese": "訪問",
          "chinese": "逛",
          "pinyin": "guàng"
      },
      {
          "hskclass": "4",
          "japanese": "規定",
          "chinese": "规定",
          "pinyin": "guīdìng"
      },
      {
          "hskclass": "4",
          "japanese": "国際",
          "chinese": "国际",
          "pinyin": "guójì"
      },
      {
          "hskclass": "4",
          "japanese": "案の定、果たせるかな",
          "chinese": "果然",
          "pinyin": "guǒ rán"
      },
      {
          "hskclass": "4",
          "japanese": "～したことがある",
          "chinese": "过",
          "pinyin": "guò"
      },
      {
          "hskclass": "4",
          "japanese": "プロセス、過程",
          "chinese": "过程",
          "pinyin": "guòchéng"
      },
      {
          "hskclass": "4",
          "japanese": "海洋",
          "chinese": "海洋",
          "pinyin": "hǎiyáng"
      },
      {
          "hskclass": "4",
          "japanese": "シャイ、恥ずかしがる",
          "chinese": "害羞",
          "pinyin": "hàixiū"
      },
      {
          "hskclass": "4",
          "japanese": "冬休み",
          "chinese": "寒假",
          "pinyin": "hánjià"
      },
      {
          "hskclass": "4",
          "japanese": "汗",
          "chinese": "汗",
          "pinyin": "hàn"
      },
      {
          "hskclass": "4",
          "japanese": "フライト",
          "chinese": "航班",
          "pinyin": "hángbān"
      },
      {
          "hskclass": "4",
          "japanese": "利益",
          "chinese": "好处",
          "pinyin": "hǎochù"
      },
      {
          "hskclass": "4",
          "japanese": "～のような",
          "chinese": "好像",
          "pinyin": "hǎoxiàng"
      },
      {
          "hskclass": "4",
          "japanese": "番号",
          "chinese": "号码",
          "pinyin": "hàomǎ"
      },
      {
          "hskclass": "4",
          "japanese": "合格する",
          "chinese": "合格",
          "pinyin": "hégé"
      },
      {
          "hskclass": "4",
          "japanese": "適当である、ちょうどよい",
          "chinese": "合适",
          "pinyin": "héshì"
      },
      {
          "hskclass": "4",
          "japanese": "箱",
          "chinese": "盒子",
          "pinyin": "hézi"
      },
      {
          "hskclass": "4",
          "japanese": "猿",
          "chinese": "猴子",
          "pinyin": "hóuzi"
      },
      {
          "hskclass": "4",
          "japanese": "厚い",
          "chinese": "厚",
          "pinyin": "hòu"
      },
      {
          "hskclass": "4",
          "japanese": "後悔",
          "chinese": "后悔",
          "pinyin": "hòuhuǐ"
      },
      {
          "hskclass": "4",
          "japanese": "その後",
          "chinese": "后来",
          "pinyin": "hòulái"
      },
      {
          "hskclass": "4",
          "japanese": "突然",
          "chinese": "忽然",
          "pinyin": "hūrán"
      },
      {
          "hskclass": "4",
          "japanese": "看護師",
          "chinese": "护士",
          "pinyin": "hùshì"
      },
      {
          "hskclass": "4",
          "japanese": "互いに",
          "chinese": "互相",
          "pinyin": "hùxiāng"
      },
      {
          "hskclass": "4",
          "japanese": "疑いを抱く、疑う",
          "chinese": "怀疑",
          "pinyin": "huáiyí"
      },
      {
          "hskclass": "4",
          "japanese": "記憶",
          "chinese": "回忆",
          "pinyin": "huíyì"
      },
      {
          "hskclass": "4",
          "japanese": "活動",
          "chinese": "活动",
          "pinyin": "huódòng"
      },
      {
          "hskclass": "4",
          "japanese": "活発",
          "chinese": "活泼",
          "pinyin": "huópō"
      },
      {
          "hskclass": "4",
          "japanese": "火災",
          "chinese": "火",
          "pinyin": "huǒ"
      },
      {
          "hskclass": "4",
          "japanese": "獲得する、得る",
          "chinese": "获得",
          "pinyin": "huòdé"
      },
      {
          "hskclass": "4",
          "japanese": "基礎、土台",
          "chinese": "基础",
          "pinyin": "jīchǔ"
      },
      {
          "hskclass": "4",
          "japanese": "興奮する、感動する",
          "chinese": "激动",
          "pinyin": "jīdòng"
      },
      {
          "hskclass": "4",
          "japanese": "積極的な、ポジティブな",
          "chinese": "积极",
          "pinyin": "jījí"
      },
      {
          "hskclass": "4",
          "japanese": "蓄積",
          "chinese": "积累",
          "pinyin": "jīlěi"
      },
      {
          "hskclass": "4",
          "japanese": "極めて",
          "chinese": "极其",
          "pinyin": "jíqí"
      },
      {
          "hskclass": "4",
          "japanese": "集合する、集まる",
          "chinese": "集合",
          "pinyin": "jíhé"
      },
      {
          "hskclass": "4",
          "japanese": "適時である",
          "chinese": "及时",
          "pinyin": "jíshí"
      },
      {
          "hskclass": "4",
          "japanese": "たとえ〜であっても",
          "chinese": "即使",
          "pinyin": "jíshǐ"
      },
      {
          "hskclass": "4",
          "japanese": "送る",
          "chinese": "寄",
          "pinyin": "jì"
      },
      {
          "hskclass": "4",
          "japanese": "記者",
          "chinese": "记者",
          "pinyin": "jìzhě"
      },
      {
          "hskclass": "4",
          "japanese": "計画",
          "chinese": "计划",
          "pinyin": "jìhuà"
      },
      {
          "hskclass": "4",
          "japanese": "〜するからには",
          "chinese": "既然",
          "pinyin": "jìrán"
      },
      {
          "hskclass": "4",
          "japanese": "技術、テクノロジー",
          "chinese": "技术",
          "pinyin": "jìshù"
      },
      {
          "hskclass": "4",
          "japanese": "継続する",
          "chinese": "继续",
          "pinyin": "jìxù"
      },
      {
          "hskclass": "4",
          "japanese": "家具",
          "chinese": "家具",
          "pinyin": "jiājù"
      },
      {
          "hskclass": "4",
          "japanese": "残業",
          "chinese": "加班",
          "pinyin": "jiābān"
      },
      {
          "hskclass": "4",
          "japanese": "ガソリンスタンド",
          "chinese": "加油站",
          "pinyin": "jiāyóu zhàn"
      },
      {
          "hskclass": "4",
          "japanese": "偽物",
          "chinese": "假",
          "pinyin": "jiǎ"
      },
      {
          "hskclass": "4",
          "japanese": "価格",
          "chinese": "价格",
          "pinyin": "jiàgé"
      },
      {
          "hskclass": "4",
          "japanese": "やり通す、堅持する",
          "chinese": "坚持",
          "pinyin": "jiānchí"
      },
      {
          "hskclass": "4",
          "japanese": "ダイエットする",
          "chinese": "减肥",
          "pinyin": "jiǎnféi"
      },
      {
          "hskclass": "4",
          "japanese": "減少",
          "chinese": "减少",
          "pinyin": "jiǎnshǎo"
      },
      {
          "hskclass": "4",
          "japanese": "将来",
          "chinese": "将来",
          "pinyin": "jiānglái"
      },
      {
          "hskclass": "4",
          "japanese": "ボーナス",
          "chinese": "奖金",
          "pinyin": "jiǎngjīn"
      },
      {
          "hskclass": "4",
          "japanese": "下がる、低下する",
          "chinese": "降低",
          "pinyin": "jiàngdī"
      },
      {
          "hskclass": "4",
          "japanese": "つきあう、交わる",
          "chinese": "交",
          "pinyin": "jiāo"
      },
      {
          "hskclass": "4",
          "japanese": "交流する、交換する",
          "chinese": "交流",
          "pinyin": "jiāoliú"
      },
      {
          "hskclass": "4",
          "japanese": "交通、トラフィック",
          "chinese": "交通",
          "pinyin": "jiāotōng"
      },
      {
          "hskclass": "4",
          "japanese": "誇りに思う",
          "chinese": "骄傲",
          "pinyin": "jiāo'ào"
      },
      {
          "hskclass": "4",
          "japanese": "餃子",
          "chinese": "饺子",
          "pinyin": "jiǎozi"
      },
      {
          "hskclass": "4",
          "japanese": "教授",
          "chinese": "教授",
          "pinyin": "jiàoshòu"
      },
      {
          "hskclass": "4",
          "japanese": "教育",
          "chinese": "教育",
          "pinyin": "jiàoyù"
      },
      {
          "hskclass": "4",
          "japanese": "受け入れる、受け取る",
          "chinese": "接受",
          "pinyin": "jiēshòu"
      },
      {
          "hskclass": "4",
          "japanese": "結果",
          "chinese": "结果",
          "pinyin": "jiéguǒ"
      },
      {
          "hskclass": "4",
          "japanese": "節約する",
          "chinese": "节约",
          "pinyin": "jiéyuē"
      },
      {
          "hskclass": "4",
          "japanese": "説明する、解釈する",
          "chinese": "解释",
          "pinyin": "jiěshì"
      },
      {
          "hskclass": "4",
          "japanese": "〜にもかかわらず",
          "chinese": "尽管",
          "pinyin": "jǐnguǎn"
      },
      {
          "hskclass": "4",
          "japanese": "緊張",
          "chinese": "紧张",
          "pinyin": "jǐnzhāng"
      },
      {
          "hskclass": "4",
          "japanese": "進行する、行なわれる",
          "chinese": "进行",
          "pinyin": "jìnxíng"
      },
      {
          "hskclass": "4",
          "japanese": "禁止",
          "chinese": "禁止",
          "pinyin": "jìnzhǐ"
      },
      {
          "hskclass": "4",
          "japanese": "すばらしい、見事である",
          "chinese": "精彩",
          "pinyin": "jīngcǎi"
      },
      {
          "hskclass": "4",
          "japanese": "精神",
          "chinese": "精神",
          "pinyin": "jīngshén"
      },
      {
          "hskclass": "4",
          "japanese": "経済",
          "chinese": "经济",
          "pinyin": "jīngjì"
      },
      {
          "hskclass": "4",
          "japanese": "経歴",
          "chinese": "经历",
          "pinyin": "jīnglì"
      },
      {
          "hskclass": "4",
          "japanese": "経験",
          "chinese": "经验",
          "pinyin": "jīngyàn"
      },
      {
          "hskclass": "4",
          "japanese": "中国の劇",
          "chinese": "京剧",
          "pinyin": "jīngjù"
      },
      {
          "hskclass": "4",
          "japanese": "警察",
          "chinese": "警察",
          "pinyin": "jǐngchá"
      },
      {
          "hskclass": "4",
          "japanese": "意外にも、なんと",
          "chinese": "竟然",
          "pinyin": "jìngrán"
      },
      {
          "hskclass": "4",
          "japanese": "競争",
          "chinese": "竞争",
          "pinyin": "jìngzhēng"
      },
      {
          "hskclass": "4",
          "japanese": "鏡",
          "chinese": "镜子",
          "pinyin": "jìngzi"
      },
      {
          "hskclass": "4",
          "japanese": "結局のところ",
          "chinese": "究竟",
          "pinyin": "jiùjìng"
      },
      {
          "hskclass": "4",
          "japanese": "挙行する、開催する",
          "chinese": "举办",
          "pinyin": "jǔbàn"
      },
      {
          "hskclass": "4",
          "japanese": "拒絶",
          "chinese": "拒绝",
          "pinyin": "jùjué"
      },
      {
          "hskclass": "4",
          "japanese": "距離",
          "chinese": "距离",
          "pinyin": "jùlí"
      },
      {
          "hskclass": "4",
          "japanese": "冗談を言う",
          "chinese": "开玩笑",
          "pinyin": "kāiwánxiào"
      },
      {
          "hskclass": "4",
          "japanese": "見方、見解",
          "chinese": "看法",
          "pinyin": "kànfǎ"
      },
      {
          "hskclass": "4",
          "japanese": "考慮する、考える",
          "chinese": "考虑",
          "pinyin": "kǎolǜ"
      },
      {
          "hskclass": "4",
          "japanese": "木",
          "chinese": "棵",
          "pinyin": "kē"
      },
      {
          "hskclass": "4",
          "japanese": "科学",
          "chinese": "科学",
          "pinyin": "kēxué"
      },
      {
          "hskclass": "4",
          "japanese": "咳",
          "chinese": "咳嗽",
          "pinyin": "késòu"
      },
      {
          "hskclass": "4",
          "japanese": "哀れである、かわいそうである",
          "chinese": "可怜",
          "pinyin": "kělián"
      },
      {
          "hskclass": "4",
          "japanese": "しかし",
          "chinese": "可是",
          "pinyin": "kěshì"
      },
      {
          "hskclass": "4",
          "japanese": "惜しい、残念である",
          "chinese": "可惜",
          "pinyin": "kěxí"
      },
      {
          "hskclass": "4",
          "japanese": "肯定する",
          "chinese": "肯定",
          "pinyin": "kěndìng"
      },
      {
          "hskclass": "4",
          "japanese": "空気",
          "chinese": "空气",
          "pinyin": "kōngqì"
      },
      {
          "hskclass": "4",
          "japanese": "恐がる",
          "chinese": "恐怕",
          "pinyin": "kǒngpà"
      },
      {
          "hskclass": "4",
          "japanese": "苦い",
          "chinese": "苦",
          "pinyin": "kǔ"
      },
      {
          "hskclass": "4",
          "japanese": "広い",
          "chinese": "宽",
          "pinyin": "kuān"
      },
      {
          "hskclass": "4",
          "japanese": "眠い",
          "chinese": "困",
          "pinyin": "kùn"
      },
      {
          "hskclass": "4",
          "japanese": "困難",
          "chinese": "困难",
          "pinyin": "kùnnán"
      },
      {
          "hskclass": "4",
          "japanese": "拡大する、広げる",
          "chinese": "扩大",
          "pinyin": "kuòdà"
      },
      {
          "hskclass": "4",
          "japanese": "引く",
          "chinese": "拉",
          "pinyin": "lā"
      },
      {
          "hskclass": "4",
          "japanese": "ゴミ",
          "chinese": "垃圾桶",
          "pinyin": "lèsè tǒng"
      },
      {
          "hskclass": "4",
          "japanese": "辛い",
          "chinese": "辣",
          "pinyin": "là"
      },
      {
          "hskclass": "4",
          "japanese": "間に合わない",
          "chinese": "来不及",
          "pinyin": "láibují"
      },
      {
          "hskclass": "4",
          "japanese": "間に合う",
          "chinese": "来得及",
          "pinyin": "láidéjí"
      },
      {
          "hskclass": "4",
          "japanese": "怠惰である",
          "chinese": "懒",
          "pinyin": "lǎn"
      },
      {
          "hskclass": "4",
          "japanese": "浪費",
          "chinese": "浪费",
          "pinyin": "làngfèi"
      },
      {
          "hskclass": "4",
          "japanese": "浪漫",
          "chinese": "浪漫",
          "pinyin": "làngmàn"
      },
      {
          "hskclass": "4",
          "japanese": "虎",
          "chinese": "老虎",
          "pinyin": "lǎohǔ"
      },
      {
          "hskclass": "4",
          "japanese": "冷静",
          "chinese": "冷静",
          "pinyin": "lěngjìng"
      },
      {
          "hskclass": "4",
          "japanese": "散髪する",
          "chinese": "理发",
          "pinyin": "lǐfǎ"
      },
      {
          "hskclass": "4",
          "japanese": "理解",
          "chinese": "理解",
          "pinyin": "lǐjiě"
      },
      {
          "hskclass": "4",
          "japanese": "理想的",
          "chinese": "理想",
          "pinyin": "lǐxiǎng"
      },
      {
          "hskclass": "4",
          "japanese": "礼儀",
          "chinese": "礼貌",
          "pinyin": "lǐmào"
      },
      {
          "hskclass": "4",
          "japanese": "すごい",
          "chinese": "厉害",
          "pinyin": "lìhài"
      },
      {
          "hskclass": "4",
          "japanese": "力、体力",
          "chinese": "力气",
          "pinyin": "lìqì"
      },
      {
          "hskclass": "4",
          "japanese": "例えば",
          "chinese": "例如",
          "pinyin": "lìrú"
      },
      {
          "hskclass": "4",
          "japanese": "どちらも",
          "chinese": "俩",
          "pinyin": "liǎ"
      },
      {
          "hskclass": "4",
          "japanese": "つながる、連なる",
          "chinese": "连",
          "pinyin": "lián"
      },
      {
          "hskclass": "4",
          "japanese": "結びつく、関連する",
          "chinese": "联系",
          "pinyin": "liánxì"
      },
      {
          "hskclass": "4",
          "japanese": "涼しい",
          "chinese": "凉快",
          "pinyin": "liángkuai"
      },
      {
          "hskclass": "4",
          "japanese": "明るい",
          "chinese": "亮",
          "pinyin": "liàng"
      },
      {
          "hskclass": "4",
          "japanese": "話す",
          "chinese": "聊天",
          "pinyin": "liáotiān"
      },
      {
          "hskclass": "4",
          "japanese": "別の、ほかの",
          "chinese": "另外",
          "pinyin": "lìngwài"
      },
      {
          "hskclass": "4",
          "japanese": "とどまる、引き止める",
          "chinese": "留",
          "pinyin": "liú"
      },
      {
          "hskclass": "4",
          "japanese": "留学",
          "chinese": "留学",
          "pinyin": "liúxué"
      },
      {
          "hskclass": "4",
          "japanese": "注ぐ、涕涙する",
          "chinese": "流泪",
          "pinyin": "liúlèi"
      },
      {
          "hskclass": "4",
          "japanese": "流暢",
          "chinese": "流利",
          "pinyin": "liúlì"
      },
      {
          "hskclass": "4",
          "japanese": "流行っている",
          "chinese": "流行",
          "pinyin": "liúxíng"
      },
      {
          "hskclass": "4",
          "japanese": "秩序のない、乱れている",
          "chinese": "乱",
          "pinyin": "luàn"
      },
      {
          "hskclass": "4",
          "japanese": "弁護士",
          "chinese": "律师",
          "pinyin": "lǜshī"
      },
      {
          "hskclass": "4",
          "japanese": "煩わしい、面倒である",
          "chinese": "麻烦",
          "pinyin": "máfan"
      },
      {
          "hskclass": "4",
          "japanese": "いい加減である、なおざりである",
          "chinese": "马虎",
          "pinyin": "mǎhǔ"
      },
      {
          "hskclass": "4",
          "japanese": "満ちている、いっぱいである",
          "chinese": "满",
          "pinyin": "mǎn"
      },
      {
          "hskclass": "4",
          "japanese": "タオル",
          "chinese": "毛巾",
          "pinyin": "máojīn"
      },
      {
          "hskclass": "4",
          "japanese": "美しい",
          "chinese": "美丽",
          "pinyin": "měilì"
      },
      {
          "hskclass": "4",
          "japanese": "夢",
          "chinese": "梦",
          "pinyin": "mèng"
      },
      {
          "hskclass": "4",
          "japanese": "パスワード",
          "chinese": "密码",
          "pinyin": "mìmǎ"
      },
      {
          "hskclass": "4",
          "japanese": "費用を免除する、無料にする",
          "chinese": "免费",
          "pinyin": "miǎnfèi"
      },
      {
          "hskclass": "4",
          "japanese": "国家、民族",
          "chinese": "民族",
          "pinyin": "mínzú"
      },
      {
          "hskclass": "4",
          "japanese": "母",
          "chinese": "母亲",
          "pinyin": "mǔqīn"
      },
      {
          "hskclass": "4",
          "japanese": "目的",
          "chinese": "目的",
          "pinyin": "mùdì"
      },
      {
          "hskclass": "4",
          "japanese": "辛抱強い、我慢強い",
          "chinese": "耐心",
          "pinyin": "nàixīn"
      },
      {
          "hskclass": "4",
          "japanese": "まさか〜ではあるまい",
          "chinese": "难道",
          "pinyin": "nándào"
      },
      {
          "hskclass": "4",
          "japanese": "苦しい、つらい",
          "chinese": "难受",
          "pinyin": "nánshòu"
      },
      {
          "hskclass": "4",
          "japanese": "以内",
          "chinese": "内",
          "pinyin": "nèi"
      },
      {
          "hskclass": "4",
          "japanese": "内容、コンテンツ",
          "chinese": "内容",
          "pinyin": "nèiróng"
      },
      {
          "hskclass": "4",
          "japanese": "能力",
          "chinese": "能力",
          "pinyin": "nénglì"
      },
      {
          "hskclass": "4",
          "japanese": "年齢",
          "chinese": "年龄",
          "pinyin": "niánlíng"
      },
      {
          "hskclass": "4",
          "japanese": "農村、田舎",
          "chinese": "农村",
          "pinyin": "nóngcūn"
      },
      {
          "hskclass": "4",
          "japanese": "路地、する",
          "chinese": "弄",
          "pinyin": "nòng"
      },
      {
          "hskclass": "4",
          "japanese": "暖かい",
          "chinese": "暖和",
          "pinyin": "nuǎnhuo"
      },
      {
          "hskclass": "4",
          "japanese": "時には",
          "chinese": "偶尔",
          "pinyin": "ǒu'ěr"
      },
      {
          "hskclass": "4",
          "japanese": "配列する",
          "chinese": "排列",
          "pinyin": "páiliè"
      },
      {
          "hskclass": "4",
          "japanese": "判断する、断定する",
          "chinese": "判断",
          "pinyin": "pànduàn"
      },
      {
          "hskclass": "4",
          "japanese": "同伴する、付き添う",
          "chinese": "陪",
          "pinyin": "péi"
      },
      {
          "hskclass": "4",
          "japanese": "批判する",
          "chinese": "批评",
          "pinyin": "pīpíng"
      },
      {
          "hskclass": "4",
          "japanese": "皮膚",
          "chinese": "皮肤",
          "pinyin": "pífū"
      },
      {
          "hskclass": "4",
          "japanese": "気性、性質",
          "chinese": "脾气",
          "pinyin": "píqì"
      },
      {
          "hskclass": "4",
          "japanese": "編、篇",
          "chinese": "篇",
          "pinyin": "piān"
      },
      {
          "hskclass": "4",
          "japanese": "だます、欺く",
          "chinese": "骗",
          "pinyin": "piàn"
      },
      {
          "hskclass": "4",
          "japanese": "卓球",
          "chinese": "乒乓球",
          "pinyin": "pīngpāng qiú"
      },
      {
          "hskclass": "4",
          "japanese": "通常、いつも",
          "chinese": "平时",
          "pinyin": "píngshí"
      },
      {
          "hskclass": "4",
          "japanese": "瓶、ボトル",
          "chinese": "瓶子",
          "pinyin": "píngzi"
      },
      {
          "hskclass": "4",
          "japanese": "壊す",
          "chinese": "破",
          "pinyin": "pò"
      },
      {
          "hskclass": "4",
          "japanese": "普遍的である",
          "chinese": "普遍",
          "pinyin": "pǔbiàn"
      },
      {
          "hskclass": "4",
          "japanese": "次、その次",
          "chinese": "其次",
          "pinyin": "qícì"
      },
      {
          "hskclass": "4",
          "japanese": "その中、そのう",
          "chinese": "其中",
          "pinyin": "qízhōng"
      },
      {
          "hskclass": "4",
          "japanese": "離陸",
          "chinese": "起飞",
          "pinyin": "qǐfēi"
      },
      {
          "hskclass": "4",
          "japanese": "起き上がる、起きて座る",
          "chinese": "起来",
          "pinyin": "qǐlái"
      },
      {
          "hskclass": "4",
          "japanese": "気候",
          "chinese": "气候",
          "pinyin": "qìhòu"
      },
      {
          "hskclass": "4",
          "japanese": "ぜひ、きっと",
          "chinese": "千万",
          "pinyin": "qiān wàn"
      },
      {
          "hskclass": "4",
          "japanese": "査証、ビザ．",
          "chinese": "签证",
          "pinyin": "qiānzhèng"
      },
      {
          "hskclass": "4",
          "japanese": "壁",
          "chinese": "墙",
          "pinyin": "qiáng"
      },
      {
          "hskclass": "4",
          "japanese": "ノック",
          "chinese": "敲",
          "pinyin": "qiāo"
      },
      {
          "hskclass": "4",
          "japanese": "橋",
          "chinese": "桥",
          "pinyin": "qiáo"
      },
      {
          "hskclass": "4",
          "japanese": "チョコレート",
          "chinese": "巧克力",
          "pinyin": "qiǎokèlì"
      },
      {
          "hskclass": "4",
          "japanese": "親戚、親類．",
          "chinese": "亲戚",
          "pinyin": "qīnqī"
      },
      {
          "hskclass": "4",
          "japanese": "軽い",
          "chinese": "轻",
          "pinyin": "qīng"
      },
      {
          "hskclass": "4",
          "japanese": "リラックス",
          "chinese": "轻松",
          "pinyin": "qīngsōng"
      },
      {
          "hskclass": "4",
          "japanese": "状況、事態",
          "chinese": "情况",
          "pinyin": "qíngkuàng"
      },
      {
          "hskclass": "4",
          "japanese": "休暇をもらう、休みを取る",
          "chinese": "请假",
          "pinyin": "qǐngjià"
      },
      {
          "hskclass": "4",
          "japanese": "招く、誘う、おごる",
          "chinese": "请客",
          "pinyin": "qǐngkè"
      },
      {
          "hskclass": "4",
          "japanese": "貧しい、貧乏である",
          "chinese": "穷",
          "pinyin": "qióng"
      },
      {
          "hskclass": "4",
          "japanese": "区別する、見分ける",
          "chinese": "区别",
          "pinyin": "qūbié"
      },
      {
          "hskclass": "4",
          "japanese": "取る、取って来る",
          "chinese": "取",
          "pinyin": "qǔ"
      },
      {
          "hskclass": "4",
          "japanese": "完成、全部",
          "chinese": "全部",
          "pinyin": "quánbù"
      },
      {
          "hskclass": "4",
          "japanese": "欠点、短所",
          "chinese": "缺点",
          "pinyin": "quēdiǎn"
      },
      {
          "hskclass": "4",
          "japanese": "欠乏する、不足する",
          "chinese": "缺少",
          "pinyin": "quēshǎo"
      },
      {
          "hskclass": "4",
          "japanese": "退く、後退する",
          "chinese": "却",
          "pinyin": "què"
      },
      {
          "hskclass": "4",
          "japanese": "確実である、確かである",
          "chinese": "确实",
          "pinyin": "quèshí"
      },
      {
          "hskclass": "4",
          "japanese": "群れ、群",
          "chinese": "群",
          "pinyin": "qún"
      },
      {
          "hskclass": "4",
          "japanese": "但し",
          "chinese": "然而",
          "pinyin": "rán'ér"
      },
      {
          "hskclass": "4",
          "japanese": "にぎやかである",
          "chinese": "热闹",
          "pinyin": "rènào"
      },
      {
          "hskclass": "4",
          "japanese": "人民元",
          "chinese": "人民币",
          "pinyin": "rénmínbì"
      },
      {
          "hskclass": "4",
          "japanese": "いかなる、どのような",
          "chinese": "任何",
          "pinyin": "rènhé"
      },
      {
          "hskclass": "4",
          "japanese": "任務",
          "chinese": "任务",
          "pinyin": "rènwù"
      },
      {
          "hskclass": "4",
          "japanese": "投げる、ほうる",
          "chinese": "扔",
          "pinyin": "rēng"
      },
      {
          "hskclass": "4",
          "japanese": "依然として、あいかわらず",
          "chinese": "仍然",
          "pinyin": "réngrán"
      },
      {
          "hskclass": "4",
          "japanese": "日記",
          "chinese": "日记",
          "pinyin": "rìjì"
      },
      {
          "hskclass": "4",
          "japanese": "入口",
          "chinese": "入口",
          "pinyin": "rùkǒu"
      },
      {
          "hskclass": "4",
          "japanese": "軟らかい",
          "chinese": "软",
          "pinyin": "ruǎn"
      },
      {
          "hskclass": "4",
          "japanese": "散歩する",
          "chinese": "散步",
          "pinyin": "sànbù"
      },
      {
          "hskclass": "4",
          "japanese": "森",
          "chinese": "森林",
          "pinyin": "sēnlín"
      },
      {
          "hskclass": "4",
          "japanese": "ソファ",
          "chinese": "沙发",
          "pinyin": "shāfā"
      },
      {
          "hskclass": "4",
          "japanese": "話し合う、相談する",
          "chinese": "商量",
          "pinyin": "shāngliáng"
      },
      {
          "hskclass": "4",
          "japanese": "心を傷つける、悲しい",
          "chinese": "伤心",
          "pinyin": "shāngxīn"
      },
      {
          "hskclass": "4",
          "japanese": "少し、ちょっと",
          "chinese": "稍微",
          "pinyin": "shāowéi"
      },
      {
          "hskclass": "4",
          "japanese": "社会",
          "chinese": "社会",
          "pinyin": "shèhuì"
      },
      {
          "hskclass": "4",
          "japanese": "深い",
          "chinese": "深",
          "pinyin": "shēn"
      },
      {
          "hskclass": "4",
          "japanese": "申請する",
          "chinese": "申请",
          "pinyin": "shēnqǐng"
      },
      {
          "hskclass": "4",
          "japanese": "〜さえ、〜すら",
          "chinese": "甚至",
          "pinyin": "shènzhì"
      },
      {
          "hskclass": "4",
          "japanese": "生活",
          "chinese": "生活",
          "pinyin": "shēnghuó"
      },
      {
          "hskclass": "4",
          "japanese": "生命",
          "chinese": "生命",
          "pinyin": "shēngmìng"
      },
      {
          "hskclass": "4",
          "japanese": "節約する、省",
          "chinese": "省",
          "pinyin": "shěng"
      },
      {
          "hskclass": "4",
          "japanese": "残る、余る",
          "chinese": "剩",
          "pinyin": "shèng"
      },
      {
          "hskclass": "4",
          "japanese": "敗れる、負ける",
          "chinese": "失败",
          "pinyin": "shībài"
      },
      {
          "hskclass": "4",
          "japanese": "失望した",
          "chinese": "失望",
          "pinyin": "shīwàng"
      },
      {
          "hskclass": "4",
          "japanese": "師匠、親方",
          "chinese": "师傅",
          "pinyin": "shīfù"
      },
      {
          "hskclass": "4",
          "japanese": "湿って潤いがある",
          "chinese": "湿润",
          "pinyin": "shīrùn"
      },
      {
          "hskclass": "4",
          "japanese": "獅子、ライオン",
          "chinese": "狮子",
          "pinyin": "shīzi"
      },
      {
          "hskclass": "4",
          "japanese": "十分",
          "chinese": "十分",
          "pinyin": "shífēn"
      },
      {
          "hskclass": "4",
          "japanese": "実際",
          "chinese": "实际",
          "pinyin": "shíjì"
      },
      {
          "hskclass": "4",
          "japanese": "本当に、全く",
          "chinese": "实在",
          "pinyin": "shízài"
      },
      {
          "hskclass": "4",
          "japanese": "食品",
          "chinese": "食品",
          "pinyin": "shípǐn"
      },
      {
          "hskclass": "4",
          "japanese": "使う",
          "chinese": "使用",
          "pinyin": "shǐyòng"
      },
      {
          "hskclass": "4",
          "japanese": "試す",
          "chinese": "试",
          "pinyin": "shì"
      },
      {
          "hskclass": "4",
          "japanese": "市場",
          "chinese": "市场",
          "pinyin": "shìchǎng"
      },
      {
          "hskclass": "4",
          "japanese": "適する",
          "chinese": "适合",
          "pinyin": "shìhé"
      },
      {
          "hskclass": "4",
          "japanese": "適応する、相応",
          "chinese": "适应",
          "pinyin": "shìyìng"
      },
      {
          "hskclass": "4",
          "japanese": "世紀",
          "chinese": "世纪",
          "pinyin": "shìjì"
      },
      {
          "hskclass": "4",
          "japanese": "集める、収める",
          "chinese": "收",
          "pinyin": "shōu"
      },
      {
          "hskclass": "4",
          "japanese": "収入",
          "chinese": "收入",
          "pinyin": "shōurù"
      },
      {
          "hskclass": "4",
          "japanese": "片づける、整理する",
          "chinese": "收拾",
          "pinyin": "shōushí"
      },
      {
          "hskclass": "4",
          "japanese": "首都",
          "chinese": "首都",
          "pinyin": "shǒudū"
      },
      {
          "hskclass": "4",
          "japanese": "最初に、真っ先に",
          "chinese": "首先",
          "pinyin": "shǒuxiān"
      },
      {
          "hskclass": "4",
          "japanese": "耐えられない",
          "chinese": "受不了",
          "pinyin": "shòu bùliǎo"
      },
      {
          "hskclass": "4",
          "japanese": "受ける、被る",
          "chinese": "受到",
          "pinyin": "shòudào"
      },
      {
          "hskclass": "4",
          "japanese": "売り子、店員",
          "chinese": "售货员",
          "pinyin": "shòuhuòyuán"
      },
      {
          "hskclass": "4",
          "japanese": "負ける、敗れる",
          "chinese": "输",
          "pinyin": "shū"
      },
      {
          "hskclass": "4",
          "japanese": "よく知っている、熟知している",
          "chinese": "熟悉",
          "pinyin": "shúxī"
      },
      {
          "hskclass": "4",
          "japanese": "数量",
          "chinese": "数量",
          "pinyin": "shùliàng"
      },
      {
          "hskclass": "4",
          "japanese": "数字、デジタル",
          "chinese": "数字",
          "pinyin": "shùzì"
      },
      {
          "hskclass": "4",
          "japanese": "カッコいい",
          "chinese": "帅",
          "pinyin": "shuài"
      },
      {
          "hskclass": "4",
          "japanese": "ついでに",
          "chinese": "顺便",
          "pinyin": "shùnbiàn"
      },
      {
          "hskclass": "4",
          "japanese": "うまく進む、支障がない",
          "chinese": "顺利",
          "pinyin": "shùnlì"
      },
      {
          "hskclass": "4",
          "japanese": "順序、順番．",
          "chinese": "顺序",
          "pinyin": "shùnxù"
      },
      {
          "hskclass": "4",
          "japanese": "説明",
          "chinese": "说明",
          "pinyin": "shuōmíng"
      },
      {
          "hskclass": "4",
          "japanese": "修士号",
          "chinese": "硕士",
          "pinyin": "shuòshì"
      },
      {
          "hskclass": "4",
          "japanese": "死ぬ",
          "chinese": "死",
          "pinyin": "sǐ"
      },
      {
          "hskclass": "4",
          "japanese": "速度、スピード",
          "chinese": "速度",
          "pinyin": "sùdù"
      },
      {
          "hskclass": "4",
          "japanese": "ビニール袋",
          "chinese": "塑料袋",
          "pinyin": "sùliào dài"
      },
      {
          "hskclass": "4",
          "japanese": "酸っぱい",
          "chinese": "酸",
          "pinyin": "suān"
      },
      {
          "hskclass": "4",
          "japanese": "計算する、勘定する",
          "chinese": "算",
          "pinyin": "suàn"
      },
      {
          "hskclass": "4",
          "japanese": "都合のよいようにする",
          "chinese": "随便",
          "pinyin": "suíbiàn"
      },
      {
          "hskclass": "4",
          "japanese": "つれて、従って",
          "chinese": "随着",
          "pinyin": "suízhe"
      },
      {
          "hskclass": "4",
          "japanese": "孫",
          "chinese": "孙子",
          "pinyin": "sūnzi"
      },
      {
          "hskclass": "4",
          "japanese": "全て",
          "chinese": "所有",
          "pinyin": "suǒyǒu"
      },
      {
          "hskclass": "4",
          "japanese": "駅",
          "chinese": "台",
          "pinyin": "tái"
      },
      {
          "hskclass": "4",
          "japanese": "リフト",
          "chinese": "抬",
          "pinyin": "tái"
      },
      {
          "hskclass": "4",
          "japanese": "態度",
          "chinese": "态度",
          "pinyin": "tàidù"
      },
      {
          "hskclass": "4",
          "japanese": "話す",
          "chinese": "谈",
          "pinyin": "tán"
      },
      {
          "hskclass": "4",
          "japanese": "ピアノを弾く",
          "chinese": "弹钢琴",
          "pinyin": "dàn gāngqín"
      },
      {
          "hskclass": "4",
          "japanese": "スープ",
          "chinese": "汤",
          "pinyin": "tāng"
      },
      {
          "hskclass": "4",
          "japanese": "往復する回数を数える量詞",
          "chinese": "趟",
          "pinyin": "tàng"
      },
      {
          "hskclass": "4",
          "japanese": "横たわる、横になる",
          "chinese": "躺",
          "pinyin": "tǎng"
      },
      {
          "hskclass": "4",
          "japanese": "討論する",
          "chinese": "讨论",
          "pinyin": "tǎolùn"
      },
      {
          "hskclass": "4",
          "japanese": "嫌い",
          "chinese": "讨厌",
          "pinyin": "tǎoyàn"
      },
      {
          "hskclass": "4",
          "japanese": "特色、特徴",
          "chinese": "特点",
          "pinyin": "tèdiǎn"
      },
      {
          "hskclass": "4",
          "japanese": "提供",
          "chinese": "提供",
          "pinyin": "tígōng"
      },
      {
          "hskclass": "4",
          "japanese": "繰り上げる",
          "chinese": "提前",
          "pinyin": "tíqián"
      },
      {
          "hskclass": "4",
          "japanese": "注意を促す",
          "chinese": "提醒",
          "pinyin": "tíxǐng"
      },
      {
          "hskclass": "4",
          "japanese": "空欄に記入する",
          "chinese": "填空",
          "pinyin": "tiánkòng"
      },
      {
          "hskclass": "4",
          "japanese": "条件",
          "chinese": "条件",
          "pinyin": "tiáojiàn"
      },
      {
          "hskclass": "4",
          "japanese": "停止する",
          "chinese": "停止",
          "pinyin": "tíngzhǐ"
      },
      {
          "hskclass": "4",
          "japanese": "非常に、とても",
          "chinese": "挺",
          "pinyin": "tǐng"
      },
      {
          "hskclass": "4",
          "japanese": "によって",
          "chinese": "通过",
          "pinyin": "tōngguò"
      },
      {
          "hskclass": "4",
          "japanese": "お知らせ、通知",
          "chinese": "通知",
          "pinyin": "tōngzhī"
      },
      {
          "hskclass": "4",
          "japanese": "同情",
          "chinese": "同情",
          "pinyin": "tóngqíng"
      },
      {
          "hskclass": "4",
          "japanese": "押す",
          "chinese": "推",
          "pinyin": "tuī"
      },
      {
          "hskclass": "4",
          "japanese": "遅らせる、延ばす",
          "chinese": "推迟",
          "pinyin": "tuīchí"
      },
      {
          "hskclass": "4",
          "japanese": "脱ぐ",
          "chinese": "脱",
          "pinyin": "tuō"
      },
      {
          "hskclass": "4",
          "japanese": "靴下",
          "chinese": "袜子",
          "pinyin": "wàzi"
      },
      {
          "hskclass": "4",
          "japanese": "完全である",
          "chinese": "完全",
          "pinyin": "wánquán"
      },
      {
          "hskclass": "4",
          "japanese": "〜へ",
          "chinese": "往",
          "pinyin": "wǎng"
      },
      {
          "hskclass": "4",
          "japanese": "往々にして、しばしば",
          "chinese": "往往",
          "pinyin": "wǎngwǎng"
      },
      {
          "hskclass": "4",
          "japanese": "テニス",
          "chinese": "网球",
          "pinyin": "wǎngqiú"
      },
      {
          "hskclass": "4",
          "japanese": "ウェブサイト",
          "chinese": "网站",
          "pinyin": "wǎngzhàn"
      },
      {
          "hskclass": "4",
          "japanese": "危険な",
          "chinese": "危险",
          "pinyin": "wéixiǎn"
      },
      {
          "hskclass": "4",
          "japanese": "味",
          "chinese": "味道",
          "pinyin": "wèidào"
      },
      {
          "hskclass": "4",
          "japanese": "温度",
          "chinese": "温度",
          "pinyin": "wēndù"
      },
      {
          "hskclass": "4",
          "japanese": "記事、文章",
          "chinese": "文章",
          "pinyin": "wénzhāng"
      },
      {
          "hskclass": "4",
          "japanese": "握手",
          "chinese": "握手",
          "pinyin": "wòshǒu"
      },
      {
          "hskclass": "4",
          "japanese": "汚染",
          "chinese": "污染",
          "pinyin": "wūrǎn"
      },
      {
          "hskclass": "4",
          "japanese": "無い",
          "chinese": "无",
          "pinyin": "wú"
      },
      {
          "hskclass": "4",
          "japanese": "退屈である、つまらない",
          "chinese": "无聊",
          "pinyin": "wúliáo"
      },
      {
          "hskclass": "4",
          "japanese": "かかわらず、どんなであっても",
          "chinese": "无论",
          "pinyin": "wúlùn"
      },
      {
          "hskclass": "4",
          "japanese": "誤解",
          "chinese": "误会",
          "pinyin": "wùhuì"
      },
      {
          "hskclass": "4",
          "japanese": "トマト",
          "chinese": "西红柿",
          "pinyin": "xīhóngshì"
      },
      {
          "hskclass": "4",
          "japanese": "吸い寄せる、引きつける．",
          "chinese": "吸引",
          "pinyin": "xīyǐn"
      },
      {
          "hskclass": "4",
          "japanese": "洗濯機",
          "chinese": "洗衣机",
          "pinyin": "xǐyījī"
      },
      {
          "hskclass": "4",
          "japanese": "塩味",
          "chinese": "咸",
          "pinyin": "xián"
      },
      {
          "hskclass": "4",
          "japanese": "近代的、現代",
          "chinese": "现代",
          "pinyin": "xiàndài"
      },
      {
          "hskclass": "4",
          "japanese": "羨ましい",
          "chinese": "羡慕",
          "pinyin": "xiànmù"
      },
      {
          "hskclass": "4",
          "japanese": "制限する",
          "chinese": "限制",
          "pinyin": "xiànzhì"
      },
      {
          "hskclass": "4",
          "japanese": "香り",
          "chinese": "香",
          "pinyin": "xiāng"
      },
      {
          "hskclass": "4",
          "japanese": "反して",
          "chinese": "相反",
          "pinyin": "xiāngfǎn"
      },
      {
          "hskclass": "4",
          "japanese": "詳細",
          "chinese": "详细",
          "pinyin": "xiángxì"
      },
      {
          "hskclass": "4",
          "japanese": "音がする、鳴る",
          "chinese": "响",
          "pinyin": "xiǎng"
      },
      {
          "hskclass": "4",
          "japanese": "ニュース、報道",
          "chinese": "消息",
          "pinyin": "xiāoxī"
      },
      {
          "hskclass": "4",
          "japanese": "小説",
          "chinese": "小说",
          "pinyin": "xiǎoshuō"
      },
      {
          "hskclass": "4",
          "japanese": "冗談、笑い話",
          "chinese": "笑话",
          "pinyin": "xiàohuà"
      },
      {
          "hskclass": "4",
          "japanese": "効果、結果",
          "chinese": "效果",
          "pinyin": "xiàoguǒ"
      },
      {
          "hskclass": "4",
          "japanese": "苦しい、つらい",
          "chinese": "辛苦",
          "pinyin": "xīnkǔ"
      },
      {
          "hskclass": "4",
          "japanese": "気持ち、気分",
          "chinese": "心情",
          "pinyin": "xīnqíng"
      },
      {
          "hskclass": "4",
          "japanese": "信頼する",
          "chinese": "信任",
          "pinyin": "xìnrèn"
      },
      {
          "hskclass": "4",
          "japanese": "自信、信念",
          "chinese": "信心",
          "pinyin": "xìnxīn"
      },
      {
          "hskclass": "4",
          "japanese": "クレジットカード",
          "chinese": "信用卡",
          "pinyin": "xìnyòngkǎ"
      },
      {
          "hskclass": "4",
          "japanese": "興奮する",
          "chinese": "兴奋",
          "pinyin": "xīngfèn"
      },
      {
          "hskclass": "4",
          "japanese": "行",
          "chinese": "行",
          "pinyin": "xíng"
      },
      {
          "hskclass": "4",
          "japanese": "覚める",
          "chinese": "醒",
          "pinyin": "xǐng"
      },
      {
          "hskclass": "4",
          "japanese": "性別",
          "chinese": "性别",
          "pinyin": "xìngbié"
      },
      {
          "hskclass": "4",
          "japanese": "性格",
          "chinese": "性格",
          "pinyin": "xìnggé"
      },
      {
          "hskclass": "4",
          "japanese": "幸せ",
          "chinese": "幸福",
          "pinyin": "xìngfú"
      },
      {
          "hskclass": "4",
          "japanese": "直す",
          "chinese": "修",
          "pinyin": "xiū"
      },
      {
          "hskclass": "4",
          "japanese": "多くの",
          "chinese": "许多",
          "pinyin": "xǔduō"
      },
      {
          "hskclass": "4",
          "japanese": "血液",
          "chinese": "血",
          "pinyin": "xuè"
      },
      {
          "hskclass": "4",
          "japanese": "圧力",
          "chinese": "压力",
          "pinyin": "yālì"
      },
      {
          "hskclass": "4",
          "japanese": "歯磨",
          "chinese": "牙膏",
          "pinyin": "yágāo"
      },
      {
          "hskclass": "4",
          "japanese": "アジア",
          "chinese": "亚洲",
          "pinyin": "yàzhōu"
      },
      {
          "hskclass": "4",
          "japanese": "うん",
          "chinese": "呀",
          "pinyin": "ya"
      },
      {
          "hskclass": "4",
          "japanese": "塩",
          "chinese": "盐",
          "pinyin": "yán"
      },
      {
          "hskclass": "4",
          "japanese": "たいへん厳しい、厳格である",
          "chinese": "严格",
          "pinyin": "yángé"
      },
      {
          "hskclass": "4",
          "japanese": "重大である、深刻である",
          "chinese": "严重",
          "pinyin": "yánzhòng"
      },
      {
          "hskclass": "4",
          "japanese": "大学院生．",
          "chinese": "研究生",
          "pinyin": "yánjiūshēng"
      },
      {
          "hskclass": "4",
          "japanese": "演出",
          "chinese": "演出",
          "pinyin": "yǎnchū"
      },
      {
          "hskclass": "4",
          "japanese": "俳優",
          "chinese": "演员",
          "pinyin": "yǎnyuán"
      },
      {
          "hskclass": "4",
          "japanese": "日光",
          "chinese": "阳光",
          "pinyin": "yángguāng"
      },
      {
          "hskclass": "4",
          "japanese": "作り上げる、身につける",
          "chinese": "养成",
          "pinyin": "yǎng chéng"
      },
      {
          "hskclass": "4",
          "japanese": "様子",
          "chinese": "样子",
          "pinyin": "yàngzi"
      },
      {
          "hskclass": "4",
          "japanese": "招く、招待する．",
          "chinese": "邀请",
          "pinyin": "yāoqǐng"
      },
      {
          "hskclass": "4",
          "japanese": "鍵",
          "chinese": "钥匙",
          "pinyin": "yàoshi"
      },
      {
          "hskclass": "4",
          "japanese": "あるいは〜かもしれない",
          "chinese": "也许",
          "pinyin": "yěxǔ"
      },
      {
          "hskclass": "4",
          "japanese": "ページ",
          "chinese": "页",
          "pinyin": "yè"
      },
      {
          "hskclass": "4",
          "japanese": "葉",
          "chinese": "叶子",
          "pinyin": "yèzi"
      },
      {
          "hskclass": "4",
          "japanese": "すべて",
          "chinese": "一切",
          "pinyin": "yīqiè"
      },
      {
          "hskclass": "4",
          "japanese": "によって",
          "chinese": "以",
          "pinyin": "yǐ"
      },
      {
          "hskclass": "4",
          "japanese": "一億",
          "chinese": "亿",
          "pinyin": "yì"
      },
      {
          "hskclass": "4",
          "japanese": "意見",
          "chinese": "意见",
          "pinyin": "yìjiàn"
      },
      {
          "hskclass": "4",
          "japanese": "アート、芸術",
          "chinese": "艺术",
          "pinyin": "yìshù"
      },
      {
          "hskclass": "4",
          "japanese": "それだからこそ",
          "chinese": "因此",
          "pinyin": "yīncǐ"
      },
      {
          "hskclass": "4",
          "japanese": "飲物",
          "chinese": "饮料",
          "pinyin": "yǐnliào"
      },
      {
          "hskclass": "4",
          "japanese": "引き起こす",
          "chinese": "引起",
          "pinyin": "yǐnqǐ"
      },
      {
          "hskclass": "4",
          "japanese": "印象",
          "chinese": "印象",
          "pinyin": "yìnxiàng"
      },
      {
          "hskclass": "4",
          "japanese": "勝利",
          "chinese": "赢",
          "pinyin": "yíng"
      },
      {
          "hskclass": "4",
          "japanese": "硬い",
          "chinese": "硬",
          "pinyin": "yìng"
      },
      {
          "hskclass": "4",
          "japanese": "勇敢",
          "chinese": "勇敢",
          "pinyin": "yǒnggǎn"
      },
      {
          "hskclass": "4",
          "japanese": "永久に",
          "chinese": "永远",
          "pinyin": "yǒngyuǎn"
      },
      {
          "hskclass": "4",
          "japanese": "長所、メリット",
          "chinese": "优点",
          "pinyin": "yōudiǎn"
      },
      {
          "hskclass": "4",
          "japanese": "優秀",
          "chinese": "优秀",
          "pinyin": "yōuxiù"
      },
      {
          "hskclass": "4",
          "japanese": "ユーモア",
          "chinese": "幽默",
          "pinyin": "yōumò"
      },
      {
          "hskclass": "4",
          "japanese": "によって、理由",
          "chinese": "由",
          "pinyin": "yóu"
      },
      {
          "hskclass": "4",
          "japanese": "〜によって、〜のために",
          "chinese": "由于",
          "pinyin": "yóuyú"
      },
      {
          "hskclass": "4",
          "japanese": "とりわけ、殊に",
          "chinese": "尤其",
          "pinyin": "yóuqí"
      },
      {
          "hskclass": "4",
          "japanese": "面白い",
          "chinese": "有趣",
          "pinyin": "yǒuqù"
      },
      {
          "hskclass": "4",
          "japanese": "友好的である",
          "chinese": "友好",
          "pinyin": "yǒuhǎo"
      },
      {
          "hskclass": "4",
          "japanese": "友情",
          "chinese": "友谊",
          "pinyin": "yǒuyì"
      },
      {
          "hskclass": "4",
          "japanese": "愉快である、心楽しい",
          "chinese": "愉快",
          "pinyin": "yúkuài"
      },
      {
          "hskclass": "4",
          "japanese": "それから",
          "chinese": "于是",
          "pinyin": "yúshì"
      },
      {
          "hskclass": "4",
          "japanese": "と",
          "chinese": "与",
          "pinyin": "yǔ"
      },
      {
          "hskclass": "4",
          "japanese": "文法、語法",
          "chinese": "语法",
          "pinyin": "yǔfǎ"
      },
      {
          "hskclass": "4",
          "japanese": "言語",
          "chinese": "语言",
          "pinyin": "yǔyán"
      },
      {
          "hskclass": "4",
          "japanese": "バドミントン",
          "chinese": "羽毛球",
          "pinyin": "yǔmáoqiú"
      },
      {
          "hskclass": "4",
          "japanese": "予習する",
          "chinese": "预习",
          "pinyin": "yùxí"
      },
      {
          "hskclass": "4",
          "japanese": "円い、円形である",
          "chinese": "圆",
          "pinyin": "yuán"
      },
      {
          "hskclass": "4",
          "japanese": "元々",
          "chinese": "原来",
          "pinyin": "yuánlái"
      },
      {
          "hskclass": "4",
          "japanese": "許す",
          "chinese": "原谅",
          "pinyin": "yuánliàng"
      },
      {
          "hskclass": "4",
          "japanese": "原因、理由",
          "chinese": "原因",
          "pinyin": "yuányīn"
      },
      {
          "hskclass": "4",
          "japanese": "会う約束をする．",
          "chinese": "约会",
          "pinyin": "yuēhuì"
      },
      {
          "hskclass": "4",
          "japanese": "閲読する、読む",
          "chinese": "阅读",
          "pinyin": "yuèdú"
      },
      {
          "hskclass": "4",
          "japanese": "許す、認める",
          "chinese": "允许",
          "pinyin": "yǔnxǔ"
      },
      {
          "hskclass": "4",
          "japanese": "雑誌",
          "chinese": "杂志",
          "pinyin": "zázhì"
      },
      {
          "hskclass": "4",
          "japanese": "我々",
          "chinese": "咱们",
          "pinyin": "zánmen"
      },
      {
          "hskclass": "4",
          "japanese": "一時、しばらく",
          "chinese": "暂时",
          "pinyin": "zhànshí"
      },
      {
          "hskclass": "4",
          "japanese": "汚い",
          "chinese": "脏",
          "pinyin": "zàng"
      },
      {
          "hskclass": "4",
          "japanese": "責任",
          "chinese": "责任",
          "pinyin": "zérèn"
      },
      {
          "hskclass": "4",
          "japanese": "増加する",
          "chinese": "增加",
          "pinyin": "zēngjiā"
      },
      {
          "hskclass": "4",
          "japanese": "増える",
          "chinese": "增长",
          "pinyin": "zēngzhǎng"
      },
      {
          "hskclass": "4",
          "japanese": "狭い",
          "chinese": "窄",
          "pinyin": "zhǎi"
      },
      {
          "hskclass": "4",
          "japanese": "募集する、招く",
          "chinese": "招聘",
          "pinyin": "zhāopìn"
      },
      {
          "hskclass": "4",
          "japanese": "本当の、真の",
          "chinese": "真正",
          "pinyin": "zhēnzhèng"
      },
      {
          "hskclass": "4",
          "japanese": "整理する、整頓",
          "chinese": "整理",
          "pinyin": "zhěnglǐ"
      },
      {
          "hskclass": "4",
          "japanese": "秩序がある、秩序正しい",
          "chinese": "整齐",
          "pinyin": "zhěngqí"
      },
      {
          "hskclass": "4",
          "japanese": "正常である",
          "chinese": "正常",
          "pinyin": "zhèngcháng"
      },
      {
          "hskclass": "4",
          "japanese": "ちょうどよい",
          "chinese": "正好",
          "pinyin": "zhènghǎo"
      },
      {
          "hskclass": "4",
          "japanese": "正確",
          "chinese": "正确",
          "pinyin": "zhèngquè"
      },
      {
          "hskclass": "4",
          "japanese": "正式の、公式の",
          "chinese": "正式",
          "pinyin": "zhèngshì"
      },
      {
          "hskclass": "4",
          "japanese": "証明する",
          "chinese": "证明",
          "pinyin": "zhèngmíng"
      },
      {
          "hskclass": "4",
          "japanese": "それは",
          "chinese": "之",
          "pinyin": "zhī"
      },
      {
          "hskclass": "4",
          "japanese": "単独の、たった一つの",
          "chinese": "只",
          "pinyin": "zhǐ"
      },
      {
          "hskclass": "4",
          "japanese": "支持する、支援する",
          "chinese": "支持",
          "pinyin": "zhīchí"
      },
      {
          "hskclass": "4",
          "japanese": "知識",
          "chinese": "知识",
          "pinyin": "zhīshì"
      },
      {
          "hskclass": "4",
          "japanese": "値段に見合う、割に合う",
          "chinese": "值得",
          "pinyin": "zhídé"
      },
      {
          "hskclass": "4",
          "japanese": "直接的である",
          "chinese": "直接",
          "pinyin": "zhíjiē"
      },
      {
          "hskclass": "4",
          "japanese": "植物",
          "chinese": "植物",
          "pinyin": "zhíwù"
      },
      {
          "hskclass": "4",
          "japanese": "職業",
          "chinese": "职业",
          "pinyin": "zhíyè"
      },
      {
          "hskclass": "4",
          "japanese": "指",
          "chinese": "指",
          "pinyin": "zhǐ"
      },
      {
          "hskclass": "4",
          "japanese": "やむなく、やむをえず",
          "chinese": "只好",
          "pinyin": "zhǐhǎo"
      },
      {
          "hskclass": "4",
          "japanese": "〜しさえすれば",
          "chinese": "只要",
          "pinyin": "zhǐyào"
      },
      {
          "hskclass": "4",
          "japanese": "品質",
          "chinese": "质量",
          "pinyin": "zhìliàng"
      },
      {
          "hskclass": "4",
          "japanese": "少なくとも",
          "chinese": "至少",
          "pinyin": "zhìshǎo"
      },
      {
          "hskclass": "4",
          "japanese": "製造する、作る",
          "chinese": "制造",
          "pinyin": "zhìzào"
      },
      {
          "hskclass": "4",
          "japanese": "中国語",
          "chinese": "中文",
          "pinyin": "zhōngwén"
      },
      {
          "hskclass": "4",
          "japanese": "重要な、重点的な",
          "chinese": "重点",
          "pinyin": "zhòngdiǎn"
      },
      {
          "hskclass": "4",
          "japanese": "重視する",
          "chinese": "重视",
          "pinyin": "zhòngshì"
      },
      {
          "hskclass": "4",
          "japanese": "周りに",
          "chinese": "周围",
          "pinyin": "zhōuwéi"
      },
      {
          "hskclass": "4",
          "japanese": "豚",
          "chinese": "猪",
          "pinyin": "zhū"
      },
      {
          "hskclass": "4",
          "japanese": "次第に、だんだん",
          "chinese": "逐渐",
          "pinyin": "zhújiàn"
      },
      {
          "hskclass": "4",
          "japanese": "主体的である",
          "chinese": "主动",
          "pinyin": "zhǔdòng"
      },
      {
          "hskclass": "4",
          "japanese": "考え",
          "chinese": "主意",
          "pinyin": "zhǔyì"
      },
      {
          "hskclass": "4",
          "japanese": "祝う",
          "chinese": "祝贺",
          "pinyin": "zhùhè"
      },
      {
          "hskclass": "4",
          "japanese": "著名である",
          "chinese": "著名",
          "pinyin": "zhùmíng"
      },
      {
          "hskclass": "4",
          "japanese": "専門",
          "chinese": "专门",
          "pinyin": "zhuānmén"
      },
      {
          "hskclass": "4",
          "japanese": "専攻",
          "chinese": "专业",
          "pinyin": "zhuānyè"
      },
      {
          "hskclass": "4",
          "japanese": "もうける",
          "chinese": "赚",
          "pinyin": "zhuàn"
      },
      {
          "hskclass": "4",
          "japanese": "ぶつかる",
          "chinese": "撞",
          "pinyin": "zhuàng"
      },
      {
          "hskclass": "4",
          "japanese": "精度が高い",
          "chinese": "准确",
          "pinyin": "zhǔnquè"
      },
      {
          "hskclass": "4",
          "japanese": "時間が正確である",
          "chinese": "准时",
          "pinyin": "zhǔn shí"
      },
      {
          "hskclass": "4",
          "japanese": "注意深い、こまやかである",
          "chinese": "仔细",
          "pinyin": "zǐxì"
      },
      {
          "hskclass": "4",
          "japanese": "自然に",
          "chinese": "自然",
          "pinyin": "zìrán"
      },
      {
          "hskclass": "4",
          "japanese": "概要、まとめる",
          "chinese": "总结",
          "pinyin": "zǒngjié"
      },
      {
          "hskclass": "4",
          "japanese": "家賃",
          "chinese": "租",
          "pinyin": "zū"
      },
      {
          "hskclass": "4",
          "japanese": "組み合わせる、構成する",
          "chinese": "组成",
          "pinyin": "zǔchéng"
      },
      {
          "hskclass": "4",
          "japanese": "組織",
          "chinese": "组织",
          "pinyin": "zǔzhī"
      },
      {
          "hskclass": "4",
          "japanese": "口",
          "chinese": "嘴",
          "pinyin": "zuǐ"
      },
      {
          "hskclass": "4",
          "japanese": "最高",
          "chinese": "最好",
          "pinyin": "zuì hǎo"
      },
      {
          "hskclass": "4",
          "japanese": "遂に",
          "chinese": "最后",
          "pinyin": "zuìhòu"
      },
      {
          "hskclass": "4",
          "japanese": "尊敬",
          "chinese": "尊重",
          "pinyin": "zūnzhòng"
      },
      {
          "hskclass": "4",
          "japanese": "ビジネス",
          "chinese": "做生意",
          "pinyin": "zuò shēngyì"
      },
      {
          "hskclass": "4",
          "japanese": "座る",
          "chinese": "座",
          "pinyin": "zuò"
      },
      {
          "hskclass": "4",
          "japanese": "座席",
          "chinese": "座位",
          "pinyin": "zuòwèi"
      },
      {
          "hskclass": "4",
          "japanese": "著者、作者",
          "chinese": "作者",
          "pinyin": "zuòzhě"
      },
      {
          "hskclass": "5",
          "japanese": "はい，ええ",
          "chinese": "唉",
          "pinyin": "āi"
      },
      {
          "hskclass": "5",
          "japanese": "大切に保護する，愛護する",
          "chinese": "爱护",
          "pinyin": "àihù"
      },
      {
          "hskclass": "5",
          "japanese": "大事にする，惜しむ．",
          "chinese": "爱惜",
          "pinyin": "àixī"
      },
      {
          "hskclass": "5",
          "japanese": "思いやり",
          "chinese": "爱心",
          "pinyin": "àixīn"
      },
      {
          "hskclass": "5",
          "japanese": "慰める",
          "chinese": "安慰",
          "pinyin": "ānwèi"
      },
      {
          "hskclass": "5",
          "japanese": "据え付ける，取り付ける，",
          "chinese": "安装",
          "pinyin": "ānzhuāng"
      },
      {
          "hskclass": "5",
          "japanese": "岸",
          "chinese": "岸",
          "pinyin": "àn"
      },
      {
          "hskclass": "5",
          "japanese": "把握する",
          "chinese": "把握",
          "pinyin": "bǎwò"
      },
      {
          "hskclass": "5",
          "japanese": "並べる，配置する",
          "chinese": "摆",
          "pinyin": "bǎi"
      },
      {
          "hskclass": "5",
          "japanese": "担任",
          "chinese": "班主任",
          "pinyin": "bānzhǔrèn"
      },
      {
          "hskclass": "5",
          "japanese": "取り扱う，処理する．",
          "chinese": "办理",
          "pinyin": "bànlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "スティック、棒",
          "chinese": "棒",
          "pinyin": "bàng"
      },
      {
          "hskclass": "5",
          "japanese": "日暮れ時，夕方",
          "chinese": "傍晚",
          "pinyin": "bàngwǎn"
      },
      {
          "hskclass": "5",
          "japanese": "包む，くるむ．",
          "chinese": "包裹",
          "pinyin": "bāoguǒ"
      },
      {
          "hskclass": "5",
          "japanese": "含む，包含する",
          "chinese": "包含",
          "pinyin": "bāohán"
      },
      {
          "hskclass": "5",
          "japanese": "丸パン",
          "chinese": "包子",
          "pinyin": "bāozi"
      },
      {
          "hskclass": "5",
          "japanese": "薄い",
          "chinese": "薄",
          "pinyin": "báo"
      },
      {
          "hskclass": "5",
          "japanese": "赤ちゃん",
          "chinese": "宝贝",
          "pinyin": "bǎobèi"
      },
      {
          "hskclass": "5",
          "japanese": "大切である，貴重である．",
          "chinese": "宝贵",
          "pinyin": "bǎoguì"
      },
      {
          "hskclass": "5",
          "japanese": "維持する，保持する",
          "chinese": "保持",
          "pinyin": "bǎochí"
      },
      {
          "hskclass": "5",
          "japanese": "保存する，貯蔵する",
          "chinese": "保存",
          "pinyin": "bǎocún"
      },
      {
          "hskclass": "5",
          "japanese": "とどめる，残す",
          "chinese": "保留",
          "pinyin": "bǎoliú"
      },
      {
          "hskclass": "5",
          "japanese": "保険",
          "chinese": "保险",
          "pinyin": "bǎoxiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "報告する、レポート",
          "chinese": "报告",
          "pinyin": "bàogào"
      },
      {
          "hskclass": "5",
          "japanese": "悲観的",
          "chinese": "悲观",
          "pinyin": "bēiguān"
      },
      {
          "hskclass": "5",
          "japanese": "背負う，掛ける",
          "chinese": "背",
          "pinyin": "bèi"
      },
      {
          "hskclass": "5",
          "japanese": "背景",
          "chinese": "背景",
          "pinyin": "bèijǐng"
      },
      {
          "hskclass": "5",
          "japanese": "掛け布団",
          "chinese": "被子",
          "pinyin": "bèizi"
      },
      {
          "hskclass": "5",
          "japanese": "学部のコース",
          "chinese": "本科",
          "pinyin": "běnkē"
      },
      {
          "hskclass": "5",
          "japanese": "能力、腕前",
          "chinese": "本领",
          "pinyin": "běnlǐng"
      },
      {
          "hskclass": "5",
          "japanese": "本質、自然",
          "chinese": "本质",
          "pinyin": "běnzhí"
      },
      {
          "hskclass": "5",
          "japanese": "比例、比率",
          "chinese": "比例",
          "pinyin": "bǐlì"
      },
      {
          "hskclass": "5",
          "japanese": "例えば…など",
          "chinese": "比如",
          "pinyin": "bǐrú"
      },
      {
          "hskclass": "5",
          "japanese": "これとあれ、互いに",
          "chinese": "彼此",
          "pinyin": "bǐcǐ"
      },
      {
          "hskclass": "5",
          "japanese": "結局のところ",
          "chinese": "毕竟",
          "pinyin": "bìjìng"
      },
      {
          "hskclass": "5",
          "japanese": "回避する，防止する",
          "chinese": "避免",
          "pinyin": "bìmiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "必然的である",
          "chinese": "必然",
          "pinyin": "bìrán"
      },
      {
          "hskclass": "5",
          "japanese": "どうしても必要とする",
          "chinese": "必需",
          "pinyin": "bìxū"
      },
      {
          "hskclass": "5",
          "japanese": "必要とする，必要である",
          "chinese": "必要",
          "pinyin": "bìyào"
      },
      {
          "hskclass": "5",
          "japanese": "編集する",
          "chinese": "编辑",
          "pinyin": "biānjí"
      },
      {
          "hskclass": "5",
          "japanese": "爆竹",
          "chinese": "鞭炮",
          "pinyin": "biānpào"
      },
      {
          "hskclass": "5",
          "japanese": "便利である，都合がよい",
          "chinese": "便",
          "pinyin": "biàn"
      },
      {
          "hskclass": "5",
          "japanese": "議論する，討論する",
          "chinese": "辩论",
          "pinyin": "biànlùn"
      },
      {
          "hskclass": "5",
          "japanese": "句読点",
          "chinese": "标点",
          "pinyin": "biāodiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "標識，印",
          "chinese": "标志",
          "pinyin": "biāozhì"
      },
      {
          "hskclass": "5",
          "japanese": "表面",
          "chinese": "表面",
          "pinyin": "biǎomiàn"
      },
      {
          "hskclass": "5",
          "japanese": "明らかにする",
          "chinese": "表明",
          "pinyin": "biǎomíng"
      },
      {
          "hskclass": "5",
          "japanese": "表現",
          "chinese": "表情",
          "pinyin": "biǎoqíng"
      },
      {
          "hskclass": "5",
          "japanese": "表現する，描く",
          "chinese": "表现",
          "pinyin": "biǎoxiàn"
      },
      {
          "hskclass": "5",
          "japanese": "ウイルス",
          "chinese": "病毒",
          "pinyin": "bìngdú"
      },
      {
          "hskclass": "5",
          "japanese": "干支",
          "chinese": "丙",
          "pinyin": "bǐng"
      },
      {
          "hskclass": "5",
          "japanese": "ガラス",
          "chinese": "玻璃",
          "pinyin": "bōlí"
      },
      {
          "hskclass": "5",
          "japanese": "博物館",
          "chinese": "博物馆",
          "pinyin": "bówùguǎn"
      },
      {
          "hskclass": "5",
          "japanese": "首",
          "chinese": "脖子",
          "pinyin": "bózi"
      },
      {
          "hskclass": "5",
          "japanese": "必要はありません",
          "chinese": "不必",
          "pinyin": "bùbì"
      },
      {
          "hskclass": "5",
          "japanese": "絶えず",
          "chinese": "不断",
          "pinyin": "bùduàn"
      },
      {
          "hskclass": "5",
          "japanese": "そうとも限らない",
          "chinese": "不见得",
          "pinyin": "bùjiàn dé"
      },
      {
          "hskclass": "5",
          "japanese": "我慢ならない，うんざりす",
          "chinese": "不耐烦",
          "pinyin": "bù nàifán"
      },
      {
          "hskclass": "5",
          "japanese": "差し支えない，構わない",
          "chinese": "不要紧",
          "pinyin": "bùyàojǐn"
      },
      {
          "hskclass": "5",
          "japanese": "補充する，補う．",
          "chinese": "补充",
          "pinyin": "bǔchōng"
      },
      {
          "hskclass": "5",
          "japanese": "布",
          "chinese": "布",
          "pinyin": "bù"
      },
      {
          "hskclass": "5",
          "japanese": "不安である，心配である",
          "chinese": "不安",
          "pinyin": "bù'ān"
      },
      {
          "hskclass": "5",
          "japanese": "大変である，偉いことである",
          "chinese": "不得了",
          "pinyin": "bùdéle"
      },
      {
          "hskclass": "5",
          "japanese": "すみません",
          "chinese": "不好意思",
          "pinyin": "bù hǎoyìsi"
      },
      {
          "hskclass": "5",
          "japanese": "やむをえない",
          "chinese": "不免",
          "pinyin": "bùmiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "そうでなければ",
          "chinese": "不然",
          "pinyin": "bùrán"
      },
      {
          "hskclass": "5",
          "japanese": "…に及ばない",
          "chinese": "不如",
          "pinyin": "bùrú"
      },
      {
          "hskclass": "5",
          "japanese": "不足",
          "chinese": "不足",
          "pinyin": "bùzú"
      },
      {
          "hskclass": "5",
          "japanese": "部門",
          "chinese": "部门",
          "pinyin": "bùmén"
      },
      {
          "hskclass": "5",
          "japanese": "段取り，順序",
          "chinese": "步骤",
          "pinyin": "bùzhòu"
      },
      {
          "hskclass": "5",
          "japanese": "財産",
          "chinese": "财产",
          "pinyin": "cáichǎn"
      },
      {
          "hskclass": "5",
          "japanese": "踏む",
          "chinese": "踩",
          "pinyin": "cǎi"
      },
      {
          "hskclass": "5",
          "japanese": "取材する",
          "chinese": "采访",
          "pinyin": "cǎifǎng"
      },
      {
          "hskclass": "5",
          "japanese": "採取",
          "chinese": "采取",
          "pinyin": "cǎiqǔ"
      },
      {
          "hskclass": "5",
          "japanese": "虹",
          "chinese": "彩虹",
          "pinyin": "cǎihóng"
      },
      {
          "hskclass": "5",
          "japanese": "参考",
          "chinese": "参考",
          "pinyin": "cānkǎo"
      },
      {
          "hskclass": "5",
          "japanese": "参加する",
          "chinese": "参与",
          "pinyin": "cānyù"
      },
      {
          "hskclass": "5",
          "japanese": "食堂、レストラン",
          "chinese": "餐厅",
          "pinyin": "cāntīng"
      },
      {
          "hskclass": "5",
          "japanese": "身体障害",
          "chinese": "残疾",
          "pinyin": "cánjí"
      },
      {
          "hskclass": "5",
          "japanese": "恥ずかしい",
          "chinese": "惭愧",
          "pinyin": "cánkuì"
      },
      {
          "hskclass": "5",
          "japanese": "運動場、遊び場",
          "chinese": "操场",
          "pinyin": "cāochǎng"
      },
      {
          "hskclass": "5",
          "japanese": "心配",
          "chinese": "操心",
          "pinyin": "cāoxīn"
      },
      {
          "hskclass": "5",
          "japanese": "冊子，とじ本．",
          "chinese": "册",
          "pinyin": "cè"
      },
      {
          "hskclass": "5",
          "japanese": "トイレ",
          "chinese": "厕所",
          "pinyin": "cèsuǒ"
      },
      {
          "hskclass": "5",
          "japanese": "検査する，テストする",
          "chinese": "测验",
          "pinyin": "cèyàn"
      },
      {
          "hskclass": "5",
          "japanese": "かつて",
          "chinese": "曾经",
          "pinyin": "céngjīng"
      },
      {
          "hskclass": "5",
          "japanese": "挿す，差し込む",
          "chinese": "插",
          "pinyin": "chā"
      },
      {
          "hskclass": "5",
          "japanese": "違い、差別",
          "chinese": "差别",
          "pinyin": "chābié"
      },
      {
          "hskclass": "5",
          "japanese": "フォーク",
          "chinese": "叉子",
          "pinyin": "chā zi"
      },
      {
          "hskclass": "5",
          "japanese": "開封する，ほどく",
          "chinese": "拆",
          "pinyin": "chāi"
      },
      {
          "hskclass": "5",
          "japanese": "産物，製品．",
          "chinese": "产品",
          "pinyin": "chǎnpǐn"
      },
      {
          "hskclass": "5",
          "japanese": "生み出す，生ずる",
          "chinese": "产生",
          "pinyin": "chǎnshēng"
      },
      {
          "hskclass": "5",
          "japanese": "長距離",
          "chinese": "长途",
          "pinyin": "chángtú"
      },
      {
          "hskclass": "5",
          "japanese": "常識",
          "chinese": "常识",
          "pinyin": "chángshì"
      },
      {
          "hskclass": "5",
          "japanese": "書き写す，抜き書きする",
          "chinese": "抄",
          "pinyin": "chāo"
      },
      {
          "hskclass": "5",
          "japanese": "向かって",
          "chinese": "朝",
          "pinyin": "cháo"
      },
      {
          "hskclass": "5",
          "japanese": "王朝",
          "chinese": "朝代",
          "pinyin": "cháodài"
      },
      {
          "hskclass": "5",
          "japanese": "炒める",
          "chinese": "炒",
          "pinyin": "chǎo"
      },
      {
          "hskclass": "5",
          "japanese": "喧嘩をする",
          "chinese": "吵架",
          "pinyin": "chǎojià"
      },
      {
          "hskclass": "5",
          "japanese": "車庫",
          "chinese": "车库",
          "pinyin": "chēkù"
      },
      {
          "hskclass": "5",
          "japanese": "車両",
          "chinese": "车厢",
          "pinyin": "chēxiāng"
      },
      {
          "hskclass": "5",
          "japanese": "徹底している",
          "chinese": "彻底",
          "pinyin": "chèdǐ"
      },
      {
          "hskclass": "5",
          "japanese": "沈黙する．",
          "chinese": "沉默",
          "pinyin": "chénmò"
      },
      {
          "hskclass": "5",
          "japanese": "…のうちに，…に乗じて",
          "chinese": "趁",
          "pinyin": "chèn"
      },
      {
          "hskclass": "5",
          "japanese": "…と呼ぶ．",
          "chinese": "称",
          "pinyin": "chēng"
      },
      {
          "hskclass": "5",
          "japanese": "…と呼ぶ．",
          "chinese": "称呼",
          "pinyin": "chēnghu"
      },
      {
          "hskclass": "5",
          "japanese": "褒めたたえる",
          "chinese": "称赞",
          "pinyin": "chēngzàn"
      },
      {
          "hskclass": "5",
          "japanese": "乗算",
          "chinese": "乘",
          "pinyin": "chéng"
      },
      {
          "hskclass": "5",
          "japanese": "引き受ける，担う",
          "chinese": "承担",
          "pinyin": "chéngdān"
      },
      {
          "hskclass": "5",
          "japanese": "認める，承認する",
          "chinese": "承认",
          "pinyin": "chéngrèn"
      },
      {
          "hskclass": "5",
          "japanese": "耐える．",
          "chinese": "承受",
          "pinyin": "chéngshòu"
      },
      {
          "hskclass": "5",
          "japanese": "度",
          "chinese": "程度",
          "pinyin": "chéngdù"
      },
      {
          "hskclass": "5",
          "japanese": "手順，段取り",
          "chinese": "程序",
          "pinyin": "chéngxù"
      },
      {
          "hskclass": "5",
          "japanese": "成分",
          "chinese": "成分",
          "pinyin": "chéngfèn"
      },
      {
          "hskclass": "5",
          "japanese": "成果，結果．",
          "chinese": "成果",
          "pinyin": "chéngguǒ"
      },
      {
          "hskclass": "5",
          "japanese": "成果．",
          "chinese": "成就",
          "pinyin": "chéngjiù"
      },
      {
          "hskclass": "5",
          "japanese": "成立する",
          "chinese": "成立",
          "pinyin": "chénglì"
      },
      {
          "hskclass": "5",
          "japanese": "成語、イディオム",
          "chinese": "成语",
          "pinyin": "chéngyǔ"
      },
      {
          "hskclass": "5",
          "japanese": "成長",
          "chinese": "成长",
          "pinyin": "chéngzhǎng"
      },
      {
          "hskclass": "5",
          "japanese": "誠実である",
          "chinese": "诚恳",
          "pinyin": "chéngkěn"
      },
      {
          "hskclass": "5",
          "japanese": "損をする",
          "chinese": "吃亏",
          "pinyin": "chīkuī"
      },
      {
          "hskclass": "5",
          "japanese": "持続する．",
          "chinese": "持续",
          "pinyin": "chíxù"
      },
      {
          "hskclass": "5",
          "japanese": "池",
          "chinese": "池子",
          "pinyin": "chízi"
      },
      {
          "hskclass": "5",
          "japanese": "物差し，メジャー．",
          "chinese": "尺子",
          "pinyin": "chǐzi"
      },
      {
          "hskclass": "5",
          "japanese": "羽，翼",
          "chinese": "翅膀",
          "pinyin": "chìbǎng"
      },
      {
          "hskclass": "5",
          "japanese": "突進する，突き進む",
          "chinese": "冲",
          "pinyin": "chōng"
      },
      {
          "hskclass": "5",
          "japanese": "充電器",
          "chinese": "充电器",
          "pinyin": "chōngdiàn qì"
      },
      {
          "hskclass": "5",
          "japanese": "充分",
          "chinese": "充分",
          "pinyin": "chōngfèn"
      },
      {
          "hskclass": "5",
          "japanese": "満ちる",
          "chinese": "充满",
          "pinyin": "chōngmǎn"
      },
      {
          "hskclass": "5",
          "japanese": "繰り返す",
          "chinese": "重复",
          "pinyin": "chóngfù"
      },
      {
          "hskclass": "5",
          "japanese": "ペット",
          "chinese": "宠物",
          "pinyin": "chǒngwù"
      },
      {
          "hskclass": "5",
          "japanese": "引き出し",
          "chinese": "抽屉",
          "pinyin": "chōutì"
      },
      {
          "hskclass": "5",
          "japanese": "抽象",
          "chinese": "抽象",
          "pinyin": "chōuxiàng"
      },
      {
          "hskclass": "5",
          "japanese": "醜い",
          "chinese": "丑",
          "pinyin": "chǒu"
      },
      {
          "hskclass": "5",
          "japanese": "臭い",
          "chinese": "臭",
          "pinyin": "chòu"
      },
      {
          "hskclass": "5",
          "japanese": "出版",
          "chinese": "出版",
          "pinyin": "chūbǎn"
      },
      {
          "hskclass": "5",
          "japanese": "出口",
          "chinese": "出口",
          "pinyin": "chūkǒu"
      },
      {
          "hskclass": "5",
          "japanese": "特に優れている",
          "chinese": "出色",
          "pinyin": "chūsè"
      },
      {
          "hskclass": "5",
          "japanese": "出席する",
          "chinese": "出席",
          "pinyin": "chūxí"
      },
      {
          "hskclass": "5",
          "japanese": "初級の",
          "chinese": "初级",
          "pinyin": "chūjí"
      },
      {
          "hskclass": "5",
          "japanese": "除き",
          "chinese": "除",
          "pinyin": "chú"
      },
      {
          "hskclass": "5",
          "japanese": "…してこそ",
          "chinese": "除非",
          "pinyin": "chúfēi"
      },
      {
          "hskclass": "5",
          "japanese": "大晦日",
          "chinese": "除夕",
          "pinyin": "chúxì"
      },
      {
          "hskclass": "5",
          "japanese": "処理する",
          "chinese": "处理",
          "pinyin": "chǔlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "伝播する，広める",
          "chinese": "传播",
          "pinyin": "chuánbò"
      },
      {
          "hskclass": "5",
          "japanese": "手渡す，伝達する．",
          "chinese": "传递",
          "pinyin": "chuándì"
      },
      {
          "hskclass": "5",
          "japanese": "移る，伝染する．",
          "chinese": "传染",
          "pinyin": "chuánrǎn"
      },
      {
          "hskclass": "5",
          "japanese": "伝説",
          "chinese": "传说",
          "pinyin": "chuánshuō"
      },
      {
          "hskclass": "5",
          "japanese": "伝統",
          "chinese": "传统",
          "pinyin": "chuántǒng"
      },
      {
          "hskclass": "5",
          "japanese": "窓のカーテン．",
          "chinese": "窗帘",
          "pinyin": "chuānglián"
      },
      {
          "hskclass": "5",
          "japanese": "突き進む，突進する",
          "chinese": "闯",
          "pinyin": "chuǎng"
      },
      {
          "hskclass": "5",
          "japanese": "作り出す，創造する．",
          "chinese": "创造",
          "pinyin": "chuàngzào"
      },
      {
          "hskclass": "5",
          "japanese": "吹く",
          "chinese": "吹",
          "pinyin": "chuī"
      },
      {
          "hskclass": "5",
          "japanese": "磁気テープ",
          "chinese": "磁带",
          "pinyin": "cídài"
      },
      {
          "hskclass": "5",
          "japanese": "辞職",
          "chinese": "辞职",
          "pinyin": "cízhí"
      },
      {
          "hskclass": "5",
          "japanese": "これ以外に，このほかに",
          "chinese": "此外",
          "pinyin": "cǐwài"
      },
      {
          "hskclass": "5",
          "japanese": "二次的な，副次的な",
          "chinese": "次要",
          "pinyin": "cì yào"
      },
      {
          "hskclass": "5",
          "japanese": "刺激",
          "chinese": "刺激",
          "pinyin": "cìjī"
      },
      {
          "hskclass": "5",
          "japanese": "慌ただしい",
          "chinese": "匆忙",
          "pinyin": "cōngmáng"
      },
      {
          "hskclass": "5",
          "japanese": "それ以来、",
          "chinese": "从此",
          "pinyin": "cóngcǐ"
      },
      {
          "hskclass": "5",
          "japanese": "したがって",
          "chinese": "从而",
          "pinyin": "cóng'ér"
      },
      {
          "hskclass": "5",
          "japanese": "以前，これまで",
          "chinese": "从前",
          "pinyin": "cóngqián"
      },
      {
          "hskclass": "5",
          "japanese": "…に従事する",
          "chinese": "从事",
          "pinyin": "cóngshì"
      },
      {
          "hskclass": "5",
          "japanese": "酢",
          "chinese": "醋",
          "pinyin": "cù"
      },
      {
          "hskclass": "5",
          "japanese": "促進する",
          "chinese": "促进",
          "pinyin": "cùjìn"
      },
      {
          "hskclass": "5",
          "japanese": "促して…させる",
          "chinese": "促使",
          "pinyin": "cùshǐ"
      },
      {
          "hskclass": "5",
          "japanese": "催促する．",
          "chinese": "催",
          "pinyin": "cuī"
      },
      {
          "hskclass": "5",
          "japanese": "預ける",
          "chinese": "存",
          "pinyin": "cún"
      },
      {
          "hskclass": "5",
          "japanese": "存在する",
          "chinese": "存在",
          "pinyin": "cúnzài"
      },
      {
          "hskclass": "5",
          "japanese": "誤っている",
          "chinese": "错误",
          "pinyin": "cuòwù"
      },
      {
          "hskclass": "5",
          "japanese": "措置，処置，",
          "chinese": "措施",
          "pinyin": "cuòshī"
      },
      {
          "hskclass": "5",
          "japanese": "応答する，返事をする",
          "chinese": "答应",
          "pinyin": "dāyìng"
      },
      {
          "hskclass": "5",
          "japanese": "達する，到達する",
          "chinese": "达到",
          "pinyin": "dádào"
      },
      {
          "hskclass": "5",
          "japanese": "アルバイトをする．",
          "chinese": "打工",
          "pinyin": "dǎgōng"
      },
      {
          "hskclass": "5",
          "japanese": "つきあう",
          "chinese": "打交道",
          "pinyin": "dǎjiāodào"
      },
      {
          "hskclass": "5",
          "japanese": "くしゃみをする．",
          "chinese": "打喷嚏",
          "pinyin": "dǎ pēntì"
      },
      {
          "hskclass": "5",
          "japanese": "尋ねる",
          "chinese": "打听",
          "pinyin": "dǎtīng"
      },
      {
          "hskclass": "5",
          "japanese": "あいさつする",
          "chinese": "打招呼",
          "pinyin": "dǎzhāohū"
      },
      {
          "hskclass": "5",
          "japanese": "気前がよい，物惜しみしない",
          "chinese": "大方",
          "pinyin": "dàfāng"
      },
      {
          "hskclass": "5",
          "japanese": "象",
          "chinese": "大象",
          "pinyin": "dà xiàng"
      },
      {
          "hskclass": "5",
          "japanese": "大規模",
          "chinese": "大型",
          "pinyin": "dàxíng"
      },
      {
          "hskclass": "5",
          "japanese": "ぼうぜんとする",
          "chinese": "呆",
          "pinyin": "dāi"
      },
      {
          "hskclass": "5",
          "japanese": "貸付金，借款",
          "chinese": "贷款",
          "pinyin": "dàikuǎn"
      },
      {
          "hskclass": "5",
          "japanese": "待遇",
          "chinese": "待遇",
          "pinyin": "dàiyù"
      },
      {
          "hskclass": "5",
          "japanese": "単純である",
          "chinese": "单纯",
          "pinyin": "dānchún"
      },
      {
          "hskclass": "5",
          "japanese": "単調な",
          "chinese": "单调",
          "pinyin": "dāndiào"
      },
      {
          "hskclass": "5",
          "japanese": "一人，単独",
          "chinese": "单独",
          "pinyin": "dāndú"
      },
      {
          "hskclass": "5",
          "japanese": "単位",
          "chinese": "单位",
          "pinyin": "dānwèi"
      },
      {
          "hskclass": "5",
          "japanese": "単元,区画",
          "chinese": "单元",
          "pinyin": "dānyuán"
      },
      {
          "hskclass": "5",
          "japanese": "添え受け持つ，担当する",
          "chinese": "担任",
          "pinyin": "dānrèn"
      },
      {
          "hskclass": "5",
          "japanese": "遅延",
          "chinese": "耽误",
          "pinyin": "dānwù"
      },
      {
          "hskclass": "5",
          "japanese": "臆病者，腰抜け",
          "chinese": "胆小鬼",
          "pinyin": "dǎnxiǎoguǐ"
      },
      {
          "hskclass": "5",
          "japanese": "淡い，薄い",
          "chinese": "淡",
          "pinyin": "dàn"
      },
      {
          "hskclass": "5",
          "japanese": "現代，当世",
          "chinese": "当代",
          "pinyin": "dāngdài"
      },
      {
          "hskclass": "5",
          "japanese": "遮る，防ぐ",
          "chinese": "挡",
          "pinyin": "dǎng"
      },
      {
          "hskclass": "5",
          "japanese": "島",
          "chinese": "岛",
          "pinyin": "dǎo"
      },
      {
          "hskclass": "5",
          "japanese": "運が悪い，ついていない",
          "chinese": "倒霉",
          "pinyin": "dǎoméi"
      },
      {
          "hskclass": "5",
          "japanese": "演出をする",
          "chinese": "导演",
          "pinyin": "dǎoyǎn"
      },
      {
          "hskclass": "5",
          "japanese": "もたらす，招く，引き起こす",
          "chinese": "导致",
          "pinyin": "dǎozhì"
      },
      {
          "hskclass": "5",
          "japanese": "倒れる",
          "chinese": "倒",
          "pinyin": "dào"
      },
      {
          "hskclass": "5",
          "japanese": "到着",
          "chinese": "到达",
          "pinyin": "dàodá"
      },
      {
          "hskclass": "5",
          "japanese": "道徳",
          "chinese": "道德",
          "pinyin": "dàodé"
      },
      {
          "hskclass": "5",
          "japanese": "道理，理屈",
          "chinese": "道理",
          "pinyin": "dàolǐ"
      },
      {
          "hskclass": "5",
          "japanese": "搭乗券",
          "chinese": "登机牌",
          "pinyin": "dēng jī pái"
      },
      {
          "hskclass": "5",
          "japanese": "登録する",
          "chinese": "登记",
          "pinyin": "dēngjì"
      },
      {
          "hskclass": "5",
          "japanese": "待ち望む",
          "chinese": "等待",
          "pinyin": "děngdài"
      },
      {
          "hskclass": "5",
          "japanese": "待つ",
          "chinese": "等候",
          "pinyin": "děnghòu"
      },
      {
          "hskclass": "5",
          "japanese": "等しい",
          "chinese": "等于",
          "pinyin": "děngyú"
      },
      {
          "hskclass": "5",
          "japanese": "滴る",
          "chinese": "滴",
          "pinyin": "dī"
      },
      {
          "hskclass": "5",
          "japanese": "確かに，確実に，間違いなく",
          "chinese": "的确",
          "pinyin": "díquè"
      },
      {
          "hskclass": "5",
          "japanese": "敵",
          "chinese": "敌人",
          "pinyin": "dírén"
      },
      {
          "hskclass": "5",
          "japanese": "手渡す",
          "chinese": "递",
          "pinyin": "dì"
      },
      {
          "hskclass": "5",
          "japanese": "地下道",
          "chinese": "地道",
          "pinyin": "dìdào"
      },
      {
          "hskclass": "5",
          "japanese": "地理",
          "chinese": "地理",
          "pinyin": "dìlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "地域",
          "chinese": "地区",
          "pinyin": "dìqū"
      },
      {
          "hskclass": "5",
          "japanese": "じゅうたん，カーペット",
          "chinese": "地毯",
          "pinyin": "dìtǎn"
      },
      {
          "hskclass": "5",
          "japanese": "地位",
          "chinese": "地位",
          "pinyin": "dìwèi"
      },
      {
          "hskclass": "5",
          "japanese": "地震",
          "chinese": "地震",
          "pinyin": "dìzhèn"
      },
      {
          "hskclass": "5",
          "japanese": "うなずく",
          "chinese": "点头",
          "pinyin": "diǎntóu"
      },
      {
          "hskclass": "5",
          "japanese": "軽い食事，おやつ",
          "chinese": "点心",
          "pinyin": "diǎnxīn"
      },
      {
          "hskclass": "5",
          "japanese": "電池,バッテリー",
          "chinese": "电池",
          "pinyin": "diànchí"
      },
      {
          "hskclass": "5",
          "japanese": "放送局",
          "chinese": "电台",
          "pinyin": "diàntái"
      },
      {
          "hskclass": "5",
          "japanese": "釣る",
          "chinese": "钓",
          "pinyin": "diào"
      },
      {
          "hskclass": "5",
          "japanese": "（配列順序などの）4番め",
          "chinese": "丁",
          "pinyin": "dīng"
      },
      {
          "hskclass": "5",
          "japanese": "頂，頂上，てっぺん",
          "chinese": "顶",
          "pinyin": "dǐng"
      },
      {
          "hskclass": "5",
          "japanese": "凍る，氷結する",
          "chinese": "冻",
          "pinyin": "dòng"
      },
      {
          "hskclass": "5",
          "japanese": "穴，洞穴，洞窟",
          "chinese": "洞",
          "pinyin": "dòng"
      },
      {
          "hskclass": "5",
          "japanese": "漫画 ，アニメーション",
          "chinese": "动画片",
          "pinyin": "dònghuà piàn"
      },
      {
          "hskclass": "5",
          "japanese": "からかう，いたずらする",
          "chinese": "逗",
          "pinyin": "dòu"
      },
      {
          "hskclass": "5",
          "japanese": "豆腐",
          "chinese": "豆腐",
          "pinyin": "dòufu"
      },
      {
          "hskclass": "5",
          "japanese": "独立",
          "chinese": "独立",
          "pinyin": "dúlì"
      },
      {
          "hskclass": "5",
          "japanese": "独特,ユニーク",
          "chinese": "独特",
          "pinyin": "dútè"
      },
      {
          "hskclass": "5",
          "japanese": "過ごす",
          "chinese": "度过",
          "pinyin": "dùguò"
      },
      {
          "hskclass": "5",
          "japanese": "SMS,ショートメッセージ",
          "chinese": "短信",
          "pinyin": "duǎnxìn"
      },
      {
          "hskclass": "5",
          "japanese": "積む，積み上げる",
          "chinese": "堆",
          "pinyin": "duī"
      },
      {
          "hskclass": "5",
          "japanese": "対照、対比",
          "chinese": "对比",
          "pinyin": "duìbǐ"
      },
      {
          "hskclass": "5",
          "japanese": "向かい合う，相対する",
          "chinese": "对待",
          "pinyin": "duìdài"
      },
      {
          "hskclass": "5",
          "japanese": "相手方，相手側",
          "chinese": "对方",
          "pinyin": "duìfāng"
      },
      {
          "hskclass": "5",
          "japanese": "（競技・試合の）相手",
          "chinese": "对手",
          "pinyin": "duìshǒu"
      },
      {
          "hskclass": "5",
          "japanese": "対象",
          "chinese": "对象",
          "pinyin": "duìxiàng"
      },
      {
          "hskclass": "5",
          "japanese": "…に対して，…について",
          "chinese": "对于",
          "pinyin": "duìyú"
      },
      {
          "hskclass": "5",
          "japanese": "（重量単位）トン",
          "chinese": "吨",
          "pinyin": "dūn"
      },
      {
          "hskclass": "5",
          "japanese": "しゃがむ，かがみこむ",
          "chinese": "蹲",
          "pinyin": "dūn"
      },
      {
          "hskclass": "5",
          "japanese": "～のおかげ",
          "chinese": "多亏",
          "pinyin": "duōkuī"
      },
      {
          "hskclass": "5",
          "japanese": "余分な，余った",
          "chinese": "多余",
          "pinyin": "duōyú"
      },
      {
          "hskclass": "5",
          "japanese": "隠れる，身を隠す",
          "chinese": "躲藏",
          "pinyin": "duǒcáng"
      },
      {
          "hskclass": "5",
          "japanese": "極めて悪い，下劣",
          "chinese": "恶劣",
          "pinyin": "èliè"
      },
      {
          "hskclass": "5",
          "japanese": "発表する，公表する",
          "chinese": "发表",
          "pinyin": "fābiǎo"
      },
      {
          "hskclass": "5",
          "japanese": "心配する",
          "chinese": "发愁",
          "pinyin": "fāchóu"
      },
      {
          "hskclass": "5",
          "japanese": "発達している",
          "chinese": "发达",
          "pinyin": "fādá"
      },
      {
          "hskclass": "5",
          "japanese": "ぶるぶる震える，身震いする",
          "chinese": "发抖",
          "pinyin": "fādǒu"
      },
      {
          "hskclass": "5",
          "japanese": "発揮する",
          "chinese": "发挥",
          "pinyin": "fāhuī"
      },
      {
          "hskclass": "5",
          "japanese": "発明",
          "chinese": "发明",
          "pinyin": "fāmíng"
      },
      {
          "hskclass": "5",
          "japanese": "領収書",
          "chinese": "发票",
          "pinyin": "fāpiào"
      },
      {
          "hskclass": "5",
          "japanese": "発言",
          "chinese": "发言",
          "pinyin": "fāyán"
      },
      {
          "hskclass": "5",
          "japanese": "罰金",
          "chinese": "罚款",
          "pinyin": "fákuǎn"
      },
      {
          "hskclass": "5",
          "japanese": "裁判所",
          "chinese": "法院",
          "pinyin": "fǎyuàn"
      },
      {
          "hskclass": "5",
          "japanese": "ひっくり返る",
          "chinese": "翻",
          "pinyin": "fān"
      },
      {
          "hskclass": "5",
          "japanese": "繁栄",
          "chinese": "繁荣",
          "pinyin": "fánróng"
      },
      {
          "hskclass": "5",
          "japanese": "全て",
          "chinese": "凡是",
          "pinyin": "fánshì"
      },
      {
          "hskclass": "5",
          "japanese": "逆に,却って",
          "chinese": "反而",
          "pinyin": "fǎn'ér"
      },
      {
          "hskclass": "5",
          "japanese": "繰り返す，反復する",
          "chinese": "反复",
          "pinyin": "fǎnfù"
      },
      {
          "hskclass": "5",
          "japanese": "反応する",
          "chinese": "反应",
          "pinyin": "fǎnyìng"
      },
      {
          "hskclass": "5",
          "japanese": "どうせ、いずれにせよ",
          "chinese": "反正",
          "pinyin": "fǎnzhèng"
      },
      {
          "hskclass": "5",
          "japanese": "方向",
          "chinese": "方",
          "pinyin": "fāng"
      },
      {
          "hskclass": "5",
          "japanese": "構想",
          "chinese": "方案",
          "pinyin": "fāng'àn"
      },
      {
          "hskclass": "5",
          "japanese": "方式，様式，形式",
          "chinese": "方式",
          "pinyin": "fāngshì"
      },
      {
          "hskclass": "5",
          "japanese": "妨げる",
          "chinese": "妨碍",
          "pinyin": "fáng'ài"
      },
      {
          "hskclass": "5",
          "japanese": "家主",
          "chinese": "房东",
          "pinyin": "fángdōng"
      },
      {
          "hskclass": "5",
          "japanese": "似かよっている，似ている",
          "chinese": "仿佛",
          "pinyin": "fǎngfú"
      },
      {
          "hskclass": "5",
          "japanese": "緩める",
          "chinese": "放松",
          "pinyin": "fàngsōng"
      },
      {
          "hskclass": "5",
          "japanese": "非，間違い，過",
          "chinese": "非",
          "pinyin": "fēi"
      },
      {
          "hskclass": "5",
          "japanese": "石鹸",
          "chinese": "肥皂",
          "pinyin": "féizào"
      },
      {
          "hskclass": "5",
          "japanese": "肺",
          "chinese": "肺",
          "pinyin": "fèi"
      },
      {
          "hskclass": "5",
          "japanese": "むだ話",
          "chinese": "废话",
          "pinyin": "fèihuà"
      },
      {
          "hskclass": "5",
          "japanese": "費用，経費，支出",
          "chinese": "费用",
          "pinyin": "fèiyòng"
      },
      {
          "hskclass": "5",
          "japanese": "別れる,区別する",
          "chinese": "分别",
          "pinyin": "fēnbié"
      },
      {
          "hskclass": "5",
          "japanese": "分布する",
          "chinese": "分布",
          "pinyin": "fēnbù"
      },
      {
          "hskclass": "5",
          "japanese": "分配する，割り当て",
          "chinese": "分配",
          "pinyin": "fēnpèi"
      },
      {
          "hskclass": "5",
          "japanese": "分析する",
          "chinese": "分析",
          "pinyin": "fēnxī"
      },
      {
          "hskclass": "5",
          "japanese": "入り乱れている",
          "chinese": "纷纷",
          "pinyin": "fēnfēn"
      },
      {
          "hskclass": "5",
          "japanese": "奮闘する，頑張る",
          "chinese": "奋斗",
          "pinyin": "fèndòu"
      },
      {
          "hskclass": "5",
          "japanese": "怒り,憤る",
          "chinese": "愤怒",
          "pinyin": "fènnù"
      },
      {
          "hskclass": "5",
          "japanese": "風格，品格，品位",
          "chinese": "风格",
          "pinyin": "fēnggé"
      },
      {
          "hskclass": "5",
          "japanese": "風俗，風習",
          "chinese": "风俗",
          "pinyin": "fēngsú"
      },
      {
          "hskclass": "5",
          "japanese": "危険，冒険，リスク",
          "chinese": "风险",
          "pinyin": "fēngxiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "狂気",
          "chinese": "疯狂",
          "pinyin": "fēngkuáng"
      },
      {
          "hskclass": "5",
          "japanese": "当てこする，皮肉",
          "chinese": "讽刺",
          "pinyin": "fèngcì"
      },
      {
          "hskclass": "5",
          "japanese": "否定する",
          "chinese": "否定",
          "pinyin": "fǒudìng"
      },
      {
          "hskclass": "5",
          "japanese": "否認する",
          "chinese": "否认",
          "pinyin": "fǒurèn"
      },
      {
          "hskclass": "5",
          "japanese": "手を貸す，支える",
          "chinese": "扶",
          "pinyin": "fú"
      },
      {
          "hskclass": "5",
          "japanese": "幅",
          "chinese": "幅",
          "pinyin": "fú"
      },
      {
          "hskclass": "5",
          "japanese": "服従する，従う",
          "chinese": "服从",
          "pinyin": "fúcóng"
      },
      {
          "hskclass": "5",
          "japanese": "衣服，服装",
          "chinese": "服装",
          "pinyin": "fúzhuāng"
      },
      {
          "hskclass": "5",
          "japanese": "補習する，指導する",
          "chinese": "辅导",
          "pinyin": "fǔdǎo"
      },
      {
          "hskclass": "5",
          "japanese": "支払い",
          "chinese": "付款",
          "pinyin": "fùkuǎn"
      },
      {
          "hskclass": "5",
          "japanese": "婦人，女性",
          "chinese": "妇女",
          "pinyin": "fùnǚ"
      },
      {
          "hskclass": "5",
          "japanese": "複製する，コピーする",
          "chinese": "复制",
          "pinyin": "fùzhì"
      },
      {
          "hskclass": "5",
          "japanese": "改革",
          "chinese": "改革",
          "pinyin": "gǎigé"
      },
      {
          "hskclass": "5",
          "japanese": "改良する",
          "chinese": "改进",
          "pinyin": "gǎijìn"
      },
      {
          "hskclass": "5",
          "japanese": "改善する",
          "chinese": "改善",
          "pinyin": "gǎishàn"
      },
      {
          "hskclass": "5",
          "japanese": "正す，改める",
          "chinese": "改正",
          "pinyin": "gǎizhèng"
      },
      {
          "hskclass": "5",
          "japanese": "ふたをする，かぶせる",
          "chinese": "盖",
          "pinyin": "gài"
      },
      {
          "hskclass": "5",
          "japanese": "（要点を）まとめる",
          "chinese": "概括",
          "pinyin": "gàikuò"
      },
      {
          "hskclass": "5",
          "japanese": "概念",
          "chinese": "概念",
          "pinyin": "gàiniàn"
      },
      {
          "hskclass": "5",
          "japanese": "さっぱり，てきぱき",
          "chinese": "干脆",
          "pinyin": "gāncuì"
      },
      {
          "hskclass": "5",
          "japanese": "感激する",
          "chinese": "感激",
          "pinyin": "gǎnjī"
      },
      {
          "hskclass": "5",
          "japanese": "受ける，感じる",
          "chinese": "感受",
          "pinyin": "gǎnshòu"
      },
      {
          "hskclass": "5",
          "japanese": "感想，考え",
          "chinese": "感想",
          "pinyin": "gǎnxiǎng"
      },
      {
          "hskclass": "5",
          "japanese": "急いで",
          "chinese": "赶紧",
          "pinyin": "gǎnjǐn"
      },
      {
          "hskclass": "5",
          "japanese": "大急ぎで，速やかに",
          "chinese": "赶快",
          "pinyin": "gǎnkuài"
      },
      {
          "hskclass": "5",
          "japanese": "仕事をする",
          "chinese": "干活儿",
          "pinyin": "gàn huó er"
      },
      {
          "hskclass": "5",
          "japanese": "鉄鋼",
          "chinese": "钢铁",
          "pinyin": "gāngtiě"
      },
      {
          "hskclass": "5",
          "japanese": "高級な，上等の",
          "chinese": "高档",
          "pinyin": "gāodàng"
      },
      {
          "hskclass": "5",
          "japanese": "高速道路",
          "chinese": "高速公路",
          "pinyin": "gāosù gōnglù"
      },
      {
          "hskclass": "5",
          "japanese": "行なう，する，やる",
          "chinese": "搞",
          "pinyin": "gǎo"
      },
      {
          "hskclass": "5",
          "japanese": "別れる，離れる",
          "chinese": "告别",
          "pinyin": "gàobié"
      },
      {
          "hskclass": "5",
          "japanese": "腕",
          "chinese": "胳膊",
          "pinyin": "gēbó"
      },
      {
          "hskclass": "5",
          "japanese": "鳩",
          "chinese": "鸽子",
          "pinyin": "gēzi"
      },
      {
          "hskclass": "5",
          "japanese": "隣",
          "chinese": "隔壁",
          "pinyin": "gébì"
      },
      {
          "hskclass": "5",
          "japanese": "革命",
          "chinese": "革命",
          "pinyin": "gémìng"
      },
      {
          "hskclass": "5",
          "japanese": "とりわけ，格別に",
          "chinese": "格外",
          "pinyin": "géwài"
      },
      {
          "hskclass": "5",
          "japanese": "個別的な，個々の",
          "chinese": "个别",
          "pinyin": "gèbié"
      },
      {
          "hskclass": "5",
          "japanese": "個人",
          "chinese": "个人",
          "pinyin": "gèrén"
      },
      {
          "hskclass": "5",
          "japanese": "個性",
          "chinese": "个性",
          "pinyin": "gèxìng"
      },
      {
          "hskclass": "5",
          "japanese": "各自",
          "chinese": "各自",
          "pinyin": "gèzì"
      },
      {
          "hskclass": "5",
          "japanese": "根,根源,基礎",
          "chinese": "根",
          "pinyin": "gēn"
      },
      {
          "hskclass": "5",
          "japanese": "根本，大本",
          "chinese": "根本",
          "pinyin": "gēnběn"
      },
      {
          "hskclass": "5",
          "japanese": "よりいっそう，更に一段と",
          "chinese": "更加",
          "pinyin": "gèngjiā"
      },
      {
          "hskclass": "5",
          "japanese": "公布する，公告する",
          "chinese": "公布",
          "pinyin": "gōngbù"
      },
      {
          "hskclass": "5",
          "japanese": "公開する",
          "chinese": "公开",
          "pinyin": "gōngkāi"
      },
      {
          "hskclass": "5",
          "japanese": "公平である，公正である",
          "chinese": "公平",
          "pinyin": "gōngpíng"
      },
      {
          "hskclass": "5",
          "japanese": "アパート",
          "chinese": "公寓",
          "pinyin": "gōngyù"
      },
      {
          "hskclass": "5",
          "japanese": "西暦",
          "chinese": "公元",
          "pinyin": "gōngyuán"
      },
      {
          "hskclass": "5",
          "japanese": "王女",
          "chinese": "公主",
          "pinyin": "gōngzhǔ"
      },
      {
          "hskclass": "5",
          "japanese": "工場",
          "chinese": "工厂",
          "pinyin": "gōngchǎng"
      },
      {
          "hskclass": "5",
          "japanese": "技師，エンジニア",
          "chinese": "工程师",
          "pinyin": "gōngchéngshī"
      },
      {
          "hskclass": "5",
          "japanese": "労働者",
          "chinese": "工人",
          "pinyin": "gōngrén"
      },
      {
          "hskclass": "5",
          "japanese": "工業",
          "chinese": "工业",
          "pinyin": "gōngyè"
      },
      {
          "hskclass": "5",
          "japanese": "技量,腕前",
          "chinese": "功夫",
          "pinyin": "gōngfū"
      },
      {
          "hskclass": "5",
          "japanese": "機能",
          "chinese": "功能",
          "pinyin": "gōngnéng"
      },
      {
          "hskclass": "5",
          "japanese": "貢献",
          "chinese": "贡献",
          "pinyin": "gòngxiàn"
      },
      {
          "hskclass": "5",
          "japanese": "通じる，交流",
          "chinese": "沟通",
          "pinyin": "gōutōng"
      },
      {
          "hskclass": "5",
          "japanese": "構成する，組み立てる",
          "chinese": "构成",
          "pinyin": "gòuchéng"
      },
      {
          "hskclass": "5",
          "japanese": "おば，おばさん",
          "chinese": "姑姑",
          "pinyin": "gūgū"
      },
      {
          "hskclass": "5",
          "japanese": "（未婚の）女の子",
          "chinese": "姑娘",
          "pinyin": "gūniáng"
      },
      {
          "hskclass": "5",
          "japanese": "大昔,古代",
          "chinese": "古代",
          "pinyin": "gǔdài"
      },
      {
          "hskclass": "5",
          "japanese": "古典的な",
          "chinese": "古典",
          "pinyin": "gǔdiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "古い",
          "chinese": "古老",
          "pinyin": "gǔlǎo"
      },
      {
          "hskclass": "5",
          "japanese": "奮い立たせる，激励する",
          "chinese": "鼓舞",
          "pinyin": "gǔwǔ"
      },
      {
          "hskclass": "5",
          "japanese": "株券，株",
          "chinese": "股票",
          "pinyin": "gǔpiào"
      },
      {
          "hskclass": "5",
          "japanese": "骨",
          "chinese": "骨头",
          "pinyin": "gǔtou"
      },
      {
          "hskclass": "5",
          "japanese": "固定している，定着している",
          "chinese": "固定",
          "pinyin": "gùdìng"
      },
      {
          "hskclass": "5",
          "japanese": "固体",
          "chinese": "固体",
          "pinyin": "gùtǐ"
      },
      {
          "hskclass": "5",
          "japanese": "雇用する，雇う",
          "chinese": "雇佣",
          "pinyin": "gùyōng"
      },
      {
          "hskclass": "5",
          "japanese": "登録する",
          "chinese": "挂号",
          "pinyin": "guàhào"
      },
      {
          "hskclass": "5",
          "japanese": "従順,大人しい",
          "chinese": "乖",
          "pinyin": "guāi"
      },
      {
          "hskclass": "5",
          "japanese": "角を曲がる，カーブする",
          "chinese": "拐弯",
          "pinyin": "guǎiwān"
      },
      {
          "hskclass": "5",
          "japanese": "道理で",
          "chinese": "怪不得",
          "pinyin": "guàibùdé"
      },
      {
          "hskclass": "5",
          "japanese": "役人，官職",
          "chinese": "官",
          "pinyin": "guān"
      },
      {
          "hskclass": "5",
          "japanese": "閉じる，閉める",
          "chinese": "关闭",
          "pinyin": "guānbì"
      },
      {
          "hskclass": "5",
          "japanese": "思いやる，心遣いをする",
          "chinese": "关怀",
          "pinyin": "guānhuái"
      },
      {
          "hskclass": "5",
          "japanese": "詳しく見る，観察する",
          "chinese": "观察",
          "pinyin": "guānchá"
      },
      {
          "hskclass": "5",
          "japanese": "観点",
          "chinese": "观点",
          "pinyin": "guān diǎn"
      },
      {
          "hskclass": "5",
          "japanese": "観念，思想",
          "chinese": "观念",
          "pinyin": "guānniàn"
      },
      {
          "hskclass": "5",
          "japanese": "パイプ，管",
          "chinese": "管子",
          "pinyin": "guǎnzi"
      },
      {
          "hskclass": "5",
          "japanese": "優勝者，チャンピオン",
          "chinese": "冠军",
          "pinyin": "guànjūn"
      },
      {
          "hskclass": "5",
          "japanese": "缶詰",
          "chinese": "罐头",
          "pinyin": "guàntóu"
      },
      {
          "hskclass": "5",
          "japanese": "滑らか，つるつる",
          "chinese": "光滑",
          "pinyin": "guānghuá"
      },
      {
          "hskclass": "5",
          "japanese": "ご光来を賜わる",
          "chinese": "光临",
          "pinyin": "guānglín"
      },
      {
          "hskclass": "5",
          "japanese": "光明，明るい",
          "chinese": "光明",
          "pinyin": "guāngmíng"
      },
      {
          "hskclass": "5",
          "japanese": "CD",
          "chinese": "光盘",
          "pinyin": "guāngpán"
      },
      {
          "hskclass": "5",
          "japanese": "光栄である，名誉である",
          "chinese": "光荣",
          "pinyin": "guāngróng"
      },
      {
          "hskclass": "5",
          "japanese": "広場",
          "chinese": "广场",
          "pinyin": "guǎngchǎng"
      },
      {
          "hskclass": "5",
          "japanese": "広大である",
          "chinese": "广大",
          "pinyin": "guǎngdà"
      },
      {
          "hskclass": "5",
          "japanese": "広範である",
          "chinese": "广泛",
          "pinyin": "guǎngfàn"
      },
      {
          "hskclass": "5",
          "japanese": "きまり，習わし，規則",
          "chinese": "规矩",
          "pinyin": "guījǔ"
      },
      {
          "hskclass": "5",
          "japanese": "法則",
          "chinese": "规律",
          "pinyin": "guīlǜ"
      },
      {
          "hskclass": "5",
          "japanese": "規模，スケール",
          "chinese": "规模",
          "pinyin": "guīmó"
      },
      {
          "hskclass": "5",
          "japanese": "規則，ルール",
          "chinese": "规则",
          "pinyin": "guīzé"
      },
      {
          "hskclass": "5",
          "japanese": "（店鋪の）カウンター",
          "chinese": "柜台",
          "pinyin": "guìtái"
      },
      {
          "hskclass": "5",
          "japanese": "転がる",
          "chinese": "滚",
          "pinyin": "gǔn"
      },
      {
          "hskclass": "5",
          "japanese": "鍋,釜",
          "chinese": "锅",
          "pinyin": "guō"
      },
      {
          "hskclass": "5",
          "japanese": "国籍",
          "chinese": "国籍",
          "pinyin": "guójí"
      },
      {
          "hskclass": "5",
          "japanese": "国慶節,建国記念日",
          "chinese": "国庆节",
          "pinyin": "guóqìng jié"
      },
      {
          "hskclass": "5",
          "japanese": "果実，果物",
          "chinese": "果实",
          "pinyin": "guǒshí"
      },
      {
          "hskclass": "5",
          "japanese": "行きすぎる，度を超している",
          "chinese": "过分",
          "pinyin": "guòfèn"
      },
      {
          "hskclass": "5",
          "japanese": "過敏,アレルギー",
          "chinese": "过敏",
          "pinyin": "guòmǐn"
      },
      {
          "hskclass": "5",
          "japanese": "期限切れ",
          "chinese": "过期",
          "pinyin": "guòqí"
      },
      {
          "hskclass": "5",
          "japanese": "（多く‘哈哈’の形で；笑い声）ハッハッ",
          "chinese": "哈",
          "pinyin": "hā"
      },
      {
          "hskclass": "5",
          "japanese": "税関",
          "chinese": "海关",
          "pinyin": "hǎiguān"
      },
      {
          "hskclass": "5",
          "japanese": "生鮮魚介類",
          "chinese": "海鲜",
          "pinyin": "hǎixiān"
      },
      {
          "hskclass": "5",
          "japanese": "叫ぶ，呼ぶ",
          "chinese": "喊",
          "pinyin": "hǎn"
      },
      {
          "hskclass": "5",
          "japanese": "商業，稼業",
          "chinese": "行业",
          "pinyin": "hángyè"
      },
      {
          "hskclass": "5",
          "japanese": "贅沢,華々しい",
          "chinese": "豪华",
          "pinyin": "háohuá"
      },
      {
          "hskclass": "5",
          "japanese": "好奇心がある",
          "chinese": "好奇",
          "pinyin": "hàoqí"
      },
      {
          "hskclass": "5",
          "japanese": "平和",
          "chinese": "和平",
          "pinyin": "hépíng"
      },
      {
          "hskclass": "5",
          "japanese": "どうして…する必要があろうか",
          "chinese": "何必",
          "pinyin": "hébì"
      },
      {
          "hskclass": "5",
          "japanese": "ましてや,その上",
          "chinese": "何况",
          "pinyin": "hékuàng"
      },
      {
          "hskclass": "5",
          "japanese": "合法である",
          "chinese": "合法",
          "pinyin": "héfǎ"
      },
      {
          "hskclass": "5",
          "japanese": "理にかなっている，合理的である",
          "chinese": "合理",
          "pinyin": "hélǐ"
      },
      {
          "hskclass": "5",
          "japanese": "契約",
          "chinese": "合同",
          "pinyin": "hétóng"
      },
      {
          "hskclass": "5",
          "japanese": "一緒に写真を撮る",
          "chinese": "合影",
          "pinyin": "héyǐng"
      },
      {
          "hskclass": "5",
          "japanese": "提携する",
          "chinese": "合作",
          "pinyin": "hézuò"
      },
      {
          "hskclass": "5",
          "japanese": "中心，核心",
          "chinese": "核心",
          "pinyin": "héxīn"
      },
      {
          "hskclass": "5",
          "japanese": "憎む，嫌う",
          "chinese": "恨",
          "pinyin": "hèn"
      },
      {
          "hskclass": "5",
          "japanese": "横の",
          "chinese": "横",
          "pinyin": "héng"
      },
      {
          "hskclass": "5",
          "japanese": "結果",
          "chinese": "后果",
          "pinyin": "hòuguǒ"
      },
      {
          "hskclass": "5",
          "japanese": "軽視する,無視する",
          "chinese": "忽视",
          "pinyin": "hūshì"
      },
      {
          "hskclass": "5",
          "japanese": "呼吸",
          "chinese": "呼吸",
          "pinyin": "hūxī"
      },
      {
          "hskclass": "5",
          "japanese": "ポット,壷",
          "chinese": "壶",
          "pinyin": "hú"
      },
      {
          "hskclass": "5",
          "japanese": "蝶",
          "chinese": "蝴蝶",
          "pinyin": "húdié"
      },
      {
          "hskclass": "5",
          "japanese": "でたらめを言う,いい加減なことを言う",
          "chinese": "胡说",
          "pinyin": "húshuō"
      },
      {
          "hskclass": "5",
          "japanese": "小路,横丁,路地",
          "chinese": "胡同",
          "pinyin": "hútòng"
      },
      {
          "hskclass": "5",
          "japanese": "髭",
          "chinese": "胡须",
          "pinyin": "húxū"
      },
      {
          "hskclass": "5",
          "japanese": "はっきりしない,めちゃくちゃな",
          "chinese": "糊涂",
          "pinyin": "hútú"
      },
      {
          "hskclass": "5",
          "japanese": "落花生，ピーナッツ",
          "chinese": "花生",
          "pinyin": "huāshēng"
      },
      {
          "hskclass": "5",
          "japanese": "アイススケート",
          "chinese": "滑冰",
          "pinyin": "huábīng"
      },
      {
          "hskclass": "5",
          "japanese": "操舟する，漕ぐ",
          "chinese": "划船",
          "pinyin": "huáchuán"
      },
      {
          "hskclass": "5",
          "japanese": "外国に移住している中国人",
          "chinese": "华裔",
          "pinyin": "huáyì"
      },
      {
          "hskclass": "5",
          "japanese": "話題",
          "chinese": "话题",
          "pinyin": "huàtí"
      },
      {
          "hskclass": "5",
          "japanese": "化学",
          "chinese": "化学",
          "pinyin": "huàxué"
      },
      {
          "hskclass": "5",
          "japanese": "恋しく思う，懐かしく思う",
          "chinese": "怀念",
          "pinyin": "huáiniàn"
      },
      {
          "hskclass": "5",
          "japanese": "緩和する,和らげる",
          "chinese": "缓解",
          "pinyin": "huǎnjiě"
      },
      {
          "hskclass": "5",
          "japanese": "幻想",
          "chinese": "幻想",
          "pinyin": "huànxiǎng"
      },
      {
          "hskclass": "5",
          "japanese": "慌てている",
          "chinese": "慌张",
          "pinyin": "huāngzhāng"
      },
      {
          "hskclass": "5",
          "japanese": "胡瓜",
          "chinese": "黄瓜",
          "pinyin": "huángguā"
      },
      {
          "hskclass": "5",
          "japanese": "黄金，金",
          "chinese": "黄金",
          "pinyin": "huángjīn"
      },
      {
          "hskclass": "5",
          "japanese": "皇帝",
          "chinese": "皇帝",
          "pinyin": "huángdì"
      },
      {
          "hskclass": "5",
          "japanese": "皇后",
          "chinese": "皇后",
          "pinyin": "huánghòu"
      },
      {
          "hskclass": "5",
          "japanese": "振るう，振る，振り回す",
          "chinese": "挥",
          "pinyin": "huī"
      },
      {
          "hskclass": "5",
          "japanese": "灰",
          "chinese": "灰",
          "pinyin": "huī"
      },
      {
          "hskclass": "5",
          "japanese": "ちり，ほこり",
          "chinese": "灰尘",
          "pinyin": "huīchén"
      },
      {
          "hskclass": "5",
          "japanese": "意気消沈する,落胆",
          "chinese": "灰心",
          "pinyin": "huīxīn"
      },
      {
          "hskclass": "5",
          "japanese": "回復する",
          "chinese": "恢复",
          "pinyin": "huīfù"
      },
      {
          "hskclass": "5",
          "japanese": "為替相場，為替レート",
          "chinese": "汇率",
          "pinyin": "huìlǜ"
      },
      {
          "hskclass": "5",
          "japanese": "結婚式，婚礼",
          "chinese": "婚礼",
          "pinyin": "hūnlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "婚姻，結婚",
          "chinese": "婚姻",
          "pinyin": "hūnyīn"
      },
      {
          "hskclass": "5",
          "japanese": "活動的である，活発である",
          "chinese": "活跃",
          "pinyin": "huóyuè"
      },
      {
          "hskclass": "5",
          "japanese": "マッチ",
          "chinese": "火柴",
          "pinyin": "huǒchái"
      },
      {
          "hskclass": "5",
          "japanese": "仲間，同僚，相棒",
          "chinese": "伙伴",
          "pinyin": "huǒbàn"
      },
      {
          "hskclass": "5",
          "japanese": "基本，根本，基礎",
          "chinese": "基本",
          "pinyin": "jīběn"
      },
      {
          "hskclass": "5",
          "japanese": "機械,機器",
          "chinese": "机器",
          "pinyin": "jīqì"
      },
      {
          "hskclass": "5",
          "japanese": "激しい，激烈である",
          "chinese": "激烈",
          "pinyin": "jīliè"
      },
      {
          "hskclass": "5",
          "japanese": "筋肉",
          "chinese": "肌肉",
          "pinyin": "jīròu"
      },
      {
          "hskclass": "5",
          "japanese": "合格する",
          "chinese": "及格",
          "pinyin": "jígé"
      },
      {
          "hskclass": "5",
          "japanese": "急いで,慌ただしい",
          "chinese": "急忙",
          "pinyin": "jímáng"
      },
      {
          "hskclass": "5",
          "japanese": "集団，団体，グループ",
          "chinese": "集体",
          "pinyin": "jítǐ"
      },
      {
          "hskclass": "5",
          "japanese": "集中する，集める",
          "chinese": "集中",
          "pinyin": "jízhōng"
      },
      {
          "hskclass": "5",
          "japanese": "記録",
          "chinese": "记录",
          "pinyin": "jìlù"
      },
      {
          "hskclass": "5",
          "japanese": "記憶",
          "chinese": "记忆",
          "pinyin": "jìyì"
      },
      {
          "hskclass": "5",
          "japanese": "計算する，算定する",
          "chinese": "计算",
          "pinyin": "jìsuàn"
      },
      {
          "hskclass": "5",
          "japanese": "ネクタイを締める",
          "chinese": "系领带",
          "pinyin": "xì lǐngdài"
      },
      {
          "hskclass": "5",
          "japanese": "記録",
          "chinese": "纪录",
          "pinyin": "jì lù"
      },
      {
          "hskclass": "5",
          "japanese": "規律",
          "chinese": "纪律",
          "pinyin": "jìlǜ"
      },
      {
          "hskclass": "5",
          "japanese": "記念，思い出",
          "chinese": "纪念",
          "pinyin": "jìniàn"
      },
      {
          "hskclass": "5",
          "japanese": "寂しい",
          "chinese": "寂寞",
          "pinyin": "jìmò"
      },
      {
          "hskclass": "5",
          "japanese": "家庭,家族",
          "chinese": "家庭",
          "pinyin": "jiātíng"
      },
      {
          "hskclass": "5",
          "japanese": "家事",
          "chinese": "家务",
          "pinyin": "jiāwù"
      },
      {
          "hskclass": "5",
          "japanese": "故郷",
          "chinese": "家乡",
          "pinyin": "jiāxiāng"
      },
      {
          "hskclass": "5",
          "japanese": "佳賓，嘉賓",
          "chinese": "嘉宾",
          "pinyin": "jiābīn"
      },
      {
          "hskclass": "5",
          "japanese": "留め具,クリップ",
          "chinese": "夹子",
          "pinyin": "jiázi"
      },
      {
          "hskclass": "5",
          "japanese": "（配列順序などの）1番,鎧",
          "chinese": "甲",
          "pinyin": "jiǎ"
      },
      {
          "hskclass": "5",
          "japanese": "もし…ならば",
          "chinese": "假如",
          "pinyin": "jiǎrú"
      },
      {
          "hskclass": "5",
          "japanese": "装う，ふりをする",
          "chinese": "假装",
          "pinyin": "jiǎzhuāng"
      },
      {
          "hskclass": "5",
          "japanese": "嫁に行く，嫁ぐ",
          "chinese": "嫁",
          "pinyin": "jià"
      },
      {
          "hskclass": "5",
          "japanese": "価値，値打ち",
          "chinese": "价值",
          "pinyin": "jiàzhí"
      },
      {
          "hskclass": "5",
          "japanese": "操縦する",
          "chinese": "驾驶",
          "pinyin": "jiàshǐ"
      },
      {
          "hskclass": "5",
          "japanese": "焼く，煎る",
          "chinese": "煎",
          "pinyin": "jiān"
      },
      {
          "hskclass": "5",
          "japanese": "肩",
          "chinese": "肩膀",
          "pinyin": "jiānbǎng"
      },
      {
          "hskclass": "5",
          "japanese": "断固としている,強気",
          "chinese": "坚决",
          "pinyin": "jiānjué"
      },
      {
          "hskclass": "5",
          "japanese": "強固だ，気強い",
          "chinese": "坚强",
          "pinyin": "jiānqiáng"
      },
      {
          "hskclass": "5",
          "japanese": "極めて困難である",
          "chinese": "艰巨",
          "pinyin": "jiānjù"
      },
      {
          "hskclass": "5",
          "japanese": "困難に満ちる，苦しい，つらい",
          "chinese": "艰苦",
          "pinyin": "jiānkǔ"
      },
      {
          "hskclass": "5",
          "japanese": "鋭い",
          "chinese": "尖锐",
          "pinyin": "jiānruì"
      },
      {
          "hskclass": "5",
          "japanese": "拾う",
          "chinese": "捡",
          "pinyin": "jiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "略歴",
          "chinese": "简历",
          "pinyin": "jiǎnlì"
      },
      {
          "hskclass": "5",
          "japanese": "全く，ほとんど",
          "chinese": "简直",
          "pinyin": "jiǎnzhí"
      },
      {
          "hskclass": "5",
          "japanese": "はさみ",
          "chinese": "剪刀",
          "pinyin": "jiǎndāo"
      },
      {
          "hskclass": "5",
          "japanese": "ジム,トレーニングルーム",
          "chinese": "健身房",
          "pinyin": "jiànshēnfáng"
      },
      {
          "hskclass": "5",
          "japanese": "打ち立てる，設立する，建設する",
          "chinese": "建立",
          "pinyin": "jiànlì"
      },
      {
          "hskclass": "5",
          "japanese": "建設",
          "chinese": "建设",
          "pinyin": "jiànshè"
      },
      {
          "hskclass": "5",
          "japanese": "提案",
          "chinese": "建议",
          "pinyin": "jiànyì"
      },
      {
          "hskclass": "5",
          "japanese": "建築，建造物",
          "chinese": "建筑",
          "pinyin": "jiànzhú"
      },
      {
          "hskclass": "5",
          "japanese": "鍵盤,キーボード",
          "chinese": "键盘",
          "pinyin": "jiànpán"
      },
      {
          "hskclass": "5",
          "japanese": "重んじる,凝っている,こだわる",
          "chinese": "讲究",
          "pinyin": "jiǎngjiù"
      },
      {
          "hskclass": "5",
          "japanese": "講座",
          "chinese": "讲座",
          "pinyin": "jiǎngzuò"
      },
      {
          "hskclass": "5",
          "japanese": "降下する，着陸する",
          "chinese": "降落",
          "pinyin": "jiàngluò"
      },
      {
          "hskclass": "5",
          "japanese": "醤油",
          "chinese": "酱油",
          "pinyin": "jiàngyóu"
      },
      {
          "hskclass": "5",
          "japanese": "（水や別の液体を上から）かける",
          "chinese": "浇",
          "pinyin": "jiāo"
      },
      {
          "hskclass": "5",
          "japanese": "交換する",
          "chinese": "交换",
          "pinyin": "jiāohuàn"
      },
      {
          "hskclass": "5",
          "japanese": "交際する，つきあう",
          "chinese": "交际",
          "pinyin": "jiāojì"
      },
      {
          "hskclass": "5",
          "japanese": "郊外区域,近郊",
          "chinese": "郊区",
          "pinyin": "jiāoqū"
      },
      {
          "hskclass": "5",
          "japanese": "（接着用の）のり",
          "chinese": "胶水",
          "pinyin": "jiāoshuǐ"
      },
      {
          "hskclass": "5",
          "japanese": "角度",
          "chinese": "角度",
          "pinyin": "jiǎodù"
      },
      {
          "hskclass": "5",
          "japanese": "悪賢い，ずるい",
          "chinese": "狡猾",
          "pinyin": "jiǎohuá"
      },
      {
          "hskclass": "5",
          "japanese": "教材",
          "chinese": "教材",
          "pinyin": "jiàocái"
      },
      {
          "hskclass": "5",
          "japanese": "コーチ，トレーナー",
          "chinese": "教练",
          "pinyin": "jiàoliàn"
      },
      {
          "hskclass": "5",
          "japanese": "教訓",
          "chinese": "教训",
          "pinyin": "jiàoxùn"
      },
      {
          "hskclass": "5",
          "japanese": "接触する，触れる",
          "chinese": "接触",
          "pinyin": "jiēchù"
      },
      {
          "hskclass": "5",
          "japanese": "接待する，応待する",
          "chinese": "接待",
          "pinyin": "jiēdài"
      },
      {
          "hskclass": "5",
          "japanese": "接近する，近づく",
          "chinese": "接近",
          "pinyin": "jiējìn"
      },
      {
          "hskclass": "5",
          "japanese": "受け止める,引き続き",
          "chinese": "接着",
          "pinyin": "jiēzhe"
      },
      {
          "hskclass": "5",
          "japanese": "段階",
          "chinese": "阶段",
          "pinyin": "jiēduàn"
      },
      {
          "hskclass": "5",
          "japanese": "丈夫である，しっかりしてい",
          "chinese": "结实",
          "pinyin": "jiēshi"
      },
      {
          "hskclass": "5",
          "japanese": "（物の）節,区切り，段落,祝祭日",
          "chinese": "节",
          "pinyin": "jié"
      },
      {
          "hskclass": "5",
          "japanese": "倹約する，節約する",
          "chinese": "节省",
          "pinyin": "jiéshěng"
      },
      {
          "hskclass": "5",
          "japanese": "構造，構成",
          "chinese": "结构",
          "pinyin": "jiégòu"
      },
      {
          "hskclass": "5",
          "japanese": "結合する，結びつける",
          "chinese": "结合",
          "pinyin": "jiéhé"
      },
      {
          "hskclass": "5",
          "japanese": "結論",
          "chinese": "结论",
          "pinyin": "jiélùn"
      },
      {
          "hskclass": "5",
          "japanese": "決算する，清算する",
          "chinese": "结账",
          "pinyin": "jiézhàng"
      },
      {
          "hskclass": "5",
          "japanese": "解放",
          "chinese": "解放",
          "pinyin": "jiěfàng"
      },
      {
          "hskclass": "5",
          "japanese": "コメンテーター,ナレーター,語り手",
          "chinese": "解说员",
          "pinyin": "jiěshuō yuán"
      },
      {
          "hskclass": "5",
          "japanese": "定期的な会・行事などの回数",
          "chinese": "届",
          "pinyin": "jiè"
      },
      {
          "hskclass": "5",
          "japanese": "口実",
          "chinese": "借口",
          "pinyin": "jièkǒu"
      },
      {
          "hskclass": "5",
          "japanese": "禁煙",
          "chinese": "戒烟",
          "pinyin": "jièyān"
      },
      {
          "hskclass": "5",
          "japanese": "指輪",
          "chinese": "戒指",
          "pinyin": "jièzhǐ"
      },
      {
          "hskclass": "5",
          "japanese": "金属",
          "chinese": "金属",
          "pinyin": "jīnshǔ"
      },
      {
          "hskclass": "5",
          "japanese": "締める，きつくする",
          "chinese": "紧",
          "pinyin": "jǐn"
      },
      {
          "hskclass": "5",
          "japanese": "緊急,非常",
          "chinese": "紧急",
          "pinyin": "jǐnjí"
      },
      {
          "hskclass": "5",
          "japanese": "慎重である，慎しみ深い，注意深い",
          "chinese": "谨慎",
          "pinyin": "jǐnshèn"
      },
      {
          "hskclass": "5",
          "japanese": "進歩する",
          "chinese": "进步",
          "pinyin": "jìnbù"
      },
      {
          "hskclass": "5",
          "japanese": "インポート",
          "chinese": "进口",
          "pinyin": "jìnkǒu"
      },
      {
          "hskclass": "5",
          "japanese": "近代",
          "chinese": "近代",
          "pinyin": "jìndài"
      },
      {
          "hskclass": "5",
          "japanese": "全力を尽くす,目一杯",
          "chinese": "尽力",
          "pinyin": "jìnlì"
      },
      {
          "hskclass": "5",
          "japanese": "できるだけ，なるべく，極力",
          "chinese": "尽量",
          "pinyin": "jǐnliàng"
      },
      {
          "hskclass": "5",
          "japanese": "精力",
          "chinese": "精力",
          "pinyin": "jīnglì"
      },
      {
          "hskclass": "5",
          "japanese": "経典，聖典",
          "chinese": "经典",
          "pinyin": "jīngdiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "経営する",
          "chinese": "经营",
          "pinyin": "jīngyíng"
      },
      {
          "hskclass": "5",
          "japanese": "景色，風景",
          "chinese": "景色",
          "pinyin": "jǐngsè"
      },
      {
          "hskclass": "5",
          "japanese": "敬愛する",
          "chinese": "敬爱",
          "pinyin": "jìng'ài"
      },
      {
          "hskclass": "5",
          "japanese": "バー,飲み屋",
          "chinese": "酒吧",
          "pinyin": "jiǔbā"
      },
      {
          "hskclass": "5",
          "japanese": "救う,救助，救援",
          "chinese": "救",
          "pinyin": "jiù"
      },
      {
          "hskclass": "5",
          "japanese": "救急車",
          "chinese": "救护车",
          "pinyin": "jiùhù chē"
      },
      {
          "hskclass": "5",
          "japanese": "母方のおじ",
          "chinese": "舅舅",
          "pinyin": "jiùjiu"
      },
      {
          "hskclass": "5",
          "japanese": "意外にも，なんと，よくも",
          "chinese": "居然",
          "pinyin": "jūrán"
      },
      {
          "hskclass": "5",
          "japanese": "ミカン",
          "chinese": "桔子",
          "pinyin": "júzi"
      },
      {
          "hskclass": "5",
          "japanese": "差し上げる，持ち上げる",
          "chinese": "举",
          "pinyin": "jǔ"
      },
      {
          "hskclass": "5",
          "japanese": "備える，具備する，そろえる",
          "chinese": "具备",
          "pinyin": "jùbèi"
      },
      {
          "hskclass": "5",
          "japanese": "具体的である",
          "chinese": "具体",
          "pinyin": "jùtǐ"
      },
      {
          "hskclass": "5",
          "japanese": "極めて大きい,莫大",
          "chinese": "巨大",
          "pinyin": "jùdà"
      },
      {
          "hskclass": "5",
          "japanese": "集まる,会合",
          "chinese": "聚会",
          "pinyin": "jùhuì"
      },
      {
          "hskclass": "5",
          "japanese": "クラブ",
          "chinese": "俱乐部",
          "pinyin": "jùlèbù"
      },
      {
          "hskclass": "5",
          "japanese": "（聞くところによると）…だそうだ",
          "chinese": "据说",
          "pinyin": "jùshuō"
      },
      {
          "hskclass": "5",
          "japanese": "寄付する",
          "chinese": "捐",
          "pinyin": "juān"
      },
      {
          "hskclass": "5",
          "japanese": "巻く,巻き込む",
          "chinese": "卷",
          "pinyin": "juǎn"
      },
      {
          "hskclass": "5",
          "japanese": "決勝戦",
          "chinese": "决赛",
          "pinyin": "juésài"
      },
      {
          "hskclass": "5",
          "japanese": "決心，決意",
          "chinese": "决心",
          "pinyin": "juéxīn"
      },
      {
          "hskclass": "5",
          "japanese": "絶対的な",
          "chinese": "绝对",
          "pinyin": "juéduì"
      },
      {
          "hskclass": "5",
          "japanese": "役柄,役割",
          "chinese": "角色",
          "pinyin": "juésè"
      },
      {
          "hskclass": "5",
          "japanese": "軍事",
          "chinese": "军事",
          "pinyin": "jūnshì"
      },
      {
          "hskclass": "5",
          "japanese": "むらがない，均等である，平均化されている",
          "chinese": "均匀",
          "pinyin": "jūnyún"
      },
      {
          "hskclass": "5",
          "japanese": "トラック",
          "chinese": "卡车",
          "pinyin": "kǎchē"
      },
      {
          "hskclass": "5",
          "japanese": "開発する",
          "chinese": "开发",
          "pinyin": "kāifā"
      },
      {
          "hskclass": "5",
          "japanese": "咲く，開く",
          "chinese": "开放",
          "pinyin": "kāifàng"
      },
      {
          "hskclass": "5",
          "japanese": "開会式",
          "chinese": "开幕式",
          "pinyin": "kāimù shì"
      },
      {
          "hskclass": "5",
          "japanese": "愉快である，楽しい，うれしい",
          "chinese": "开心",
          "pinyin": "kāixīn"
      },
      {
          "hskclass": "5",
          "japanese": "たたき切る，打ちきる",
          "chinese": "砍",
          "pinyin": "kǎn"
      },
      {
          "hskclass": "5",
          "japanese": "軽く見る，軽べつする，さげすむ",
          "chinese": "看不起",
          "pinyin": "kànbùqǐ"
      },
      {
          "hskclass": "5",
          "japanese": "見たところ，思うに",
          "chinese": "看来",
          "pinyin": "kàn lái"
      },
      {
          "hskclass": "5",
          "japanese": "抗議する",
          "chinese": "抗议",
          "pinyin": "kàngyì"
      },
      {
          "hskclass": "5",
          "japanese": "アヒルの丸焼き（北京烤鸭＝北京ダック）",
          "chinese": "烤鸭",
          "pinyin": "kǎoyā"
      },
      {
          "hskclass": "5",
          "japanese": "個，粒",
          "chinese": "颗",
          "pinyin": "kē"
      },
      {
          "hskclass": "5",
          "japanese": "してみると…ということがわかる，…と知ることができる",
          "chinese": "可见",
          "pinyin": "kějiàn"
      },
      {
          "hskclass": "5",
          "japanese": "信頼できる，頼りになる",
          "chinese": "可靠",
          "pinyin": "kěkào"
      },
      {
          "hskclass": "5",
          "japanese": "恐ろしい，怖い",
          "chinese": "可怕",
          "pinyin": "kěpà"
      },
      {
          "hskclass": "5",
          "japanese": "課程",
          "chinese": "课程",
          "pinyin": "kèchéng"
      },
      {
          "hskclass": "5",
          "japanese": "（重量単位）グラム",
          "chinese": "克",
          "pinyin": "kè"
      },
      {
          "hskclass": "5",
          "japanese": "克服する",
          "chinese": "克服",
          "pinyin": "kèfú"
      },
      {
          "hskclass": "5",
          "japanese": "よく苦しみに耐える，骨身を惜しまない",
          "chinese": "刻苦",
          "pinyin": "kèkǔ"
      },
      {
          "hskclass": "5",
          "japanese": "客観",
          "chinese": "客观",
          "pinyin": "kèguān"
      },
      {
          "hskclass": "5",
          "japanese": "応接間，客間",
          "chinese": "客厅",
          "pinyin": "kètīng"
      },
      {
          "hskclass": "5",
          "japanese": "空間，宇宙",
          "chinese": "空间",
          "pinyin": "kōngjiān"
      },
      {
          "hskclass": "5",
          "japanese": "恐怖,恐ろしい",
          "chinese": "恐怖",
          "pinyin": "kǒngbù"
      },
      {
          "hskclass": "5",
          "japanese": "手がすく，暇になる",
          "chinese": "空闲",
          "pinyin": "kòngxián"
      },
      {
          "hskclass": "5",
          "japanese": "支配する，制圧する，コントロールする",
          "chinese": "控制",
          "pinyin": "kòngzhì"
      },
      {
          "hskclass": "5",
          "japanese": "味,好み",
          "chinese": "口味",
          "pinyin": "kǒuwèi"
      },
      {
          "hskclass": "5",
          "japanese": "誇張する,褒める",
          "chinese": "夸",
          "pinyin": "kuā"
      },
      {
          "hskclass": "5",
          "japanese": "会計",
          "chinese": "会计",
          "pinyin": "kuàijì"
      },
      {
          "hskclass": "5",
          "japanese": "ミネラルウォーター",
          "chinese": "矿泉水",
          "pinyin": "kuàngquán shuǐ"
      },
      {
          "hskclass": "5",
          "japanese": "唐辛子",
          "chinese": "辣椒",
          "pinyin": "làjiāo"
      },
      {
          "hskclass": "5",
          "japanese": "ロウソク",
          "chinese": "蜡烛",
          "pinyin": "làzhú"
      },
      {
          "hskclass": "5",
          "japanese": "…から来る",
          "chinese": "来自",
          "pinyin": "láizì"
      },
      {
          "hskclass": "5",
          "japanese": "（道を）ふさぐ",
          "chinese": "拦",
          "pinyin": "lán"
      },
      {
          "hskclass": "5",
          "japanese": "腐っている,ただれ,軟らかい",
          "chinese": "烂",
          "pinyin": "làn"
      },
      {
          "hskclass": "5",
          "japanese": "狼",
          "chinese": "狼",
          "pinyin": "láng"
      },
      {
          "hskclass": "5",
          "japanese": "労働する，働く",
          "chinese": "劳动",
          "pinyin": "láodòng"
      },
      {
          "hskclass": "5",
          "japanese": "ご足労をかける",
          "chinese": "劳驾",
          "pinyin": "láojià"
      },
      {
          "hskclass": "5",
          "japanese": "庶民，民衆，一般人",
          "chinese": "老百姓",
          "pinyin": "lǎobǎixìng"
      },
      {
          "hskclass": "5",
          "japanese": "店主，経営者",
          "chinese": "老板",
          "pinyin": "lǎobǎn"
      },
      {
          "hskclass": "5",
          "japanese": "まじめである，正直である，誠実である",
          "chinese": "老实",
          "pinyin": "lǎoshí"
      },
      {
          "hskclass": "5",
          "japanese": "ネズミ",
          "chinese": "老鼠",
          "pinyin": "lǎoshǔ"
      },
      {
          "hskclass": "5",
          "japanese": "母方の祖母",
          "chinese": "姥姥",
          "pinyin": "lǎolao"
      },
      {
          "hskclass": "5",
          "japanese": "楽観的である",
          "chinese": "乐观",
          "pinyin": "lèguān"
      },
      {
          "hskclass": "5",
          "japanese": "雷",
          "chinese": "雷",
          "pinyin": "léi"
      },
      {
          "hskclass": "5",
          "japanese": "種類，たぐい",
          "chinese": "类",
          "pinyin": "lèi"
      },
      {
          "hskclass": "5",
          "japanese": "梨",
          "chinese": "梨",
          "pinyin": "lí"
      },
      {
          "hskclass": "5",
          "japanese": "離婚",
          "chinese": "离婚",
          "pinyin": "líhūn"
      },
      {
          "hskclass": "5",
          "japanese": "（長さの単位）センチメートル",
          "chinese": "厘米",
          "pinyin": "límǐ"
      },
      {
          "hskclass": "5",
          "japanese": "日曜日",
          "chinese": "礼拜天",
          "pinyin": "lǐbài tiān"
      },
      {
          "hskclass": "5",
          "japanese": "理論",
          "chinese": "理论",
          "pinyin": "lǐlùn"
      },
      {
          "hskclass": "5",
          "japanese": "理由",
          "chinese": "理由",
          "pinyin": "lǐyóu"
      },
      {
          "hskclass": "5",
          "japanese": "穀物",
          "chinese": "粒",
          "pinyin": "lì"
      },
      {
          "hskclass": "5",
          "japanese": "立方，3乗",
          "chinese": "立方",
          "pinyin": "lìfāng"
      },
      {
          "hskclass": "5",
          "japanese": "直ちに，即座に，すぐに",
          "chinese": "立即",
          "pinyin": "lìjí"
      },
      {
          "hskclass": "5",
          "japanese": "直ちに，即座に，すぐに",
          "chinese": "立刻",
          "pinyin": "lìkè"
      },
      {
          "hskclass": "5",
          "japanese": "力，体力，エネルギー",
          "chinese": "力量",
          "pinyin": "lìliàng"
      },
      {
          "hskclass": "5",
          "japanese": "利潤,利益,儲け",
          "chinese": "利润",
          "pinyin": "lìrùn"
      },
      {
          "hskclass": "5",
          "japanese": "利息,利子",
          "chinese": "利息",
          "pinyin": "lìxí"
      },
      {
          "hskclass": "5",
          "japanese": "利益",
          "chinese": "利益",
          "pinyin": "lìyì"
      },
      {
          "hskclass": "5",
          "japanese": "利用する",
          "chinese": "利用",
          "pinyin": "lìyòng"
      },
      {
          "hskclass": "5",
          "japanese": "急いで",
          "chinese": "连忙",
          "pinyin": "liánmáng"
      },
      {
          "hskclass": "5",
          "japanese": "連続ドラマ,シリーズ",
          "chinese": "连续剧",
          "pinyin": "liánxùjù"
      },
      {
          "hskclass": "5",
          "japanese": "連合する，団結する",
          "chinese": "联合",
          "pinyin": "liánhé"
      },
      {
          "hskclass": "5",
          "japanese": "恋愛する，恋",
          "chinese": "恋爱",
          "pinyin": "liàn'ài"
      },
      {
          "hskclass": "5",
          "japanese": "良好",
          "chinese": "良好",
          "pinyin": "liánghǎo"
      },
      {
          "hskclass": "5",
          "japanese": "穀物，食糧，主食",
          "chinese": "粮食",
          "pinyin": "liángshí"
      },
      {
          "hskclass": "5",
          "japanese": "素晴らしい,立派，大したものである",
          "chinese": "了不起",
          "pinyin": "liǎobùqǐ"
      },
      {
          "hskclass": "5",
          "japanese": "短期的な，臨時の，一時的な",
          "chinese": "临时",
          "pinyin": "línshí"
      },
      {
          "hskclass": "5",
          "japanese": "鈴,ベル",
          "chinese": "铃",
          "pinyin": "líng"
      },
      {
          "hskclass": "5",
          "japanese": "部品，パーツ",
          "chinese": "零件",
          "pinyin": "língjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "小銭",
          "chinese": "零钱",
          "pinyin": "língqián"
      },
      {
          "hskclass": "5",
          "japanese": "間食,スナック",
          "chinese": "零食",
          "pinyin": "língshí"
      },
      {
          "hskclass": "5",
          "japanese": "柔軟,機敏である,融通",
          "chinese": "灵活",
          "pinyin": "línghuó"
      },
      {
          "hskclass": "5",
          "japanese": "指導者，リーダー",
          "chinese": "领导",
          "pinyin": "lǐngdǎo"
      },
      {
          "hskclass": "5",
          "japanese": "区域，領域",
          "chinese": "领域",
          "pinyin": "lǐngyù"
      },
      {
          "hskclass": "5",
          "japanese": "（事跡・物語・作品・歌曲などが）伝播する，流布する，広く伝わる",
          "chinese": "流传",
          "pinyin": "liúchuán"
      },
      {
          "hskclass": "5",
          "japanese": "ざっと目を通す，さっと見渡す",
          "chinese": "浏览",
          "pinyin": "liúlǎn"
      },
      {
          "hskclass": "5",
          "japanese": "竜,ドラゴン",
          "chinese": "龙",
          "pinyin": "lóng"
      },
      {
          "hskclass": "5",
          "japanese": "漏る，漏れる",
          "chinese": "漏",
          "pinyin": "lòu"
      },
      {
          "hskclass": "5",
          "japanese": "外に出る，人の目に触れる，現われ出る",
          "chinese": "露",
          "pinyin": "lù"
      },
      {
          "hskclass": "5",
          "japanese": "陸，陸地",
          "chinese": "陆地",
          "pinyin": "lùdì"
      },
      {
          "hskclass": "5",
          "japanese": "次々と，続々と",
          "chinese": "陆续",
          "pinyin": "lùxù"
      },
      {
          "hskclass": "5",
          "japanese": "採用する",
          "chinese": "录取",
          "pinyin": "lùqǔ"
      },
      {
          "hskclass": "5",
          "japanese": "録音，録音したもの",
          "chinese": "录音",
          "pinyin": "lù yīn"
      },
      {
          "hskclass": "5",
          "japanese": "順番に,順々に,代わる代わる",
          "chinese": "轮流",
          "pinyin": "lúnliú"
      },
      {
          "hskclass": "5",
          "japanese": "論文",
          "chinese": "论文",
          "pinyin": "lùnwén"
      },
      {
          "hskclass": "5",
          "japanese": "論理,ロジック",
          "chinese": "逻辑",
          "pinyin": "luójí"
      },
      {
          "hskclass": "5",
          "japanese": "後れる，後になる，落伍する",
          "chinese": "落后",
          "pinyin": "luòhòu"
      },
      {
          "hskclass": "5",
          "japanese": "ののしる，悪口を言う",
          "chinese": "骂",
          "pinyin": "mà"
      },
      {
          "hskclass": "5",
          "japanese": "マイクロフォン,マイク",
          "chinese": "麦克风",
          "pinyin": "màikèfēng"
      },
      {
          "hskclass": "5",
          "japanese": "（餡が入っていない小麦粉で作った中国風蒸しパン）マントー",
          "chinese": "馒头",
          "pinyin": "mántou"
      },
      {
          "hskclass": "5",
          "japanese": "満足する",
          "chinese": "满足",
          "pinyin": "mǎnzú"
      },
      {
          "hskclass": "5",
          "japanese": "髪の毛，（獣の）毛，（鳥の）羽毛",
          "chinese": "毛",
          "pinyin": "máo"
      },
      {
          "hskclass": "5",
          "japanese": "悪習，悪い癖,故障",
          "chinese": "毛病",
          "pinyin": "máo bìng"
      },
      {
          "hskclass": "5",
          "japanese": "矛盾",
          "chinese": "矛盾",
          "pinyin": "máodùn"
      },
      {
          "hskclass": "5",
          "japanese": "危険を冒す，冒険する",
          "chinese": "冒险",
          "pinyin": "màoxiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "貿易，交易，取引，通商",
          "chinese": "贸易",
          "pinyin": "màoyì"
      },
      {
          "hskclass": "5",
          "japanese": "眉毛,眉",
          "chinese": "眉毛",
          "pinyin": "méimáo"
      },
      {
          "hskclass": "5",
          "japanese": "石炭",
          "chinese": "煤炭",
          "pinyin": "méitàn"
      },
      {
          "hskclass": "5",
          "japanese": "美術",
          "chinese": "美术",
          "pinyin": "měishù"
      },
      {
          "hskclass": "5",
          "japanese": "魅力",
          "chinese": "魅力",
          "pinyin": "mèilì"
      },
      {
          "hskclass": "5",
          "japanese": "道に迷う, ((生理)) 内耳",
          "chinese": "迷路",
          "pinyin": "mílù"
      },
      {
          "hskclass": "5",
          "japanese": "なぞなぞ",
          "chinese": "谜语",
          "pinyin": "míyǔ"
      },
      {
          "hskclass": "5",
          "japanese": "ミツバチ",
          "chinese": "蜜蜂",
          "pinyin": "mìfēng"
      },
      {
          "hskclass": "5",
          "japanese": "（人間・事物の関係・協力などが）密接である",
          "chinese": "密切",
          "pinyin": "mìqiè"
      },
      {
          "hskclass": "5",
          "japanese": "秘密",
          "chinese": "秘密",
          "pinyin": "mìmì"
      },
      {
          "hskclass": "5",
          "japanese": "秘書",
          "chinese": "秘书",
          "pinyin": "mìshū"
      },
      {
          "hskclass": "5",
          "japanese": "棉花，棉",
          "chinese": "棉花",
          "pinyin": "miánhuā"
      },
      {
          "hskclass": "5",
          "japanese": "向かい合う，面と向かう",
          "chinese": "面对",
          "pinyin": "miàn duì"
      },
      {
          "hskclass": "5",
          "japanese": "面積",
          "chinese": "面积",
          "pinyin": "miànjī"
      },
      {
          "hskclass": "5",
          "japanese": "面する，臨む,直面する",
          "chinese": "面临",
          "pinyin": "miànlín"
      },
      {
          "hskclass": "5",
          "japanese": "すらりとしている，スリムである",
          "chinese": "苗条",
          "pinyin": "miáotiáo"
      },
      {
          "hskclass": "5",
          "japanese": "描写する",
          "chinese": "描写",
          "pinyin": "miáoxiě"
      },
      {
          "hskclass": "5",
          "japanese": "秒",
          "chinese": "秒",
          "pinyin": "miǎo"
      },
      {
          "hskclass": "5",
          "japanese": "民主,民主主義",
          "chinese": "民主",
          "pinyin": "mínzhǔ"
      },
      {
          "hskclass": "5",
          "japanese": "明確である",
          "chinese": "明确",
          "pinyin": "míngquè"
      },
      {
          "hskclass": "5",
          "japanese": "明らかである，はっきりしている，顕著である",
          "chinese": "明显",
          "pinyin": "míngxiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "郵便はがき,はがき",
          "chinese": "明信片",
          "pinyin": "míngxìnpiàn"
      },
      {
          "hskclass": "5",
          "japanese": "スター，花形",
          "chinese": "明星",
          "pinyin": "míngxīng"
      },
      {
          "hskclass": "5",
          "japanese": "名の通った商標，有名ブランド",
          "chinese": "名牌",
          "pinyin": "míngpái"
      },
      {
          "hskclass": "5",
          "japanese": "名刺",
          "chinese": "名片",
          "pinyin": "míngpiàn"
      },
      {
          "hskclass": "5",
          "japanese": "名跡",
          "chinese": "名胜古迹",
          "pinyin": "míngshèng gǔjī"
      },
      {
          "hskclass": "5",
          "japanese": "命令する，命じる",
          "chinese": "命令",
          "pinyin": "mìnglìng"
      },
      {
          "hskclass": "5",
          "japanese": "運命，定め",
          "chinese": "命运",
          "pinyin": "mìngyùn"
      },
      {
          "hskclass": "5",
          "japanese": "触る，なでる,探る",
          "chinese": "摸",
          "pinyin": "mō"
      },
      {
          "hskclass": "5",
          "japanese": "模倣する，まねる",
          "chinese": "模仿",
          "pinyin": "mófǎng"
      },
      {
          "hskclass": "5",
          "japanese": "ぼんやりしている，はっきりしない",
          "chinese": "模糊",
          "pinyin": "móhú"
      },
      {
          "hskclass": "5",
          "japanese": "オートバイ,バイク",
          "chinese": "摩托车",
          "pinyin": "mótuō chē"
      },
      {
          "hskclass": "5",
          "japanese": "よく知らない，見知らぬ",
          "chinese": "陌生",
          "pinyin": "mòshēng"
      },
      {
          "hskclass": "5",
          "japanese": "某，ある",
          "chinese": "某",
          "pinyin": "mǒu"
      },
      {
          "hskclass": "5",
          "japanese": "目標",
          "chinese": "目标",
          "pinyin": "mùbiāo"
      },
      {
          "hskclass": "5",
          "japanese": "目録，カタログ",
          "chinese": "目录",
          "pinyin": "mùlù"
      },
      {
          "hskclass": "5",
          "japanese": "目下，現在",
          "chinese": "目前",
          "pinyin": "mùqián"
      },
      {
          "hskclass": "5",
          "japanese": "丸太，木",
          "chinese": "木头",
          "pinyin": "mùtou"
      },
      {
          "hskclass": "5",
          "japanese": "たとえ…であっても",
          "chinese": "哪怕",
          "pinyin": "nǎpà"
      },
      {
          "hskclass": "5",
          "japanese": "なるほど，道理で",
          "chinese": "难怪",
          "pinyin": "nánguài"
      },
      {
          "hskclass": "5",
          "japanese": "醜い，不格好である",
          "chinese": "难看",
          "pinyin": "nánkàn"
      },
      {
          "hskclass": "5",
          "japanese": "頭部，頭",
          "chinese": "脑袋",
          "pinyin": "nǎodai"
      },
      {
          "hskclass": "5",
          "japanese": "内科",
          "chinese": "内科",
          "pinyin": "nèikē"
      },
      {
          "hskclass": "5",
          "japanese": "若い，柔らかい",
          "chinese": "嫩",
          "pinyin": "nèn"
      },
      {
          "hskclass": "5",
          "japanese": "仕事がよくできる，敏腕",
          "chinese": "能干",
          "pinyin": "nénggàn"
      },
      {
          "hskclass": "5",
          "japanese": "エネルギー源",
          "chinese": "能源",
          "pinyin": "néngyuán"
      },
      {
          "hskclass": "5",
          "japanese": "時代,年代",
          "chinese": "年代",
          "pinyin": "niándài"
      },
      {
          "hskclass": "5",
          "japanese": "年，年齢",
          "chinese": "年纪",
          "pinyin": "nián jì"
      },
      {
          "hskclass": "5",
          "japanese": "思う，気にかける，懐かしく思う,読む",
          "chinese": "念",
          "pinyin": "niàn"
      },
      {
          "hskclass": "5",
          "japanese": "むしろ（…する），（…するよりは）むしろ（…した方がよい）",
          "chinese": "宁可",
          "pinyin": "nìngkě"
      },
      {
          "hskclass": "5",
          "japanese": "ジーンズ，ジーパン",
          "chinese": "牛仔裤",
          "pinyin": "niúzǎikù"
      },
      {
          "hskclass": "5",
          "japanese": "濃い",
          "chinese": "浓",
          "pinyin": "nóng"
      },
      {
          "hskclass": "5",
          "japanese": "農民,百姓",
          "chinese": "农民",
          "pinyin": "nóngmín"
      },
      {
          "hskclass": "5",
          "japanese": "農業",
          "chinese": "农业",
          "pinyin": "nóngyè"
      },
      {
          "hskclass": "5",
          "japanese": "(女性に対する一般的な敬称)女史",
          "chinese": "女士",
          "pinyin": "nǚshì"
      },
      {
          "hskclass": "5",
          "japanese": "偶然である,たまたま",
          "chinese": "偶然",
          "pinyin": "ǒurán"
      },
      {
          "hskclass": "5",
          "japanese": "たたく，打つ",
          "chinese": "拍",
          "pinyin": "pāi"
      },
      {
          "hskclass": "5",
          "japanese": "列に並ぶ，列を作る，順番を待つ",
          "chinese": "排队",
          "pinyin": "páiduì"
      },
      {
          "hskclass": "5",
          "japanese": "バレーボール",
          "chinese": "排球",
          "pinyin": "páiqiú"
      },
      {
          "hskclass": "5",
          "japanese": "派,派閥",
          "chinese": "派",
          "pinyin": "pài"
      },
      {
          "hskclass": "5",
          "japanese": "待ち望む，待ち焦がれる，切に望む",
          "chinese": "盼望",
          "pinyin": "pànwàng"
      },
      {
          "hskclass": "5",
          "japanese": "弁償する，賠賞する",
          "chinese": "赔偿",
          "pinyin": "péicháng"
      },
      {
          "hskclass": "5",
          "japanese": "培養する，育てる",
          "chinese": "培养",
          "pinyin": "péiyǎng"
      },
      {
          "hskclass": "5",
          "japanese": "感心する",
          "chinese": "佩服",
          "pinyin": "pèifú"
      },
      {
          "hskclass": "5",
          "japanese": "協力する",
          "chinese": "配合",
          "pinyin": "pèihé"
      },
      {
          "hskclass": "5",
          "japanese": "鉢",
          "chinese": "盆",
          "pinyin": "pén"
      },
      {
          "hskclass": "5",
          "japanese": "出会う",
          "chinese": "碰见",
          "pinyin": "pèngjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "羽織る",
          "chinese": "披",
          "pinyin": "pī"
      },
      {
          "hskclass": "5",
          "japanese": "ひっぱたく",
          "chinese": "批",
          "pinyin": "pī"
      },
      {
          "hskclass": "5",
          "japanese": "承認する",
          "chinese": "批准",
          "pinyin": "pīzhǔn"
      },
      {
          "hskclass": "5",
          "japanese": "革靴",
          "chinese": "皮鞋",
          "pinyin": "píxié"
      },
      {
          "hskclass": "5",
          "japanese": "疲労",
          "chinese": "疲劳",
          "pinyin": "píláo"
      },
      {
          "hskclass": "5",
          "japanese": "匹敵する",
          "chinese": "匹",
          "pinyin": "pǐ"
      },
      {
          "hskclass": "5",
          "japanese": "カード状のもの",
          "chinese": "片",
          "pinyin": "piàn"
      },
      {
          "hskclass": "5",
          "japanese": "一方的な",
          "chinese": "片面",
          "pinyin": "piànmiàn"
      },
      {
          "hskclass": "5",
          "japanese": "はためく",
          "chinese": "飘",
          "pinyin": "piāo"
      },
      {
          "hskclass": "5",
          "japanese": "チャンネル",
          "chinese": "频道",
          "pinyin": "píndào"
      },
      {
          "hskclass": "5",
          "japanese": "品種",
          "chinese": "品种",
          "pinyin": "pǐnzhǒng"
      },
      {
          "hskclass": "5",
          "japanese": "寄りかかる",
          "chinese": "凭",
          "pinyin": "píng"
      },
      {
          "hskclass": "5",
          "japanese": "平らである",
          "chinese": "平",
          "pinyin": "píng"
      },
      {
          "hskclass": "5",
          "japanese": "普通である",
          "chinese": "平常",
          "pinyin": "píngcháng"
      },
      {
          "hskclass": "5",
          "japanese": "平等",
          "chinese": "平等",
          "pinyin": "píngděng"
      },
      {
          "hskclass": "5",
          "japanese": "平方，2乗",
          "chinese": "平方",
          "pinyin": "píngfāng"
      },
      {
          "hskclass": "5",
          "japanese": "釣り合っている",
          "chinese": "平衡",
          "pinyin": "pínghéng"
      },
      {
          "hskclass": "5",
          "japanese": "平静",
          "chinese": "平静",
          "pinyin": "píngjìng"
      },
      {
          "hskclass": "5",
          "japanese": "平均する",
          "chinese": "平均",
          "pinyin": "píngjūn"
      },
      {
          "hskclass": "5",
          "japanese": "評価する",
          "chinese": "评价",
          "pinyin": "píngjià"
      },
      {
          "hskclass": "5",
          "japanese": "破産する",
          "chinese": "破产",
          "pinyin": "pòchǎn"
      },
      {
          "hskclass": "5",
          "japanese": "破壊する",
          "chinese": "破坏",
          "pinyin": "pòhuài"
      },
      {
          "hskclass": "5",
          "japanese": "差迫る",
          "chinese": "迫切",
          "pinyin": "pòqiè"
      },
      {
          "hskclass": "5",
          "japanese": "素朴",
          "chinese": "朴素",
          "pinyin": "púsù"
      },
      {
          "hskclass": "5",
          "japanese": "期待する",
          "chinese": "期待",
          "pinyin": "qídài"
      },
      {
          "hskclass": "5",
          "japanese": "期間",
          "chinese": "期间",
          "pinyin": "qíjiān"
      },
      {
          "hskclass": "5",
          "japanese": "残りの",
          "chinese": "其余",
          "pinyin": "qíyú"
      },
      {
          "hskclass": "5",
          "japanese": "奇跡",
          "chinese": "奇迹",
          "pinyin": "qíjī"
      },
      {
          "hskclass": "5",
          "japanese": "啓発する",
          "chinese": "启发",
          "pinyin": "qǐfā"
      },
      {
          "hskclass": "5",
          "japanese": "企てる",
          "chinese": "企图",
          "pinyin": "qìtú"
      },
      {
          "hskclass": "5",
          "japanese": "ビジネス",
          "chinese": "企业",
          "pinyin": "qǐyè"
      },
      {
          "hskclass": "5",
          "japanese": "雰囲気",
          "chinese": "气氛",
          "pinyin": "qìfēn"
      },
      {
          "hskclass": "5",
          "japanese": "ガソリン",
          "chinese": "汽油",
          "pinyin": "qìyóu"
      },
      {
          "hskclass": "5",
          "japanese": "（人・家畜を）引く，引っ張る",
          "chinese": "牵",
          "pinyin": "qiān"
      },
      {
          "hskclass": "5",
          "japanese": "謙虚である",
          "chinese": "谦虚",
          "pinyin": "qiānxū"
      },
      {
          "hskclass": "5",
          "japanese": "署名",
          "chinese": "签字",
          "pinyin": "qiānzì"
      },
      {
          "hskclass": "5",
          "japanese": "前途",
          "chinese": "前途",
          "pinyin": "qiántú"
      },
      {
          "hskclass": "5",
          "japanese": "浅い",
          "chinese": "浅",
          "pinyin": "qiǎn"
      },
      {
          "hskclass": "5",
          "japanese": "あくび",
          "chinese": "欠",
          "pinyin": "qiàn"
      },
      {
          "hskclass": "5",
          "japanese": "銃",
          "chinese": "枪",
          "pinyin": "qiāng"
      },
      {
          "hskclass": "5",
          "japanese": "強調する",
          "chinese": "强调",
          "pinyin": "qiángdiào"
      },
      {
          "hskclass": "5",
          "japanese": "強烈である",
          "chinese": "强烈",
          "pinyin": "qiángliè"
      },
      {
          "hskclass": "5",
          "japanese": "奪い取る",
          "chinese": "抢",
          "pinyin": "qiǎng"
      },
      {
          "hskclass": "5",
          "japanese": "声を立てずに",
          "chinese": "悄悄",
          "pinyin": "qiāoqiāo"
      },
      {
          "hskclass": "5",
          "japanese": "見る",
          "chinese": "瞧",
          "pinyin": "qiáo"
      },
      {
          "hskclass": "5",
          "japanese": "巧妙である",
          "chinese": "巧妙",
          "pinyin": "qiǎomiào"
      },
      {
          "hskclass": "5",
          "japanese": "切る",
          "chinese": "切",
          "pinyin": "qiè"
      },
      {
          "hskclass": "5",
          "japanese": "親愛なる",
          "chinese": "亲爱",
          "pinyin": "qīn'ài"
      },
      {
          "hskclass": "5",
          "japanese": "親しみ深い",
          "chinese": "亲切",
          "pinyin": "qīnqiè"
      },
      {
          "hskclass": "5",
          "japanese": "自ら",
          "chinese": "亲自",
          "pinyin": "qīnzì"
      },
      {
          "hskclass": "5",
          "japanese": "侵略する",
          "chinese": "侵略",
          "pinyin": "qīnlüè"
      },
      {
          "hskclass": "5",
          "japanese": "張り切って精を出している",
          "chinese": "勤奋",
          "pinyin": "qínfèn"
      },
      {
          "hskclass": "5",
          "japanese": "勤勉でよく働く",
          "chinese": "勤劳",
          "pinyin": "qínláo"
      },
      {
          "hskclass": "5",
          "japanese": "青い",
          "chinese": "青",
          "pinyin": "qīng"
      },
      {
          "hskclass": "5",
          "japanese": "青少年",
          "chinese": "青少年",
          "pinyin": "qīngshàonián"
      },
      {
          "hskclass": "5",
          "japanese": "軽視する",
          "chinese": "轻视",
          "pinyin": "qīngshì"
      },
      {
          "hskclass": "5",
          "japanese": "青春",
          "chinese": "青春",
          "pinyin": "qīngchūn"
      },
      {
          "hskclass": "5",
          "japanese": "淡白である",
          "chinese": "清淡",
          "pinyin": "qīngdàn"
      },
      {
          "hskclass": "5",
          "japanese": "情景",
          "chinese": "情景",
          "pinyin": "qíngjǐng"
      },
      {
          "hskclass": "5",
          "japanese": "意欲",
          "chinese": "情绪",
          "pinyin": "qíngxù"
      },
      {
          "hskclass": "5",
          "japanese": "要望",
          "chinese": "请求",
          "pinyin": "qǐngqiú"
      },
      {
          "hskclass": "5",
          "japanese": "祝う",
          "chinese": "庆祝",
          "pinyin": "qìngzhù"
      },
      {
          "hskclass": "5",
          "japanese": "球技ファン",
          "chinese": "球迷",
          "pinyin": "qiúmí"
      },
      {
          "hskclass": "5",
          "japanese": "動向",
          "chinese": "趋势",
          "pinyin": "qūshì"
      },
      {
          "hskclass": "5",
          "japanese": "（嫁を）もらう",
          "chinese": "娶",
          "pinyin": "qǔ"
      },
      {
          "hskclass": "5",
          "japanese": "取り消す",
          "chinese": "取消",
          "pinyin": "qǔxiāo"
      },
      {
          "hskclass": "5",
          "japanese": "死去する",
          "chinese": "去世",
          "pinyin": "qùshì"
      },
      {
          "hskclass": "5",
          "japanese": "（家畜を）囲いの中に入れる",
          "chinese": "圈",
          "pinyin": "quān"
      },
      {
          "hskclass": "5",
          "japanese": "全面的である",
          "chinese": "全面",
          "pinyin": "quánmiàn"
      },
      {
          "hskclass": "5",
          "japanese": "権力",
          "chinese": "权力",
          "pinyin": "quánlì"
      },
      {
          "hskclass": "5",
          "japanese": "権利",
          "chinese": "权利",
          "pinyin": "quánlì"
      },
      {
          "hskclass": "5",
          "japanese": "勧告する",
          "chinese": "劝",
          "pinyin": "quàn"
      },
      {
          "hskclass": "5",
          "japanese": "欠乏する",
          "chinese": "缺乏",
          "pinyin": "quēfá"
      },
      {
          "hskclass": "5",
          "japanese": "確定した",
          "chinese": "确定",
          "pinyin": "quèdìng"
      },
      {
          "hskclass": "5",
          "japanese": "確認する",
          "chinese": "确认",
          "pinyin": "quèrèn"
      },
      {
          "hskclass": "5",
          "japanese": "燃焼する",
          "chinese": "燃烧",
          "pinyin": "ránshāo"
      },
      {
          "hskclass": "5",
          "japanese": "大声で叫ぶ",
          "chinese": "嚷",
          "pinyin": "rǎng"
      },
      {
          "hskclass": "5",
          "japanese": "巻く",
          "chinese": "绕",
          "pinyin": "rào"
      },
      {
          "hskclass": "5",
          "japanese": "熱愛する",
          "chinese": "热爱",
          "pinyin": "rè'ài"
      },
      {
          "hskclass": "5",
          "japanese": "熱烈である",
          "chinese": "热烈",
          "pinyin": "rèliè"
      },
      {
          "hskclass": "5",
          "japanese": "熱心である",
          "chinese": "热心",
          "pinyin": "rèxīn"
      },
      {
          "hskclass": "5",
          "japanese": "人材",
          "chinese": "人才",
          "pinyin": "réncái"
      },
      {
          "hskclass": "5",
          "japanese": "人口",
          "chinese": "人口",
          "pinyin": "rénkǒu"
      },
      {
          "hskclass": "5",
          "japanese": "人類",
          "chinese": "人类",
          "pinyin": "rénlèi"
      },
      {
          "hskclass": "5",
          "japanese": "人生",
          "chinese": "人生",
          "pinyin": "rénshēng"
      },
      {
          "hskclass": "5",
          "japanese": "世間の出来事",
          "chinese": "人事",
          "pinyin": "rénshì"
      },
      {
          "hskclass": "5",
          "japanese": "人物",
          "chinese": "人物",
          "pinyin": "rénwù"
      },
      {
          "hskclass": "5",
          "japanese": "人員",
          "chinese": "人员",
          "pinyin": "rényuán"
      },
      {
          "hskclass": "5",
          "japanese": "耐えられない",
          "chinese": "忍不住",
          "pinyin": "rěn bù zhù"
      },
      {
          "hskclass": "5",
          "japanese": "日常",
          "chinese": "日常",
          "pinyin": "rìcháng"
      },
      {
          "hskclass": "5",
          "japanese": "日程",
          "chinese": "日程",
          "pinyin": "rìchéng"
      },
      {
          "hskclass": "5",
          "japanese": "日めくり,カレンダー",
          "chinese": "日历",
          "pinyin": "rìlì"
      },
      {
          "hskclass": "5",
          "japanese": "期日",
          "chinese": "日期",
          "pinyin": "rìqí"
      },
      {
          "hskclass": "5",
          "japanese": "日用品",
          "chinese": "日用品",
          "pinyin": "rìyòngpǐn"
      },
      {
          "hskclass": "5",
          "japanese": "解ける",
          "chinese": "融化",
          "pinyin": "rónghuà"
      },
      {
          "hskclass": "5",
          "japanese": "光栄である",
          "chinese": "荣幸",
          "pinyin": "róngxìng"
      },
      {
          "hskclass": "5",
          "japanese": "栄誉",
          "chinese": "荣誉",
          "pinyin": "róngyù"
      },
      {
          "hskclass": "5",
          "japanese": "どのように",
          "chinese": "如何",
          "pinyin": "rúhé"
      },
      {
          "hskclass": "5",
          "japanese": "今ごろ，現在",
          "chinese": "如今",
          "pinyin": "rújīn"
      },
      {
          "hskclass": "5",
          "japanese": "ソフトウェア",
          "chinese": "软件",
          "pinyin": "ruǎnjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "弱い",
          "chinese": "弱",
          "pinyin": "ruò"
      },
      {
          "hskclass": "5",
          "japanese": "（液体を）まく",
          "chinese": "洒",
          "pinyin": "sǎ"
      },
      {
          "hskclass": "5",
          "japanese": "喉,声",
          "chinese": "嗓子",
          "pinyin": "sǎngzi"
      },
      {
          "hskclass": "5",
          "japanese": "殺す",
          "chinese": "杀",
          "pinyin": "shā"
      },
      {
          "hskclass": "5",
          "japanese": "砂漠",
          "chinese": "沙漠",
          "pinyin": "shāmò"
      },
      {
          "hskclass": "5",
          "japanese": "砂浜",
          "chinese": "沙滩",
          "pinyin": "shātān"
      },
      {
          "hskclass": "5",
          "japanese": "愚かな",
          "chinese": "傻",
          "pinyin": "shǎ"
      },
      {
          "hskclass": "5",
          "japanese": "（太陽が）照りつける",
          "chinese": "晒",
          "pinyin": "shài"
      },
      {
          "hskclass": "5",
          "japanese": "削除する",
          "chinese": "删除",
          "pinyin": "shānchú"
      },
      {
          "hskclass": "5",
          "japanese": "稲妻",
          "chinese": "闪电",
          "pinyin": "shǎndiàn"
      },
      {
          "hskclass": "5",
          "japanese": "善良である",
          "chinese": "善良",
          "pinyin": "shànliáng"
      },
      {
          "hskclass": "5",
          "japanese": "…に優れている",
          "chinese": "善于",
          "pinyin": "shànyú"
      },
      {
          "hskclass": "5",
          "japanese": "扇子",
          "chinese": "扇子",
          "pinyin": "shànzi"
      },
      {
          "hskclass": "5",
          "japanese": "商品",
          "chinese": "商品",
          "pinyin": "shāngpǐn"
      },
      {
          "hskclass": "5",
          "japanese": "商業",
          "chinese": "商业",
          "pinyin": "shāngyè"
      },
      {
          "hskclass": "5",
          "japanese": "だまされる",
          "chinese": "上当",
          "pinyin": "shàngdàng"
      },
      {
          "hskclass": "5",
          "japanese": "しゃくし",
          "chinese": "勺子",
          "pinyin": "sháozi"
      },
      {
          "hskclass": "5",
          "japanese": "蛇",
          "chinese": "蛇",
          "pinyin": "shé"
      },
      {
          "hskclass": "5",
          "japanese": "舌",
          "chinese": "舌头",
          "pinyin": "shétou"
      },
      {
          "hskclass": "5",
          "japanese": "別れるのがつらい",
          "chinese": "舍不得",
          "pinyin": "shěbudé"
      },
      {
          "hskclass": "5",
          "japanese": "設備",
          "chinese": "设备",
          "pinyin": "shèbèi"
      },
      {
          "hskclass": "5",
          "japanese": "設計する",
          "chinese": "设计",
          "pinyin": "shèjì"
      },
      {
          "hskclass": "5",
          "japanese": "施設",
          "chinese": "设施",
          "pinyin": "shèshī"
      },
      {
          "hskclass": "5",
          "japanese": "射撃",
          "chinese": "射击",
          "pinyin": "shèjí"
      },
      {
          "hskclass": "5",
          "japanese": "写真を撮る",
          "chinese": "摄影",
          "pinyin": "shèyǐng"
      },
      {
          "hskclass": "5",
          "japanese": "伸ばす",
          "chinese": "伸",
          "pinyin": "shēn"
      },
      {
          "hskclass": "5",
          "japanese": "深い",
          "chinese": "深刻",
          "pinyin": "shēnkè"
      },
      {
          "hskclass": "5",
          "japanese": "体格",
          "chinese": "身材",
          "pinyin": "shēncái"
      },
      {
          "hskclass": "5",
          "japanese": "身分",
          "chinese": "身份",
          "pinyin": "shēnfèn"
      },
      {
          "hskclass": "5",
          "japanese": "神話",
          "chinese": "神话",
          "pinyin": "shénhuà"
      },
      {
          "hskclass": "5",
          "japanese": "神経",
          "chinese": "神经",
          "pinyin": "shénjīng"
      },
      {
          "hskclass": "5",
          "japanese": "神秘的である",
          "chinese": "神秘",
          "pinyin": "shénmì"
      },
      {
          "hskclass": "5",
          "japanese": "上がる",
          "chinese": "升",
          "pinyin": "shēng"
      },
      {
          "hskclass": "5",
          "japanese": "お産をする",
          "chinese": "生产",
          "pinyin": "shēngchǎn"
      },
      {
          "hskclass": "5",
          "japanese": "生き生きしている",
          "chinese": "生动",
          "pinyin": "shēngdòng"
      },
      {
          "hskclass": "5",
          "japanese": "（言葉・朗読の）調子",
          "chinese": "声调",
          "pinyin": "shēngdiào"
      },
      {
          "hskclass": "5",
          "japanese": "縄",
          "chinese": "绳子",
          "pinyin": "shéngzi"
      },
      {
          "hskclass": "5",
          "japanese": "省略する",
          "chinese": "省略",
          "pinyin": "shěnglüè"
      },
      {
          "hskclass": "5",
          "japanese": "勝利する",
          "chinese": "胜利",
          "pinyin": "shènglì"
      },
      {
          "hskclass": "5",
          "japanese": "詩",
          "chinese": "诗",
          "pinyin": "shī"
      },
      {
          "hskclass": "5",
          "japanese": "不眠になる",
          "chinese": "失眠",
          "pinyin": "shīmián"
      },
      {
          "hskclass": "5",
          "japanese": "失う",
          "chinese": "失去",
          "pinyin": "shīqù"
      },
      {
          "hskclass": "5",
          "japanese": "失業する",
          "chinese": "失业",
          "pinyin": "shīyè"
      },
      {
          "hskclass": "5",
          "japanese": "時代",
          "chinese": "时代",
          "pinyin": "shídài"
      },
      {
          "hskclass": "5",
          "japanese": "時間",
          "chinese": "时刻",
          "pinyin": "shíkè"
      },
      {
          "hskclass": "5",
          "japanese": "モダンである",
          "chinese": "时髦",
          "pinyin": "shímáo"
      },
      {
          "hskclass": "5",
          "japanese": "時期",
          "chinese": "时期",
          "pinyin": "shíqí"
      },
      {
          "hskclass": "5",
          "japanese": "時代の流行",
          "chinese": "时尚",
          "pinyin": "shíshàng"
      },
      {
          "hskclass": "5",
          "japanese": "本当の話",
          "chinese": "实话",
          "pinyin": "shíhuà"
      },
      {
          "hskclass": "5",
          "japanese": "実践する",
          "chinese": "实践",
          "pinyin": "shíjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "実習",
          "chinese": "实习",
          "pinyin": "shíxí"
      },
      {
          "hskclass": "5",
          "japanese": "実現する",
          "chinese": "实现",
          "pinyin": "shíxiàn"
      },
      {
          "hskclass": "5",
          "japanese": "実行する",
          "chinese": "实行",
          "pinyin": "shíxíng"
      },
      {
          "hskclass": "5",
          "japanese": "実験",
          "chinese": "实验",
          "pinyin": "shíyàn"
      },
      {
          "hskclass": "5",
          "japanese": "実際に用いる",
          "chinese": "实用",
          "pinyin": "shíyòng"
      },
      {
          "hskclass": "5",
          "japanese": "食物",
          "chinese": "食物",
          "pinyin": "shíwù"
      },
      {
          "hskclass": "5",
          "japanese": "石",
          "chinese": "石头",
          "pinyin": "shítou"
      },
      {
          "hskclass": "5",
          "japanese": "力を入れる",
          "chinese": "使劲儿",
          "pinyin": "shǐjìn er"
      },
      {
          "hskclass": "5",
          "japanese": "初めから終わりまでの全部",
          "chinese": "始终",
          "pinyin": "shǐzhōng"
      },
      {
          "hskclass": "5",
          "japanese": "…であるかどうか",
          "chinese": "是否",
          "pinyin": "shìfǒu"
      },
      {
          "hskclass": "5",
          "japanese": "答案用紙",
          "chinese": "试卷",
          "pinyin": "shìjuàn"
      },
      {
          "hskclass": "5",
          "japanese": "兵士",
          "chinese": "士兵",
          "pinyin": "shìbīng"
      },
      {
          "hskclass": "5",
          "japanese": "…のようである",
          "chinese": "似的",
          "pinyin": "shì de"
      },
      {
          "hskclass": "5",
          "japanese": "事実",
          "chinese": "事实",
          "pinyin": "shìshí"
      },
      {
          "hskclass": "5",
          "japanese": "事物",
          "chinese": "事物",
          "pinyin": "shìwù"
      },
      {
          "hskclass": "5",
          "japanese": "事前",
          "chinese": "事先",
          "pinyin": "shìxiān"
      },
      {
          "hskclass": "5",
          "japanese": "収穫する",
          "chinese": "收获",
          "pinyin": "shōuhuò"
      },
      {
          "hskclass": "5",
          "japanese": "領収書",
          "chinese": "收据",
          "pinyin": "shōujù"
      },
      {
          "hskclass": "5",
          "japanese": "手仕事",
          "chinese": "手工",
          "pinyin": "shǒugōng"
      },
      {
          "hskclass": "5",
          "japanese": "手術",
          "chinese": "手术",
          "pinyin": "shǒushù"
      },
      {
          "hskclass": "5",
          "japanese": "手袋",
          "chinese": "手套",
          "pinyin": "shǒutào"
      },
      {
          "hskclass": "5",
          "japanese": "手続き",
          "chinese": "手续",
          "pinyin": "shǒuxù"
      },
      {
          "hskclass": "5",
          "japanese": "手の指",
          "chinese": "手指",
          "pinyin": "shǒuzhǐ"
      },
      {
          "hskclass": "5",
          "japanese": "負傷する",
          "chinese": "受伤",
          "pinyin": "shòushāng"
      },
      {
          "hskclass": "5",
          "japanese": "寿命",
          "chinese": "寿命",
          "pinyin": "shòumìng"
      },
      {
          "hskclass": "5",
          "japanese": "本棚",
          "chinese": "书架",
          "pinyin": "shūjià"
      },
      {
          "hskclass": "5",
          "japanese": "送り込む,輸入",
          "chinese": "输入",
          "pinyin": "shūrù"
      },
      {
          "hskclass": "5",
          "japanese": "野菜",
          "chinese": "蔬菜",
          "pinyin": "shūcài"
      },
      {
          "hskclass": "5",
          "japanese": "心地よい",
          "chinese": "舒适",
          "pinyin": "shūshì"
      },
      {
          "hskclass": "5",
          "japanese": "（髪・ひげをすく）くし",
          "chinese": "梳子",
          "pinyin": "shūzi"
      },
      {
          "hskclass": "5",
          "japanese": "熟練している",
          "chinese": "熟练",
          "pinyin": "shúliàn"
      },
      {
          "hskclass": "5",
          "japanese": "（コンピューターの）マウス",
          "chinese": "鼠标",
          "pinyin": "shǔbiāo"
      },
      {
          "hskclass": "5",
          "japanese": "…に属する",
          "chinese": "属于",
          "pinyin": "shǔyú"
      },
      {
          "hskclass": "5",
          "japanese": "データ",
          "chinese": "数据",
          "pinyin": "shùjù"
      },
      {
          "hskclass": "5",
          "japanese": "数字",
          "chinese": "数码",
          "pinyin": "shùmǎ"
      },
      {
          "hskclass": "5",
          "japanese": "転ぶ",
          "chinese": "摔",
          "pinyin": "shuāi"
      },
      {
          "hskclass": "5",
          "japanese": "勢いよく振る",
          "chinese": "甩",
          "pinyin": "shuǎi"
      },
      {
          "hskclass": "5",
          "japanese": "双方",
          "chinese": "双方",
          "pinyin": "shuāngfāng"
      },
      {
          "hskclass": "5",
          "japanese": "税金",
          "chinese": "税",
          "pinyin": "shuì"
      },
      {
          "hskclass": "5",
          "japanese": "（見当がつかず）はっきりと言えない",
          "chinese": "说不定",
          "pinyin": "shuō bu dìng"
      },
      {
          "hskclass": "5",
          "japanese": "説得する",
          "chinese": "说服",
          "pinyin": "shuōfú"
      },
      {
          "hskclass": "5",
          "japanese": "裂く",
          "chinese": "撕",
          "pinyin": "sī"
      },
      {
          "hskclass": "5",
          "japanese": "絹織物",
          "chinese": "丝绸",
          "pinyin": "sīchóu"
      },
      {
          "hskclass": "5",
          "japanese": "極めて小さい",
          "chinese": "丝毫",
          "pinyin": "sīháo"
      },
      {
          "hskclass": "5",
          "japanese": "深く考える",
          "chinese": "思考",
          "pinyin": "sīkǎo"
      },
      {
          "hskclass": "5",
          "japanese": "思想",
          "chinese": "思想",
          "pinyin": "sīxiǎng"
      },
      {
          "hskclass": "5",
          "japanese": "個人",
          "chinese": "私人",
          "pinyin": "sīrén"
      },
      {
          "hskclass": "5",
          "japanese": "まるで…のようだ",
          "chinese": "似乎",
          "pinyin": "sìhū"
      },
      {
          "hskclass": "5",
          "japanese": "寺院",
          "chinese": "寺庙",
          "pinyin": "sìmiào"
      },
      {
          "hskclass": "5",
          "japanese": "宿舎",
          "chinese": "宿舍",
          "pinyin": "sùshè"
      },
      {
          "hskclass": "5",
          "japanese": "常に",
          "chinese": "随时",
          "pinyin": "suíshí"
      },
      {
          "hskclass": "5",
          "japanese": "砕ける",
          "chinese": "碎",
          "pinyin": "suì"
      },
      {
          "hskclass": "5",
          "japanese": "損失を出す",
          "chinese": "损失",
          "pinyin": "sǔnshī"
      },
      {
          "hskclass": "5",
          "japanese": "短縮する",
          "chinese": "缩短",
          "pinyin": "suōduǎn"
      },
      {
          "hskclass": "5",
          "japanese": "縮小する",
          "chinese": "缩小",
          "pinyin": "suōxiǎo"
      },
      {
          "hskclass": "5",
          "japanese": "錠",
          "chinese": "锁",
          "pinyin": "suǒ"
      },
      {
          "hskclass": "5",
          "japanese": "ところ，場所",
          "chinese": "所",
          "pinyin": "suǒ"
      },
      {
          "hskclass": "5",
          "japanese": "いうところの，いわゆる",
          "chinese": "所谓",
          "pinyin": "suǒwèi"
      },
      {
          "hskclass": "5",
          "japanese": "塔",
          "chinese": "塔",
          "pinyin": "tǎ"
      },
      {
          "hskclass": "5",
          "japanese": "階段",
          "chinese": "台阶",
          "pinyin": "táijiē"
      },
      {
          "hskclass": "5",
          "japanese": "太極拳",
          "chinese": "太极拳",
          "pinyin": "tàijí quán"
      },
      {
          "hskclass": "5",
          "japanese": "奥様",
          "chinese": "太太",
          "pinyin": "tàitài"
      },
      {
          "hskclass": "5",
          "japanese": "交渉する",
          "chinese": "谈判",
          "pinyin": "tánpàn"
      },
      {
          "hskclass": "5",
          "japanese": "率直である",
          "chinese": "坦率",
          "pinyin": "tǎnshuài"
      },
      {
          "hskclass": "5",
          "japanese": "(やけどするほど)熱い",
          "chinese": "烫",
          "pinyin": "tàng"
      },
      {
          "hskclass": "5",
          "japanese": "桃",
          "chinese": "桃",
          "pinyin": "táo"
      },
      {
          "hskclass": "5",
          "japanese": "逃げる",
          "chinese": "逃",
          "pinyin": "táo"
      },
      {
          "hskclass": "5",
          "japanese": "逃げる",
          "chinese": "逃避",
          "pinyin": "táobì"
      },
      {
          "hskclass": "5",
          "japanese": "カバー,覆い",
          "chinese": "套",
          "pinyin": "tào"
      },
      {
          "hskclass": "5",
          "japanese": "特殊である",
          "chinese": "特殊",
          "pinyin": "tèshū"
      },
      {
          "hskclass": "5",
          "japanese": "わざわざ,特に",
          "chinese": "特意",
          "pinyin": "tèyì"
      },
      {
          "hskclass": "5",
          "japanese": "特徴",
          "chinese": "特征",
          "pinyin": "tèzhēng"
      },
      {
          "hskclass": "5",
          "japanese": "かわいがる",
          "chinese": "疼爱",
          "pinyin": "téng'ài"
      },
      {
          "hskclass": "5",
          "japanese": "提げる",
          "chinese": "提",
          "pinyin": "tí"
      },
      {
          "hskclass": "5",
          "japanese": "提唱する",
          "chinese": "提倡",
          "pinyin": "tíchàng"
      },
      {
          "hskclass": "5",
          "japanese": "内容の要点",
          "chinese": "提纲",
          "pinyin": "tígāng"
      },
      {
          "hskclass": "5",
          "japanese": "質問",
          "chinese": "提问",
          "pinyin": "tíwèn"
      },
      {
          "hskclass": "5",
          "japanese": "題目",
          "chinese": "题目",
          "pinyin": "tímù"
      },
      {
          "hskclass": "5",
          "japanese": "体得する",
          "chinese": "体会",
          "pinyin": "tǐhuì"
      },
      {
          "hskclass": "5",
          "japanese": "体積",
          "chinese": "体积",
          "pinyin": "tǐjī"
      },
      {
          "hskclass": "5",
          "japanese": "思いやる",
          "chinese": "体贴",
          "pinyin": "tǐtiē"
      },
      {
          "hskclass": "5",
          "japanese": "体現する",
          "chinese": "体现",
          "pinyin": "tǐxiàn"
      },
      {
          "hskclass": "5",
          "japanese": "体験する",
          "chinese": "体验",
          "pinyin": "tǐyàn"
      },
      {
          "hskclass": "5",
          "japanese": "空",
          "chinese": "天空",
          "pinyin": "tiānkōng"
      },
      {
          "hskclass": "5",
          "japanese": "無邪気である",
          "chinese": "天真",
          "pinyin": "tiānzhēn"
      },
      {
          "hskclass": "5",
          "japanese": "田野",
          "chinese": "田野",
          "pinyin": "tiányě"
      },
      {
          "hskclass": "5",
          "japanese": "いたずらである",
          "chinese": "调皮",
          "pinyin": "tiáopí"
      },
      {
          "hskclass": "5",
          "japanese": "調整する",
          "chinese": "调整",
          "pinyin": "tiáozhěng"
      },
      {
          "hskclass": "5",
          "japanese": "挑戦する",
          "chinese": "挑战",
          "pinyin": "tiǎozhàn"
      },
      {
          "hskclass": "5",
          "japanese": "普通の",
          "chinese": "通常",
          "pinyin": "tōngcháng"
      },
      {
          "hskclass": "5",
          "japanese": "通信する",
          "chinese": "通讯",
          "pinyin": "tōngxùn"
      },
      {
          "hskclass": "5",
          "japanese": "銅",
          "chinese": "铜",
          "pinyin": "tóng"
      },
      {
          "hskclass": "5",
          "japanese": "同時",
          "chinese": "同时",
          "pinyin": "tóngshí"
      },
      {
          "hskclass": "5",
          "japanese": "統一する",
          "chinese": "统一",
          "pinyin": "tǒngyī"
      },
      {
          "hskclass": "5",
          "japanese": "統治する",
          "chinese": "统治",
          "pinyin": "tǒngzhì"
      },
      {
          "hskclass": "5",
          "japanese": "苦痛である",
          "chinese": "痛苦",
          "pinyin": "tòngkǔ"
      },
      {
          "hskclass": "5",
          "japanese": "愉快である",
          "chinese": "痛快",
          "pinyin": "tòngkuài"
      },
      {
          "hskclass": "5",
          "japanese": "投資",
          "chinese": "投资",
          "pinyin": "tóuzī"
      },
      {
          "hskclass": "5",
          "japanese": "透明",
          "chinese": "透明",
          "pinyin": "tòumíng"
      },
      {
          "hskclass": "5",
          "japanese": "際立たせる",
          "chinese": "突出",
          "pinyin": "túchū"
      },
      {
          "hskclass": "5",
          "japanese": "土地",
          "chinese": "土地",
          "pinyin": "tǔdì"
      },
      {
          "hskclass": "5",
          "japanese": "ジャガイモ",
          "chinese": "土豆",
          "pinyin": "tǔdòu"
      },
      {
          "hskclass": "5",
          "japanese": "吐く",
          "chinese": "吐",
          "pinyin": "tǔ"
      },
      {
          "hskclass": "5",
          "japanese": "ウサギ",
          "chinese": "兔子",
          "pinyin": "tùzǐ"
      },
      {
          "hskclass": "5",
          "japanese": "丸い",
          "chinese": "团",
          "pinyin": "tuán"
      },
      {
          "hskclass": "5",
          "japanese": "断わる",
          "chinese": "推辞",
          "pinyin": "tuīcí"
      },
      {
          "hskclass": "5",
          "japanese": "推し広める",
          "chinese": "推广",
          "pinyin": "tuīguǎng"
      },
      {
          "hskclass": "5",
          "japanese": "推薦する",
          "chinese": "推荐",
          "pinyin": "tuījiàn"
      },
      {
          "hskclass": "5",
          "japanese": "退く",
          "chinese": "退",
          "pinyin": "tuì"
      },
      {
          "hskclass": "5",
          "japanese": "退歩する",
          "chinese": "退步",
          "pinyin": "tuìbù"
      },
      {
          "hskclass": "5",
          "japanese": "退職する",
          "chinese": "退休",
          "pinyin": "tuìxiū"
      },
      {
          "hskclass": "5",
          "japanese": "ゆがんでいる",
          "chinese": "歪",
          "pinyin": "wāi"
      },
      {
          "hskclass": "5",
          "japanese": "外交",
          "chinese": "外交",
          "pinyin": "wàijiāo"
      },
      {
          "hskclass": "5",
          "japanese": "曲がっている",
          "chinese": "弯",
          "pinyin": "wān"
      },
      {
          "hskclass": "5",
          "japanese": "非の打ちどころがない",
          "chinese": "完美",
          "pinyin": "wánměi"
      },
      {
          "hskclass": "5",
          "japanese": "完備して優れている",
          "chinese": "完善",
          "pinyin": "wánshàn"
      },
      {
          "hskclass": "5",
          "japanese": "すべて整っている",
          "chinese": "完整",
          "pinyin": "wánzhěng"
      },
      {
          "hskclass": "5",
          "japanese": "おもちゃ",
          "chinese": "玩具",
          "pinyin": "wánjù"
      },
      {
          "hskclass": "5",
          "japanese": "万一",
          "chinese": "万一",
          "pinyin": "wàn yī"
      },
      {
          "hskclass": "5",
          "japanese": "王子",
          "chinese": "王子",
          "pinyin": "wángzǐ"
      },
      {
          "hskclass": "5",
          "japanese": "往復する",
          "chinese": "往返",
          "pinyin": "wǎngfǎn"
      },
      {
          "hskclass": "5",
          "japanese": "危険に陥れる",
          "chinese": "危害",
          "pinyin": "wéihài"
      },
      {
          "hskclass": "5",
          "japanese": "微笑する",
          "chinese": "微笑",
          "pinyin": "wéixiào"
      },
      {
          "hskclass": "5",
          "japanese": "威嚇する",
          "chinese": "威胁",
          "pinyin": "wēixié"
      },
      {
          "hskclass": "5",
          "japanese": "違反する",
          "chinese": "违反",
          "pinyin": "wéifǎn"
      },
      {
          "hskclass": "5",
          "japanese": "擁護する",
          "chinese": "维护",
          "pinyin": "wéihù"
      },
      {
          "hskclass": "5",
          "japanese": "マフラー",
          "chinese": "围巾",
          "pinyin": "wéijīn"
      },
      {
          "hskclass": "5",
          "japanese": "巡る",
          "chinese": "围绕",
          "pinyin": "wéirào"
      },
      {
          "hskclass": "5",
          "japanese": "唯一",
          "chinese": "唯一",
          "pinyin": "wéiyī"
      },
      {
          "hskclass": "5",
          "japanese": "しっぽ",
          "chinese": "尾巴",
          "pinyin": "wěibā"
      },
      {
          "hskclass": "5",
          "japanese": "偉大である",
          "chinese": "伟大",
          "pinyin": "wěidà"
      },
      {
          "hskclass": "5",
          "japanese": "悔しい",
          "chinese": "委屈",
          "pinyin": "wěiqu"
      },
      {
          "hskclass": "5",
          "japanese": "委託する",
          "chinese": "委托",
          "pinyin": "wěituō"
      },
      {
          "hskclass": "5",
          "japanese": "胃",
          "chinese": "胃",
          "pinyin": "wèi"
      },
      {
          "hskclass": "5",
          "japanese": "位置",
          "chinese": "位置",
          "pinyin": "wèizhì"
      },
      {
          "hskclass": "5",
          "japanese": "…であるとは限らない",
          "chinese": "未必",
          "pinyin": "wèibì"
      },
      {
          "hskclass": "5",
          "japanese": "未来",
          "chinese": "未来",
          "pinyin": "wèilái"
      },
      {
          "hskclass": "5",
          "japanese": "（総称的に）トイレやバスルーム，洗面所",
          "chinese": "卫生间",
          "pinyin": "wèishēngjiān"
      },
      {
          "hskclass": "5",
          "japanese": "暖かい",
          "chinese": "温暖",
          "pinyin": "wēnnuǎn"
      },
      {
          "hskclass": "5",
          "japanese": "穏やかである",
          "chinese": "温柔",
          "pinyin": "wēn róu"
      },
      {
          "hskclass": "5",
          "japanese": "（においを）かぐ",
          "chinese": "闻",
          "pinyin": "wén"
      },
      {
          "hskclass": "5",
          "japanese": "文書",
          "chinese": "文件",
          "pinyin": "wénjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "文房具",
          "chinese": "文具",
          "pinyin": "wénjù"
      },
      {
          "hskclass": "5",
          "japanese": "文明",
          "chinese": "文明",
          "pinyin": "wénmíng"
      },
      {
          "hskclass": "5",
          "japanese": "文学",
          "chinese": "文学",
          "pinyin": "wénxué"
      },
      {
          "hskclass": "5",
          "japanese": "キス",
          "chinese": "吻",
          "pinyin": "wěn"
      },
      {
          "hskclass": "5",
          "japanese": "安定している",
          "chinese": "稳定",
          "pinyin": "wěndìng"
      },
      {
          "hskclass": "5",
          "japanese": "ご機嫌を伺う",
          "chinese": "问候",
          "pinyin": "wènhòu"
      },
      {
          "hskclass": "5",
          "japanese": "寝室",
          "chinese": "卧室",
          "pinyin": "wòshì"
      },
      {
          "hskclass": "5",
          "japanese": "部屋",
          "chinese": "屋子",
          "pinyin": "wūzi"
      },
      {
          "hskclass": "5",
          "japanese": "致し方ない",
          "chinese": "无奈",
          "pinyin": "wúnài"
      },
      {
          "hskclass": "5",
          "japanese": "無数",
          "chinese": "无数",
          "pinyin": "wúshù"
      },
      {
          "hskclass": "5",
          "japanese": "武器",
          "chinese": "武器",
          "pinyin": "wǔqì"
      },
      {
          "hskclass": "5",
          "japanese": "武術",
          "chinese": "武术",
          "pinyin": "wǔshù"
      },
      {
          "hskclass": "5",
          "japanese": "霧",
          "chinese": "雾",
          "pinyin": "wù"
      },
      {
          "hskclass": "5",
          "japanese": "物理",
          "chinese": "物理",
          "pinyin": "wùlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "物質",
          "chinese": "物质",
          "pinyin": "wùzhí"
      },
      {
          "hskclass": "5",
          "japanese": "吸収する",
          "chinese": "吸收",
          "pinyin": "xīshōu"
      },
      {
          "hskclass": "5",
          "japanese": "結ぶ",
          "chinese": "系",
          "pinyin": "xì"
      },
      {
          "hskclass": "5",
          "japanese": "システム",
          "chinese": "系统",
          "pinyin": "xìtǒng"
      },
      {
          "hskclass": "5",
          "japanese": "細部",
          "chinese": "细节",
          "pinyin": "xìjié"
      },
      {
          "hskclass": "5",
          "japanese": "演劇",
          "chinese": "戏剧",
          "pinyin": "xìjù"
      },
      {
          "hskclass": "5",
          "japanese": "盲目",
          "chinese": "瞎",
          "pinyin": "xiā"
      },
      {
          "hskclass": "5",
          "japanese": "脅かす",
          "chinese": "吓",
          "pinyin": "xià"
      },
      {
          "hskclass": "5",
          "japanese": "ダウンロード",
          "chinese": "下载",
          "pinyin": "xiàzài"
      },
      {
          "hskclass": "5",
          "japanese": "美しく鮮やかである",
          "chinese": "鲜艳",
          "pinyin": "xiānyàn"
      },
      {
          "hskclass": "5",
          "japanese": "…のように見える",
          "chinese": "显得",
          "pinyin": "xiǎndé"
      },
      {
          "hskclass": "5",
          "japanese": "明らかである",
          "chinese": "显然",
          "pinyin": "xiǎnrán"
      },
      {
          "hskclass": "5",
          "japanese": "はっきりと示す",
          "chinese": "显示",
          "pinyin": "xiǎnshì"
      },
      {
          "hskclass": "5",
          "japanese": "県",
          "chinese": "县",
          "pinyin": "xiàn"
      },
      {
          "hskclass": "5",
          "japanese": "現金",
          "chinese": "现金",
          "pinyin": "xiànjīn"
      },
      {
          "hskclass": "5",
          "japanese": "現実",
          "chinese": "现实",
          "pinyin": "xiànshí"
      },
      {
          "hskclass": "5",
          "japanese": "現象",
          "chinese": "现象",
          "pinyin": "xiànxiàng"
      },
      {
          "hskclass": "5",
          "japanese": "生活・仕事を共にする",
          "chinese": "相处",
          "pinyin": "xiāngchǔ"
      },
      {
          "hskclass": "5",
          "japanese": "相当する",
          "chinese": "相当",
          "pinyin": "xiāngdāng"
      },
      {
          "hskclass": "5",
          "japanese": "向かい合っている",
          "chinese": "相对",
          "pinyin": "xiāngduì"
      },
      {
          "hskclass": "5",
          "japanese": "関連している",
          "chinese": "相关",
          "pinyin": "xiāngguān"
      },
      {
          "hskclass": "5",
          "japanese": "互いによく似ている",
          "chinese": "相似",
          "pinyin": "xiāngsì"
      },
      {
          "hskclass": "5",
          "japanese": "懐かしがる",
          "chinese": "想念",
          "pinyin": "xiǎngniàn"
      },
      {
          "hskclass": "5",
          "japanese": "想像",
          "chinese": "想象",
          "pinyin": "xiǎngxiàng"
      },
      {
          "hskclass": "5",
          "japanese": "享受する",
          "chinese": "享受",
          "pinyin": "xiǎngshòu"
      },
      {
          "hskclass": "5",
          "japanese": "うなじ",
          "chinese": "项",
          "pinyin": "xiàng"
      },
      {
          "hskclass": "5",
          "japanese": "ネックレス",
          "chinese": "项链",
          "pinyin": "xiàngliàn"
      },
      {
          "hskclass": "5",
          "japanese": "項目",
          "chinese": "项目",
          "pinyin": "xiàngmù"
      },
      {
          "hskclass": "5",
          "japanese": "ゴム",
          "chinese": "橡皮",
          "pinyin": "xiàngpí"
      },
      {
          "hskclass": "5",
          "japanese": "中国将棋",
          "chinese": "象棋",
          "pinyin": "xiàngqí"
      },
      {
          "hskclass": "5",
          "japanese": "象徴する",
          "chinese": "象征",
          "pinyin": "xiàngzhēng"
      },
      {
          "hskclass": "5",
          "japanese": "消費する",
          "chinese": "消费",
          "pinyin": "xiāofèi"
      },
      {
          "hskclass": "5",
          "japanese": "消化する",
          "chinese": "消化",
          "pinyin": "xiāohuà"
      },
      {
          "hskclass": "5",
          "japanese": "消滅する",
          "chinese": "消灭",
          "pinyin": "xiāomiè"
      },
      {
          "hskclass": "5",
          "japanese": "消失する",
          "chinese": "消失",
          "pinyin": "xiāoshī"
      },
      {
          "hskclass": "5",
          "japanese": "販売する",
          "chinese": "销售",
          "pinyin": "xiāoshòu"
      },
      {
          "hskclass": "5",
          "japanese": "手軽な料理",
          "chinese": "小吃",
          "pinyin": "xiǎochī"
      },
      {
          "hskclass": "5",
          "japanese": "若い男子",
          "chinese": "小伙子",
          "pinyin": "xiǎohuǒzi"
      },
      {
          "hskclass": "5",
          "japanese": "小麦",
          "chinese": "小麦",
          "pinyin": "xiǎomài"
      },
      {
          "hskclass": "5",
          "japanese": "けちである",
          "chinese": "小气",
          "pinyin": "xiǎoqì"
      },
      {
          "hskclass": "5",
          "japanese": "盗人",
          "chinese": "小偷",
          "pinyin": "xiǎotōu"
      },
      {
          "hskclass": "5",
          "japanese": "効率",
          "chinese": "效率",
          "pinyin": "xiàolǜ"
      },
      {
          "hskclass": "5",
          "japanese": "孝行する",
          "chinese": "孝顺",
          "pinyin": "xiàoshùn"
      },
      {
          "hskclass": "5",
          "japanese": "休む",
          "chinese": "歇",
          "pinyin": "xiē"
      },
      {
          "hskclass": "5",
          "japanese": "斜めである",
          "chinese": "斜",
          "pinyin": "xié"
      },
      {
          "hskclass": "5",
          "japanese": "調整する",
          "chinese": "协调",
          "pinyin": "xiétiáo"
      },
      {
          "hskclass": "5",
          "japanese": "心理",
          "chinese": "心理",
          "pinyin": "xīnlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "心臓",
          "chinese": "心脏",
          "pinyin": "xīnzàng"
      },
      {
          "hskclass": "5",
          "japanese": "鑑賞する",
          "chinese": "欣赏",
          "pinyin": "xīnshǎng"
      },
      {
          "hskclass": "5",
          "japanese": "封筒",
          "chinese": "信封",
          "pinyin": "xìnfēng"
      },
      {
          "hskclass": "5",
          "japanese": "信号",
          "chinese": "信号",
          "pinyin": "xìnhào"
      },
      {
          "hskclass": "5",
          "japanese": "消息",
          "chinese": "信息",
          "pinyin": "xìnxī"
      },
      {
          "hskclass": "5",
          "japanese": "動く",
          "chinese": "行动",
          "pinyin": "xíngdòng"
      },
      {
          "hskclass": "5",
          "japanese": "通行人",
          "chinese": "行人",
          "pinyin": "xíngrén"
      },
      {
          "hskclass": "5",
          "japanese": "行為",
          "chinese": "行为",
          "pinyin": "xíngwéi"
      },
      {
          "hskclass": "5",
          "japanese": "形成する",
          "chinese": "形成",
          "pinyin": "xíngchéng"
      },
      {
          "hskclass": "5",
          "japanese": "容貌,形容する",
          "chinese": "形容",
          "pinyin": "xíngróng"
      },
      {
          "hskclass": "5",
          "japanese": "形式",
          "chinese": "形式",
          "pinyin": "xíngshì"
      },
      {
          "hskclass": "5",
          "japanese": "情勢,形勢",
          "chinese": "形势",
          "pinyin": "xíngshì"
      },
      {
          "hskclass": "5",
          "japanese": "イメージ",
          "chinese": "形象",
          "pinyin": "xíngxiàng"
      },
      {
          "hskclass": "5",
          "japanese": "形状",
          "chinese": "形状",
          "pinyin": "xíngzhuàng"
      },
      {
          "hskclass": "5",
          "japanese": "性質",
          "chinese": "性质",
          "pinyin": "xìngzhì"
      },
      {
          "hskclass": "5",
          "japanese": "幸いにも",
          "chinese": "幸亏",
          "pinyin": "xìngkuī"
      },
      {
          "hskclass": "5",
          "japanese": "幸運",
          "chinese": "幸运",
          "pinyin": "xìngyùn"
      },
      {
          "hskclass": "5",
          "japanese": "胸",
          "chinese": "胸",
          "pinyin": "xiōng"
      },
      {
          "hskclass": "5",
          "japanese": "兄弟",
          "chinese": "兄弟",
          "pinyin": "xiōngdì"
      },
      {
          "hskclass": "5",
          "japanese": "雄大である",
          "chinese": "雄伟",
          "pinyin": "xióngwěi"
      },
      {
          "hskclass": "5",
          "japanese": "改正する",
          "chinese": "修改",
          "pinyin": "xiūgǎi"
      },
      {
          "hskclass": "5",
          "japanese": "（土地を）遊ばせておく,余暇",
          "chinese": "休闲",
          "pinyin": "xiūxián"
      },
      {
          "hskclass": "5",
          "japanese": "謙虚である",
          "chinese": "虚心",
          "pinyin": "xūxīn"
      },
      {
          "hskclass": "5",
          "japanese": "記したり述べたりする",
          "chinese": "叙述",
          "pinyin": "xùshù"
      },
      {
          "hskclass": "5",
          "japanese": "宣言する",
          "chinese": "宣布",
          "pinyin": "xuānbù"
      },
      {
          "hskclass": "5",
          "japanese": "宣伝する",
          "chinese": "宣传",
          "pinyin": "xuānchuán"
      },
      {
          "hskclass": "5",
          "japanese": "選挙する",
          "chinese": "选举",
          "pinyin": "xuǎnjǔ"
      },
      {
          "hskclass": "5",
          "japanese": "学期",
          "chinese": "学期",
          "pinyin": "xuéqí"
      },
      {
          "hskclass": "5",
          "japanese": "学術",
          "chinese": "学术",
          "pinyin": "xuéshù"
      },
      {
          "hskclass": "5",
          "japanese": "学問",
          "chinese": "学问",
          "pinyin": "xuéwèn"
      },
      {
          "hskclass": "5",
          "japanese": "質問する",
          "chinese": "询问",
          "pinyin": "xúnwèn"
      },
      {
          "hskclass": "5",
          "japanese": "探す",
          "chinese": "寻找",
          "pinyin": "xúnzhǎo"
      },
      {
          "hskclass": "5",
          "japanese": "訓練する",
          "chinese": "训练",
          "pinyin": "xùnliàn"
      },
      {
          "hskclass": "5",
          "japanese": "迅速である",
          "chinese": "迅速",
          "pinyin": "xùnsù"
      },
      {
          "hskclass": "5",
          "japanese": "延ばす",
          "chinese": "延长",
          "pinyin": "yáncháng"
      },
      {
          "hskclass": "5",
          "japanese": "厳粛である",
          "chinese": "严肃",
          "pinyin": "yánsù"
      },
      {
          "hskclass": "5",
          "japanese": "宴会",
          "chinese": "宴会",
          "pinyin": "yànhuì"
      },
      {
          "hskclass": "5",
          "japanese": "ベランダ",
          "chinese": "阳台",
          "pinyin": "yángtái"
      },
      {
          "hskclass": "5",
          "japanese": "かゆい",
          "chinese": "痒",
          "pinyin": "yǎng"
      },
      {
          "hskclass": "5",
          "japanese": "様式",
          "chinese": "样式",
          "pinyin": "yàngshì"
      },
      {
          "hskclass": "5",
          "japanese": "腰",
          "chinese": "腰",
          "pinyin": "yāo"
      },
      {
          "hskclass": "5",
          "japanese": "揺れる",
          "chinese": "摇",
          "pinyin": "yáo"
      },
      {
          "hskclass": "5",
          "japanese": "噛む",
          "chinese": "咬",
          "pinyin": "yǎo"
      },
      {
          "hskclass": "5",
          "japanese": "さもなければ",
          "chinese": "要不",
          "pinyin": "yào bù"
      },
      {
          "hskclass": "5",
          "japanese": "もし…なら",
          "chinese": "要是",
          "pinyin": "yào shi"
      },
      {
          "hskclass": "5",
          "japanese": "夜",
          "chinese": "夜",
          "pinyin": "yè"
      },
      {
          "hskclass": "5",
          "japanese": "液体",
          "chinese": "液体",
          "pinyin": "yètǐ"
      },
      {
          "hskclass": "5",
          "japanese": "業務",
          "chinese": "业务",
          "pinyin": "yèwù"
      },
      {
          "hskclass": "5",
          "japanese": "余暇の",
          "chinese": "业余",
          "pinyin": "yèyú"
      },
      {
          "hskclass": "5",
          "japanese": "依然としている",
          "chinese": "依然",
          "pinyin": "yīrán"
      },
      {
          "hskclass": "5",
          "japanese": "生涯",
          "chinese": "一辈子",
          "pinyin": "yībèizi"
      },
      {
          "hskclass": "5",
          "japanese": "一旦",
          "chinese": "一旦",
          "pinyin": "yīdàn"
      },
      {
          "hskclass": "5",
          "japanese": "お気をつけて",
          "chinese": "一路平安",
          "pinyin": "yīlù píng'ān"
      },
      {
          "hskclass": "5",
          "japanese": "一致している",
          "chinese": "一致",
          "pinyin": "yīzhì"
      },
      {
          "hskclass": "5",
          "japanese": "移動する",
          "chinese": "移动",
          "pinyin": "yídòng"
      },
      {
          "hskclass": "5",
          "japanese": "移民",
          "chinese": "移民",
          "pinyin": "yímín"
      },
      {
          "hskclass": "5",
          "japanese": "遺憾である",
          "chinese": "遗憾",
          "pinyin": "yíhàn"
      },
      {
          "hskclass": "5",
          "japanese": "疑問",
          "chinese": "疑问",
          "pinyin": "yíwèn"
      },
      {
          "hskclass": "5",
          "japanese": "（配列順序の）2番め",
          "chinese": "乙",
          "pinyin": "yǐ"
      },
      {
          "hskclass": "5",
          "japanese": "および",
          "chinese": "以及",
          "pinyin": "yǐjí"
      },
      {
          "hskclass": "5",
          "japanese": "…（して）以来",
          "chinese": "以来",
          "pinyin": "yǐlái"
      },
      {
          "hskclass": "5",
          "japanese": "意外である",
          "chinese": "意外",
          "pinyin": "yìwài"
      },
      {
          "hskclass": "5",
          "japanese": "意味",
          "chinese": "意义",
          "pinyin": "yìyì"
      },
      {
          "hskclass": "5",
          "japanese": "議論する",
          "chinese": "议论",
          "pinyin": "yìlùn"
      },
      {
          "hskclass": "5",
          "japanese": "義務",
          "chinese": "义务",
          "pinyin": "yìwù"
      },
      {
          "hskclass": "5",
          "japanese": "それによって，従って",
          "chinese": "因而",
          "pinyin": "yīn'ér"
      },
      {
          "hskclass": "5",
          "japanese": "要素",
          "chinese": "因素",
          "pinyin": "yīnsù"
      },
      {
          "hskclass": "5",
          "japanese": "銀",
          "chinese": "银",
          "pinyin": "yín"
      },
      {
          "hskclass": "5",
          "japanese": "才能がすぐれている,ハンサム",
          "chinese": "英俊",
          "pinyin": "yīngjùn"
      },
      {
          "hskclass": "5",
          "japanese": "英雄",
          "chinese": "英雄",
          "pinyin": "yīngxióng"
      },
      {
          "hskclass": "5",
          "japanese": "出迎える",
          "chinese": "迎接",
          "pinyin": "yíngjiē"
      },
      {
          "hskclass": "5",
          "japanese": "栄養",
          "chinese": "营养",
          "pinyin": "yíngyǎng"
      },
      {
          "hskclass": "5",
          "japanese": "営業する",
          "chinese": "营业",
          "pinyin": "yíngyè"
      },
      {
          "hskclass": "5",
          "japanese": "影",
          "chinese": "影子",
          "pinyin": "yǐngzi"
      },
      {
          "hskclass": "5",
          "japanese": "硬貨",
          "chinese": "硬币",
          "pinyin": "yìngbì"
      },
      {
          "hskclass": "5",
          "japanese": "ハードウェア",
          "chinese": "硬件",
          "pinyin": "yìngjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "対処する",
          "chinese": "应付",
          "pinyin": "yìngfù"
      },
      {
          "hskclass": "5",
          "japanese": "招聘に応じる",
          "chinese": "应聘",
          "pinyin": "yìngpìn"
      },
      {
          "hskclass": "5",
          "japanese": "使用する",
          "chinese": "应用",
          "pinyin": "yìngyòng"
      },
      {
          "hskclass": "5",
          "japanese": "抱擁する",
          "chinese": "拥抱",
          "pinyin": "yǒngbào"
      },
      {
          "hskclass": "5",
          "japanese": "押し合う",
          "chinese": "拥挤",
          "pinyin": "yǒngjǐ"
      },
      {
          "hskclass": "5",
          "japanese": "勇気",
          "chinese": "勇气",
          "pinyin": "yǒngqì"
      },
      {
          "hskclass": "5",
          "japanese": "用途",
          "chinese": "用途",
          "pinyin": "yòngtú"
      },
      {
          "hskclass": "5",
          "japanese": "特恵の",
          "chinese": "优惠",
          "pinyin": "yōuhuì"
      },
      {
          "hskclass": "5",
          "japanese": "美しい",
          "chinese": "优美",
          "pinyin": "yōuměi"
      },
      {
          "hskclass": "5",
          "japanese": "優勢",
          "chinese": "优势",
          "pinyin": "yōushì"
      },
      {
          "hskclass": "5",
          "japanese": "悠久である",
          "chinese": "悠久",
          "pinyin": "yōujiǔ"
      },
      {
          "hskclass": "5",
          "japanese": "郵便局",
          "chinese": "邮局",
          "pinyin": "yóujú"
      },
      {
          "hskclass": "5",
          "japanese": "遊覧する",
          "chinese": "游览",
          "pinyin": "yóulǎn"
      },
      {
          "hskclass": "5",
          "japanese": "ためらう",
          "chinese": "犹豫",
          "pinyin": "yóuyù"
      },
      {
          "hskclass": "5",
          "japanese": "油で揚げる",
          "chinese": "油炸",
          "pinyin": "yóu zhá"
      },
      {
          "hskclass": "5",
          "japanese": "有利である",
          "chinese": "有利",
          "pinyin": "yǒulì"
      },
      {
          "hskclass": "5",
          "japanese": "幼稚園",
          "chinese": "幼儿园",
          "pinyin": "yòu'éryuán"
      },
      {
          "hskclass": "5",
          "japanese": "娯楽",
          "chinese": "娱乐",
          "pinyin": "yúlè"
      },
      {
          "hskclass": "5",
          "japanese": "…する（である）よりは",
          "chinese": "与其",
          "pinyin": "yǔqí"
      },
      {
          "hskclass": "5",
          "japanese": "話しぶり",
          "chinese": "语气",
          "pinyin": "yǔqì"
      },
      {
          "hskclass": "5",
          "japanese": "宇宙",
          "chinese": "宇宙",
          "pinyin": "yǔzhòu"
      },
      {
          "hskclass": "5",
          "japanese": "予報する",
          "chinese": "预报",
          "pinyin": "yùbào"
      },
      {
          "hskclass": "5",
          "japanese": "予約する",
          "chinese": "预订",
          "pinyin": "yùdìng"
      },
      {
          "hskclass": "5",
          "japanese": "予防する",
          "chinese": "预防",
          "pinyin": "yùfáng"
      },
      {
          "hskclass": "5",
          "japanese": "トウモロコシ",
          "chinese": "玉米",
          "pinyin": "yùmǐ"
      },
      {
          "hskclass": "5",
          "japanese": "元旦",
          "chinese": "元旦",
          "pinyin": "yuándàn"
      },
      {
          "hskclass": "5",
          "japanese": "原因,わけ",
          "chinese": "缘故",
          "pinyin": "yuángù"
      },
      {
          "hskclass": "5",
          "japanese": "原料",
          "chinese": "原料",
          "pinyin": "yuánliào"
      },
      {
          "hskclass": "5",
          "japanese": "原則",
          "chinese": "原则",
          "pinyin": "yuánzé"
      },
      {
          "hskclass": "5",
          "japanese": "願い",
          "chinese": "愿望",
          "pinyin": "yuànwàng"
      },
      {
          "hskclass": "5",
          "japanese": "目がくらむ",
          "chinese": "晕",
          "pinyin": "yūn"
      },
      {
          "hskclass": "5",
          "japanese": "運",
          "chinese": "运气",
          "pinyin": "yùnqì"
      },
      {
          "hskclass": "5",
          "japanese": "輸送する",
          "chinese": "运输",
          "pinyin": "yùnshū"
      },
      {
          "hskclass": "5",
          "japanese": "運用する",
          "chinese": "运用",
          "pinyin": "yùnyòng"
      },
      {
          "hskclass": "5",
          "japanese": "災害",
          "chinese": "灾害",
          "pinyin": "zāihài"
      },
      {
          "hskclass": "5",
          "japanese": "再三",
          "chinese": "再三",
          "pinyin": "zàisān"
      },
      {
          "hskclass": "5",
          "japanese": "賛成する",
          "chinese": "赞成",
          "pinyin": "zànchéng"
      },
      {
          "hskclass": "5",
          "japanese": "賛美する",
          "chinese": "赞美",
          "pinyin": "zànměi"
      },
      {
          "hskclass": "5",
          "japanese": "（事柄や状況が）ひどく悪い",
          "chinese": "糟糕",
          "pinyin": "zāogāo"
      },
      {
          "hskclass": "5",
          "japanese": "引き起こす",
          "chinese": "造成",
          "pinyin": "zàochéng"
      },
      {
          "hskclass": "5",
          "japanese": "規範",
          "chinese": "则",
          "pinyin": "zé"
      },
      {
          "hskclass": "5",
          "japanese": "責める",
          "chinese": "责备",
          "pinyin": "zébèi"
      },
      {
          "hskclass": "5",
          "japanese": "摘み取る",
          "chinese": "摘",
          "pinyin": "zhāi"
      },
      {
          "hskclass": "5",
          "japanese": "貼る",
          "chinese": "粘贴",
          "pinyin": "zhāntiē"
      },
      {
          "hskclass": "5",
          "japanese": "広げる",
          "chinese": "展开",
          "pinyin": "zhǎnkāi"
      },
      {
          "hskclass": "5",
          "japanese": "展覧する",
          "chinese": "展览",
          "pinyin": "zhǎnlǎn"
      },
      {
          "hskclass": "5",
          "japanese": "（電話が）話し中である",
          "chinese": "占线",
          "pinyin": "zhànxiàn"
      },
      {
          "hskclass": "5",
          "japanese": "戦争",
          "chinese": "战争",
          "pinyin": "zhànzhēng"
      },
      {
          "hskclass": "5",
          "japanese": "上がる，増す",
          "chinese": "涨",
          "pinyin": "zhǎng"
      },
      {
          "hskclass": "5",
          "japanese": "握る",
          "chinese": "掌握",
          "pinyin": "zhǎngwò"
      },
      {
          "hskclass": "5",
          "japanese": "勘定",
          "chinese": "账户",
          "pinyin": "zhànghù"
      },
      {
          "hskclass": "5",
          "japanese": "抱き",
          "chinese": "招待",
          "pinyin": "zhāodài"
      },
      {
          "hskclass": "5",
          "japanese": "風邪を引く",
          "chinese": "着凉",
          "pinyin": "zháoliáng"
      },
      {
          "hskclass": "5",
          "japanese": "平常どおり",
          "chinese": "照常",
          "pinyin": "zhàocháng"
      },
      {
          "hskclass": "5",
          "japanese": "開催する",
          "chinese": "召开",
          "pinyin": "zhàokāi"
      },
      {
          "hskclass": "5",
          "japanese": "哲学",
          "chinese": "哲学",
          "pinyin": "zhéxué"
      },
      {
          "hskclass": "5",
          "japanese": "真理",
          "chinese": "真理",
          "pinyin": "zhēnlǐ"
      },
      {
          "hskclass": "5",
          "japanese": "真実である",
          "chinese": "真实",
          "pinyin": "zhēnshí"
      },
      {
          "hskclass": "5",
          "japanese": "〜に焦点を合わせて",
          "chinese": "针对",
          "pinyin": "zhēnduì"
      },
      {
          "hskclass": "5",
          "japanese": "大切にする",
          "chinese": "珍惜",
          "pinyin": "zhēnxī"
      },
      {
          "hskclass": "5",
          "japanese": "診断する",
          "chinese": "诊断",
          "pinyin": "zhěnduàn"
      },
      {
          "hskclass": "5",
          "japanese": "枕",
          "chinese": "枕头",
          "pinyin": "zhěntou"
      },
      {
          "hskclass": "5",
          "japanese": "陣立て",
          "chinese": "阵",
          "pinyin": "zhèn"
      },
      {
          "hskclass": "5",
          "japanese": "振動する",
          "chinese": "振动",
          "pinyin": "zhèndòng"
      },
      {
          "hskclass": "5",
          "japanese": "目を開ける",
          "chinese": "睁",
          "pinyin": "zhēng"
      },
      {
          "hskclass": "5",
          "japanese": "論争する",
          "chinese": "争论",
          "pinyin": "zhēnglùn"
      },
      {
          "hskclass": "5",
          "japanese": "勝ち取る",
          "chinese": "争取",
          "pinyin": "zhēngqǔ"
      },
      {
          "hskclass": "5",
          "japanese": "求める",
          "chinese": "征求",
          "pinyin": "zhēngqiú"
      },
      {
          "hskclass": "5",
          "japanese": "丸ごとの",
          "chinese": "整个",
          "pinyin": "zhěnggè"
      },
      {
          "hskclass": "5",
          "japanese": "全体",
          "chinese": "整体",
          "pinyin": "zhěngtǐ"
      },
      {
          "hskclass": "5",
          "japanese": "まっすぐな",
          "chinese": "正",
          "pinyin": "zhèng"
      },
      {
          "hskclass": "5",
          "japanese": "政策",
          "chinese": "政策",
          "pinyin": "zhèngcè"
      },
      {
          "hskclass": "5",
          "japanese": "政府",
          "chinese": "政府",
          "pinyin": "zhèngfǔ"
      },
      {
          "hskclass": "5",
          "japanese": "政治",
          "chinese": "政治",
          "pinyin": "zhèngzhì"
      },
      {
          "hskclass": "5",
          "japanese": "証明書",
          "chinese": "证件",
          "pinyin": "zhèngjiàn"
      },
      {
          "hskclass": "5",
          "japanese": "証拠",
          "chinese": "证据",
          "pinyin": "zhèngjù"
      },
      {
          "hskclass": "5",
          "japanese": "お金を稼ぐ",
          "chinese": "挣钱",
          "pinyin": "zhèng qián"
      },
      {
          "hskclass": "5",
          "japanese": "支える",
          "chinese": "支",
          "pinyin": "zhī"
      },
      {
          "hskclass": "5",
          "japanese": "小切手",
          "chinese": "支票",
          "pinyin": "zhīpiào"
      },
      {
          "hskclass": "5",
          "japanese": "まっすぐである",
          "chinese": "直",
          "pinyin": "zhí"
      },
      {
          "hskclass": "5",
          "japanese": "実行する",
          "chinese": "执行",
          "pinyin": "zhíxíng"
      },
      {
          "hskclass": "5",
          "japanese": "許可証",
          "chinese": "执照",
          "pinyin": "zhízhào"
      },
      {
          "hskclass": "5",
          "japanese": "指導する",
          "chinese": "指导",
          "pinyin": "zhǐdǎo"
      },
      {
          "hskclass": "5",
          "japanese": "指揮する",
          "chinese": "指挥",
          "pinyin": "zhǐhuī"
      },
      {
          "hskclass": "5",
          "japanese": "制定する",
          "chinese": "制定",
          "pinyin": "zhìdìng"
      },
      {
          "hskclass": "5",
          "japanese": "制度",
          "chinese": "制度",
          "pinyin": "zhìdù"
      },
      {
          "hskclass": "5",
          "japanese": "製作する",
          "chinese": "制作",
          "pinyin": "zhìzuò"
      },
      {
          "hskclass": "5",
          "japanese": "知恵",
          "chinese": "智慧",
          "pinyin": "zhìhuì"
      },
      {
          "hskclass": "5",
          "japanese": "今に至るまで",
          "chinese": "至今",
          "pinyin": "zhìjīn"
      },
      {
          "hskclass": "5",
          "japanese": "（ある程度に）至る",
          "chinese": "至于",
          "pinyin": "zhìyú"
      },
      {
          "hskclass": "5",
          "japanese": "治療する",
          "chinese": "治疗",
          "pinyin": "zhìliáo"
      },
      {
          "hskclass": "5",
          "japanese": "秩序",
          "chinese": "秩序",
          "pinyin": "zhìxù"
      },
      {
          "hskclass": "5",
          "japanese": "ボランティア",
          "chinese": "志愿者",
          "pinyin": "zhìyuàn zhě"
      },
      {
          "hskclass": "5",
          "japanese": "鐘",
          "chinese": "钟",
          "pinyin": "zhōng"
      },
      {
          "hskclass": "5",
          "japanese": "仲介",
          "chinese": "中介",
          "pinyin": "zhōngjiè"
      },
      {
          "hskclass": "5",
          "japanese": "中心",
          "chinese": "中心",
          "pinyin": "zhōngxīn"
      },
      {
          "hskclass": "5",
          "japanese": "中旬",
          "chinese": "中旬",
          "pinyin": "zhōngxún"
      },
      {
          "hskclass": "5",
          "japanese": "重ねる，重い",
          "chinese": "重",
          "pinyin": "zhòng"
      },
      {
          "hskclass": "5",
          "japanese": "重量",
          "chinese": "重量",
          "pinyin": "zhòngliàng"
      },
      {
          "hskclass": "5",
          "japanese": "行き届いている",
          "chinese": "周到",
          "pinyin": "zhōudào"
      },
      {
          "hskclass": "5",
          "japanese": "一歩一歩と,次第に",
          "chinese": "逐步",
          "pinyin": "zhúbù"
      },
      {
          "hskclass": "5",
          "japanese": "竹",
          "chinese": "竹子",
          "pinyin": "zhúzi"
      },
      {
          "hskclass": "5",
          "japanese": "煮る",
          "chinese": "煮",
          "pinyin": "zhǔ"
      },
      {
          "hskclass": "5",
          "japanese": "主催する",
          "chinese": "主持",
          "pinyin": "zhǔchí"
      },
      {
          "hskclass": "5",
          "japanese": "主観",
          "chinese": "主观",
          "pinyin": "zhǔguān"
      },
      {
          "hskclass": "5",
          "japanese": "（客に対し）主人",
          "chinese": "主人",
          "pinyin": "zhǔrén"
      },
      {
          "hskclass": "5",
          "japanese": "議長",
          "chinese": "主席",
          "pinyin": "zhǔxí"
      },
      {
          "hskclass": "5",
          "japanese": "主張",
          "chinese": "主张",
          "pinyin": "zhǔzhāng"
      },
      {
          "hskclass": "5",
          "japanese": "言い聞かせる",
          "chinese": "嘱咐",
          "pinyin": "zhǔfù"
      },
      {
          "hskclass": "5",
          "japanese": "祝福する",
          "chinese": "祝福",
          "pinyin": "zhùfú"
      },
      {
          "hskclass": "5",
          "japanese": "登録する",
          "chinese": "注册",
          "pinyin": "zhùcè"
      },
      {
          "hskclass": "5",
          "japanese": "しっかりつかむ",
          "chinese": "抓紧",
          "pinyin": "zhuājǐn"
      },
      {
          "hskclass": "5",
          "japanese": "専門家",
          "chinese": "专家",
          "pinyin": "zhuānjiā"
      },
      {
          "hskclass": "5",
          "japanese": "専念している",
          "chinese": "专心",
          "pinyin": "zhuānxīn"
      },
      {
          "hskclass": "5",
          "japanese": "（考え・立場などが）変わる，変える",
          "chinese": "转变",
          "pinyin": "zhuǎnbiàn"
      },
      {
          "hskclass": "5",
          "japanese": "伝言する",
          "chinese": "转告",
          "pinyin": "zhuǎngào"
      },
      {
          "hskclass": "5",
          "japanese": "扮装する",
          "chinese": "装",
          "pinyin": "zhuāng"
      },
      {
          "hskclass": "5",
          "japanese": "装飾する",
          "chinese": "装饰",
          "pinyin": "zhuāngshì"
      },
      {
          "hskclass": "5",
          "japanese": "状況",
          "chinese": "状况",
          "pinyin": "zhuàngkuàng"
      },
      {
          "hskclass": "5",
          "japanese": "状態",
          "chinese": "状态",
          "pinyin": "zhuàngtài"
      },
      {
          "hskclass": "5",
          "japanese": "追求する",
          "chinese": "追求",
          "pinyin": "zhuīqiú"
      },
      {
          "hskclass": "5",
          "japanese": "資格",
          "chinese": "资格",
          "pinyin": "zīgé"
      },
      {
          "hskclass": "5",
          "japanese": "資金",
          "chinese": "资金",
          "pinyin": "zījīn"
      },
      {
          "hskclass": "5",
          "japanese": "（生産・生活に必要な）資材，物資",
          "chinese": "资料",
          "pinyin": "zīliào"
      },
      {
          "hskclass": "5",
          "japanese": "資源",
          "chinese": "资源",
          "pinyin": "zīyuán"
      },
      {
          "hskclass": "5",
          "japanese": "姿勢",
          "chinese": "姿势",
          "pinyin": "zīshì"
      },
      {
          "hskclass": "5",
          "japanese": "諮問する",
          "chinese": "咨询",
          "pinyin": "zīxún"
      },
      {
          "hskclass": "5",
          "japanese": "紫色の",
          "chinese": "紫",
          "pinyin": "zǐ"
      },
      {
          "hskclass": "5",
          "japanese": "字幕",
          "chinese": "字幕",
          "pinyin": "zìmù"
      },
      {
          "hskclass": "5",
          "japanese": "（過去を起点として）…より，…から",
          "chinese": "自从",
          "pinyin": "zìcóng"
      },
      {
          "hskclass": "5",
          "japanese": "，自発的に",
          "chinese": "自动",
          "pinyin": "zìdòng"
      },
      {
          "hskclass": "5",
          "japanese": "誇りに思っている",
          "chinese": "自豪",
          "pinyin": "zìháo"
      },
      {
          "hskclass": "5",
          "japanese": "自覚する",
          "chinese": "自觉",
          "pinyin": "zìjué"
      },
      {
          "hskclass": "5",
          "japanese": "利己的である",
          "chinese": "自私",
          "pinyin": "zìsī"
      },
      {
          "hskclass": "5",
          "japanese": "自信",
          "chinese": "自信",
          "pinyin": "zìxìn"
      },
      {
          "hskclass": "5",
          "japanese": "自由",
          "chinese": "自由",
          "pinyin": "zìyóu"
      },
      {
          "hskclass": "5",
          "japanese": "自ら希望する",
          "chinese": "自愿",
          "pinyin": "zìyuàn"
      },
      {
          "hskclass": "5",
          "japanese": "総合する",
          "chinese": "综合",
          "pinyin": "zònghé"
      },
      {
          "hskclass": "5",
          "japanese": "宗教",
          "chinese": "宗教",
          "pinyin": "zōngjiào"
      },
      {
          "hskclass": "5",
          "japanese": "責任者",
          "chinese": "总裁",
          "pinyin": "zǒngcái"
      },
      {
          "hskclass": "5",
          "japanese": "全部で",
          "chinese": "总共",
          "pinyin": "zǒnggòng"
      },
      {
          "hskclass": "5",
          "japanese": "総理，首相",
          "chinese": "总理",
          "pinyin": "zǒnglǐ"
      },
      {
          "hskclass": "5",
          "japanese": "ようやく，やっと，どうにか",
          "chinese": "总算",
          "pinyin": "zǒngsuàn"
      },
      {
          "hskclass": "5",
          "japanese": "大統領",
          "chinese": "总统",
          "pinyin": "zǒngtǒng"
      },
      {
          "hskclass": "5",
          "japanese": "要するに",
          "chinese": "总之",
          "pinyin": "zǒngzhī"
      },
      {
          "hskclass": "5",
          "japanese": "組み合わせ",
          "chinese": "组合",
          "pinyin": "zǔhé"
      },
      {
          "hskclass": "5",
          "japanese": "祖国",
          "chinese": "祖国",
          "pinyin": "zǔguó"
      },
      {
          "hskclass": "5",
          "japanese": "祖先",
          "chinese": "祖先",
          "pinyin": "zǔxiān"
      },
      {
          "hskclass": "5",
          "japanese": "阻止する",
          "chinese": "阻止",
          "pinyin": "zǔzhǐ"
      },
      {
          "hskclass": "5",
          "japanese": "酔う",
          "chinese": "醉",
          "pinyin": "zuì"
      },
      {
          "hskclass": "5",
          "japanese": "最初の",
          "chinese": "最初",
          "pinyin": "zuìchū"
      },
      {
          "hskclass": "5",
          "japanese": "犯人",
          "chinese": "罪犯",
          "pinyin": "zuìfàn"
      },
      {
          "hskclass": "5",
          "japanese": "尊敬する",
          "chinese": "尊敬",
          "pinyin": "zūnjìng"
      },
      {
          "hskclass": "5",
          "japanese": "遵守する",
          "chinese": "遵守",
          "pinyin": "zūnshǒu"
      },
      {
          "hskclass": "5",
          "japanese": "作品",
          "chinese": "作品",
          "pinyin": "zuòpǐn"
      },
      {
          "hskclass": "5",
          "japanese": "行為",
          "chinese": "作为",
          "pinyin": "zuòwéi"
      },
      {
          "hskclass": "5",
          "japanese": "作文",
          "chinese": "作文",
          "pinyin": "zuòwén"
      },
      {
          "hskclass": "6",
          "japanese": "あっ、あれっ",
          "chinese": "哎哟",
          "pinyin": "āiyō"
      },
      {
          "hskclass": "6",
          "japanese": "順を追って",
          "chinese": "挨",
          "pinyin": "āi"
      },
      {
          "hskclass": "6",
          "japanese": "癌",
          "chinese": "癌症",
          "pinyin": "áizhèng"
      },
      {
          "hskclass": "6",
          "japanese": "大切にして手放すに忍びない",
          "chinese": "爱不释手",
          "pinyin": "àibùshìshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "敬愛する",
          "chinese": "爱戴",
          "pinyin": "àidài"
      },
      {
          "hskclass": "6",
          "japanese": "あいまいである",
          "chinese": "暧昧",
          "pinyin": "àimèi"
      },
      {
          "hskclass": "6",
          "japanese": "安穏に暮くらし愉快に働はたらく",
          "chinese": "安居乐业",
          "pinyin": "ānjūlèyè"
      },
      {
          "hskclass": "6",
          "japanese": "平穏である",
          "chinese": "安宁",
          "pinyin": "ānníng"
      },
      {
          "hskclass": "6",
          "japanese": "おっとりしている",
          "chinese": "安详",
          "pinyin": "ānxiáng"
      },
      {
          "hskclass": "6",
          "japanese": "据え置く",
          "chinese": "安置",
          "pinyin": "ānzhì"
      },
      {
          "hskclass": "6",
          "japanese": "(法律) 事件",
          "chinese": "案件",
          "pinyin": "ànjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "判例",
          "chinese": "案例",
          "pinyin": "ànlì"
      },
      {
          "hskclass": "6",
          "japanese": "マッサージ",
          "chinese": "按摩",
          "pinyin": "ànmó"
      },
      {
          "hskclass": "6",
          "japanese": "暗示する",
          "chinese": "暗示",
          "pinyin": "ànshì"
      },
      {
          "hskclass": "6",
          "japanese": "値段が高い",
          "chinese": "昂贵",
          "pinyin": "ángguì"
      },
      {
          "hskclass": "6",
          "japanese": "均等でないこと",
          "chinese": "凹凸",
          "pinyin": "āotú"
      },
      {
          "hskclass": "6",
          "japanese": "煮る",
          "chinese": "熬",
          "pinyin": "áo"
      },
      {
          "hskclass": "6",
          "japanese": "神秘",
          "chinese": "奥秘",
          "pinyin": "àomì"
      },
      {
          "hskclass": "6",
          "japanese": "すがりつく",
          "chinese": "扒",
          "pinyin": "bā"
      },
      {
          "hskclass": "6",
          "japanese": "傷跡",
          "chinese": "疤",
          "pinyin": "bā"
      },
      {
          "hskclass": "6",
          "japanese": "待ち望む",
          "chinese": "巴不得",
          "pinyin": "bābudé"
      },
      {
          "hskclass": "6",
          "japanese": "取り入る",
          "chinese": "巴结",
          "pinyin": "bājié"
      },
      {
          "hskclass": "6",
          "japanese": "功を焦ってやり方を間違えるとかえって悪い結果を招く",
          "chinese": "拔苗助长",
          "pinyin": "bámiáozhùzhǎng"
      },
      {
          "hskclass": "6",
          "japanese": "関所を守る",
          "chinese": "把关",
          "pinyin": "bǎguān"
      },
      {
          "hskclass": "6",
          "japanese": "ハンドル",
          "chinese": "把手",
          "pinyin": "bǎshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "軽業",
          "chinese": "把戏",
          "pinyin": "bǎxì"
      },
      {
          "hskclass": "6",
          "japanese": "覇道",
          "chinese": "霸道",
          "pinyin": "bàdào"
      },
      {
          "hskclass": "6",
          "japanese": "ストライキをする",
          "chinese": "罢工",
          "pinyin": "bàgōng"
      },
      {
          "hskclass": "6",
          "japanese": "（両手で持って）2つに割る",
          "chinese": "掰",
          "pinyin": "bāi"
      },
      {
          "hskclass": "6",
          "japanese": "ポイント",
          "chinese": "百分点",
          "pinyin": "bǎifēndiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "逃れる",
          "chinese": "摆脱",
          "pinyin": "bǎituō"
      },
      {
          "hskclass": "6",
          "japanese": "訪れる",
          "chinese": "拜访",
          "pinyin": "bàifǎng"
      },
      {
          "hskclass": "6",
          "japanese": "汚す",
          "chinese": "败坏",
          "pinyin": "bàihuài"
      },
      {
          "hskclass": "6",
          "japanese": "年始のあいさつをする",
          "chinese": "拜年",
          "pinyin": "bàinián"
      },
      {
          "hskclass": "6",
          "japanese": "お願いする",
          "chinese": "拜托",
          "pinyin": "bàituō"
      },
      {
          "hskclass": "6",
          "japanese": "発布する",
          "chinese": "颁布",
          "pinyin": "bānbù"
      },
      {
          "hskclass": "6",
          "japanese": "公布する",
          "chinese": "颁发",
          "pinyin": "bānfā"
      },
      {
          "hskclass": "6",
          "japanese": "しま模様",
          "chinese": "斑纹",
          "pinyin": "bānwén"
      },
      {
          "hskclass": "6",
          "japanese": "版本",
          "chinese": "版本",
          "pinyin": "bǎnběn"
      },
      {
          "hskclass": "6",
          "japanese": "伴侶",
          "chinese": "伴侣",
          "pinyin": "bànlǚ"
      },
      {
          "hskclass": "6",
          "japanese": "伴う",
          "chinese": "伴随",
          "pinyin": "bànsuí"
      },
      {
          "hskclass": "6",
          "japanese": "中途でやめる",
          "chinese": "半途而废",
          "pinyin": "bàntú'érfèi"
      },
      {
          "hskclass": "6",
          "japanese": "演じる",
          "chinese": "扮演",
          "pinyin": "bànyǎn"
      },
      {
          "hskclass": "6",
          "japanese": "拉致する",
          "chinese": "绑架",
          "pinyin": "bǎngjià"
      },
      {
          "hskclass": "6",
          "japanese": "手本",
          "chinese": "榜样",
          "pinyin": "bǎngyàng"
      },
      {
          "hskclass": "6",
          "japanese": "（重量単位）ポンド",
          "chinese": "磅",
          "pinyin": "bàng"
      },
      {
          "hskclass": "6",
          "japanese": "かばう",
          "chinese": "包庇",
          "pinyin": "bāobì"
      },
      {
          "hskclass": "6",
          "japanese": "ふろしき",
          "chinese": "包袱",
          "pinyin": "bāofú"
      },
      {
          "hskclass": "6",
          "japanese": "囲む",
          "chinese": "包围",
          "pinyin": "bāowéi"
      },
      {
          "hskclass": "6",
          "japanese": "包装する",
          "chinese": "包装",
          "pinyin": "bāozhuāng"
      },
      {
          "hskclass": "6",
          "japanese": "保管する",
          "chinese": "保管",
          "pinyin": "bǎoguǎn"
      },
      {
          "hskclass": "6",
          "japanese": "飽和",
          "chinese": "饱和",
          "pinyin": "bǎohé"
      },
      {
          "hskclass": "6",
          "japanese": "世の移り変わりをいやというほど経験する",
          "chinese": "饱经沧桑",
          "pinyin": "bǎojīngcāngsāng"
      },
      {
          "hskclass": "6",
          "japanese": "秘密を守る",
          "chinese": "保密",
          "pinyin": "bǎomì"
      },
      {
          "hskclass": "6",
          "japanese": "家政婦,保母",
          "chinese": "保姆",
          "pinyin": "bǎomǔ"
      },
      {
          "hskclass": "6",
          "japanese": "保守的である",
          "chinese": "保守",
          "pinyin": "bǎoshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "防衛する",
          "chinese": "保卫",
          "pinyin": "bǎowèi"
      },
      {
          "hskclass": "6",
          "japanese": "養生する",
          "chinese": "保养",
          "pinyin": "bǎoyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "保障する",
          "chinese": "保障",
          "pinyin": "bǎozhàng"
      },
      {
          "hskclass": "6",
          "japanese": "体を大事にする",
          "chinese": "保重",
          "pinyin": "bǎozhòng"
      },
      {
          "hskclass": "6",
          "japanese": "あだを討つ",
          "chinese": "报仇",
          "pinyin": "bàochóu"
      },
      {
          "hskclass": "6",
          "japanese": "報酬",
          "chinese": "报酬",
          "pinyin": "bàochóu"
      },
      {
          "hskclass": "6",
          "japanese": "報いる",
          "chinese": "报答",
          "pinyin": "bàodá"
      },
      {
          "hskclass": "6",
          "japanese": "到着・着任を報告する",
          "chinese": "报到",
          "pinyin": "bàodào"
      },
      {
          "hskclass": "6",
          "japanese": "爆発する",
          "chinese": "爆发",
          "pinyin": "bàofā"
      },
      {
          "hskclass": "6",
          "japanese": "仕返しをする",
          "chinese": "报复",
          "pinyin": "bàofù"
      },
      {
          "hskclass": "6",
          "japanese": "抱負",
          "chinese": "抱负",
          "pinyin": "bàofù"
      },
      {
          "hskclass": "6",
          "japanese": "露出する",
          "chinese": "曝光",
          "pinyin": "pùguāng"
      },
      {
          "hskclass": "6",
          "japanese": "暴力",
          "chinese": "暴力",
          "pinyin": "bàolì"
      },
      {
          "hskclass": "6",
          "japanese": "暴露する",
          "chinese": "暴露",
          "pinyin": "bàolù"
      },
      {
          "hskclass": "6",
          "japanese": "新聞社",
          "chinese": "报社",
          "pinyin": "bàoshè"
      },
      {
          "hskclass": "6",
          "japanese": "清算する",
          "chinese": "报销",
          "pinyin": "bàoxiāo"
      },
      {
          "hskclass": "6",
          "japanese": "不満に思う",
          "chinese": "抱怨",
          "pinyin": "bàoyuàn"
      },
      {
          "hskclass": "6",
          "japanese": "爆発する",
          "chinese": "爆炸",
          "pinyin": "bàozhà"
      },
      {
          "hskclass": "6",
          "japanese": "悲しい",
          "chinese": "悲哀",
          "pinyin": "bēi'āi"
      },
      {
          "hskclass": "6",
          "japanese": "下劣である",
          "chinese": "卑鄙",
          "pinyin": "bēibǐ"
      },
      {
          "hskclass": "6",
          "japanese": "悲惨である",
          "chinese": "悲惨",
          "pinyin": "bēicǎn"
      },
      {
          "hskclass": "6",
          "japanese": "北極",
          "chinese": "北极",
          "pinyin": "běijí"
      },
      {
          "hskclass": "6",
          "japanese": "受動的である",
          "chinese": "被动",
          "pinyin": "bèidòng"
      },
      {
          "hskclass": "6",
          "japanese": "バックアップ",
          "chinese": "备份",
          "pinyin": "bèifèn"
      },
      {
          "hskclass": "6",
          "japanese": "被告",
          "chinese": "被告",
          "pinyin": "bèigào"
      },
      {
          "hskclass": "6",
          "japanese": "貝殻",
          "chinese": "贝壳",
          "pinyin": "bèiké"
      },
      {
          "hskclass": "6",
          "japanese": "裏切る",
          "chinese": "背叛",
          "pinyin": "bèipàn"
      },
      {
          "hskclass": "6",
          "japanese": "暗唱する",
          "chinese": "背诵",
          "pinyin": "bèi sòng"
      },
      {
          "hskclass": "6",
          "japanese": "（外交文書の）覚書",
          "chinese": "备忘录",
          "pinyin": "bèiwànglù"
      },
      {
          "hskclass": "6",
          "japanese": "駆けずり回る",
          "chinese": "奔波",
          "pinyin": "bēnbō"
      },
      {
          "hskclass": "6",
          "japanese": "（車や馬が）疾走する",
          "chinese": "奔驰",
          "pinyin": "bēnchí"
      },
      {
          "hskclass": "6",
          "japanese": "本能",
          "chinese": "本能",
          "pinyin": "běnnéng"
      },
      {
          "hskclass": "6",
          "japanese": "元手",
          "chinese": "本钱",
          "pinyin": "běnqián"
      },
      {
          "hskclass": "6",
          "japanese": "本人",
          "chinese": "本人",
          "pinyin": "běnrén"
      },
      {
          "hskclass": "6",
          "japanese": "それ自身",
          "chinese": "本身",
          "pinyin": "běnshēn"
      },
      {
          "hskclass": "6",
          "japanese": "腕前",
          "chinese": "本事",
          "pinyin": "běnshì"
      },
      {
          "hskclass": "6",
          "japanese": "基づいて",
          "chinese": "本着",
          "pinyin": "běnzhe"
      },
      {
          "hskclass": "6",
          "japanese": "不器用である",
          "chinese": "笨拙",
          "pinyin": "bènzhuō"
      },
      {
          "hskclass": "6",
          "japanese": "崩壊する",
          "chinese": "崩溃",
          "pinyin": "bēngkuì"
      },
      {
          "hskclass": "6",
          "japanese": "…する必要はない",
          "chinese": "甭",
          "pinyin": "béng"
      },
      {
          "hskclass": "6",
          "japanese": "跳ねる",
          "chinese": "蹦",
          "pinyin": "bèng"
      },
      {
          "hskclass": "6",
          "japanese": "ほとばしる",
          "chinese": "迸发",
          "pinyin": "bèngfā"
      },
      {
          "hskclass": "6",
          "japanese": "強制する",
          "chinese": "逼迫",
          "pinyin": "bīpò"
      },
      {
          "hskclass": "6",
          "japanese": "鼻水",
          "chinese": "鼻涕",
          "pinyin": "bítì"
      },
      {
          "hskclass": "6",
          "japanese": "たとえ",
          "chinese": "比方",
          "pinyin": "bǐfāng"
      },
      {
          "hskclass": "6",
          "japanese": "比喩",
          "chinese": "比喻",
          "pinyin": "bǐyù"
      },
      {
          "hskclass": "6",
          "japanese": "比重",
          "chinese": "比重",
          "pinyin": "bǐzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "腕",
          "chinese": "臂",
          "pinyin": "bì"
      },
      {
          "hskclass": "6",
          "japanese": "弊害",
          "chinese": "弊病",
          "pinyin": "bìbìng"
      },
      {
          "hskclass": "6",
          "japanese": "きっと、必ず",
          "chinese": "必定",
          "pinyin": "bìdìng"
      },
      {
          "hskclass": "6",
          "japanese": "弊害",
          "chinese": "弊端",
          "pinyin": "bìduān"
      },
      {
          "hskclass": "6",
          "japanese": "塞がる",
          "chinese": "闭塞",
          "pinyin": "bìsè"
      },
      {
          "hskclass": "6",
          "japanese": "碧玉",
          "chinese": "碧玉",
          "pinyin": "bìyù"
      },
      {
          "hskclass": "6",
          "japanese": "むち打つ",
          "chinese": "鞭策",
          "pinyin": "biāncè"
      },
      {
          "hskclass": "6",
          "japanese": "边疆",
          "chinese": "边疆",
          "pinyin": "biānjiāng"
      },
      {
          "hskclass": "6",
          "japanese": "境界",
          "chinese": "边界",
          "pinyin": "biānjiè"
      },
      {
          "hskclass": "6",
          "japanese": "国境地帯",
          "chinese": "边境",
          "pinyin": "biānjìng"
      },
      {
          "hskclass": "6",
          "japanese": "ふち",
          "chinese": "边缘",
          "pinyin": "biānyuán"
      },
      {
          "hskclass": "6",
          "japanese": "編む",
          "chinese": "编织",
          "pinyin": "biānzhī"
      },
      {
          "hskclass": "6",
          "japanese": "平たく薄い",
          "chinese": "扁",
          "pinyin": "biǎn"
      },
      {
          "hskclass": "6",
          "japanese": "低く評価する",
          "chinese": "贬低",
          "pinyin": "biǎndī"
      },
      {
          "hskclass": "6",
          "japanese": "けなした表現",
          "chinese": "贬义",
          "pinyin": "biǎnyì"
      },
      {
          "hskclass": "6",
          "japanese": "至るところに分布する",
          "chinese": "遍布",
          "pinyin": "biànbù"
      },
      {
          "hskclass": "6",
          "japanese": "災難",
          "chinese": "变故",
          "pinyin": "biàngù"
      },
      {
          "hskclass": "6",
          "japanese": "弁護する",
          "chinese": "辩护",
          "pinyin": "biànhù"
      },
      {
          "hskclass": "6",
          "japanese": "弁解する",
          "chinese": "辩解",
          "pinyin": "biànjiě"
      },
      {
          "hskclass": "6",
          "japanese": "便利である",
          "chinese": "便利",
          "pinyin": "biànlì"
      },
      {
          "hskclass": "6",
          "japanese": "移り変わる",
          "chinese": "变迁",
          "pinyin": "biànqiān"
      },
      {
          "hskclass": "6",
          "japanese": "見分ける",
          "chinese": "辨认",
          "pinyin": "biànrèn"
      },
      {
          "hskclass": "6",
          "japanese": "書き付け",
          "chinese": "便条",
          "pinyin": "biàntiáo"
      },
      {
          "hskclass": "6",
          "japanese": "（…するのに）便利である",
          "chinese": "便于",
          "pinyin": "biànyú"
      },
      {
          "hskclass": "6",
          "japanese": "弁証する",
          "chinese": "辩证",
          "pinyin": "biànzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "変質する",
          "chinese": "变质",
          "pinyin": "biànzhí"
      },
      {
          "hskclass": "6",
          "japanese": "お下げ",
          "chinese": "辫子",
          "pinyin": "biànzi"
      },
      {
          "hskclass": "6",
          "japanese": "標本",
          "chinese": "标本",
          "pinyin": "biāoběn"
      },
      {
          "hskclass": "6",
          "japanese": "標識",
          "chinese": "标记",
          "pinyin": "biāojì"
      },
      {
          "hskclass": "6",
          "japanese": "急騰する",
          "chinese": "飙升",
          "pinyin": "biāoshēng"
      },
      {
          "hskclass": "6",
          "japanese": "表題",
          "chinese": "标题",
          "pinyin": "biāotí"
      },
      {
          "hskclass": "6",
          "japanese": "表決する",
          "chinese": "表决",
          "pinyin": "biǎojué"
      },
      {
          "hskclass": "6",
          "japanese": "態度を表明する",
          "chinese": "表态",
          "pinyin": "biǎotài"
      },
      {
          "hskclass": "6",
          "japanese": "表彰する",
          "chinese": "表彰",
          "pinyin": "biǎozhāng"
      },
      {
          "hskclass": "6",
          "japanese": "こらえる",
          "chinese": "憋",
          "pinyin": "biē"
      },
      {
          "hskclass": "6",
          "japanese": "ほかの人",
          "chinese": "别人",
          "pinyin": "biérén"
      },
      {
          "hskclass": "6",
          "japanese": "別荘",
          "chinese": "别墅",
          "pinyin": "biéshù"
      },
      {
          "hskclass": "6",
          "japanese": "風変わりである",
          "chinese": "别致",
          "pinyin": "biézhì"
      },
      {
          "hskclass": "6",
          "japanese": "ひねくれている",
          "chinese": "别扭",
          "pinyin": "bièniu"
      },
      {
          "hskclass": "6",
          "japanese": "瀕する",
          "chinese": "濒临",
          "pinyin": "bīnlín"
      },
      {
          "hskclass": "6",
          "japanese": "雹(ひょう)",
          "chinese": "冰雹",
          "pinyin": "bīngbáo"
      },
      {
          "hskclass": "6",
          "japanese": "並存する",
          "chinese": "并存",
          "pinyin": "bìngcún"
      },
      {
          "hskclass": "6",
          "japanese": "決して～でない",
          "chinese": "并非",
          "pinyin": "bìngfēi"
      },
      {
          "hskclass": "6",
          "japanese": "並列する",
          "chinese": "并列",
          "pinyin": "bìngliè"
      },
      {
          "hskclass": "6",
          "japanese": "（電話を）かける",
          "chinese": "拨打",
          "pinyin": "bōdǎ"
      },
      {
          "hskclass": "6",
          "japanese": "放送する",
          "chinese": "播放",
          "pinyin": "bòfàng"
      },
      {
          "hskclass": "6",
          "japanese": "波",
          "chinese": "波浪",
          "pinyin": "bōlàng"
      },
      {
          "hskclass": "6",
          "japanese": "しける",
          "chinese": "波涛汹涌",
          "pinyin": "bōtāoxiōngyǒng"
      },
      {
          "hskclass": "6",
          "japanese": "搾取する",
          "chinese": "剥削",
          "pinyin": "bōxuè"
      },
      {
          "hskclass": "6",
          "japanese": "種をまく",
          "chinese": "播种",
          "pinyin": "bōzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "思想・学識が広く深い",
          "chinese": "博大精深",
          "pinyin": "bódàjīngshēn"
      },
      {
          "hskclass": "6",
          "japanese": "格闘する",
          "chinese": "搏斗",
          "pinyin": "bódòu"
      },
      {
          "hskclass": "6",
          "japanese": "博覧会",
          "chinese": "博览会",
          "pinyin": "bólǎnhuì"
      },
      {
          "hskclass": "6",
          "japanese": "伯母",
          "chinese": "伯母",
          "pinyin": "bómǔ"
      },
      {
          "hskclass": "6",
          "japanese": "薄弱である",
          "chinese": "薄弱",
          "pinyin": "bóruò"
      },
      {
          "hskclass": "6",
          "japanese": "補償する",
          "chinese": "补偿",
          "pinyin": "bǔcháng"
      },
      {
          "hskclass": "6",
          "japanese": "取り返す",
          "chinese": "补救",
          "pinyin": "bǔjiù"
      },
      {
          "hskclass": "6",
          "japanese": "哺乳する",
          "chinese": "哺乳",
          "pinyin": "bǔrǔ"
      },
      {
          "hskclass": "6",
          "japanese": "補助をする",
          "chinese": "补贴",
          "pinyin": "bǔtiē"
      },
      {
          "hskclass": "6",
          "japanese": "捕らえる",
          "chinese": "捕捉",
          "pinyin": "bǔzhuō"
      },
      {
          "hskclass": "6",
          "japanese": "やむをえない",
          "chinese": "不得已",
          "pinyin": "bùdéyǐ"
      },
      {
          "hskclass": "6",
          "japanese": "歩調",
          "chinese": "步伐",
          "pinyin": "bùfá"
      },
      {
          "hskclass": "6",
          "japanese": "…しても構わない",
          "chinese": "不妨",
          "pinyin": "bùfáng"
      },
      {
          "hskclass": "6",
          "japanese": "（褒められた時などに）恐れ入ります",
          "chinese": "不敢当",
          "pinyin": "bù gǎndāng"
      },
      {
          "hskclass": "6",
          "japanese": "布告",
          "chinese": "布告",
          "pinyin": "bùgào"
      },
      {
          "hskclass": "6",
          "japanese": "顧みない",
          "chinese": "不顾",
          "pinyin": "bù gù"
      },
      {
          "hskclass": "6",
          "japanese": "思わず",
          "chinese": "不禁",
          "pinyin": "bùjīn"
      },
      {
          "hskclass": "6",
          "japanese": "配置する",
          "chinese": "布局",
          "pinyin": "bùjú"
      },
      {
          "hskclass": "6",
          "japanese": "堪えられない",
          "chinese": "不堪",
          "pinyin": "bùkān"
      },
      {
          "hskclass": "6",
          "japanese": "不思議である",
          "chinese": "不可思议",
          "pinyin": "bùkěsīyì"
      },
      {
          "hskclass": "6",
          "japanese": "～に恥じない",
          "chinese": "不愧",
          "pinyin": "bùkuì"
      },
      {
          "hskclass": "6",
          "japanese": "意外にも",
          "chinese": "不料",
          "pinyin": "bùliào"
      },
      {
          "hskclass": "6",
          "japanese": "たびたび",
          "chinese": "不时",
          "pinyin": "bùshí"
      },
      {
          "hskclass": "6",
          "japanese": "配置する",
          "chinese": "部署",
          "pinyin": "bùshǔ"
      },
      {
          "hskclass": "6",
          "japanese": "部位",
          "chinese": "部位",
          "pinyin": "bùwèi"
      },
      {
          "hskclass": "6",
          "japanese": "…を惜しまない",
          "chinese": "不惜",
          "pinyin": "bùxī"
      },
      {
          "hskclass": "6",
          "japanese": "優劣がない",
          "chinese": "不相上下",
          "pinyin": "bù xiāng shàngxià"
      },
      {
          "hskclass": "6",
          "japanese": "話にならない",
          "chinese": "不像话",
          "pinyin": "bù xiànghuà"
      },
      {
          "hskclass": "6",
          "japanese": "顧だに値しない",
          "chinese": "不屑一顾",
          "pinyin": "bùxiè yī gù"
      },
      {
          "hskclass": "6",
          "japanese": "言わなくても明らかである",
          "chinese": "不言而喻",
          "pinyin": "bù yán ér yù"
      },
      {
          "hskclass": "6",
          "japanese": "つい思わず",
          "chinese": "不由得",
          "pinyin": "bùyóudé"
      },
      {
          "hskclass": "6",
          "japanese": "手段を選ばない",
          "chinese": "不择手段",
          "pinyin": "bùzéshǒuduàn"
      },
      {
          "hskclass": "6",
          "japanese": "～にとどまらない",
          "chinese": "不止",
          "pinyin": "bùzhǐ"
      },
      {
          "hskclass": "6",
          "japanese": "配置する",
          "chinese": "布置",
          "pinyin": "bùzhì"
      },
      {
          "hskclass": "6",
          "japanese": "衣服を作る",
          "chinese": "裁缝",
          "pinyin": "cáiféng"
      },
      {
          "hskclass": "6",
          "japanese": "富、財産",
          "chinese": "财富",
          "pinyin": "cáifù"
      },
      {
          "hskclass": "6",
          "japanese": "能力",
          "chinese": "才干",
          "pinyin": "cáigàn"
      },
      {
          "hskclass": "6",
          "japanese": "裁判をする",
          "chinese": "裁判",
          "pinyin": "cáipàn"
      },
      {
          "hskclass": "6",
          "japanese": "財務",
          "chinese": "财务",
          "pinyin": "cáiwù"
      },
      {
          "hskclass": "6",
          "japanese": "人員を削減する",
          "chinese": "裁员",
          "pinyin": "cáiyuán"
      },
      {
          "hskclass": "6",
          "japanese": "財政",
          "chinese": "财政",
          "pinyin": "cáizhèng"
      },
      {
          "hskclass": "6",
          "japanese": "買い付ける",
          "chinese": "采购",
          "pinyin": "cǎigòu"
      },
      {
          "hskclass": "6",
          "japanese": "採集する",
          "chinese": "采集",
          "pinyin": "cǎijí"
      },
      {
          "hskclass": "6",
          "japanese": "受け入れる",
          "chinese": "采纳",
          "pinyin": "cǎinà"
      },
      {
          "hskclass": "6",
          "japanese": "宝くじ",
          "chinese": "彩票",
          "pinyin": "cǎipiào"
      },
      {
          "hskclass": "6",
          "japanese": "参謀",
          "chinese": "参谋",
          "pinyin": "cānmóu"
      },
      {
          "hskclass": "6",
          "japanese": "参照する",
          "chinese": "参照",
          "pinyin": "cānzhào"
      },
      {
          "hskclass": "6",
          "japanese": "残酷である",
          "chinese": "残酷",
          "pinyin": "cánkù"
      },
      {
          "hskclass": "6",
          "japanese": "残留する",
          "chinese": "残留",
          "pinyin": "cánliú"
      },
      {
          "hskclass": "6",
          "japanese": "残忍である",
          "chinese": "残忍",
          "pinyin": "cánrěn"
      },
      {
          "hskclass": "6",
          "japanese": "光り輝いている",
          "chinese": "灿烂",
          "pinyin": "cànlàn"
      },
      {
          "hskclass": "6",
          "japanese": "（船・飛行機の）客室",
          "chinese": "舱",
          "pinyin": "cāng"
      },
      {
          "hskclass": "6",
          "japanese": "血の気がなくて青白い",
          "chinese": "苍白",
          "pinyin": "cāngbái"
      },
      {
          "hskclass": "6",
          "japanese": "慌ただしい",
          "chinese": "仓促",
          "pinyin": "cāngcù"
      },
      {
          "hskclass": "6",
          "japanese": "倉庫",
          "chinese": "仓库",
          "pinyin": "cāngkù"
      },
      {
          "hskclass": "6",
          "japanese": "あくせく働く",
          "chinese": "操劳",
          "pinyin": "cāoláo"
      },
      {
          "hskclass": "6",
          "japanese": "訓練する",
          "chinese": "操练",
          "pinyin": "cāoliàn"
      },
      {
          "hskclass": "6",
          "japanese": "操縦する",
          "chinese": "操纵",
          "pinyin": "cāozòng"
      },
      {
          "hskclass": "6",
          "japanese": "操作する",
          "chinese": "操作",
          "pinyin": "cāozuò"
      },
      {
          "hskclass": "6",
          "japanese": "騒々しい",
          "chinese": "嘈杂",
          "pinyin": "cáozá"
      },
      {
          "hskclass": "6",
          "japanese": "草案",
          "chinese": "草案",
          "pinyin": "cǎo'àn"
      },
      {
          "hskclass": "6",
          "japanese": "ぞんざいである",
          "chinese": "草率",
          "pinyin": "cǎoshuài"
      },
      {
          "hskclass": "6",
          "japanese": "画策する",
          "chinese": "策划",
          "pinyin": "cèhuà"
      },
      {
          "hskclass": "6",
          "japanese": "測量する",
          "chinese": "测量",
          "pinyin": "cèliáng"
      },
      {
          "hskclass": "6",
          "japanese": "策略",
          "chinese": "策略",
          "pinyin": "cèlüè"
      },
      {
          "hskclass": "6",
          "japanese": "サイド",
          "chinese": "侧面",
          "pinyin": "cèmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "次々と現れて尽きない",
          "chinese": "层出不穷",
          "pinyin": "céngchūbùqióng"
      },
      {
          "hskclass": "6",
          "japanese": "順序",
          "chinese": "层次",
          "pinyin": "céngcì"
      },
      {
          "hskclass": "6",
          "japanese": "差異",
          "chinese": "差距",
          "pinyin": "chājù"
      },
      {
          "hskclass": "6",
          "japanese": "捜し捕まえる",
          "chinese": "查获",
          "pinyin": "cháhuò"
      },
      {
          "hskclass": "6",
          "japanese": "分岐する",
          "chinese": "岔",
          "pinyin": "chà"
      },
      {
          "hskclass": "6",
          "japanese": "瞬間",
          "chinese": "刹那",
          "pinyin": "chànà"
      },
      {
          "hskclass": "6",
          "japanese": "不思議に思う",
          "chinese": "诧异",
          "pinyin": "chàyì"
      },
      {
          "hskclass": "6",
          "japanese": "ディーゼル油",
          "chinese": "柴油",
          "pinyin": "cháiyóu"
      },
      {
          "hskclass": "6",
          "japanese": "手を貸す",
          "chinese": "搀",
          "pinyin": "chān"
      },
      {
          "hskclass": "6",
          "japanese": "（他人のものを）ほしがる",
          "chinese": "馋",
          "pinyin": "chán"
      },
      {
          "hskclass": "6",
          "japanese": "巻きつく",
          "chinese": "缠绕",
          "pinyin": "chánrào"
      },
      {
          "hskclass": "6",
          "japanese": "論述する",
          "chinese": "阐述",
          "pinyin": "chǎnshù"
      },
      {
          "hskclass": "6",
          "japanese": "産業,財産",
          "chinese": "产业",
          "pinyin": "chǎnyè"
      },
      {
          "hskclass": "6",
          "japanese": "ぶるぶる震える",
          "chinese": "颤抖",
          "pinyin": "chàndǒu"
      },
      {
          "hskclass": "6",
          "japanese": "凶暴な",
          "chinese": "猖狂",
          "pinyin": "chāngkuáng"
      },
      {
          "hskclass": "6",
          "japanese": "盛んである",
          "chinese": "昌盛",
          "pinyin": "chāngshèng"
      },
      {
          "hskclass": "6",
          "japanese": "返済する",
          "chinese": "偿还",
          "pinyin": "chánghuán"
      },
      {
          "hskclass": "6",
          "japanese": "年じゅう",
          "chinese": "常年",
          "pinyin": "chángnián"
      },
      {
          "hskclass": "6",
          "japanese": "試みる",
          "chinese": "尝试",
          "pinyin": "chángshì"
      },
      {
          "hskclass": "6",
          "japanese": "常務",
          "chinese": "常务",
          "pinyin": "chángwù"
      },
      {
          "hskclass": "6",
          "japanese": "場",
          "chinese": "场",
          "pinyin": "chǎng"
      },
      {
          "hskclass": "6",
          "japanese": "場合",
          "chinese": "场合",
          "pinyin": "chǎnghé"
      },
      {
          "hskclass": "6",
          "japanese": "開け放す",
          "chinese": "敞开",
          "pinyin": "chǎngkāi"
      },
      {
          "hskclass": "6",
          "japanese": "場面",
          "chinese": "场面",
          "pinyin": "chǎngmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "場所",
          "chinese": "场所",
          "pinyin": "chǎngsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "提唱する",
          "chinese": "倡导",
          "pinyin": "chàngdǎo"
      },
      {
          "hskclass": "6",
          "japanese": "滞りなく通じる",
          "chinese": "畅通",
          "pinyin": "chàngtōng"
      },
      {
          "hskclass": "6",
          "japanese": "よく売れる",
          "chinese": "畅销",
          "pinyin": "chàngxiāo"
      },
      {
          "hskclass": "6",
          "japanese": "提案する",
          "chinese": "倡议",
          "pinyin": "chàngyì"
      },
      {
          "hskclass": "6",
          "japanese": "超…、スーパー…",
          "chinese": "超级",
          "pinyin": "chāojí"
      },
      {
          "hskclass": "6",
          "japanese": "紙幣",
          "chinese": "钞票",
          "pinyin": "chāopiào"
      },
      {
          "hskclass": "6",
          "japanese": "超える",
          "chinese": "超越",
          "pinyin": "chāo yuè"
      },
      {
          "hskclass": "6",
          "japanese": "潮流",
          "chinese": "潮流",
          "pinyin": "cháoliú"
      },
      {
          "hskclass": "6",
          "japanese": "湿っぽい",
          "chinese": "潮湿",
          "pinyin": "cháoshī"
      },
      {
          "hskclass": "6",
          "japanese": "嘲笑する",
          "chinese": "嘲笑",
          "pinyin": "cháoxiào"
      },
      {
          "hskclass": "6",
          "japanese": "撤退する",
          "chinese": "撤退",
          "pinyin": "chètuì"
      },
      {
          "hskclass": "6",
          "japanese": "取り消す",
          "chinese": "撤销",
          "pinyin": "chèxiāo"
      },
      {
          "hskclass": "6",
          "japanese": "沈殿する",
          "chinese": "沉淀",
          "pinyin": "chéndiàn"
      },
      {
          "hskclass": "6",
          "japanese": "古い",
          "chinese": "陈旧",
          "pinyin": "chénjiù"
      },
      {
          "hskclass": "6",
          "japanese": "陳列する",
          "chinese": "陈列",
          "pinyin": "chénliè"
      },
      {
          "hskclass": "6",
          "japanese": "うっとうしい",
          "chinese": "沉闷",
          "pinyin": "chénmèn"
      },
      {
          "hskclass": "6",
          "japanese": "述べる",
          "chinese": "陈述",
          "pinyin": "chénshù"
      },
      {
          "hskclass": "6",
          "japanese": "考え込む",
          "chinese": "沉思",
          "pinyin": "chénsī"
      },
      {
          "hskclass": "6",
          "japanese": "ずっしり重い",
          "chinese": "沉重",
          "pinyin": "chénzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "沈着である",
          "chinese": "沉着",
          "pinyin": "chénzhuó"
      },
      {
          "hskclass": "6",
          "japanese": "思いどおりになって満足する",
          "chinese": "称心如意",
          "pinyin": "chènxīn rúyì"
      },
      {
          "hskclass": "6",
          "japanese": "称号",
          "chinese": "称号",
          "pinyin": "chēnghào"
      },
      {
          "hskclass": "6",
          "japanese": "橙色",
          "chinese": "橙",
          "pinyin": "chéng"
      },
      {
          "hskclass": "6",
          "japanese": "盛る",
          "chinese": "盛",
          "pinyin": "shèng"
      },
      {
          "hskclass": "6",
          "japanese": "引き受ける",
          "chinese": "承办",
          "pinyin": "chéngbàn"
      },
      {
          "hskclass": "6",
          "japanese": "請け負う",
          "chinese": "承包",
          "pinyin": "chéngbāo"
      },
      {
          "hskclass": "6",
          "japanese": "城",
          "chinese": "城堡",
          "pinyin": "chéngbǎo"
      },
      {
          "hskclass": "6",
          "japanese": "原価",
          "chinese": "成本",
          "pinyin": "chéngběn"
      },
      {
          "hskclass": "6",
          "japanese": "処罰する",
          "chinese": "惩罚",
          "pinyin": "chéngfá"
      },
      {
          "hskclass": "6",
          "japanese": "成約する",
          "chinese": "成交",
          "pinyin": "chéngjiāo"
      },
      {
          "hskclass": "6",
          "japanese": "承諾する",
          "chinese": "承诺",
          "pinyin": "chéngnuò"
      },
      {
          "hskclass": "6",
          "japanese": "澄んでいる",
          "chinese": "澄清",
          "pinyin": "chéngqīng"
      },
      {
          "hskclass": "6",
          "japanese": "一日中",
          "chinese": "成天",
          "pinyin": "chéngtiān"
      },
      {
          "hskclass": "6",
          "japanese": "乗務員",
          "chinese": "乘务员",
          "pinyin": "chéngwùyuán"
      },
      {
          "hskclass": "6",
          "japanese": "現われる",
          "chinese": "呈现",
          "pinyin": "chéngxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "効果",
          "chinese": "成效",
          "pinyin": "chéngxiào"
      },
      {
          "hskclass": "6",
          "japanese": "故意に",
          "chinese": "成心",
          "pinyin": "chéng xīn"
      },
      {
          "hskclass": "6",
          "japanese": "メンバー",
          "chinese": "成员",
          "pinyin": "chéngyuán"
      },
      {
          "hskclass": "6",
          "japanese": "真摯である",
          "chinese": "诚挚",
          "pinyin": "chéngzhì"
      },
      {
          "hskclass": "6",
          "japanese": "秤",
          "chinese": "秤",
          "pinyin": "chèng"
      },
      {
          "hskclass": "6",
          "japanese": "苦労する",
          "chinese": "吃苦",
          "pinyin": "chīkǔ"
      },
      {
          "hskclass": "6",
          "japanese": "骨の折れる",
          "chinese": "吃力",
          "pinyin": "chīlì"
      },
      {
          "hskclass": "6",
          "japanese": "のろのろしている",
          "chinese": "迟缓",
          "pinyin": "chíhuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "長持ちする",
          "chinese": "持久",
          "pinyin": "chíjiǔ"
      },
      {
          "hskclass": "6",
          "japanese": "池",
          "chinese": "池塘",
          "pinyin": "chítáng"
      },
      {
          "hskclass": "6",
          "japanese": "ためらう",
          "chinese": "迟疑",
          "pinyin": "chíyí"
      },
      {
          "hskclass": "6",
          "japanese": "赤道",
          "chinese": "赤道",
          "pinyin": "chìdào"
      },
      {
          "hskclass": "6",
          "japanese": "赤字",
          "chinese": "赤字",
          "pinyin": "chìzì"
      },
      {
          "hskclass": "6",
          "japanese": "担当する",
          "chinese": "充当",
          "pinyin": "chōngdāng"
      },
      {
          "hskclass": "6",
          "japanese": "興奮する",
          "chinese": "冲动",
          "pinyin": "chōngdòng"
      },
      {
          "hskclass": "6",
          "japanese": "激しくぶつかる",
          "chinese": "冲击",
          "pinyin": "chōngjí"
      },
      {
          "hskclass": "6",
          "japanese": "満ちあふれる",
          "chinese": "充沛",
          "pinyin": "chōngpèi"
      },
      {
          "hskclass": "6",
          "japanese": "充実している",
          "chinese": "充实",
          "pinyin": "chōngshí"
      },
      {
          "hskclass": "6",
          "japanese": "衝突する",
          "chinese": "冲突",
          "pinyin": "chōngtú"
      },
      {
          "hskclass": "6",
          "japanese": "十分足りている",
          "chinese": "充足",
          "pinyin": "chōngzú"
      },
      {
          "hskclass": "6",
          "japanese": "崇拝する",
          "chinese": "崇拜",
          "pinyin": "chóngbài"
      },
      {
          "hskclass": "6",
          "japanese": "幾重にも重ねる",
          "chinese": "重叠",
          "pinyin": "chóngdié"
      },
      {
          "hskclass": "6",
          "japanese": "崇高である",
          "chinese": "崇高",
          "pinyin": "chónggāo"
      },
      {
          "hskclass": "6",
          "japanese": "崇敬する",
          "chinese": "崇敬",
          "pinyin": "chóngjìng"
      },
      {
          "hskclass": "6",
          "japanese": "菊の節句",
          "chinese": "重阳节",
          "pinyin": "chóngyáng jié"
      },
      {
          "hskclass": "6",
          "japanese": "時間を割く",
          "chinese": "抽空",
          "pinyin": "chōukòng"
      },
      {
          "hskclass": "6",
          "japanese": "計画準備する",
          "chinese": "筹备",
          "pinyin": "chóubèi"
      },
      {
          "hskclass": "6",
          "japanese": "躊躇する",
          "chinese": "踌躇",
          "pinyin": "chóuchú"
      },
      {
          "hskclass": "6",
          "japanese": "稠密である",
          "chinese": "稠密",
          "pinyin": "chóumì"
      },
      {
          "hskclass": "6",
          "japanese": "醜悪な",
          "chinese": "丑恶",
          "pinyin": "chǒu'è"
      },
      {
          "hskclass": "6",
          "japanese": "初歩の",
          "chinese": "初步",
          "pinyin": "chūbù"
      },
      {
          "hskclass": "6",
          "japanese": "出口",
          "chinese": "出路",
          "pinyin": "chūlù"
      },
      {
          "hskclass": "6",
          "japanese": "売りに出す",
          "chinese": "出卖",
          "pinyin": "chūmài"
      },
      {
          "hskclass": "6",
          "japanese": "…の出身である",
          "chinese": "出身",
          "pinyin": "chūshēn"
      },
      {
          "hskclass": "6",
          "japanese": "ぼんやりする",
          "chinese": "出神",
          "pinyin": "chūshén"
      },
      {
          "hskclass": "6",
          "japanese": "見込み",
          "chinese": "出息",
          "pinyin": "chūxī"
      },
      {
          "hskclass": "6",
          "japanese": "失態を演じる.恥をさらす",
          "chinese": "出洋相",
          "pinyin": "chūyángxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "備畜する",
          "chinese": "储备",
          "pinyin": "chúbèi"
      },
      {
          "hskclass": "6",
          "japanese": "蓄える",
          "chinese": "储存",
          "pinyin": "chúcún"
      },
      {
          "hskclass": "6",
          "japanese": "処分する",
          "chinese": "处分",
          "pinyin": "chǔfèn"
      },
      {
          "hskclass": "6",
          "japanese": "境遇",
          "chinese": "处境",
          "pinyin": "chǔjìng"
      },
      {
          "hskclass": "6",
          "japanese": "貯蓄する",
          "chinese": "储蓄",
          "pinyin": "chúxù"
      },
      {
          "hskclass": "6",
          "japanese": "処置する",
          "chinese": "处置",
          "pinyin": "chǔzhì"
      },
      {
          "hskclass": "6",
          "japanese": "触れる、犯す",
          "chinese": "触犯",
          "pinyin": "chùfàn"
      },
      {
          "hskclass": "6",
          "japanese": "（人や車の往来が）川の流れのように絶え間なく続く",
          "chinese": "川流不息",
          "pinyin": "chuānliúbùxī"
      },
      {
          "hskclass": "6",
          "japanese": "通り抜ける",
          "chinese": "穿越",
          "pinyin": "chuānyuè"
      },
      {
          "hskclass": "6",
          "japanese": "船舶",
          "chinese": "船舶",
          "pinyin": "chuánbó"
      },
      {
          "hskclass": "6",
          "japanese": "伝達する",
          "chinese": "传达",
          "pinyin": "chuándá"
      },
      {
          "hskclass": "6",
          "japanese": "宣伝びら",
          "chinese": "传单",
          "pinyin": "chuándān"
      },
      {
          "hskclass": "6",
          "japanese": "伝授する",
          "chinese": "传授",
          "pinyin": "chuánshòu"
      },
      {
          "hskclass": "6",
          "japanese": "深呼吸する",
          "chinese": "喘气",
          "pinyin": "chuǎnqì"
      },
      {
          "hskclass": "6",
          "japanese": "弦（くしなどに）突き刺す、つながった状態のものを数える",
          "chinese": "串",
          "pinyin": "chuàn"
      },
      {
          "hskclass": "6",
          "japanese": "シーツ",
          "chinese": "床单",
          "pinyin": "chuángdān"
      },
      {
          "hskclass": "6",
          "japanese": "創立する",
          "chinese": "创立",
          "pinyin": "chuànglì"
      },
      {
          "hskclass": "6",
          "japanese": "新しいものを生み出す",
          "chinese": "创新",
          "pinyin": "chuàngxīn"
      },
      {
          "hskclass": "6",
          "japanese": "創業する",
          "chinese": "创业",
          "pinyin": "chuàngyè"
      },
      {
          "hskclass": "6",
          "japanese": "創作する",
          "chinese": "创作",
          "pinyin": "chuàng zuò"
      },
      {
          "hskclass": "6",
          "japanese": "ほらを吹く",
          "chinese": "吹牛",
          "pinyin": "chuīniú"
      },
      {
          "hskclass": "6",
          "japanese": "おだてる",
          "chinese": "吹捧",
          "pinyin": "chuīpěng"
      },
      {
          "hskclass": "6",
          "japanese": "柄の先に金属球を取りつけたもの（金槌,ハンマー）",
          "chinese": "锤",
          "pinyin": "chuí"
      },
      {
          "hskclass": "6",
          "japanese": "垂直",
          "chinese": "垂直",
          "pinyin": "chuízhí"
      },
      {
          "hskclass": "6",
          "japanese": "純粋である",
          "chinese": "纯粹",
          "pinyin": "chúncuì"
      },
      {
          "hskclass": "6",
          "japanese": "純潔である",
          "chinese": "纯洁",
          "pinyin": "chúnjié"
      },
      {
          "hskclass": "6",
          "japanese": "語彙",
          "chinese": "词汇",
          "pinyin": "cíhuì"
      },
      {
          "hskclass": "6",
          "japanese": "慈悲深くて優しい",
          "chinese": "慈祥",
          "pinyin": "cíxiáng"
      },
      {
          "hskclass": "6",
          "japanese": "雌と雄",
          "chinese": "雌雄",
          "pinyin": "cíxióng"
      },
      {
          "hskclass": "6",
          "japanese": "突き刺す",
          "chinese": "刺",
          "pinyin": "cì"
      },
      {
          "hskclass": "6",
          "japanese": "仕える",
          "chinese": "伺候",
          "pinyin": "cìhòu"
      },
      {
          "hskclass": "6",
          "japanese": "不良品",
          "chinese": "次品",
          "pinyin": "cì pǐn"
      },
      {
          "hskclass": "6",
          "japanese": "順序",
          "chinese": "次序",
          "pinyin": "cìxù"
      },
      {
          "hskclass": "6",
          "japanese": "群がる",
          "chinese": "丛",
          "pinyin": "cóng"
      },
      {
          "hskclass": "6",
          "japanese": "悠悠たる",
          "chinese": "从容不迫",
          "pinyin": "cóngróngbùpò"
      },
      {
          "hskclass": "6",
          "japanese": "寄り集まる",
          "chinese": "凑合",
          "pinyin": "còuhé"
      },
      {
          "hskclass": "6",
          "japanese": "粗暴である",
          "chinese": "粗鲁",
          "pinyin": "cūlǔ"
      },
      {
          "hskclass": "6",
          "japanese": "慌てて逃げ去る",
          "chinese": "窜",
          "pinyin": "cuàn"
      },
      {
          "hskclass": "6",
          "japanese": "損害を与える",
          "chinese": "摧残",
          "pinyin": "cuīcán"
      },
      {
          "hskclass": "6",
          "japanese": "脆弱である",
          "chinese": "脆弱",
          "pinyin": "cuìruò"
      },
      {
          "hskclass": "6",
          "japanese": "（両手を合わせて）こする、もむ",
          "chinese": "搓",
          "pinyin": "cuō"
      },
      {
          "hskclass": "6",
          "japanese": "協議する",
          "chinese": "磋商",
          "pinyin": "cuōshāng"
      },
      {
          "hskclass": "6",
          "japanese": "挫折",
          "chinese": "挫折",
          "pinyin": "cuòzhé"
      },
      {
          "hskclass": "6",
          "japanese": "組み立てる",
          "chinese": "搭",
          "pinyin": "dā"
      },
      {
          "hskclass": "6",
          "japanese": "協力する",
          "chinese": "搭档",
          "pinyin": "dādàng"
      },
      {
          "hskclass": "6",
          "japanese": "組み合わせる",
          "chinese": "搭配",
          "pinyin": "dāpèi"
      },
      {
          "hskclass": "6",
          "japanese": "答弁する",
          "chinese": "答辩",
          "pinyin": "dábiàn"
      },
      {
          "hskclass": "6",
          "japanese": "達成する",
          "chinese": "达成",
          "pinyin": "dáchéng"
      },
      {
          "hskclass": "6",
          "japanese": "返答する",
          "chinese": "答复",
          "pinyin": "dáfù"
      },
      {
          "hskclass": "6",
          "japanese": "包む",
          "chinese": "打包",
          "pinyin": "dǎbāo"
      },
      {
          "hskclass": "6",
          "japanese": "訴訟をする",
          "chinese": "打官司",
          "pinyin": "dǎ guānsī"
      },
      {
          "hskclass": "6",
          "japanese": "たたく",
          "chinese": "打击",
          "pinyin": "dǎjí"
      },
      {
          "hskclass": "6",
          "japanese": "殴り合いのけんかをする",
          "chinese": "打架",
          "pinyin": "dǎjià"
      },
      {
          "hskclass": "6",
          "japanese": "観察する",
          "chinese": "打量",
          "pinyin": "dǎliang"
      },
      {
          "hskclass": "6",
          "japanese": "狩りをする",
          "chinese": "打猎",
          "pinyin": "dǎliè"
      },
      {
          "hskclass": "6",
          "japanese": "戦争する",
          "chinese": "打仗",
          "pinyin": "dǎzhàng"
      },
      {
          "hskclass": "6",
          "japanese": "せいぜい",
          "chinese": "大不了",
          "pinyin": "dàbùliǎo"
      },
      {
          "hskclass": "6",
          "japanese": "大臣",
          "chinese": "大臣",
          "pinyin": "dàchén"
      },
      {
          "hskclass": "6",
          "japanese": "皆",
          "chinese": "大伙儿",
          "pinyin": "dàhuǒ er"
      },
      {
          "hskclass": "6",
          "japanese": "ビルディング",
          "chinese": "大厦",
          "pinyin": "dàshà"
      },
      {
          "hskclass": "6",
          "japanese": "ほしいままに",
          "chinese": "大肆",
          "pinyin": "dàsì"
      },
      {
          "hskclass": "6",
          "japanese": "大体",
          "chinese": "大体",
          "pinyin": "dàtǐ"
      },
      {
          "hskclass": "6",
          "japanese": "大体の意味",
          "chinese": "大意",
          "pinyin": "dàyì"
      },
      {
          "hskclass": "6",
          "japanese": "大体の",
          "chinese": "大致",
          "pinyin": "dàzhì"
      },
      {
          "hskclass": "6",
          "japanese": "悪人",
          "chinese": "歹徒",
          "pinyin": "dǎitú"
      },
      {
          "hskclass": "6",
          "japanese": "逮捕する",
          "chinese": "逮捕",
          "pinyin": "dàibǔ"
      },
      {
          "hskclass": "6",
          "japanese": "代価",
          "chinese": "代价",
          "pinyin": "dàijià"
      },
      {
          "hskclass": "6",
          "japanese": "代理する",
          "chinese": "代理",
          "pinyin": "dàilǐ"
      },
      {
          "hskclass": "6",
          "japanese": "引率する",
          "chinese": "带领",
          "pinyin": "dàilǐng"
      },
      {
          "hskclass": "6",
          "japanese": "冷淡に扱う",
          "chinese": "怠慢",
          "pinyin": "dàimàn"
      },
      {
          "hskclass": "6",
          "japanese": "保証する",
          "chinese": "担保",
          "pinyin": "dānbǎo"
      },
      {
          "hskclass": "6",
          "japanese": "臆病である",
          "chinese": "胆怯",
          "pinyin": "dǎnqiè"
      },
      {
          "hskclass": "6",
          "japanese": "タンパク質",
          "chinese": "蛋白质",
          "pinyin": "dànbáizhí"
      },
      {
          "hskclass": "6",
          "japanese": "誕生日",
          "chinese": "诞辰",
          "pinyin": "dànchén"
      },
      {
          "hskclass": "6",
          "japanese": "閑散季",
          "chinese": "淡季",
          "pinyin": "dànjì"
      },
      {
          "hskclass": "6",
          "japanese": "誕生する",
          "chinese": "诞生",
          "pinyin": "dànshēng"
      },
      {
          "hskclass": "6",
          "japanese": "淡水",
          "chinese": "淡水",
          "pinyin": "dànshuǐ"
      },
      {
          "hskclass": "6",
          "japanese": "その場で",
          "chinese": "当场",
          "pinyin": "dāngchǎng"
      },
      {
          "hskclass": "6",
          "japanese": "当初",
          "chinese": "当初",
          "pinyin": "dāngchū"
      },
      {
          "hskclass": "6",
          "japanese": "面と向かう",
          "chinese": "当面",
          "pinyin": "dāngmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "目下",
          "chinese": "当前",
          "pinyin": "dāngqián"
      },
      {
          "hskclass": "6",
          "japanese": "当事者",
          "chinese": "当事人",
          "pinyin": "dāngshìrén"
      },
      {
          "hskclass": "6",
          "japanese": "当面の急務",
          "chinese": "当务之急",
          "pinyin": "dāngwùzhījí"
      },
      {
          "hskclass": "6",
          "japanese": "気をつける",
          "chinese": "当心",
          "pinyin": "dāngxīn"
      },
      {
          "hskclass": "6",
          "japanese": "当選する",
          "chinese": "当选",
          "pinyin": "dāngxuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "政党",
          "chinese": "党",
          "pinyin": "dǎng"
      },
      {
          "hskclass": "6",
          "japanese": "（公的な）保存書類",
          "chinese": "档案",
          "pinyin": "dǎng'àn"
      },
      {
          "hskclass": "6",
          "japanese": "等級",
          "chinese": "档次",
          "pinyin": "dàngcì"
      },
      {
          "hskclass": "6",
          "japanese": "倒産する",
          "chinese": "倒闭",
          "pinyin": "dǎobì"
      },
      {
          "hskclass": "6",
          "japanese": "ミサイル",
          "chinese": "导弹",
          "pinyin": "dǎodàn"
      },
      {
          "hskclass": "6",
          "japanese": "航行を誘導する",
          "chinese": "导航",
          "pinyin": "dǎoháng"
      },
      {
          "hskclass": "6",
          "japanese": "騒ぎを起こす",
          "chinese": "捣乱",
          "pinyin": "dǎoluàn"
      },
      {
          "hskclass": "6",
          "japanese": "誘導する",
          "chinese": "导向",
          "pinyin": "dǎoxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "島",
          "chinese": "岛屿",
          "pinyin": "dǎoyǔ"
      },
      {
          "hskclass": "6",
          "japanese": "籾（もみ）",
          "chinese": "稻谷",
          "pinyin": "dàogǔ"
      },
      {
          "hskclass": "6",
          "japanese": "盗む",
          "chinese": "盗窃",
          "pinyin": "dàoqiè"
      },
      {
          "hskclass": "6",
          "japanese": "得よりも損のほうが大きい",
          "chinese": "得不偿失",
          "pinyin": "débùchángshī"
      },
      {
          "hskclass": "6",
          "japanese": "役に立つ",
          "chinese": "得力",
          "pinyin": "délì"
      },
      {
          "hskclass": "6",
          "japanese": "条件に恵まれている",
          "chinese": "得天独厚",
          "pinyin": "détiāndúhòu"
      },
      {
          "hskclass": "6",
          "japanese": "機嫌を損ねる",
          "chinese": "得罪",
          "pinyin": "dézuì"
      },
      {
          "hskclass": "6",
          "japanese": "(ペダルなど)踏む,足を掛ける",
          "chinese": "蹬",
          "pinyin": "dēng"
      },
      {
          "hskclass": "6",
          "japanese": "ちょうちん",
          "chinese": "灯笼",
          "pinyin": "dēnglóng"
      },
      {
          "hskclass": "6",
          "japanese": "上陸する",
          "chinese": "登陆",
          "pinyin": "dēnglù"
      },
      {
          "hskclass": "6",
          "japanese": "登録する",
          "chinese": "登录",
          "pinyin": "dēng lù"
      },
      {
          "hskclass": "6",
          "japanese": "等級",
          "chinese": "等级",
          "pinyin": "děngjí"
      },
      {
          "hskclass": "6",
          "japanese": "（目を）みはる",
          "chinese": "瞪",
          "pinyin": "dèng"
      },
      {
          "hskclass": "6",
          "japanese": "堤防、堰",
          "chinese": "堤坝",
          "pinyin": "dībà"
      },
      {
          "hskclass": "6",
          "japanese": "敵視する",
          "chinese": "敌视",
          "pinyin": "díshì"
      },
      {
          "hskclass": "6",
          "japanese": "到着する",
          "chinese": "抵达",
          "pinyin": "dǐdá"
      },
      {
          "hskclass": "6",
          "japanese": "抵抗する",
          "chinese": "抵抗",
          "pinyin": "dǐkàng"
      },
      {
          "hskclass": "6",
          "japanese": "阻止する",
          "chinese": "抵制",
          "pinyin": "dǐzhì"
      },
      {
          "hskclass": "6",
          "japanese": "（多く好ましくない）状況、境地",
          "chinese": "地步",
          "pinyin": "dìbù"
      },
      {
          "hskclass": "6",
          "japanese": "地下道",
          "chinese": "地道",
          "pinyin": "dìdào"
      },
      {
          "hskclass": "6",
          "japanese": "地勢",
          "chinese": "地势",
          "pinyin": "dìshì"
      },
      {
          "hskclass": "6",
          "japanese": "逓増する",
          "chinese": "递增",
          "pinyin": "dìzēng"
      },
      {
          "hskclass": "6",
          "japanese": "地質",
          "chinese": "地质",
          "pinyin": "dìzhí"
      },
      {
          "hskclass": "6",
          "japanese": "上下に揺れる",
          "chinese": "颠簸",
          "pinyin": "diānbǒ"
      },
      {
          "hskclass": "6",
          "japanese": "ひっくり返す",
          "chinese": "颠倒",
          "pinyin": "diāndǎo"
      },
      {
          "hskclass": "6",
          "japanese": "式典",
          "chinese": "典礼",
          "pinyin": "diǎnlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "典型",
          "chinese": "典型",
          "pinyin": "diǎnxíng"
      },
      {
          "hskclass": "6",
          "japanese": "飾りつける",
          "chinese": "点缀",
          "pinyin": "diǎnzhuì"
      },
      {
          "hskclass": "6",
          "japanese": "敷く",
          "chinese": "垫",
          "pinyin": "diàn"
      },
      {
          "hskclass": "6",
          "japanese": "（基礎・地位などを）定める、固める",
          "chinese": "奠定",
          "pinyin": "diàndìng"
      },
      {
          "hskclass": "6",
          "japanese": "気にかける",
          "chinese": "惦记",
          "pinyin": "diànjì"
      },
      {
          "hskclass": "6",
          "japanese": "電源",
          "chinese": "电源",
          "pinyin": "diànyuán"
      },
      {
          "hskclass": "6",
          "japanese": "口にくわえる",
          "chinese": "叼",
          "pinyin": "diāo"
      },
      {
          "hskclass": "6",
          "japanese": "彫刻する",
          "chinese": "雕刻",
          "pinyin": "diāokè"
      },
      {
          "hskclass": "6",
          "japanese": "彫塑する",
          "chinese": "雕塑",
          "pinyin": "diāosù"
      },
      {
          "hskclass": "6",
          "japanese": "つるす",
          "chinese": "吊",
          "pinyin": "diào"
      },
      {
          "hskclass": "6",
          "japanese": "（ポスト・位置などを）変える,移動する",
          "chinese": "调动",
          "pinyin": "diàodòng"
      },
      {
          "hskclass": "6",
          "japanese": "つまずく",
          "chinese": "跌",
          "pinyin": "diē"
      },
      {
          "hskclass": "6",
          "japanese": "見つめる",
          "chinese": "盯",
          "pinyin": "dīng"
      },
      {
          "hskclass": "6",
          "japanese": "繰り返し言い聞かせる",
          "chinese": "叮嘱",
          "pinyin": "dīngzhǔ"
      },
      {
          "hskclass": "6",
          "japanese": "期日を決める",
          "chinese": "定期",
          "pinyin": "dìngqí"
      },
      {
          "hskclass": "6",
          "japanese": "定義",
          "chinese": "定义",
          "pinyin": "dìngyì"
      },
      {
          "hskclass": "6",
          "japanese": "恥をかく",
          "chinese": "丢人",
          "pinyin": "diūrén"
      },
      {
          "hskclass": "6",
          "japanese": "物忘れが激しい",
          "chinese": "丢三落四",
          "pinyin": "diūsānlàsì"
      },
      {
          "hskclass": "6",
          "japanese": "主人役",
          "chinese": "东道主",
          "pinyin": "dōngdàozhǔ"
      },
      {
          "hskclass": "6",
          "japanese": "きょろきょろ見回す",
          "chinese": "东张西望",
          "pinyin": "dōngzhāngxīwàng"
      },
      {
          "hskclass": "6",
          "japanese": "理事長,取締役会長",
          "chinese": "董事长",
          "pinyin": "dǒngshì zhǎng"
      },
      {
          "hskclass": "6",
          "japanese": "（家屋の数を数える）棟",
          "chinese": "栋",
          "pinyin": "dòng"
      },
      {
          "hskclass": "6",
          "japanese": "（波などが）揺れ動く",
          "chinese": "动荡",
          "pinyin": "dòngdàng"
      },
      {
          "hskclass": "6",
          "japanese": "動機",
          "chinese": "动机",
          "pinyin": "dòngjī"
      },
      {
          "hskclass": "6",
          "japanese": "凍結する",
          "chinese": "冻结",
          "pinyin": "dòngjié"
      },
      {
          "hskclass": "6",
          "japanese": "物音",
          "chinese": "动静",
          "pinyin": "dòngjìng"
      },
      {
          "hskclass": "6",
          "japanese": "動力",
          "chinese": "动力",
          "pinyin": "dònglì"
      },
      {
          "hskclass": "6",
          "japanese": "動脈",
          "chinese": "动脉",
          "pinyin": "dòngmài"
      },
      {
          "hskclass": "6",
          "japanese": "出発する",
          "chinese": "动身",
          "pinyin": "dòngshēn"
      },
      {
          "hskclass": "6",
          "japanese": "着手する",
          "chinese": "动手",
          "pinyin": "dòngshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "動態",
          "chinese": "动态",
          "pinyin": "dòngtài"
      },
      {
          "hskclass": "6",
          "japanese": "洞窟",
          "chinese": "洞穴",
          "pinyin": "dòngxué"
      },
      {
          "hskclass": "6",
          "japanese": "動員する",
          "chinese": "动员",
          "pinyin": "dòngyuán"
      },
      {
          "hskclass": "6",
          "japanese": "ポケット",
          "chinese": "兜",
          "pinyin": "dōu"
      },
      {
          "hskclass": "6",
          "japanese": "険しい",
          "chinese": "陡峭",
          "pinyin": "dǒuqiào"
      },
      {
          "hskclass": "6",
          "japanese": "闘争する",
          "chinese": "斗争",
          "pinyin": "dòuzhēng"
      },
      {
          "hskclass": "6",
          "japanese": "督促する",
          "chinese": "督促",
          "pinyin": "dūcù"
      },
      {
          "hskclass": "6",
          "japanese": "都市",
          "chinese": "都市",
          "pinyin": "dūshì"
      },
      {
          "hskclass": "6",
          "japanese": "独裁する",
          "chinese": "独裁",
          "pinyin": "dúcái"
      },
      {
          "hskclass": "6",
          "japanese": "麻薬",
          "chinese": "毒品",
          "pinyin": "dúpǐn"
      },
      {
          "hskclass": "6",
          "japanese": "賭博",
          "chinese": "赌博",
          "pinyin": "dǔbó"
      },
      {
          "hskclass": "6",
          "japanese": "（穴・道などを）ふさぐ",
          "chinese": "堵塞",
          "pinyin": "dǔsè"
      },
      {
          "hskclass": "6",
          "japanese": "途絶する",
          "chinese": "杜绝",
          "pinyin": "dùjué"
      },
      {
          "hskclass": "6",
          "japanese": "端",
          "chinese": "端",
          "pinyin": "duān"
      },
      {
          "hskclass": "6",
          "japanese": "端午の節句",
          "chinese": "端午节",
          "pinyin": "duānwǔ jié"
      },
      {
          "hskclass": "6",
          "japanese": "きちんとしている",
          "chinese": "端正",
          "pinyin": "duānzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "（時間が）短い",
          "chinese": "短促",
          "pinyin": "duǎncù"
      },
      {
          "hskclass": "6",
          "japanese": "断定する",
          "chinese": "断定",
          "pinyin": "duàndìng"
      },
      {
          "hskclass": "6",
          "japanese": "断続的な",
          "chinese": "断断续续",
          "pinyin": "duànduànxùxù"
      },
      {
          "hskclass": "6",
          "japanese": "断絶する",
          "chinese": "断绝",
          "pinyin": "duànjué"
      },
      {
          "hskclass": "6",
          "japanese": "積み上げる",
          "chinese": "堆积",
          "pinyin": "duījī"
      },
      {
          "hskclass": "6",
          "japanese": "対策",
          "chinese": "对策",
          "pinyin": "duìcè"
      },
      {
          "hskclass": "6",
          "japanese": "対称的な",
          "chinese": "对称",
          "pinyin": "duìchèn"
      },
      {
          "hskclass": "6",
          "japanese": "対処する",
          "chinese": "对付",
          "pinyin": "duìfù"
      },
      {
          "hskclass": "6",
          "japanese": "両替する",
          "chinese": "兑换",
          "pinyin": "duìhuàn"
      },
      {
          "hskclass": "6",
          "japanese": "対抗する",
          "chinese": "对抗",
          "pinyin": "duìkàng"
      },
      {
          "hskclass": "6",
          "japanese": "対立する",
          "chinese": "对立",
          "pinyin": "duìlì"
      },
      {
          "hskclass": "6",
          "japanese": "対聯",
          "chinese": "对联",
          "pinyin": "duìlián"
      },
      {
          "hskclass": "6",
          "japanese": "軍隊",
          "chinese": "队伍",
          "pinyin": "duìwǔ"
      },
      {
          "hskclass": "6",
          "japanese": "（手形・小切手などを）現金に換える",
          "chinese": "兑现",
          "pinyin": "duìxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "対応する",
          "chinese": "对应",
          "pinyin": "duìyìng"
      },
      {
          "hskclass": "6",
          "japanese": "対照する",
          "chinese": "对照",
          "pinyin": "duìzhào"
      },
      {
          "hskclass": "6",
          "japanese": "直ちに",
          "chinese": "顿时",
          "pinyin": "dùnshí"
      },
      {
          "hskclass": "6",
          "japanese": "震える",
          "chinese": "哆嗦",
          "pinyin": "duōsuō"
      },
      {
          "hskclass": "6",
          "japanese": "多様化",
          "chinese": "多元化",
          "pinyin": "duōyuán huà"
      },
      {
          "hskclass": "6",
          "japanese": "堕落する",
          "chinese": "堕落",
          "pinyin": "duòluò"
      },
      {
          "hskclass": "6",
          "japanese": "定額外の",
          "chinese": "额外",
          "pinyin": "éwài"
      },
      {
          "hskclass": "6",
          "japanese": "吐き気がする",
          "chinese": "恶心",
          "pinyin": "ěxīn"
      },
      {
          "hskclass": "6",
          "japanese": "悪化する",
          "chinese": "恶化",
          "pinyin": "èhuà"
      },
      {
          "hskclass": "6",
          "japanese": "抑制する",
          "chinese": "遏制",
          "pinyin": "èzhì"
      },
      {
          "hskclass": "6",
          "japanese": "恩怨",
          "chinese": "恩怨",
          "pinyin": "ēn yuàn"
      },
      {
          "hskclass": "6",
          "japanese": "…だけである",
          "chinese": "而已",
          "pinyin": "éryǐ"
      },
      {
          "hskclass": "6",
          "japanese": "イヤリング",
          "chinese": "耳环",
          "pinyin": "ěrhuán"
      },
      {
          "hskclass": "6",
          "japanese": "二酸化炭素",
          "chinese": "二氧化碳",
          "pinyin": "èryǎnghuàtàn"
      },
      {
          "hskclass": "6",
          "japanese": "公布する",
          "chinese": "发布",
          "pinyin": "fābù"
      },
      {
          "hskclass": "6",
          "japanese": "金持ちになる",
          "chinese": "发财",
          "pinyin": "fācái"
      },
      {
          "hskclass": "6",
          "japanese": "ぼんやりする",
          "chinese": "发呆",
          "pinyin": "fādāi"
      },
      {
          "hskclass": "6",
          "japanese": "（行動を）働はたらきかける",
          "chinese": "发动",
          "pinyin": "fādòng"
      },
      {
          "hskclass": "6",
          "japanese": "燃えだす",
          "chinese": "发火",
          "pinyin": "fāhuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "気がつく",
          "chinese": "发觉",
          "pinyin": "fājué"
      },
      {
          "hskclass": "6",
          "japanese": "発射する",
          "chinese": "发射",
          "pinyin": "fāshè"
      },
      {
          "hskclass": "6",
          "japanese": "誓う",
          "chinese": "发誓",
          "pinyin": "fāshì"
      },
      {
          "hskclass": "6",
          "japanese": "発行する",
          "chinese": "发行",
          "pinyin": "fāxíng"
      },
      {
          "hskclass": "6",
          "japanese": "炎症を起こす",
          "chinese": "发炎",
          "pinyin": "fāyán"
      },
      {
          "hskclass": "6",
          "japanese": "発揮する",
          "chinese": "发扬",
          "pinyin": "fāyáng"
      },
      {
          "hskclass": "6",
          "japanese": "発育する",
          "chinese": "发育",
          "pinyin": "fāyù"
      },
      {
          "hskclass": "6",
          "japanese": "法人",
          "chinese": "法人",
          "pinyin": "fǎrén"
      },
      {
          "hskclass": "6",
          "japanese": "",
          "chinese": "番",
          "pinyin": "fān"
      },
      {
          "hskclass": "6",
          "japanese": "ひっくり返る",
          "chinese": "翻",
          "pinyin": "fān"
      },
      {
          "hskclass": "6",
          "japanese": "繁華である",
          "chinese": "繁华",
          "pinyin": "fánhuá"
      },
      {
          "hskclass": "6",
          "japanese": "繁忙である",
          "chinese": "繁忙",
          "pinyin": "fánmáng"
      },
      {
          "hskclass": "6",
          "japanese": "繁体字",
          "chinese": "繁体字",
          "pinyin": "fántǐ zì"
      },
      {
          "hskclass": "6",
          "japanese": "繁殖する",
          "chinese": "繁殖",
          "pinyin": "fánzhí"
      },
      {
          "hskclass": "6",
          "japanese": "反駁する",
          "chinese": "反驳",
          "pinyin": "fǎnbó"
      },
      {
          "hskclass": "6",
          "japanese": "異常である",
          "chinese": "反常",
          "pinyin": "fǎncháng"
      },
      {
          "hskclass": "6",
          "japanese": "かえって、反対に",
          "chinese": "反倒",
          "pinyin": "fǎndào"
      },
      {
          "hskclass": "6",
          "japanese": "反動的である",
          "chinese": "反动",
          "pinyin": "fǎndòng"
      },
      {
          "hskclass": "6",
          "japanese": "反感を持つ",
          "chinese": "反感",
          "pinyin": "fǎngǎn"
      },
      {
          "hskclass": "6",
          "japanese": "反抗する",
          "chinese": "反抗",
          "pinyin": "fǎnkàng"
      },
      {
          "hskclass": "6",
          "japanese": "フィードバック",
          "chinese": "反馈",
          "pinyin": "fǎnkuì"
      },
      {
          "hskclass": "6",
          "japanese": "裏側,反面",
          "chinese": "反面",
          "pinyin": "fǎnmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "反射する",
          "chinese": "反射",
          "pinyin": "fǎnshè"
      },
      {
          "hskclass": "6",
          "japanese": "振り返って考え直す",
          "chinese": "反思",
          "pinyin": "fǎnsī"
      },
      {
          "hskclass": "6",
          "japanese": "反問する",
          "chinese": "反问",
          "pinyin": "fǎnwèn"
      },
      {
          "hskclass": "6",
          "japanese": "これとは反対に",
          "chinese": "反之",
          "pinyin": "fǎnzhī"
      },
      {
          "hskclass": "6",
          "japanese": "範疇、カテゴリー",
          "chinese": "范畴",
          "pinyin": "fànchóu"
      },
      {
          "hskclass": "6",
          "japanese": "氾濫する",
          "chinese": "泛滥",
          "pinyin": "fànlàn"
      },
      {
          "hskclass": "6",
          "japanese": "販売する",
          "chinese": "贩卖",
          "pinyin": "fànmài"
      },
      {
          "hskclass": "6",
          "japanese": "方位",
          "chinese": "方位",
          "pinyin": "fāngwèi"
      },
      {
          "hskclass": "6",
          "japanese": "方言",
          "chinese": "方言",
          "pinyin": "fāngyán"
      },
      {
          "hskclass": "6",
          "japanese": "方針",
          "chinese": "方针",
          "pinyin": "fāngzhēn"
      },
      {
          "hskclass": "6",
          "japanese": "防衛する",
          "chinese": "防守",
          "pinyin": "fángshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "防疫する",
          "chinese": "防疫",
          "pinyin": "fángyì"
      },
      {
          "hskclass": "6",
          "japanese": "防御する",
          "chinese": "防御",
          "pinyin": "fángyù"
      },
      {
          "hskclass": "6",
          "japanese": "防止する",
          "chinese": "防止",
          "pinyin": "fángzhǐ"
      },
      {
          "hskclass": "6",
          "japanese": "予防治療する",
          "chinese": "防治",
          "pinyin": "fángzhì"
      },
      {
          "hskclass": "6",
          "japanese": "紡織をする",
          "chinese": "纺织",
          "pinyin": "fǎngzhī"
      },
      {
          "hskclass": "6",
          "japanese": "拡大する,引き伸ばす",
          "chinese": "放大",
          "pinyin": "fàngdà"
      },
      {
          "hskclass": "6",
          "japanese": "放射する",
          "chinese": "放射",
          "pinyin": "fàngshè"
      },
      {
          "hskclass": "6",
          "japanese": "手を放す",
          "chinese": "放手",
          "pinyin": "fàngshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "不法な",
          "chinese": "非法",
          "pinyin": "fēifǎ"
      },
      {
          "hskclass": "6",
          "japanese": "鳥類と獣類",
          "chinese": "飞禽走兽",
          "pinyin": "fēiqín zǒushòu"
      },
      {
          "hskclass": "6",
          "japanese": "空を旋回する",
          "chinese": "飞翔",
          "pinyin": "fēixiáng"
      },
      {
          "hskclass": "6",
          "japanese": "飛躍する",
          "chinese": "飞跃",
          "pinyin": "fēiyuè"
      },
      {
          "hskclass": "6",
          "japanese": "肥沃である",
          "chinese": "肥沃",
          "pinyin": "féiwò"
      },
      {
          "hskclass": "6",
          "japanese": "誹謗する",
          "chinese": "诽谤",
          "pinyin": "fěibàng"
      },
      {
          "hskclass": "6",
          "japanese": "強盗",
          "chinese": "匪徒",
          "pinyin": "fěitú"
      },
      {
          "hskclass": "6",
          "japanese": "廃止する",
          "chinese": "废除",
          "pinyin": "fèichú"
      },
      {
          "hskclass": "6",
          "japanese": "沸騰する",
          "chinese": "沸腾",
          "pinyin": "fèiténg"
      },
      {
          "hskclass": "6",
          "japanese": "廃墟",
          "chinese": "废墟",
          "pinyin": "fèixū"
      },
      {
          "hskclass": "6",
          "japanese": "見分ける,識別する",
          "chinese": "分辨",
          "pinyin": "fēnbiàn"
      },
      {
          "hskclass": "6",
          "japanese": "程合い",
          "chinese": "分寸",
          "pinyin": "fēncùn"
      },
      {
          "hskclass": "6",
          "japanese": "言いつける",
          "chinese": "吩咐",
          "pinyin": "fēnfù"
      },
      {
          "hskclass": "6",
          "japanese": "利益を配当する",
          "chinese": "分红",
          "pinyin": "fēnhóng"
      },
      {
          "hskclass": "6",
          "japanese": "分解する",
          "chinese": "分解",
          "pinyin": "fēnjiě"
      },
      {
          "hskclass": "6",
          "japanese": "分裂する",
          "chinese": "分裂",
          "pinyin": "fēnliè"
      },
      {
          "hskclass": "6",
          "japanese": "分泌する",
          "chinese": "分泌",
          "pinyin": "fēnmì"
      },
      {
          "hskclass": "6",
          "japanese": "明らかな",
          "chinese": "分明",
          "pinyin": "fēnmíng"
      },
      {
          "hskclass": "6",
          "japanese": "相違,不一致",
          "chinese": "分歧",
          "pinyin": "fēnqí"
      },
      {
          "hskclass": "6",
          "japanese": "分散する",
          "chinese": "分散",
          "pinyin": "fēnsàn"
      },
      {
          "hskclass": "6",
          "japanese": "別れる",
          "chinese": "分手",
          "pinyin": "fēnshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "墓",
          "chinese": "坟墓",
          "pinyin": "fénmù"
      },
      {
          "hskclass": "6",
          "japanese": "粉末",
          "chinese": "粉末",
          "pinyin": "fěnmò"
      },
      {
          "hskclass": "6",
          "japanese": "薄紅",
          "chinese": "粉色",
          "pinyin": "fěnsè"
      },
      {
          "hskclass": "6",
          "japanese": "粉砕する",
          "chinese": "粉碎",
          "pinyin": "fěnsuì"
      },
      {
          "hskclass": "6",
          "japanese": "重さ",
          "chinese": "分量",
          "pinyin": "fènliàng"
      },
      {
          "hskclass": "6",
          "japanese": "暴風,嵐",
          "chinese": "风暴",
          "pinyin": "fēngbào"
      },
      {
          "hskclass": "6",
          "japanese": "密封する",
          "chinese": "封闭",
          "pinyin": "fēngbì"
      },
      {
          "hskclass": "6",
          "japanese": "風格,態度",
          "chinese": "风度",
          "pinyin": "fēngdù"
      },
      {
          "hskclass": "6",
          "japanese": "風光,景色",
          "chinese": "风光",
          "pinyin": "fēngguāng"
      },
      {
          "hskclass": "6",
          "japanese": "封建的な",
          "chinese": "封建",
          "pinyin": "fēngjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "鋭い",
          "chinese": "锋利",
          "pinyin": "fēnglì"
      },
      {
          "hskclass": "6",
          "japanese": "豊かな,豊満な",
          "chinese": "丰满",
          "pinyin": "fēngmǎn"
      },
      {
          "hskclass": "6",
          "japanese": "気風",
          "chinese": "风气",
          "pinyin": "fēngqì"
      },
      {
          "hskclass": "6",
          "japanese": "ユーモア",
          "chinese": "风趣",
          "pinyin": "fēngqù"
      },
      {
          "hskclass": "6",
          "japanese": "豊富である",
          "chinese": "丰盛",
          "pinyin": "fēng shèng"
      },
      {
          "hskclass": "6",
          "japanese": "豊作である",
          "chinese": "丰收",
          "pinyin": "fēngshōu"
      },
      {
          "hskclass": "6",
          "japanese": "封鎖する",
          "chinese": "封锁",
          "pinyin": "fēngsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "風土と人情",
          "chinese": "风土人情",
          "pinyin": "fēngtǔ rénqíng"
      },
      {
          "hskclass": "6",
          "japanese": "味わい",
          "chinese": "风味",
          "pinyin": "fēngwèi"
      },
      {
          "hskclass": "6",
          "japanese": "出会う",
          "chinese": "逢",
          "pinyin": "féng"
      },
      {
          "hskclass": "6",
          "japanese": "献上する",
          "chinese": "奉献",
          "pinyin": "fèngxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "否決する",
          "chinese": "否决",
          "pinyin": "fǒujué"
      },
      {
          "hskclass": "6",
          "japanese": "夫婦",
          "chinese": "夫妇",
          "pinyin": "fūfù"
      },
      {
          "hskclass": "6",
          "japanese": "夫人",
          "chinese": "夫人",
          "pinyin": "fūrén"
      },
      {
          "hskclass": "6",
          "japanese": "敷衍する",
          "chinese": "敷衍",
          "pinyin": "fūyǎn"
      },
      {
          "hskclass": "6",
          "japanese": "幅",
          "chinese": "幅度",
          "pinyin": "fúdù"
      },
      {
          "hskclass": "6",
          "japanese": "符号,記号",
          "chinese": "符号",
          "pinyin": "fúhào"
      },
      {
          "hskclass": "6",
          "japanese": "福利、福祉",
          "chinese": "福利",
          "pinyin": "fúlì"
      },
      {
          "hskclass": "6",
          "japanese": "捕虜にする",
          "chinese": "俘虏",
          "pinyin": "fúlǔ"
      },
      {
          "hskclass": "6",
          "japanese": "心服する",
          "chinese": "服气",
          "pinyin": "fúqì"
      },
      {
          "hskclass": "6",
          "japanese": "幸運",
          "chinese": "福气",
          "pinyin": "fúqi"
      },
      {
          "hskclass": "6",
          "japanese": "放射する",
          "chinese": "辐射",
          "pinyin": "fúshè"
      },
      {
          "hskclass": "6",
          "japanese": "腐敗する",
          "chinese": "腐败",
          "pinyin": "fǔbài"
      },
      {
          "hskclass": "6",
          "japanese": "腐乱する",
          "chinese": "腐烂",
          "pinyin": "fǔlàn"
      },
      {
          "hskclass": "6",
          "japanese": "腐食する",
          "chinese": "腐蚀",
          "pinyin": "fǔshí"
      },
      {
          "hskclass": "6",
          "japanese": "腐朽している",
          "chinese": "腐朽",
          "pinyin": "fǔxiǔ"
      },
      {
          "hskclass": "6",
          "japanese": "養育する",
          "chinese": "抚养",
          "pinyin": "fǔyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "うつむいたりあおむいたりする",
          "chinese": "俯仰",
          "pinyin": "fǔyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "協力する,補助的な",
          "chinese": "辅助",
          "pinyin": "fǔzhù"
      },
      {
          "hskclass": "6",
          "japanese": "副の,第2の",
          "chinese": "副",
          "pinyin": "fù"
      },
      {
          "hskclass": "6",
          "japanese": "負担する",
          "chinese": "负担",
          "pinyin": "fùdān"
      },
      {
          "hskclass": "6",
          "japanese": "覆う",
          "chinese": "覆盖",
          "pinyin": "fùgài"
      },
      {
          "hskclass": "6",
          "japanese": "付和する",
          "chinese": "附和",
          "pinyin": "fùhè"
      },
      {
          "hskclass": "6",
          "japanese": "復活する",
          "chinese": "复活",
          "pinyin": "fùhuó"
      },
      {
          "hskclass": "6",
          "japanese": "付属文書",
          "chinese": "附件",
          "pinyin": "fùjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "付属する",
          "chinese": "附属",
          "pinyin": "fùshǔ"
      },
      {
          "hskclass": "6",
          "japanese": "下痢をする",
          "chinese": "腹泻",
          "pinyin": "fùxiè"
      },
      {
          "hskclass": "6",
          "japanese": "復興する",
          "chinese": "复兴",
          "pinyin": "fùxīng"
      },
      {
          "hskclass": "6",
          "japanese": "付与する",
          "chinese": "赋予",
          "pinyin": "fùyǔ"
      },
      {
          "hskclass": "6",
          "japanese": "裕福である",
          "chinese": "富裕",
          "pinyin": "fùyù"
      },
      {
          "hskclass": "6",
          "japanese": "副作用",
          "chinese": "副作用",
          "pinyin": "fùzuòyòng"
      },
      {
          "hskclass": "6",
          "japanese": "改良する",
          "chinese": "改良",
          "pinyin": "gǎiliáng"
      },
      {
          "hskclass": "6",
          "japanese": "捺印する",
          "chinese": "盖章",
          "pinyin": "gài zhāng"
      },
      {
          "hskclass": "6",
          "japanese": "ばつが悪い",
          "chinese": "尴尬",
          "pinyin": "gāngà"
      },
      {
          "hskclass": "6",
          "japanese": "乾燥している",
          "chinese": "干旱",
          "pinyin": "gānhàn"
      },
      {
          "hskclass": "6",
          "japanese": "妨害する",
          "chinese": "干扰",
          "pinyin": "gānrǎo"
      },
      {
          "hskclass": "6",
          "japanese": "干渉する",
          "chinese": "干涉",
          "pinyin": "gānshè"
      },
      {
          "hskclass": "6",
          "japanese": "喜んで…する",
          "chinese": "甘心",
          "pinyin": "gānxīn"
      },
      {
          "hskclass": "6",
          "japanese": "関与する",
          "chinese": "干预",
          "pinyin": "gānyù"
      },
      {
          "hskclass": "6",
          "japanese": "感慨（を覚える）",
          "chinese": "感慨",
          "pinyin": "gǎnkǎi"
      },
      {
          "hskclass": "6",
          "japanese": "感染する",
          "chinese": "感染",
          "pinyin": "gǎnrǎn"
      },
      {
          "hskclass": "6",
          "japanese": "意気込み",
          "chinese": "干劲",
          "pinyin": "gànjìng"
      },
      {
          "hskclass": "6",
          "japanese": "担ぐ",
          "chinese": "扛",
          "pinyin": "káng"
      },
      {
          "hskclass": "6",
          "japanese": "…したばかり",
          "chinese": "刚刚",
          "pinyin": "gānggāng"
      },
      {
          "hskclass": "6",
          "japanese": "綱領",
          "chinese": "纲领",
          "pinyin": "gānglǐng"
      },
      {
          "hskclass": "6",
          "japanese": "港",
          "chinese": "港口",
          "pinyin": "gǎngkǒu"
      },
      {
          "hskclass": "6",
          "japanese": "港湾",
          "chinese": "港湾",
          "pinyin": "gǎngwān"
      },
      {
          "hskclass": "6",
          "japanese": "持ち場、部署",
          "chinese": "岗位",
          "pinyin": "gǎngwèi"
      },
      {
          "hskclass": "6",
          "japanese": "(物理)てこ",
          "chinese": "杠杆",
          "pinyin": "gànggǎn"
      },
      {
          "hskclass": "6",
          "japanese": "ずば抜けている",
          "chinese": "高超",
          "pinyin": "gāochāo"
      },
      {
          "hskclass": "6",
          "japanese": "高潮",
          "chinese": "高潮",
          "pinyin": "gāocháo"
      },
      {
          "hskclass": "6",
          "japanese": "高峰",
          "chinese": "高峰",
          "pinyin": "gāofēng"
      },
      {
          "hskclass": "6",
          "japanese": "大学統一入学試験",
          "chinese": "高考",
          "pinyin": "gāokǎo"
      },
      {
          "hskclass": "6",
          "japanese": "優れている",
          "chinese": "高明",
          "pinyin": "gāomíng"
      },
      {
          "hskclass": "6",
          "japanese": "高尚である",
          "chinese": "高尚",
          "pinyin": "gāoshàng"
      },
      {
          "hskclass": "6",
          "japanese": "高揚する",
          "chinese": "高涨",
          "pinyin": "gāozhàng"
      },
      {
          "hskclass": "6",
          "japanese": "原稿",
          "chinese": "稿件",
          "pinyin": "gǎojiàn"
      },
      {
          "hskclass": "6",
          "japanese": "辞去する",
          "chinese": "告辞",
          "pinyin": "gàocí"
      },
      {
          "hskclass": "6",
          "japanese": "戒める",
          "chinese": "告诫",
          "pinyin": "gàojiè"
      },
      {
          "hskclass": "6",
          "japanese": "切る,刈る",
          "chinese": "割",
          "pinyin": "gē"
      },
      {
          "hskclass": "6",
          "japanese": "置く",
          "chinese": "搁",
          "pinyin": "gē"
      },
      {
          "hskclass": "6",
          "japanese": "できもの",
          "chinese": "疙瘩",
          "pinyin": "gēda"
      },
      {
          "hskclass": "6",
          "japanese": "賛美する",
          "chinese": "歌颂",
          "pinyin": "gēsòng"
      },
      {
          "hskclass": "6",
          "japanese": "隔たり、わだかまり",
          "chinese": "隔阂",
          "pinyin": "géhé"
      },
      {
          "hskclass": "6",
          "japanese": "構え,組み立て,構成",
          "chinese": "格局",
          "pinyin": "géjú"
      },
      {
          "hskclass": "6",
          "japanese": "隔離する",
          "chinese": "隔离",
          "pinyin": "gélí"
      },
      {
          "hskclass": "6",
          "japanese": "書式",
          "chinese": "格式",
          "pinyin": "géshì"
      },
      {
          "hskclass": "6",
          "japanese": "おのおの自分の意見を述べる",
          "chinese": "各抒己见",
          "pinyin": "gèshūjǐjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "個体",
          "chinese": "个体",
          "pinyin": "gètǐ"
      },
      {
          "hskclass": "6",
          "japanese": "各自",
          "chinese": "各自",
          "pinyin": "gèzì"
      },
      {
          "hskclass": "6",
          "japanese": "跟前",
          "chinese": "跟前",
          "pinyin": "gēnqián"
      },
      {
          "hskclass": "6",
          "japanese": "根深くて揺るがない",
          "chinese": "根深蒂固",
          "pinyin": "gēnshēndìgù"
      },
      {
          "hskclass": "6",
          "japanese": "付き従う",
          "chinese": "跟随",
          "pinyin": "gēnsuí"
      },
      {
          "hskclass": "6",
          "japanese": "根源",
          "chinese": "根源",
          "pinyin": "gēnyuán"
      },
      {
          "hskclass": "6",
          "japanese": "追跡する",
          "chinese": "跟踪",
          "pinyin": "gēnzōng"
      },
      {
          "hskclass": "6",
          "japanese": "耕地",
          "chinese": "耕地",
          "pinyin": "gēngdì"
      },
      {
          "hskclass": "6",
          "japanese": "更新する",
          "chinese": "更新",
          "pinyin": "gēngxīn"
      },
      {
          "hskclass": "6",
          "japanese": "訂正する",
          "chinese": "更正",
          "pinyin": "gēngzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "警察署",
          "chinese": "公安局",
          "pinyin": "gōng'ān jú"
      },
      {
          "hskclass": "6",
          "japanese": "供給が需要に追いつかない",
          "chinese": "供不应求",
          "pinyin": "gōng bù yìng qiú"
      },
      {
          "hskclass": "6",
          "japanese": "公正な道理",
          "chinese": "公道",
          "pinyin": "gōngdào"
      },
      {
          "hskclass": "6",
          "japanese": "宮殿",
          "chinese": "宫殿",
          "pinyin": "gōngdiàn"
      },
      {
          "hskclass": "6",
          "japanese": "（費やされる）時間,暇",
          "chinese": "工夫",
          "pinyin": "gōngfū"
      },
      {
          "hskclass": "6",
          "japanese": "公告",
          "chinese": "公告",
          "pinyin": "gōnggào"
      },
      {
          "hskclass": "6",
          "japanese": "広報活動,渉外",
          "chinese": "公关",
          "pinyin": "gōngguān"
      },
      {
          "hskclass": "6",
          "japanese": "攻撃する",
          "chinese": "攻击",
          "pinyin": "gōngjí"
      },
      {
          "hskclass": "6",
          "japanese": "供給する",
          "chinese": "供给",
          "pinyin": "gōngjǐ"
      },
      {
          "hskclass": "6",
          "japanese": "（目上の人や客に対し）恭しい",
          "chinese": "恭敬",
          "pinyin": "gōngjìng"
      },
      {
          "hskclass": "6",
          "japanese": "授業",
          "chinese": "功课",
          "pinyin": "gōngkè"
      },
      {
          "hskclass": "6",
          "japanese": "攻略する",
          "chinese": "攻克",
          "pinyin": "gōngkè"
      },
      {
          "hskclass": "6",
          "japanese": "功労",
          "chinese": "功劳",
          "pinyin": "gōngláo"
      },
      {
          "hskclass": "6",
          "japanese": "公民",
          "chinese": "公民",
          "pinyin": "gōngmín"
      },
      {
          "hskclass": "6",
          "japanese": "夫の両親",
          "chinese": "公婆",
          "pinyin": "gōngpó"
      },
      {
          "hskclass": "6",
          "japanese": "公然と",
          "chinese": "公然",
          "pinyin": "gōngrán"
      },
      {
          "hskclass": "6",
          "japanese": "公認する",
          "chinese": "公认",
          "pinyin": "gōngrèn"
      },
      {
          "hskclass": "6",
          "japanese": "公式",
          "chinese": "公式",
          "pinyin": "gōngshì"
      },
      {
          "hskclass": "6",
          "japanese": "公務",
          "chinese": "公务",
          "pinyin": "gōngwù"
      },
      {
          "hskclass": "6",
          "japanese": "効果",
          "chinese": "功效",
          "pinyin": "gōngxiào"
      },
      {
          "hskclass": "6",
          "japanese": "工芸品",
          "chinese": "工艺品",
          "pinyin": "gōngyìpǐn"
      },
      {
          "hskclass": "6",
          "japanese": "公正である",
          "chinese": "公正",
          "pinyin": "gōngzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "公証",
          "chinese": "公证",
          "pinyin": "gōngzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "強固である",
          "chinese": "巩固",
          "pinyin": "gǒnggù"
      },
      {
          "hskclass": "6",
          "japanese": "共和国",
          "chinese": "共和国",
          "pinyin": "gònghéguó"
      },
      {
          "hskclass": "6",
          "japanese": "合計して",
          "chinese": "共计",
          "pinyin": "gòngjì"
      },
      {
          "hskclass": "6",
          "japanese": "共鳴する",
          "chinese": "共鸣",
          "pinyin": "gòngmíng"
      },
      {
          "hskclass": "6",
          "japanese": "結託する",
          "chinese": "勾结",
          "pinyin": "gōujié"
      },
      {
          "hskclass": "6",
          "japanese": "鉤（かぎ）,フック",
          "chinese": "钩子",
          "pinyin": "gōuzi"
      },
      {
          "hskclass": "6",
          "japanese": "構想する",
          "chinese": "构思",
          "pinyin": "gòusī"
      },
      {
          "hskclass": "6",
          "japanese": "孤独である",
          "chinese": "孤独",
          "pinyin": "gūdú"
      },
      {
          "hskclass": "6",
          "japanese": "（期待などに）背く,（好意などを）無にする",
          "chinese": "辜负",
          "pinyin": "gūfù"
      },
      {
          "hskclass": "6",
          "japanese": "孤立している",
          "chinese": "孤立",
          "pinyin": "gūlì"
      },
      {
          "hskclass": "6",
          "japanese": "しばらく,ひとまず",
          "chinese": "姑且",
          "pinyin": "gūqiě"
      },
      {
          "hskclass": "6",
          "japanese": "株主",
          "chinese": "股东",
          "pinyin": "gǔdōng"
      },
      {
          "hskclass": "6",
          "japanese": "骨董",
          "chinese": "古董",
          "pinyin": "gǔdǒng"
      },
      {
          "hskclass": "6",
          "japanese": "扇動する",
          "chinese": "鼓动",
          "pinyin": "gǔdòng"
      },
      {
          "hskclass": "6",
          "japanese": "株式",
          "chinese": "股份",
          "pinyin": "gǔfèn"
      },
      {
          "hskclass": "6",
          "japanese": "（物事の全体を支える働きをする）中核",
          "chinese": "骨干",
          "pinyin": "gǔgàn"
      },
      {
          "hskclass": "6",
          "japanese": "風変わりである",
          "chinese": "古怪",
          "pinyin": "gǔguài"
      },
      {
          "hskclass": "6",
          "japanese": "懸念する",
          "chinese": "顾虑",
          "pinyin": "gùlǜ"
      },
      {
          "hskclass": "6",
          "japanese": "もとより…であるが",
          "chinese": "固然",
          "pinyin": "gùrán"
      },
      {
          "hskclass": "6",
          "japanese": "顧問",
          "chinese": "顾问",
          "pinyin": "gùwèn"
      },
      {
          "hskclass": "6",
          "japanese": "故郷",
          "chinese": "故乡",
          "pinyin": "gùxiāng"
      },
      {
          "hskclass": "6",
          "japanese": "固有の",
          "chinese": "固有",
          "pinyin": "gùyǒu"
      },
      {
          "hskclass": "6",
          "japanese": "故障",
          "chinese": "故障",
          "pinyin": "gùzhàng"
      },
      {
          "hskclass": "6",
          "japanese": "固執する",
          "chinese": "固执",
          "pinyin": "gùzhí"
      },
      {
          "hskclass": "6",
          "japanese": "杖（つえ）",
          "chinese": "拐杖",
          "pinyin": "guǎizhàng"
      },
      {
          "hskclass": "6",
          "japanese": "政府筋",
          "chinese": "官方",
          "pinyin": "guānfāng"
      },
      {
          "hskclass": "6",
          "japanese": "観光する",
          "chinese": "观光",
          "pinyin": "guānguāng"
      },
      {
          "hskclass": "6",
          "japanese": "面倒を見る",
          "chinese": "关照",
          "pinyin": "guānzhào"
      },
      {
          "hskclass": "6",
          "japanese": "管轄する",
          "chinese": "管辖",
          "pinyin": "guǎnxiá"
      },
      {
          "hskclass": "6",
          "japanese": "つぼ、缶",
          "chinese": "罐",
          "pinyin": "guàn"
      },
      {
          "hskclass": "6",
          "japanese": "貫徹する",
          "chinese": "贯彻",
          "pinyin": "guànchè"
      },
      {
          "hskclass": "6",
          "japanese": "灌漑する",
          "chinese": "灌溉",
          "pinyin": "guàngài"
      },
      {
          "hskclass": "6",
          "japanese": "慣例",
          "chinese": "惯例",
          "pinyin": "guànlì"
      },
      {
          "hskclass": "6",
          "japanese": "光彩",
          "chinese": "光彩",
          "pinyin": "guāngcǎi"
      },
      {
          "hskclass": "6",
          "japanese": "輝き、光輝",
          "chinese": "光辉",
          "pinyin": "guānghuī"
      },
      {
          "hskclass": "6",
          "japanese": "光芒",
          "chinese": "光芒",
          "pinyin": "guāngmáng"
      },
      {
          "hskclass": "6",
          "japanese": "広大である",
          "chinese": "广阔",
          "pinyin": "guǎngkuò"
      },
      {
          "hskclass": "6",
          "japanese": "規範",
          "chinese": "规范",
          "pinyin": "guīfàn"
      },
      {
          "hskclass": "6",
          "japanese": "規格",
          "chinese": "规格",
          "pinyin": "guīgé"
      },
      {
          "hskclass": "6",
          "japanese": "結局",
          "chinese": "归根到底",
          "pinyin": "guīgēn dàodǐ"
      },
      {
          "hskclass": "6",
          "japanese": "計画",
          "chinese": "规划",
          "pinyin": "guīhuà"
      },
      {
          "hskclass": "6",
          "japanese": "返却する",
          "chinese": "归还",
          "pinyin": "guīhuán"
      },
      {
          "hskclass": "6",
          "japanese": "帰納する",
          "chinese": "归纳",
          "pinyin": "guīnà"
      },
      {
          "hskclass": "6",
          "japanese": "規則",
          "chinese": "规章",
          "pinyin": "guīzhāng"
      },
      {
          "hskclass": "6",
          "japanese": "軌道",
          "chinese": "轨道",
          "pinyin": "guǐdào"
      },
      {
          "hskclass": "6",
          "japanese": "ひざまずく",
          "chinese": "跪",
          "pinyin": "guì"
      },
      {
          "hskclass": "6",
          "japanese": "貴族",
          "chinese": "贵族",
          "pinyin": "guìzú"
      },
      {
          "hskclass": "6",
          "japanese": "（武術用の）こん棒",
          "chinese": "棍棒",
          "pinyin": "gùnbàng"
      },
      {
          "hskclass": "6",
          "japanese": "国防",
          "chinese": "国防",
          "pinyin": "guófáng"
      },
      {
          "hskclass": "6",
          "japanese": "国務院",
          "chinese": "国务院",
          "pinyin": "guówùyuàn"
      },
      {
          "hskclass": "6",
          "japanese": "断固としている",
          "chinese": "果断",
          "pinyin": "guǒduàn"
      },
      {
          "hskclass": "6",
          "japanese": "過度である",
          "chinese": "过度",
          "pinyin": "guòdù"
      },
      {
          "hskclass": "6",
          "japanese": "移行する",
          "chinese": "过渡",
          "pinyin": "guòdù"
      },
      {
          "hskclass": "6",
          "japanese": "褒め過ぎる",
          "chinese": "过奖",
          "pinyin": "guòjiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "濾過する",
          "chinese": "过滤",
          "pinyin": "guòlǜ"
      },
      {
          "hskclass": "6",
          "japanese": "過失",
          "chinese": "过失",
          "pinyin": "guòshī"
      },
      {
          "hskclass": "6",
          "japanese": "口出しする",
          "chinese": "过问",
          "pinyin": "guòwèn"
      },
      {
          "hskclass": "6",
          "japanese": "堪能する",
          "chinese": "过瘾",
          "pinyin": "guòyǐn"
      },
      {
          "hskclass": "6",
          "japanese": "あまりにも…すぎる",
          "chinese": "过于",
          "pinyin": "guòyú"
      },
      {
          "hskclass": "6",
          "japanese": "ヨイショ、ヤッホー",
          "chinese": "嗨",
          "pinyin": "hāi"
      },
      {
          "hskclass": "6",
          "japanese": "海抜",
          "chinese": "海拔",
          "pinyin": "hǎibá"
      },
      {
          "hskclass": "6",
          "japanese": "海岸、海辺",
          "chinese": "海滨",
          "pinyin": "hǎibīn"
      },
      {
          "hskclass": "6",
          "japanese": "はっきりしない、あいまいである",
          "chinese": "含糊",
          "pinyin": "hánhú"
      },
      {
          "hskclass": "6",
          "japanese": "時候のあいさつをする",
          "chinese": "寒暄",
          "pinyin": "hánxuān"
      },
      {
          "hskclass": "6",
          "japanese": "意味が深い",
          "chinese": "含义",
          "pinyin": "hányì"
      },
      {
          "hskclass": "6",
          "japanese": "まれである",
          "chinese": "罕见",
          "pinyin": "hǎnjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "断固として守る",
          "chinese": "捍卫",
          "pinyin": "hànwèi"
      },
      {
          "hskclass": "6",
          "japanese": "航空",
          "chinese": "航空",
          "pinyin": "hángkōng"
      },
      {
          "hskclass": "6",
          "japanese": "縦列、行列",
          "chinese": "行列",
          "pinyin": "hángliè"
      },
      {
          "hskclass": "6",
          "japanese": "宇宙飛行",
          "chinese": "航天",
          "pinyin": "hángtiān"
      },
      {
          "hskclass": "6",
          "japanese": "航行する、飛行する",
          "chinese": "航行",
          "pinyin": "hángxíng"
      },
      {
          "hskclass": "6",
          "japanese": "気迫がある",
          "chinese": "豪迈",
          "pinyin": "háomài"
      },
      {
          "hskclass": "6",
          "japanese": "ミリメートル",
          "chinese": "毫米",
          "pinyin": "háomǐ"
      },
      {
          "hskclass": "6",
          "japanese": "少しも…がない",
          "chinese": "毫无",
          "pinyin": "háo wú"
      },
      {
          "hskclass": "6",
          "japanese": "消費する、消耗する",
          "chinese": "耗费",
          "pinyin": "hàofèi"
      },
      {
          "hskclass": "6",
          "japanese": "客好き",
          "chinese": "好客",
          "pinyin": "hàokè"
      },
      {
          "hskclass": "6",
          "japanese": "呼びかける",
          "chinese": "号召",
          "pinyin": "hàozhào"
      },
      {
          "hskclass": "6",
          "japanese": "吐く、吹きかける",
          "chinese": "呵",
          "pinyin": "hē"
      },
      {
          "hskclass": "6",
          "japanese": "温和である",
          "chinese": "和蔼",
          "pinyin": "hé'ǎi"
      },
      {
          "hskclass": "6",
          "japanese": "合併する",
          "chinese": "合并",
          "pinyin": "hébìng"
      },
      {
          "hskclass": "6",
          "japanese": "合わせて…とする",
          "chinese": "合成",
          "pinyin": "héchéng"
      },
      {
          "hskclass": "6",
          "japanese": "合う、合致する",
          "chinese": "合乎",
          "pinyin": "héhū"
      },
      {
          "hskclass": "6",
          "japanese": "一緒に組む",
          "chinese": "合伙",
          "pinyin": "héhuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "和解する",
          "chinese": "和解",
          "pinyin": "héjiě"
      },
      {
          "hskclass": "6",
          "japanese": "仲むつまじい",
          "chinese": "和睦",
          "pinyin": "hémù"
      },
      {
          "hskclass": "6",
          "japanese": "穏やかである",
          "chinese": "和气",
          "pinyin": "héqì"
      },
      {
          "hskclass": "6",
          "japanese": "体に合う",
          "chinese": "合身",
          "pinyin": "héshēn"
      },
      {
          "hskclass": "6",
          "japanese": "勘定に合う",
          "chinese": "合算",
          "pinyin": "hésuàn"
      },
      {
          "hskclass": "6",
          "japanese": "調和が取れている",
          "chinese": "和谐",
          "pinyin": "héxié"
      },
      {
          "hskclass": "6",
          "japanese": "おい、ほら",
          "chinese": "嘿",
          "pinyin": "hēi"
      },
      {
          "hskclass": "6",
          "japanese": "跡、痕跡",
          "chinese": "痕迹",
          "pinyin": "hénjī"
      },
      {
          "hskclass": "6",
          "japanese": "むごい、残忍である",
          "chinese": "狠心",
          "pinyin": "hěnxīn"
      },
      {
          "hskclass": "6",
          "japanese": "…したくてたまらない",
          "chinese": "恨不得",
          "pinyin": "hènbudé"
      },
      {
          "hskclass": "6",
          "japanese": "フン、チェッ",
          "chinese": "哼",
          "pinyin": "hēng"
      },
      {
          "hskclass": "6",
          "japanese": "だます、欺く",
          "chinese": "哄",
          "pinyin": "hōng"
      },
      {
          "hskclass": "6",
          "japanese": "あぶる、乾かす",
          "chinese": "烘",
          "pinyin": "hōng"
      },
      {
          "hskclass": "6",
          "japanese": "驚きを引き起こす",
          "chinese": "轰动",
          "pinyin": "hōngdòng"
      },
      {
          "hskclass": "6",
          "japanese": "お年玉",
          "chinese": "红包",
          "pinyin": "hóngbāo"
      },
      {
          "hskclass": "6",
          "japanese": "巨視的な、マクロの",
          "chinese": "宏观",
          "pinyin": "hóngguān"
      },
      {
          "hskclass": "6",
          "japanese": "洪水",
          "chinese": "洪水",
          "pinyin": "hóngshuǐ"
      },
      {
          "hskclass": "6",
          "japanese": "雄大である",
          "chinese": "宏伟",
          "pinyin": "hóngwěi"
      },
      {
          "hskclass": "6",
          "japanese": "喉",
          "chinese": "喉咙",
          "pinyin": "hóulóng"
      },
      {
          "hskclass": "6",
          "japanese": "叫ぶ、怒鳴る",
          "chinese": "吼",
          "pinyin": "hǒu"
      },
      {
          "hskclass": "6",
          "japanese": "後世",
          "chinese": "后代",
          "pinyin": "hòudài"
      },
      {
          "hskclass": "6",
          "japanese": "後顧の憂い、悩み",
          "chinese": "后顾之忧",
          "pinyin": "hòugùzhīyōu"
      },
      {
          "hskclass": "6",
          "japanese": "後ろ",
          "chinese": "后面",
          "pinyin": "hòumiàn"
      },
      {
          "hskclass": "6",
          "japanese": "後方勤務",
          "chinese": "后勤",
          "pinyin": "hòuqín"
      },
      {
          "hskclass": "6",
          "japanese": "候補",
          "chinese": "候选",
          "pinyin": "hòuxuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "見落とす",
          "chinese": "忽略",
          "pinyin": "hūlüè"
      },
      {
          "hskclass": "6",
          "japanese": "大声で叫ぶ",
          "chinese": "呼啸",
          "pinyin": "hūxiào"
      },
      {
          "hskclass": "6",
          "japanese": "呼びかける",
          "chinese": "呼吁",
          "pinyin": "hūyù"
      },
      {
          "hskclass": "6",
          "japanese": "何気なく",
          "chinese": "胡乱",
          "pinyin": "húluàn"
      },
      {
          "hskclass": "6",
          "japanese": "湖",
          "chinese": "湖泊",
          "pinyin": "húbó"
      },
      {
          "hskclass": "6",
          "japanese": "インターネット",
          "chinese": "互联网",
          "pinyin": "hùliánwǎng"
      },
      {
          "hskclass": "6",
          "japanese": "華麗である",
          "chinese": "华丽",
          "pinyin": "huálì"
      },
      {
          "hskclass": "6",
          "japanese": "華僑",
          "chinese": "华侨",
          "pinyin": "huáqiáo"
      },
      {
          "hskclass": "6",
          "japanese": "化学肥料",
          "chinese": "化肥",
          "pinyin": "huàféi"
      },
      {
          "hskclass": "6",
          "japanese": "分ける",
          "chinese": "划分",
          "pinyin": "huàfēn"
      },
      {
          "hskclass": "6",
          "japanese": "余計なつけ足しをする",
          "chinese": "画蛇添足",
          "pinyin": "huàshétiānzú"
      },
      {
          "hskclass": "6",
          "japanese": "化石",
          "chinese": "化石",
          "pinyin": "huàshí"
      },
      {
          "hskclass": "6",
          "japanese": "メガホン",
          "chinese": "话筒",
          "pinyin": "huàtǒng"
      },
      {
          "hskclass": "6",
          "japanese": "化学検査をする",
          "chinese": "化验",
          "pinyin": "huàyàn"
      },
      {
          "hskclass": "6",
          "japanese": "化粧",
          "chinese": "化妆",
          "pinyin": "huàzhuāng"
      },
      {
          "hskclass": "6",
          "japanese": "妊娠する",
          "chinese": "怀孕",
          "pinyin": "huáiyùn"
      },
      {
          "hskclass": "6",
          "japanese": "愉快である",
          "chinese": "欢乐",
          "pinyin": "huānlè"
      },
      {
          "hskclass": "6",
          "japanese": "環節",
          "chinese": "环节",
          "pinyin": "huánjié"
      },
      {
          "hskclass": "6",
          "japanese": "元の状態に戻る",
          "chinese": "还原",
          "pinyin": "huányuán"
      },
      {
          "hskclass": "6",
          "japanese": "穏やかである",
          "chinese": "缓和",
          "pinyin": "huǎnhé"
      },
      {
          "hskclass": "6",
          "japanese": "患者",
          "chinese": "患者",
          "pinyin": "huànzhě"
      },
      {
          "hskclass": "6",
          "japanese": "うら寂しい",
          "chinese": "荒凉",
          "pinyin": "huāngliáng"
      },
      {
          "hskclass": "6",
          "japanese": "慌てている",
          "chinese": "慌忙",
          "pinyin": "huāngmáng"
      },
      {
          "hskclass": "6",
          "japanese": "でたらめである",
          "chinese": "荒谬",
          "pinyin": "huāngmiù"
      },
      {
          "hskclass": "6",
          "japanese": "途方もない",
          "chinese": "荒唐",
          "pinyin": "huāngtáng"
      },
      {
          "hskclass": "6",
          "japanese": "黄昏",
          "chinese": "黄昏",
          "pinyin": "huánghūn"
      },
      {
          "hskclass": "6",
          "japanese": "急に悟りを開くこと",
          "chinese": "恍然大悟",
          "pinyin": "huǎngrándàwù"
      },
      {
          "hskclass": "6",
          "japanese": "光り輝いている",
          "chinese": "辉煌",
          "pinyin": "huīhuáng"
      },
      {
          "hskclass": "6",
          "japanese": "金を浪費する",
          "chinese": "挥霍",
          "pinyin": "huīhuò"
      },
      {
          "hskclass": "6",
          "japanese": "報告する",
          "chinese": "回报",
          "pinyin": "huíbào"
      },
      {
          "hskclass": "6",
          "japanese": "回避する",
          "chinese": "回避",
          "pinyin": "huíbì"
      },
      {
          "hskclass": "6",
          "japanese": "振り返る",
          "chinese": "回顾",
          "pinyin": "huígù"
      },
      {
          "hskclass": "6",
          "japanese": "回収する",
          "chinese": "回收",
          "pinyin": "huíshōu"
      },
      {
          "hskclass": "6",
          "japanese": "悔やむ",
          "chinese": "悔恨",
          "pinyin": "huǐhèn"
      },
      {
          "hskclass": "6",
          "japanese": "壊滅させる",
          "chinese": "毁灭",
          "pinyin": "huǐmiè"
      },
      {
          "hskclass": "6",
          "japanese": "報告",
          "chinese": "汇报",
          "pinyin": "huìbào"
      },
      {
          "hskclass": "6",
          "japanese": "賄賂",
          "chinese": "贿赂",
          "pinyin": "huìlù"
      },
      {
          "hskclass": "6",
          "japanese": "会う",
          "chinese": "会晤",
          "pinyin": "huìwù"
      },
      {
          "hskclass": "6",
          "japanese": "昏睡",
          "chinese": "昏迷",
          "pinyin": "hūnmí"
      },
      {
          "hskclass": "6",
          "japanese": "体中",
          "chinese": "浑身",
          "pinyin": "húnshēn"
      },
      {
          "hskclass": "6",
          "japanese": "混ぜる",
          "chinese": "混合",
          "pinyin": "hùn hé"
      },
      {
          "hskclass": "6",
          "japanese": "混乱",
          "chinese": "混乱",
          "pinyin": "hǔnluàn"
      },
      {
          "hskclass": "6",
          "japanese": "入り交じる",
          "chinese": "混淆",
          "pinyin": "hùnxiáo"
      },
      {
          "hskclass": "6",
          "japanese": "濁っている",
          "chinese": "混浊",
          "pinyin": "húnzhuó"
      },
      {
          "hskclass": "6",
          "japanese": "当然のことである",
          "chinese": "活该",
          "pinyin": "huógāi"
      },
      {
          "hskclass": "6",
          "japanese": "活力",
          "chinese": "活力",
          "pinyin": "huólì"
      },
      {
          "hskclass": "6",
          "japanese": "ロケット",
          "chinese": "火箭",
          "pinyin": "huǒjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "炎",
          "chinese": "火焰",
          "pinyin": "huǒyàn"
      },
      {
          "hskclass": "6",
          "japanese": "火薬",
          "chinese": "火药",
          "pinyin": "huǒyào"
      },
      {
          "hskclass": "6",
          "japanese": "通貨",
          "chinese": "货币",
          "pinyin": "huòbì"
      },
      {
          "hskclass": "6",
          "japanese": "…かもしれない",
          "chinese": "或许",
          "pinyin": "huòxǔ"
      },
      {
          "hskclass": "6",
          "japanese": "ベース",
          "chinese": "基地",
          "pinyin": "jīdì"
      },
      {
          "hskclass": "6",
          "japanese": "融通のきく",
          "chinese": "机动",
          "pinyin": "jīdòng"
      },
      {
          "hskclass": "6",
          "japanese": "飢餓",
          "chinese": "饥饿",
          "pinyin": "jī'è"
      },
      {
          "hskclass": "6",
          "japanese": "奮い起こす",
          "chinese": "激发",
          "pinyin": "jīfā"
      },
      {
          "hskclass": "6",
          "japanese": "機構",
          "chinese": "机构",
          "pinyin": "jīgòu"
      },
      {
          "hskclass": "6",
          "japanese": "機関",
          "chinese": "机关",
          "pinyin": "jīguān"
      },
      {
          "hskclass": "6",
          "japanese": "基金",
          "chinese": "基金",
          "pinyin": "jījīn"
      },
      {
          "hskclass": "6",
          "japanese": "励ます",
          "chinese": "激励",
          "pinyin": "jīlì"
      },
      {
          "hskclass": "6",
          "japanese": "すばしこい",
          "chinese": "机灵",
          "pinyin": "jīling"
      },
      {
          "hskclass": "6",
          "japanese": "機密の",
          "chinese": "机密",
          "pinyin": "jīmì"
      },
      {
          "hskclass": "6",
          "japanese": "激情",
          "chinese": "激情",
          "pinyin": "jīqíng"
      },
      {
          "hskclass": "6",
          "japanese": "あざ笑う",
          "chinese": "讥笑",
          "pinyin": "jīxiào"
      },
      {
          "hskclass": "6",
          "japanese": "機械",
          "chinese": "机械",
          "pinyin": "jīxiè"
      },
      {
          "hskclass": "6",
          "japanese": "遺伝子",
          "chinese": "基因",
          "pinyin": "jīyīn"
      },
      {
          "hskclass": "6",
          "japanese": "チャンス",
          "chinese": "机遇",
          "pinyin": "jīyù"
      },
      {
          "hskclass": "6",
          "japanese": "機転が利く",
          "chinese": "机智",
          "pinyin": "jīzhì"
      },
      {
          "hskclass": "6",
          "japanese": "仮に",
          "chinese": "即便",
          "pinyin": "jíbiàn"
      },
      {
          "hskclass": "6",
          "japanese": "レベル",
          "chinese": "级别",
          "pinyin": "jíbié"
      },
      {
          "hskclass": "6",
          "japanese": "病気",
          "chinese": "疾病",
          "pinyin": "jíbìng"
      },
      {
          "hskclass": "6",
          "japanese": "妬む",
          "chinese": "嫉妒",
          "pinyin": "jídù"
      },
      {
          "hskclass": "6",
          "japanese": "極端な",
          "chinese": "极端",
          "pinyin": "jíduān"
      },
      {
          "hskclass": "6",
          "japanese": "目先の成功や利益を得ようと焦る",
          "chinese": "急功近利",
          "pinyin": "jígōngjìnlì"
      },
      {
          "hskclass": "6",
          "japanese": "本籍",
          "chinese": "籍贯",
          "pinyin": "jíguàn"
      },
      {
          "hskclass": "6",
          "japanese": "間もなく",
          "chinese": "即将",
          "pinyin": "jíjiāng"
      },
      {
          "hskclass": "6",
          "japanese": "急激である",
          "chinese": "急剧",
          "pinyin": "jíjù"
      },
      {
          "hskclass": "6",
          "japanese": "切羽詰まっている",
          "chinese": "急切",
          "pinyin": "jíqiè"
      },
      {
          "hskclass": "6",
          "japanese": "集団",
          "chinese": "集团",
          "pinyin": "jítuán"
      },
      {
          "hskclass": "6",
          "japanese": "極限",
          "chinese": "极限",
          "pinyin": "jíxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "めでたい",
          "chinese": "吉祥",
          "pinyin": "jíxiáng"
      },
      {
          "hskclass": "6",
          "japanese": "焦る",
          "chinese": "急于求成",
          "pinyin": "jíyú qiú chéng"
      },
      {
          "hskclass": "6",
          "japanese": "できるだけ早く",
          "chinese": "及早",
          "pinyin": "jízǎo"
      },
      {
          "hskclass": "6",
          "japanese": "落ち着かない",
          "chinese": "急躁",
          "pinyin": "jízào"
      },
      {
          "hskclass": "6",
          "japanese": "与える",
          "chinese": "给予",
          "pinyin": "jǐyǔ"
      },
      {
          "hskclass": "6",
          "japanese": "受け継ぐ",
          "chinese": "继承",
          "pinyin": "jìchéng"
      },
      {
          "hskclass": "6",
          "japanese": "四半期",
          "chinese": "季度",
          "pinyin": "jìdù"
      },
      {
          "hskclass": "6",
          "japanese": "忌む",
          "chinese": "忌讳",
          "pinyin": "jìhuì"
      },
      {
          "hskclass": "6",
          "japanese": "計算する",
          "chinese": "计较",
          "pinyin": "jìjiào"
      },
      {
          "hskclass": "6",
          "japanese": "静寂",
          "chinese": "寂静",
          "pinyin": "jìjìng"
      },
      {
          "hskclass": "6",
          "japanese": "第3位",
          "chinese": "季军",
          "pinyin": "jìjūn"
      },
      {
          "hskclass": "6",
          "japanese": "技能",
          "chinese": "技能",
          "pinyin": "jìnéng"
      },
      {
          "hskclass": "6",
          "japanese": "技巧",
          "chinese": "技巧",
          "pinyin": "jìqiǎo"
      },
      {
          "hskclass": "6",
          "japanese": "預ける",
          "chinese": "寄托",
          "pinyin": "jìtuō"
      },
      {
          "hskclass": "6",
          "japanese": "前人の事業を受け継ぎ",
          "chinese": "继往开来",
          "pinyin": "jìwǎngkāilái"
      },
      {
          "hskclass": "6",
          "japanese": "徴候",
          "chinese": "迹象",
          "pinyin": "jīxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "記憶力",
          "chinese": "记性",
          "pinyin": "jìxìng"
      },
      {
          "hskclass": "6",
          "japanese": "摘要",
          "chinese": "纪要",
          "pinyin": "jìyào"
      },
      {
          "hskclass": "6",
          "japanese": "記載する",
          "chinese": "记载",
          "pinyin": "jìzǎi"
      },
      {
          "hskclass": "6",
          "japanese": "日常のこと",
          "chinese": "家常",
          "pinyin": "jiācháng"
      },
      {
          "hskclass": "6",
          "japanese": "加工",
          "chinese": "加工",
          "pinyin": "jiāgōng"
      },
      {
          "hskclass": "6",
          "japanese": "家具",
          "chinese": "家伙",
          "pinyin": "jiāhuo"
      },
      {
          "hskclass": "6",
          "japanese": "激化する",
          "chinese": "加剧",
          "pinyin": "jiājù"
      },
      {
          "hskclass": "6",
          "japanese": "家族",
          "chinese": "家属",
          "pinyin": "jiāshǔ"
      },
      {
          "hskclass": "6",
          "japanese": "うまい料理",
          "chinese": "佳肴",
          "pinyin": "jiāyáo"
      },
      {
          "hskclass": "6",
          "japanese": "家ごとに知れ渡っている",
          "chinese": "家喻户晓",
          "pinyin": "jiāyùhùxiǎo"
      },
      {
          "hskclass": "6",
          "japanese": "混ぜる",
          "chinese": "夹杂",
          "pinyin": "jiázá"
      },
      {
          "hskclass": "6",
          "japanese": "仮説",
          "chinese": "假设",
          "pinyin": "jiǎshè"
      },
      {
          "hskclass": "6",
          "japanese": "もし",
          "chinese": "假使",
          "pinyin": "jiǎshǐ"
      },
      {
          "hskclass": "6",
          "japanese": "確固としている",
          "chinese": "坚定",
          "pinyin": "jiāndìng"
      },
      {
          "hskclass": "6",
          "japanese": "監督",
          "chinese": "监督",
          "pinyin": "jiāndū"
      },
      {
          "hskclass": "6",
          "japanese": "先端",
          "chinese": "尖端",
          "pinyin": "jiānduān"
      },
      {
          "hskclass": "6",
          "japanese": "壊れない",
          "chinese": "坚固",
          "pinyin": "jiāngù"
      },
      {
          "hskclass": "6",
          "japanese": "困難である",
          "chinese": "艰难",
          "pinyin": "jiānnán"
      },
      {
          "hskclass": "6",
          "japanese": "強じんである",
          "chinese": "坚韧",
          "pinyin": "jiānrèn"
      },
      {
          "hskclass": "6",
          "japanese": "堅実である",
          "chinese": "坚实",
          "pinyin": "jiānshí"
      },
      {
          "hskclass": "6",
          "japanese": "監視",
          "chinese": "监视",
          "pinyin": "jiānshì"
      },
      {
          "hskclass": "6",
          "japanese": "硬い",
          "chinese": "坚硬",
          "pinyin": "jiānyìng"
      },
      {
          "hskclass": "6",
          "japanese": "刑務所",
          "chinese": "监狱",
          "pinyin": "jiānyù"
      },
      {
          "hskclass": "6",
          "japanese": "兼職",
          "chinese": "兼职",
          "pinyin": "jiānzhí"
      },
      {
          "hskclass": "6",
          "japanese": "選ぶ",
          "chinese": "拣",
          "pinyin": "jiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "テープカットする",
          "chinese": "剪彩",
          "pinyin": "jiǎncǎi"
      },
      {
          "hskclass": "6",
          "japanese": "簡単にする",
          "chinese": "简化",
          "pinyin": "jiǎnhuà"
      },
      {
          "hskclass": "6",
          "japanese": "粗末である",
          "chinese": "简陋",
          "pinyin": "jiǎnlòu"
      },
      {
          "hskclass": "6",
          "japanese": "検討する",
          "chinese": "检讨",
          "pinyin": "jiǎn tǎo"
      },
      {
          "hskclass": "6",
          "japanese": "簡体字",
          "chinese": "简体字",
          "pinyin": "jiǎntǐzì"
      },
      {
          "hskclass": "6",
          "japanese": "検査する",
          "chinese": "检验",
          "pinyin": "jiǎnyàn"
      },
      {
          "hskclass": "6",
          "japanese": "簡単で要を得ている",
          "chinese": "简要",
          "pinyin": "jiǎnyào"
      },
      {
          "hskclass": "6",
          "japanese": "飛び散る",
          "chinese": "溅",
          "pinyin": "jiàn"
      },
      {
          "hskclass": "6",
          "japanese": "鑑別する",
          "chinese": "鉴别",
          "pinyin": "jiànbié"
      },
      {
          "hskclass": "6",
          "japanese": "スパイ",
          "chinese": "间谍",
          "pinyin": "jiàndié"
      },
      {
          "hskclass": "6",
          "japanese": "鑑定",
          "chinese": "鉴定",
          "pinyin": "jiàndìng"
      },
      {
          "hskclass": "6",
          "japanese": "見聞が豊かで知識が広い",
          "chinese": "见多识广",
          "pinyin": "jiàn duō shì guǎng"
      },
      {
          "hskclass": "6",
          "japanese": "間隔",
          "chinese": "间隔",
          "pinyin": "jiàngé"
      },
      {
          "hskclass": "6",
          "japanese": "間接の",
          "chinese": "间接",
          "pinyin": "jiànjiē"
      },
      {
          "hskclass": "6",
          "japanese": "見解",
          "chinese": "见解",
          "pinyin": "jiànjiě"
      },
      {
          "hskclass": "6",
          "japanese": "健全",
          "chinese": "健全",
          "pinyin": "jiànquán"
      },
      {
          "hskclass": "6",
          "japanese": "踏む",
          "chinese": "践踏",
          "pinyin": "jiàntà"
      },
      {
          "hskclass": "6",
          "japanese": "艦艇",
          "chinese": "舰艇",
          "pinyin": "jiàntǐng"
      },
      {
          "hskclass": "6",
          "japanese": "見聞",
          "chinese": "见闻",
          "pinyin": "jiànwén"
      },
      {
          "hskclass": "6",
          "japanese": "正義のために勇敢に事を行なう",
          "chinese": "见义勇为",
          "pinyin": "jiànyìyǒngwéi"
      },
      {
          "hskclass": "6",
          "japanese": "にかんがみて",
          "chinese": "鉴于",
          "pinyin": "jiànyú"
      },
      {
          "hskclass": "6",
          "japanese": "…に近づく",
          "chinese": "将近",
          "pinyin": "jiāngjìn"
      },
      {
          "hskclass": "6",
          "japanese": "王手をかける",
          "chinese": "将军",
          "pinyin": "jiāngjūn"
      },
      {
          "hskclass": "6",
          "japanese": "こわばっている",
          "chinese": "僵硬",
          "pinyin": "jiāngyìng"
      },
      {
          "hskclass": "6",
          "japanese": "オール",
          "chinese": "桨",
          "pinyin": "jiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "奨励する",
          "chinese": "奖励",
          "pinyin": "jiǎnglì"
      },
      {
          "hskclass": "6",
          "japanese": "賞品を与え褒めたたえる",
          "chinese": "奖赏",
          "pinyin": "jiǎngshǎng"
      },
      {
          "hskclass": "6",
          "japanese": "訪れる",
          "chinese": "降临",
          "pinyin": "jiànglín"
      },
      {
          "hskclass": "6",
          "japanese": "交差する",
          "chinese": "交叉",
          "pinyin": "jiāochā"
      },
      {
          "hskclass": "6",
          "japanese": "引き継ぐ",
          "chinese": "交代",
          "pinyin": "jiāodài"
      },
      {
          "hskclass": "6",
          "japanese": "焦点",
          "chinese": "焦点",
          "pinyin": "jiāodiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "いらいらする",
          "chinese": "焦急",
          "pinyin": "jiāojí"
      },
      {
          "hskclass": "6",
          "japanese": "甘える気持ち",
          "chinese": "娇气",
          "pinyin": "jiāoqì"
      },
      {
          "hskclass": "6",
          "japanese": "交渉",
          "chinese": "交涉",
          "pinyin": "jiāoshè"
      },
      {
          "hskclass": "6",
          "japanese": "交際する",
          "chinese": "交往",
          "pinyin": "jiāowǎng"
      },
      {
          "hskclass": "6",
          "japanese": "取引する",
          "chinese": "交易",
          "pinyin": "jiāoyì"
      },
      {
          "hskclass": "6",
          "japanese": "かき混ぜる",
          "chinese": "搅拌",
          "pinyin": "jiǎobàn"
      },
      {
          "hskclass": "6",
          "japanese": "隅",
          "chinese": "角落",
          "pinyin": "jiǎoluò"
      },
      {
          "hskclass": "6",
          "japanese": "納める",
          "chinese": "缴纳",
          "pinyin": "jiǎonà"
      },
      {
          "hskclass": "6",
          "japanese": "対決する",
          "chinese": "较量",
          "pinyin": "jiàoliàng"
      },
      {
          "hskclass": "6",
          "japanese": "しつける",
          "chinese": "教养",
          "pinyin": "jiàoyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "全て",
          "chinese": "皆",
          "pinyin": "jiē"
      },
      {
          "hskclass": "6",
          "japanese": "階層",
          "chinese": "阶层",
          "pinyin": "jiēcéng"
      },
      {
          "hskclass": "6",
          "japanese": "摘発する",
          "chinese": "揭发",
          "pinyin": "jiēfā"
      },
      {
          "hskclass": "6",
          "japanese": "次々と",
          "chinese": "接连",
          "pinyin": "jiēlián"
      },
      {
          "hskclass": "6",
          "japanese": "暴き出す",
          "chinese": "揭露",
          "pinyin": "jiēlù"
      },
      {
          "hskclass": "6",
          "japanese": "傑出している",
          "chinese": "杰出",
          "pinyin": "jiéchū"
      },
      {
          "hskclass": "6",
          "japanese": "結果",
          "chinese": "结果",
          "pinyin": "jiéguǒ"
      },
      {
          "hskclass": "6",
          "japanese": "心一杯",
          "chinese": "竭尽全力",
          "pinyin": "jiéjìn quánlì"
      },
      {
          "hskclass": "6",
          "japanese": "結晶",
          "chinese": "结晶",
          "pinyin": "jiéjīng"
      },
      {
          "hskclass": "6",
          "japanese": "結局",
          "chinese": "结局",
          "pinyin": "jiéjú"
      },
      {
          "hskclass": "6",
          "japanese": "決算する",
          "chinese": "结算",
          "pinyin": "jiésuàn"
      },
      {
          "hskclass": "6",
          "japanese": "締め切る",
          "chinese": "截至",
          "pinyin": "jiézhì"
      },
      {
          "hskclass": "6",
          "japanese": "リズム",
          "chinese": "节奏",
          "pinyin": "jiézòu"
      },
      {
          "hskclass": "6",
          "japanese": "解除する",
          "chinese": "解除",
          "pinyin": "jiěchú"
      },
      {
          "hskclass": "6",
          "japanese": "解雇する",
          "chinese": "解雇",
          "pinyin": "jiěgù"
      },
      {
          "hskclass": "6",
          "japanese": "解剖する",
          "chinese": "解剖",
          "pinyin": "jiěpōu"
      },
      {
          "hskclass": "6",
          "japanese": "解散する",
          "chinese": "解散",
          "pinyin": "jiěsàn"
      },
      {
          "hskclass": "6",
          "japanese": "解体する",
          "chinese": "解体",
          "pinyin": "jiětǐ"
      },
      {
          "hskclass": "6",
          "japanese": "警戒する",
          "chinese": "戒备",
          "pinyin": "jièbèi"
      },
      {
          "hskclass": "6",
          "japanese": "参考にする",
          "chinese": "借鉴",
          "pinyin": "jièjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "限界",
          "chinese": "界限",
          "pinyin": "jièxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "助けを借りる",
          "chinese": "借助",
          "pinyin": "jièzhù"
      },
      {
          "hskclass": "6",
          "japanese": "興味津々である",
          "chinese": "津津有味",
          "pinyin": "jīnjīnyǒuwèi"
      },
      {
          "hskclass": "6",
          "japanese": "金融",
          "chinese": "金融",
          "pinyin": "jīnróng"
      },
      {
          "hskclass": "6",
          "japanese": "できるだけ早く",
          "chinese": "尽快",
          "pinyin": "jǐnkuài"
      },
      {
          "hskclass": "6",
          "japanese": "できるだけ",
          "chinese": "尽量",
          "pinyin": "jǐnliàng"
      },
      {
          "hskclass": "6",
          "japanese": "緊密である",
          "chinese": "紧密",
          "pinyin": "jǐnmì"
      },
      {
          "hskclass": "6",
          "japanese": "緊迫している",
          "chinese": "紧迫",
          "pinyin": "jǐnpò"
      },
      {
          "hskclass": "6",
          "japanese": "明るい未来",
          "chinese": "锦绣前程",
          "pinyin": "jǐnxiù qiánchéng"
      },
      {
          "hskclass": "6",
          "japanese": "更に進んで",
          "chinese": "进而",
          "pinyin": "jìn'ér"
      },
      {
          "hskclass": "6",
          "japanese": "攻撃する",
          "chinese": "进攻",
          "pinyin": "jìngōng"
      },
      {
          "hskclass": "6",
          "japanese": "進化",
          "chinese": "进化",
          "pinyin": "jìnhuà"
      },
      {
          "hskclass": "6",
          "japanese": "近頃",
          "chinese": "近来",
          "pinyin": "jìnlái"
      },
      {
          "hskclass": "6",
          "japanese": "液体に浸す",
          "chinese": "浸泡",
          "pinyin": "jìnpào"
      },
      {
          "hskclass": "6",
          "japanese": "昇進する",
          "chinese": "晋升",
          "pinyin": "jìnshēng"
      },
      {
          "hskclass": "6",
          "japanese": "近視",
          "chinese": "近视",
          "pinyin": "jìnshì"
      },
      {
          "hskclass": "6",
          "japanese": "やる気",
          "chinese": "劲头",
          "pinyin": "jìntóu"
      },
      {
          "hskclass": "6",
          "japanese": "進展する",
          "chinese": "进展",
          "pinyin": "jìnzhǎn"
      },
      {
          "hskclass": "6",
          "japanese": "茎",
          "chinese": "茎",
          "pinyin": "jīng"
      },
      {
          "hskclass": "6",
          "japanese": "細かく見積る",
          "chinese": "精打细算",
          "pinyin": "jīngdǎxìsuàn"
      },
      {
          "hskclass": "6",
          "japanese": "騒いでじゃまをする",
          "chinese": "惊动",
          "pinyin": "jīngdòng"
      },
      {
          "hskclass": "6",
          "japanese": "経費",
          "chinese": "经费",
          "pinyin": "jīngfèi"
      },
      {
          "hskclass": "6",
          "japanese": "エッセンス",
          "chinese": "精华",
          "pinyin": "jīnghuá"
      },
      {
          "hskclass": "6",
          "japanese": "簡潔にする",
          "chinese": "精简",
          "pinyin": "jīngjiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "慎重で勤勉である",
          "chinese": "兢兢业业",
          "pinyin": "jīng jīng yè yè"
      },
      {
          "hskclass": "6",
          "japanese": "精密である",
          "chinese": "精密",
          "pinyin": "jīngmì"
      },
      {
          "hskclass": "6",
          "japanese": "驚き不思議がる",
          "chinese": "惊奇",
          "pinyin": "jīngqí"
      },
      {
          "hskclass": "6",
          "japanese": "誤差がなく正確である",
          "chinese": "精确",
          "pinyin": "jīngquè"
      },
      {
          "hskclass": "6",
          "japanese": "商売をする",
          "chinese": "经商",
          "pinyin": "jīngshāng"
      },
      {
          "hskclass": "6",
          "japanese": "精通する",
          "chinese": "精通",
          "pinyin": "jīngtōng"
      },
      {
          "hskclass": "6",
          "japanese": "経緯、いきさつ",
          "chinese": "经纬",
          "pinyin": "jīngwěi"
      },
      {
          "hskclass": "6",
          "japanese": "入念である",
          "chinese": "精心",
          "pinyin": "jīngxīn"
      },
      {
          "hskclass": "6",
          "japanese": "あっと驚く",
          "chinese": "惊讶",
          "pinyin": "jīngyà"
      },
      {
          "hskclass": "6",
          "japanese": "優れている上に更に磨きをかける",
          "chinese": "精益求精",
          "pinyin": "jīngyìqiújīng"
      },
      {
          "hskclass": "6",
          "japanese": "精巧で細密である",
          "chinese": "精致",
          "pinyin": "jīngzhì"
      },
      {
          "hskclass": "6",
          "japanese": "井戸",
          "chinese": "井",
          "pinyin": "jǐng"
      },
      {
          "hskclass": "6",
          "japanese": "警告する",
          "chinese": "警告",
          "pinyin": "jǐnggào"
      },
      {
          "hskclass": "6",
          "japanese": "警戒する",
          "chinese": "警惕",
          "pinyin": "jǐngtì"
      },
      {
          "hskclass": "6",
          "japanese": "頸髄",
          "chinese": "颈椎",
          "pinyin": "jǐngchuí"
      },
      {
          "hskclass": "6",
          "japanese": "境界",
          "chinese": "境界",
          "pinyin": "jìngjiè"
      },
      {
          "hskclass": "6",
          "japanese": "敬礼する",
          "chinese": "敬礼",
          "pinyin": "jìnglǐ"
      },
      {
          "hskclass": "6",
          "japanese": "競争する",
          "chinese": "竞赛",
          "pinyin": "jìngsài"
      },
      {
          "hskclass": "6",
          "japanese": "レンズ",
          "chinese": "镜头",
          "pinyin": "jìngtóu"
      },
      {
          "hskclass": "6",
          "japanese": "選挙を争う",
          "chinese": "竞选",
          "pinyin": "jìngxuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "紛糾、紛争",
          "chinese": "纠纷",
          "pinyin": "jiūfēn"
      },
      {
          "hskclass": "6",
          "japanese": "是正する",
          "chinese": "纠正",
          "pinyin": "jiūzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "アルコール",
          "chinese": "酒精",
          "pinyin": "jiǔjīng"
      },
      {
          "hskclass": "6",
          "japanese": "救済する",
          "chinese": "救济",
          "pinyin": "jiùjì"
      },
      {
          "hskclass": "6",
          "japanese": "最寄り",
          "chinese": "就近",
          "pinyin": "jiùjìn"
      },
      {
          "hskclass": "6",
          "japanese": "就業する",
          "chinese": "就业",
          "pinyin": "jiùyè"
      },
      {
          "hskclass": "6",
          "japanese": "就任する",
          "chinese": "就职",
          "pinyin": "jiùzhí"
      },
      {
          "hskclass": "6",
          "japanese": "一生懸命に気を遣う",
          "chinese": "鞠躬",
          "pinyin": "jūgōng"
      },
      {
          "hskclass": "6",
          "japanese": "身柄を拘束する",
          "chinese": "拘留",
          "pinyin": "jūliú"
      },
      {
          "hskclass": "6",
          "japanese": "束縛する",
          "chinese": "拘束",
          "pinyin": "jūshù"
      },
      {
          "hskclass": "6",
          "japanese": "居住する",
          "chinese": "居住",
          "pinyin": "jūzhù"
      },
      {
          "hskclass": "6",
          "japanese": "局部",
          "chinese": "局部",
          "pinyin": "júbù"
      },
      {
          "hskclass": "6",
          "japanese": "情勢、状況",
          "chinese": "局面",
          "pinyin": "júmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "形勢、情勢",
          "chinese": "局势",
          "pinyin": "júshì"
      },
      {
          "hskclass": "6",
          "japanese": "限定する",
          "chinese": "局限",
          "pinyin": "júxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "ふるまい、動き",
          "chinese": "举动",
          "pinyin": "jǔdòng"
      },
      {
          "hskclass": "6",
          "japanese": "咀嚼する",
          "chinese": "咀嚼",
          "pinyin": "jǔjué"
      },
      {
          "hskclass": "6",
          "japanese": "しょげている",
          "chinese": "沮丧",
          "pinyin": "jǔsàng"
      },
      {
          "hskclass": "6",
          "japanese": "世界的に有名である",
          "chinese": "举世闻名",
          "pinyin": "jǔshì wénmíng"
      },
      {
          "hskclass": "6",
          "japanese": "世界の注目を集めている",
          "chinese": "举世瞩目",
          "pinyin": "jǔshì zhǔmù"
      },
      {
          "hskclass": "6",
          "japanese": "重要な地位にある",
          "chinese": "举足轻重",
          "pinyin": "jǔzúqīngzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "脚本",
          "chinese": "剧本",
          "pinyin": "jùběn"
      },
      {
          "hskclass": "6",
          "japanese": "精神を集中する",
          "chinese": "聚精会神",
          "pinyin": "jùjīnghuìshén"
      },
      {
          "hskclass": "6",
          "japanese": "厳しい",
          "chinese": "剧烈",
          "pinyin": "jùliè"
      },
      {
          "hskclass": "6",
          "japanese": "知るところによると…の由である",
          "chinese": "据悉",
          "pinyin": "jùxī"
      },
      {
          "hskclass": "6",
          "japanese": "政策・方策を決定する",
          "chinese": "决策",
          "pinyin": "juécè"
      },
      {
          "hskclass": "6",
          "japanese": "絶望",
          "chinese": "绝望",
          "pinyin": "juéwàng"
      },
      {
          "hskclass": "6",
          "japanese": "意識、自覚",
          "chinese": "觉悟",
          "pinyin": "juéwù"
      },
      {
          "hskclass": "6",
          "japanese": "覚醒する、目覚める",
          "chinese": "觉醒",
          "pinyin": "juéxǐng"
      },
      {
          "hskclass": "6",
          "japanese": "軍隊",
          "chinese": "军队",
          "pinyin": "jūnduì"
      },
      {
          "hskclass": "6",
          "japanese": "漫画",
          "chinese": "卡通",
          "pinyin": "kǎtōng"
      },
      {
          "hskclass": "6",
          "japanese": "採掘する",
          "chinese": "开采",
          "pinyin": "kāicǎi"
      },
      {
          "hskclass": "6",
          "japanese": "除名する、免職する",
          "chinese": "开除",
          "pinyin": "kāichú"
      },
      {
          "hskclass": "6",
          "japanese": "広々としている",
          "chinese": "开阔",
          "pinyin": "kāikuò"
      },
      {
          "hskclass": "6",
          "japanese": "広々として明るい",
          "chinese": "开朗",
          "pinyin": "kāilǎng"
      },
      {
          "hskclass": "6",
          "japanese": "進歩的でものわかりがよい",
          "chinese": "开明",
          "pinyin": "kāimíng"
      },
      {
          "hskclass": "6",
          "japanese": "切り開く、開拓する",
          "chinese": "开辟",
          "pinyin": "kāipì"
      },
      {
          "hskclass": "6",
          "japanese": "湯、熱湯",
          "chinese": "开水",
          "pinyin": "kāishuǐ"
      },
      {
          "hskclass": "6",
          "japanese": "開拓する、切り開く",
          "chinese": "开拓",
          "pinyin": "kāità"
      },
      {
          "hskclass": "6",
          "japanese": "展開させる",
          "chinese": "开展",
          "pinyin": "kāizhǎn"
      },
      {
          "hskclass": "6",
          "japanese": "支出する、支払う",
          "chinese": "开支",
          "pinyin": "kāizhī"
      },
      {
          "hskclass": "6",
          "japanese": "掲載する、登載する",
          "chinese": "刊登",
          "pinyin": "kāndēng"
      },
      {
          "hskclass": "6",
          "japanese": "探査する",
          "chinese": "勘探",
          "pinyin": "kāntàn"
      },
      {
          "hskclass": "6",
          "japanese": "刊行物",
          "chinese": "刊物",
          "pinyin": "kānwù"
      },
      {
          "hskclass": "6",
          "japanese": "取り扱う、待遇する",
          "chinese": "看待",
          "pinyin": "kàndài"
      },
      {
          "hskclass": "6",
          "japanese": "見たところ",
          "chinese": "看来",
          "pinyin": "kàn lái"
      },
      {
          "hskclass": "6",
          "japanese": "訪問する、訪れる",
          "chinese": "看望",
          "pinyin": "kànwàng"
      },
      {
          "hskclass": "6",
          "japanese": "気前がよい、物惜しみしない",
          "chinese": "慷慨",
          "pinyin": "kāngkǎi"
      },
      {
          "hskclass": "6",
          "japanese": "考察する",
          "chinese": "考察",
          "pinyin": "kǎochá"
      },
      {
          "hskclass": "6",
          "japanese": "考古学",
          "chinese": "考古",
          "pinyin": "kǎogǔ"
      },
      {
          "hskclass": "6",
          "japanese": "査定する、審査する",
          "chinese": "考核",
          "pinyin": "kǎohé"
      },
      {
          "hskclass": "6",
          "japanese": "試す、検証する",
          "chinese": "考验",
          "pinyin": "kǎoyàn"
      },
      {
          "hskclass": "6",
          "japanese": "接近する、近寄る",
          "chinese": "靠拢",
          "pinyin": "kàolǒng"
      },
      {
          "hskclass": "6",
          "japanese": "あたる、ぶつかる",
          "chinese": "磕",
          "pinyin": "kē"
      },
      {
          "hskclass": "6",
          "japanese": "粒、顆粒",
          "chinese": "颗粒",
          "pinyin": "kēlì"
      },
      {
          "hskclass": "6",
          "japanese": "科目",
          "chinese": "科目",
          "pinyin": "kēmù"
      },
      {
          "hskclass": "6",
          "japanese": "見るに値する",
          "chinese": "可观",
          "pinyin": "kěguān"
      },
      {
          "hskclass": "6",
          "japanese": "口に合う",
          "chinese": "可口",
          "pinyin": "kěkǒu"
      },
      {
          "hskclass": "6",
          "japanese": "渇望する",
          "chinese": "渴望",
          "pinyin": "kěwàng"
      },
      {
          "hskclass": "6",
          "japanese": "憎らしい",
          "chinese": "可恶",
          "pinyin": "kěwù"
      },
      {
          "hskclass": "6",
          "japanese": "おかしい",
          "chinese": "可笑",
          "pinyin": "kěxiào"
      },
      {
          "hskclass": "6",
          "japanese": "実行できる",
          "chinese": "可行",
          "pinyin": "kěxíng"
      },
      {
          "hskclass": "6",
          "japanese": "一刻の猶予も許さない",
          "chinese": "刻不容缓",
          "pinyin": "kèbùrónghuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "取引先",
          "chinese": "客户",
          "pinyin": "kèhù"
      },
      {
          "hskclass": "6",
          "japanese": "課題",
          "chinese": "课题",
          "pinyin": "kètí"
      },
      {
          "hskclass": "6",
          "japanese": "かじる",
          "chinese": "啃",
          "pinyin": "kěn"
      },
      {
          "hskclass": "6",
          "japanese": "懇切である",
          "chinese": "恳切",
          "pinyin": "kěnqiè"
      },
      {
          "hskclass": "6",
          "japanese": "穴、くぼみ",
          "chinese": "坑",
          "pinyin": "kēng"
      },
      {
          "hskclass": "6",
          "japanese": "空洞",
          "chinese": "空洞",
          "pinyin": "kōngdòng"
      },
      {
          "hskclass": "6",
          "japanese": "空前絶後である",
          "chinese": "空前绝后",
          "pinyin": "kōngqiánjuéhòu"
      },
      {
          "hskclass": "6",
          "japanese": "空想する",
          "chinese": "空想",
          "pinyin": "kōngxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "空虚である",
          "chinese": "空虚",
          "pinyin": "kōngxū"
      },
      {
          "hskclass": "6",
          "japanese": "穴",
          "chinese": "孔",
          "pinyin": "kǒng"
      },
      {
          "hskclass": "6",
          "japanese": "脅かす",
          "chinese": "恐吓",
          "pinyin": "kǒnghè"
      },
      {
          "hskclass": "6",
          "japanese": "恐れる",
          "chinese": "恐惧",
          "pinyin": "kǒngjù"
      },
      {
          "hskclass": "6",
          "japanese": "空白、余白",
          "chinese": "空白",
          "pinyin": "kòngbái"
      },
      {
          "hskclass": "6",
          "japanese": "すき間、間隔",
          "chinese": "空隙",
          "pinyin": "kòngxì"
      },
      {
          "hskclass": "6",
          "japanese": "語気、口調",
          "chinese": "口气",
          "pinyin": "kǒuqì"
      },
      {
          "hskclass": "6",
          "japanese": "口腔",
          "chinese": "口腔",
          "pinyin": "kǒuqiāng"
      },
      {
          "hskclass": "6",
          "japanese": "口頭、口先",
          "chinese": "口头",
          "pinyin": "kǒutóu"
      },
      {
          "hskclass": "6",
          "japanese": "発音",
          "chinese": "口音",
          "pinyin": "kǒuyīn"
      },
      {
          "hskclass": "6",
          "japanese": "枯渇する、尽きる",
          "chinese": "枯竭",
          "pinyin": "kūjié"
      },
      {
          "hskclass": "6",
          "japanese": "面白味がない",
          "chinese": "枯燥",
          "pinyin": "kūzào"
      },
      {
          "hskclass": "6",
          "japanese": "苦しい時が去って、やっと楽しい日が訪れること",
          "chinese": "苦尽甘来",
          "pinyin": "kǔjìngānlái"
      },
      {
          "hskclass": "6",
          "japanese": "掛ける",
          "chinese": "挎",
          "pinyin": "kuà"
      },
      {
          "hskclass": "6",
          "japanese": "またぐ",
          "chinese": "跨",
          "pinyin": "kuà"
      },
      {
          "hskclass": "6",
          "japanese": "楽しい",
          "chinese": "快活",
          "pinyin": "kuàihuó"
      },
      {
          "hskclass": "6",
          "japanese": "広々している",
          "chinese": "宽敞",
          "pinyin": "kuānchǎng"
      },
      {
          "hskclass": "6",
          "japanese": "丁重にもてなす",
          "chinese": "款待",
          "pinyin": "kuǎndài"
      },
      {
          "hskclass": "6",
          "japanese": "様式",
          "chinese": "款式",
          "pinyin": "kuǎnshì"
      },
      {
          "hskclass": "6",
          "japanese": "かご",
          "chinese": "筐",
          "pinyin": "kuāng"
      },
      {
          "hskclass": "6",
          "japanese": "骨格",
          "chinese": "框架",
          "pinyin": "kuàngjià"
      },
      {
          "hskclass": "6",
          "japanese": "授業をサボる",
          "chinese": "旷课",
          "pinyin": "kuàngkè"
      },
      {
          "hskclass": "6",
          "japanese": "まして、その上",
          "chinese": "况且",
          "pinyin": "kuàngqiě"
      },
      {
          "hskclass": "6",
          "japanese": "不当な扱いをする",
          "chinese": "亏待",
          "pinyin": "kuīdài"
      },
      {
          "hskclass": "6",
          "japanese": "欠損する",
          "chinese": "亏损",
          "pinyin": "kuīsǔn"
      },
      {
          "hskclass": "6",
          "japanese": "昆虫",
          "chinese": "昆虫",
          "pinyin": "kūnchóng"
      },
      {
          "hskclass": "6",
          "japanese": "縄で縛る",
          "chinese": "捆绑",
          "pinyin": "kǔnbǎng"
      },
      {
          "hskclass": "6",
          "japanese": "拡充する",
          "chinese": "扩充",
          "pinyin": "kuòchōng"
      },
      {
          "hskclass": "6",
          "japanese": "拡散する",
          "chinese": "扩散",
          "pinyin": "kuòsàn"
      },
      {
          "hskclass": "6",
          "japanese": "拡張する",
          "chinese": "扩张",
          "pinyin": "kuòzhāng"
      },
      {
          "hskclass": "6",
          "japanese": "だよ！",
          "chinese": "啦",
          "pinyin": "la"
      },
      {
          "hskclass": "6",
          "japanese": "らっぱ",
          "chinese": "喇叭",
          "pinyin": "lǎbā"
      },
      {
          "hskclass": "6",
          "japanese": "素姓、背景",
          "chinese": "来历",
          "pinyin": "láilì"
      },
      {
          "hskclass": "6",
          "japanese": "源、源泉",
          "chinese": "来源",
          "pinyin": "láiyuán"
      },
      {
          "hskclass": "6",
          "japanese": "記事、コーナー",
          "chinese": "栏目",
          "pinyin": "lánmù"
      },
      {
          "hskclass": "6",
          "japanese": "怠惰である",
          "chinese": "懒惰",
          "pinyin": "lǎnduò"
      },
      {
          "hskclass": "6",
          "japanese": "困り果てている",
          "chinese": "狼狈",
          "pinyin": "lángbèi"
      },
      {
          "hskclass": "6",
          "japanese": "朗読する",
          "chinese": "朗读",
          "pinyin": "lǎngdú"
      },
      {
          "hskclass": "6",
          "japanese": "すくい上げる",
          "chinese": "捞",
          "pinyin": "lāo"
      },
      {
          "hskclass": "6",
          "japanese": "ぶつぶつ言う",
          "chinese": "唠叨",
          "pinyin": "láo dāo"
      },
      {
          "hskclass": "6",
          "japanese": "揺るがない",
          "chinese": "牢固",
          "pinyin": "láogù"
      },
      {
          "hskclass": "6",
          "japanese": "愚痴",
          "chinese": "牢骚",
          "pinyin": "láosāo"
      },
      {
          "hskclass": "6",
          "japanese": "喜び",
          "chinese": "乐趣",
          "pinyin": "lèqù"
      },
      {
          "hskclass": "6",
          "japanese": "喜んで…する",
          "chinese": "乐意",
          "pinyin": "lèyì"
      },
      {
          "hskclass": "6",
          "japanese": "レーダー",
          "chinese": "雷达",
          "pinyin": "léidá"
      },
      {
          "hskclass": "6",
          "japanese": "類似",
          "chinese": "类似",
          "pinyin": "lèisì"
      },
      {
          "hskclass": "6",
          "japanese": "冷たい",
          "chinese": "冷淡",
          "pinyin": "lěngdàn"
      },
      {
          "hskclass": "6",
          "japanese": "冷酷",
          "chinese": "冷酷",
          "pinyin": "lěngkù"
      },
      {
          "hskclass": "6",
          "japanese": "冷却",
          "chinese": "冷却",
          "pinyin": "lěngquè"
      },
      {
          "hskclass": "6",
          "japanese": "ぽかんとする",
          "chinese": "愣",
          "pinyin": "lèng"
      },
      {
          "hskclass": "6",
          "japanese": "夜明け",
          "chinese": "黎明",
          "pinyin": "límíng"
      },
      {
          "hskclass": "6",
          "japanese": "相手にする",
          "chinese": "理睬",
          "pinyin": "lǐcǎi"
      },
      {
          "hskclass": "6",
          "japanese": "マイルストーン",
          "chinese": "里程碑",
          "pinyin": "lǐchéngbēi"
      },
      {
          "hskclass": "6",
          "japanese": "礼節",
          "chinese": "礼节",
          "pinyin": "lǐjié"
      },
      {
          "hskclass": "6",
          "japanese": "理の当然",
          "chinese": "理所当然",
          "pinyin": "lǐsuǒdāngrán"
      },
      {
          "hskclass": "6",
          "japanese": "話の筋が通っていて意気盛んである",
          "chinese": "理直气壮",
          "pinyin": "lǐzhíqìzhuàng"
      },
      {
          "hskclass": "6",
          "japanese": "理知",
          "chinese": "理智",
          "pinyin": "lǐzhì"
      },
      {
          "hskclass": "6",
          "japanese": "立場",
          "chinese": "立场",
          "pinyin": "lìchǎng"
      },
      {
          "hskclass": "6",
          "japanese": "歴代",
          "chinese": "历代",
          "pinyin": "lìdài"
      },
      {
          "hskclass": "6",
          "japanese": "利害",
          "chinese": "利害",
          "pinyin": "lìhài"
      },
      {
          "hskclass": "6",
          "japanese": "立体交差橋",
          "chinese": "立交桥",
          "pinyin": "lìjiāoqiáo"
      },
      {
          "hskclass": "6",
          "japanese": "これまで",
          "chinese": "历来",
          "pinyin": "lìlái"
      },
      {
          "hskclass": "6",
          "japanese": "金利",
          "chinese": "利率",
          "pinyin": "lìlǜ"
      },
      {
          "hskclass": "6",
          "japanese": "自分の能力で成し得る",
          "chinese": "力所能及",
          "pinyin": "lìsuǒnéngjí"
      },
      {
          "hskclass": "6",
          "japanese": "三次元",
          "chinese": "立体",
          "pinyin": "lìtǐ"
      },
      {
          "hskclass": "6",
          "japanese": "極力…しようと図る",
          "chinese": "力图",
          "pinyin": "lìtú"
      },
      {
          "hskclass": "6",
          "japanese": "例外",
          "chinese": "例外",
          "pinyin": "lìwài"
      },
      {
          "hskclass": "6",
          "japanese": "全力で戦い取る",
          "chinese": "力争",
          "pinyin": "lìzhēng"
      },
      {
          "hskclass": "6",
          "japanese": "立脚する",
          "chinese": "立足",
          "pinyin": "lìzú"
      },
      {
          "hskclass": "6",
          "japanese": "交歓する",
          "chinese": "联欢",
          "pinyin": "liánhuān"
      },
      {
          "hskclass": "6",
          "japanese": "清廉である",
          "chinese": "廉洁",
          "pinyin": "liánjié"
      },
      {
          "hskclass": "6",
          "japanese": "連絡する",
          "chinese": "联络",
          "pinyin": "liánluò"
      },
      {
          "hskclass": "6",
          "japanese": "連盟",
          "chinese": "联盟",
          "pinyin": "liánméng"
      },
      {
          "hskclass": "6",
          "japanese": "毎年毎年",
          "chinese": "连年",
          "pinyin": "liánnián"
      },
      {
          "hskclass": "6",
          "japanese": "連鎖",
          "chinese": "连锁",
          "pinyin": "liánsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "…と合わせて",
          "chinese": "连同",
          "pinyin": "liántóng"
      },
      {
          "hskclass": "6",
          "japanese": "連想する",
          "chinese": "联想",
          "pinyin": "liánxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "良心",
          "chinese": "良心",
          "pinyin": "liángxīn"
      },
      {
          "hskclass": "6",
          "japanese": "干す、乾かす",
          "chinese": "晾",
          "pinyin": "liàng"
      },
      {
          "hskclass": "6",
          "japanese": "了解する",
          "chinese": "谅解",
          "pinyin": "liàngjiě"
      },
      {
          "hskclass": "6",
          "japanese": "果てしなく広い",
          "chinese": "辽阔",
          "pinyin": "liáokuò"
      },
      {
          "hskclass": "6",
          "japanese": "列挙する",
          "chinese": "列举",
          "pinyin": "lièjǔ"
      },
      {
          "hskclass": "6",
          "japanese": "注ぐ",
          "chinese": "淋",
          "pinyin": "lín"
      },
      {
          "hskclass": "6",
          "japanese": "臨床の",
          "chinese": "临床",
          "pinyin": "línchuáng"
      },
      {
          "hskclass": "6",
          "japanese": "けち臭い",
          "chinese": "吝啬",
          "pinyin": "lìnsè"
      },
      {
          "hskclass": "6",
          "japanese": "早朝、夜明け",
          "chinese": "凌晨",
          "pinyin": "língchén"
      },
      {
          "hskclass": "6",
          "japanese": "霊感",
          "chinese": "灵感",
          "pinyin": "línggǎn"
      },
      {
          "hskclass": "6",
          "japanese": "霊魂",
          "chinese": "灵魂",
          "pinyin": "línghún"
      },
      {
          "hskclass": "6",
          "japanese": "利発である",
          "chinese": "伶俐",
          "pinyin": "línglì"
      },
      {
          "hskclass": "6",
          "japanese": "敏感",
          "chinese": "灵敏",
          "pinyin": "língmǐn"
      },
      {
          "hskclass": "6",
          "japanese": "こまごまとした",
          "chinese": "零星",
          "pinyin": "língxīng"
      },
      {
          "hskclass": "6",
          "japanese": "会得する",
          "chinese": "领会",
          "pinyin": "lǐnghuì"
      },
      {
          "hskclass": "6",
          "japanese": "領事館",
          "chinese": "领事馆",
          "pinyin": "lǐngshìguǎn"
      },
      {
          "hskclass": "6",
          "japanese": "領土",
          "chinese": "领土",
          "pinyin": "lǐngtǔ"
      },
      {
          "hskclass": "6",
          "japanese": "悟る",
          "chinese": "领悟",
          "pinyin": "lǐngwù"
      },
      {
          "hskclass": "6",
          "japanese": "先頭を切る",
          "chinese": "领先",
          "pinyin": "lǐngxiān"
      },
      {
          "hskclass": "6",
          "japanese": "指導者",
          "chinese": "领袖",
          "pinyin": "lǐngxiù"
      },
      {
          "hskclass": "6",
          "japanese": "滑る",
          "chinese": "溜",
          "pinyin": "liū"
      },
      {
          "hskclass": "6",
          "japanese": "流浪する",
          "chinese": "流浪",
          "pinyin": "liúlàng"
      },
      {
          "hskclass": "6",
          "japanese": "名残を惜しむ",
          "chinese": "留恋",
          "pinyin": "liúliàn"
      },
      {
          "hskclass": "6",
          "japanese": "流露する",
          "chinese": "流露",
          "pinyin": "liúlù"
      },
      {
          "hskclass": "6",
          "japanese": "ならず者",
          "chinese": "流氓",
          "pinyin": "liúmáng"
      },
      {
          "hskclass": "6",
          "japanese": "記念に残す",
          "chinese": "留念",
          "pinyin": "liúniàn"
      },
      {
          "hskclass": "6",
          "japanese": "気をつける",
          "chinese": "留神",
          "pinyin": "liúshén"
      },
      {
          "hskclass": "6",
          "japanese": "流動する",
          "chinese": "流通",
          "pinyin": "liútōng"
      },
      {
          "hskclass": "6",
          "japanese": "耳が聞こえずものを言うことができない人",
          "chinese": "聋哑",
          "pinyin": "lóng yǎ"
      },
      {
          "hskclass": "6",
          "japanese": "盛大で厳かである",
          "chinese": "隆重",
          "pinyin": "lóngzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "独占",
          "chinese": "垄断",
          "pinyin": "lǒngduàn"
      },
      {
          "hskclass": "6",
          "japanese": "上から覆う",
          "chinese": "笼罩",
          "pinyin": "lóngzhào"
      },
      {
          "hskclass": "6",
          "japanese": "寄せ集める",
          "chinese": "搂",
          "pinyin": "lǒu"
      },
      {
          "hskclass": "6",
          "japanese": "ストーブ",
          "chinese": "炉灶",
          "pinyin": "lúzào"
      },
      {
          "hskclass": "6",
          "japanese": "汽船",
          "chinese": "轮船",
          "pinyin": "lúnchuán"
      },
      {
          "hskclass": "6",
          "japanese": "輪郭",
          "chinese": "轮廓",
          "pinyin": "lúnkuò"
      },
      {
          "hskclass": "6",
          "japanese": "タイヤ",
          "chinese": "轮胎",
          "pinyin": "lúntāi"
      },
      {
          "hskclass": "6",
          "japanese": "論壇",
          "chinese": "论坛",
          "pinyin": "lùntán"
      },
      {
          "hskclass": "6",
          "japanese": "根拠、論拠",
          "chinese": "论证",
          "pinyin": "lùnzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "くどくどしい",
          "chinese": "啰唆",
          "pinyin": "luōsuō"
      },
      {
          "hskclass": "6",
          "japanese": "ねじ、ボルト",
          "chinese": "螺丝钉",
          "pinyin": "luósīdīng"
      },
      {
          "hskclass": "6",
          "japanese": "落成する",
          "chinese": "落成",
          "pinyin": "luòchéng"
      },
      {
          "hskclass": "6",
          "japanese": "着実である、実際的である",
          "chinese": "落实",
          "pinyin": "luòshí"
      },
      {
          "hskclass": "6",
          "japanese": "人や車の往来がはげしいさま",
          "chinese": "络绎不绝",
          "pinyin": "luòyì bù jué"
      },
      {
          "hskclass": "6",
          "japanese": "しばしば、たびたび",
          "chinese": "屡次",
          "pinyin": "lǚcì"
      },
      {
          "hskclass": "6",
          "japanese": "実行する、履行する",
          "chinese": "履行",
          "pinyin": "lǚxíng"
      },
      {
          "hskclass": "6",
          "japanese": "略奪する",
          "chinese": "掠夺",
          "pinyin": "lüèduó"
      },
      {
          "hskclass": "6",
          "japanese": "少し、いささか",
          "chinese": "略微",
          "pinyin": "lüèwēi"
      },
      {
          "hskclass": "6",
          "japanese": "麻痺",
          "chinese": "麻痹",
          "pinyin": "mábì"
      },
      {
          "hskclass": "6",
          "japanese": "麻痺する、しびれる",
          "chinese": "麻木",
          "pinyin": "mámù"
      },
      {
          "hskclass": "6",
          "japanese": "麻酔する",
          "chinese": "麻醉",
          "pinyin": "mázuì"
      },
      {
          "hskclass": "6",
          "japanese": "波止場",
          "chinese": "码头",
          "pinyin": "mǎtóu"
      },
      {
          "hskclass": "6",
          "japanese": "じゃないのか",
          "chinese": "嘛",
          "pinyin": "ma"
      },
      {
          "hskclass": "6",
          "japanese": "待ち伏せする",
          "chinese": "埋伏",
          "pinyin": "máifú"
      },
      {
          "hskclass": "6",
          "japanese": "うずめる、埋没させる",
          "chinese": "埋没",
          "pinyin": "máimò"
      },
      {
          "hskclass": "6",
          "japanese": "埋葬する、葬る",
          "chinese": "埋葬",
          "pinyin": "máizàng"
      },
      {
          "hskclass": "6",
          "japanese": "足を運ぶ、足を踏み出す",
          "chinese": "迈",
          "pinyin": "mài"
      },
      {
          "hskclass": "6",
          "japanese": "脈拍",
          "chinese": "脉搏",
          "pinyin": "màibó"
      },
      {
          "hskclass": "6",
          "japanese": "恨む",
          "chinese": "埋怨",
          "pinyin": "mányuàn"
      },
      {
          "hskclass": "6",
          "japanese": "長くて果てしがない",
          "chinese": "漫长",
          "pinyin": "màncháng"
      },
      {
          "hskclass": "6",
          "japanese": "漫画",
          "chinese": "漫画",
          "pinyin": "mànhuà"
      },
      {
          "hskclass": "6",
          "japanese": "慢性的",
          "chinese": "慢性",
          "pinyin": "mànxìng"
      },
      {
          "hskclass": "6",
          "japanese": "蔓延する、延び広がる",
          "chinese": "蔓延",
          "pinyin": "mànyán"
      },
      {
          "hskclass": "6",
          "japanese": "ばたばたと忙しい",
          "chinese": "忙碌",
          "pinyin": "mánglù"
      },
      {
          "hskclass": "6",
          "japanese": "広々と果てしない",
          "chinese": "茫茫",
          "pinyin": "mángmáng"
      },
      {
          "hskclass": "6",
          "japanese": "盲目的である",
          "chinese": "盲目",
          "pinyin": "mángmù"
      },
      {
          "hskclass": "6",
          "japanese": "さっぱり見当がつかない",
          "chinese": "茫然",
          "pinyin": "mángrán"
      },
      {
          "hskclass": "6",
          "japanese": "偽る、かたる",
          "chinese": "冒充",
          "pinyin": "màochōng"
      },
      {
          "hskclass": "6",
          "japanese": "繁茂している",
          "chinese": "茂盛",
          "pinyin": "màoshèng"
      },
      {
          "hskclass": "6",
          "japanese": "個、枚",
          "chinese": "枚",
          "pinyin": "méi"
      },
      {
          "hskclass": "6",
          "japanese": "仲介者、媒介物",
          "chinese": "媒介",
          "pinyin": "méijiè"
      },
      {
          "hskclass": "6",
          "japanese": "メディア",
          "chinese": "媒体",
          "pinyin": "méitǐ"
      },
      {
          "hskclass": "6",
          "japanese": "手の打ちようがない",
          "chinese": "没辙",
          "pinyin": "méizhé"
      },
      {
          "hskclass": "6",
          "japanese": "美しい",
          "chinese": "美观",
          "pinyin": "měiguān"
      },
      {
          "hskclass": "6",
          "japanese": "満ち足りている",
          "chinese": "美满",
          "pinyin": "měimǎn"
      },
      {
          "hskclass": "6",
          "japanese": "麗しい",
          "chinese": "美妙",
          "pinyin": "měimiào"
      },
      {
          "hskclass": "6",
          "japanese": "外来患者を診察する",
          "chinese": "门诊",
          "pinyin": "ménzhěn"
      },
      {
          "hskclass": "6",
          "japanese": "ごまかす、だます",
          "chinese": "蒙",
          "pinyin": "méng"
      },
      {
          "hskclass": "6",
          "japanese": "発芽する",
          "chinese": "萌芽",
          "pinyin": "méngyá"
      },
      {
          "hskclass": "6",
          "japanese": "猛烈である",
          "chinese": "猛烈",
          "pinyin": "měngliè"
      },
      {
          "hskclass": "6",
          "japanese": "夢",
          "chinese": "梦想",
          "pinyin": "mèngxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "目を細める",
          "chinese": "眯",
          "pinyin": "mī"
      },
      {
          "hskclass": "6",
          "japanese": "補塡する、補う",
          "chinese": "弥补",
          "pinyin": "míbǔ"
      },
      {
          "hskclass": "6",
          "japanese": "見当がつかない",
          "chinese": "迷惑",
          "pinyin": "míhuò"
      },
      {
          "hskclass": "6",
          "japanese": "満ちる、みなぎる",
          "chinese": "弥漫",
          "pinyin": "mímàn"
      },
      {
          "hskclass": "6",
          "japanese": "魅力的な",
          "chinese": "迷人",
          "pinyin": "mírén"
      },
      {
          "hskclass": "6",
          "japanese": "誤る、見失う",
          "chinese": "迷失",
          "pinyin": "míshī"
      },
      {
          "hskclass": "6",
          "japanese": "迷信",
          "chinese": "迷信",
          "pinyin": "míxìn"
      },
      {
          "hskclass": "6",
          "japanese": "密度",
          "chinese": "密度",
          "pinyin": "mìdù"
      },
      {
          "hskclass": "6",
          "japanese": "密封",
          "chinese": "密封",
          "pinyin": "mìfēng"
      },
      {
          "hskclass": "6",
          "japanese": "…しないで済むようにする",
          "chinese": "免得",
          "pinyin": "miǎndé"
      },
      {
          "hskclass": "6",
          "japanese": "励ます",
          "chinese": "勉励",
          "pinyin": "miǎnlì"
      },
      {
          "hskclass": "6",
          "japanese": "しぶしぶである",
          "chinese": "勉强",
          "pinyin": "miǎnqiáng"
      },
      {
          "hskclass": "6",
          "japanese": "免疫",
          "chinese": "免疫",
          "pinyin": "miǎnyì"
      },
      {
          "hskclass": "6",
          "japanese": "顔立ち、容貌",
          "chinese": "面貌",
          "pinyin": "miànmào"
      },
      {
          "hskclass": "6",
          "japanese": "表面、表",
          "chinese": "面子",
          "pinyin": "miànzi"
      },
      {
          "hskclass": "6",
          "japanese": "描写する",
          "chinese": "描绘",
          "pinyin": "miáohuì"
      },
      {
          "hskclass": "6",
          "japanese": "微小である、些細である",
          "chinese": "渺小",
          "pinyin": "miǎoxiǎo"
      },
      {
          "hskclass": "6",
          "japanese": "蔑視する",
          "chinese": "蔑视",
          "pinyin": "mièshì"
      },
      {
          "hskclass": "6",
          "japanese": "滅亡する、滅びる",
          "chinese": "灭亡",
          "pinyin": "mièwáng"
      },
      {
          "hskclass": "6",
          "japanese": "民間",
          "chinese": "民间",
          "pinyin": "mínjiān"
      },
      {
          "hskclass": "6",
          "japanese": "民用の",
          "chinese": "民用",
          "pinyin": "mínyòng"
      },
      {
          "hskclass": "6",
          "japanese": "敏感",
          "chinese": "敏感",
          "pinyin": "mǐngǎn"
      },
      {
          "hskclass": "6",
          "japanese": "敏捷である",
          "chinese": "敏捷",
          "pinyin": "mǐnjié"
      },
      {
          "hskclass": "6",
          "japanese": "鋭い",
          "chinese": "敏锐",
          "pinyin": "mǐnruì"
      },
      {
          "hskclass": "6",
          "japanese": "順番",
          "chinese": "名次",
          "pinyin": "míngcì"
      },
      {
          "hskclass": "6",
          "japanese": "定員、定数",
          "chinese": "名额",
          "pinyin": "míng'é"
      },
      {
          "hskclass": "6",
          "japanese": "名実相伴う",
          "chinese": "名副其实",
          "pinyin": "míngfùqíshí"
      },
      {
          "hskclass": "6",
          "japanese": "明らかに",
          "chinese": "明明",
          "pinyin": "míngmíng"
      },
      {
          "hskclass": "6",
          "japanese": "名誉",
          "chinese": "名誉",
          "pinyin": "míngyù"
      },
      {
          "hskclass": "6",
          "japanese": "命名する",
          "chinese": "命名",
          "pinyin": "mìngmíng"
      },
      {
          "hskclass": "6",
          "japanese": "探る",
          "chinese": "摸索",
          "pinyin": "mōsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "膜",
          "chinese": "膜",
          "pinyin": "mó"
      },
      {
          "hskclass": "6",
          "japanese": "摩擦",
          "chinese": "摩擦",
          "pinyin": "mócā"
      },
      {
          "hskclass": "6",
          "japanese": "模範",
          "chinese": "模范",
          "pinyin": "mófàn"
      },
      {
          "hskclass": "6",
          "japanese": "悪魔",
          "chinese": "魔鬼",
          "pinyin": "móguǐ"
      },
      {
          "hskclass": "6",
          "japanese": "慣らし運転",
          "chinese": "磨合",
          "pinyin": "móhé"
      },
      {
          "hskclass": "6",
          "japanese": "モデル、手本",
          "chinese": "模式",
          "pinyin": "móshì"
      },
      {
          "hskclass": "6",
          "japanese": "マジック",
          "chinese": "魔术",
          "pinyin": "móshù"
      },
      {
          "hskclass": "6",
          "japanese": "模型、モデル",
          "chinese": "模型",
          "pinyin": "móxíng"
      },
      {
          "hskclass": "6",
          "japanese": "抹殺する、抹消する",
          "chinese": "抹杀",
          "pinyin": "mǒshā"
      },
      {
          "hskclass": "6",
          "japanese": "何がなんだかわからない",
          "chinese": "莫名其妙",
          "pinyin": "mòmíngqímiào"
      },
      {
          "hskclass": "6",
          "japanese": "黙々としている",
          "chinese": "默默",
          "pinyin": "mòmò"
      },
      {
          "hskclass": "6",
          "japanese": "インク",
          "chinese": "墨水儿",
          "pinyin": "mòshuǐ er"
      },
      {
          "hskclass": "6",
          "japanese": "求める",
          "chinese": "谋求",
          "pinyin": "móuqiú"
      },
      {
          "hskclass": "6",
          "japanese": "顔立ち",
          "chinese": "模样",
          "pinyin": "múyàng"
      },
      {
          "hskclass": "6",
          "japanese": "母国語",
          "chinese": "母语",
          "pinyin": "mǔyǔ"
      },
      {
          "hskclass": "6",
          "japanese": "目の当たりにする",
          "chinese": "目睹",
          "pinyin": "mùdǔ"
      },
      {
          "hskclass": "6",
          "japanese": "目の表情",
          "chinese": "目光",
          "pinyin": "mùguāng"
      },
      {
          "hskclass": "6",
          "japanese": "風呂",
          "chinese": "沐浴",
          "pinyin": "mùyù"
      },
      {
          "hskclass": "6",
          "japanese": "得意である",
          "chinese": "拿手",
          "pinyin": "náshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "納得がいかない",
          "chinese": "纳闷儿",
          "pinyin": "nàmèn er"
      },
      {
          "hskclass": "6",
          "japanese": "長持ちする",
          "chinese": "耐用",
          "pinyin": "nàiyòng"
      },
      {
          "hskclass": "6",
          "japanese": "貴重である",
          "chinese": "难得",
          "pinyin": "nándé"
      },
      {
          "hskclass": "6",
          "japanese": "耐えられない",
          "chinese": "难堪",
          "pinyin": "nánkān"
      },
      {
          "hskclass": "6",
          "japanese": "避けられない",
          "chinese": "难免",
          "pinyin": "nánmiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "誠に見上げたものである",
          "chinese": "难能可贵",
          "pinyin": "nánnéngkěguì"
      },
      {
          "hskclass": "6",
          "japanese": "腹を立てる",
          "chinese": "恼火",
          "pinyin": "nǎohuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "内包",
          "chinese": "内涵",
          "pinyin": "nèihán"
      },
      {
          "hskclass": "6",
          "japanese": "内情",
          "chinese": "内幕",
          "pinyin": "nèimù"
      },
      {
          "hskclass": "6",
          "japanese": "内在的な",
          "chinese": "内在",
          "pinyin": "nèizài"
      },
      {
          "hskclass": "6",
          "japanese": "エネルギー",
          "chinese": "能量",
          "pinyin": "néngliàng"
      },
      {
          "hskclass": "6",
          "japanese": "ああ",
          "chinese": "嗯",
          "pinyin": "ń"
      },
      {
          "hskclass": "6",
          "japanese": "定める",
          "chinese": "拟定",
          "pinyin": "nǐdìng"
      },
      {
          "hskclass": "6",
          "japanese": "年度",
          "chinese": "年度",
          "pinyin": "niándù"
      },
      {
          "hskclass": "6",
          "japanese": "つまむ、挾む",
          "chinese": "捏",
          "pinyin": "niē"
      },
      {
          "hskclass": "6",
          "japanese": "ねじる、絞る",
          "chinese": "拧",
          "pinyin": "níng"
      },
      {
          "hskclass": "6",
          "japanese": "凝固",
          "chinese": "凝固",
          "pinyin": "nínggù"
      },
      {
          "hskclass": "6",
          "japanese": "凝集",
          "chinese": "凝聚",
          "pinyin": "níngjù"
      },
      {
          "hskclass": "6",
          "japanese": "凝视",
          "chinese": "凝视",
          "pinyin": "níngshì"
      },
      {
          "hskclass": "6",
          "japanese": "むしろ",
          "chinese": "宁肯",
          "pinyin": "nìngkěn"
      },
      {
          "hskclass": "6",
          "japanese": "かなり",
          "chinese": "宁愿",
          "pinyin": "nìngyuàn"
      },
      {
          "hskclass": "6",
          "japanese": "ボタン",
          "chinese": "纽扣儿",
          "pinyin": "niǔkòu er"
      },
      {
          "hskclass": "6",
          "japanese": "くるりと向きを変える",
          "chinese": "扭转",
          "pinyin": "niǔzhuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "濃い",
          "chinese": "浓厚",
          "pinyin": "nónghòu"
      },
      {
          "hskclass": "6",
          "japanese": "陰暦",
          "chinese": "农历",
          "pinyin": "nónglì"
      },
      {
          "hskclass": "6",
          "japanese": "奴隷",
          "chinese": "奴隶",
          "pinyin": "núlì"
      },
      {
          "hskclass": "6",
          "japanese": "動き",
          "chinese": "挪",
          "pinyin": "nuó"
      },
      {
          "hskclass": "6",
          "japanese": "呵責",
          "chinese": "虐待",
          "pinyin": "nüèdài"
      },
      {
          "hskclass": "6",
          "japanese": "まあ",
          "chinese": "哦",
          "pinyin": "ó"
      },
      {
          "hskclass": "6",
          "japanese": "殴打する",
          "chinese": "殴打",
          "pinyin": "ōudǎ"
      },
      {
          "hskclass": "6",
          "japanese": "ヨーロッパ",
          "chinese": "欧洲",
          "pinyin": "ōuzhōu"
      },
      {
          "hskclass": "6",
          "japanese": "吐く",
          "chinese": "呕吐",
          "pinyin": "ǒutù"
      },
      {
          "hskclass": "6",
          "japanese": "嘘",
          "chinese": "趴",
          "pinyin": "pā"
      },
      {
          "hskclass": "6",
          "japanese": "拒絶する",
          "chinese": "排斥",
          "pinyin": "páichì"
      },
      {
          "hskclass": "6",
          "japanese": "除外する",
          "chinese": "排除",
          "pinyin": "páichú"
      },
      {
          "hskclass": "6",
          "japanese": "放射",
          "chinese": "排放",
          "pinyin": "páifàng"
      },
      {
          "hskclass": "6",
          "japanese": "徘徊する",
          "chinese": "徘徊",
          "pinyin": "páihuái"
      },
      {
          "hskclass": "6",
          "japanese": "党派",
          "chinese": "派别",
          "pinyin": "pàibié"
      },
      {
          "hskclass": "6",
          "japanese": "派遣",
          "chinese": "派遣",
          "pinyin": "pàiqiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "クライミング",
          "chinese": "攀登",
          "pinyin": "pāndēng"
      },
      {
          "hskclass": "6",
          "japanese": "ぐるぐる回る",
          "chinese": "盘旋",
          "pinyin": "pánxuán"
      },
      {
          "hskclass": "6",
          "japanese": "そば",
          "chinese": "畔",
          "pinyin": "pàn"
      },
      {
          "hskclass": "6",
          "japanese": "判決",
          "chinese": "判决",
          "pinyin": "pànjué"
      },
      {
          "hskclass": "6",
          "japanese": "巨大な",
          "chinese": "庞大",
          "pinyin": "pángdà"
      },
      {
          "hskclass": "6",
          "japanese": "放棄",
          "chinese": "抛弃",
          "pinyin": "pāoqì"
      },
      {
          "hskclass": "6",
          "japanese": "泡沫",
          "chinese": "泡沫",
          "pinyin": "pàomò"
      },
      {
          "hskclass": "6",
          "japanese": "訓練し養成する",
          "chinese": "培训",
          "pinyin": "péixùn"
      },
      {
          "hskclass": "6",
          "japanese": "養い",
          "chinese": "培育",
          "pinyin": "péiyù"
      },
      {
          "hskclass": "6",
          "japanese": "配備する",
          "chinese": "配备",
          "pinyin": "pèibèi"
      },
      {
          "hskclass": "6",
          "japanese": "配偶者",
          "chinese": "配偶",
          "pinyin": "pèi'ǒu"
      },
      {
          "hskclass": "6",
          "japanese": "完全なセットにする",
          "chinese": "配套",
          "pinyin": "pèitào"
      },
      {
          "hskclass": "6",
          "japanese": "盆地",
          "chinese": "盆地",
          "pinyin": "péndì"
      },
      {
          "hskclass": "6",
          "japanese": "料理を作る",
          "chinese": "烹饪",
          "pinyin": "pēngrèn"
      },
      {
          "hskclass": "6",
          "japanese": "持つ、抱える",
          "chinese": "捧",
          "pinyin": "pěng"
      },
      {
          "hskclass": "6",
          "japanese": "割る",
          "chinese": "劈",
          "pinyin": "pī"
      },
      {
          "hskclass": "6",
          "japanese": "卸し売りする",
          "chinese": "批发",
          "pinyin": "pīfā"
      },
      {
          "hskclass": "6",
          "japanese": "批判",
          "chinese": "批判",
          "pinyin": "pīpàn"
      },
      {
          "hskclass": "6",
          "japanese": "疲労困憊している",
          "chinese": "疲惫",
          "pinyin": "píbèi"
      },
      {
          "hskclass": "6",
          "japanese": "革",
          "chinese": "皮革",
          "pinyin": "pígé"
      },
      {
          "hskclass": "6",
          "japanese": "くたびれて元気がない",
          "chinese": "疲倦",
          "pinyin": "píjuàn"
      },
      {
          "hskclass": "6",
          "japanese": "気性",
          "chinese": "脾气",
          "pinyin": "píqì"
      },
      {
          "hskclass": "6",
          "japanese": "尻",
          "chinese": "屁股",
          "pinyin": "pìgu"
      },
      {
          "hskclass": "6",
          "japanese": "例えば",
          "chinese": "譬如",
          "pinyin": "pìrú"
      },
      {
          "hskclass": "6",
          "japanese": "偏差",
          "chinese": "偏差",
          "pinyin": "piānchā"
      },
      {
          "hskclass": "6",
          "japanese": "偏見",
          "chinese": "偏见",
          "pinyin": "piānjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "辺ぴである",
          "chinese": "偏僻",
          "pinyin": "piānpì"
      },
      {
          "hskclass": "6",
          "japanese": "わざと、あくまでも",
          "chinese": "偏偏",
          "pinyin": "piānpiān"
      },
      {
          "hskclass": "6",
          "japanese": "断片",
          "chinese": "片段",
          "pinyin": "piànduàn"
      },
      {
          "hskclass": "6",
          "japanese": "方時",
          "chinese": "片刻",
          "pinyin": "piànkè"
      },
      {
          "hskclass": "6",
          "japanese": "浮かぶ、漂う",
          "chinese": "漂浮",
          "pinyin": "piāofú"
      },
      {
          "hskclass": "6",
          "japanese": "ひらひら翻る",
          "chinese": "飘扬",
          "pinyin": "piāoyáng"
      },
      {
          "hskclass": "6",
          "japanese": "力いっぱい頑張る",
          "chinese": "拼搏",
          "pinyin": "pīnbó"
      },
      {
          "hskclass": "6",
          "japanese": "必死に",
          "chinese": "拼命",
          "pinyin": "pīnmìng"
      },
      {
          "hskclass": "6",
          "japanese": "貧しい",
          "chinese": "贫乏",
          "pinyin": "pínfá"
      },
      {
          "hskclass": "6",
          "japanese": "頻繁",
          "chinese": "频繁",
          "pinyin": "pínfán"
      },
      {
          "hskclass": "6",
          "japanese": "貧しい",
          "chinese": "贫困",
          "pinyin": "pínkùn"
      },
      {
          "hskclass": "6",
          "japanese": "周波数",
          "chinese": "频率",
          "pinyin": "pínlǜ"
      },
      {
          "hskclass": "6",
          "japanese": "味",
          "chinese": "品尝",
          "pinyin": "pǐncháng"
      },
      {
          "hskclass": "6",
          "japanese": "道義",
          "chinese": "品德",
          "pinyin": "pǐndé"
      },
      {
          "hskclass": "6",
          "japanese": "行動",
          "chinese": "品行",
          "pinyin": "pǐnxíng"
      },
      {
          "hskclass": "6",
          "japanese": "品質",
          "chinese": "品质",
          "pinyin": "pǐnzhí"
      },
      {
          "hskclass": "6",
          "japanese": "一般",
          "chinese": "平凡",
          "pinyin": "píngfán"
      },
      {
          "hskclass": "6",
          "japanese": "評価し見積もる",
          "chinese": "评估",
          "pinyin": "pínggū"
      },
      {
          "hskclass": "6",
          "japanese": "評論",
          "chinese": "评论",
          "pinyin": "pínglùn"
      },
      {
          "hskclass": "6",
          "japanese": "平面",
          "chinese": "平面",
          "pinyin": "píngmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "平坦",
          "chinese": "平坦",
          "pinyin": "píngtǎn"
      },
      {
          "hskclass": "6",
          "japanese": "並行",
          "chinese": "平行",
          "pinyin": "píngxíng"
      },
      {
          "hskclass": "6",
          "japanese": "平原",
          "chinese": "平原",
          "pinyin": "píngyuán"
      },
      {
          "hskclass": "6",
          "japanese": "障壁",
          "chinese": "屏障",
          "pinyin": "píngzhàng"
      },
      {
          "hskclass": "6",
          "japanese": "坂",
          "chinese": "坡",
          "pinyin": "pō"
      },
      {
          "hskclass": "6",
          "japanese": "ぶちまける",
          "chinese": "泼",
          "pinyin": "pō"
      },
      {
          "hskclass": "6",
          "japanese": "不公平である",
          "chinese": "颇",
          "pinyin": "pǒ"
      },
      {
          "hskclass": "6",
          "japanese": "矢も盾もたまらず",
          "chinese": "迫不及待",
          "pinyin": "pòbùjídài"
      },
      {
          "hskclass": "6",
          "japanese": "迫害",
          "chinese": "迫害",
          "pinyin": "pòhài"
      },
      {
          "hskclass": "6",
          "japanese": "慣例を破る",
          "chinese": "破例",
          "pinyin": "pòlì"
      },
      {
          "hskclass": "6",
          "japanese": "大胆さ",
          "chinese": "魄力",
          "pinyin": "pòlì"
      },
      {
          "hskclass": "6",
          "japanese": "飛びかかる",
          "chinese": "扑",
          "pinyin": "pū"
      },
      {
          "hskclass": "6",
          "japanese": "ショップ",
          "chinese": "铺",
          "pinyin": "pù"
      },
      {
          "hskclass": "6",
          "japanese": "普及",
          "chinese": "普及",
          "pinyin": "pǔjí"
      },
      {
          "hskclass": "6",
          "japanese": "質素である",
          "chinese": "朴实",
          "pinyin": "pǔshí"
      },
      {
          "hskclass": "6",
          "japanese": "滝",
          "chinese": "瀑布",
          "pinyin": "pùbù"
      },
      {
          "hskclass": "6",
          "japanese": "いじめる",
          "chinese": "欺负",
          "pinyin": "qīfù"
      },
      {
          "hskclass": "6",
          "japanese": "物悲しい",
          "chinese": "凄凉",
          "pinyin": "qīliáng"
      },
      {
          "hskclass": "6",
          "japanese": "だます",
          "chinese": "欺骗",
          "pinyin": "qīpiàn"
      },
      {
          "hskclass": "6",
          "japanese": "期待する",
          "chinese": "期望",
          "pinyin": "qīwàng"
      },
      {
          "hskclass": "6",
          "japanese": "期限",
          "chinese": "期限",
          "pinyin": "qíxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "奇妙",
          "chinese": "奇妙",
          "pinyin": "qímiào"
      },
      {
          "hskclass": "6",
          "japanese": "チャイナドレス",
          "chinese": "旗袍",
          "pinyin": "qípáo"
      },
      {
          "hskclass": "6",
          "japanese": "すべてそろっている",
          "chinese": "齐全",
          "pinyin": "qíquán"
      },
      {
          "hskclass": "6",
          "japanese": "差別視する",
          "chinese": "歧视",
          "pinyin": "qíshì"
      },
      {
          "hskclass": "6",
          "japanese": "努力を作り",
          "chinese": "齐心协力",
          "pinyin": "qíxīn xiélì"
      },
      {
          "hskclass": "6",
          "japanese": "旗",
          "chinese": "旗帜",
          "pinyin": "qízhì"
      },
      {
          "hskclass": "6",
          "japanese": "草稿を作る",
          "chinese": "起草",
          "pinyin": "qǐcǎo"
      },
      {
          "hskclass": "6",
          "japanese": "出発する",
          "chinese": "启程",
          "pinyin": "qǐchéng"
      },
      {
          "hskclass": "6",
          "japanese": "初め",
          "chinese": "起初",
          "pinyin": "qǐchū"
      },
      {
          "hskclass": "6",
          "japanese": "起伏する",
          "chinese": "起伏",
          "pinyin": "qǐfú"
      },
      {
          "hskclass": "6",
          "japanese": "物もらい",
          "chinese": "乞丐",
          "pinyin": "qǐgài"
      },
      {
          "hskclass": "6",
          "japanese": "騒ぎ立てる",
          "chinese": "起哄",
          "pinyin": "qǐhòng"
      },
      {
          "hskclass": "6",
          "japanese": "最小限度の",
          "chinese": "起码",
          "pinyin": "qǐmǎ"
      },
      {
          "hskclass": "6",
          "japanese": "教え示す",
          "chinese": "启示",
          "pinyin": "qǐshì"
      },
      {
          "hskclass": "6",
          "japanese": "お知らせ",
          "chinese": "启事",
          "pinyin": "qǐshì"
      },
      {
          "hskclass": "6",
          "japanese": "武力革命を起こす",
          "chinese": "起义",
          "pinyin": "qǐyì"
      },
      {
          "hskclass": "6",
          "japanese": "そんなばかなことがあるか",
          "chinese": "岂有此理",
          "pinyin": "qǐyǒucǐlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "起源",
          "chinese": "起源",
          "pinyin": "qǐyuán"
      },
      {
          "hskclass": "6",
          "japanese": "器材",
          "chinese": "器材",
          "pinyin": "qìcái"
      },
      {
          "hskclass": "6",
          "japanese": "気概",
          "chinese": "气概",
          "pinyin": "qìgài"
      },
      {
          "hskclass": "6",
          "japanese": "気功",
          "chinese": "气功",
          "pinyin": "qìgōng"
      },
      {
          "hskclass": "6",
          "japanese": "器官",
          "chinese": "器官",
          "pinyin": "qìguān"
      },
      {
          "hskclass": "6",
          "japanese": "今迄",
          "chinese": "迄今为止",
          "pinyin": "qìjīn wéizhǐ"
      },
      {
          "hskclass": "6",
          "japanese": "気迫",
          "chinese": "气魄",
          "pinyin": "qìpò"
      },
      {
          "hskclass": "6",
          "japanese": "顔色",
          "chinese": "气色",
          "pinyin": "qìsè"
      },
      {
          "hskclass": "6",
          "japanese": "気勢、気迫",
          "chinese": "气势",
          "pinyin": "qìshì"
      },
      {
          "hskclass": "6",
          "japanese": "におい、香り",
          "chinese": "气味",
          "pinyin": "qìwèi"
      },
      {
          "hskclass": "6",
          "japanese": "気象",
          "chinese": "气象",
          "pinyin": "qìxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "気圧",
          "chinese": "气压",
          "pinyin": "qìyā"
      },
      {
          "hskclass": "6",
          "japanese": "押さえる",
          "chinese": "掐",
          "pinyin": "qiā"
      },
      {
          "hskclass": "6",
          "japanese": "適当である",
          "chinese": "恰当",
          "pinyin": "qiàdàng"
      },
      {
          "hskclass": "6",
          "japanese": "ちょうど適当である",
          "chinese": "恰到好处",
          "pinyin": "qiàdàohǎochù"
      },
      {
          "hskclass": "6",
          "japanese": "幸いに",
          "chinese": "恰巧",
          "pinyin": "qiàqiǎo"
      },
      {
          "hskclass": "6",
          "japanese": "面談する",
          "chinese": "洽谈",
          "pinyin": "qiàtán"
      },
      {
          "hskclass": "6",
          "japanese": "かかわり合う",
          "chinese": "牵扯",
          "pinyin": "qiānchě"
      },
      {
          "hskclass": "6",
          "japanese": "調印する",
          "chinese": "签订",
          "pinyin": "qiāndìng"
      },
      {
          "hskclass": "6",
          "japanese": "あらゆる手段",
          "chinese": "千方百计",
          "pinyin": "qiānfāngbǎijì"
      },
      {
          "hskclass": "6",
          "japanese": "妥協する",
          "chinese": "迁就",
          "pinyin": "qiānjiù"
      },
      {
          "hskclass": "6",
          "japanese": "署名する",
          "chinese": "签署",
          "pinyin": "qiānshǔ"
      },
      {
          "hskclass": "6",
          "japanese": "移動する",
          "chinese": "迁徙",
          "pinyin": "qiānxǐ"
      },
      {
          "hskclass": "6",
          "japanese": "謙虚",
          "chinese": "谦逊",
          "pinyin": "qiānxùn"
      },
      {
          "hskclass": "6",
          "japanese": "牽制する",
          "chinese": "牵制",
          "pinyin": "qiānzhì"
      },
      {
          "hskclass": "6",
          "japanese": "前景",
          "chinese": "前景",
          "pinyin": "qiánjǐng"
      },
      {
          "hskclass": "6",
          "japanese": "潜在力",
          "chinese": "潜力",
          "pinyin": "qiánlì"
      },
      {
          "hskclass": "6",
          "japanese": "潜水",
          "chinese": "潜水",
          "pinyin": "qiánshuǐ"
      },
      {
          "hskclass": "6",
          "japanese": "前提",
          "chinese": "前提",
          "pinyin": "qiántí"
      },
      {
          "hskclass": "6",
          "japanese": "知らず知らずのうちに感化される",
          "chinese": "潜移默化",
          "pinyin": "qiányímòhuà"
      },
      {
          "hskclass": "6",
          "japanese": "糾弾する",
          "chinese": "谴责",
          "pinyin": "qiǎnzé"
      },
      {
          "hskclass": "6",
          "japanese": "略奪する",
          "chinese": "抢劫",
          "pinyin": "qiǎngjié"
      },
      {
          "hskclass": "6",
          "japanese": "強制する",
          "chinese": "强制",
          "pinyin": "qiángzhì"
      },
      {
          "hskclass": "6",
          "japanese": "緊急措置を取る",
          "chinese": "抢救",
          "pinyin": "qiǎngjiù"
      },
      {
          "hskclass": "6",
          "japanese": "強迫",
          "chinese": "强迫",
          "pinyin": "qiǎngpò"
      },
      {
          "hskclass": "6",
          "japanese": "橋梁",
          "chinese": "桥梁",
          "pinyin": "qiáoliáng"
      },
      {
          "hskclass": "6",
          "japanese": "浮き上がる",
          "chinese": "翘",
          "pinyin": "qiào"
      },
      {
          "hskclass": "6",
          "japanese": "根気よく物事をする",
          "chinese": "锲而不舍",
          "pinyin": "qiè'érbùshě"
      },
      {
          "hskclass": "6",
          "japanese": "切実",
          "chinese": "切实",
          "pinyin": "qièshí"
      },
      {
          "hskclass": "6",
          "japanese": "侵略",
          "chinese": "侵犯",
          "pinyin": "qīnfàn"
      },
      {
          "hskclass": "6",
          "japanese": "感服する",
          "chinese": "钦佩",
          "pinyin": "qīnpèi"
      },
      {
          "hskclass": "6",
          "japanese": "とても温かい",
          "chinese": "亲热",
          "pinyin": "qīnrè"
      },
      {
          "hskclass": "6",
          "japanese": "自分自身で",
          "chinese": "亲身",
          "pinyin": "qīnshēn"
      },
      {
          "hskclass": "6",
          "japanese": "勤勉で倹約する",
          "chinese": "勤俭",
          "pinyin": "qínjiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "勤勉",
          "chinese": "勤恳",
          "pinyin": "qínkěn"
      },
      {
          "hskclass": "6",
          "japanese": "水素",
          "chinese": "氢",
          "pinyin": "qīng"
      },
      {
          "hskclass": "6",
          "japanese": "澄みわたっている",
          "chinese": "清澈",
          "pinyin": "qīngchè"
      },
      {
          "hskclass": "6",
          "japanese": "早朝",
          "chinese": "清晨",
          "pinyin": "qīngchén"
      },
      {
          "hskclass": "6",
          "japanese": "一掃する",
          "chinese": "清除",
          "pinyin": "qīngchú"
      },
      {
          "hskclass": "6",
          "japanese": "造作なくできる",
          "chinese": "轻而易举",
          "pinyin": "qīng ér yì jǔ"
      },
      {
          "hskclass": "6",
          "japanese": "清潔である",
          "chinese": "清洁",
          "pinyin": "qīngjié"
      },
      {
          "hskclass": "6",
          "japanese": "細かく整理する",
          "chinese": "清理",
          "pinyin": "qīnglǐ"
      },
      {
          "hskclass": "6",
          "japanese": "耳を傾ける",
          "chinese": "倾听",
          "pinyin": "qīngtīng"
      },
      {
          "hskclass": "6",
          "japanese": "はっきりしている",
          "chinese": "清晰",
          "pinyin": "qīngxī"
      },
      {
          "hskclass": "6",
          "japanese": "傾向",
          "chinese": "倾向",
          "pinyin": "qīngxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "傾斜する",
          "chinese": "倾斜",
          "pinyin": "qīngxié"
      },
      {
          "hskclass": "6",
          "japanese": "明晰である",
          "chinese": "清醒",
          "pinyin": "qīngxǐng"
      },
      {
          "hskclass": "6",
          "japanese": "イスラム教徒",
          "chinese": "清真",
          "pinyin": "qīngzhēn"
      },
      {
          "hskclass": "6",
          "japanese": "情報",
          "chinese": "情报",
          "pinyin": "qíngbào"
      },
      {
          "hskclass": "6",
          "japanese": "いきさつ",
          "chinese": "情节",
          "pinyin": "qíngjié"
      },
      {
          "hskclass": "6",
          "japanese": "晴朗である",
          "chinese": "晴朗",
          "pinyin": "qínglǎng"
      },
      {
          "hskclass": "6",
          "japanese": "情理",
          "chinese": "情理",
          "pinyin": "qínglǐ"
      },
      {
          "hskclass": "6",
          "japanese": "状況",
          "chinese": "情形",
          "pinyin": "qíngxíng"
      },
      {
          "hskclass": "6",
          "japanese": "招待状",
          "chinese": "请柬",
          "pinyin": "qǐngjiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "教えを請う",
          "chinese": "请教",
          "pinyin": "qǐngjiào"
      },
      {
          "hskclass": "6",
          "japanese": "指示を仰ぐ",
          "chinese": "请示",
          "pinyin": "qǐngshì"
      },
      {
          "hskclass": "6",
          "japanese": "招待状",
          "chinese": "请帖",
          "pinyin": "qǐng tiě"
      },
      {
          "hskclass": "6",
          "japanese": "丘陵",
          "chinese": "丘陵",
          "pinyin": "qiūlíng"
      },
      {
          "hskclass": "6",
          "japanese": "区分",
          "chinese": "区分",
          "pinyin": "qūfēn"
      },
      {
          "hskclass": "6",
          "japanese": "屈服",
          "chinese": "屈服",
          "pinyin": "qūfú"
      },
      {
          "hskclass": "6",
          "japanese": "区域",
          "chinese": "区域",
          "pinyin": "qūyù"
      },
      {
          "hskclass": "6",
          "japanese": "曲折",
          "chinese": "曲折",
          "pinyin": "qūzhé"
      },
      {
          "hskclass": "6",
          "japanese": "駆逐する",
          "chinese": "驱逐",
          "pinyin": "qūzhú"
      },
      {
          "hskclass": "6",
          "japanese": "用水路",
          "chinese": "渠道",
          "pinyin": "qúdào"
      },
      {
          "hskclass": "6",
          "japanese": "取締る",
          "chinese": "取缔",
          "pinyin": "qǔdì"
      },
      {
          "hskclass": "6",
          "japanese": "歌",
          "chinese": "曲子",
          "pinyin": "qǔzi"
      },
      {
          "hskclass": "6",
          "japanese": "趣味",
          "chinese": "趣味",
          "pinyin": "qùwèi"
      },
      {
          "hskclass": "6",
          "japanese": "策略",
          "chinese": "圈套",
          "pinyin": "quāntào"
      },
      {
          "hskclass": "6",
          "japanese": "量る",
          "chinese": "权衡",
          "pinyin": "quánhéng"
      },
      {
          "hskclass": "6",
          "japanese": "全曲面",
          "chinese": "全局",
          "pinyin": "quánjú"
      },
      {
          "hskclass": "6",
          "japanese": "全力を傾けて事に当たる",
          "chinese": "全力以赴",
          "pinyin": "quánlì yǐ fù"
      },
      {
          "hskclass": "6",
          "japanese": "拳",
          "chinese": "拳头",
          "pinyin": "quántóu"
      },
      {
          "hskclass": "6",
          "japanese": "権威",
          "chinese": "权威",
          "pinyin": "quánwēi"
      },
      {
          "hskclass": "6",
          "japanese": "権益",
          "chinese": "权益",
          "pinyin": "quányì"
      },
      {
          "hskclass": "6",
          "japanese": "犬",
          "chinese": "犬",
          "pinyin": "quǎn"
      },
      {
          "hskclass": "6",
          "japanese": "決壊したところ",
          "chinese": "缺口",
          "pinyin": "quēkǒu"
      },
      {
          "hskclass": "6",
          "japanese": "欠席する",
          "chinese": "缺席",
          "pinyin": "quēxí"
      },
      {
          "hskclass": "6",
          "japanese": "欠陥",
          "chinese": "缺陷",
          "pinyin": "quēxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "びっこをひく",
          "chinese": "瘸",
          "pinyin": "qué"
      },
      {
          "hskclass": "6",
          "japanese": "確保する",
          "chinese": "确保",
          "pinyin": "quèbǎo"
      },
      {
          "hskclass": "6",
          "japanese": "確立する",
          "chinese": "确立",
          "pinyin": "quèlì"
      },
      {
          "hskclass": "6",
          "japanese": "適当である",
          "chinese": "确切",
          "pinyin": "quèqiè"
      },
      {
          "hskclass": "6",
          "japanese": "確信する",
          "chinese": "确信",
          "pinyin": "quèxìn"
      },
      {
          "hskclass": "6",
          "japanese": "群衆",
          "chinese": "群众",
          "pinyin": "qúnzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "染める",
          "chinese": "染",
          "pinyin": "rǎn"
      },
      {
          "hskclass": "6",
          "japanese": "譲歩する",
          "chinese": "让步",
          "pinyin": "ràngbù"
      },
      {
          "hskclass": "6",
          "japanese": "許す",
          "chinese": "饶恕",
          "pinyin": "ráoshù"
      },
      {
          "hskclass": "6",
          "japanese": "かき乱す",
          "chinese": "扰乱",
          "pinyin": "rǎoluàn"
      },
      {
          "hskclass": "6",
          "japanese": "災いを招く",
          "chinese": "惹祸",
          "pinyin": "rěhuò"
      },
      {
          "hskclass": "6",
          "japanese": "熱い涙",
          "chinese": "热泪盈眶",
          "pinyin": "rèlèi yíng kuàng"
      },
      {
          "hskclass": "6",
          "japanese": "人気のあるもの",
          "chinese": "热门",
          "pinyin": "rèmén"
      },
      {
          "hskclass": "6",
          "japanese": "情け深い",
          "chinese": "仁慈",
          "pinyin": "réncí"
      },
      {
          "hskclass": "6",
          "japanese": "人道",
          "chinese": "人道",
          "pinyin": "réndào"
      },
      {
          "hskclass": "6",
          "japanese": "人格",
          "chinese": "人格",
          "pinyin": "réngé"
      },
      {
          "hskclass": "6",
          "japanese": "人工的な",
          "chinese": "人工",
          "pinyin": "réngōng"
      },
      {
          "hskclass": "6",
          "japanese": "家庭",
          "chinese": "人家",
          "pinyin": "rénjiā"
      },
      {
          "hskclass": "6",
          "japanese": "人間",
          "chinese": "人间",
          "pinyin": "rénjiān"
      },
      {
          "hskclass": "6",
          "japanese": "人々",
          "chinese": "人士",
          "pinyin": "rénshì"
      },
      {
          "hskclass": "6",
          "japanese": "人為的な",
          "chinese": "人为",
          "pinyin": "rénwéi"
      },
      {
          "hskclass": "6",
          "japanese": "人間性",
          "chinese": "人性",
          "pinyin": "rénxìng"
      },
      {
          "hskclass": "6",
          "japanese": "人質",
          "chinese": "人质",
          "pinyin": "rénzhì"
      },
      {
          "hskclass": "6",
          "japanese": "忍耐",
          "chinese": "忍耐",
          "pinyin": "rěnnài"
      },
      {
          "hskclass": "6",
          "japanese": "我慢する",
          "chinese": "忍受",
          "pinyin": "rěnshòu"
      },
      {
          "hskclass": "6",
          "japanese": "認定する",
          "chinese": "认定",
          "pinyin": "rèndìng"
      },
      {
          "hskclass": "6",
          "japanese": "許可する",
          "chinese": "认可",
          "pinyin": "rènkě"
      },
      {
          "hskclass": "6",
          "japanese": "任命",
          "chinese": "任命",
          "pinyin": "rènmìng"
      },
      {
          "hskclass": "6",
          "japanese": "わがままである",
          "chinese": "任性",
          "pinyin": "rènxìng"
      },
      {
          "hskclass": "6",
          "japanese": "任意に",
          "chinese": "任意",
          "pinyin": "rènyì"
      },
      {
          "hskclass": "6",
          "japanese": "責任重大である",
          "chinese": "任重道远",
          "pinyin": "rènzhòngdàoyuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "依然として",
          "chinese": "仍旧",
          "pinyin": "réngjiù"
      },
      {
          "hskclass": "6",
          "japanese": "日進月歩する",
          "chinese": "日新月异",
          "pinyin": "rìxīnyuèyì"
      },
      {
          "hskclass": "6",
          "japanese": "日増しに",
          "chinese": "日益",
          "pinyin": "rìyì"
      },
      {
          "hskclass": "6",
          "japanese": "溶解する",
          "chinese": "溶解",
          "pinyin": "róngjiě"
      },
      {
          "hskclass": "6",
          "japanese": "容貌",
          "chinese": "容貌",
          "pinyin": "róngmào"
      },
      {
          "hskclass": "6",
          "japanese": "収容する",
          "chinese": "容纳",
          "pinyin": "róngnà"
      },
      {
          "hskclass": "6",
          "japanese": "容器",
          "chinese": "容器",
          "pinyin": "róngqì"
      },
      {
          "hskclass": "6",
          "japanese": "解け合っている",
          "chinese": "融洽",
          "pinyin": "róngqià"
      },
      {
          "hskclass": "6",
          "japanese": "容認",
          "chinese": "容忍",
          "pinyin": "róngrěn"
      },
      {
          "hskclass": "6",
          "japanese": "揉む",
          "chinese": "揉",
          "pinyin": "róu"
      },
      {
          "hskclass": "6",
          "japanese": "柔和",
          "chinese": "柔和",
          "pinyin": "róuhé"
      },
      {
          "hskclass": "6",
          "japanese": "弱点",
          "chinese": "弱点",
          "pinyin": "ruòdiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "若干",
          "chinese": "若干",
          "pinyin": "ruògān"
      },
      {
          "hskclass": "6",
          "japanese": "嘘をつく",
          "chinese": "撒谎",
          "pinyin": "sāhuǎng"
      },
      {
          "hskclass": "6",
          "japanese": "顎",
          "chinese": "腮",
          "pinyin": "sāi"
      },
      {
          "hskclass": "6",
          "japanese": "三角形",
          "chinese": "三角",
          "pinyin": "sānjiǎo"
      },
      {
          "hskclass": "6",
          "japanese": "散文",
          "chinese": "散文",
          "pinyin": "sǎnwén"
      },
      {
          "hskclass": "6",
          "japanese": "散髪",
          "chinese": "散发",
          "pinyin": "sànfà"
      },
      {
          "hskclass": "6",
          "japanese": "喪失",
          "chinese": "丧失",
          "pinyin": "sàngshī"
      },
      {
          "hskclass": "6",
          "japanese": "兄嫁",
          "chinese": "嫂子",
          "pinyin": "sǎozi"
      },
      {
          "hskclass": "6",
          "japanese": "色彩",
          "chinese": "色彩",
          "pinyin": "sècǎi"
      },
      {
          "hskclass": "6",
          "japanese": "ブレーキ",
          "chinese": "刹车",
          "pinyin": "shāchē"
      },
      {
          "hskclass": "6",
          "japanese": "何",
          "chinese": "啥",
          "pinyin": "shà"
      },
      {
          "hskclass": "6",
          "japanese": "ふるいにかける",
          "chinese": "筛选",
          "pinyin": "shāixuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "山脈",
          "chinese": "山脉",
          "pinyin": "shānmài"
      },
      {
          "hskclass": "6",
          "japanese": "フリッカー",
          "chinese": "闪烁",
          "pinyin": "shǎnshuò"
      },
      {
          "hskclass": "6",
          "japanese": "…に堪能である",
          "chinese": "擅长",
          "pinyin": "shàncháng"
      },
      {
          "hskclass": "6",
          "japanese": "勝手に",
          "chinese": "擅自",
          "pinyin": "shànzì"
      },
      {
          "hskclass": "6",
          "japanese": "扇子",
          "chinese": "扇子",
          "pinyin": "shànzi"
      },
      {
          "hskclass": "6",
          "japanese": "商標",
          "chinese": "商标",
          "pinyin": "shāngbiāo"
      },
      {
          "hskclass": "6",
          "japanese": "心を悩ます",
          "chinese": "伤脑筋",
          "pinyin": "shāng nǎojīn"
      },
      {
          "hskclass": "6",
          "japanese": "上級",
          "chinese": "上级",
          "pinyin": "shàngjí"
      },
      {
          "hskclass": "6",
          "japanese": "向上心",
          "chinese": "上进心",
          "pinyin": "shàngjìn xīn"
      },
      {
          "hskclass": "6",
          "japanese": "前任",
          "chinese": "上任",
          "pinyin": "shàngrèn"
      },
      {
          "hskclass": "6",
          "japanese": "癖になる",
          "chinese": "上瘾",
          "pinyin": "shàngyǐn"
      },
      {
          "hskclass": "6",
          "japanese": "上流",
          "chinese": "上游",
          "pinyin": "shàngyóu"
      },
      {
          "hskclass": "6",
          "japanese": "先、端",
          "chinese": "梢",
          "pinyin": "shāo"
      },
      {
          "hskclass": "6",
          "japanese": "持って行く",
          "chinese": "捎",
          "pinyin": "shāo"
      },
      {
          "hskclass": "6",
          "japanese": "偵察する",
          "chinese": "哨",
          "pinyin": "shào"
      },
      {
          "hskclass": "6",
          "japanese": "贅沢である",
          "chinese": "奢侈",
          "pinyin": "shēchǐ"
      },
      {
          "hskclass": "6",
          "japanese": "関連する",
          "chinese": "涉及",
          "pinyin": "shèjí"
      },
      {
          "hskclass": "6",
          "japanese": "設立",
          "chinese": "设立",
          "pinyin": "shèlì"
      },
      {
          "hskclass": "6",
          "japanese": "コミュニティ",
          "chinese": "社区",
          "pinyin": "shèqū"
      },
      {
          "hskclass": "6",
          "japanese": "摂取する",
          "chinese": "摄取",
          "pinyin": "shèqǔ"
      },
      {
          "hskclass": "6",
          "japanese": "摂氏",
          "chinese": "摄氏度",
          "pinyin": "shèshìdù"
      },
      {
          "hskclass": "6",
          "japanese": "仮想する",
          "chinese": "设想",
          "pinyin": "shèxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "設置する",
          "chinese": "设置",
          "pinyin": "shèzhì"
      },
      {
          "hskclass": "6",
          "japanese": "難しくて理解しにくい",
          "chinese": "深奥",
          "pinyin": "shēn'ào"
      },
      {
          "hskclass": "6",
          "japanese": "申告する",
          "chinese": "申报",
          "pinyin": "shēnbào"
      },
      {
          "hskclass": "6",
          "japanese": "深い",
          "chinese": "深沉",
          "pinyin": "shēnchén"
      },
      {
          "hskclass": "6",
          "japanese": "相手を深く思う気持ち",
          "chinese": "深情厚谊",
          "pinyin": "shēnqíng hòuyì"
      },
      {
          "hskclass": "6",
          "japanese": "紳士",
          "chinese": "绅士",
          "pinyin": "shēnshì"
      },
      {
          "hskclass": "6",
          "japanese": "うめき声を上げる",
          "chinese": "呻吟",
          "pinyin": "shēnyín"
      },
      {
          "hskclass": "6",
          "japanese": "たいへん奇妙である",
          "chinese": "神奇",
          "pinyin": "shénqí"
      },
      {
          "hskclass": "6",
          "japanese": "表情",
          "chinese": "神气",
          "pinyin": "shénqì"
      },
      {
          "hskclass": "6",
          "japanese": "顔つき",
          "chinese": "神情",
          "pinyin": "shénqíng"
      },
      {
          "hskclass": "6",
          "japanese": "面持ち",
          "chinese": "神色",
          "pinyin": "shénsè"
      },
      {
          "hskclass": "6",
          "japanese": "神聖である",
          "chinese": "神圣",
          "pinyin": "shénshèng"
      },
      {
          "hskclass": "6",
          "japanese": "表情や態度",
          "chinese": "神态",
          "pinyin": "shéntài"
      },
      {
          "hskclass": "6",
          "japanese": "仙人",
          "chinese": "神仙",
          "pinyin": "shénxiān"
      },
      {
          "hskclass": "6",
          "japanese": "審査する",
          "chinese": "审查",
          "pinyin": "shěnchá"
      },
      {
          "hskclass": "6",
          "japanese": "審理する",
          "chinese": "审理",
          "pinyin": "shěnlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "美醜を見分ける",
          "chinese": "审美",
          "pinyin": "shěnměi"
      },
      {
          "hskclass": "6",
          "japanese": "裁判する",
          "chinese": "审判",
          "pinyin": "shěnpàn"
      },
      {
          "hskclass": "6",
          "japanese": "浸透する",
          "chinese": "渗透",
          "pinyin": "shèntòu"
      },
      {
          "hskclass": "6",
          "japanese": "慎重",
          "chinese": "慎重",
          "pinyin": "shènzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "家畜",
          "chinese": "牲畜",
          "pinyin": "shēngchù"
      },
      {
          "hskclass": "6",
          "japanese": "生存",
          "chinese": "生存",
          "pinyin": "shēngcún"
      },
      {
          "hskclass": "6",
          "japanese": "生気",
          "chinese": "生机",
          "pinyin": "shēngjī"
      },
      {
          "hskclass": "6",
          "japanese": "生理",
          "chinese": "生理",
          "pinyin": "shēnglǐ"
      },
      {
          "hskclass": "6",
          "japanese": "声明",
          "chinese": "声明",
          "pinyin": "shēngmíng"
      },
      {
          "hskclass": "6",
          "japanese": "勢い",
          "chinese": "声势",
          "pinyin": "shēngshì"
      },
      {
          "hskclass": "6",
          "japanese": "慣れない",
          "chinese": "生疏",
          "pinyin": "shēngshū"
      },
      {
          "hskclass": "6",
          "japanese": "生態",
          "chinese": "生态",
          "pinyin": "shēngtài"
      },
      {
          "hskclass": "6",
          "japanese": "生物",
          "chinese": "生物",
          "pinyin": "shēngwù"
      },
      {
          "hskclass": "6",
          "japanese": "効力が表われる",
          "chinese": "生效",
          "pinyin": "shēngxiào"
      },
      {
          "hskclass": "6",
          "japanese": "さびが出る",
          "chinese": "生锈",
          "pinyin": "shēng xiù"
      },
      {
          "hskclass": "6",
          "japanese": "生育",
          "chinese": "生育",
          "pinyin": "shēngyù"
      },
      {
          "hskclass": "6",
          "japanese": "評判",
          "chinese": "声誉",
          "pinyin": "shēngyù"
      },
      {
          "hskclass": "6",
          "japanese": "省都",
          "chinese": "省会",
          "pinyin": "shěnghuì"
      },
      {
          "hskclass": "6",
          "japanese": "たくさん産出する",
          "chinese": "盛产",
          "pinyin": "shèngchǎn"
      },
      {
          "hskclass": "6",
          "japanese": "勝負",
          "chinese": "胜负",
          "pinyin": "shèng fù"
      },
      {
          "hskclass": "6",
          "japanese": "満開になる",
          "chinese": "盛开",
          "pinyin": "shèngkāi"
      },
      {
          "hskclass": "6",
          "japanese": "厚情",
          "chinese": "盛情",
          "pinyin": "shèngqíng"
      },
      {
          "hskclass": "6",
          "japanese": "盛んに行なわれる",
          "chinese": "盛行",
          "pinyin": "shèngxíng"
      },
      {
          "hskclass": "6",
          "japanese": "模範",
          "chinese": "师范",
          "pinyin": "shīfàn"
      },
      {
          "hskclass": "6",
          "japanese": "与える",
          "chinese": "施加",
          "pinyin": "shījiā"
      },
      {
          "hskclass": "6",
          "japanese": "死体",
          "chinese": "尸体",
          "pinyin": "shītǐ"
      },
      {
          "hskclass": "6",
          "japanese": "ミスをする",
          "chinese": "失误",
          "pinyin": "shīwù"
      },
      {
          "hskclass": "6",
          "japanese": "発揮する",
          "chinese": "施展",
          "pinyin": "shīzhǎn"
      },
      {
          "hskclass": "6",
          "japanese": "ライオン",
          "chinese": "狮子",
          "pinyin": "shīzi"
      },
      {
          "hskclass": "6",
          "japanese": "失踪する",
          "chinese": "失踪",
          "pinyin": "shīzōng"
      },
      {
          "hskclass": "6",
          "japanese": "拾う",
          "chinese": "拾",
          "pinyin": "shí"
      },
      {
          "hskclass": "6",
          "japanese": "識別",
          "chinese": "识别",
          "pinyin": "shìbié"
      },
      {
          "hskclass": "6",
          "japanese": "時差",
          "chinese": "时差",
          "pinyin": "shíchā"
      },
      {
          "hskclass": "6",
          "japanese": "いつも",
          "chinese": "时常",
          "pinyin": "shícháng"
      },
      {
          "hskclass": "6",
          "japanese": "時々",
          "chinese": "时而",
          "pinyin": "shí'ér"
      },
      {
          "hskclass": "6",
          "japanese": "時間",
          "chinese": "时光",
          "pinyin": "shíguāng"
      },
      {
          "hskclass": "6",
          "japanese": "実利",
          "chinese": "实惠",
          "pinyin": "shíhuì"
      },
      {
          "hskclass": "6",
          "japanese": "チャンス",
          "chinese": "时机",
          "pinyin": "shíjī"
      },
      {
          "hskclass": "6",
          "japanese": "実力",
          "chinese": "实力",
          "pinyin": "shílì"
      },
      {
          "hskclass": "6",
          "japanese": "実施する",
          "chinese": "实施",
          "pinyin": "shíshī"
      },
      {
          "hskclass": "6",
          "japanese": "時事",
          "chinese": "时事",
          "pinyin": "shíshì"
      },
      {
          "hskclass": "6",
          "japanese": "事物の真実を求める",
          "chinese": "实事求是",
          "pinyin": "shíshìqiúshì"
      },
      {
          "hskclass": "6",
          "japanese": "石油",
          "chinese": "石油",
          "pinyin": "shíyóu"
      },
      {
          "hskclass": "6",
          "japanese": "実質",
          "chinese": "实质",
          "pinyin": "shízhì"
      },
      {
          "hskclass": "6",
          "japanese": "流行の服装",
          "chinese": "时装",
          "pinyin": "shízhuāng"
      },
      {
          "hskclass": "6",
          "japanese": "満ちている",
          "chinese": "十足",
          "pinyin": "shízú"
      },
      {
          "hskclass": "6",
          "japanese": "使命",
          "chinese": "使命",
          "pinyin": "shǐmìng"
      },
      {
          "hskclass": "6",
          "japanese": "いきおい",
          "chinese": "势必",
          "pinyin": "shìbì"
      },
      {
          "hskclass": "6",
          "japanese": "世代",
          "chinese": "世代",
          "pinyin": "shìdài"
      },
      {
          "hskclass": "6",
          "japanese": "模範を示す",
          "chinese": "示范",
          "pinyin": "shìfàn"
      },
      {
          "hskclass": "6",
          "japanese": "釈放する",
          "chinese": "释放",
          "pinyin": "shìfàng"
      },
      {
          "hskclass": "6",
          "japanese": "是非",
          "chinese": "是非",
          "pinyin": "shìfēi"
      },
      {
          "hskclass": "6",
          "japanese": "事故",
          "chinese": "事故",
          "pinyin": "shìgù"
      },
      {
          "hskclass": "6",
          "japanese": "功績",
          "chinese": "事迹",
          "pinyin": "shìjì"
      },
      {
          "hskclass": "6",
          "japanese": "事件",
          "chinese": "事件",
          "pinyin": "shìjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "世界観",
          "chinese": "世界观",
          "pinyin": "shìjièguān"
      },
      {
          "hskclass": "6",
          "japanese": "視力",
          "chinese": "视力",
          "pinyin": "shìlì"
      },
      {
          "hskclass": "6",
          "japanese": "勢力",
          "chinese": "势力",
          "pinyin": "shìlì"
      },
      {
          "hskclass": "6",
          "japanese": "逝去する",
          "chinese": "逝世",
          "pinyin": "shìshì"
      },
      {
          "hskclass": "6",
          "japanese": "事態",
          "chinese": "事态",
          "pinyin": "shìtài"
      },
      {
          "hskclass": "6",
          "japanese": "試みる",
          "chinese": "试图",
          "pinyin": "shìtú"
      },
      {
          "hskclass": "6",
          "japanese": "デモをする",
          "chinese": "示威",
          "pinyin": "shìwēi"
      },
      {
          "hskclass": "6",
          "japanese": "事務",
          "chinese": "事务",
          "pinyin": "shìwù"
      },
      {
          "hskclass": "6",
          "japanese": "視線",
          "chinese": "视线",
          "pinyin": "shìxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "事項",
          "chinese": "事项",
          "pinyin": "shìxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "試験",
          "chinese": "试验",
          "pinyin": "shìyàn"
      },
      {
          "hskclass": "6",
          "japanese": "視野",
          "chinese": "视野",
          "pinyin": "shìyě"
      },
      {
          "hskclass": "6",
          "japanese": "事業",
          "chinese": "事业",
          "pinyin": "shìyè"
      },
      {
          "hskclass": "6",
          "japanese": "適している",
          "chinese": "适宜",
          "pinyin": "shìyí"
      },
      {
          "hskclass": "6",
          "japanese": "意味を示す",
          "chinese": "示意",
          "pinyin": "shìyì"
      },
      {
          "hskclass": "6",
          "japanese": "収集し保管する",
          "chinese": "收藏",
          "pinyin": "shōucáng"
      },
      {
          "hskclass": "6",
          "japanese": "収縮する",
          "chinese": "收缩",
          "pinyin": "shōusuō"
      },
      {
          "hskclass": "6",
          "japanese": "利益",
          "chinese": "收益",
          "pinyin": "shōuyì"
      },
      {
          "hskclass": "6",
          "japanese": "ラジオ",
          "chinese": "收音机",
          "pinyin": "shōuyīnjī"
      },
      {
          "hskclass": "6",
          "japanese": "手法",
          "chinese": "手法",
          "pinyin": "shǒufǎ"
      },
      {
          "hskclass": "6",
          "japanese": "警備する",
          "chinese": "守护",
          "pinyin": "shǒuhù"
      },
      {
          "hskclass": "6",
          "japanese": "手ぶり",
          "chinese": "手势",
          "pinyin": "shǒushì"
      },
      {
          "hskclass": "6",
          "japanese": "主要な",
          "chinese": "首要",
          "pinyin": "shǒuyào"
      },
      {
          "hskclass": "6",
          "japanese": "技術",
          "chinese": "手艺",
          "pinyin": "shǒuyì"
      },
      {
          "hskclass": "6",
          "japanese": "授与する",
          "chinese": "授予",
          "pinyin": "shòuyǔ"
      },
      {
          "hskclass": "6",
          "japanese": "苦難をなめる",
          "chinese": "受罪",
          "pinyin": "shòuzuì"
      },
      {
          "hskclass": "6",
          "japanese": "ゆったり",
          "chinese": "舒畅",
          "pinyin": "shūchàng"
      },
      {
          "hskclass": "6",
          "japanese": "書道",
          "chinese": "书法",
          "pinyin": "shūfǎ"
      },
      {
          "hskclass": "6",
          "japanese": "おろそかにする",
          "chinese": "疏忽",
          "pinyin": "shūhū"
      },
      {
          "hskclass": "6",
          "japanese": "書籍",
          "chinese": "书籍",
          "pinyin": "shūjí"
      },
      {
          "hskclass": "6",
          "japanese": "書記",
          "chinese": "书记",
          "pinyin": "shūjì"
      },
      {
          "hskclass": "6",
          "japanese": "書面",
          "chinese": "书面",
          "pinyin": "shūmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "数える",
          "chinese": "数",
          "pinyin": "shù"
      },
      {
          "hskclass": "6",
          "japanese": "縦の",
          "chinese": "竖",
          "pinyin": "shù"
      },
      {
          "hskclass": "6",
          "japanese": "縛る",
          "chinese": "束",
          "pinyin": "shù"
      },
      {
          "hskclass": "6",
          "japanese": "一定の数",
          "chinese": "数额",
          "pinyin": "shù'é"
      },
      {
          "hskclass": "6",
          "japanese": "束縛する",
          "chinese": "束缚",
          "pinyin": "shùfù"
      },
      {
          "hskclass": "6",
          "japanese": "樹立する",
          "chinese": "树立",
          "pinyin": "shùlì"
      },
      {
          "hskclass": "6",
          "japanese": "数",
          "chinese": "数目",
          "pinyin": "shùmù"
      },
      {
          "hskclass": "6",
          "japanese": "遊ぶ",
          "chinese": "耍",
          "pinyin": "shuǎ"
      },
      {
          "hskclass": "6",
          "japanese": "老衰している",
          "chinese": "衰老",
          "pinyin": "shuāilǎo"
      },
      {
          "hskclass": "6",
          "japanese": "減退する",
          "chinese": "衰退",
          "pinyin": "shuāituì"
      },
      {
          "hskclass": "6",
          "japanese": "率いる",
          "chinese": "率领",
          "pinyin": "shuàilǐng"
      },
      {
          "hskclass": "6",
          "japanese": "羊肉のしゃぶしゃぶ",
          "chinese": "涮火锅",
          "pinyin": "shuàn huǒguō"
      },
      {
          "hskclass": "6",
          "japanese": "双子",
          "chinese": "双胞胎",
          "pinyin": "shuāngbāotāi"
      },
      {
          "hskclass": "6",
          "japanese": "爽快",
          "chinese": "爽快",
          "pinyin": "shuǎngkuài"
      },
      {
          "hskclass": "6",
          "japanese": "水の保全",
          "chinese": "水利",
          "pinyin": "shuǐlì"
      },
      {
          "hskclass": "6",
          "japanese": "蛇口",
          "chinese": "水龙头",
          "pinyin": "shuǐlóngtóu"
      },
      {
          "hskclass": "6",
          "japanese": "セメント",
          "chinese": "水泥",
          "pinyin": "shuǐní"
      },
      {
          "hskclass": "6",
          "japanese": "司法",
          "chinese": "司法",
          "pinyin": "sīfǎ"
      },
      {
          "hskclass": "6",
          "japanese": "司令官",
          "chinese": "司令",
          "pinyin": "sīlìng"
      },
      {
          "hskclass": "6",
          "japanese": "懐かしく思う",
          "chinese": "思念",
          "pinyin": "sīniàn"
      },
      {
          "hskclass": "6",
          "japanese": "深く考える",
          "chinese": "思索",
          "pinyin": "sīsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "熟考する",
          "chinese": "思维",
          "pinyin": "sīwéi"
      },
      {
          "hskclass": "6",
          "japanese": "文化",
          "chinese": "斯文",
          "pinyin": "sīwén"
      },
      {
          "hskclass": "6",
          "japanese": "考え",
          "chinese": "思绪",
          "pinyin": "sīxù"
      },
      {
          "hskclass": "6",
          "japanese": "ひそかに",
          "chinese": "私自",
          "pinyin": "sīzì"
      },
      {
          "hskclass": "6",
          "japanese": "死亡する",
          "chinese": "死亡",
          "pinyin": "sǐwáng"
      },
      {
          "hskclass": "6",
          "japanese": "ほしいままにふるまう",
          "chinese": "肆无忌惮",
          "pinyin": "sìwújìdàn"
      },
      {
          "hskclass": "6",
          "japanese": "飼育する",
          "chinese": "饲养",
          "pinyin": "sìyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "四肢",
          "chinese": "四肢",
          "pinyin": "sìzhī"
      },
      {
          "hskclass": "6",
          "japanese": "そびえる",
          "chinese": "耸",
          "pinyin": "sǒng"
      },
      {
          "hskclass": "6",
          "japanese": "船",
          "chinese": "艘",
          "pinyin": "sōu"
      },
      {
          "hskclass": "6",
          "japanese": "捜索する",
          "chinese": "搜索",
          "pinyin": "sōusuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "蘇生する",
          "chinese": "苏醒",
          "pinyin": "sūxǐng"
      },
      {
          "hskclass": "6",
          "japanese": "ことわざ",
          "chinese": "俗话",
          "pinyin": "súhuà"
      },
      {
          "hskclass": "6",
          "japanese": "菜食主義",
          "chinese": "素食主义",
          "pinyin": "sùshí zhǔyì"
      },
      {
          "hskclass": "6",
          "japanese": "訴訟",
          "chinese": "诉讼",
          "pinyin": "sùsòng"
      },
      {
          "hskclass": "6",
          "japanese": "人物像を作る",
          "chinese": "塑造",
          "pinyin": "sùzào"
      },
      {
          "hskclass": "6",
          "japanese": "性質",
          "chinese": "素质",
          "pinyin": "sùzhì"
      },
      {
          "hskclass": "6",
          "japanese": "もうやめる",
          "chinese": "算了",
          "pinyin": "suànle"
      },
      {
          "hskclass": "6",
          "japanese": "算数",
          "chinese": "算数",
          "pinyin": "suànshù"
      },
      {
          "hskclass": "6",
          "japanese": "直ちに",
          "chinese": "随即",
          "pinyin": "suíjí"
      },
      {
          "hskclass": "6",
          "japanese": "身につける",
          "chinese": "随身",
          "pinyin": "suíshēn"
      },
      {
          "hskclass": "6",
          "japanese": "ついでに",
          "chinese": "随手",
          "pinyin": "suíshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "思うままである",
          "chinese": "随意",
          "pinyin": "suíyì"
      },
      {
          "hskclass": "6",
          "japanese": "トンネル",
          "chinese": "隧道",
          "pinyin": "suìdào"
      },
      {
          "hskclass": "6",
          "japanese": "年げつ",
          "chinese": "岁月",
          "pinyin": "suìyuè"
      },
      {
          "hskclass": "6",
          "japanese": "壊す",
          "chinese": "损坏",
          "pinyin": "sǔnhuài"
      },
      {
          "hskclass": "6",
          "japanese": "賠償を要求する",
          "chinese": "索赔",
          "pinyin": "suǒpéi"
      },
      {
          "hskclass": "6",
          "japanese": "いっそのこと",
          "chinese": "索性",
          "pinyin": "suǒxìng"
      },
      {
          "hskclass": "6",
          "japanese": "崩れ落ちる",
          "chinese": "塌",
          "pinyin": "tā"
      },
      {
          "hskclass": "6",
          "japanese": "足が地に着いている",
          "chinese": "踏实",
          "pinyin": "tàshí"
      },
      {
          "hskclass": "6",
          "japanese": "台風",
          "chinese": "台风",
          "pinyin": "táifēng"
      },
      {
          "hskclass": "6",
          "japanese": "権威",
          "chinese": "泰斗",
          "pinyin": "tàidǒu"
      },
      {
          "hskclass": "6",
          "japanese": "宇宙空間",
          "chinese": "太空",
          "pinyin": "tàikōng"
      },
      {
          "hskclass": "6",
          "japanese": "半身不随になる",
          "chinese": "瘫痪",
          "pinyin": "tānhuàn"
      },
      {
          "hskclass": "6",
          "japanese": "飽くことを知らない",
          "chinese": "贪婪",
          "pinyin": "tānlán"
      },
      {
          "hskclass": "6",
          "japanese": "屋台",
          "chinese": "摊儿",
          "pinyin": "tān er"
      },
      {
          "hskclass": "6",
          "japanese": "横領する",
          "chinese": "贪污",
          "pinyin": "tānwū"
      },
      {
          "hskclass": "6",
          "japanese": "弾力",
          "chinese": "弹性",
          "pinyin": "tánxìng"
      },
      {
          "hskclass": "6",
          "japanese": "素直で正直である",
          "chinese": "坦白",
          "pinyin": "tǎnbái"
      },
      {
          "hskclass": "6",
          "japanese": "探査する",
          "chinese": "探测",
          "pinyin": "tàncè"
      },
      {
          "hskclass": "6",
          "japanese": "ため息をつく",
          "chinese": "叹气",
          "pinyin": "tànqì"
      },
      {
          "hskclass": "6",
          "japanese": "探究する",
          "chinese": "探索",
          "pinyin": "tànsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "検討する",
          "chinese": "探讨",
          "pinyin": "tàntǎo"
      },
      {
          "hskclass": "6",
          "japanese": "うかがう",
          "chinese": "探望",
          "pinyin": "tànwàng"
      },
      {
          "hskclass": "6",
          "japanese": "飴を絡めた菓子",
          "chinese": "糖葫芦",
          "pinyin": "tánghúlu"
      },
      {
          "hskclass": "6",
          "japanese": "取り出す",
          "chinese": "掏",
          "pinyin": "tāo"
      },
      {
          "hskclass": "6",
          "japanese": "口が軽い",
          "chinese": "滔滔不绝",
          "pinyin": "tāotāo bù jué"
      },
      {
          "hskclass": "6",
          "japanese": "陶磁器",
          "chinese": "陶瓷",
          "pinyin": "táocí"
      },
      {
          "hskclass": "6",
          "japanese": "いたずらである",
          "chinese": "淘气",
          "pinyin": "táoqì"
      },
      {
          "hskclass": "6",
          "japanese": "淘汰する",
          "chinese": "淘汰",
          "pinyin": "táotài"
      },
      {
          "hskclass": "6",
          "japanese": "値段の掛け合いをする",
          "chinese": "讨价还价",
          "pinyin": "tǎojiàhuánjià"
      },
      {
          "hskclass": "6",
          "japanese": "特徴",
          "chinese": "特长",
          "pinyin": "tècháng"
      },
      {
          "hskclass": "6",
          "japanese": "特定",
          "chinese": "特定",
          "pinyin": "tèdìng"
      },
      {
          "hskclass": "6",
          "japanese": "特徴",
          "chinese": "特色",
          "pinyin": "tèsè"
      },
      {
          "hskclass": "6",
          "japanese": "抜擢する",
          "chinese": "提拔",
          "pinyin": "tíbá"
      },
      {
          "hskclass": "6",
          "japanese": "テーマ",
          "chinese": "题材",
          "pinyin": "tícái"
      },
      {
          "hskclass": "6",
          "japanese": "精錬する",
          "chinese": "提炼",
          "pinyin": "tíliàn"
      },
      {
          "hskclass": "6",
          "japanese": "指摘する",
          "chinese": "提示",
          "pinyin": "tíshì"
      },
      {
          "hskclass": "6",
          "japanese": "提議する",
          "chinese": "提议",
          "pinyin": "tíyì"
      },
      {
          "hskclass": "6",
          "japanese": "理解する",
          "chinese": "体谅",
          "pinyin": "tǐliàng"
      },
      {
          "hskclass": "6",
          "japanese": "面目",
          "chinese": "体面",
          "pinyin": "tǐmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "体系",
          "chinese": "体系",
          "pinyin": "tǐxì"
      },
      {
          "hskclass": "6",
          "japanese": "天才",
          "chinese": "天才",
          "pinyin": "tiāncái"
      },
      {
          "hskclass": "6",
          "japanese": "一家団欒の 楽しみ",
          "chinese": "天伦之乐",
          "pinyin": "tiānlún zhī lè"
      },
      {
          "hskclass": "6",
          "japanese": "天然ガス",
          "chinese": "天然气",
          "pinyin": "tiānránqì"
      },
      {
          "hskclass": "6",
          "japanese": "生れつき",
          "chinese": "天生",
          "pinyin": "tiānshēng"
      },
      {
          "hskclass": "6",
          "japanese": "天国",
          "chinese": "天堂",
          "pinyin": "tiāntáng"
      },
      {
          "hskclass": "6",
          "japanese": "天文学",
          "chinese": "天文",
          "pinyin": "tiānwén"
      },
      {
          "hskclass": "6",
          "japanese": "トラックとフィールド",
          "chinese": "田径",
          "pinyin": "tiánjìng"
      },
      {
          "hskclass": "6",
          "japanese": "舐める",
          "chinese": "舔",
          "pinyin": "tiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "粗捜しをする",
          "chinese": "挑剔",
          "pinyin": "tiāotì"
      },
      {
          "hskclass": "6",
          "japanese": "調和している",
          "chinese": "调和",
          "pinyin": "tiáohé"
      },
      {
          "hskclass": "6",
          "japanese": "調節する",
          "chinese": "调剂",
          "pinyin": "tiáojì"
      },
      {
          "hskclass": "6",
          "japanese": "調節する",
          "chinese": "调节",
          "pinyin": "tiáojié"
      },
      {
          "hskclass": "6",
          "japanese": "仲裁する",
          "chinese": "调解",
          "pinyin": "tiáojiě"
      },
      {
          "hskclass": "6",
          "japanese": "条項",
          "chinese": "条款",
          "pinyin": "tiáokuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "段取り",
          "chinese": "条理",
          "pinyin": "tiáolǐ"
      },
      {
          "hskclass": "6",
          "japanese": "薬味",
          "chinese": "调料",
          "pinyin": "tiáoliào"
      },
      {
          "hskclass": "6",
          "japanese": "条約",
          "chinese": "条约",
          "pinyin": "tiáoyuē"
      },
      {
          "hskclass": "6",
          "japanese": "挑発する",
          "chinese": "挑拨",
          "pinyin": "tiǎobō"
      },
      {
          "hskclass": "6",
          "japanese": "挑発する",
          "chinese": "挑衅",
          "pinyin": "tiǎoxìn"
      },
      {
          "hskclass": "6",
          "japanese": "跳ね上がる",
          "chinese": "跳跃",
          "pinyin": "tiàoyuè"
      },
      {
          "hskclass": "6",
          "japanese": "停泊する",
          "chinese": "停泊",
          "pinyin": "tíngbó"
      },
      {
          "hskclass": "6",
          "japanese": "停頓する",
          "chinese": "停顿",
          "pinyin": "tíngdùn"
      },
      {
          "hskclass": "6",
          "japanese": "停滞する",
          "chinese": "停滞",
          "pinyin": "tíngzhì"
      },
      {
          "hskclass": "6",
          "japanese": "あずまや",
          "chinese": "亭子",
          "pinyin": "tíngzi"
      },
      {
          "hskclass": "6",
          "japanese": "まっすぐ高く伸びている",
          "chinese": "挺拔",
          "pinyin": "tǐngbá"
      },
      {
          "hskclass": "6",
          "japanese": "インフレーション",
          "chinese": "通货膨胀",
          "pinyin": "tōnghuò péngzhàng"
      },
      {
          "hskclass": "6",
          "japanese": "通俗的である",
          "chinese": "通俗",
          "pinyin": "tōngsú"
      },
      {
          "hskclass": "6",
          "japanese": "通用する",
          "chinese": "通用",
          "pinyin": "tōngyòng"
      },
      {
          "hskclass": "6",
          "japanese": "同胞",
          "chinese": "同胞",
          "pinyin": "tóngbāo"
      },
      {
          "hskclass": "6",
          "japanese": "童話",
          "chinese": "童话",
          "pinyin": "tónghuà"
      },
      {
          "hskclass": "6",
          "japanese": "銅鉱",
          "chinese": "铜矿",
          "pinyin": "tóng kuàng"
      },
      {
          "hskclass": "6",
          "japanese": "仲間",
          "chinese": "同志",
          "pinyin": "tóngzhì"
      },
      {
          "hskclass": "6",
          "japanese": "統一的に計画し各方面に配慮する",
          "chinese": "统筹兼顾",
          "pinyin": "tǒngchóu jiāngù"
      },
      {
          "hskclass": "6",
          "japanese": "統計",
          "chinese": "统计",
          "pinyin": "tǒngjì"
      },
      {
          "hskclass": "6",
          "japanese": "全て",
          "chinese": "统统",
          "pinyin": "tǒngtǒng"
      },
      {
          "hskclass": "6",
          "japanese": "投合する",
          "chinese": "投机",
          "pinyin": "tóujī"
      },
      {
          "hskclass": "6",
          "japanese": "投票",
          "chinese": "投票",
          "pinyin": "tóupiào"
      },
      {
          "hskclass": "6",
          "japanese": "降伏する",
          "chinese": "投降",
          "pinyin": "tóuxiáng"
      },
      {
          "hskclass": "6",
          "japanese": "投げる",
          "chinese": "投掷",
          "pinyin": "tóuzhí"
      },
      {
          "hskclass": "6",
          "japanese": "はげている",
          "chinese": "秃",
          "pinyin": "tū"
      },
      {
          "hskclass": "6",
          "japanese": "突破する",
          "chinese": "突破",
          "pinyin": "túpò"
      },
      {
          "hskclass": "6",
          "japanese": "図案",
          "chinese": "图案",
          "pinyin": "tú'àn"
      },
      {
          "hskclass": "6",
          "japanese": "徒弟",
          "chinese": "徒弟",
          "pinyin": "túdì"
      },
      {
          "hskclass": "6",
          "japanese": "経路",
          "chinese": "途径",
          "pinyin": "tújìng"
      },
      {
          "hskclass": "6",
          "japanese": "塗る",
          "chinese": "涂抹",
          "pinyin": "túmǒ"
      },
      {
          "hskclass": "6",
          "japanese": "土壌",
          "chinese": "土壤",
          "pinyin": "tǔrǎng"
      },
      {
          "hskclass": "6",
          "japanese": "団結",
          "chinese": "团结",
          "pinyin": "tuánjié"
      },
      {
          "hskclass": "6",
          "japanese": "グループ",
          "chinese": "团体",
          "pinyin": "tuántǐ"
      },
      {
          "hskclass": "6",
          "japanese": "メンバー",
          "chinese": "团员",
          "pinyin": "tuányuán"
      },
      {
          "hskclass": "6",
          "japanese": "推測",
          "chinese": "推测",
          "pinyin": "tuīcè"
      },
      {
          "hskclass": "6",
          "japanese": "ひっくり返す",
          "chinese": "推翻",
          "pinyin": "tuīfān"
      },
      {
          "hskclass": "6",
          "japanese": "推理",
          "chinese": "推理",
          "pinyin": "tuīlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "推論",
          "chinese": "推论",
          "pinyin": "tuīlùn"
      },
      {
          "hskclass": "6",
          "japanese": "売りさばく",
          "chinese": "推销",
          "pinyin": "tuīxiāo"
      },
      {
          "hskclass": "6",
          "japanese": "嚥下する",
          "chinese": "吞咽",
          "pinyin": "tūnyàn"
      },
      {
          "hskclass": "6",
          "japanese": "離脱する",
          "chinese": "脱离",
          "pinyin": "tuōlí"
      },
      {
          "hskclass": "6",
          "japanese": "引き延ばす",
          "chinese": "拖延",
          "pinyin": "tuōyán"
      },
      {
          "hskclass": "6",
          "japanese": "託送する",
          "chinese": "托运",
          "pinyin": "tuōyùn"
      },
      {
          "hskclass": "6",
          "japanese": "適当である",
          "chinese": "妥当",
          "pinyin": "tuǒdang"
      },
      {
          "hskclass": "6",
          "japanese": "妥当である",
          "chinese": "妥善",
          "pinyin": "tuǒshàn"
      },
      {
          "hskclass": "6",
          "japanese": "妥協",
          "chinese": "妥协",
          "pinyin": "tuǒxié"
      },
      {
          "hskclass": "6",
          "japanese": "楕円",
          "chinese": "椭圆",
          "pinyin": "tuǒyuán"
      },
      {
          "hskclass": "6",
          "japanese": "唾",
          "chinese": "唾沫",
          "pinyin": "tuòmò"
      },
      {
          "hskclass": "6",
          "japanese": "掘り出す",
          "chinese": "挖掘",
          "pinyin": "wājué"
      },
      {
          "hskclass": "6",
          "japanese": "赤ちゃん",
          "chinese": "娃娃",
          "pinyin": "wáwá"
      },
      {
          "hskclass": "6",
          "japanese": "ばらばらに壊れる",
          "chinese": "瓦解",
          "pinyin": "wǎjiě"
      },
      {
          "hskclass": "6",
          "japanese": "ワー",
          "chinese": "哇",
          "pinyin": "wa"
      },
      {
          "hskclass": "6",
          "japanese": "歪曲する",
          "chinese": "歪曲",
          "pinyin": "wāiqū"
      },
      {
          "hskclass": "6",
          "japanese": "外面",
          "chinese": "外表",
          "pinyin": "wàibiǎo"
      },
      {
          "hskclass": "6",
          "japanese": "素人である",
          "chinese": "外行",
          "pinyin": "wàiháng"
      },
      {
          "hskclass": "6",
          "japanese": "外界",
          "chinese": "外界",
          "pinyin": "wàijiè"
      },
      {
          "hskclass": "6",
          "japanese": "外向的である",
          "chinese": "外向",
          "pinyin": "wàixiàng"
      },
      {
          "hskclass": "6",
          "japanese": "丸薬の数を数える",
          "chinese": "丸",
          "pinyin": "wán"
      },
      {
          "hskclass": "6",
          "japanese": "完備している",
          "chinese": "完备",
          "pinyin": "wánbèi"
      },
      {
          "hskclass": "6",
          "japanese": "すっかり終わる",
          "chinese": "完毕",
          "pinyin": "wánbì"
      },
      {
          "hskclass": "6",
          "japanese": "顽固である",
          "chinese": "顽固",
          "pinyin": "wángù"
      },
      {
          "hskclass": "6",
          "japanese": "手で触る",
          "chinese": "玩弄",
          "pinyin": "wànnòng"
      },
      {
          "hskclass": "6",
          "japanese": "粘り強い",
          "chinese": "顽强",
          "pinyin": "wánqiáng"
      },
      {
          "hskclass": "6",
          "japanese": "おもちゃ",
          "chinese": "玩意儿",
          "pinyin": "wányì er"
      },
      {
          "hskclass": "6",
          "japanese": "挽回する",
          "chinese": "挽回",
          "pinyin": "wǎnhuí"
      },
      {
          "hskclass": "6",
          "japanese": "救い出す",
          "chinese": "挽救",
          "pinyin": "wǎnjiù"
      },
      {
          "hskclass": "6",
          "japanese": "惜しむ",
          "chinese": "惋惜",
          "pinyin": "wànxí"
      },
      {
          "hskclass": "6",
          "japanese": "この上なく",
          "chinese": "万分",
          "pinyin": "wànfēn"
      },
      {
          "hskclass": "6",
          "japanese": "普段",
          "chinese": "往常",
          "pinyin": "wǎngcháng"
      },
      {
          "hskclass": "6",
          "japanese": "ネットワーク",
          "chinese": "网络",
          "pinyin": "wǎngluò"
      },
      {
          "hskclass": "6",
          "japanese": "過去",
          "chinese": "往事",
          "pinyin": "wǎngshì"
      },
      {
          "hskclass": "6",
          "japanese": "妄想",
          "chinese": "妄想",
          "pinyin": "wàngxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "極めてわずかで言うに足らない",
          "chinese": "微不足道",
          "pinyin": "wēibùzúdào"
      },
      {
          "hskclass": "6",
          "japanese": "威勢",
          "chinese": "威风",
          "pinyin": "wēifēng"
      },
      {
          "hskclass": "6",
          "japanese": "ミクロの",
          "chinese": "微观",
          "pinyin": "wéiguān"
      },
      {
          "hskclass": "6",
          "japanese": "危機",
          "chinese": "危机",
          "pinyin": "wéijī"
      },
      {
          "hskclass": "6",
          "japanese": "威力",
          "chinese": "威力",
          "pinyin": "wēilì"
      },
      {
          "hskclass": "6",
          "japanese": "威望",
          "chinese": "威望",
          "pinyin": "wēiwàng"
      },
      {
          "hskclass": "6",
          "japanese": "威信",
          "chinese": "威信",
          "pinyin": "wēixìn"
      },
      {
          "hskclass": "6",
          "japanese": "背く",
          "chinese": "违背",
          "pinyin": "wéibèi"
      },
      {
          "hskclass": "6",
          "japanese": "維持する",
          "chinese": "维持",
          "pinyin": "wéichí"
      },
      {
          "hskclass": "6",
          "japanese": "ただ～だけ",
          "chinese": "唯独",
          "pinyin": "wéi dú"
      },
      {
          "hskclass": "6",
          "japanese": "困る、悩む",
          "chinese": "为难",
          "pinyin": "wéinán"
      },
      {
          "hskclass": "6",
          "japanese": "期間を…とする",
          "chinese": "为期",
          "pinyin": "wéiqí"
      },
      {
          "hskclass": "6",
          "japanese": "ビタミン",
          "chinese": "维生素",
          "pinyin": "wéishēngsù"
      },
      {
          "hskclass": "6",
          "japanese": "先頭に立つ",
          "chinese": "为首",
          "pinyin": "wéishǒu"
      },
      {
          "hskclass": "6",
          "japanese": "補修する",
          "chinese": "维修",
          "pinyin": "wéixiū"
      },
      {
          "hskclass": "6",
          "japanese": "委員",
          "chinese": "委员",
          "pinyin": "wěiyuán"
      },
      {
          "hskclass": "6",
          "japanese": "偽造",
          "chinese": "伪造",
          "pinyin": "wèizào"
      },
      {
          "hskclass": "6",
          "japanese": "恐れる",
          "chinese": "畏惧",
          "pinyin": "wèijù"
      },
      {
          "hskclass": "6",
          "japanese": "食欲",
          "chinese": "胃口",
          "pinyin": "wèikǒu"
      },
      {
          "hskclass": "6",
          "japanese": "どうしても…と言わざるを得ない",
          "chinese": "未免",
          "pinyin": "wèimiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "慰問する",
          "chinese": "慰问",
          "pinyin": "wèiwèn"
      },
      {
          "hskclass": "6",
          "japanese": "衛星",
          "chinese": "卫星",
          "pinyin": "wèixīng"
      },
      {
          "hskclass": "6",
          "japanese": "位置",
          "chinese": "位于",
          "pinyin": "wèiyú"
      },
      {
          "hskclass": "6",
          "japanese": "温帯",
          "chinese": "温带",
          "pinyin": "wēndài"
      },
      {
          "hskclass": "6",
          "japanese": "温和である",
          "chinese": "温和",
          "pinyin": "wēnhé"
      },
      {
          "hskclass": "6",
          "japanese": "卒業証書",
          "chinese": "文凭",
          "pinyin": "wénpíng"
      },
      {
          "hskclass": "6",
          "japanese": "文化遺産",
          "chinese": "文物",
          "pinyin": "wénwù"
      },
      {
          "hskclass": "6",
          "japanese": "文献",
          "chinese": "文献",
          "pinyin": "wénxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "上品である",
          "chinese": "文雅",
          "pinyin": "wényǎ"
      },
      {
          "hskclass": "6",
          "japanese": "文学",
          "chinese": "文艺",
          "pinyin": "wényì"
      },
      {
          "hskclass": "6",
          "japanese": "世に出る",
          "chinese": "问世",
          "pinyin": "wènshì"
      },
      {
          "hskclass": "6",
          "japanese": "巣",
          "chinese": "窝",
          "pinyin": "wō"
      },
      {
          "hskclass": "6",
          "japanese": "真っ黒である",
          "chinese": "乌黑",
          "pinyin": "wūhēi"
      },
      {
          "hskclass": "6",
          "japanese": "中傷する",
          "chinese": "污蔑",
          "pinyin": "wūmiè"
      },
      {
          "hskclass": "6",
          "japanese": "人を陥れる",
          "chinese": "诬陷",
          "pinyin": "wú xiàn"
      },
      {
          "hskclass": "6",
          "japanese": "並ぶものがない",
          "chinese": "无比",
          "pinyin": "wúbǐ"
      },
      {
          "hskclass": "6",
          "japanese": "無償の",
          "chinese": "无偿",
          "pinyin": "wúcháng"
      },
      {
          "hskclass": "6",
          "japanese": "卑劣である",
          "chinese": "无耻",
          "pinyin": "wúchǐ"
      },
      {
          "hskclass": "6",
          "japanese": "…する手がかりがない",
          "chinese": "无从",
          "pinyin": "wúcóng"
      },
      {
          "hskclass": "6",
          "japanese": "無関心",
          "chinese": "无动于衷",
          "pinyin": "wúdòngyúzhōng"
      },
      {
          "hskclass": "6",
          "japanese": "ただ…にすぎない",
          "chinese": "无非",
          "pinyin": "wúfēi"
      },
      {
          "hskclass": "6",
          "japanese": "しょんぼりしている",
          "chinese": "无精打采",
          "pinyin": "wújīngdǎcǎi"
      },
      {
          "hskclass": "6",
          "japanese": "ノーコメント",
          "chinese": "无可奉告",
          "pinyin": "wú kě fènggào"
      },
      {
          "hskclass": "6",
          "japanese": "どうすることもできない",
          "chinese": "无可奈何",
          "pinyin": "wúkěnàihé"
      },
      {
          "hskclass": "6",
          "japanese": "理不尽である",
          "chinese": "无赖",
          "pinyin": "wúlài"
      },
      {
          "hskclass": "6",
          "japanese": "絡む",
          "chinese": "无理取闹",
          "pinyin": "wúlǐqǔnào"
      },
      {
          "hskclass": "6",
          "japanese": "力を出すことができない",
          "chinese": "无能为力",
          "pinyin": "wúnéngwéilì"
      },
      {
          "hskclass": "6",
          "japanese": "極まりない",
          "chinese": "无穷无尽",
          "pinyin": "wúqióng wújìn"
      },
      {
          "hskclass": "6",
          "japanese": "かゆいところに手が届く",
          "chinese": "无微不至",
          "pinyin": "wúwēibùzhì"
      },
      {
          "hskclass": "6",
          "japanese": "優遊たる",
          "chinese": "无忧无虑",
          "pinyin": "wú yōu wú lǜ"
      },
      {
          "hskclass": "6",
          "japanese": "無知である",
          "chinese": "无知",
          "pinyin": "wúzhī"
      },
      {
          "hskclass": "6",
          "japanese": "舞踊",
          "chinese": "舞蹈",
          "pinyin": "wǔdǎo"
      },
      {
          "hskclass": "6",
          "japanese": "侮辱",
          "chinese": "侮辱",
          "pinyin": "wǔrǔ"
      },
      {
          "hskclass": "6",
          "japanese": "俠客",
          "chinese": "武侠",
          "pinyin": "wǔxiá"
      },
      {
          "hskclass": "6",
          "japanese": "武装しました",
          "chinese": "武装",
          "pinyin": "wǔzhuāng"
      },
      {
          "hskclass": "6",
          "japanese": "…しない",
          "chinese": "勿",
          "pinyin": "wù"
      },
      {
          "hskclass": "6",
          "japanese": "必ず",
          "chinese": "务必",
          "pinyin": "wùbì"
      },
      {
          "hskclass": "6",
          "japanese": "誤差",
          "chinese": "误差",
          "pinyin": "wùchā"
      },
      {
          "hskclass": "6",
          "japanese": "誤解",
          "chinese": "误解",
          "pinyin": "wùjiě"
      },
      {
          "hskclass": "6",
          "japanese": "物がよくかつ値が安い",
          "chinese": "物美价廉",
          "pinyin": "wùměi jià lián"
      },
      {
          "hskclass": "6",
          "japanese": "検討する",
          "chinese": "务实",
          "pinyin": "wùshí"
      },
      {
          "hskclass": "6",
          "japanese": "物質",
          "chinese": "物资",
          "pinyin": "wùzī"
      },
      {
          "hskclass": "6",
          "japanese": "山間の谷川",
          "chinese": "溪",
          "pinyin": "xī"
      },
      {
          "hskclass": "6",
          "japanese": "膝",
          "chinese": "膝盖",
          "pinyin": "xīgài"
      },
      {
          "hskclass": "6",
          "japanese": "消える",
          "chinese": "熄灭",
          "pinyin": "xímiè"
      },
      {
          "hskclass": "6",
          "japanese": "吸収する",
          "chinese": "吸取",
          "pinyin": "xīqǔ"
      },
      {
          "hskclass": "6",
          "japanese": "昔",
          "chinese": "昔日",
          "pinyin": "xīrì"
      },
      {
          "hskclass": "6",
          "japanese": "犠牲",
          "chinese": "牺牲",
          "pinyin": "xīshēng"
      },
      {
          "hskclass": "6",
          "japanese": "夕日",
          "chinese": "夕阳",
          "pinyin": "xīyáng"
      },
      {
          "hskclass": "6",
          "japanese": "息子の嫁",
          "chinese": "媳妇",
          "pinyin": "xífù"
      },
      {
          "hskclass": "6",
          "japanese": "襲撃する",
          "chinese": "袭击",
          "pinyin": "xíjí"
      },
      {
          "hskclass": "6",
          "japanese": "風俗習慣",
          "chinese": "习俗",
          "pinyin": "xísú"
      },
      {
          "hskclass": "6",
          "japanese": "人々は大いに歓迎する",
          "chinese": "喜闻乐见",
          "pinyin": "xǐwénlèjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "喜ばしい",
          "chinese": "喜悦",
          "pinyin": "xǐyuè"
      },
      {
          "hskclass": "6",
          "japanese": "細胞",
          "chinese": "细胞",
          "pinyin": "xìbāo"
      },
      {
          "hskclass": "6",
          "japanese": "細菌",
          "chinese": "细菌",
          "pinyin": "xìjùn"
      },
      {
          "hskclass": "6",
          "japanese": "系列",
          "chinese": "系列",
          "pinyin": "xìliè"
      },
      {
          "hskclass": "6",
          "japanese": "きめ細かい",
          "chinese": "细致",
          "pinyin": "xìzhì"
      },
      {
          "hskclass": "6",
          "japanese": "朝焼け",
          "chinese": "霞",
          "pinyin": "xiá"
      },
      {
          "hskclass": "6",
          "japanese": "狭い",
          "chinese": "狭隘",
          "pinyin": "xiá'ài"
      },
      {
          "hskclass": "6",
          "japanese": "峡谷",
          "chinese": "峡谷",
          "pinyin": "xiágǔ"
      },
      {
          "hskclass": "6",
          "japanese": "狭い",
          "chinese": "狭窄",
          "pinyin": "xiázhǎi"
      },
      {
          "hskclass": "6",
          "japanese": "サマーキャンプ",
          "chinese": "夏令营",
          "pinyin": "xiàlìngyíng"
      },
      {
          "hskclass": "6",
          "japanese": "下部",
          "chinese": "下属",
          "pinyin": "xiàshǔ"
      },
      {
          "hskclass": "6",
          "japanese": "進歩が早い",
          "chinese": "先进",
          "pinyin": "xiānjìn"
      },
      {
          "hskclass": "6",
          "japanese": "鮮明",
          "chinese": "鲜明",
          "pinyin": "xiānmíng"
      },
      {
          "hskclass": "6",
          "japanese": "めくる",
          "chinese": "掀起",
          "pinyin": "xiānqǐ"
      },
      {
          "hskclass": "6",
          "japanese": "以前に",
          "chinese": "先前",
          "pinyin": "xiānqián"
      },
      {
          "hskclass": "6",
          "japanese": "繊維",
          "chinese": "纤维",
          "pinyin": "xiānwéi"
      },
      {
          "hskclass": "6",
          "japanese": "弓の弦",
          "chinese": "弦",
          "pinyin": "xián"
      },
      {
          "hskclass": "6",
          "japanese": "疑う",
          "chinese": "嫌",
          "pinyin": "xián"
      },
      {
          "hskclass": "6",
          "japanese": "むだ話",
          "chinese": "闲话",
          "pinyin": "xiánhuà"
      },
      {
          "hskclass": "6",
          "japanese": "心根が優しい",
          "chinese": "贤惠",
          "pinyin": "xiánhuì"
      },
      {
          "hskclass": "6",
          "japanese": "つながる",
          "chinese": "衔接",
          "pinyin": "xiánjiē"
      },
      {
          "hskclass": "6",
          "japanese": "容疑",
          "chinese": "嫌疑",
          "pinyin": "xiányí"
      },
      {
          "hskclass": "6",
          "japanese": "顕著である",
          "chinese": "显著",
          "pinyin": "xiǎnzhù"
      },
      {
          "hskclass": "6",
          "japanese": "その場で",
          "chinese": "现场",
          "pinyin": "xiànchǎng"
      },
      {
          "hskclass": "6",
          "japanese": "既に用意されている",
          "chinese": "现成",
          "pinyin": "xiànchéng"
      },
      {
          "hskclass": "6",
          "japanese": "憲法",
          "chinese": "宪法",
          "pinyin": "xiànfǎ"
      },
      {
          "hskclass": "6",
          "japanese": "陥れる",
          "chinese": "陷害",
          "pinyin": "xiànhài"
      },
      {
          "hskclass": "6",
          "japanese": "餡",
          "chinese": "馅儿",
          "pinyin": "xiàn er"
      },
      {
          "hskclass": "6",
          "japanese": "陥る",
          "chinese": "陷入",
          "pinyin": "xiànrù"
      },
      {
          "hskclass": "6",
          "japanese": "手がかり",
          "chinese": "线索",
          "pinyin": "xiànsuǒ"
      },
      {
          "hskclass": "6",
          "japanese": "現状",
          "chinese": "现状",
          "pinyin": "xiànzhuàng"
      },
      {
          "hskclass": "6",
          "japanese": "双方の違い",
          "chinese": "相差",
          "pinyin": "xiāngchà"
      },
      {
          "hskclass": "6",
          "japanese": "等しい",
          "chinese": "相等",
          "pinyin": "xiāngděng"
      },
      {
          "hskclass": "6",
          "japanese": "成し遂げる",
          "chinese": "相辅相成",
          "pinyin": "xiāngfǔxiāngchéng"
      },
      {
          "hskclass": "6",
          "japanese": "埋め込む",
          "chinese": "镶嵌",
          "pinyin": "xiāngqiàn"
      },
      {
          "hskclass": "6",
          "japanese": "当然…すべきである",
          "chinese": "相应",
          "pinyin": "xiāngyìng"
      },
      {
          "hskclass": "6",
          "japanese": "田舎町",
          "chinese": "乡镇",
          "pinyin": "xiāngzhèn"
      },
      {
          "hskclass": "6",
          "japanese": "八方手を尽くす",
          "chinese": "想方设法",
          "pinyin": "xiǎng fāng shèfǎ"
      },
      {
          "hskclass": "6",
          "japanese": "はっきりしている",
          "chinese": "响亮",
          "pinyin": "xiǎngliàng"
      },
      {
          "hskclass": "6",
          "japanese": "応答する",
          "chinese": "响应",
          "pinyin": "xiǎngyìng"
      },
      {
          "hskclass": "6",
          "japanese": "路地",
          "chinese": "巷",
          "pinyin": "xiàng"
      },
      {
          "hskclass": "6",
          "japanese": "項目",
          "chinese": "项",
          "pinyin": "xiàng"
      },
      {
          "hskclass": "6",
          "japanese": "道案内人",
          "chinese": "向导",
          "pinyin": "xiàngdǎo"
      },
      {
          "hskclass": "6",
          "japanese": "常に",
          "chinese": "向来",
          "pinyin": "xiànglái"
      },
      {
          "hskclass": "6",
          "japanese": "あこがれる",
          "chinese": "向往",
          "pinyin": "xiàngwǎng"
      },
      {
          "hskclass": "6",
          "japanese": "取り除く",
          "chinese": "消除",
          "pinyin": "xiāochú"
      },
      {
          "hskclass": "6",
          "japanese": "消毒",
          "chinese": "消毒",
          "pinyin": "xiāodú"
      },
      {
          "hskclass": "6",
          "japanese": "消防",
          "chinese": "消防",
          "pinyin": "xiāofáng"
      },
      {
          "hskclass": "6",
          "japanese": "消費する",
          "chinese": "消耗",
          "pinyin": "xiāohào"
      },
      {
          "hskclass": "6",
          "japanese": "廃棄する",
          "chinese": "销毁",
          "pinyin": "xiāohuǐ"
      },
      {
          "hskclass": "6",
          "japanese": "消極的である",
          "chinese": "消极",
          "pinyin": "xiāojí"
      },
      {
          "hskclass": "6",
          "japanese": "けちである",
          "chinese": "小气",
          "pinyin": "xiǎoqì"
      },
      {
          "hskclass": "6",
          "japanese": "極めて慎重で注意深い",
          "chinese": "小心翼翼",
          "pinyin": "xiǎoxīnyìyì"
      },
      {
          "hskclass": "6",
          "japanese": "孝行する",
          "chinese": "孝顺",
          "pinyin": "xiàoshùn"
      },
      {
          "hskclass": "6",
          "japanese": "肖像",
          "chinese": "肖像",
          "pinyin": "xiàoxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "効果と利益",
          "chinese": "效益",
          "pinyin": "xiàoyì"
      },
      {
          "hskclass": "6",
          "japanese": "携帯",
          "chinese": "携带",
          "pinyin": "xiédài"
      },
      {
          "hskclass": "6",
          "japanese": "協会",
          "chinese": "协会",
          "pinyin": "xiéhuì"
      },
      {
          "hskclass": "6",
          "japanese": "協議する",
          "chinese": "协商",
          "pinyin": "xiéshāng"
      },
      {
          "hskclass": "6",
          "japanese": "協議する",
          "chinese": "协议",
          "pinyin": "xiéyì"
      },
      {
          "hskclass": "6",
          "japanese": "協力する",
          "chinese": "协助",
          "pinyin": "xiézhù"
      },
      {
          "hskclass": "6",
          "japanese": "文章を書く",
          "chinese": "写作",
          "pinyin": "xiězuò"
      },
      {
          "hskclass": "6",
          "japanese": "くず",
          "chinese": "屑",
          "pinyin": "xiè"
      },
      {
          "hskclass": "6",
          "japanese": "断る",
          "chinese": "谢绝",
          "pinyin": "xièjué"
      },
      {
          "hskclass": "6",
          "japanese": "漏らす",
          "chinese": "泄露",
          "pinyin": "xièlòu"
      },
      {
          "hskclass": "6",
          "japanese": "落胆する",
          "chinese": "泄气",
          "pinyin": "xièqì"
      },
      {
          "hskclass": "6",
          "japanese": "新陳代謝",
          "chinese": "新陈代谢",
          "pinyin": "xīnchéndàixiè"
      },
      {
          "hskclass": "6",
          "japanese": "会得したもの",
          "chinese": "心得",
          "pinyin": "xīndé"
      },
      {
          "hskclass": "6",
          "japanese": "新郎",
          "chinese": "新郎",
          "pinyin": "xīnláng"
      },
      {
          "hskclass": "6",
          "japanese": "魂",
          "chinese": "心灵",
          "pinyin": "xīnlíng"
      },
      {
          "hskclass": "6",
          "japanese": "花嫁",
          "chinese": "新娘",
          "pinyin": "xīnniáng"
      },
      {
          "hskclass": "6",
          "japanese": "勤勉である",
          "chinese": "辛勤",
          "pinyin": "xīnqín"
      },
      {
          "hskclass": "6",
          "japanese": "給料",
          "chinese": "薪水",
          "pinyin": "xīnshuǐ"
      },
      {
          "hskclass": "6",
          "japanese": "心理状態",
          "chinese": "心态",
          "pinyin": "xīntài"
      },
      {
          "hskclass": "6",
          "japanese": "惜しむ",
          "chinese": "心疼",
          "pinyin": "xīnténg"
      },
      {
          "hskclass": "6",
          "japanese": "安らかな気持ちになる",
          "chinese": "欣慰",
          "pinyin": "xīnwèi"
      },
      {
          "hskclass": "6",
          "japanese": "活気にあふれている",
          "chinese": "欣欣向荣",
          "pinyin": "xīnxīnxiàngróng"
      },
      {
          "hskclass": "6",
          "japanese": "心血",
          "chinese": "心血",
          "pinyin": "xīnxuè"
      },
      {
          "hskclass": "6",
          "japanese": "心の底",
          "chinese": "心眼儿",
          "pinyin": "xīnyǎn er"
      },
      {
          "hskclass": "6",
          "japanese": "斬新である",
          "chinese": "新颖",
          "pinyin": "xīnyǐng"
      },
      {
          "hskclass": "6",
          "japanese": "信頼",
          "chinese": "信赖",
          "pinyin": "xìnlài"
      },
      {
          "hskclass": "6",
          "japanese": "信念",
          "chinese": "信念",
          "pinyin": "xìnniàn"
      },
      {
          "hskclass": "6",
          "japanese": "信仰",
          "chinese": "信仰",
          "pinyin": "xìnyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "信用と評判",
          "chinese": "信誉",
          "pinyin": "xìnyù"
      },
      {
          "hskclass": "6",
          "japanese": "生臭い",
          "chinese": "腥",
          "pinyin": "xīng"
      },
      {
          "hskclass": "6",
          "japanese": "有頂天である",
          "chinese": "兴高采烈",
          "pinyin": "xìnggāocǎiliè"
      },
      {
          "hskclass": "6",
          "japanese": "盛んである",
          "chinese": "兴隆",
          "pinyin": "xīnglóng"
      },
      {
          "hskclass": "6",
          "japanese": "繁栄している",
          "chinese": "兴旺",
          "pinyin": "xīngwàng"
      },
      {
          "hskclass": "6",
          "japanese": "刑事",
          "chinese": "刑事",
          "pinyin": "xíngshì"
      },
      {
          "hskclass": "6",
          "japanese": "形態",
          "chinese": "形态",
          "pinyin": "xíngtài"
      },
      {
          "hskclass": "6",
          "japanese": "行政",
          "chinese": "行政",
          "pinyin": "xíngzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "セクシーである",
          "chinese": "性感",
          "pinyin": "xìnggǎn"
      },
      {
          "hskclass": "6",
          "japanese": "幸いにも",
          "chinese": "幸好",
          "pinyin": "xìnghǎo"
      },
      {
          "hskclass": "6",
          "japanese": "生命",
          "chinese": "性命",
          "pinyin": "xìngmìng"
      },
      {
          "hskclass": "6",
          "japanese": "性能",
          "chinese": "性能",
          "pinyin": "xìngnéng"
      },
      {
          "hskclass": "6",
          "japanese": "気立て",
          "chinese": "性情",
          "pinyin": "xìngqíng"
      },
      {
          "hskclass": "6",
          "japanese": "浮かれ立つ",
          "chinese": "兴致勃勃",
          "pinyin": "xìngzhì bóbó"
      },
      {
          "hskclass": "6",
          "japanese": "凶悪",
          "chinese": "凶恶",
          "pinyin": "xiōng'è"
      },
      {
          "hskclass": "6",
          "japanese": "胸に抱く",
          "chinese": "胸怀",
          "pinyin": "xiōnghuái"
      },
      {
          "hskclass": "6",
          "japanese": "殺害犯人",
          "chinese": "凶手",
          "pinyin": "xiōngshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "胸",
          "chinese": "胸膛",
          "pinyin": "xiōngtáng"
      },
      {
          "hskclass": "6",
          "japanese": "充実している",
          "chinese": "雄厚",
          "pinyin": "xiónghòu"
      },
      {
          "hskclass": "6",
          "japanese": "恥じらい",
          "chinese": "羞耻",
          "pinyin": "xiūchǐ"
      },
      {
          "hskclass": "6",
          "japanese": "修復",
          "chinese": "修复",
          "pinyin": "xiūfù"
      },
      {
          "hskclass": "6",
          "japanese": "建設する",
          "chinese": "修建",
          "pinyin": "xiūjiàn"
      },
      {
          "hskclass": "6",
          "japanese": "修理する",
          "chinese": "修理",
          "pinyin": "xiūlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "教養",
          "chinese": "修养",
          "pinyin": "xiūyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "刺繡する",
          "chinese": "绣",
          "pinyin": "xiù"
      },
      {
          "hskclass": "6",
          "japanese": "嗅觉",
          "chinese": "嗅觉",
          "pinyin": "xiùjué"
      },
      {
          "hskclass": "6",
          "japanese": "うそである",
          "chinese": "虚假",
          "pinyin": "xūjiǎ"
      },
      {
          "hskclass": "6",
          "japanese": "需要",
          "chinese": "需求",
          "pinyin": "xūqiú"
      },
      {
          "hskclass": "6",
          "japanese": "虚栄",
          "chinese": "虚荣",
          "pinyin": "xūróng"
      },
      {
          "hskclass": "6",
          "japanese": "虚偽",
          "chinese": "虚伪",
          "pinyin": "xūwèi"
      },
      {
          "hskclass": "6",
          "japanese": "心得",
          "chinese": "须知",
          "pinyin": "xūzhī"
      },
      {
          "hskclass": "6",
          "japanese": "許可",
          "chinese": "许可",
          "pinyin": "xǔkě"
      },
      {
          "hskclass": "6",
          "japanese": "泥酔する",
          "chinese": "酗酒",
          "pinyin": "xùjiǔ"
      },
      {
          "hskclass": "6",
          "japanese": "牧畜",
          "chinese": "畜牧",
          "pinyin": "xùmù"
      },
      {
          "hskclass": "6",
          "japanese": "序文",
          "chinese": "序言",
          "pinyin": "xùyán"
      },
      {
          "hskclass": "6",
          "japanese": "宣誓する",
          "chinese": "宣誓",
          "pinyin": "xuānshì"
      },
      {
          "hskclass": "6",
          "japanese": "広く宣伝する",
          "chinese": "宣扬",
          "pinyin": "xuānyáng"
      },
      {
          "hskclass": "6",
          "japanese": "掲げる",
          "chinese": "悬挂",
          "pinyin": "xuán guà"
      },
      {
          "hskclass": "6",
          "japanese": "旋律",
          "chinese": "旋律",
          "pinyin": "xuánlǜ"
      },
      {
          "hskclass": "6",
          "japanese": "懸念する",
          "chinese": "悬念",
          "pinyin": "xuánniàn"
      },
      {
          "hskclass": "6",
          "japanese": "断崖",
          "chinese": "悬崖峭壁",
          "pinyin": "xuányá qiàobì"
      },
      {
          "hskclass": "6",
          "japanese": "回転する",
          "chinese": "旋转",
          "pinyin": "xuánzhuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "選抜する",
          "chinese": "选拔",
          "pinyin": "xuǎnbá"
      },
      {
          "hskclass": "6",
          "japanese": "選手",
          "chinese": "选手",
          "pinyin": "xuǎnshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "弱まる",
          "chinese": "削弱",
          "pinyin": "xuēruò"
      },
      {
          "hskclass": "6",
          "japanese": "学歴",
          "chinese": "学历",
          "pinyin": "xuélì"
      },
      {
          "hskclass": "6",
          "japanese": "学説",
          "chinese": "学说",
          "pinyin": "xuéshuō"
      },
      {
          "hskclass": "6",
          "japanese": "学位",
          "chinese": "学位",
          "pinyin": "xuéwèi"
      },
      {
          "hskclass": "6",
          "japanese": "泣き面にハチ",
          "chinese": "雪上加霜",
          "pinyin": "xuěshàngjiāshuāng"
      },
      {
          "hskclass": "6",
          "japanese": "血圧",
          "chinese": "血压",
          "pinyin": "xiěyā"
      },
      {
          "hskclass": "6",
          "japanese": "よい影響を与える",
          "chinese": "熏陶",
          "pinyin": "xūntáo"
      },
      {
          "hskclass": "6",
          "japanese": "循環する",
          "chinese": "循环",
          "pinyin": "xúnhuán"
      },
      {
          "hskclass": "6",
          "japanese": "巡らする",
          "chinese": "巡逻",
          "pinyin": "xúnluó"
      },
      {
          "hskclass": "6",
          "japanese": "捜し求める",
          "chinese": "寻觅",
          "pinyin": "xúnmì"
      },
      {
          "hskclass": "6",
          "japanese": "一歩々々進める",
          "chinese": "循序渐进",
          "pinyin": "xúnxùjiànjìn"
      },
      {
          "hskclass": "6",
          "japanese": "頭金",
          "chinese": "押金",
          "pinyin": "yājīn"
      },
      {
          "hskclass": "6",
          "japanese": "圧迫",
          "chinese": "压迫",
          "pinyin": "yāpò"
      },
      {
          "hskclass": "6",
          "japanese": "お年玉",
          "chinese": "压岁钱",
          "pinyin": "yāsuìqián"
      },
      {
          "hskclass": "6",
          "japanese": "圧縮",
          "chinese": "压缩",
          "pinyin": "yāsuō"
      },
      {
          "hskclass": "6",
          "japanese": "抑圧する",
          "chinese": "压抑",
          "pinyin": "yāyì"
      },
      {
          "hskclass": "6",
          "japanese": "压榨する",
          "chinese": "压榨",
          "pinyin": "yāzhà"
      },
      {
          "hskclass": "6",
          "japanese": "抑えつける",
          "chinese": "压制",
          "pinyin": "yāzhì"
      },
      {
          "hskclass": "6",
          "japanese": "準優勝",
          "chinese": "亚军",
          "pinyin": "yàjūn"
      },
      {
          "hskclass": "6",
          "japanese": "花火と爆竹",
          "chinese": "烟花爆竹",
          "pinyin": "yānhuā bàozhú"
      },
      {
          "hskclass": "6",
          "japanese": "水浸しにする",
          "chinese": "淹没",
          "pinyin": "yānmò"
      },
      {
          "hskclass": "6",
          "japanese": "沿岸",
          "chinese": "沿海",
          "pinyin": "yánhǎi"
      },
      {
          "hskclass": "6",
          "japanese": "寒さが厳しい",
          "chinese": "严寒",
          "pinyin": "yánhán"
      },
      {
          "hskclass": "6",
          "japanese": "厳禁する",
          "chinese": "严禁",
          "pinyin": "yánjìn"
      },
      {
          "hskclass": "6",
          "japanese": "非常に厳しい",
          "chinese": "严峻",
          "pinyin": "yánjùn"
      },
      {
          "hskclass": "6",
          "japanese": "厳しい",
          "chinese": "严厉",
          "pinyin": "yánlì"
      },
      {
          "hskclass": "6",
          "japanese": "言論",
          "chinese": "言论",
          "pinyin": "yánlùn"
      },
      {
          "hskclass": "6",
          "japanese": "厳密である",
          "chinese": "严密",
          "pinyin": "yánmì"
      },
      {
          "hskclass": "6",
          "japanese": "延期する",
          "chinese": "延期",
          "pinyin": "yánqí"
      },
      {
          "hskclass": "6",
          "japanese": "ひどく暑い",
          "chinese": "炎热",
          "pinyin": "yánrè"
      },
      {
          "hskclass": "6",
          "japanese": "伸びる",
          "chinese": "延伸",
          "pinyin": "yánshēn"
      },
      {
          "hskclass": "6",
          "japanese": "岩石",
          "chinese": "岩石",
          "pinyin": "yánshí"
      },
      {
          "hskclass": "6",
          "japanese": "継続する",
          "chinese": "延续",
          "pinyin": "yánxù"
      },
      {
          "hskclass": "6",
          "japanese": "変化する",
          "chinese": "演变",
          "pinyin": "yǎnbiàn"
      },
      {
          "hskclass": "6",
          "japanese": "覆う",
          "chinese": "掩盖",
          "pinyin": "yǎngài"
      },
      {
          "hskclass": "6",
          "japanese": "視線",
          "chinese": "眼光",
          "pinyin": "yǎnguāng"
      },
      {
          "hskclass": "6",
          "japanese": "守る",
          "chinese": "掩护",
          "pinyin": "yǎnhù"
      },
      {
          "hskclass": "6",
          "japanese": "スピーチ",
          "chinese": "演讲",
          "pinyin": "yǎnjiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "目頭",
          "chinese": "眼色",
          "pinyin": "yǎnsè"
      },
      {
          "hskclass": "6",
          "japanese": "視線",
          "chinese": "眼神",
          "pinyin": "yǎnshén"
      },
      {
          "hskclass": "6",
          "japanese": "誤魔化す",
          "chinese": "掩饰",
          "pinyin": "yǎnshì"
      },
      {
          "hskclass": "6",
          "japanese": "演習",
          "chinese": "演习",
          "pinyin": "yǎnxí"
      },
      {
          "hskclass": "6",
          "japanese": "目下",
          "chinese": "眼下",
          "pinyin": "yǎnxià"
      },
      {
          "hskclass": "6",
          "japanese": "演繹する",
          "chinese": "演绎",
          "pinyin": "yǎnyì"
      },
      {
          "hskclass": "6",
          "japanese": "演奏する",
          "chinese": "演奏",
          "pinyin": "yǎnzòu"
      },
      {
          "hskclass": "6",
          "japanese": "引き渡される",
          "chinese": "验收",
          "pinyin": "yànshōu"
      },
      {
          "hskclass": "6",
          "japanese": "嫌悪する",
          "chinese": "厌恶",
          "pinyin": "yànwù"
      },
      {
          "hskclass": "6",
          "japanese": "検証",
          "chinese": "验证",
          "pinyin": "yànzhèng"
      },
      {
          "hskclass": "6",
          "japanese": "酸素",
          "chinese": "氧气",
          "pinyin": "yǎngqì"
      },
      {
          "hskclass": "6",
          "japanese": "模範",
          "chinese": "样品",
          "pinyin": "yàngpǐn"
      },
      {
          "hskclass": "6",
          "japanese": "揺れる",
          "chinese": "摇摆",
          "pinyin": "yáobǎi"
      },
      {
          "hskclass": "6",
          "japanese": "揺れ動くこと",
          "chinese": "摇滚",
          "pinyin": "yáogǔn"
      },
      {
          "hskclass": "6",
          "japanese": "揺れる",
          "chinese": "摇晃",
          "pinyin": "yáohuàng"
      },
      {
          "hskclass": "6",
          "japanese": "遠隔操縦する",
          "chinese": "遥控",
          "pinyin": "yáokòng"
      },
      {
          "hskclass": "6",
          "japanese": "噂",
          "chinese": "谣言",
          "pinyin": "yáoyán"
      },
      {
          "hskclass": "6",
          "japanese": "はるかに遠い",
          "chinese": "遥远",
          "pinyin": "yáoyuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "激しく怒る",
          "chinese": "咬牙切齿",
          "pinyin": "yǎoyáqièchǐ"
      },
      {
          "hskclass": "6",
          "japanese": "さもないと",
          "chinese": "要不然",
          "pinyin": "yào bùrán"
      },
      {
          "hskclass": "6",
          "japanese": "要点",
          "chinese": "要点",
          "pinyin": "yàodiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "命が欲しい",
          "chinese": "要命",
          "pinyin": "yàomìng"
      },
      {
          "hskclass": "6",
          "japanese": "要素",
          "chinese": "要素",
          "pinyin": "yàosù"
      },
      {
          "hskclass": "6",
          "japanese": "眩しい",
          "chinese": "耀眼",
          "pinyin": "yàoyǎn"
      },
      {
          "hskclass": "6",
          "japanese": "野蛮な",
          "chinese": "野蛮",
          "pinyin": "yěmán"
      },
      {
          "hskclass": "6",
          "japanese": "野心",
          "chinese": "野心",
          "pinyin": "yěxīn"
      },
      {
          "hskclass": "6",
          "japanese": "順に従って",
          "chinese": "依次",
          "pinyin": "yīcì"
      },
      {
          "hskclass": "6",
          "japanese": "一度",
          "chinese": "一度",
          "pinyin": "yīdù"
      },
      {
          "hskclass": "6",
          "japanese": "順風満帆",
          "chinese": "一帆风顺",
          "pinyin": "yīfānfēngshùn"
      },
      {
          "hskclass": "6",
          "japanese": "首尾一貫した",
          "chinese": "一贯",
          "pinyin": "yīguàn"
      },
      {
          "hskclass": "6",
          "japanese": "依然として",
          "chinese": "依旧",
          "pinyin": "yījiù"
      },
      {
          "hskclass": "6",
          "japanese": "一石二鳥である",
          "chinese": "一举两得",
          "pinyin": "yījǔliǎngdé"
      },
      {
          "hskclass": "6",
          "japanese": "基づく",
          "chinese": "依据",
          "pinyin": "yījù"
      },
      {
          "hskclass": "6",
          "japanese": "頼る",
          "chinese": "依靠",
          "pinyin": "yīkào"
      },
      {
          "hskclass": "6",
          "japanese": "当てにする",
          "chinese": "依赖",
          "pinyin": "yīlài"
      },
      {
          "hskclass": "6",
          "japanese": "一流",
          "chinese": "一流",
          "pinyin": "yīliú"
      },
      {
          "hskclass": "6",
          "japanese": "一律である",
          "chinese": "一律",
          "pinyin": "yīlǜ"
      },
      {
          "hskclass": "6",
          "japanese": "一目了然である",
          "chinese": "一目了然",
          "pinyin": "yīmùliǎorán"
      },
      {
          "hskclass": "6",
          "japanese": "昔ながら",
          "chinese": "一如既往",
          "pinyin": "yīrújìwǎng"
      },
      {
          "hskclass": "6",
          "japanese": "衣装",
          "chinese": "衣裳",
          "pinyin": "yīshang"
      },
      {
          "hskclass": "6",
          "japanese": "非常に丁寧",
          "chinese": "一丝不苟",
          "pinyin": "yīsībùgǒu"
      },
      {
          "hskclass": "6",
          "japanese": "頼る",
          "chinese": "依托",
          "pinyin": "yītuō"
      },
      {
          "hskclass": "6",
          "japanese": "以前から",
          "chinese": "一向",
          "pinyin": "yīxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "再三再四",
          "chinese": "一再",
          "pinyin": "yīzài"
      },
      {
          "hskclass": "6",
          "japanese": "遺産",
          "chinese": "遗产",
          "pinyin": "yíchǎn"
      },
      {
          "hskclass": "6",
          "japanese": "遺伝する",
          "chinese": "遗传",
          "pinyin": "yíchuán"
      },
      {
          "hskclass": "6",
          "japanese": "疑惑",
          "chinese": "疑惑",
          "pinyin": "yíhuò"
      },
      {
          "hskclass": "6",
          "japanese": "遺留",
          "chinese": "遗留",
          "pinyin": "yíliú"
      },
      {
          "hskclass": "6",
          "japanese": "測定器",
          "chinese": "仪器",
          "pinyin": "yíqì"
      },
      {
          "hskclass": "6",
          "japanese": "失う",
          "chinese": "遗失",
          "pinyin": "yíshī"
      },
      {
          "hskclass": "6",
          "japanese": "儀式",
          "chinese": "仪式",
          "pinyin": "yíshì"
      },
      {
          "hskclass": "6",
          "japanese": "…しやすいように",
          "chinese": "以便",
          "pinyin": "yǐbiàn"
      },
      {
          "hskclass": "6",
          "japanese": "…しないようにする",
          "chinese": "以免",
          "pinyin": "yǐmiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "以前",
          "chinese": "以往",
          "pinyin": "yǐwǎng"
      },
      {
          "hskclass": "6",
          "japanese": "更には",
          "chinese": "以至",
          "pinyin": "yǐzhì"
      },
      {
          "hskclass": "6",
          "japanese": "…となってしまう",
          "chinese": "以致",
          "pinyin": "yǐzhì"
      },
      {
          "hskclass": "6",
          "japanese": "同様に",
          "chinese": "亦",
          "pinyin": "yì"
      },
      {
          "hskclass": "6",
          "japanese": "翼",
          "chinese": "翼",
          "pinyin": "yì"
      },
      {
          "hskclass": "6",
          "japanese": "尋常でない",
          "chinese": "异常",
          "pinyin": "yìcháng"
      },
      {
          "hskclass": "6",
          "japanese": "気力",
          "chinese": "毅力",
          "pinyin": "yìlì"
      },
      {
          "hskclass": "6",
          "japanese": "予想する",
          "chinese": "意料",
          "pinyin": "yìliào"
      },
      {
          "hskclass": "6",
          "japanese": "きっぱりと",
          "chinese": "毅然",
          "pinyin": "yìrán"
      },
      {
          "hskclass": "6",
          "japanese": "意識",
          "chinese": "意识",
          "pinyin": "yìshí"
      },
      {
          "hskclass": "6",
          "japanese": "意図",
          "chinese": "意图",
          "pinyin": "yìtú"
      },
      {
          "hskclass": "6",
          "japanese": "～を意味している",
          "chinese": "意味着",
          "pinyin": "yìwèizhe"
      },
      {
          "hskclass": "6",
          "japanese": "意図",
          "chinese": "意向",
          "pinyin": "yìxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "意志",
          "chinese": "意志",
          "pinyin": "yìzhì"
      },
      {
          "hskclass": "6",
          "japanese": "抑制",
          "chinese": "抑制",
          "pinyin": "yìzhì"
      },
      {
          "hskclass": "6",
          "japanese": "陰謀",
          "chinese": "阴谋",
          "pinyin": "yīnmóu"
      },
      {
          "hskclass": "6",
          "japanese": "音響",
          "chinese": "音响",
          "pinyin": "yīnxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "隠蔽する",
          "chinese": "隐蔽",
          "pinyin": "yǐnbì"
      },
      {
          "hskclass": "6",
          "japanese": "ガイド",
          "chinese": "引导",
          "pinyin": "yǐndǎo"
      },
      {
          "hskclass": "6",
          "japanese": "隠れた災い",
          "chinese": "隐患",
          "pinyin": "yǐnhuàn"
      },
      {
          "hskclass": "6",
          "japanese": "隠し立てする",
          "chinese": "隐瞒",
          "pinyin": "yǐnmán"
      },
      {
          "hskclass": "6",
          "japanese": "エンジン",
          "chinese": "引擎",
          "pinyin": "yǐnqíng"
      },
      {
          "hskclass": "6",
          "japanese": "飲食",
          "chinese": "饮食",
          "pinyin": "yǐnshí"
      },
      {
          "hskclass": "6",
          "japanese": "人に知られたくないこと",
          "chinese": "隐私",
          "pinyin": "yǐnsī"
      },
      {
          "hskclass": "6",
          "japanese": "引用文",
          "chinese": "引用",
          "pinyin": "yǐnyòng"
      },
      {
          "hskclass": "6",
          "japanese": "かすかである",
          "chinese": "隐约",
          "pinyin": "yǐnyuē"
      },
      {
          "hskclass": "6",
          "japanese": "印刷する",
          "chinese": "印刷",
          "pinyin": "yìnshuā"
      },
      {
          "hskclass": "6",
          "japanese": "赤ちゃん",
          "chinese": "婴儿",
          "pinyin": "yīng'ér"
      },
      {
          "hskclass": "6",
          "japanese": "英明である",
          "chinese": "英明",
          "pinyin": "yīngmíng"
      },
      {
          "hskclass": "6",
          "japanese": "並み外れて勇敢である",
          "chinese": "英勇",
          "pinyin": "yīngyǒng"
      },
      {
          "hskclass": "6",
          "japanese": "もうけ",
          "chinese": "盈利",
          "pinyin": "yínglì"
      },
      {
          "hskclass": "6",
          "japanese": "面と向かう",
          "chinese": "迎面",
          "pinyin": "yíngmiàn"
      },
      {
          "hskclass": "6",
          "japanese": "螢光スクリーン",
          "chinese": "荧屏",
          "pinyin": "yíngpíng"
      },
      {
          "hskclass": "6",
          "japanese": "交際する",
          "chinese": "应酬",
          "pinyin": "yìngchóu"
      },
      {
          "hskclass": "6",
          "japanese": "招きに応じる",
          "chinese": "应邀",
          "pinyin": "yìngyāo"
      },
      {
          "hskclass": "6",
          "japanese": "擁護する",
          "chinese": "拥护",
          "pinyin": "yǒnghù"
      },
      {
          "hskclass": "6",
          "japanese": "低俗である",
          "chinese": "庸俗",
          "pinyin": "yōngsú"
      },
      {
          "hskclass": "6",
          "japanese": "擁する",
          "chinese": "拥有",
          "pinyin": "yǒngyǒu"
      },
      {
          "hskclass": "6",
          "japanese": "とわに変わらない",
          "chinese": "永恒",
          "pinyin": "yǒnghéng"
      },
      {
          "hskclass": "6",
          "japanese": "出現する",
          "chinese": "涌现",
          "pinyin": "yǒngxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "勇気をもって",
          "chinese": "勇于",
          "pinyin": "yǒngyú"
      },
      {
          "hskclass": "6",
          "japanese": "飛び跳ねる",
          "chinese": "踊跃",
          "pinyin": "yǒngyuè"
      },
      {
          "hskclass": "6",
          "japanese": "熱心である",
          "chinese": "用功",
          "pinyin": "yònggōng"
      },
      {
          "hskclass": "6",
          "japanese": "ユーザー",
          "chinese": "用户",
          "pinyin": "yònghù"
      },
      {
          "hskclass": "6",
          "japanese": "自然淘汰する",
          "chinese": "优胜劣汰",
          "pinyin": "yōushèngliètài"
      },
      {
          "hskclass": "6",
          "japanese": "優先",
          "chinese": "优先",
          "pinyin": "yōuxiān"
      },
      {
          "hskclass": "6",
          "japanese": "ずば抜けている",
          "chinese": "优异",
          "pinyin": "yōuyì"
      },
      {
          "hskclass": "6",
          "japanese": "憂うつである",
          "chinese": "忧郁",
          "pinyin": "yōuyù"
      },
      {
          "hskclass": "6",
          "japanese": "優越",
          "chinese": "优越",
          "pinyin": "yōuyuè"
      },
      {
          "hskclass": "6",
          "japanese": "脂っこい",
          "chinese": "油腻",
          "pinyin": "yóunì"
      },
      {
          "hskclass": "6",
          "japanese": "塗る",
          "chinese": "油漆",
          "pinyin": "yóuqī"
      },
      {
          "hskclass": "6",
          "japanese": "まるで…のようである",
          "chinese": "犹如",
          "pinyin": "yóurú"
      },
      {
          "hskclass": "6",
          "japanese": "整然としていて秩序立っている",
          "chinese": "有条不紊",
          "pinyin": "yǒutiáobùwěn"
      },
      {
          "hskclass": "6",
          "japanese": "誘惑",
          "chinese": "诱惑",
          "pinyin": "yòuhuò"
      },
      {
          "hskclass": "6",
          "japanese": "幼稚な",
          "chinese": "幼稚",
          "pinyin": "yòuzhì"
      },
      {
          "hskclass": "6",
          "japanese": "愚かである",
          "chinese": "愚蠢",
          "pinyin": "yúchǔn"
      },
      {
          "hskclass": "6",
          "japanese": "世論",
          "chinese": "舆论",
          "pinyin": "yúlùn"
      },
      {
          "hskclass": "6",
          "japanese": "無知である",
          "chinese": "愚昧",
          "pinyin": "yúmèi"
      },
      {
          "hskclass": "6",
          "japanese": "漁民",
          "chinese": "渔民",
          "pinyin": "yúmín"
      },
      {
          "hskclass": "6",
          "japanese": "日に日に増加する",
          "chinese": "与日俱增",
          "pinyin": "yǔrìjùzēng"
      },
      {
          "hskclass": "6",
          "japanese": "羽毛服",
          "chinese": "羽绒服",
          "pinyin": "yǔróngfú"
      },
      {
          "hskclass": "6",
          "japanese": "与える",
          "chinese": "予以",
          "pinyin": "yǔ yǐ"
      },
      {
          "hskclass": "6",
          "japanese": "病気が治る",
          "chinese": "愈",
          "pinyin": "yù"
      },
      {
          "hskclass": "6",
          "japanese": "こてをかける",
          "chinese": "熨",
          "pinyin": "yùn"
      },
      {
          "hskclass": "6",
          "japanese": "予測する",
          "chinese": "预料",
          "pinyin": "yùliào"
      },
      {
          "hskclass": "6",
          "japanese": "予期する",
          "chinese": "预期",
          "pinyin": "yùqí"
      },
      {
          "hskclass": "6",
          "japanese": "予選をする",
          "chinese": "预赛",
          "pinyin": "yùsài"
      },
      {
          "hskclass": "6",
          "japanese": "予算",
          "chinese": "预算",
          "pinyin": "yùsuàn"
      },
      {
          "hskclass": "6",
          "japanese": "欲望",
          "chinese": "欲望",
          "pinyin": "yùwàng"
      },
      {
          "hskclass": "6",
          "japanese": "前もって",
          "chinese": "预先",
          "pinyin": "yùxiān"
      },
      {
          "hskclass": "6",
          "japanese": "預言",
          "chinese": "预言",
          "pinyin": "yùyán"
      },
      {
          "hskclass": "6",
          "japanese": "たとえ話",
          "chinese": "寓言",
          "pinyin": "yùyán"
      },
      {
          "hskclass": "6",
          "japanese": "兆候",
          "chinese": "预兆",
          "pinyin": "yùzhào"
      },
      {
          "hskclass": "6",
          "japanese": "罪をなすりつける",
          "chinese": "冤枉",
          "pinyin": "yuānwǎng"
      },
      {
          "hskclass": "6",
          "japanese": "原告",
          "chinese": "原告",
          "pinyin": "yuángào"
      },
      {
          "hskclass": "6",
          "japanese": "原理",
          "chinese": "原理",
          "pinyin": "yuánlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "園林",
          "chinese": "园林",
          "pinyin": "yuánlín"
      },
      {
          "hskclass": "6",
          "japanese": "ふっくらとして豊かである",
          "chinese": "圆满",
          "pinyin": "yuánmǎn"
      },
      {
          "hskclass": "6",
          "japanese": "源泉",
          "chinese": "源泉",
          "pinyin": "yuánquán"
      },
      {
          "hskclass": "6",
          "japanese": "最初の",
          "chinese": "原始",
          "pinyin": "yuánshǐ"
      },
      {
          "hskclass": "6",
          "japanese": "国家主席",
          "chinese": "元首",
          "pinyin": "yuánshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "元素",
          "chinese": "元素",
          "pinyin": "yuánsù"
      },
      {
          "hskclass": "6",
          "japanese": "元の",
          "chinese": "原先",
          "pinyin": "yuánxiān"
      },
      {
          "hskclass": "6",
          "japanese": "上元の節句",
          "chinese": "元宵节",
          "pinyin": "yuánxiāo jié"
      },
      {
          "hskclass": "6",
          "japanese": "約束",
          "chinese": "约束",
          "pinyin": "yuēshù"
      },
      {
          "hskclass": "6",
          "japanese": "妻の父",
          "chinese": "岳父",
          "pinyin": "yuèfù"
      },
      {
          "hskclass": "6",
          "japanese": "楽譜",
          "chinese": "乐谱",
          "pinyin": "yuèpǔ"
      },
      {
          "hskclass": "6",
          "japanese": "埋まる",
          "chinese": "蕴藏",
          "pinyin": "yùncáng"
      },
      {
          "hskclass": "6",
          "japanese": "酒を造る",
          "chinese": "酝酿",
          "pinyin": "yùnniàng"
      },
      {
          "hskclass": "6",
          "japanese": "演算する",
          "chinese": "运算",
          "pinyin": "yùnsuàn"
      },
      {
          "hskclass": "6",
          "japanese": "運行する",
          "chinese": "运行",
          "pinyin": "yùnxíng"
      },
      {
          "hskclass": "6",
          "japanese": "身ごもって子供を生む",
          "chinese": "孕育",
          "pinyin": "yùnyù"
      },
      {
          "hskclass": "6",
          "japanese": "落ちる",
          "chinese": "砸",
          "pinyin": "zá"
      },
      {
          "hskclass": "6",
          "japanese": "雑技",
          "chinese": "杂技",
          "pinyin": "zájì"
      },
      {
          "hskclass": "6",
          "japanese": "交雑する",
          "chinese": "杂交",
          "pinyin": "zájiāo"
      },
      {
          "hskclass": "6",
          "japanese": "どのように",
          "chinese": "咋",
          "pinyin": "zǎ"
      },
      {
          "hskclass": "6",
          "japanese": "災難",
          "chinese": "灾难",
          "pinyin": "zāinàn"
      },
      {
          "hskclass": "6",
          "japanese": "栽培する",
          "chinese": "栽培",
          "pinyin": "zāipéi"
      },
      {
          "hskclass": "6",
          "japanese": "虐殺する",
          "chinese": "宰",
          "pinyin": "zǎi"
      },
      {
          "hskclass": "6",
          "japanese": "気にかける",
          "chinese": "在乎",
          "pinyin": "zàihū"
      },
      {
          "hskclass": "6",
          "japanese": "ますます励む",
          "chinese": "再接再厉",
          "pinyin": "zàijiēzàilì"
      },
      {
          "hskclass": "6",
          "japanese": "気に留める",
          "chinese": "在意",
          "pinyin": "zàiyì"
      },
      {
          "hskclass": "6",
          "japanese": "寄せ集める",
          "chinese": "攒",
          "pinyin": "zǎn"
      },
      {
          "hskclass": "6",
          "japanese": "しばらくの間",
          "chinese": "暂且",
          "pinyin": "zànqiě"
      },
      {
          "hskclass": "6",
          "japanese": "褒めたたえる",
          "chinese": "赞叹",
          "pinyin": "zàntàn"
      },
      {
          "hskclass": "6",
          "japanese": "賛同する",
          "chinese": "赞同",
          "pinyin": "zàntóng"
      },
      {
          "hskclass": "6",
          "japanese": "褒めたたえる",
          "chinese": "赞扬",
          "pinyin": "zànyáng"
      },
      {
          "hskclass": "6",
          "japanese": "援助する",
          "chinese": "赞助",
          "pinyin": "zànzhù"
      },
      {
          "hskclass": "6",
          "japanese": "遭う",
          "chinese": "遭受",
          "pinyin": "zāoshòu"
      },
      {
          "hskclass": "6",
          "japanese": "粗末にする",
          "chinese": "糟蹋",
          "pinyin": "zāotà"
      },
      {
          "hskclass": "6",
          "japanese": "災害に遭う",
          "chinese": "遭殃",
          "pinyin": "zāoyāng"
      },
      {
          "hskclass": "6",
          "japanese": "遭遇する",
          "chinese": "遭遇",
          "pinyin": "zāoyù"
      },
      {
          "hskclass": "6",
          "japanese": "反逆する",
          "chinese": "造反",
          "pinyin": "zàofǎn"
      },
      {
          "hskclass": "6",
          "japanese": "形を作る",
          "chinese": "造型",
          "pinyin": "zàoxíng"
      },
      {
          "hskclass": "6",
          "japanese": "ノイズ",
          "chinese": "噪音",
          "pinyin": "zàoyīn"
      },
      {
          "hskclass": "6",
          "japanese": "とがめる",
          "chinese": "责怪",
          "pinyin": "zéguài"
      },
      {
          "hskclass": "6",
          "japanese": "盗人",
          "chinese": "贼",
          "pinyin": "zéi"
      },
      {
          "hskclass": "6",
          "japanese": "増やす",
          "chinese": "增添",
          "pinyin": "zēngtiān"
      },
      {
          "hskclass": "6",
          "japanese": "贈呈する",
          "chinese": "赠送",
          "pinyin": "zèngsòng"
      },
      {
          "hskclass": "6",
          "japanese": "かす",
          "chinese": "渣",
          "pinyin": "zhā"
      },
      {
          "hskclass": "6",
          "japanese": "縛る",
          "chinese": "扎",
          "pinyin": "zhā"
      },
      {
          "hskclass": "6",
          "japanese": "丈夫である",
          "chinese": "扎实",
          "pinyin": "zhāshi"
      },
      {
          "hskclass": "6",
          "japanese": "瞬きする",
          "chinese": "眨",
          "pinyin": "zhǎ"
      },
      {
          "hskclass": "6",
          "japanese": "だまして取る",
          "chinese": "诈骗",
          "pinyin": "zhàpiàn"
      },
      {
          "hskclass": "6",
          "japanese": "要点をまとめる",
          "chinese": "摘要",
          "pinyin": "zhāiyào"
      },
      {
          "hskclass": "6",
          "japanese": "債権",
          "chinese": "债券",
          "pinyin": "zhàiquàn"
      },
      {
          "hskclass": "6",
          "japanese": "お陰を被る",
          "chinese": "沾光",
          "pinyin": "zhānguāng"
      },
      {
          "hskclass": "6",
          "japanese": "仰ぎ見る",
          "chinese": "瞻仰",
          "pinyin": "zhānyǎng"
      },
      {
          "hskclass": "6",
          "japanese": "断固として猶予しない",
          "chinese": "斩钉截铁",
          "pinyin": "zhǎndīngjiétiě"
      },
      {
          "hskclass": "6",
          "japanese": "展示",
          "chinese": "展示",
          "pinyin": "zhǎnshì"
      },
      {
          "hskclass": "6",
          "japanese": "展望",
          "chinese": "展望",
          "pinyin": "zhǎnwàng"
      },
      {
          "hskclass": "6",
          "japanese": "展開する",
          "chinese": "展现",
          "pinyin": "zhǎnxiàn"
      },
      {
          "hskclass": "6",
          "japanese": "斬新である",
          "chinese": "崭新",
          "pinyin": "zhǎnxīn"
      },
      {
          "hskclass": "6",
          "japanese": "戦う",
          "chinese": "战斗",
          "pinyin": "zhàndòu"
      },
      {
          "hskclass": "6",
          "japanese": "占拠する",
          "chinese": "占据",
          "pinyin": "zhànjù"
      },
      {
          "hskclass": "6",
          "japanese": "占領する",
          "chinese": "占领",
          "pinyin": "zhànlǐng"
      },
      {
          "hskclass": "6",
          "japanese": "戦略",
          "chinese": "战略",
          "pinyin": "zhànlüè"
      },
      {
          "hskclass": "6",
          "japanese": "戦術",
          "chinese": "战术",
          "pinyin": "zhànshù"
      },
      {
          "hskclass": "6",
          "japanese": "戦争",
          "chinese": "战役",
          "pinyin": "zhànyì"
      },
      {
          "hskclass": "6",
          "japanese": "占有する",
          "chinese": "占有",
          "pinyin": "zhànyǒu"
      },
      {
          "hskclass": "6",
          "japanese": "規約",
          "chinese": "章程",
          "pinyin": "zhāngchéng"
      },
      {
          "hskclass": "6",
          "japanese": "先輩",
          "chinese": "长辈",
          "pinyin": "zhǎngbèi"
      },
      {
          "hskclass": "6",
          "japanese": "阻止する",
          "chinese": "障碍",
          "pinyin": "zhàng'ài"
      },
      {
          "hskclass": "6",
          "japanese": "テント",
          "chinese": "帐篷",
          "pinyin": "zhàngpéng"
      },
      {
          "hskclass": "6",
          "japanese": "気力があふれていること",
          "chinese": "朝气蓬勃",
          "pinyin": "zhāoqì péngbó"
      },
      {
          "hskclass": "6",
          "japanese": "採用募集する",
          "chinese": "招收",
          "pinyin": "zhāoshōu"
      },
      {
          "hskclass": "6",
          "japanese": "入札する",
          "chinese": "招投标",
          "pinyin": "zhāo tóubiāo"
      },
      {
          "hskclass": "6",
          "japanese": "夢中になる",
          "chinese": "着迷",
          "pinyin": "zháomí"
      },
      {
          "hskclass": "6",
          "japanese": "沼",
          "chinese": "沼泽",
          "pinyin": "zhǎozé"
      },
      {
          "hskclass": "6",
          "japanese": "面倒を見る",
          "chinese": "照料",
          "pinyin": "zhàoliào"
      },
      {
          "hskclass": "6",
          "japanese": "元通り",
          "chinese": "照样",
          "pinyin": "zhàoyàng"
      },
      {
          "hskclass": "6",
          "japanese": "照り輝く",
          "chinese": "照耀",
          "pinyin": "zhàoyào"
      },
      {
          "hskclass": "6",
          "japanese": "対応する",
          "chinese": "照应",
          "pinyin": "zhàoyìng"
      },
      {
          "hskclass": "6",
          "japanese": "遮る",
          "chinese": "遮挡",
          "pinyin": "zhēdǎng"
      },
      {
          "hskclass": "6",
          "japanese": "寝返りを打つ",
          "chinese": "折腾",
          "pinyin": "zhēteng"
      },
      {
          "hskclass": "6",
          "japanese": "折れる",
          "chinese": "折",
          "pinyin": "zhé"
      },
      {
          "hskclass": "6",
          "japanese": "苦痛を与える",
          "chinese": "折磨",
          "pinyin": "zhémó"
      },
      {
          "hskclass": "6",
          "japanese": "貴重である",
          "chinese": "珍贵",
          "pinyin": "zhēnguì"
      },
      {
          "hskclass": "6",
          "japanese": "偵察する",
          "chinese": "侦探",
          "pinyin": "zhēntàn"
      },
      {
          "hskclass": "6",
          "japanese": "稀有の",
          "chinese": "珍稀",
          "pinyin": "zhēnxī"
      },
      {
          "hskclass": "6",
          "japanese": "真相",
          "chinese": "真相",
          "pinyin": "zhēnxiàng"
      },
      {
          "hskclass": "6",
          "japanese": "真摯",
          "chinese": "真挚",
          "pinyin": "zhēnzhì"
      },
      {
          "hskclass": "6",
          "japanese": "真珠",
          "chinese": "珍珠",
          "pinyin": "zhēnzhū"
      },
      {
          "hskclass": "6",
          "japanese": "吟味する",
          "chinese": "斟酌",
          "pinyin": "zhēnzhuó"
      },
      {
          "hskclass": "6",
          "japanese": "陣地",
          "chinese": "阵地",
          "pinyin": "zhèndì"
      },
      {
          "hskclass": "6",
          "japanese": "沈着である",
          "chinese": "镇定",
          "pinyin": "zhèndìng"
      },
      {
          "hskclass": "6",
          "japanese": "奮い立つ",
          "chinese": "振奋",
          "pinyin": "zhènfèn"
      },
      {
          "hskclass": "6",
          "japanese": "驚愕する",
          "chinese": "震惊",
          "pinyin": "zhènjīng"
      },
      {
          "hskclass": "6",
          "japanese": "冷静である",
          "chinese": "镇静",
          "pinyin": "zhènjìng"
      },
      {
          "hskclass": "6",
          "japanese": "戦闘隊形",
          "chinese": "阵容",
          "pinyin": "zhènróng"
      },
      {
          "hskclass": "6",
          "japanese": "盛んになる",
          "chinese": "振兴",
          "pinyin": "zhènxīng"
      },
      {
          "hskclass": "6",
          "japanese": "鎮圧する",
          "chinese": "镇压",
          "pinyin": "zhènyā"
      },
      {
          "hskclass": "6",
          "japanese": "紛争",
          "chinese": "争端",
          "pinyin": "zhēngduān"
      },
      {
          "hskclass": "6",
          "japanese": "争奪する",
          "chinese": "争夺",
          "pinyin": "zhēngduó"
      },
      {
          "hskclass": "6",
          "japanese": "蒸発",
          "chinese": "蒸发",
          "pinyin": "zhēngfā"
      },
      {
          "hskclass": "6",
          "japanese": "征服",
          "chinese": "征服",
          "pinyin": "zhēngfú"
      },
      {
          "hskclass": "6",
          "japanese": "頑張る",
          "chinese": "争气",
          "pinyin": "zhēngqì"
      },
      {
          "hskclass": "6",
          "japanese": "取り立てる",
          "chinese": "征收",
          "pinyin": "zhēngshōu"
      },
      {
          "hskclass": "6",
          "japanese": "遅れまいと先を争う",
          "chinese": "争先恐后",
          "pinyin": "zhēngxiānkǒnghòu"
      },
      {
          "hskclass": "6",
          "japanese": "論争する",
          "chinese": "争议",
          "pinyin": "zhēngyì"
      },
      {
          "hskclass": "6",
          "japanese": "正月",
          "chinese": "正月",
          "pinyin": "zhēngyuè"
      },
      {
          "hskclass": "6",
          "japanese": "あがく",
          "chinese": "挣扎",
          "pinyin": "zhēngzhá"
      },
      {
          "hskclass": "6",
          "japanese": "整顿する",
          "chinese": "整顿",
          "pinyin": "zhěngdùn"
      },
      {
          "hskclass": "6",
          "japanese": "ちょうど…の時に当たる",
          "chinese": "正当",
          "pinyin": "zhèngdàng"
      },
      {
          "hskclass": "6",
          "japanese": "正負",
          "chinese": "正负",
          "pinyin": "zhèng fù"
      },
      {
          "hskclass": "6",
          "japanese": "規定どおりである",
          "chinese": "正规",
          "pinyin": "zhèngguī"
      },
      {
          "hskclass": "6",
          "japanese": "まじめである",
          "chinese": "正经",
          "pinyin": "zhèngjīng"
      },
      {
          "hskclass": "6",
          "japanese": "正気",
          "chinese": "正气",
          "pinyin": "zhèngqì"
      },
      {
          "hskclass": "6",
          "japanese": "政権",
          "chinese": "政权",
          "pinyin": "zhèngquán"
      },
      {
          "hskclass": "6",
          "japanese": "証明する",
          "chinese": "证实",
          "pinyin": "zhèngshí"
      },
      {
          "hskclass": "6",
          "japanese": "証書",
          "chinese": "证书",
          "pinyin": "zhèngshū"
      },
      {
          "hskclass": "6",
          "japanese": "正義",
          "chinese": "正义",
          "pinyin": "zhèngyì"
      },
      {
          "hskclass": "6",
          "japanese": "厳粛である",
          "chinese": "郑重",
          "pinyin": "zhèngzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "症状",
          "chinese": "症状",
          "pinyin": "zhèngzhuàng"
      },
      {
          "hskclass": "6",
          "japanese": "枝",
          "chinese": "枝",
          "pinyin": "zhī"
      },
      {
          "hskclass": "6",
          "japanese": "支える",
          "chinese": "支撑",
          "pinyin": "zhīchēng"
      },
      {
          "hskclass": "6",
          "japanese": "支出",
          "chinese": "支出",
          "pinyin": "zhīchū"
      },
      {
          "hskclass": "6",
          "japanese": "脂肪",
          "chinese": "脂肪",
          "pinyin": "zhīfáng"
      },
      {
          "hskclass": "6",
          "japanese": "感覚",
          "chinese": "知觉",
          "pinyin": "zhījué"
      },
      {
          "hskclass": "6",
          "japanese": "支流",
          "chinese": "支流",
          "pinyin": "zhīliú"
      },
      {
          "hskclass": "6",
          "japanese": "支配する",
          "chinese": "支配",
          "pinyin": "zhīpèi"
      },
      {
          "hskclass": "6",
          "japanese": "支援する",
          "chinese": "支援",
          "pinyin": "zhīyuán"
      },
      {
          "hskclass": "6",
          "japanese": "支柱",
          "chinese": "支柱",
          "pinyin": "zhīzhù"
      },
      {
          "hskclass": "6",
          "japanese": "満足して過ごす",
          "chinese": "知足常乐",
          "pinyin": "zhīzú cháng lè"
      },
      {
          "hskclass": "6",
          "japanese": "当直する",
          "chinese": "值班",
          "pinyin": "zhíbān"
      },
      {
          "hskclass": "6",
          "japanese": "生放送をする",
          "chinese": "直播",
          "pinyin": "zhíbò"
      },
      {
          "hskclass": "6",
          "japanese": "植民地",
          "chinese": "殖民地",
          "pinyin": "zhímíndì"
      },
      {
          "hskclass": "6",
          "japanese": "機能",
          "chinese": "职能",
          "pinyin": "zhínéng"
      },
      {
          "hskclass": "6",
          "japanese": "職位",
          "chinese": "职位",
          "pinyin": "zhíwèi"
      },
      {
          "hskclass": "6",
          "japanese": "職務",
          "chinese": "职务",
          "pinyin": "zhíwù"
      },
      {
          "hskclass": "6",
          "japanese": "指標",
          "chinese": "指标",
          "pinyin": "zhǐbiāo"
      },
      {
          "hskclass": "6",
          "japanese": "指定する",
          "chinese": "指定",
          "pinyin": "zhǐdìng"
      },
      {
          "hskclass": "6",
          "japanese": "爪",
          "chinese": "指甲",
          "pinyin": "zhǐjiǎ"
      },
      {
          "hskclass": "6",
          "japanese": "指示する",
          "chinese": "指令",
          "pinyin": "zhǐlìng"
      },
      {
          "hskclass": "6",
          "japanese": "コンパス",
          "chinese": "指南针",
          "pinyin": "zhǐnánzhēn"
      },
      {
          "hskclass": "6",
          "japanese": "指示する",
          "chinese": "指示",
          "pinyin": "zhǐshì"
      },
      {
          "hskclass": "6",
          "japanese": "心から期待する",
          "chinese": "指望",
          "pinyin": "zhǐwàng"
      },
      {
          "hskclass": "6",
          "japanese": "責める",
          "chinese": "指责",
          "pinyin": "zhǐzé"
      },
      {
          "hskclass": "6",
          "japanese": "治安",
          "chinese": "治安",
          "pinyin": "zhì'ān"
      },
      {
          "hskclass": "6",
          "japanese": "制裁",
          "chinese": "制裁",
          "pinyin": "zhìcái"
      },
      {
          "hskclass": "6",
          "japanese": "あいさつをする",
          "chinese": "致辞",
          "pinyin": "zhìcí"
      },
      {
          "hskclass": "6",
          "japanese": "立案する",
          "chinese": "制订",
          "pinyin": "zhìdìng"
      },
      {
          "hskclass": "6",
          "japanese": "制服",
          "chinese": "制服",
          "pinyin": "zhìfú"
      },
      {
          "hskclass": "6",
          "japanese": "整備する",
          "chinese": "治理",
          "pinyin": "zhìlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "知力",
          "chinese": "智力",
          "pinyin": "zhìlì"
      },
      {
          "hskclass": "6",
          "japanese": "取り組む",
          "chinese": "致力于",
          "pinyin": "zhìlì yú"
      },
      {
          "hskclass": "6",
          "japanese": "滞留する",
          "chinese": "滞留",
          "pinyin": "zhìliú"
      },
      {
          "hskclass": "6",
          "japanese": "知能",
          "chinese": "智能",
          "pinyin": "zhìnéng"
      },
      {
          "hskclass": "6",
          "japanese": "気概",
          "chinese": "志气",
          "pinyin": "zhìqì"
      },
      {
          "hskclass": "6",
          "japanese": "知能指数",
          "chinese": "智商",
          "pinyin": "zhìshāng"
      },
      {
          "hskclass": "6",
          "japanese": "…の結果を招く",
          "chinese": "致使",
          "pinyin": "zhìshǐ"
      },
      {
          "hskclass": "6",
          "japanese": "制約",
          "chinese": "制约",
          "pinyin": "zhìyuē"
      },
      {
          "hskclass": "6",
          "japanese": "制止する",
          "chinese": "制止",
          "pinyin": "zhìzhǐ"
      },
      {
          "hskclass": "6",
          "japanese": "忠誠",
          "chinese": "忠诚",
          "pinyin": "zhōngchéng"
      },
      {
          "hskclass": "6",
          "japanese": "終点",
          "chinese": "终点",
          "pinyin": "zhōngdiǎn"
      },
      {
          "hskclass": "6",
          "japanese": "中断する",
          "chinese": "中断",
          "pinyin": "zhōngduàn"
      },
      {
          "hskclass": "6",
          "japanese": "結局",
          "chinese": "终究",
          "pinyin": "zhōngjiù"
      },
      {
          "hskclass": "6",
          "japanese": "中立",
          "chinese": "中立",
          "pinyin": "zhōnglì"
      },
      {
          "hskclass": "6",
          "japanese": "一年中",
          "chinese": "终年",
          "pinyin": "zhōngnián"
      },
      {
          "hskclass": "6",
          "japanese": "生涯",
          "chinese": "终身",
          "pinyin": "zhōngshēn"
      },
      {
          "hskclass": "6",
          "japanese": "忠実な",
          "chinese": "忠实",
          "pinyin": "zhōngshí"
      },
      {
          "hskclass": "6",
          "japanese": "心からの",
          "chinese": "衷心",
          "pinyin": "zhōngxīn"
      },
      {
          "hskclass": "6",
          "japanese": "中央",
          "chinese": "中央",
          "pinyin": "zhōngyāng"
      },
      {
          "hskclass": "6",
          "japanese": "終了する",
          "chinese": "终止",
          "pinyin": "zhōngzhǐ"
      },
      {
          "hskclass": "6",
          "japanese": "腫瘍",
          "chinese": "肿瘤",
          "pinyin": "zhǒngliú"
      },
      {
          "hskclass": "6",
          "japanese": "種",
          "chinese": "种子",
          "pinyin": "zhǒngzǐ"
      },
      {
          "hskclass": "6",
          "japanese": "種族",
          "chinese": "种族",
          "pinyin": "zhǒngzú"
      },
      {
          "hskclass": "6",
          "japanese": "広く知られている",
          "chinese": "众所周知",
          "pinyin": "zhòngsuǒzhōuzhī"
      },
      {
          "hskclass": "6",
          "japanese": "重心",
          "chinese": "重心",
          "pinyin": "zhòngxīn"
      },
      {
          "hskclass": "6",
          "japanese": "州",
          "chinese": "州",
          "pinyin": "zhōu"
      },
      {
          "hskclass": "6",
          "japanese": "舟",
          "chinese": "舟",
          "pinyin": "zhōu"
      },
      {
          "hskclass": "6",
          "japanese": "粥",
          "chinese": "粥",
          "pinyin": "zhōu"
      },
      {
          "hskclass": "6",
          "japanese": "周辺",
          "chinese": "周边",
          "pinyin": "zhōubiān"
      },
      {
          "hskclass": "6",
          "japanese": "周到で綿密である",
          "chinese": "周密",
          "pinyin": "zhōumì"
      },
      {
          "hskclass": "6",
          "japanese": "一周年",
          "chinese": "周年",
          "pinyin": "zhōunián"
      },
      {
          "hskclass": "6",
          "japanese": "周期",
          "chinese": "周期",
          "pinyin": "zhōuqí"
      },
      {
          "hskclass": "6",
          "japanese": "紆余曲折",
          "chinese": "周折",
          "pinyin": "zhōuzhé"
      },
      {
          "hskclass": "6",
          "japanese": "回転する",
          "chinese": "周转",
          "pinyin": "zhōuzhuǎn"
      },
      {
          "hskclass": "6",
          "japanese": "しわ",
          "chinese": "皱纹",
          "pinyin": "zhòuwén"
      },
      {
          "hskclass": "6",
          "japanese": "昼夜",
          "chinese": "昼夜",
          "pinyin": "zhòuyè"
      },
      {
          "hskclass": "6",
          "japanese": "木の株",
          "chinese": "株",
          "pinyin": "zhū"
      },
      {
          "hskclass": "6",
          "japanese": "皆さん",
          "chinese": "诸位",
          "pinyin": "zhūwèi"
      },
      {
          "hskclass": "6",
          "japanese": "年々",
          "chinese": "逐年",
          "pinyin": "zhúnián"
      },
      {
          "hskclass": "6",
          "japanese": "体・頭を支える",
          "chinese": "拄",
          "pinyin": "zhǔ"
      },
      {
          "hskclass": "6",
          "japanese": "主催する",
          "chinese": "主办",
          "pinyin": "zhǔbàn"
      },
      {
          "hskclass": "6",
          "japanese": "主導的な",
          "chinese": "主导",
          "pinyin": "zhǔdǎo"
      },
      {
          "hskclass": "6",
          "japanese": "管轄する",
          "chinese": "主管",
          "pinyin": "zhǔguǎn"
      },
      {
          "hskclass": "6",
          "japanese": "主流の",
          "chinese": "主流",
          "pinyin": "zhǔliú"
      },
      {
          "hskclass": "6",
          "japanese": "主権",
          "chinese": "主权",
          "pinyin": "zhǔquán"
      },
      {
          "hskclass": "6",
          "japanese": "テーマ",
          "chinese": "主题",
          "pinyin": "zhǔtí"
      },
      {
          "hskclass": "6",
          "japanese": "補佐役",
          "chinese": "助理",
          "pinyin": "zhùlǐ"
      },
      {
          "hskclass": "6",
          "japanese": "注射",
          "chinese": "注射",
          "pinyin": "zhùshè"
      },
      {
          "hskclass": "6",
          "japanese": "注視する",
          "chinese": "注视",
          "pinyin": "zhùshì"
      },
      {
          "hskclass": "6",
          "japanese": "注釈する",
          "chinese": "注释",
          "pinyin": "zhùshì"
      },
      {
          "hskclass": "6",
          "japanese": "助手",
          "chinese": "助手",
          "pinyin": "zhùshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "鋳造する",
          "chinese": "铸造",
          "pinyin": "zhùzào"
      },
      {
          "hskclass": "6",
          "japanese": "駐留する",
          "chinese": "驻扎",
          "pinyin": "zhùzhá"
      },
      {
          "hskclass": "6",
          "japanese": "住宅",
          "chinese": "住宅",
          "pinyin": "zhùzhái"
      },
      {
          "hskclass": "6",
          "japanese": "重視する",
          "chinese": "注重",
          "pinyin": "zhùzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "著作する",
          "chinese": "著作",
          "pinyin": "zhùzuò"
      },
      {
          "hskclass": "6",
          "japanese": "投げる",
          "chinese": "拽",
          "pinyin": "zhuāi"
      },
      {
          "hskclass": "6",
          "japanese": "専門知識",
          "chinese": "专长",
          "pinyin": "zhuāncháng"
      },
      {
          "hskclass": "6",
          "japanese": "专程",
          "chinese": "专程",
          "pinyin": "zhuānchéng"
      },
      {
          "hskclass": "6",
          "japanese": "専門",
          "chinese": "专科",
          "pinyin": "zhuānkē"
      },
      {
          "hskclass": "6",
          "japanese": "特許",
          "chinese": "专利",
          "pinyin": "zhuānlì"
      },
      {
          "hskclass": "6",
          "japanese": "特別のテーマ",
          "chinese": "专题",
          "pinyin": "zhuāntí"
      },
      {
          "hskclass": "6",
          "japanese": "タイル",
          "chinese": "砖瓦",
          "pinyin": "zhuān wǎ"
      },
      {
          "hskclass": "6",
          "japanese": "转达",
          "chinese": "转达",
          "pinyin": "zhuǎndá"
      },
      {
          "hskclass": "6",
          "japanese": "譲渡する",
          "chinese": "转让",
          "pinyin": "zhuǎnràng"
      },
      {
          "hskclass": "6",
          "japanese": "変える",
          "chinese": "转移",
          "pinyin": "zhuǎnyí"
      },
      {
          "hskclass": "6",
          "japanese": "変化",
          "chinese": "转折",
          "pinyin": "zhuǎnzhé"
      },
      {
          "hskclass": "6",
          "japanese": "伝記",
          "chinese": "传记",
          "pinyin": "zhuànjì"
      },
      {
          "hskclass": "6",
          "japanese": "装備する",
          "chinese": "装备",
          "pinyin": "zhuāngbèi"
      },
      {
          "hskclass": "6",
          "japanese": "積み卸しする",
          "chinese": "装卸",
          "pinyin": "zhuāngxiè"
      },
      {
          "hskclass": "6",
          "japanese": "厳粛である",
          "chinese": "庄严",
          "pinyin": "zhuāngyán"
      },
      {
          "hskclass": "6",
          "japanese": "まじめで慎重である",
          "chinese": "庄重",
          "pinyin": "zhuāngzhòng"
      },
      {
          "hskclass": "6",
          "japanese": "旗",
          "chinese": "幢",
          "pinyin": "chuáng"
      },
      {
          "hskclass": "6",
          "japanese": "壮観である",
          "chinese": "壮观",
          "pinyin": "zhuàngguān"
      },
      {
          "hskclass": "6",
          "japanese": "壮麗である",
          "chinese": "壮丽",
          "pinyin": "zhuànglì"
      },
      {
          "hskclass": "6",
          "japanese": "壮烈である",
          "chinese": "壮烈",
          "pinyin": "zhuàngliè"
      },
      {
          "hskclass": "6",
          "japanese": "追悼する",
          "chinese": "追悼",
          "pinyin": "zhuīdào"
      },
      {
          "hskclass": "6",
          "japanese": "追求する",
          "chinese": "追究",
          "pinyin": "zhuījiù"
      },
      {
          "hskclass": "6",
          "japanese": "推測する",
          "chinese": "准则",
          "pinyin": "zhǔnzé"
      },
      {
          "hskclass": "6",
          "japanese": "琢磨する",
          "chinese": "琢磨",
          "pinyin": "zhuómó"
      },
      {
          "hskclass": "6",
          "japanese": "着手する",
          "chinese": "着手",
          "pinyin": "zhuóshǒu"
      },
      {
          "hskclass": "6",
          "japanese": "考える",
          "chinese": "着想",
          "pinyin": "zhuóxiǎng"
      },
      {
          "hskclass": "6",
          "japanese": "卓越している",
          "chinese": "卓越",
          "pinyin": "zhuóyuè"
      },
      {
          "hskclass": "6",
          "japanese": "重きを置く",
          "chinese": "着重",
          "pinyin": "zhuózhòng"
      },
      {
          "hskclass": "6",
          "japanese": "資本",
          "chinese": "资本",
          "pinyin": "zīběn"
      },
      {
          "hskclass": "6",
          "japanese": "資産",
          "chinese": "资产",
          "pinyin": "zīchǎn"
      },
      {
          "hskclass": "6",
          "japanese": "ベテランの",
          "chinese": "资深",
          "pinyin": "zīshēn"
      },
      {
          "hskclass": "6",
          "japanese": "態度",
          "chinese": "姿态",
          "pinyin": "zītài"
      },
      {
          "hskclass": "6",
          "japanese": "味",
          "chinese": "滋味",
          "pinyin": "zīwèi"
      },
      {
          "hskclass": "6",
          "japanese": "生長する",
          "chinese": "滋长",
          "pinyin": "zīzhǎng"
      },
      {
          "hskclass": "6",
          "japanese": "援助する",
          "chinese": "资助",
          "pinyin": "zīzhù"
      },
      {
          "hskclass": "6",
          "japanese": "銃弾",
          "chinese": "子弹",
          "pinyin": "zǐdàn"
      },
      {
          "hskclass": "6",
          "japanese": "いじけている",
          "chinese": "自卑",
          "pinyin": "zìbēi"
      },
      {
          "hskclass": "6",
          "japanese": "自発的",
          "chinese": "自发",
          "pinyin": "zìfā"
      },
      {
          "hskclass": "6",
          "japanese": "自力更生する",
          "chinese": "自力更生",
          "pinyin": "zìlìgēngshēng"
      },
      {
          "hskclass": "6",
          "japanese": "自己満足する",
          "chinese": "自满",
          "pinyin": "zìmǎn"
      },
      {
          "hskclass": "6",
          "japanese": "字母",
          "chinese": "字母",
          "pinyin": "zìmǔ"
      },
      {
          "hskclass": "6",
          "japanese": "自主的な",
          "chinese": "自主",
          "pinyin": "zìzhǔ"
      },
      {
          "hskclass": "6",
          "japanese": "足跡",
          "chinese": "踪迹",
          "pinyin": "zōngjī"
      },
      {
          "hskclass": "6",
          "japanese": "茶褐色",
          "chinese": "棕色",
          "pinyin": "zōngsè"
      },
      {
          "hskclass": "6",
          "japanese": "主旨",
          "chinese": "宗旨",
          "pinyin": "zōngzhǐ"
      },
      {
          "hskclass": "6",
          "japanese": "要するに",
          "chinese": "总而言之",
          "pinyin": "zǒng'éryánzhī"
      },
      {
          "hskclass": "6",
          "japanese": "総和",
          "chinese": "总和",
          "pinyin": "zǒnghé"
      },
      {
          "hskclass": "6",
          "japanese": "縦横である",
          "chinese": "纵横",
          "pinyin": "zònghéng"
      },
      {
          "hskclass": "6",
          "japanese": "廊下",
          "chinese": "走廊",
          "pinyin": "zǒuláng"
      },
      {
          "hskclass": "6",
          "japanese": "漏らす",
          "chinese": "走漏",
          "pinyin": "zǒulòu"
      },
      {
          "hskclass": "6",
          "japanese": "密輸する",
          "chinese": "走私",
          "pinyin": "zǒusī"
      },
      {
          "hskclass": "6",
          "japanese": "殴る",
          "chinese": "揍",
          "pinyin": "zòu"
      },
      {
          "hskclass": "6",
          "japanese": "賃借りする",
          "chinese": "租赁",
          "pinyin": "zūlìn"
      },
      {
          "hskclass": "6",
          "japanese": "十分に",
          "chinese": "足以",
          "pinyin": "zúyǐ"
      },
      {
          "hskclass": "6",
          "japanese": "組織する",
          "chinese": "组",
          "pinyin": "zǔ"
      },
      {
          "hskclass": "6",
          "japanese": "妨げる",
          "chinese": "阻碍",
          "pinyin": "zǔ'ài"
      },
      {
          "hskclass": "6",
          "japanese": "祖父",
          "chinese": "祖父",
          "pinyin": "zǔfù"
      },
      {
          "hskclass": "6",
          "japanese": "阻止する",
          "chinese": "阻拦",
          "pinyin": "zǔlán"
      },
      {
          "hskclass": "6",
          "japanese": "妨害する",
          "chinese": "阻挠",
          "pinyin": "zǔnáo"
      },
      {
          "hskclass": "6",
          "japanese": "研鑽する",
          "chinese": "钻研",
          "pinyin": "zuānyán"
      },
      {
          "hskclass": "6",
          "japanese": "ダイヤモンド",
          "chinese": "钻石",
          "pinyin": "zuànshí"
      },
      {
          "hskclass": "6",
          "japanese": "唇",
          "chinese": "嘴唇",
          "pinyin": "zuǐchún"
      },
      {
          "hskclass": "6",
          "japanese": "従い行な",
          "chinese": "遵循",
          "pinyin": "zūnxún"
      },
      {
          "hskclass": "6",
          "japanese": "尊く厳かである",
          "chinese": "尊严",
          "pinyin": "zūnyán"
      },
      {
          "hskclass": "6",
          "japanese": "およそ",
          "chinese": "左右",
          "pinyin": "zuǒyòu"
      },
      {
          "hskclass": "6",
          "japanese": "不正を働く",
          "chinese": "作弊",
          "pinyin": "zuòbì"
      },
      {
          "hskclass": "6",
          "japanese": "おごる",
          "chinese": "做东",
          "pinyin": "zuò dōng"
      },
      {
          "hskclass": "6",
          "japanese": "無効にする",
          "chinese": "作废",
          "pinyin": "zuòfèi"
      },
      {
          "hskclass": "6",
          "japanese": "作風",
          "chinese": "作风",
          "pinyin": "zuòfēng"
      },
      {
          "hskclass": "6",
          "japanese": "仕事と休み",
          "chinese": "作息",
          "pinyin": "zuòxí"
      },
      {
          "hskclass": "6",
          "japanese": "モットー",
          "chinese": "座右铭",
          "pinyin": "zuòyòumíng"
      },
      {
          "hskclass": "6",
          "japanese": "支持する",
          "chinese": "做主",
          "pinyin": "zuòzhǔ"
      }
            ];

  const promises = HSK.map(async (item, index) => {
    const newItem = {
      ...item,
      id: index + 1, // 連番を追加
      hskclass: Number(item.hskclass), // 明示的にnumber型に変換
    };
    // コレクションのリファレンスを取得
    const collectionRef = collection(db, "HSK");
    // クエリを作成して、既存のドキュメントを検索
    const q = query(
      collectionRef,
      where("hskclass", "==", newItem.hskclass),
      where("japanese", "==", newItem.japanese),
      where("chinese", "==", newItem.chinese),
      where("pinyin", "==", newItem.pinyin)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("The data already exists");
      return Promise.resolve(); // 同じデータが存在する場合は解決されたPromiseを返す
    } else {
      // 自動IDを使用して新しいドキュメントリファレンスを生成
      const docRef = doc(collectionRef);
      // ドキュメントリファレンスを使用して、データをFirestoreに追加
      return setDoc(docRef, newItem);
    }
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
const CreatehskDB = () => {
  return (
    <div>
      <h1>Firestoreにデータを追加</h1>
      <button onClick={() => addHSKDataToDB().catch(console.error)}>データを追加する</button>
    </div>
  );
};

export default CreatehskDB;
