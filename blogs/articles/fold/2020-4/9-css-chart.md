# ð¥ 9ç§CSSå¾æ¡è§£æï¼

[TOC]

## åè¨

åå°äºéä¸é¶åé¢è¯å­£ï¼è¿éææ´çäº... æ¬¸ï¼ï¼ä¸å¥½ææï¼è·é¢äº... æè§è¿æ¥æéé¦é¡µå¨æ¯é¢è¯ç¸å³çåå®¹ï¼ææ¯æå¼æéä¹ä¸ç¥éè¯¥çå¥ï¼å®å¨æ å¥ã

ä¸ä¸ªç¤¼æçäºè®¸å¤å³äºå¹³é¢ææçèµæï¼æå°±è¾¹ç¨ CSS ç»äºä¸äºç±»ä¼¼èæ¯å¾æ¡çç©æå¿ãè¿éç»å¤§å®¶éäº12ç§ï¼ä»è§å¯èçè§åº¦ç±æå°é¾çç»å¤§å®¶è§£ä¸ä¸æè·¯ãæ¬æåå«å¤§éå¾çåä»£ç æä»¥è¾é¿ï¼å»ºè®®åç¹èµæ¶èã

**â é¢è­¦ï¼æ¬ææ²¡æå¯¹åºç¡ç¥è¯çè¯¦è§£ï¼ä¸è¿æ¨èä¸è¾¹çæç« å®è·µä¸è¾¹å­¦ä¹ ï¼æçæ´é«ã**

**â é¢è­¦ï¼ææ«ææåã**

## ææå¾å±ç¤º

![CSSå¾æ¡ææå¾](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/K0L1Ov1rMI.gif)

## åæé¡ºåºä»ç»

ç²ç¥çè¿ææä¹åï¼æä»¬æç§å¾æ¡ç§åç´ çå¤å°ååç´ åå¼ç¨åº¦ãå¨ç»é¾æç¨åº¦ã~~ææ å¤´ç»ª~~ç­å ç´ ç»æç« å°èæä¸ä¸ªåºï¼é¡ºåºè§ä¸å¾ãæ¯å°èé½ææºç ï¼ä½ å¯ä»¥éè¿æ é¢ç´æ¥è·³è½¬å°ä½ æ³ççå¾æ¡ã

![CSSå¾æ¡ææå¾åæé¡ºåº](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/ureSLEWBCZ.png)

---

### åç¯åå½¢

![åç¯åå½¢å¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/1DlfMqAvJH.gif)

```HTML
  <div class="card">
    <div class="node" v-for="item in 100"></div>
  </div>
  <style>
    // å¶ä½ææå¾æ¡ç card ç±»æ ç­¾é½å¥ç¨äºè¿æ®µæ ·å¼ï¼ä¸ºäºåå°æç« é¿åº¦ï¼ä¸ç¥ã
    .card {
      width: 200px;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  </style>
```

![åç¯åå½¢å¾æ¡å¨ç»](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/-1.jpg)

éè¿å¾çå¨ç»ææï¼æä»¬å¤§è´å¾åºå¨ç»ååçæ¨¡å¼ã

- æé¨ååç¯åå½¢æä¸¤ä¸ªåç¯çé¿åº¦ï¼å¹¶æ¹åäºåºè²ã

    è§å¯åé¿åç¯çé¡ºåºï¼è½åç°âæ¯é¢ä¸å°±åé¿âè¿ç§è§å¾ï¼æ¨æµä½¿ç¨äº :nth-child(3) éæ©å¨ã

ä¸é¢æ¯ CSS æºç ã
```SCSS
  .card {
    justify-content: flex-start;
    overflow: hidden;
    cursor: pointer;
  
    // æ¯é¢ä¸ä¸ªåç´ ï¼åæ§è¡å¨ç»ï¼æºä»£ç åæä»¬åæçå¨ç»çé¡ºåºç¸åï¼åç¯æ¯ä»é¿åç­ï¼ä¸è¿ä¸å½±å
    .node {
      border: solid 5px #F29338;
      border-radius: 50%;
  
      
      &:nth-child(3n) {
        width: 40px;
        flex-basis: 40px;
        background: #F8C798;
        animation: change-circle-width 2s ease alternate infinite;
      }
    }
  }
  
  @keyframes change-circle-width {
    from {
      width: 40px;
      flex-basis: 40px;
      background: #F8C798;
    }
    60% {
      width: 20px;
      flex-basis: 20px;
      background: transparent;
    }
    // å¨ç» 60% - 100% è¿æ®µæ¶é´ï¼å±æ§æ²¡æåå¨ï¼æä»¥å¾æ¡çèµ·æ¥åæ¯éæ­¢çã
    to {
      width: 20px;
      flex-basis: 20px;
      background: transparent;
    }
  }
```

### åæéçç·ç 

![åæéçç·ç å¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/Cq4jhBX0QD.gif)

```HTML
  <div class="card">
    <div class="node" v-for="item in 100"></div>
  </div>
```

åä¸ä¸å¼ å¾æè·¯ç±»ä¼¼ï¼åªæ¯å¤åºäºä¸äºåå½¢å°çã

- å°ççå¨ç»åºè¯¥åå«ä½ç½®çåç§»åé¢è²ãéæåº¦çæ¹åã
- å½é¼ æ æ¬æµ®æ¶ï¼æ³¨æå¾çå³ä¸è§çé¼ æ æå¿ï¼ï¼å¾ä¸­å¤äºä¸æå°åçï¼æ ·å¼åè¡ä¸ºååä¸æåçå ä¹ä¸æ ·ã

    æ¨æµç¬¬äºæåçä½¿ç¨äº animation-delay ææã

