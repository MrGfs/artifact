# Artifact-master

## 前言

做出这个系统的起因其实说起来很简单，就是作为一个选择困难星人每天面对着几千个圣遗物做选择简直太太太太痛苦了。再者原神这个游戏开服一年多了对于圣遗物的评判标准很多，但一直都没有一个统一的体系，有的只能评价强化后的圣遗物。我作为一个学数据的学生想着能不能做这样一个评价体系，能够以一个统一的标准评价所有的圣遗物，以解决大家（尤其是我自己）选择圣遗物的痛苦。

在跟萌新朋友的交流过程中她跟我讲口算会更方便，我看着她50个圣遗物的背包陷入了沉思。所以该系统主要适用于和我一样角色类型比较齐全（有生命防御依赖的角色，会纠结生命防御圣遗物好不好），以及圣遗物背包爆炸（装不下，怎么想圣遗物都装不下）的玩家。当然，如果你以后有可能抽取生命防御依赖的角色，并想要提前准备一些未来可期的胚子，这个系统或许也是一个不错的选择。

事先说明这个评价标准是基于我开服以来的游戏经验，以及诸多大佬的统计数据研究的基础上得来的，有非常多的误差与局限性，还是有比较多需要完善的地方，仅作抛砖引玉，欢迎各位提出意见与建议，我们一起去完善这个评价体系。

## 使用说明

