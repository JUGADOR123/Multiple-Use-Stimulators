exports.mod = () => {
    logger.logInfo("[MOD] Multiple Use Stimulants");
    base = fileIO.readParsed(db.user.cache.items);
    let config = require("../config.json");
    for (let item in base.data) {
        for (key in config.stims) {
            if (key == base.data[item]._name) {
                base.data[item]._props.MaxHpResource = config.stims[key];
                base.data[item]._props.hpResourceRate = 1;
            }
        }
    }
    fileIO.write(db.user.cache.items, base);
    logger.logSuccess("[Mod] Stimulator Successfully multipled");
}
