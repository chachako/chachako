/**
 * HEX or RGB or ARGB
 *
 * @author Chachako
 */
export type Color = string | [number, number, number] | [number, number, number, number];

export function resolveColor(color: Color, replaceAlpha: number = -1): any {
    if (typeof color === 'string') return color
    if (replaceAlpha != -1) {
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${replaceAlpha})`
    } else if (color.length === 4) {
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
    } else {
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`
    }
}