/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

//const Child = (props) => {
const Child = ({ color, num, fn, bool, obj }) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h1>{num}</h1>
      <h1>{fn("Props")}</h1>
      <h1>{bool ? "true" : "false"}</h1>
      <h1>{obj.name}</h1>
    </div>
  );
};

export default Child;
