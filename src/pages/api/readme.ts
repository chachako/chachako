import {NextApiRequest, NextApiResponse} from 'next'
import {CatCard} from "../../cards/cat/card"
import {allCatCards} from "../../cards/cat/cards"

module.exports = (request: NextApiRequest, response: NextApiResponse) => response
    .setHeader("Content-Type", "image/svg+xml")
    .setHeader("Cache-Control", `s-maxage=1, stale-while-revalidate`)
    .send(getRandomCatCard().toSvg())

let lastCardIndex = 0

/**
 * Returns a random cat card.
 *
 * @author Chachako
 */
function getRandomCatCard(): CatCard {
    const randomIndex = Math.floor(Math.random() * allCatCards.length)
    if (randomIndex == lastCardIndex) return getRandomCatCard()
    lastCardIndex = randomIndex
    return allCatCards[randomIndex]
}