- è§å¯å°ççä¸ªæ°ï¼æ¬¸ï¼è²ä¼¼æäºé®é¢ï¼åå½¢å°çæ°éåç·ç æ°éå¯¹ä¸ä¸ãåºè¯¥æ¯å¯¹å°ççæ¾éçé¡ºåºåäºç¹æ®å¤çã

ä¸é¢æ¯ CSS æºç ã
```SCSS
  .card {
    cursor: pointer;
  
    // é¼ æ æ¬æµ®æ¶æ¾ç¤ºç¬¬äºæçå°åç
    &:hover {
      .node {
        &:nth-child(2n)::after {
          visibility: unset;
        }
      }
    }
  
    .node {
      background: #71A2DB;
      outline: solid 1px white;
  
      // 3n-1ï¼3n+1 ä¸èµ·ä½¿ç¨æ¶ç­ä»·äº 3n 
      &:nth-child(3n-1),
      &:nth-last-child(3n+1) {
        background: #C2D7F0;
      }
  
      // å»é¤æ«è¡åæ¯è¡æ«å°¾çä¼ªåç´ 
      &:nth-child(10n)::after,
      &:nth-last-child(-n+10)::after {
        display: none;
      }
  
      &::after {
        left: 75%;
        top: 75%;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background: white;
        animation: card-4-circle-move 1s linear alternate infinite;
      }
      &:nth-child(2n)::after {
        animation: card-4-circle-move-delay 1s linear alternate infinite;
        animation-delay: .3s;
        visibility: hidden;
      }
    }
  }
  
  @keyframes card-4-circle-move {
    from {
      left: 45%;
      top: 45%;
      opacity: 1;
      background: white;
    }
    to {
      left: 130%;
      top: 130%;
      opacity: 0;
      background: #F2C07D;
    }
  }
  @keyframes card-4-circle-move-delay {
    from {
      left: 45%;
      top: 45%;
      opacity: 1;
      background: #F2C07D;
      z-index: 2;
    }
    to {
      left: 130%;
      top: 130%;
      opacity: 0;
      background: white;
    }
  }
```

### ä¸è§ä¸åçå°è±

![ä¸è§ä¸åçå°è±å¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/browser_TdDhrdE1kJ.png)

```HTML
  <div class="card">
    <div class="node" v-for="item in 100"></div>
  </div>
```

ä¹ä¸ç¼çï¼ç¨æ¯ä¸ªèç¹çä¼ªåç´ ç»ä¸ä¸ªåå½¢åä¸ä¸ªä¸è§å½¢å°±å®æäºè¿å¼ å¾ã

å¶å®å¹¶ä¸å¯¹ï¼åå«å¾ä¸ç¿»ç­æ¡ï¼æ³æ³ä¸ºä»ä¹ã

ç­æ¡åå²çº¿ï¼å°å¿è¶çï¼

---

è§å¯å¾æ¡åHTMLä»£ç ï¼

- ä»æ¯è¡æ¥çï¼æ¯è¡æ10ä¸ªä¸è§å½¢ï¼ä½æ¯æ¯è¡æ9ä¸ªå+2ä¸ªååã

    çæµåå½¢æ¯ç±ååç»è£çï¼åç»åçºµåè§æµï¼å¯ä»¥æ¨æµåå½¢æ¯ç±4ä¸ª 1/4 åç»æçã

    ä½æ¯ç¨ä¼ªåç´ æ²¡æåæ³ç» 1/4 åãæè·¯ä¸å¯¹ï¼åæ¢ä¸ªæè·¯ã

    çæµä¼ªåç´ æ¯ä¸ä¸ªæ´åï¼å©ç¨ Box-Shadow å¤å¶äº4ä»½ï¼åå«æ¾å¨äºæ­£æ¹å½¢åä¸ªè§è½ã.card ææ¯ .node ä½¿ç¨ overflow è£åªæå¤ä½åç´ ã

- åçä¸è§å½¢ã

    ä¸è§å½¢çç»æ³æ¯è¾å¸¸è§ï¼å¯ä»¥ç¨éæ Border + å¸¦é¢è²ç Border ç»å¶ã

    ä¸è§å½¢çè§åº¦ååå¾æè§å¾ï¼å¯ä»¥å¤§è´æ¨æµï¼æè½¬è§åº¦ååæ°æå³ã

