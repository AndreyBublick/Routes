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

    const params = useParams();

    const shoe:ItemType = useMemo(()=>{

        const defaultValue = {id:'null',picture:'',model:'',collection:'',price:''};
        const shoes:ItemType[] = params.Brand ? getArrShoes(params.Brand) : [];

        return shoes.length>0 ? (shoes.find(item => item.id === params.idShoe)||defaultValue):defaultValue;

    },[params.Brand,params.idShoe]);


    return (
        <div>
            <S.ImagesWrapper>
                {shoe.id!=='null' ? <img src={shoe.picture} alt=""/>:<h1>Модели такой нет у нас</h1>}
            </S.ImagesWrapper>
        </div>
    );
};

