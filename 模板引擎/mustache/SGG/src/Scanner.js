export default class Scanner {

    constructor(tempStr) {
        this.tempStr = tempStr;
        this.pos = 0;
        this.tail = tempStr;
    }

    //就是走过指定内容 没有返回值
    scan(tag) {
        if(this.tail.indexOf(tag) === 0){
            this.pos += tag.length;
            this.tail = this.tempStr.substring(this.pos);
        }
    }

    //指针扫描 直到遇到指定内容为止
    //并能够返回结束之前路过的文字
    scanUtil(stopTag) {
        const pos_backup = this.pos;
        while(this.tail.indexOf(stopTag) !== 0 && !this.eos()){
            this.pos ++;
            this.tail = this.tempStr.substr(this.pos);
        }

        return this.tempStr.substring(pos_backup, this.pos);
    }

    // 判断指针是否到头
    eos(){
        return this.pos >= this.tempStr.length;
    }
}