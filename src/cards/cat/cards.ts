import {CatCard} from "./card";
import {CatCardVectors} from "./vectors";
import {CatCardColors} from "./colors";

/**
 * @author Chachako
 */
const CatCatchingButterflyCard = new CatCard(
    CatCardVectors.fromDirectory("cat-catching-butterfly"),
    new CatCardColors(
        "#FCEEE6",
        "#785352",
        "#B18E79",
        [0, 0, 0, 0.05],
        "#DBC0AF",
        [132, 98, 78],
        "#DAC5B9",
        "#FFF8F3",
    ),
);

/**
 * @author Chachako
 */
const CatPlayingWithYarnCard = new CatCard(
    CatCardVectors.fromDirectory("cat-playing-with-yarn"),
    new CatCardColors(
        "#FBDADD",
        "#C15962",
        "#CA979B",
        [69, 47, 47, 0.05],
        "#E2B8BA",
        [140, 81, 87],
        "#DBBFC1",
        "#FFE4E7",
    ),
);

/**
 * @author Chachako
 */
const CatSleepingCard = new CatCard(
    CatCardVectors.fromDirectory("cat-sleeping"),
    new CatCardColors(
        "#FFEBCD",
        "#4F221A",
        "#A37269",
        [79, 34, 26, 0.05],
        "#D0BC9E",
        [104, 82, 50],
        "#DCCEB8",
        "#FFF3E2",
    ),
);

/**
 * @author Chachako
 */
const ConfusedCatCard = new CatCard(
    CatCardVectors.fromDirectory("confused-cat"),
    new CatCardColors(
        "#EBE5E1",
        "#5A361F",
        "#907869",
        [0, 0, 0, 0.05],
        "#B59E90",
        [125, 93, 72],
        "#D2C1B5",
        "#F4EFEC",
    ),
);

/**
 * @author Chachako
 */
const GrayCatCard = new CatCard(
    CatCardVectors.fromDirectory("gray-cat"),
    new CatCardColors(
        "#E8EFFE",
        "#555877",
        "#A2A6BE",
        [51, 54, 79, 0.05],
        "#BCC5DB",
        [85, 100, 133],
        "#C9CFDA",
        "#F3F7FF",
    ),
);

/**
 * @author Chachako
 */
export const allCatCards = [
    CatCatchingButterflyCard,
    CatPlayingWithYarnCard,
    CatSleepingCard,
    ConfusedCatCard,
    GrayCatCard,
];