```SCSS
  .card {
    overflow: hidden;
    cursor: pointer;
  
    // æ ¹æ®ä¸è§å½¢çåºå·ä¸10çæ¨¡æ¥ç¡®å®æè½¬è§åº¦
    @for $i from 0 through 9 {
      .node:nth-child(10n - #{$i})::before {
        transform: rotate((-19 + $i) + unquote('deg'));
      }
    }
  
    // ä¸é¢é£ä¸²å½æ°ç¼è¯åºæ¥å°±æäºä¸é¢è¿ä¸é¿ä¸²æ¨¡æ ·
    // .node:nth-child(10n)::before {
    //   transform: rotate(-19deg);
    // }
    // .node:nth-child(10n-1)::before {
    //   transform: rotate(-18deg);
    // }
    // .node:nth-child(10n-2)::before {
    //   transform: rotate(-17deg);
    // }
    // .node:nth-child(10n-3)::before {
    //   transform: rotate(-16deg);
    // }
    // .node:nth-child(10n-4)::before {
    //   transform: rotate(-15deg);
    // }
    // .node:nth-child(10n-5)::before {
    //   transform: rotate(-14deg);
    // }
    // .node:nth-child(10n-6)::before {
    //   transform: rotate(-13deg);
    // }
    // .node:nth-child(10n-7)::before {
    //   transform: rotate(-12deg);
    // }
    // .node:nth-child(10n-8)::before {
    //   transform: rotate(-11deg);
    // }
    // .node:nth-child(10n-9)::before {
    //   transform: rotate(-10deg);
    // }
  
    .node {
      background: #F5C1CB;
      filter: saturate(1.6);
  
      // éè¿ä¼ªåç´  Border ç»å¶çä¸è§å½¢
      &::before {
        left: 0;
        top: -8px;
        border: solid 10px transparent;
        border-bottom-color: #D2F3BF;
        z-index: 1;
      }
  
      // ä½¿ç¨ Box-Shadow å±æ§ï¼å°åå½¢å¤å¶äºé¢å¤çä¸ä»½
      &::after {
        left: -5px;
        top: -5px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #FBF5C5;
        z-index: 0;
        box-shadow: 20px 0 #FBF5C5, 20px 20px #FBF5C5, 0 20px #FBF5C5;
      }
    }
  }
```

### ç·ç åå¼

![ç·ç åå¼å¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/4yjR5DrBgy.gif)

```HTML
  <div class="card">
    <div class="node" v-for="item in 100"></div>
  </div>
```

è¿å¼ å¾åºè¯¥å¤§ä½ä¸æ¥è¯´æ¯è¾ç®åãéè¦é¢å¤æ³¨æçæ¯ï¼é£äºç¹æ®é¢è²çååºç°çä½ç½®ã

- è§å¯é¼ æ ç§»å¨æ¶æ ¼å­çç¼©æ¾ï¼å¯ä»¥æ¨æµæ¯ä¸ªæ ¼å­ç±4ä¸ª 1/4ååä¸ä¸ªåå­ç»æã

    åå­å¥½å¤çï¼ç± 2*2 åç´ çä¼ªåç´ éè¿ Box-Shadow å¤å¶å³å¯å®æã

    æ ¹æ® 1/4 åå¯æ¨æµæ¯ä¸ªæ ¼å­é½æ overflow: hidden æ ·å¼ã

- ç¹æ®é¢è²çåæå¤ç§å¯è½çå®ç°æ¹æ³ã

    ç¬¬ä¸ï¼å¨ SCSS ç¼è¯æ¶ï¼è°ç¨éæºå½æ°ï¼ç»è¿äºéæºä½ç½®åæ¹åé¢è²å°±å¥½ã

    ç¬¬äºï¼ä½¿ç¨èååæç±»ä¼¼æ¹å¼å®ç° CSS ä¼ªéæºã

    ~~ç¬¬ä¸ï¼åæ­»ã~~

å®³~ è¿éç´æ¥ä¸æºç ã

```SCSS
  .card {
    .node {
      background: #EE92A5;
      overflow: hidden;
      transition: .3s;
      cursor: pointer;
  
      // é¼ æ å¨æ ¼å­ä¸æ¬æµ®æ¶çæ¾å¤§ææ
      &:hover {
        transform: scale(1.4);
      }
  
      // åå­çº¿çææ
      &::before {
        left: 8px;
        top: 8px;
        width: 2px;
        height: 2px;
        background: white;
        z-index: 0;
        box-shadow: 0 2px white, 2px 0 white, -2px 0 white, 0 -2px white;
      }
      
      // åå½¢çææ
      &::after {
        left: -8px;
        top: -8px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #F8C798;
        z-index: 0;
        box-shadow: 20px 0 #F8C798, 20px 20px #F8C798, 0 20px #F8C798;
      }
  
      // CSS ä¼ªéæºç»ç¹å®åç´ è®¾ç½®ç¹æ®è²ãå¨å®è·µæ¶ï¼å¯ä»¥èªå·±è°æ´ä»¥ä¸åæ°ï¼ä»¥è¾¾å°æ³è¦çææã
      &:nth-child(2n)::after {
        background: #E03A5C;
      }
      &:nth-child(3n-1)::after,
      &:nth-child(3n)::after,
      &:nth-child(5n)::after,
      &:nth-child(6n)::after,
      &:nth-child(7n-3)::after {
        background: #F8C798
      }
    }
  }
```

### å±±ä¸äº

![å±±ä¸äºå¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/KkRVqm20Qd.gif)

```HTML
  <div class="card">
    <div class="node" v-for="item in 100"></div>
  </div>
```

è¿ä¸ªå¾æ¡ï¼å... è®²éçï¼è¿è°ççåºæ¥æ¯å¥ç©æå¿åï¼å¶å®æå¿éæ³ï¼è¦ä¸æ¯ç©æå¿æ¯èªå·±ç»çï¼æä¼°æ¸çèªå·±ä¹çä¸éè¿å¾æ¡~~ï¼çº¢å°ï¼~~ï¼ä¸è¿ä¸é¢è¿æ¯æ­£ç»æä¸ä¸ã

