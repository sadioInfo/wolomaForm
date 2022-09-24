import { faker } from "@faker-js/faker";

export const dataHouseConstructor = ({
    adress,
    utilInfo,
    section,
    numHouse,
    price,
    advance,
    bedroom,
    rating,
    mainImg,
    subImg,
    des
}) => ({
    id: faker.datatype.uuid(),
    adress,
    utilInfo,
    section,
    numHouse,
    price,
    advance,
    bedroom,
    rating,
    mainImg,
    subImg,
    des,
    createdAt: Date.now(),
})