import { Artifact } from "../artifact";
import { assert, whatis } from "../utils";
import { ArtifactData } from "../data";

const keymap = {
    affix: <{ [key: string]: string }>{
        hp: "hp",
        atk: "atk",
        def: "def",
        hpp: "hp_",
        atkp: "atk_",
        defp: "def_",
        em: "eleMas",
        er: "enerRech_",
        hb: "heal_",
        cr: "critRate_",
        cd: "critDMG_",
        pyroDB: "pyro_dmg_",
        hydroDB: "hydro_dmg_",
        electroDB: "electro_dmg_",
        anemoDB: "anemo_dmg_",
        cryoDB: "cryo_dmg_",
        geoDB: "geo_dmg_",
        physicalDB: "physical_dmg_",
        dendroDB: "dendro_dmg_",
    },
};

export default {
    loads(json: string) {
        let good = JSON.parse(json);
        assert(typeof good == "object" && "artifacts" in good);
        assert(good.artifacts instanceof Array);
        let source = (good.source || "*") + "/good";
        let ret = [],
            allSetKeys = new Set(ArtifactData.setKeys);
        for (let a of good.artifacts) {
            if (a.rarity < 4) continue;
            if (!allSetKeys.has(a.setKey)) {
                console.warn(`Ignoring unrecognized artifact: ${a.setKey}`);
                continue;
            }
            let artifact = new Artifact({
                set: a.setKey,
                slot: a.slotKey,
                level: a.level,
                rarity: a.rarity,
                location: a.location,
                lock: a.lock,
                mainKey: whatis(a.mainStatKey, keymap.affix) as string,
                minors: (a.substats as any[]).map((x) => ({
                    key: whatis(x.key, keymap.affix),
                    value: x.value,
                })),
            });
            artifact.data.index = ret.length;
            artifact.data.source = source;
            // artifact.validate()
            ret.push(artifact);
        }
        return ret;
    },
    dumps(artifacts: Artifact[]) {
        let good = {
            format: "GOOD",
            version: 1,
            source: "",
            artifacts: <any[]>[],
        };
        for (let a of artifacts) {
            good.artifacts.push({
                setKey: a.set,
                slotKey: a.slot,
                level: a.level,
                rarity: a.rarity,
                lock: a.lock,
                location: a.location,
                mainStatKey: keymap.affix[a.mainKey],
                substats: a.minors.map((m) => ({
                    key: keymap.affix[m.key],
                    value: m.value,
                })),
            });
        }
        return JSON.stringify(good);
    },
};