- ä¸è§å½¢ï¼å¥½åï¼ç¨ä¼ªåç´ ç»ãè³äºé¢è²ä¹ï¼å¯ä»¥ä»¿ç§ä¸ä¸å¼ å¾çç CSS ä¼ªéæºçæè·¯ãè³äºå±±çå¨ç»ï¼ä¸å¥½ç¡®å®æ¯å±±å¨å¨è¿æ¯è¯´å±±å¨è·éå¶å®åç´ å¨ã
- åçæ¨ªçº¿ï¼æ¬¸ä¸å¯¹ï¼è¿å¾éæä¹æè¿ä¹å¤æ¨ªçº¿ç«çº¿ï¼å°åºåªä¸ä¸ªä¼ªåç´ åªä¸ä¸ªåä¸æ¯ï¼å®³...

    çæµï¼æ¨ªçº¿ç«çº¿æ¯æ ¼å­ç Outlineãä¸å¯¹ï¼Outline åªè½æ¯æ­£æ¹å½¢çã

    é£ä¼ä¸ä¼æ¯ Border å¢ï¼è½ä»è§å¯å¾åºï¼è¿äºæ¨ªçº¿çè¾¹ç¼ååéæåç´ ï¼åç»åä¸è§å½¢å¯æ Border ç»å¶èæï¼æ¨æµï¼æ¨ªçº¿ç«çº¿æ¯åè§ç©å½¢æ ¼å­ç Borderï¼è¢«å½¢æä¸è§å½¢çä¼ªåç´ çç½è² Border é®æ¡èæ¶å¤±äºä¸é¨åã

- ç»§ç»­è§å¯çº¿æ¡ï¼åç°æçæ¨ªçº¿ä¼æ¶å¤±ï¼æçæ¨ªçº¿åªä¼ç¼©ç­èä¸ä¼æ¶å¤±ï¼ææç«çº¿é½åªä¼ç¼©ç­ä¸ä¼æ¶å¤±ã

    æ ¹æ®ç«çº¿åé¿æ¶ï¼ä¸å®ä¼´éçæ¨ªçº¿çç¼©ç­ææ¶å¤±ï¼æ¨æµï¼æ ¼å­å¨ç»åé«åº¦çååï¼èä¸æ¯ä½ç§»ãç»§ç»­æ¨æµï¼ä¸è§å½¢å¯è½æ¯è·éæ ¼å­ä¸èµ·è¿å¨ã

    åæ ¹æ®åç´æ¹åä¸¤åº§å±±ä¹é´çæ¨ªçº¿åå±±çè¿å¨è¶å¿æ¯ä¸æ ·çï¼æ¨æµï¼å¾ä¸­æ¨ªçº¿æ¯æ ¼å­çä¸è¾¹èä¸æ¯ä¸è¾¹ï¼ä¸è¾¹é½è¢«é®ä½äºã

    çæµå±±ææ ¼å­çä¸è¾¹é®ä½äºï¼ä½è¿ä¸å®éè§å¯ä¸ç¬¦ï¼å ä¸ºï¼å±±å¨åä¸è¿å¨æ¶ï¼ç«çº¿çä¼¸ç¼©æä¼¸ç¼©ãæ ¼å­çè¾¹çä¸é¨åçæ¶å¤±å¹¶ä¸æ¯ææå±±çä¼ªåç´ ç Border é®æ¡èæçï¼èæ¯å¦ä¸ä¸ªä¼ªåç´ ï¼å¤§è´ä¹æ¯ç©å½¢ã

- æä»¬å¯ä»¥å¤§æ¦ææè¿å¯å¾æ¡äºï¼æ ¼å­è¢«æç¼å¨äº align-items: center ç Flex å¸å±ä¸­ï¼ä¸è§å½¢ä»¥åå¦ä¸ä¸ªç±»ä¼¼ç©å½¢çä¼ªåç´ éçæ ¼å­çè¿å¨èè¿å¨ã

å... é¿åä¸å£æ°ï¼è¦æ¯ä¸é¢æ²¡çæçè¯ï¼è¿æ¯çä¸é¢è¿å¼ å¾æå¥½äºãè¿æ¯å»æç½è²é®ç½©ç©çæ ·å­ã

![å±±ä¸äºå¾æ¡è§£æ](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/browser_leZw7Ch43e.png)

ï¼è°å¸®æå½ä¸ªåå¿ï¼ 

ä»¥ä¸æ¯ CSS æºç ã

```SCSS
  .card {
    cursor: pointer;
  
    // æ¨ªçº¿ä¸ç«çº¿å¹¶ä¸æ¯èç¹ç Borderï¼èæ¯èæ¯è²+é®ç½©å½¢æç
    // æ ¼å­ä¼æ ¹æ®å¨ç»å¨é«åº¦ä¸åå
    .node {
      background: #A45963;
      border-radius: 90%;
      animation: card-1 .4s ease alternate infinite;
  
      // æ ¼å­å¨ç»å»¶è¿å¤ç
      &:nth-child(2n) {
        animation-delay: .2s;
      }
      &:nth-child(3n) {
        animation-delay: .3s;
      }
      &:nth-child(4n) {
        animation-delay: .3s;
      }
  
      // å±±çé¢è²å¤ç
      &:nth-child(2n)::before {
        border-bottom-color: #F5CB6C;
      }
      &:nth-child(3n)::before {
        border-bottom-color: #F5856C;
      }
      &:nth-child(4n)::before,
      &:nth-child(5n)::before,
      &:nth-child(6n)::before,
      &:nth-child(7n)::before,
      &:nth-child(8n)::before,
      &:nth-child(9n)::before,
      &:nth-child(10n)::before {
        border-bottom-color: #D2F3BF;
      }
      
      // å±±çææ
      &::before {
        left: 0;
        top: -5px;
        border: solid 10px transparent;
        border-bottom-color: #D2F3BF;
        z-index: 2;
      }
  
      // ç½è²é®ç½©
      &::after {
        left: 1px;
        top: 1px;
        width: 19px;
        height: 18px;
        background: white;
      }
  
      // è¿æ¯ä¸ä¸ªç¹æ®å¤çï¼ä¸ºäºè®©ç½è²é®ç½©é¿åº¦åå°1åç´ ä»¥æ¾ç¤ºæ¯è¡æ ¼å­çèæ¯é¢è²çæåä¸ååç´ 
      &:nth-child(10n)::after {
        width: 18px;
      }
    }
  }
  
  @keyframes card-1 {
    from {
      height: 19px;
    }
    to {
      height: 8px;
    }
  }
```

