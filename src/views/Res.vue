<template>
  <div class="poster_container">
    <div class="header d-flex justify-space-between">
      <div>
        <v-img
          class="name"
          src="../assets/poster/header_name.svg"
          height="30vw"
          contain
        ></v-img>
      </div>

      <div>
        <v-img class="time" src="../assets/2021.svg" height="4vw" contain>
          <div class="time_date">
            {{ this.time.month + "月" + this.time.day + "日" }}
          </div>
          <div class="time_minutes">
            {{ this.time.hour + ":" + this.time.min }}
          </div>
          <v-img src="../assets/2021_line.svg" class="time_line"></v-img>
          <v-img
            src="../assets/skew_line.svg"
            class="time_skewline"
            contain
          ></v-img>
        </v-img>
      </div>
    </div>
    <div class="d-flex">
      <div class="flex-item">
        <v-img
          :src="character_bg"
          contain
          max-width="54vw"
          min-height="70vh"
          class="character_bg"
        >
          <v-img
            contain
            src="../assets/poster/art_logo.svg"
            class="character_logo"
          ></v-img>
          <v-img
            contain
            :src="character"
            class="character"
            :class="c === 5 ? 'cat' : ''"
          ></v-img>
        </v-img>
        <v-img
          src="../assets/pivotStudio_logo.svg"
          contain
          height="7vh"
          class="logo"
        ></v-img>
      </div>
      <div class="flex-item">
        <div class="result">你的测试结果是：</div>

        <v-img :src="character_title" height="5vh" contain class="test_title">
          <v-img
            src="../assets/smail.svg"
            height="2.5vh"
            width="100%"
            contain
            style="top: 8vw"
          ></v-img>
        </v-img>

        <div class="text">{{ description[c][p].detail }}</div>
        <audio id="music">
          <source
            src="http://strk2.cn/music/nimanwoman.mp3"
            type="audio/mpeg"
          />
        </audio>
        <v-img
          src="../assets/poster/music.svg"
          contain
          height="8vh"
          width="8vh"
          class="music"
          @click="musicToggle"
        ></v-img>

        <v-img
          src="../assets/poster/share.svg"
          contain
          height="8vh"
          width="8vh"
          class="share"
        ></v-img>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({})
