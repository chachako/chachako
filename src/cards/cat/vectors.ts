import {SvgFile} from "../../common/svg-file";

/**
 * @author Chachako
 */
export class CatCardVectors {
    constructor(
        readonly illustration: SvgFile,
        readonly kotlinCode: SvgFile,
        readonly rustCode: SvgFile,
    ) {
    }

    static fromDirectory(path: string): CatCardVectors {
        return new CatCardVectors(
            "./public/" + path + "/illustration.svg",
            "./public/" + path + "/kotlin.svg",
            "./public/" + path + "/rust.svg",
        );
    }
}