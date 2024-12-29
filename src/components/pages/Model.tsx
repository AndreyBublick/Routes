import React, {FC, useMemo} from 'react';
import {S} from "../_styles";
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {PATH} from "../../routes/routes";
import {pumaArr} from "./Puma";
import {abibasArr} from "./Abibas";

type PropsType = {};

export type ItemType= {
    id:string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
 type BrandType= keyof typeof crossBrands;


const crossBrands = {
    [PATH.ADIDAS]:adidasArr,
    [PATH.PUMA]:pumaArr,
    [PATH.ABIBAS]:abibasArr,
} as const;

const getArrShoes = (brand:string):ItemType[]=>{
    switch(`/${brand}`){
        case PATH.ADIDAS: {
            return adidasArr;
        }
        case PATH.PUMA: {
            return pumaArr;
        }
        case PATH.ABIBAS: {
            return abibasArr;
        }
        default:{
            return []
        }
    }
};

export const Model:FC<PropsType> = () => {

    const {Brand, idShoe,} = useParams<{Brand:BrandType,idShoe:string}>();


//todo нужно заварганить логику
    const shoe:ItemType = useMemo(()=>{

        const defaultValue = {id:'null',picture:'',model:'',collection:'',price:''};

        const shoes:ItemType[]|null = Brand ? crossBrands[Brand] : null;

        return shoes?.find(item => item.id === idShoe)||defaultValue;

    },[Brand,idShoe]);


    return (
        <div>
            <S.ImagesWrapper>
                {shoe.id!=='null' ? <img src={shoe.picture} alt=""/>:<h1>Модели такой нет у нас</h1>}
            </S.ImagesWrapper>
        </div>
    );
};

