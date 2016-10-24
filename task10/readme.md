####flex 布局练习学习
##基本概念
   1.弹性容器（flex container）
   2.弹性项目（flex item）
   3.轴（Axis）,主轴，测轴
   4.方向（direction）
   5.行（line）
## flex属性
*应用于父容器上的属性*

  - display:flex; display:inline-flex;
    这样做将元素定义为弹性容器，其子元素则成为弹性项目
    值 flex 使弹性容器成为块级元素。值 inline-flex 使弹性容器成为单个不可分的行内级元素
    
   - flex-direction:row/row-reverse/column/column-reverse
   用来定义伸缩容器的主轴方向，默认值为：row
   
   - flex-wrap:nowrap/wrap/wrap-reverse;
   用来控制伸缩容器是单行还是多行。决定测轴方向新一行的堆放方向，nowrap为默认值。表示伸缩容器为单行，wrap:表示伸缩容器为多行
   
  - flex-flow :row nowrap;
   是diection与wrap的简写
   
  - align-items:flex-start/flex-end/center/stretch;
   用来调整伸缩项目在测轴的对齐方式，center：伸缩项目的外边距盒在该行的侧轴上居中位置
   
  - justify-content:flex-start/flex-end/center/space-between/space-around;
    用来调整伸缩项目在主轴的对齐方式，从而调整伸缩项目之间的间距，设置这个属性，在主轴方向上设置任何margin值都不会启作用。
    
  - align-content:flex-start/flex-end/center/space-between/space-around/stretch;
    用来调整伸缩行在容器里面的对齐方式
    
    *应用在子弹性项目中的属性*
    
    - order:整数值（可为负数），默认情况下，伸缩项目中的顺序组都是0；
    用来调整每个伸缩项目的顺序值，越小排列在越前面。
    
   - flex-grow:number,默认为0（不能为负数）
    用来项目元素的放大比例，默认为0.就是如果存在剩余空间，也不放大。所有项目都是1，则它们等分剩余空间（如果有的话），
    若有一个为2，其他都为1，为2的占据剩余空间比其他项目多一倍
    
  - flex-shrink：number,默认为1(负值无效)
    用来定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，
    则空间不足时，前者不缩小。
    
  - flex-basic：length|auto;设置具体的值，则可以将项目占固定空间，
    用来定义在分配多余空间之前，项目占据主轴的空间，默认为auto,即项目的本来大小。
    
  - flex：1 1 auto|0 0 auto
    是flex-grow,flex-shrink,flex-basic的简写，默认为 0 1 auto
    
  - align-self:auto|flex-start|flex-end|center|baseline|stretch;
    用来允许单个项目有与其他项目不一样的对其方式，可覆盖align-items属性。默认为：auto;
    
## flexbox布局与网格布局的区别及应用范围
