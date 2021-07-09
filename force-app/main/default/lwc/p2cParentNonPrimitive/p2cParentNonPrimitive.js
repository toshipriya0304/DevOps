import { LightningElement, api } from 'lwc';

export default class P2cParentNonPrimitive extends LightningElement {
    @ api carouselData = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First card",
            description: "First Description Toshi"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "Second card",
            description: "Second Description Toshi"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "Third card",
            description: "Third Description Toshi"
        }
    ];
}