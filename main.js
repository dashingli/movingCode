let string1 =
    `/*你好我叫李林哲
    接下来我演示一下我的前端功底
    首先我要准备一个div*/
    .div2{
            width : 300px;
            height: 300px;
            border: 1px solid red;
        }
    /* 接下来我把 div 变成一个八卦图
     * 注意看好了
    * 首先，把 div 变成一个圆
    **/
    .div2{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
        }
    /* 八卦是阴阳形成的
    * 一黑一白
    **/
    .div2{
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
        }
    /* 加两个神秘的小球 */
    .div2::before{
            display: block;
            content:'';
            width: 150px;
            height: 150px;
            border-radius: 50%;
            top : 0;
            right: 50%;
            transform: translateX(50%);
            background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
        }
        .div2::after{
            display: block;
            content:'';
            width: 150px;
            height: 150px;
            border-radius: 50%;
            bottom: 0;
            left: 50%;
            transform: translateX(50%);
            background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
        }`;


let sty = document.querySelector('.style');
let doc = document.querySelector('.div1');
let n = 1;
let interval = setInterval.call(undefined,() => {
    doc.innerText = string1.substring(0,n);
    sty.innerText = string1.substring(0,n);
    window.scrollTo(0, 99999);
    if(n >= string1.length){
        clearInterval(interval);
        return;
    }
    n += 1;
},10)