export default class Res extends Vue {
  @Prop()
  num?: number;
  character_bg = "";
  character = "";
  character_title = "";
  /* 文案 */
  description = [
    [
      {
        title: "韵酒幼儿园园长",
        detail:
          "天时地利人和，你又来韵酒吃饭了！方便、效率是你做事的准则之一。同时你又是天生的领导者，能召集大家为着一个共同目标努力用强大的动力、坚定的决心和锋芒毕露的思想实现一切目标！这个打包，准备上路！早安，华科！",
      },
      {
        title: "喻家山幼儿园园长",
        detail:
          "青翠幽静而朴素的喻家山，它既不算秀丽、也不算巍峨，但是它很亲近，老人孩子登上山顶不会累得气喘吁吁；我们不用长途跋涉就可以进入它的怀抱；你也是这样亲切又温柔的宝藏。爱探索、爱生活，你永远眼里有光。同时你又是天生的领导者，能召集大家为着一个共同目标努力用强大的动力、坚定的决心和锋芒毕露的思想实现一切目标！",
      },
      {
        title: "东九幼儿园园长",
        detail:
          "我爱学习，学习使我快乐！学习上你总是尽心努力。同时你又是天生的领导者，能召集大家为着一个共同目标努力用强大的动力、坚定的决心和锋芒毕露的思想实现一切目标！你不仅想一个人学习，你还想带着大家一起学习！背上你心爱的小书包，走！去东九自习！",
      },
      {
        title: "梧桐语幼儿园园长",
        detail:
          "梧桐树每到春天，梧桐絮漫天飞舞，好像是一棵棵大树在喻园里漫漫低语。爱探索、爱生活，你永远眼里有光。同时你又是天生的领导者，能召集大家为着一个共同目标努力用强大的动力、坚定的决心和锋芒毕露的思想实现一切目标！此后春天！一起来看“梧桐语”！",
      },
      {
        title: "集贸幼儿园园长",
        detail:
          "你爱充满着烟火气息的地方，喜欢临近夜暮时，暗蓝的天空和暖黄的路灯，还有朦胧的树影，以及下课后行色匆匆想去干饭的人。同时你又是天生的领导者，能召集大家为着一个共同目标努力用强大的动力、坚定的决心和锋芒毕露的思想实现一切目标！你愿领着大家一同体验华科的烟火气。",
      },
      {
        title: "科技楼幼儿园园长",
        detail:
          "在科研实验中，你能静下心来，体会到其中独一无二的乐趣。同时你又是天生的领导者，能召集大家为着一个共同目标努力用强大的动力、坚定的决心和锋芒毕露的思想实现一切目标！你愿领着大家一同体验华科的烟火气。你不仅想一个人做科研实验，你还想带着大家一起体验科研实验的美丽世界！背上你心爱的小书包，走！我们去科技楼！",
      },
    ],
    [
      {
        title: "韵酒吃货",
        detail:
          "捕捉小吃货一枚！什么，哦不不，我没说你是韵酒的吃货，你是因为顺路图效率顺便在韵酒吃饭的一枚吃货。你从韵酒出来，迎接新一天的明媚阳光。早安，华科！",
      },
      {
        title: "喻家山吃货",
        detail:
          "吾日三省吾身：早上吃什么？中午吃什么？晚上吃什么？爱探索的你不会放过校园里哪个品尝美食的犄角旮旯吧！爱美食的小憨憨谁不爱呢？走，约饭！",
      },
      {
        title: "东九吃货",
        detail:
          "我爱学习，学习使我快乐！同时你也毫无疑问是个小吃货。吾日三省吾身：早上吃什么？中午吃什么？晚上吃什么？ 你拥有狗勾一样灵敏的嗅觉和顺风耳般的美食消息灵通度，美食使你快乐，毕竟吃饱了才有力气学习嘛！",
      },
      {
        title: "梧桐语吃货",
        detail:
          "这是一个优雅的小吃货！菜品颜值要高，精致高雅才符合你的格调。对你来说，食物，和爱一样温柔，不可辜负。心里有光，慢食三餐。来，优雅地品味精致的美食吧~",
      },
      {
        title: "集贸吃货",
        detail:
          "你常把坏心情卷进肥牛里，伴着滚烫的火锅底料和可口的花生酱一口吃掉！你觉得奶茶这种东西喝多了也没意思，而每天早中晚三杯刚刚好~吃货的人生就像一列火车,总结起来就是,逛---吃,逛---吃,逛---吃,逛吃逛吃逛吃逛吃逛吃。走！集贸那么多美食！干饭！",
      },
      {
        title: "科技楼吃货",
        detail:
          "我爱学习，学习使我快乐！同时你也毫无疑问是个小吃货。虽然还不能研究出上九天揽月的宇宙飞船，但是可以:下海底捞肥牛、虾饺、毛肚、藕片、生菜、蟹肉棒、大虾、虾滑、牛肉丸、黄喉！天色已晚，却还能看到街上很多外卖小哥奔波送餐 。别人这么晚了都还在吃，我又有什么理由被学习阻挡干饭的步伐呢？",
      },
    ],
    [
      {
        title: "韵酒刷夜人",
        detail:
          "速度、方便、效率！为了加权，为了不挂，你要抓住是偷偷溜走的时间。刷夜人、刷夜魂，刷夜都是人上人。你从韵酒出来，迎接新一天的明媚阳光。早安，华科！",
      },
      {
        title: "喻家山刷夜人",
        detail:
          "世界上有两种耀眼的光芒，一种是太阳，一种是刷夜人努力的模样！ 看似平凡学习工作中无时无刻不透露着你对未来美好生活的追求。在艰难的刷夜生活里努力表现出倔强不羁的人生态度：世界很大，等我准备好，我要去看看！！",
      },
      {
        title: "东九刷夜人",
        detail:
          "请不要打扰我学习，我爱学习，学习使我快乐！为了追求更好的自己，为了美好的未来，学tm的！世界上有两种耀眼的光芒，一种是太阳，一种是刷夜人努力的模样！ ",
      },
      {
        title: "梧桐语刷夜人",
        detail:
          "世界上有两种耀眼的光芒，一种是太阳，一种是刷夜人努力的模样！ 我学的不只是知识理论，我学的也是艺术！可以笨，但不可以懒，要暗自努力然后惊艳所有人！",
      },
      {
        title: "集贸刷夜人",
        detail:
          "世界上有两种耀眼的光芒，一种是太阳，一种是刷夜人努力的模样！ 刷夜也要叫上朋友一起，毕竟人多力量大（好像不是这么用的，但那又怎样！）",
      },
      {
        title: "科技楼刷夜人",
        detail:
          "世界上有两种耀眼的光芒，一种是太阳，一种是刷夜人努力的模样！ 你觉得努力是会上瘾的，特别是尝到甜头之后！什么？及格？怎么可能！你的目标可是更高更远更强！为了登上山顶，学tm的！",
      },
    ],
    [
      {
        title: "韵酒宝藏男孩",
        detail:
          "好看的皮囊千篇一律，有趣的灵魂万里挑一。你不定时可爱，对生活的总是洋溢着用不完的热情，你可能笑点很低，脸上总是晴天，愿意把快乐的情绪传递给别人。你是人间星光，华科宝藏，遇到你是我们的幸运！你从韵酒出来，迎接新一天的明媚阳光。早安，华科！",
      },
      {
        title: "喻家山宝藏男孩",
        detail:
          "青翠幽静而朴素的喻家山，它既不算秀丽、也不算巍峨，但是它很亲近，老人孩子登上山顶不会累得气喘吁吁；我们不用长途跋涉就可以进入它的怀抱；你也是这样亲切又温柔的宝藏。你可能笑点很低，脸上总是晴天，愿意把快乐的情绪传递给别人。你是人间星光，华科宝藏，遇到你是我们的幸运！",
      },
      {
        title: "东九宝藏男孩",
        detail:
          "我爱学习，学习使我快乐！你的上进心甚至能感染周围的人！好看的皮囊千篇一律，有趣的灵魂万里挑一。你不定时可爱，对生活的总是洋溢着用不完的热情，你可能笑点很低，脸上总是晴天，愿意把快乐的情绪传递给别人。你是人间星光，华科宝藏，遇到你是我们的幸运！ ",
      },
      {
        title: "梧桐语宝藏男孩",
        detail:
          "“凤栖梧桐”，凤凰非梧桐不栖，华科因凤凰栖息于梧桐寄意于招揽贤才。你也是学校所需的宝藏。你精致优雅，乐于探索;你可能笑点很低，脸上总是晴天，愿意把快乐的情绪传递给别人。你是人间星光，华科宝藏，遇到你是我们的幸运！",
      },
      {
        title: "集贸宝藏男孩",
        detail:
          "你可能不爱逛百货商场，却爱逛菜市，因为菜市更有生活气息一些；你可能不爱独处，缺爱与人交谈，因为交流更能发现生活的美好。你也爱探索那些新鲜事物，发现宝藏。而其实你也是我们的宝藏。你是人间星光，华科宝藏，遇到你是我们的幸运！",
      },
      {
        title: "科技楼宝藏男孩",
        detail:
          "你不止停留于课本知识、不止停留于实验科研，你也爱探索那些新鲜事物，发现宝藏。你可能笑点很低，脸上总是晴天，愿意把快乐的情绪传递给别人。你是人间星光，华科宝藏，遇到你是我们的幸运！",
      },
    ],
    [
      {
        title: "韵酒小甜甜",
        detail:
          "天时地利人和，你又来韵酒吃饭了！方便、效率是你做事的准则之一。你总能找到理由微笑，你向往并且喜欢和人的亲密关系。对你来说，跟一大群好友嬉笑玩乐实在是很快乐的事！吃完饭，你和三两好友并排着走出食堂，迎接新一天的明媚阳光。早安，华科！",
      },
      {
        title: "喻家山小甜甜",
        detail:
          "青翠幽静而朴素的喻家山，它既不算秀丽、也不算巍峨，但是它很亲近，老人孩子登上山顶不会累得气喘吁吁；我们不用长途跋涉就可以进入它的怀抱；你也是这样亲切又温柔的宝藏。你总能找到理由微笑，你向往并且喜欢和人的亲密关系。对你来说，跟一大群好友嬉笑玩乐实在是很快乐的事！",
      },
      {
        title: "东九小甜甜",
        detail:
          "我爱学习，学习使我快乐！你总能找到理由微笑，认为日子进一寸有一寸的欢喜。你善解人意，感情细腻，善于处理和周围人的关系，照顾他人的感受。谁不喜欢这样的宝藏呢！但是，与他人的亲密关系不会影响你“挥刀的速度”，良好的关系对于有上进心的你是帮助从不是阻碍！ ",
      },
      {
        title: "梧桐语小甜甜",
        detail:
          "每到春天，梧桐絮漫天飞舞，好像是一棵棵大树在喻园里漫漫低语。你如这梧桐一般优雅大方。宇宙山河浪漫，生活点滴温暖，都值得你前进。你总能找到理由微笑，你向往并且喜欢和人的亲密关系。对你来说，跟一大群好友嬉笑玩乐实在是很快乐的事！",
      },
      {
        title: "集贸小甜甜",
        detail:
          "你愿意去发现生活的爱、有趣、温暖。你的脸上总是晴天，愿意把快乐的情绪传递给别人。你总能找到理由微笑，你向往并且喜欢和人的亲密关系。对你来说，跟一大群好友嬉笑玩乐实在是很快乐的事！",
      },
      {
        title: "科技楼小甜甜",
        detail:
          "你不止停留于课本知识、不止停留于实验科研，你总能找到理由微笑，你向往并且喜欢和人的亲密关系。对你来说，除了认真学习，跟一大群好友嬉笑玩乐也是很快乐的事！",
      },
    ],
    [
      {
        title: "韵酒大橘",
        detail:
          "宿舍、教室、食堂是奉行节能主义的你较少变动的路线。咦，今天啊啊啊！要迟到了！快迟到时你一扫平时的悠悠闲闲，你赶紧奔向顺路的食堂，跟阿姨说：打包带走！",
      },
      {
        title: "喻家山大橘",
        detail:
          "宿舍、教室、食堂很可能是奉行节能主义的你较少变动的路线。外界如何与我无关，静守本心安享太平。双耳不闻窗外事，一门心思守己心。日子过得像是在修仙，心中装着peace&love。外表平和内心淡然，佛系青年说的就是你吧！",
      },
      {
        title: "东九大橘",
        detail:
          "我爱学习，学习使我快乐！当然，爱学习也不会影响你享受生活！你闲下来的时候就像大橘一样懒洋洋地在台阶上趴着晒太阳那样惬意呐。",
      },

      {
        title: "梧桐语大橘",
        detail:
          "阳光正好，躺着最舒服。以前想要很多很多，现在只想要睡个好觉。在优美的环境中，你要用一个优雅的姿势做一个优秀的白日梦！你就是最独特的佛系青年！",
      },

      {
        title: "集贸大橘",
        detail:
          "宿舍、教室、食堂是奉行节能主义的你较少变动的路线。在你心中，任何东西迟不迟晚不晚，能遇上就遇上，遇不上就这样。毕竟只有让该结束的结束了，才会有新的开始。外表平和内心淡然，心中装着peace&love，佛系青年说的就是你吧！",
      },
      {
        title: "科技楼大橘",
        detail:
          "以为你无忧无虑没有牵绊，其实你那小脑袋瓜里想不通的事太多了。但那又怎样，做人就要像小熊饼干一样干干脆脆，想不通也不能硬想！你就是学习奋斗界的一股清流。",
      },
    ],
  ];
  c!: number;
  p!: number;
  isPlay = false;
  musicToggle() {
    const music = document.getElementById("music");
    if (music) {
      if (this.isPlay) {
        music.pause();
      } else {
        music.play();
      }
      this.isPlay = !this.isPlay;
    }
  }
  getMax(arr: Array<number>): number {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        index = i;
      }
    }
    return index;
  }
  get time() {
    let date = new Date();
    return {
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      min: date.getMinutes(),
    };
  }
  created() {
    console.log(this.time);
    this.c = this.getMax(this.$store.state.characters);
    this.p = this.getMax(this.$store.state.places);

    this.character = `http://www.strk2.cn:3000/poster/${this.c}${this.p}.png`;
    this.character_bg = `http://www.strk2.cn:3000/poster/character_color${this.num}.svg`;
    this.character_title = `http://www.strk2.cn:3000/res_title/title_${this.c}${this.p}.png`;
  }
}
</script>
<style lang="scss" scoped>
.poster_container {
  height: 100%;
}
.character_bg {
  position: absolute;
  top: 19vh;
  left: 0vw;
  .character {
    transform: scale(1.7);
  }
  .cat {
    transform: scale(1.4);
    top: 8vh;
    left: 2vw;
  }
  .character_logo {
    position: absolute;
    left: -17vw;
    top: -10vh;

    transform: scale(0.4);
  }
}
.time {
  left: 31vw;
  top: 4vw;
  overflow: inherit;
  color: #fff;
  font-family: sans-serif;
  .time_line {
    left: auto;
    height: 1vw;
    top: 5vw;
    width: 42vw;
    right: 30vw;
  }
  .time_skewline {
    top: 4vh;
    right: -21vw;
    left: auto;
    height: 13vh;
  }
  .time_date {
    position: absolute;
    top: 5vh;
    right: 53vw;
    font-size: 5vw;
  }
  .time_minutes {
    position: absolute;
    top: 8vh;
    right: 32vw;
    font-size: 6vw;
  }
}
.logo {
  top: 84vh;
  left: -20vw;
}
.header {
  position: relative;
  height: 100%;
  top: 10vw;
  .name {
    left: -18vw;
    top: 2vw;
  }
}
.text {
  width: 42vw;
  position: absolute;
  left: auto;
  right: -1vw;
  padding: 0 1vw;
  top: 35vh;
  letter-spacing: 0.5vw;
  font-family: auto;
  text-indent: 5vw;
}
.text::first-letter {
  font-size: 8vw;
}
.result {
  font-size: 5vw;
  letter-spacing: 1vw;
  position: absolute;
  left: auto;
  right: 1vw;
  top: 22vh;
}
.test_title {
  position: absolute;
  left: auto;
  right: -27vw;
  top: 28vh;
  overflow: inherit;
}
.music {
  position: absolute;
  left: auto;
  right: 2vw;
  top: 78vh;
}
.share {
  position: absolute;
  left: auto;
  right: 2vw;
  top: 86vh;
}
.flex-item {
  flex: 1;
  height: 100%;
  position: relative;
}
</style>