先上网页链接：[https://tseflcz.github.io/artifacts-master/](https://tseflcz.github.io/artifacts-master/)

我在github上发布了一个静态网页，可以批量导入圣遗物，可以配合[Amenoma](http://g.nga.cn/read.php?tid=28172053)、[Yas](https://bbs.nga.cn/read.php?tid=28834013)、[Cocogoat](https://bbs.nga.cn/read.php?tid=26328712)等圣遗物扫描工具食用。这里尤其推荐使用基于yas二次开发的加锁工具[yas-lock](https://github.com/ideless/yas-lock)，配和本工具可以快速有效的一键加解锁。目前支持[莫娜占卜铺](https://www.mona-uranai.com/)、[原魔计算器](https://genshin.mingyulab.com/)和[Genshin Optimizor](https://frzyc.github.io/genshin-optimizer/)三个工具的圣遗物数据格式的json文件，并且由于四星与五星的圣遗物在计算期望时有很大区别，目前仅支持五星圣遗物的计算（因为没什么人用四星圣遗物，当然主要是懒）。

不同副词条的权重可以自行设置，这里引入了主属性权重以及攻击-生命（防御）转化率的概念。主属性权重即为主属性的评分占整个评分的比例，这个权重越大主属性比副词条越重要。攻击-生命（防御）转化率是对生命（防御）角色而言，一条攻击词条相当于多少条生命防御词条，如荒泷一斗一个攻击词条大约相当于0.5个防御词条，这里转化率就设为0.5，此时攻击词条将乘0.5后算入词条数，更详细的内容可以到评分公式部分进一步了解。

这里默认设置的权重是我自己使用的供大家参考。一个小攻击对大多数角色来说相当于0.5个大攻击故权重设置为0.5，小防御小生命同理。众所周知圣遗物强化时有四档，这里取的是所有属性的最高档为一个词条，如果想使用用平均档为一个词条，可以将权重设为1/0.85=1.17。暴击爆伤因为获取难度较高，所以权重设为2。

筛选功能可以按需要筛选圣遗物的套装、部位、主词条、等级，并可根据圣遗物评分、期望词条数以及当前词条数排序。圣遗物评分为主属性评分加上期望词条数，其中期望词条数为圣遗物强化到满级时期望的有效副词条数，如果希望只考虑副词条而不考虑主属性可以直接使用期望词条数对圣遗物进行评价，更详细的内容可以到评分公式部分进一步了解。

高级筛选功能为圣遗物过滤面板，可以批量筛选、加锁、解锁圣遗物。可以设置多条规则，规则会从上到下依次执行，后面的规则会覆盖前面的规则。

主词条、位置、套装、副词条数量、是否加锁、装备角色为复选菜单，不选时不使用该数据过滤，选择后过滤满足所选项的圣遗物。星级通过滑块选择范围。如果装备角色中选择了任意角色选项，会选择所有已被角色装备的圣遗物。

需要根据分数过滤时，可以根据当前分、期望分、总分数值进行过滤。分数由规则中设置的分数权重计算得到，每个新规则初始分数权重为默认值，可以点击编辑权重修改。如果需要复制当前词条权重面板中设置的权重，点击复制当前并确认。

对于副词条，有想包含的副词条和不想包含的副词条两种。如果留空则不用于过滤。以想包含的副词条为例：

* 最少包含条数：最少包含多少条所列的副词条。例如选择了攻充爆爆最少条数3，那么这四条中至少包含三条的圣遗物才会被过滤出来
* 添加想包含副词条：按钮位于窗口最下方，点击后添加新的一个副词条筛选数据
* 副词条：包含四部分，副词条名称、判断方式、数值、删除。名称选择副词条名，判断方式有`> < =`等，数值为数值阈值，删除为删除该副词条。

不想包含的副词条和上述类似，不同在于：最多包含条数，圣遗物副词条最多只能包含多少条不想包含的副词条。添加不包含副词条，添加新的一条不想包含的副词条。

### 注意事项

1. 该系统目前没有考虑圣遗物套装的影响，也没有考虑与角色的适用程度，每个圣遗物都是被单独评价的。所以，如果想要为某一个角色挑选圣遗物，请善用权重功能，根据角色特性自定义权重。为平衡双爆及攻击比例，配合[莫纳占卜铺](https://www.mona-uranai.com/)的圣遗物配装功能使用效果更佳。
2. 由于三词条圣遗物词条数过少，在计算期望时将不会判断该词条是否有效。并且期望仅反应圣遗物强化时的最可能的结果，也即强化时雨露均沾，具体公式可在副词条期望部分了解。所以，在圣遗物等级较高时会有更准确的评价效果，如果有条件建议将期望不错的胚子强化以后再做判断。
3. 主词条评价时引入属性使用率作为评判标准，本质上是用现有角色的需求状况预测以后出的角色总体需求状况，但事实上新出的角色更多的会区别于老角色的定位，对未来可期的圣遗物评价有限，所以主词条评分还请酌情参考。

### 特别鸣谢：

* ideles大佬的所制作优秀的工具[圣遗物强化助手](https://bbs.nga.cn/read.php?tid=29551863)的二次开发授权，我前端这块比较菜，是使用了大佬开源的网页模板，主要成果在评分系统的构建上，静态网页部分是在他的圣遗物强化助手网页的基础上加入了自己的评分系统。
* zyr17大佬协助移植他制作工具[天目流椰羊](https://github.com/zyr17/AmenomaCocogoat)的圣遗物过滤面板，让工具能够更方便地根据需要一键加解锁。

### 更新记录

* 2022.2.17 增添/修改/删除单个圣遗物功能：ideles大佬已经更新了选择导出功能及圣遗物修改功能，，单个圣遗物变动不用再扫描一遍了。并且开发了自动加锁工具[yas-lock](https://github.com/ideless/yas-lock)，可以配合使用。我在他的基础上优化了权重界面的显示，增加了圣遗物删除功能。
* 2022.2.24更新

  * 优化了圣遗物编辑界面的功能与显示(实时得分)
  * 增加了按评分筛选圣遗物功能（可以一键加锁了）
  * 增加了倒序排列功能（优化了平板电脑等移动设备操作体验）
  * 增加了圣遗物套装评分（详细计算见公式部分）
* 2022.3.13更新：在zyr17大佬的协助下增加了圣遗物过滤面板，之前挖的副词条筛选功能的坑算是填上了，即根据副词条筛选圣遗物的功能，移植于大佬制作的[天目流椰羊](https://bbs.nga.cn/read.php?tid=28693447)，主要就是方便于按评分等条件筛选圣遗物。可以有效优化自动加锁的体验。

### 待更新内容

* 多权重比较功能：即用户可以同时使用多套权重的功能，灵感来源于[全角色圣遗物胚子评分](https://ngabbs.com/read.php?tid=26432895)。第二套权重的计算结果与原权重的计算结果对比后取更高或更低的值，主要用途在于对于的主练角色，我们希望给他留下更适合的圣遗物，而不是与其他所有角色共用一套评分权重模板，这时候多套权重可能会是一个解决途径。同时，ideles大佬的[圣遗物强化助手](https://bbs.nga.cn/read.php?tid=29551863)也和我合作了一个类似的智能排序（计算圣遗物全角色使用概率）功能，目前仍在测试阶段，欢迎大家体验。

## 评分公式

整个圣遗物评分由两部分构成，主属性得分与有效词条数，主属性与副词条分别作为评价圣遗物的好坏的两个部分。~~后续或许会加入圣遗物套装参与评价，但是由于过于复杂并且大多数人不太会像我这样每套都刷一些，感觉需求不是特别大而且我也没想好，先挖个坑吧，大佬们有想法可以给我提建议。~~

已加入套装评分，套装评分目前只是针对于主属性所以放在主属性得分内，目前还在实验阶段，如果有任何问题或者建议都可以告诉我。

### 主属性得分=主属性系数\*属性使用率/属性出现概率+套装系数\*套装与主属性相关系数。

主属性系数即为主属性的评分占整个评分的比例，是为了平衡主属性与副词条间的关系设置的。这个权重越大主属性比副词条越重要，有的人更重视主属性而有的人更重视副词条，可以根据个性化的需求进行设置。

属性使用率为使用该主属性圣遗物的角色占全角色的比例，反应的是某个主属性的圣遗物多少角色使用，使用这个主属性的角色越多说明该主属性的圣遗物需求量越大。最明显的例子是攻击沙，由于需要攻击沙的角色比需要防御生命沙的角色多很多，所以我会更倾向于保留更多的攻击沙，即使他们刷出来的难度是差不多的。因为属性使用率是截至2.4版本的统计结果，所以可能会有有一定的误差，统计模板来自[全角色圣遗物及武器搭配简述](https://ngabbs.com/read.php?tid=27859119)。但需要注意的是属性使用率的本质是用现有角色的需求状况预测以后出的角色总体需求状况，但事实上新出的角色更多的会区别于老角色的定位（像新出的申鹤需要攻击头而非暴击头将会拉高攻击头的整体使用率），所以这部分是整个模型中误差较大的部分，对未来可期的圣遗物评价有限。目前来说我没有想到一个更好的反应需求量的办法。

属性出现概率为主属性属性在该部位圣遗物的出现概率，反映的是该类型圣遗物的刷取难度。比如精通头虽然需要的角色很少，但是全游最低的掉率让很多人给万叶刷精通圣遗物的时候一头难求。这里的出现概率参考了[圣遗物词条分布和掉落分布的推测](https://bbs.nga.cn/read.php?tid=25954661)，是概率统计结果，可能会与官方概率有所偏差，但总体还是比较准确的。

下表为主属性权重为0.5时的主属性得分情况，这里的得分与词条数等价。如主属性权重为0.5时一个暴击头将相当于自带3.96个有效词条，一个防御沙需要比暴击头多3.76个有效副词条才能得到相同的评分。需要注意的是，物理/元素伤害杯子由于出现概率与使用概率的双高导致最终得分较低，其实造成元素杯子稀缺的主要原因是套装过于分散，如果不论套装散搭杯子的话杯子其实是不稀缺的，对于特定套装的特定杯子（如魔女火伤杯等）可作为特例保留。

| 部位   | 主属性        | 出现概率 | 使用概率 | 主属性得分 |
| ------ | ------------- | -------- | -------- | ---------- |
| 生之花 | 生命值        | 100.00%  | 100.00%  | 0.50       |
| 死之羽 | 攻击力        | 100.00%  | 100.00%  | 0.50       |
| 时之沙 | 攻击力        | 26.66%   | 72.92%   | 1.37       |
| 时之沙 | 生命值        | 26.66%   | 14.58%   | 0.27       |
| 时之沙 | 防御力        | 26.66%   | 10.42%   | 0.20       |
| 时之沙 | 元素充能      | 10.00%   | 58.33%   | 2.92       |
| 时之沙 | 元素精通      | 10.00%   | 22.92%   | 1.15       |
| 空之杯 | 攻击力        | 21.25%   | 29.17%   | 0.69       |
| 空之杯 | 生命值        | 21.25%   | 12.50%   | 0.29       |
| 空之杯 | 防御力        | 20.00%   | 8.33%    | 0.21       |
| 空之杯 | 物理/元素伤害 | 35.00%   | 79.17%   | 1.13       |
| 空之杯 | 元素精通      | 2.50%    | 14.58%   | 2.92       |
| 理之冠 | 攻击力        | 22.00%   | 16.66%   | 0.38       |
| 理之冠 | 生命值        | 22.00%   | 10.42%   | 0.24       |
| 理之冠 | 防御力        | 22.00%   | 8.33%    | 0.19       |
| 理之冠 | 暴击率        | 10.00%   | 79.17%   | 3.96       |
| 理之冠 | 暴击伤害      | 10.00%   | 77.08%   | 3.85       |
| 理之冠 | 治疗加成      | 10.00%   | 16.66%   | 0.83       |
| 理之冠 | 元素精通      | 4.00%    | 14.58%   | 1.82       |

套装系数与主属性系数类似，用于平衡套装得分在总分中的占比。这个系数越大套装对整个评分的影响越大，默认设为3是为了与主属性得分最高的暴击头相匹配，这样结果上对应属性杯紫与暴击头的主属性得分与套装得分和都在4分左右。

套装与主属性相关系数统计模板同样来自截至2.4版本的[全角色圣遗物及武器搭配简述](https://ngabbs.com/read.php?tid=27859119)，这里将角色有效词条近似为主属性选择，计算了各圣遗物套装与各主属性的的相关系数矩阵，如下图所示。最终在计算时负收益是减半参与计算的。因为比如角斗士套装加攻击，用决斗士的角色一般不会选择生命属性，所以两者是负相关，但是好的生命沙生命杯依然可以作为散件使用，所以降低了负值的修正作用。

|                        | pyroDB | hydroDB | electroDB | anemoDB | cryoDB | geoDB | physicalDB | hpp   | atkp  | defp  | em    | er    | hb    | cr    | cd    |
| ---------------------- | ------ | ------- | --------- | ------- | ------ | ----- | :--------: | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| GladiatorsFinale       | -0.87  | -1.27   | 1.51      | -0.1    | 1.21   | -0.76 |    3.49    | -3.69 | 4.16  | -1.92 | -1.69 | -1.49 | -3.02 | 3.19  | 3.99  |
| WanderersTroupe        | 4.53   | 1.39    | 0.22      | -2.25   | -1.58  | -2.44 |   -2.25   | -0.85 | 2.44  | -2.06 | 4.46  | -2.45 | -2.44 | 2.06  | 2.8   |
| Thundersoother         | -1.07  | -0.71   | 4.66      | -0.86   | -1.07  | -0.93 |    5.05    | -0.86 | 0.93  | -0.79 | 0     | -2.95 | -0.93 | 0.79  | 1.07  |
| ThunderingFury         | -1.75  | -1.16   | 7.62      | -1.41   | -1.75  | -1.52 |    2.46    | -1.41 | 1.52  | -1.29 | -0.68 | -0.48 | -1.52 | 1.29  | 1.75  |
| MaidenBeloved          | -0.92  | 2.13    | -2        | 1.32    | 0.46   | -0.5  |   -1.85   | 4.49  | -4    | 0     | 0     | 3.16  | 10    | -8.45 | -7.34 |
| ViridescentVenerer     | -2.12  | -1.41   | -1.85     | 10      | -2.12  | -1.85 |   -1.71   | -1.71 | 1.85  | -1.56 | 2.95  | 1.67  | 1.32  | -0.22 | 0.67  |
| CrimsonWitchOfFlames   | 8.05   | -1.41   | -1.85     | -1.71   | -2.12  | -1.85 |   -1.71   | -0.03 | 1.85  | -1.56 | 4.13  | -4.59 | -1.85 | 1.56  | 2.12  |
| Lavawalker             | 2.91   | -0.88   | -1.15     | -1.07   | 0.79   | -1.15 |   -1.07   | -1.07 | 1.15  | -0.98 | 2.58  | -3.65 | -1.15 | 0.98  | 1.32  |
| NoblesseOblige         | -2.71  | 1.63    | -0.56     | -2.31   | 3.49   | 0.56  |   -1.12   | 0.07  | -0.56 | -1.75 | -1.26 | 1.78  | 1.69  | -0.79 | -1.42 |
| BloodstainedChivalry   | -0.67  | -1.41   | 2.9       | -1.71   | 2.24   | -1.85 |     10     | -1.71 | 1.85  | 0.22  | -2.95 | -2.09 | -1.85 | 1.56  | 2.12  |
| ArchaicPetra           | -1.94  | -1.29   | -1.69     | -1.56   | -1.94  | 8.45  |   -1.56   | 0.22  | -1.69 | 4.29  | -2.52 | -1.34 | 0     | 1.43  | 0.39  |
| RetracingBolide        | 5.82   | -1.29   | -1.69     | -1.56   | -1.94  | 0     |    0.22    | 0.22  | 0     | 2.38  | 1.26  | -2.67 | -1.69 | 1.43  | 1.94  |
| BlizzardStrayer        | -1.94  | -1.29   | -1.69     | -1.56   | 7.37   | -1.69 |    2.01    | -1.56 | 1.69  | -1.43 | -1.26 | 0     | -1.69 | 1.43  | 1.94  |
| HeartOfDepth           | -1.55  | 8.84    | -1.35     | -1.25   | -1.55  | -1.35 |   -1.25   | 0.89  | 1.35  | -1.14 | 3.02  | 0.53  | 0.67  | -1.14 | -0.31 |
| TenacityOfTheMillelith | 0.86   | 3.01    | -1.11     | -2.25   | -0.36  | 0.22  |    0.56    | 6.17  | -2.88 | 0.94  | -1.49 | 0.7   | 2.88  | -3.93 | -3.31 |
| PaleFlame              | -0.67  | -1.41   | 2.9       | -1.71   | 2.24   | -1.85 |     10     | -1.71 | 1.85  | 0.22  | -2.95 | -2.09 | -1.85 | 1.56  | 2.12  |
| ShimenawasReminiscence | 0.39   | -1.12   | 1.69      | 0.07    | 0.39   | -1.69 |    2.45    | -2.31 | 5.07  | -3.02 | -0.42 | -1.78 | -2.82 | 3.02  | 3.75  |
| EmblemOfSeveredFate    | -1.85  | 0.18    | 2.31      | -3.2    | 3.44   | -1.15 |   -0.76   | -1.98 | 0     | -0.33 | 0     | 3.65  | -1.15 | 1.63  | -0.26 |
| HuskOfOpulentDreams    | -0.39  | -1.29   | -1.69     | -1.56   | -1.94  | 6.76  |    0.22    | -1.56 | -5.07 | 10    | -1.26 | 1.34  | 0     | 1.43  | -1.16 |
| OceanHuedClam          | -0.92  | 2.13    | -2        | 1.32    | 0.46   | -0.5  |   -1.85   | 4.49  | -4    | 0     | 0     | 3.16  | 10    | -8.45 | -7.34 |

### 有效词条数

这里介绍一下这个系统的前作，[单个圣遗物词条数计算器](https://bbs.nga.cn/read.php?tid=29672103)，因为要下载并且手动输入圣遗物副词条所以不太方便，不过如果需要看看刚强化出的单个圣遗物怎么样而不想扫描的话可以尝试一下。

这里沿用了之前依据主属性确定有效词条的计算公式，主属性被分为基础属性与通用属性，基础属性为攻击生命防御这三种属性，通用属性则是充能双爆等这种无论时攻击还是生命防御的角色都有可能需要的属性。

当主属性为基础属性时又分攻击与生命防御两种情况，主属性为攻击时生命防御视为无效词条不参与有效词条计算，为生命防御时攻击力词条额外乘攻击-生命（防御）转化率后参与词条计算。造成这种现象的原因是多数生命防御依赖型角色仍是将生命防御转化为攻击，只有少数（如阿贝多的E）技能是直接依赖于防御力。

主属性为通用属性时取副词条中最高的基础属性作为参考主属性，按照主属性为基础属性计算，真正实现时将分为两层计算，具体可至之前的帖子中查看。在无基础属性词条，即副词条为暴击爆伤充能精通时各词条按权重直接参与词条计算就可以了。

2022.2.24更新：特别的，当主属性为通用属性同时参考主属性为生命或者防御时，主属性得分会额外减少0.5*主属性系数。这会缓解参考主属性为生命防御的花和羽毛得分过高的情况。

最后说下未满级圣遗物的期望计算，这里的计算方法使用了[圣遗物强化助手](https://github.com/ideless/artifact/tree/master/src/ys)中的计算方法，公式如下

特别的，由于三词条圣遗物词条数过少，主属性为通用属性时计算期望将不再判断该词条是否有效。由此，在圣遗物等级较高时会有更好的效果，期望建议仅作为参考，较为不错的胚子可以强化到一定等级以后再做判断。

> In this section, only rarity 5 artifacts are considered.

Minor affixes are considered important to the evaluation of an artifact's
potential because main affixes are fixed. As minor affix increment takes
4 possible values, the affix number of a minor affix is defined to be the
ratio of its value divided by the maximum one-time increment of this
minor affix. The affix number of an artifact is defined to be an weighted
sum of each minor affix number, given the weight of each minor affix customed
by users. This is because certain minor affixes are considered useless while
others are usually more valuable. Weight of a minor affix must be between
0 and 1.

For an artifact, let $\alpha$ be the main affix, $a_{i}$ be a minor affix,
$A$ be the set of all minor affixes, $p( a_{i})$ be the pick weight,
$w( a_{i})$ be customized affix weight, $v^{*}( a_{i})$ be the maximum
one-time increment, and $v( a_{i})$ be the current affix value. Expected,
minimum and maximum affix numbers are refered to by
$\overline{S} ,S_{min} ,S_{max}$, respectively.

#### Artifacts with 3 minor affixes

Let $a_{1} ,a_{2} ,a_{3}$ be the 3 minor affixes. Affix enhancement times
$n=5$. Expected affix number is

$$
\begin{aligned}
\overline{S} = & \sum _{i=1,2,3} w( a_{i})\left(\frac{v( a_{i})}{v^{*}( a_{i})} +4\times \frac{1}{4} \times 0.85\right)\\
 & +\frac{\sum _{a\in A\backslash \{a_{1} ,a_{2} ,a_{3} ,\alpha \}} w( a) p( a)}{\sum _{a\in A\backslash \{a_{1} ,a_{2} ,a_{3} ,\alpha \}} p( a)} \times \left( 0.85+4\times \frac{1}{4} \times 0.85\right).
\end{aligned}
$$

#### Artifact with 4 minor affixes

Let $a_{1} ,a_{2} ,a_{3} ,a_{4}$ be the 4 minor affixes. Affix enhancement times is $n$.
Expected affix number is

$$
\overline{S} =\sum _{i=1,2,3,4} w( a_{i})\left(\frac{v( a_{i})}{v^{*}( a_{i})} +n\times \frac{1}{4} \times 0.85\right).
$$

## Project setup

In this section, please change to main branch.

### Vue 3 + Typescript + Vite

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
