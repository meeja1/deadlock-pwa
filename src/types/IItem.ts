import { itemSlotType } from '@/constants/itemSlotType';

export interface IItem {
    id: string;
    title: string;
    type: TItemSlotType;
    image: string;
}

export type TItemSlotType = typeof itemSlotType[keyof typeof itemSlotType];