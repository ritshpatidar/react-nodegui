(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var o=t(2),i=t(6),a=(t(0),t(148)),r={sidebar_label:"Layout",title:"Layout"},l={unversionedId:"guides/layout",id:"guides/layout",isDocsHomePage:!1,title:"Layout",description:"React NodeGui uses a layout system to automatically arrange child components within a component to ensure that they make good use of the available space.",source:"@site/docs/guides/layout.md",slug:"/guides/layout",permalink:"/docs/guides/layout",version:"current",sidebar_label:"Layout",sidebar:"guides",previous:{title:"Styling",permalink:"/docs/guides/styling"},next:{title:"Handle Events",permalink:"/docs/guides/handle-events"}},u=[{value:"Fixed Dimensions",id:"fixed-dimensions",children:[]},{value:"Dynamic Layouts",id:"dynamic-layouts",children:[]},{value:"FlexLayout",id:"flexlayout",children:[{value:"Example:",id:"example",children:[]}]},{value:"BoxView Layout",id:"boxview-layout",children:[]},{value:"GridView Layout",id:"gridview-layout",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={rightToc:u};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React NodeGui uses a layout system to automatically arrange child components within a component to ensure that they make good use of the available space."),Object(a.b)("h2",{id:"fixed-dimensions"},"Fixed Dimensions"),Object(a.b)("p",null,"A component's height and width determine its size on the screen. The simplest way to set the dimensions of a component is by adding a fixed width and height to style. Setting dimensions this way is common for components that should always render at exactly the same size, regardless of screen dimensions."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Renderer, View, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window>\n      <View style={viewStyle} />\n    </Window>\n  );\n};\n\nconst viewStyle = `\n  width:50px;\n  height:30px; \n  background-color: yellow;\n`;\n\nRenderer.render(<App />);\n')),Object(a.b)("h2",{id:"dynamic-layouts"},"Dynamic Layouts"),Object(a.b)("p",null,"Dynamic layouts automatically position and resize components when the amount of space available for them changes, ensuring that they are consistently arranged and that the user interface as a whole remains usable."),Object(a.b)("p",null,"React NodeGui currently supports layouting using FlexLayout."),Object(a.b)("h2",{id:"flexlayout"},"FlexLayout"),Object(a.b)("p",null,"FlexLayout allows the children to expand and shrink dynamically based on available space. Normally you will use ",Object(a.b)("inlineCode",{parentName:"p"},"flex: 1"),", which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.")),Object(a.b)("p",null,"Flexbox is designed to provide a consistent layout on different screen sizes. You will normally use a combination of flex-direction, align-items,and justify-content to achieve the right layout."),Object(a.b)("h3",{id:"example"},"Example:"),Object(a.b)("p",null,"Lets say you want to build a UI that has a parent view which has two child components. One a label with text Hello and another a view with background color white. Now you want the label to occupy 1/3 of the available space while the white colored child view to occupy the remaining 2/3 space."),Object(a.b)("img",{src:"https://github.com/nodegui/react-nodegui/raw/gh-pages/img/flex-layout-1.png",alt:"flex layout example 1",style:{maxWidth:700,width:"100%"}}),Object(a.b)("p",null,"The code for that would look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Renderer, View, Text, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window styleSheet={styleSheet}>\n      <View id="rootView">\n        <Text id="label">Hello</Text>\n        <View id="view" />\n      </View>\n    </Window>\n  );\n};\n\nconst styleSheet = `\n  #rootView{\n    height: \'100%\';\n    background-color: blue;\n  }\n  #label {\n    flex: 1;\n    color: white;\n    background-color: green;\n  }\n  #view {\n    flex: 3;\n    background-color: white;\n  }\n`;\n\nRenderer.render(<App />);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To know more on how FlexBox layout works in depth you can visit: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/0.60/flexbox"}),"https://facebook.github.io/react-native/docs/0.60/flexbox"),"."),Object(a.b)("p",{parentName:"blockquote"},"NodeGui uses the same library that React Native uses underneath for FlexBox (",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/yoga"}),"Yoga"),").")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can specify layout properties via inline styles also.")),Object(a.b)("h2",{id:"boxview-layout"},"BoxView Layout"),Object(a.b)("p",null,"BoxView Layout is an implementation of QBoxLayout of NodeGui."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from "react";\nimport { Renderer, Window, BoxView, Button } from "@nodegui/react-nodegui";\nimport { useEventHandler } from "./hooks";\nimport { QPushButtonSignals, Direction } from "@nodegui/nodegui";\n\nconst App = () => {\n  const [additionalButtons, setAdditionalButtons] = useState<string[]>([]);\n  const [direction, setDirection] = useState<Direction>(Direction.LeftToRight);\n\n  const addHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setAdditionalButtons((buttons) => [\n          ...buttons,\n          `Button ${buttons.length}`,\n        ]),\n    },\n    []\n  );\n\n  const removeHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setAdditionalButtons((buttons) => buttons.slice(0, buttons.length - 1)),\n    },\n    []\n  );\n\n  const toggleDirection = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setDirection((prevDirection) => ((prevDirection + 1) % 4) as Direction),\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <BoxView direction={direction}>\n        <Button text="Add" on={addHandler} />\n        <Button text="Remove" on={removeHandler} />\n        <Button text="Toggle direction" on={toggleDirection} />\n        {additionalButtons.map((button) => (\n          <Button key={button} text={button} />\n        ))}\n      </BoxView>\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n\n\n')),Object(a.b)("p",null,"The above code produces"),Object(a.b)("img",{src:"https://github.com/nodegui/react-nodegui/raw/gh-pages/img/box-layout-1.png",alt:"box layout example 1",style:{maxWidth:700,width:"100%"}}),Object(a.b)("img",{src:"https://github.com/nodegui/react-nodegui/raw/gh-pages/img/box-layout-2.png",alt:"box layout example 1",style:{maxWidth:700,width:"100%"}}),Object(a.b)("h2",{id:"gridview-layout"},"GridView Layout"),Object(a.b)("p",null,"GridView Layout is an implementation of QGridLayout of NodeGui."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from "react";\nimport { Renderer, GridView, GridRow, GridColumn, Text, Window, View, Button, useEventHandler } from "@nodegui/react-nodegui";\nimport { QPushButtonSignals } from "@nodegui/nodegui";\n\nconst App = () => {\n  const [additionalRows, setAdditionalRows] = useState<string[]>([]);\n  const [rowStretch, setRowStretch] = useState(false);\n\n  const [additionalColumns, setAdditionalColumns] = useState<string[]>([]);\n\n  const insertRowHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setAdditionalRows((rows) => [...rows, `Row ${rows.length}`]),\n    },\n    []\n  );\n\n  const removeRowHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setAdditionalRows((rows) => [...rows.slice(0, rows.length - 1)]),\n    },\n    []\n  );\n\n  const insertColumnHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setAdditionalColumns((columns) => [\n          ...columns,\n          `Column ${columns.length}`,\n        ]),\n    },\n    []\n  );\n\n  const removeColumnsHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () =>\n        setAdditionalColumns((columns) => [\n          ...columns.slice(0, columns.length - 1),\n        ]),\n    },\n    []\n  );\n\n  const toggleRowStretch = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () => setRowStretch((value) => !value),\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <GridView\n        style="flex: 1"\n        columnProps={{\n          0: {\n            minWidth: 200,\n          },\n          1: {\n            minWidth: 300,\n          },\n        }}\n        rowProps={{\n          0: {\n            stretch: rowStretch ? 2 : undefined,\n            minHeight: 400,\n          },\n          1: {\n            stretch: !rowStretch ? 2 : undefined,\n          },\n        }}\n      >\n        <GridRow>\n          <GridColumn width={2}>\n            <View style="background-color: red">\n              <Text>Hello</Text>\n              <Button text="Insert row" on={insertRowHandler} />\n              <Button text="Remove row" on={removeRowHandler} />\n              <Button text="Toggle row stretch" on={toggleRowStretch} />\n              <Button text="Insert column" on={insertColumnHandler} />\n              <Button text="Remove column" on={removeColumnsHandler} />\n            </View>\n          </GridColumn>\n          <GridColumn width={2}>\n            <View style="background-color: blue">\n              <Text>Second Column</Text>\n            </View>\n          </GridColumn>\n          <>\n            {additionalColumns.map((column) => (\n              <GridColumn key={column}>\n                <Text>{column}</Text>\n              </GridColumn>\n            ))}\n          </>\n        </GridRow>\n        <GridRow height={2}>\n          <GridColumn>\n            <View style="background-color: green">\n              <Text>Second row</Text>\n            </View>\n          </GridColumn>\n          <GridColumn>\n            <View style="background-color: purple">\n              <Text>Second Column</Text>\n            </View>\n          </GridColumn>\n          <GridColumn>\n            <View style="background-color: purple">\n              <Text>Third Column</Text>\n            </View>\n          </GridColumn>\n          <GridColumn>\n            <View style="background-color: purple">\n              <Text>Fourth Column</Text>\n            </View>\n          </GridColumn>\n          <>\n            {additionalColumns.map((column) => (\n              <GridColumn key={column}>\n                <Text>Second {column}</Text>\n              </GridColumn>\n            ))}\n          </>\n        </GridRow>\n        <GridRow>\n          <GridColumn>\n            <Text>Third row</Text>\n          </GridColumn>\n        </GridRow>\n        <>\n          {additionalRows.map((row) => (\n            <GridRow key={row}>\n              <GridColumn width={2}>\n                <Text>{row}</Text>\n              </GridColumn>\n              <GridColumn>\n                <Text>Second {row}</Text>\n              </GridColumn>\n            </GridRow>\n          ))}\n        </>\n      </GridView>\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n\n\n')),Object(a.b)("p",null,"The above code produces"),Object(a.b)("img",{src:"https://github.com/nodegui/react-nodegui/raw/gh-pages/img/grid-layout-1.png",alt:"grid layout example 1",style:{maxWidth:700,width:"100%"}}),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"The primary layout in React NodeGui is the Flexbox layout. Flexbox layout can be controlled via stylesheet just as in web. So both paint and layout properties are available at the same place."))}s.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),p=o,b=d["".concat(r,".").concat(p)]||d[p]||m[p]||a;return t?i.a.createElement(b,l(l({ref:n},c),{},{components:t})):i.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);