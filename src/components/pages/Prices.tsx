import {FC, useCallback, useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import styles from '../Prices.module.css';

type Props = {};

export type Sneaker = {
    manufacturer: string,
    name: string,
    price: number,
    onSale: boolean,
};


const sneakers:Array<Sneaker> =[
    {
        manufacturer: "Adidas",
        name: "Adidas Yeezy Boost 350",
        price: 300,
        onSale: false
    },
    {
        manufacturer: "Adidas",
        name: "Adidas Ultraboost 21",
        price: 180,
        onSale: true
    },
    {
        manufacturer: "Puma",
        name: "Puma Suede Classic",
        price: 65,
        onSale: true
    },
    {
        manufacturer: "Puma",
        name: "Puma RS-X",
        price: 110,
        onSale: false
    },
    {
        manufacturer: "Abibas",
        name: "Abibas Alphabounce",
        price: 60,
        onSale: true
    }
] ;


export const Prices:FC<Props> = (props: Props) => {

    const [searchParams,setSearchParams] = useSearchParams();



    const [isSale,setIsSale] = useState<boolean|null>(null);
    const [filteredSneakers, setFilteredSneakers] = useState<Array<Sneaker>>([]);



    useEffect(() => {
        const  isSaleValue = searchParams.get('isSale');
        isSaleValue && setIsSale(JSON.parse(isSaleValue)) /*: setIsSale(null)*/;

    }, [searchParams]);



    useEffect(() => {

        isSale===null ? setFilteredSneakers(sneakers):
        setFilteredSneakers(()=>sneakers.filter(sneaker=>sneaker.onSale===isSale));

    }, [isSale]);










    const handleOnSale = ()=>{

        setSearchParams({isSale:`${!isSale}`});

        setIsSale(prev=>!prev);
    };

    function handleReset() {

        setSearchParams({});
        setIsSale(null);
    }


    return (
        <div>
            <button onClick={handleOnSale} className={styles.buttonStyle}>{!isSale?'On sale':'Off sale'}</button>
            <button onClick={handleReset} className={styles.buttonStyle}>Reset filter</button>

            <table className={styles.tableStyle}>
                <thead>
                <tr>
                    <th className={styles.thStyle}>Manufacturer</th>
                    <th className={styles.thStyle}>Name</th>
                    <th className={styles.thStyle}>Price</th>
                    <th className={styles.thStyle}>On Sale</th>
                </tr>
                </thead>
                <tbody>
                {filteredSneakers.map((sneaker, index) => (
                    <tr key={index}>
                        <td className={styles.tdStyle}>{sneaker.manufacturer}</td>
                        <td className={styles.tdStyle}>{sneaker.name}</td>
                        <td className={styles.tdStyle}>${sneaker.price}</td>
                        <td className={styles.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};