### å°å´ä¸çé¿çä»äººæ

![å°å´ä¸çé¿çä»äººæå¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/lALUw0IGT2.gif)

```HTML
  <div class="card">
    <div class="node" v-for="item in 100"></div>
  </div>
```

è¿å¼ å¾æ¯è¾ç®åã

- æç¥æ ¼å­ç±æ¨ªçº¿åèçº¿åèæ¯é¢è²ç»æã

    æç¥åæ±ç¶çâä»äººæâæ¯æ¯ä¸ªæ ¼å­åç¬æ§å¶è£åå¾æ¥ã

    ååå½¢å°æ­£æ¹å½¢ååçå¨ç»å¯ä»¥ç± Clip-Path å±æ§è£åå¾æ¥ï¼æ¨æµç«çº¿åæ¨ªçº¿åå«æ¯ä¸ç§ä¼ªåç´ ç»å¶ã

ä»¥ä¸æ¯ CSS æºç ã

```SCSS
  .card {
    .node {
      background: #71A2DB;
  
      // é¨åä»äººææ·»å å¨ç»
      &:nth-child(3n)::after,
      &:nth-child(3n+2)::after,
      &:nth-child(5n-3)::after,
      &:nth-child(6n-2)::after,
      &:nth-child(7n+1)::after {
        animation: card-7-grow .6s ease alternate infinite;
      }
  
      // ä¸é¨åä»äººæä¸éè¦æ·»å å¨ç»
      &:nth-child(3n-1)::after,
      &:nth-child(3n)::after,
      &:nth-child(5n)::after,
      &:nth-child(6n)::after,
      &:nth-child(7n-3)::after {
        clip-path: circle(75% at 0 50%);
        animation: none;
      }
  
      // è¿éä½¿ç¨çæ¯èæ¯è² + Box-Shadow ç»çº¿ãä¹å¯ä»¥ä½¿ç¨ Border + Box-Shadow ç»çº¿
      &::before {
        top: 1px;
        left: 0px;
        width: 100%;
        height: 1px;
        background: white;
        box-shadow: 0 2px white, 0 4px white, 0 6px white, 0 8px white, 0 10px white, 0 12px white, 0 14px white, 0 16px white, 0 18px white;
      }
      &::after {
        top: 0;
        left: 1px;
        width: 1px;
        height: 100%;
        background: white;
        box-shadow: 2px 0 white, 4px 0 white, 6px 0 white, 8px 0 white, 10px 0 white, 12px 0 white, 14px 0 white, 16px 0 white, 18px 0 white;
        transition: .6s;
      }
    }
    
    // é¼ æ æ¬æµ®æ¶æ¾ç¤ºææççº¿æ¡ï¼ä¸ºäºä½¿ Clip-Path æè¿æ¸¡ææï¼è¿éä¸è½ç´æ¥å»æå±æ§ï¼èæ¯è¦æ¢ä¸ä¸ªè¾å¤§çå¼ï¼
    &:hover {
      .node {
        &::after {
          animation: none;
          clip-path: circle(150% at 0% 50%);
        }
      }
    }
  }
  
  @keyframes card-7-grow {
    from {
      clip-path: circle(50% at 0 50%);
    }
    50% {
      clip-path: circle(50% at 0 50%);
    }
    to {
      clip-path: circle(150% at 0 50%);
    }
  }
```

### No Name 2

![æ é¢](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/browser_OK4VHnjq1J.png)

è¿ä¸ªç©æå¿æ¯ä¸ä¸å¼ å¾çåçº§çæ¬ï¼è¯¯å¯¼å¯è½å¨ä¼çæµä¼ªåç´ æ¯ç¹ï¼èä¸æ¯çº¿ï¼ç¶åç¨ç©ºåºçä¸ä¸ªä¼ªåç´ å»æé è±å½¢æ ¼å­åå¶å®ä¸è¥¿ã

```SCSS
  .card:nth-child(8) {
    .node {
      border: solid 8px #71A2DB;
      border-top: 0;
      border-left: 0;
      background: #71A2DB;
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 50%);
      transition: .3s;
      cursor: pointer;
  
      // ç»ä¸é¨åæ ¼å­å»æ Border
      &:nth-child(3n-1),
      &:nth-child(3n),
      &:nth-child(5n),
      &:nth-child(6n),
      &:nth-child(7n-3) {
        border: none;
        clip-path: circle(50%);
  
        &:hover {
          clip-path: circle(30%);
        }
      }
  
      // å°ä¸é¨åæ ¼å­è£åªä¸ºè±å½¢åºåãClip-Path åä¸ªå¼å¯¹åºè±å½¢åä¸ªé¡¶ç¹ä½ç½®ã
      &:nth-child(2n),
      &:nth-child(3n) {
        border: solid 8px #CCDDF2;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 50%);
      }
  
      &::before {
        top: 1px;
        left: 0px;
        width: 100%;
        height: 1px;
        background: white;
        box-shadow: 0 2px white, 0 4px white, 0 6px white, 0 8px white, 0 10px white, 0 12px white, 0 14px white, 0 16px white, 0 18px white;
      }
      &::after {
        top: 0;
        left: 1px;
        width: 1px;
        height: 100%;
        background: white;
        box-shadow: 2px 0 white, 4px 0 white, 6px 0 white, 8px 0 white, 10px 0 white, 12px 0 white, 14px 0 white, 16px 0 white, 18px 0 white;
      }
    }
  }
```

