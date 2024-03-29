import React, { useState } from 'react';
import "./Hsk.css";


const Hsk1 = () => {
  const data = [
    ["307","3","叔母さん","阿姨","āyí"],
    ["308","3","はい，ええ","啊","a"],
    ["309","3","短い","矮","ǎi"],
    ["310","3","趣味","爱好","àihào"],
    ["311","3","静か","安静","ānjìng"],
    ["312","3","握る、つかむ","把","bǎ"],
    ["313","3","授業","班","bān"],
    ["314","3","動く、運ぶ","搬","bān"],
    ["315","3","半分","半","bàn"],
    ["316","3","方法","办法","bànfǎ"],
    ["317","3","事務所","办公室","bàngōngshì"],
    ["318","3","助ける","帮忙","bāngmáng"],
    ["319","3","包む","包","bāo"],
    ["320","3","満腹","饱","bǎo"],
    ["321","3","北","北方","běifāng"],
    ["322","3","〜によって〜される","被","bèi"],
    ["323","3","鼻","鼻子","bízi"],
    ["324","3","比較する","比较","bǐjiào"],
    ["325","3","試合","比赛","bǐsài"],
    ["326","3","しなければならない","必须","bìxū"],
    ["327","3","変化","变化","biànhuà"],
    ["328","3","表現する","表示","biǎoshì"],
    ["329","3","演じる","表演","biǎoyǎn"],
    ["330","3","別の人","别人","biérén"],
    ["331","3","ゲストハウス","宾馆","bīnguǎn"],
    ["332","3","冷蔵庫","冰箱","bīngxiāng"],
    ["333","3","〜だけ","才","cái"],
    ["334","3","メニュー表","菜单","càidān"],
    ["335","3","参加する","参加","cānjiā"],
    ["336","3","草","草","cǎo"],
    ["337","3","層、階","层","céng"],
    ["338","3","違い","差","chà"],
    ["339","3","スーパーマーケット","超市","chāoshì"],
    ["340","3","シャツ","衬衫","chènshān"],
    ["341","3","成績","成绩","chéngjī"],
    ["342","3","街","城市","chéngshì"],
    ["343","3","遅れる","迟到","chídào"],
    ["344","3","現れる","出现","chūxiàn"],
    ["345","3","キッチン","厨房","chúfáng"],
    ["346","3","〜以外、〜を除いて","除了","chúle"],
    ["347","3","春","春","chūn"],
    ["348","3","単語","词语","cíyǔ"],
    ["349","3","賢い","聪明","cōngmíng"],
    ["350","3","掃除する","打扫","dǎsǎo"],
    ["351","3","するつもり","打算","dǎsuàn"],
    ["352","3","持って","带","dài"],
    ["353","3","心配","担心","dānxīn"],
    ["354","3","ケーキ","蛋糕","dàngāo"],
    ["355","3","当然、もちろん","当然","dāngrán"],
    ["356","3","地面","地","de"],
    ["357","3","光","灯","dēng"],
    ["358","3","低い","低","dī"],
    ["359","3","場所","地方","dìfāng"],
    ["360","3","地下鉄","地铁","dìtiě"],
    ["361","3","地図","地图","dìtú"],
    ["362","3","エレベーター","电梯","diàntī"],
    ["363","3","Eメール","电子邮件","diànzǐ yóujiàn"],
    ["364","3","東","东","dōng"],
    ["365","3","冬","冬","dōng"],
    ["366","3","動物","动物","dòngwù"],
    ["367","3","短い","短","duǎn"],
    ["368","3","長いものの一部分を数える量詞","段","duàn"],
    ["369","3","鍛える、鍛錬","锻炼","duànliàn"],
    ["370","3","どのように","多么","duōme"],
    ["371","3","空腹","饿","è"],
    ["372","3","さらに","而且","érqiě"],
    ["373","3","耳","耳朵","ěrduǒ"],
    ["374","3","熱","发烧","fāshāo"],
    ["375","3","発見","发现","fāxiàn"],
    ["376","3","便利","方便","fāngbiàn"],
    ["377","3","離す、入れる","放","fàng"],
    ["378","3","安心する","放心","fàngxīn"],
    ["379","3","分割","分","fēn"],
    ["380","3","近く","附近","fùjìn"],
    ["381","3","復習する","复习","fùxí"],
    ["382","3","清潔","干净","gānjìng"],
    ["383","3","敢えて","敢","gǎn"],
    ["384","3","風邪をひく","感冒","gǎnmào"],
    ["385","3","さっき","刚才","gāngcái"],
    ["386","3","とともに","跟","gēn"],
    ["387","3","〜によると","根据","gēnjù"],
    ["388","3","もっと","更","gèng"],
    ["389","3","公園","公园","gōngyuán"],
    ["390","3","物語","故事","gùshì"],
    ["391","3","風が吹く","刮风","guā fēng"],
    ["392","3","閉める","关","guān"],
    ["393","3","関係","关系","guānxì"],
    ["394","3","関心を持つ","关心","guānxīn"],
    ["395","3","に関して","关于","guānyú"],
    ["396","3","国","国家","guójiā"],
    ["397","3","フルーツジュース","果汁","guǒzhī"],
    ["398","3","過去","过去","guòqù"],
    ["399","3","やはり、依然として","还是","háishì"],
    ["400","3","恐れて","害怕","hàipà"],
    ["401","3","川","河","hé"],
    ["402","3","黒板","黑板","hēibǎn"],
    ["403","3","パスポート","护照","hùzhào"],
    ["404","3","花","花","huā"],
    ["405","3","庭園","花园","huāyuán"],
    ["406","3","絵","画","huà"],
    ["407","3","悪い","坏","huài"],
    ["408","3","さらに","还","hái"],
    ["409","3","環境","环境","huánjìng"],
    ["410","3","変える","换","huàn"],
    ["411","3","黄色","黄","huáng"],
    ["412","3","会議","会议","huìyì"],
    ["413","3","もしくは","或者","huòzhě"],
    ["414","3","ほとんど","几乎","jīhū"],
    ["415","3","機会","机会","jīhuì"],
    ["416","3","極み、頂点","极","jí"],
    ["417","3","思い出す","记得","jìdé"],
    ["418","3","季節","季节","jìjié"],
    ["419","3","検査","检查","jiǎnchá"],
    ["420","3","簡単","简单","jiǎndān"],
    ["421","3","健康","健康","jiànkāng"],
    ["422","3","会う","见面","jiànmiàn"],
    ["423","3","話す","讲","jiǎng"],
    ["424","3","教える","教","jiào"],
    ["425","3","足","脚","jiǎo"],
    ["426","3","角度","角","jiǎo"],
    ["427","3","連結する、つなぐ","接","jiē"],
    ["428","3","道","街道","jiēdào"],
    ["429","3","結婚","结婚","jiéhūn"],
    ["430","3","終わる","结束","jiéshù"],
    ["431","3","出し物、プログラム","节目","jiémù"],
    ["432","3","休日","节日","jiérì"],
    ["433","3","解決する","解决","jiějué"],
    ["434","3","借りる","借","jiè"],
    ["435","3","いつも、しょっちゅう","经常","jīngcháng"],
    ["436","3","経過する、過ぎる","经过","jīngguò"],
    ["437","3","マネージャー","经理","jīnglǐ"],
    ["438","3","長い","久","jiǔ"],
    ["439","3","古い","旧","jiù"],
    ["440","3","執り行なう","举行","jǔxíng"],
    ["441","3","文","句子","jùzi"],
    ["442","3","決める","决定","juédìng"],
    ["443","3","喉が渇く","渴","kě"],
    ["444","3","愛らしい","可爱","kě'ài"],
    ["445","3","1/4（4分の1）","刻","kè"],
    ["446","3","客、ゲスト","客人","kèrén"],
    ["447","3","空調","空调","kòngtiáo"],
    ["448","3","口","口","kǒu"],
    ["449","3","泣く","哭","kū"],
    ["450","3","パンツ","裤子","kùzi"],
    ["451","3","箸","筷子","kuàizi"],
    ["452","3","青い","蓝","lán"],
    ["453","3","老いている","老","lǎo"],
    ["454","3","去る、離れる","离开","líkāi"],
    ["455","3","ギフト","礼物","lǐwù"],
    ["456","3","歴史","历史","lìshǐ"],
    ["457","3","顔","脸","liǎn"],
    ["458","3","練習","练习","liànxí"],
    ["459","3","車","辆","liàng"],
    ["460","3","理解する","了解","liǎojiě"],
    ["461","3","隣人","邻居","línjū"],
    ["462","3","床","楼","lóu"],
    ["463","3","緑","绿","lǜ"],
    ["464","3","馬","马","mǎ"],
    ["465","3","満足する","满意","mǎnyì"],
    ["466","3","帽子","帽子","màozi"],
    ["467","3","m（メートル）","米","mǐ"],
    ["468","3","パン","面包","miànbāo"],
    ["469","3","麺","面条","miàntiáo"],
    ["470","3","理解する","明白","míngbái"],
    ["471","3","取る","拿","ná"],
    ["472","3","祖母","奶奶","nǎinai"],
    ["473","3","南","南","nán"],
    ["474","3","難しい","难","nán"],
    ["475","3","悲しい","难过","nánguò"],
    ["476","3","学年","年级","niánjí"],
    ["477","3","若い","年轻","niánqīng"],
    ["478","3","鳥","鸟","niǎo"],
    ["479","3","努力","努力","nǔlì"],
    ["480","3","山に登る","爬山","páshān"],
    ["481","3","大皿","盘子","pánzi"],
    ["482","3","太っている","胖","pàng"],
    ["483","3","ビール","啤酒","píjiǔ"],
    ["484","3","葡萄","葡萄","pútáo"],
    ["485","3","標準語","普通话","pǔtōnghuà"],
    ["486","3","実際","其实","qíshí"],
    ["487","3","他の","其他","qítā"],
    ["488","3","乗る","骑","qí"],
    ["489","3","鉛筆","铅笔","qiānbǐ"],
    ["490","3","明確な","清楚","qīngchǔ"],
    ["491","3","秋","秋","qiū"],
    ["492","3","奇妙","奇怪","qíguài"],
    ["493","3","スカート","裙子","qúnzi"],
    ["494","3","それから","然后","ránhòu"],
    ["495","3","熱意","热情","rèqíng"],
    ["496","3","思う","认为","rènwéi"],
    ["497","3","真剣","认真","rènzhēn"],
    ["498","3","簡単","容易","róngyì"],
    ["499","3","もし","如果","rúguǒ"],
    ["500","3","傘","伞","sǎn"],
    ["501","3","インターネット","上网","shàngwǎng"],
    ["502","3","怒る","生气","shēngqì"],
    ["503","3","音","声音","shēngyīn"],
    ["504","3","使う","使","shǐ"],
    ["505","3","世界","世界","shìjiè"],
    ["506","3","やせている","瘦","shòu"],
    ["507","3","心地よい、快適","舒服","shūfú"],
    ["508","3","叔父","叔叔","shūshu"],
    ["509","3","木","树","shù"],
    ["510","3","数学","数学","shùxué"],
    ["511","3","歯磨き","刷牙","shuāyá"],
    ["512","3","2つの、対の","双","shuāng"],
    ["513","3","レベル、水準","水平","shuǐpíng"],
    ["514","3","運転手","司机","sījī"],
    ["515","3","〜にもかかわらず","虽然","suīrán"],
    ["516","3","太陽","太阳","tàiyáng"],
    ["517","3","砂糖","糖","táng"],
    ["518","3","特別な","特别","tèbié"],
    ["519","3","痛み","疼","téng"],
    ["520","3","上げる、高める","提高","tígāo"],
    ["521","3","体育","体育","tǐyù"],
    ["522","3","甘い","甜","tián"],
    ["523","3","細長い物を数える量詞","条","tiáo"],
    ["524","3","同僚","同事","tóngshì"],
    ["525","3","一致する","同意","tóngyì"],
    ["526","3","髪","头发","tóufǎ"],
    ["527","3","突然","突然","túrán"],
    ["528","3","図書館","图书馆","túshū guǎn"],
    ["529","3","足","腿","tuǐ"],
    ["530","3","完成する","完成","wánchéng"],
    ["531","3","お椀","碗","wǎn"],
    ["532","3","万","万","wàn"],
    ["533","3","忘れる","忘记","wàngjì"],
    ["534","3","のために","为","wèi"],
    ["535","3","するために","为了","wèile"],
    ["536","3","地位","位","wèi"],
    ["537","3","文化","文化","wénhuà"],
    ["538","3","西","西","xī"],
    ["539","3","習慣","习惯","xíguàn"],
    ["540","3","トイレ","洗手间","xǐshǒujiān"],
    ["541","3","入浴","洗澡","xǐzǎo"],
    ["542","3","夏","夏","xià"],
    ["543","3","先、最初","先","xiān"],
    ["544","3","バナナ","香蕉","xiāngjiāo"],
    ["545","3","同じ","相同","xiāngtóng"],
    ["546","3","信じる","相信","xiāngxìn"],
    ["547","3","のような","像","xiàng"],
    ["548","3","気を付ける","小心","xiǎoxīn"],
    ["549","3","校長","校长","xiàozhǎng"],
    ["550","3","靴","鞋","xié"],
    ["551","3","ニュース","新闻","xīnwén"],
    ["552","3","新鮮","新鲜","xīnxiān"],
    ["553","3","手紙","信","xìn"],
    ["554","3","トランクケース","行李箱","xínglǐ xiāng"],
    ["555","3","関心、興味","兴趣","xìngqù"],
    ["556","3","パンダ","熊猫","xióngmāo"],
    ["557","3","必要","需要","xūyào"],
    ["558","3","選択する、選ぶ","选择","xuǎnzé"],
    ["559","3","眼鏡","眼镜","yǎnjìng"],
    ["560","3","要求する","要求","yāoqiú"],
    ["561","3","祖父","爷爷","yéyé"],
    ["562","3","絶対","一定","yīdìng"],
    ["563","3","合計で、合わせて","一共","yīgòng"],
    ["564","3","しばらく","一会儿","yīhuǐ'er"],
    ["565","3","同じ、同様である","一样","yīyàng"],
    ["566","3","以後、その後","以后","yǐhòu"],
    ["567","3","以前、これまで","以前","yǐqián"],
    ["568","3","認める、考える","以为","yǐwéi"],
    ["569","3","一般的な","一般","yībān"],
    ["570","3","一方、片方","一边","yībiān"],
    ["571","3","真っすぐ","一直","yīzhí"],
    ["572","3","音楽","音乐","yīnyuè"],
    ["573","3","銀行","银行","yínháng"],
    ["574","3","すべき","应该","yīnggāi"],
    ["575","3","影響を及ぼす","影响","yǐngxiǎng"],
    ["576","3","使う","用","yòng"],
    ["577","3","ゲーム","游戏","yóuxì"],
    ["578","3","有名","有名","yǒumíng"],
    ["579","3","また","又","yòu"],
    ["580","3","出会う","遇到","yù dào"],
    ["581","3","〜したいと思う、喜んで〜する","愿意","yuànyì"],
    ["582","3","月","月亮","yuèliàng"],
    ["583","3","越える","越","yuè"],
    ["584","3","雲","云","yún"],
    ["585","3","駅","站","zhàn"],
    ["586","3","長い","长","zhǎng"],
    ["587","3","心配","着急","zhāojí"],
    ["588","3","世話","照顾","zhàogù"],
    ["589","3","写真","照片","zhàopiàn"],
    ["590","3","カメラ","照相机","zhàoxiàngjī"],
    ["591","3","のみ","只","zhǐ"],
    ["592","3","真ん中","中间","zhōngjiān"],
    ["593","3","遂に、最終的に","终于","zhōngyú"],
    ["594","3","種類","种","zhǒng"],
    ["595","3","重要","重要","zhòngyào"],
    ["596","3","週末","周末","zhōumò"],
    ["597","3","主要","主要","zhǔyào"],
    ["598","3","祝う","祝","zhù"],
    ["599","3","注意を払い","注意","zhùyì"],
    ["600","3","辞書","字典","zìdiǎn"],
    ["601","3","自分の","自己","zìjǐ"],
    ["602","3","いつも","总是","zǒng shì"],
    ["603","3","最近","最近","zuìjìn"],
    ["604","3","宿題","作业","zuòyè"],
    ["605","3","作用","作用","zuòyòng"],
      ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = 10;

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
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkAnswer = (selected, correct) => {
    if (selected === correct) {
      setScore(score + 1);
      alert('正解です！');
    } else {
      alert(`不正解です。正解は ${correct} です。`);
    }
    nextQuestion();
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  if (currentQuestionIndex >= totalQuestions) {
    return (
      <div className="quiz-container">
        <div className="score">スコア: {score}/{totalQuestions}</div>
        <button className="restart" onClick={restartQuiz}>テストをやり直す</button>
        <a className="gohome" href="/mypagehome">ホームに戻る</a>
      </div>
    );
  }

  const question = data[currentQuestionIndex];
  const [id, hskClass, japanese, chinese, pinyin] = question;
  const options = shuffleOptions(japanese);

  return (
    <div className="quiz-container">
      <div className="progress">問題 {currentQuestionIndex + 1}/{totalQuestions}</div>
      <div className="question" >
        <p>{pinyin}</p>
        <p>{chinese}</p>
      </div>
      <div className="choices">
        {options.map((option, index) => (
          <button key={index} className="choice" onClick={() => checkAnswer(option, japanese)}>
            {option}
          </button>
        ))}
      </div>
      <button className="skip" onClick={nextQuestion}>分からない</button>
      <button className="restart" onClick={restartQuiz} style={{ display: 'none' }}>テストをやり直す</button>
      <a className="gohome" href="/mypagehome" >ホームに戻る</a>
    </div>
  );
};

export default Hsk1;
