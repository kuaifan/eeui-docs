module.exports = {

    leftExists(string, find, lower) {
        string += "";
        find += "";
        if (lower !== true) {
            string = string.toLowerCase();
            find = find.toLowerCase();
        }
        return (string.substring(0, find.length) === find);
    },

    savaToLocal(id, key, value, keyName) {
        try {
            if (typeof keyName === 'undefined') keyName = '__seller__';
            let seller = window.localStorage[keyName];
            if (!seller) {
                seller = {};
                seller[id] = {};
            } else {
                seller = JSON.parse(seller);
                if (!seller[id]) {
                    seller[id] = {};
                }
            }
            seller[id][key] = value;
            window.localStorage[keyName] = JSON.stringify(seller);
        } catch (e) {
        }
    },

    loadFromlLocal(id, key, def, keyName) {
        if (typeof keyName === 'undefined') keyName = '__seller__';
        let seller = window.localStorage[keyName];
        if (!seller) {
            return def;
        }
        seller = JSON.parse(seller)[id];
        if (!seller) {
            return def;
        }
        let ret = seller[key];
        return ret || def;
    },

    each(elements, callback) {
        let i, key;
        if (elements === null) {
            return elements;
        }
        if (elements.length) {
            if (typeof elements.length === "number") {
                for (i = 0; i < elements.length; i++) {
                    if (callback.call(elements[i], i, elements[i]) === false) return elements
                }
            }
        } else {
            for (key in elements) {
                if (!elements.hasOwnProperty(key)) continue;
                if (callback.call(elements[key], key, elements[key]) === false) return elements
            }
        }
        return elements
    },

    count(obj) {
        try {
            if (typeof obj === "undefined") {
                return 0;
            }
            if (typeof obj === "number") {
                obj+= "";
            }
            if (typeof obj.length === 'number') {
                return obj.length;
            } else {
                let i = 0, key;
                for (key in obj) {
                    i++;
                }
                return i;
            }
        }catch (e) {
            return 0;
        }
    },

    randNum(Min,Max){
        let Range = Max - Min;
        let Rand = Math.random();
        return Min + Math.round(Rand * Range); //四舍五入
    },

    /**
     * 插件分类
     * @return {*[]}
     */
    pluginsTypes() {
        return [
            {name:"component", title:"界面组件"},
            {name:"module", title:"功能模块"},
            {name:"media", title:"多媒体"},
            {name:"sensor", title:"传感器"},
            {name:"device", title:"设备访问"},
            {name:"network", title:"网络通信"},
            {name:"geolocation", title:"地理定位"},
            {name:"opensdk", title:"开放SDK"},
        ];
    },
};