exports.mod = () => {
    logger.logInfo("[MOD] Multiple Use Stimulants");
    base = fileIO.readParsed(global.db.user.cache.items);
    let config = require("../config.json");
    for (let k in base.data) {
        let item = base.data[k];
        for (key in config.stims) {
            if (key == item._name) {
                item._props.MaxHpResource = config.stims[key];
                base.data[k] = item;
               
            }
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess("[Mod] Stimulator Successfully multipled");
}
