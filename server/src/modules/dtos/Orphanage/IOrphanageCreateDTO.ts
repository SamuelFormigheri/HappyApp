interface IImage{
    path: string;
}
export default interface IOrphanageCreateDTO{
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    whatsapp: string;
    images: IImage[];
}