### æ¤å°æ·æ·

![æ¤å°æ·æ·å¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/tLBNQ2phFI.gif)

(âï¹â)ï¼æä¸æ¯ææç»è¿ä¹æ¶å¿çï¼æ¯å ä¸ºä»è¦ç¨å° CSS contrast æ»¤éï¼è¿ä¸ªæ»¤éä¼å¢å å¯¹æ¯åº¦ï¼æäº®äº®è²ã

èåææçåçæ¯è¿æ ·çï¼å¨ç¶åç´ ä½¿ç¨ä¸ä¸ª contrast æ»¤éï¼å¨å­åç´ ä½¿ç¨ blur æ»¤éï¼ä¼åç°ï¼å­åç´ å¨äºç¸æ¥è¿æ¶ï¼ä¼äº§çèåææã

å¾çè¾¹æ¡çå¤çæ¹æ³åºè¯¥å¾å¸¸è§äºï¼ç¨ Background-Image å°±è½æå®ï¼æ­¤å¤ï¼ãCSS Secretãè¿æå°ä¸ç§ä½¿ç¨ Background æ¸åå å çæ¹å¼äº§çå¾çè¾¹æ¡ï¼åä½ä¹å¯ä»¥å°è¯ä»¥ä¸ï¼å¹¿åï¼æ¥ Lionad ç[å¨å¹²äº¤æµç¾¤](https://jq.qq.com/?_wv=1027&k=5FnYN8L) 805392878ï¼ç¾¤éæåç§ä¹¦ç±èµæä»¥åå¥½ç©çä¸è¥¿ï¼

ä¸é¢å°±ç´æ¥ç»ä»£ç äºã

```SCSS
  // å¯ä»¥çå°ç¶åç´ ç¨å°äº filter: contrast æ»¤é
  .card {
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border: solid .5em transparent;
    border-image: 8 repeating-linear-gradient(-45deg, #F5E66C 0, #F5E66C .5em, transparent 0, transparent 1em, #DA60D2 0, #DA60D2 1.5em, transparent 0, transparent 2em);
    background: white;
    cursor: pointer;
    filter: contrast(10);
    
    // ç»æ¯ä¸ªæ ¼å­åå«è®¾å®èæ¯é¢è²åå¨ç»å»¶è¿
    $background:(#DA60D2, #E7667E, #E7667E, #F5866C, #F5866C, #F5E66C);
    @for $i from 1 through 6 {
      .node:nth-child(#{$i}) {
        width: (80-(10 * ($i - 1)))+unquote('px');
        animation: card-6 .8s ease-in (0.1*$i)+unquote('s') alternate infinite, card-6-margin .8s ease-in alternate infinite;
        background: nth($background, $i);
      }
    }
  
    // æ ¼å­ä½¿ç¨äº blur æ»¤é
    .node {
      flex-basis: 30px;
      margin-top: -15px;
      width: 30px;
      height: 50px;
      filter: blur(5px);
    }
  
    // é¼ æ æ¬æµ®æ¶æåå¨ç»ï¼å ä¸ºå­åç´ çèåææï¼æä»¥éè¦æå­ä½è°ç²ä¸äº
    &:hover {
      &::before {
        content: "Paused";
        position: absolute;
        left: 5px;
        top: 5px;
        font-weight: bolder;
      }
      .node {
        animation-play-state: paused;
      }
    }
  
    @keyframes card-6 {
      from {
        border-radius: 50%;
      }
      to {
        width: 80px;
        border-radius: 0;
      }
    }
    @keyframes card-6-margin {
      from {
        margin-top: -13px;
      }
      to {
        margin-top: 0px;
      }
    }
  }
```

### Lionad

![Lionadçåç§°](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/uhhDQH3g3L.gif)

é©¬ä¸å°±å°èå©çå°¾å£°äºï¼åæä½ï¼w(ï¾Ðï¾)w

```HTML
  <divÂ class="cardÂ 5">Â Â Â Â Â Â 
    <divÂ class="node" />Â Â Â 
  </div>
```

è¿æ¯æä»¬ç¬¬ä¸æ¬¡ç¢°ä¸èæ¯ç§»å¨çæåµï¼ä¸è¿è¿å¼ å¾çç»æç®åï¼ä»¥ä¸æ¯åæã

- èæ¯çç§»å¨ä¸å¤ä¹é½æ¯ CSS Animation + Background-* å±æ§å®æçãæ­¤å¾çèæ¯æ¸åæ¯ä¸ä¸ªç®åç 45deg çä¸¤æ¡çº¹çæ¸åï¼æ¨æµèæ¯ä½¿ç¨äº Animation + Background-Position è¿è¡å¹³ç§»ã
- åçæå­é¨åï¼æå¾æå­æ¯ç±ä¸ä¸ªå¸¦ 180deg æ¸åçèæ¯ + Text-Shadow ç»æã

    æå­å¯ä»¥ä½¿ç¨æ¸åèæ¯ï¼å¯¹ï¼éè¿ Background-Clip å¯ä»¥å®ç°æå­å¯¹èæ¯å¾æ¡è£åªåè½ã

    ç±äº Text-Shadow çé¢è²æ¯æ¸åæ·±ï¼ä½æ¯è§å¯åç° Text-Shadow å¹¶æ²¡æè¢«è£åªè¿å¥å­ä½ä¸­ï¼æ¨æ­æå­åºè¯¥æ¯ç±ä¸¤ä¸ªä¼ªåç´ ç»æçï¼ä½¿ç¨ Background-Clip å±æ§çä¼ªåç´ å±çº§è¦æ¯ä½¿ç¨ Text-Shadow çä¼ªåç´ é«ã

- æåæ¯æå­ä¸é¢ä¸¤éæ¨ªçº¿ãè¿ä¸ªçç»å®ç°æ¹æ³å¤ªå¤äºï¼åä¼ªåç´  Border ä¹å¯ï¼Box-Shadow ä¹å¯ï¼Border-Image ä¹å¯ï¼Background-Image ä¹å¯...

ä¸é¢çæºç ã

```SCSS
  .card {
    background: linear-gradient(45deg, #F5CB6C 0%,#F5CB6C 20%,#F5856C 20%, #F5856C 45%,#F5CB6C 45%,#F5CB6C 70%,#F5856C 70%, #F5856C 95%,#F5CB6C 95%,#F5CB6C 100%);
    background-size:30px 30px;
    background-position:0 0;
    animation: card-5 1s infinite linear;
    cursor: pointer;
  
    .node {
      // ä½¿ç¨ Background-Clip çä¼ªåç´ 
      &::before {
        content: "Lionad";
        left: -1.5em;
        top: -.7em;
        font-size: 50px;
        font-family: didot;
        font-weight: bolder;
        color: transparent;
        background: linear-gradient(180deg, #F5CB6C, #F5856C);
        background-size: 1px 2px;
        background-clip: text;
        -webkit-background-clip: text;
        z-index: 2;
      }
  
      // çäº§ Text-Shadow çä¼ªåç´ 
      &::after {
        content: "Lionad";
        left: -1.5em;
        top: -.7em;
        font-size: 50px;
        font-family: didot;
        font-weight: bolder;
        color: transparent;
        text-shadow: 4px 4px 0px #F5856C;
        box-shadow: 0 5px 0px #F5CB6C, 0 12px 0px #F5856C;
      }
    }
    @keyframes card-5 {
      0%{
        background-position: 0 0;
      }
      100%{
        background-position: 30px 0;
      }
    }
  }
```

### ä¸è±ç­

![ä¸è±ç­å¾æ¡](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/rstkkpB6P1.gif)

```HTML
  <div class="card 10"></div>
  <div class="card 11"></div>
```

æè¿ä¸¤ä¸ªå¾æ¡æ¾å°ä¸èµ·æ¯å ä¸ºæè·¯æ¯ä¸æ ·çãå®è¯è¯´ï¼ç¬¬ä¸æ¬¡è§å°è¿ç§è±çº¹ï¼æä¹å¯¹è¿è«åå¶å¦çè²å½©ååä¸è¸æµé¼ï¼æä»¥è¿éå°±ç´æ¥è®²åçäºã

- ä¸¤å¼ å¾çé½æ¯ç¨æ¸åç»çï¼ä»ç»è§å¯è½åç°å·¦è¾¹åå³è¾¹çå¾æ¡é½æ¯ä¸å±æ¸åçå å ã

    ä¸åçå°æ¹å¨äºï¼å·¦å¾æå°çé£å±æ¸åæ¯è¾å°æ¸åï¼Radial-Gradientï¼ï¼å³å¾çåæ¯åé¥æ¸åï¼è±æå« Conic-Gradientï¼é¥¼å¾å°±å¯ä»¥ç¨è¿ç©æå¿ç»ï¼

- è«åå¶å¦çé¢è²åæ¢ï¼å¦å·¦å¾ä¸­å¿ç¹ï¼ä½¿ç¨çæ¯ CSS æ··åæ¨¡å¼ï¼CSS Blend-Modeï¼ææï¼å®è´è´£è®¡ç®å½ä¸¤ç§è²å½©å±å å¨ä¸èµ·æ¶æç»æ¾ç¤ºçé¢è²ï¼å¯ä»¥çè§£ä¸ºæ»¤éã
- èæ¯ç§»å¨ä¹åçè¿ï¼å·¦å¾æ¯åæ¢ Background-Positionï¼å³å¾æ¯åæ¢ Background-Size

ä»¥ä¸æ¯æºç ã

```SCSS
  // å³å¾çæ ·å¼ä»£ç 
  .card {
    
    // è¿éä½¿ç¨äºä¸å±èæ¯æ¸åï¼ä¸¤å±åé¥æ¸ååä¸å±è¾å°æ¸å
    background-image:
      repeating-conic-gradient(red 50%, #E1F5C4 60%),
      repeating-conic-gradient(red 50%, #E1F5C4 60%),
      radial-gradient(
        gold 0%, gold 35%,
        red 35%, red 40%,
        orangered 40%, orangered 50%,
        gold 50%, gold 60%,
        yellowgreen 60%, yellowgreen 70%,
        skyblue 70%, skyblue 80%,
        steelblue 80%, steelblue 90%,
        violet 90%
      );
    
    // å¯¹æ¯ä¸å±è¢«æ¸ååå«è®¾ç½®æ··åæ¨¡å¼
    background-blend-mode: 
      lighten, 
      overlay,
      lighten; 
    
    // å¯¹æ¯ä¸å±è¢«æ¸ååå«è®¾ç½®èæ¯å¤§å°ï¼40px æ¯å ä¸ºæ­£å¥½è½è¢« 200px ççå­æ´é¤ï¼
    background-size: 
      40px 40px,
      6em 6em,
      8em 8em;
    background-position: 50% 50%;
    transition: .45s ease-in;
    cursor: pointer;
  
    // é¼ æ æ¬æµ®æ¶ï¼åæ¢æ¸åå¤§å°
    &:hover {
      background-size: 
        40px 40px,
        4em 4em,
        12em 12em;
    }
  }
```

### ãã©é±ï¼Tigeré±ï¼

![Lionadçå¤´å](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/browser_Uufg8gfFWn.png)

ä¸æ´å¾çèå·²ï¼æå¥äºä¸èµ·çï¼

ä¸ï¼è¿ä¸æ¯å¾çã

ä½ ä»¥ä¸ºæå¤é¾ä¹ï¼ä¸ï¼æ²¡æãè¿æ¯ä»ç¨ Box-Shadow ç»å¶æçãã©é±ã

å®ç CSS ä»£ç é¿è¿æ ·ï¼

```SCSS
  // ç°è² Border
  .card {
    justify-content: flex-start;
    align-items: flex-start;
    border: solid 10px #eee;
    box-sizing: border-box;
    overflow: hidden;
  
    // ãã©é±
    .node {
      width: 1px;
      height: 1px;
      box-shadow: ????? ä½ çï¼ä½¿å²å¿çè¿åé¢æå¤é¿
    }
  }
```

è³äºå·ä½åççè¯ï¼å®³ï¼çææéçä¸ç¯æç« å§ã

---

## ç»ä¹ é¢

æåï¼è¿éæå ä¸ªéè¦ç¨å¾®æèçç»ä¹ ï¼ç»å°å­æå¿çåå­¦å®è·µ~~ï¼æä¸æ¯ç½å«ï¼ï¼~~ã

1. ããã©é±ãï¼å©ç¨ Box-Shadow + CSS Animation å®ç° GIF çæ­æ¾
2. ãå°å´ä¸çé¿çä»äººæãï¼è½ä¸è½è®©è¿äºæ¨ªçé¿çä»äººæçé¿çé¿åº¦è¶è¿ä¸¤æ ¼ï¼

å¦å¯¹äºï¼åä¸å«é®æè¿äºç»ä¹ é¢æå¥ç¨ã

è¿äºç»ä¹ é¢çä½ç¨å°±åæç»çè¿äºå¾æ¡ä¸æ ·ââæä¹ä¸ç¥éæå¥ç¨ï¼åªæ¯å¥½ç©ã

è¯è¯´åæ¥ï¼æéä¸çèå¥ä»¬é½æ¯ææ¯æµéæï¼æ¯å¤©é½æé¢è¯çæç« ï¼å¤ªæ­»æ¿äºãé½ä¸æ´äºè±éè¡å¨çä¸è¥¿ï¼é¾æªæ¾ä¸å°å¥³ç¥¨~~ï¼å¦æé·åï¼è¯·å¯¹å·å¥åº§ï¼æå¨çå¤´(ï¿£Îµ(#ï¿£)ï¼~~ã

---

## **LAST BUT IMPORTANT**

<p style="color: red;font-weight: bold">ç¹èµãå³æ³¨ãè¯è®ºä¸è¿ï¼ä¸å¤©åä»æéæç« è¯è®ºä¸­æ½å¥éä¸æ¬<a rel="nofollow" href="https://book.douban.com/subject/5323008/">ãè¶è¶å¹³å¡ççå¼è®¾è®¡ã</a></p>

è¿æ¯ä¸æ¬ä¸éçæçæ¡ä¾åèã

åç«¯å·¥ç¨å¸ä¹è¦å¥½å¥½å­¦è®¾è®¡å~ ã½(ï¿£Ïï¿£(ï¿£Ïï¿£ã)ã

![ãè¶è¶å¹³å¡ççå¼è®¾è®¡ã](https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200415/TIM20200416035604.jpg)

## éè¯»æ´å¤

æ¬ææ°åæ¶ç¨å°çç¸å³ç½ç«ææ¯åèèµæ

- [CSS Doodle](https://css-doodle.com/) : CSS Patterns ç»æè§£å³æ¹æ¡
- [NIPPON COLORS](https://nipponcolors.com) : ä¸ä¸ªå¥½ççæ¥ç³»éè²ç½ç«
- [OXXO STUDIO](https://www.oxxostudio.tw/articles/201408/sticky-ball.html) : è´¨éå¾é«çåç«¯åå®¢ï¼ãæ¤å°æ·æ·ãä¸­çææå°±è¿æ¥ç
- [Code Pen @JiaQianKoh](https://codepen.io/swifty_star4/pen/QPgaxe) : è¿ä¸ªé¡µé¢æåç§æ¸åç¹æ
- [Patternify](http://www.patternify.com) : æææçåç´ èæ¯çæç½ç«ï¼ç»äºä¸ç¨åä»£ç äºå®³...
- [CSS3 Patterns](https://leaverou.github.io/css3patterns/) : ãCSS Secretsãä½èåç CSS Patterns ç½ç«ï¼ä¸å¿æå¤è¯´äºå§...

æçåå®¢ææºç  [Lionad's Blog](http://localhost:8080/articles/9å¼ çé¢è¯é¢ä¹åä¸åºæ¥çCSSå¾æ¡.html)ã

è½¬è½½éæï¼æ³¨æåºå¤æéåå Lionad å³å¯ã