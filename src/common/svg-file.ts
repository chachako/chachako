import * as fs from "fs"
import {PathLike} from "fs"

/**
 * @author Chachako
 */
export type SvgFile = PathLike

export function getSvg(file: SvgFile): string {
    return fs.readFileSync(file, "utf-8")
}