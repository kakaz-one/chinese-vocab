import React, { useState } from 'react';
import "./Hsk.css";


const Hsk1 = () => {
  const data = [
    ["1","1","愛する","爱","ài"],
    ["2","1","八","八","bā"],
    ["3","1","お父さん","爸爸","bàba"],
    ["4","1","コップ","杯子","bēizi"],
    ["5","1","北京","北京","běijīng"],
    ["6","1","ノート","本","běn"],
    ["7","1","ではありません（否定）","不","bù"],
    ["8","1","どういたしまして","不客气","bù kèqì"],
    ["9","1","料理","菜","cài"],
    ["10","1","お茶","茶","chá"],
    ["11","1","食べる","吃","chī"],
    ["12","1","タクシー","出租车","chūzū chē"],
    ["13","1","電話をする","打电话","dǎ diànhuà"],
    ["14","1","大きい","大","dà"],
    ["15","1","の","的","de"],
    ["16","1","点、時","点","diǎn"],
    ["17","1","パソコン","电脑","diànnǎo"],
    ["18","1","テレビ","电视","diànshì"],
    ["19","1","映画","电影","diànyǐng"],
    ["20","1","事、物","东西","dōngxī"],
    ["21","1","全て","都","dōu"],
    ["22","1","読む","读","dú"],
    ["23","1","すみません","对不起","duìbùqǐ"],
    ["24","1","もっと","多","duō"],
    ["25","1","どの位","多少","duōshǎo"],
    ["26","1","息子","儿子","érzi"],
    ["27","1","二つ","二","èr"],
    ["28","1","レストラン","饭馆","fànguǎn"],
    ["29","1","航空機","飞机","fēijī"],
    ["30","1","分","分钟","fēnzhōng"],
    ["31","1","幸せ、嬉しい","高兴","gāoxìng"],
    ["32","1","個","个","gè"],
    ["33","1","仕事","工作","gōngzuò"],
    ["34","1","犬","狗","gǒu"],
    ["35","1","中国語","汉语","hànyǔ"],
    ["36","1","良い、とても","好","hǎo"],
    ["37","1","飲む","喝","hē"],
    ["38","1","と","和","hé"],
    ["39","1","非常に","很","hěn"],
    ["40","1","後ろ","后面","hòumiàn"],
    ["41","1","帰る","回","huí"],
    ["42","1","できる","会","huì"],
    ["43","1","鉄道駅","火车站","huǒchē zhàn"],
    ["44","1","どのくらい","几","jǐ"],
    ["45","1","家","家","jiā"],
    ["46","1","呼ぶ","叫","jiào"],
    ["47","1","今日","今天","jīntiān"],
    ["48","1","九つ","九","jiǔ"],
    ["49","1","開ける","开","kāi"],
    ["50","1","見る","看","kàn"],
    ["51","1","見かける","看见","kànjiàn"],
    ["52","1","塊","块","kuài"],
    ["53","1","来る","来","lái"],
    ["54","1","教師","老师","lǎo shī"],
    ["55","1","過去形を表す","了","le"],
    ["56","1","冷たい","冷","lěng"],
    ["57","1","〜の中","里","lǐ"],
    ["58","1","ゼロ","零","líng"],
    ["59","1","六","六","liù"],
    ["60","1","お母さん","妈妈","māmā"],
    ["61","1","疑問を表す","吗","ma"],
    ["62","1","購入する","买","mǎi"],
    ["63","1","猫","猫","māo"],
    ["64","1","ではない（過去形の否定）","没","méi"],
    ["65","1","気にしないで","没关系","méiguānxì"],
    ["66","1","米","米饭","mǐfàn"],
    ["67","1","明日","明天","míngtiān"],
    ["68","1","名前","名字","míngzì"],
    ["69","1","どの、どんな","哪","nǎ"],
    ["70","1","どこ","哪儿","nǎ'er"],
    ["71","1","その","那","nà"],
    ["72","1","そこ","那儿","nà'er"],
    ["73","1","疑問を表す表現","呢","ne"],
    ["74","1","できる","能","néng"],
    ["75","1","あなた","你","nǐ"],
    ["76","1","年","年","nián"],
    ["77","1","娘","女儿","nǚ'ér"],
    ["78","1","友人","朋友","péngyǒu"],
    ["79","1","美しい","漂亮","piàoliang"],
    ["80","1","リンゴ","苹果","píngguǒ"],
    ["81","1","七","七","qī"],
    ["82","1","お金","钱","qián"],
    ["83","1","前","前面","qiánmiàn"],
    ["84","1","してください","请","qǐng"],
    ["85","1","行く","去","qù"],
    ["86","1","熱い","热","rè"],
    ["87","1","人々","人","rén"],
    ["88","1","知っている","认识","rènshì"],
    ["89","1","日","日","rì"],
    ["90","1","三つ","三","sān"],
    ["91","1","お店","商店","shāngdiàn"],
    ["92","1","上の","上","shàng"],
    ["93","1","朝","上午","shàngwǔ"],
    ["94","1","少ない","少","shǎo"],
    ["95","1","誰","谁","shéi"],
    ["96","1","何","什么","shénme"],
    ["97","1","十","十","shí"],
    ["98","1","～の時","时候","shíhòu"],
    ["99","1","～である","是","shì"],
    ["100","1","本","书","shū"],
    ["101","1","水","水","shuǐ"],
    ["102","1","果物","水果","shuǐguǒ"],
    ["103","1","寝る","睡觉","shuìjiào"],
    ["104","1","話す","说话","shuōhuà"],
    ["105","1","四","四","sì"],
    ["106","1","歳","岁","suì"],
    ["107","1","彼","他","tā"],
    ["108","1","彼女","她","tā"],
    ["109","1","かなり","太","tài"],
    ["110","1","天気","天气","tiānqì"],
    ["111","1","聞く","听","tīng"],
    ["112","1","同級生","同学","tóngxué"],
    ["113","1","もしもし","喂","wèi"],
    ["114","1","私","我","wǒ"],
    ["115","1","私たち","我们","wǒmen"],
    ["116","1","五","五","wǔ"],
    ["117","1","好き","喜欢","xǐhuān"],
    ["118","1","下","下","xià"],
    ["119","1","午後","下午","xià wǔ"],
    ["120","1","雨が降る","下雨","xià yǔ"],
    ["121","1","〜さん","先生","xiānshēng"],
    ["122","1","今","现在","xiànzài"],
    ["123","1","したい","想","xiǎng"],
    ["124","1","小さな","小","xiǎo"],
    ["125","1","若い女性","小姐","xiǎojiě"],
    ["126","1","一部","些","xiē"],
    ["127","1","書く","写","xiě"],
    ["128","1","ありがとう","谢谢","xièxiè"],
    ["129","1","週","星期","xīngqí"],
    ["130","1","学生","学生","xuéshēng"],
    ["131","1","勉強する","学习","xuéxí"],
    ["132","1","学校","学校","xuéxiào"],
    ["133","1","1","一","yī"],
    ["134","1","服","衣服","yīfú"],
    ["135","1","医者","医生","yīshēng"],
    ["136","1","病院","医院","yīyuàn"],
    ["137","1","椅子","椅子","yǐzi"],
    ["138","1","持っている","有","yǒu"],
    ["139","1","月","月","yuè"],
    ["140","1","どこどこで","在","zài"],
    ["141","1","さようなら","再见","zàijiàn"],
    ["142","1","どのように","怎么","zěnme"],
    ["143","1","どうですか？","怎么样","zěnme yàng"],
    ["144","1","これ","这","zhè"],
    ["145","1","ここに","这儿","zhè'er"],
    ["146","1","中国","中国","zhōngguó"],
    ["147","1","正午","中午","zhōngwǔ"],
    ["148","1","住んでいる","住","zhù"],
    ["149","1","机","桌子","zhuōzi"],
    ["150","1","字","字","zì"],
    ["151","1","昨日","昨天","zuótiān"],
    ["152","1","する","做","zuò"],
    ["153","1","座る","坐","zuò"],
      ];
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [score, setScore] = useState(0);
      const [selectedOption, setSelectedOption] = useState('');
      const [showAnswer, setShowAnswer] = useState(false);
      const totalQuestions = 10; // またはテストしたい問題数
    
      const shuffleOptions = (correctOption) => {
        let options = [correctOption];
        while (options.length < 4) {
          let option = data[Math.floor(Math.random() * data.length)][2];
          if (!options.includes(option)) {
            options.push(option);
          }
        }
        return options.sort(() => 0.5 - Math.random());
      };
    
      const nextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption('');
          setShowAnswer(false);
        } else {
          // クイズが最後まで完了したときの処理
          alert(`クイズ終了！ スコア: ${score}/${totalQuestions}`);
        }
      };
    
      const checkAnswer = (option) => {
        if (option === data[currentQuestionIndex][2]) {
          if (!showAnswer) {
            setScore(score + 1); // スコアを更新
          }
          setShowAnswer(true); // 正解の選択肢を表示
        } else {
          setShowAnswer(true); // 不正解を示す
        }
        setSelectedOption(option);
        // 一定時間後に次の問題へ自動移行
        setTimeout(() => {
          nextQuestion();
        }, 1000); // 1秒後に次へ
      };
    
      const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption('');
        setShowAnswer(false);
      };
    
      const question = data[currentQuestionIndex];
      const options = shuffleOptions(question[2]);
    
      return (
        <div className="quiz-container">
          <div className="progress">問題 {currentQuestionIndex + 1} / {totalQuestions}</div>
          <div className="question">
            <p>{question[4]} - {question[3]}</p> {/* Pinyin and Chinese */}
          </div>
          <div className="choices">
            {options.map((option, index) => (
              <button
                key={index}
                className={`choice ${showAnswer ? (option === question[2] ? 'correct' : (option === selectedOption ? 'incorrect' : '')) : ''}`}
                onClick={() => checkAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="skip" onClick={nextQuestion}>分からない</button>
      <button className="restart" onClick={restartQuiz} style={{ display: 'none' }}>テストをやり直す</button>
      <a className="gohome" href="/mypagehome" >ホームに戻る</a>

          {showAnswer && (
            <button onClick={nextQuestion} className="next-question">次へ</button>
          )}
          <div className="score-section">
            スコア: {score} / {totalQuestions}
          </div>
        </div>
      );
    };
    
    export default Hsk1;