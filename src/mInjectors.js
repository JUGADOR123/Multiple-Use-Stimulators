exports.mod = () => {
    logger.logInfo("[MOD] Multiple Use Stimulants");
    base = fileIo.readParsed(user.cache.items);
    let config = require("../config.json");
    for (let k in base) {
        let item = base[k];
        for (key in config.stims) {
            if (key == item._name) {
                item._props.MaxHpResource = config.stims[key];
                global._database.items[k] = item;
            }
        }
    }
    logger.logSuccess("[Mod] Stimulator Successfully multipled");
}