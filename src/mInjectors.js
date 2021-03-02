exports.mod = () => {
    logger.logInfo("[MOD] Multiple Use Stimulants");
    base = fileIO.readParsed(global.db.user.cache.items);
    let config = require("../config.json");
    for (let item in base.data) {
        for (key in config.stims) {
            if (key == item._name) {
                item._props.MaxHpResource = config.stims[key];
                base.data[item]._props.hpResourceRate = 1;
                base.data[k] = item;
               
            }
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess("[Mod] Stimulator Successfully multipled");
}
